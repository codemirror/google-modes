import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./typescript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"
import {canInsertSemi} from "./js_semi"

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"]

class TSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.embeddedParser = new EmbeddedLanguageParser(conf);
    this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  startState() {
    const state = super.startState();
    state.embeddedParserState = this.embeddedParser.startState();
    return state;
  }

  copyState(state) {
    const copy = super.copyState(state);
    copy.embeddedParserState =
        this.embeddedParser.copyState(state.embeddedParserState);
    return copy;
  }

  token(stream, state) {
    const embeddedParserState = state.embeddedParserState;
    if (this.embeddedParser.shouldInterceptTokenizing(embeddedParserState)) {
      const {handled, style} = this.embeddedParser.interceptTokenizing(
          stream, embeddedParserState);
      if (handled) {
        return style;
      }
    }
    const style = super.token(stream, state);
    this.embeddedParser.trackState(
        style, stream, embeddedParserState);
    return markLocals(style, scopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (!textAfter) textAfter = line = "x" // Force getContextAt to terminate the statement, if needed
    return indent(state, textAfter, line, this.indentConf)
  }
}

class EmbeddedLanguageParser {
  constructor(config) {
    this.config = config;
  }

  /** @return {!EmbeddedLanguageParserState} */
  startState() {
    return {
      modeStack: [],
      parseAsEmbeddedLanguage: false,
      previousVariable: null,
    };
  }

  /**
   * @param {!EmbeddedLanguageParserState} state
   * @return {!EmbeddedLanguageParserState}
   */
  copyState(state) {
    return {
      modeStack: state.modeStack.map((embeddedMode) => embeddedMode.copy()),
      parseAsEmbeddedLanguage: state.parseAsEmbeddedLanguage,
      previousVariable: state.previousVariable,
    };
  }

  /**
   * @param {!EmbeddedLanguageParserState} state
   */
  shouldInterceptTokenizing(state) {
    const mode = state.modeStack[state.modeStack.length - 1];
    if (mode !== undefined && mode.mode !== null) {
      return true;
    }
    return false;
  }

  /**
   * @param {!Stream} stream
   * @param {!EmbeddedLanguageParserState} state
   */
  interceptTokenizing(stream, state) {
    // Check for an inline expression in the template literal.
    if (stream.match('${')) {
      stream.backUp(2);
      if (!this.isEscaped(stream, stream.pos - 2)) {
        // Hand things back to the normal parser.
        state.parseAsEmbeddedLanguage = false;
        return {handled: false};
      }
    }
    // Check for end of the template literal.
    // Note, here and above. First check for the escape, then check
    //   to see if we're escaped. That avoids doing exponential work in
    //   the case where there's a long sequence of backslashes that the
    //   inner parser consumes character by character.
    if (stream.peek() === '`' && !this.isEscaped(stream, stream.pos)) {
      return {handled: false};
    }
    const {mode, state: innerState} =
        state.modeStack[state.modeStack.length - 1];
    const style = mode.token(stream, innerState);
    this.backupIfEmbeddedParserOvershotClose(stream);
    return {handled: true, style};
  }

  /**
   * @param {string} style
   * @param {!Stream} stream
   * @param {!EmbeddedLanguageParserState} state
   */
  trackState(style, stream, state) {
    const embeddedMode = state.modeStack[state.modeStack.length - 1];
    if (!embeddedMode || embeddedMode.kind === 'inline-expression') {
      this.trackStateNotInTemplate(style, stream, state, embeddedMode);
    } else {
      this.trackStateInTemplate(style, stream, state, embeddedMode);
    }
    if (style === 'variable') {
      state.previousVariable = stream.current();
    } else {
      state.previousVariable = null;
    }
  }

  /**
   * @param {string} style
   * @param {!Stream} stream
   * @param {!EmbeddedLanguageParserState} state
   * @param {?EmbeddedMode} embeddedMode
   */
  trackStateNotInTemplate(style, stream, state, embeddedMode) {
    // Has the inline expression represented by embeddedMode just ended?
    if (embeddedMode && style === 'string-2' &&
        stream.current().startsWith('}')) {
      debugger;
      state.modeStack.pop();
      const newEmbeddedMode = state.modeStack[state.modeStack.length - 1];
      if (newEmbeddedMode && newEmbeddedMode.mode) {
        state.parseAsEmbeddedLanguage = true;
      }
      // The JS parser should only consume the } at this point.
      stream.backUp(stream.current().length - 1);
      return;
    }
    // Are we starting a new template?
    if (style === 'string-2' &&
      stream.current().startsWith('`')) {
      debugger;
      const mode = this.getModeForTemplateTag(state.previousVariable);
      const kind = 'template';
      if (mode) {
        // unparse everything except the opening `
        stream.backUp(stream.current().length - 1);
        state.modeStack.push(new EmbeddedMode(
          kind,
          mode,
          CodeMirror.startState(mode),
        ));
        state.parseAsEmbeddedLanguage = true;
      } else {
        state.modeStack.push(new EmbeddedMode(kind, null, null));
      }
    }
  }

  /**
   * @param {string} style
   * @param {!Stream} stream
   * @param {!EmbeddedLanguageParserState} state
   * @param {!EmbeddedMode} embeddedMode
   */
  trackStateInTemplate(style, stream, state, embeddedMode) {
    // Is the current template ending?
    if (style === 'string-2' && stream.current().endsWith('`') &&
        !this.isEscaped(stream.pos - 1)) {
      debugger;
      state.modeStack.pop();
      return;
    }

    // Are we starting a new inline expression?
    if (style === 'string-2' && stream.current().endsWith('${') &&
        !this.isEscaped(stream.pos - 2)) {
      debugger;
      state.modeStack.push(new EmbeddedMode('inline-expression', null, null));
      return;
    }
  }

  /**
   * Inside of an inline template, we've let the inner language parser consume
   * a token. However, it can't be allowed to consume text that actually
   * indicates the end of that section of template literal string. If it has
   * back up to right beforehand.
   *
   * @private
   * @param {!Stream} stream
   */
  backupIfEmbeddedParserOvershotClose(stream) {
    const cur = stream.current();
    let start = 0;
    while(true) {
      const closingIdx = cur.slice(start).search(/`|\$\{/);
      if (closingIdx === -1) {
        // no more potential escapes found, bail.
        return;
      }
      const amountToBackUp = cur.length - (closingIdx + start);
      const locationOfEarlyExit = stream.pos - amountToBackUp;
      const escaped = this.isEscaped(stream, locationOfEarlyExit);
      if (!escaped) {
        // Found a real early exit. Bail out.
        stream.backUp(cur.length - closingIdx);
        return;
      }
      start = closingIdx;
    }
  }

  /**
   * Walks backwards from the given position in the stream looking for
   * backslashes. Returns true if there are an odd number, and so the given
   * position is string-escaped, and false if there are an even number.
   *
   * @param {!Stream} stream
   * @param {number} start
   */
  isEscaped(stream, start) {
    let escaped = false;
    var idx = start;
    while(idx > 0) {
      if (stream.string[idx - 1] !== '\\') {
        break;
      }
      escaped = !escaped;
    }
    return escaped;
  }

  /**
   * @param {string|null} templateTag
   * @private
   */
  getModeForTemplateTag(templateTag) {
    if (!templateTag) {
      return null;
    }
    const modeSpecs = [`google-${templateTag}`, `${templateTag}`];
    // build pipeline does not support for/of currently.
    for (let i = 0; i < modeSpecs.length; i++) {
      const mode = CodeMirror.getMode(this.config, modeSpecs[i]);
      if (mode && mode.name !== 'null') {
        return mode;
      }
    }
    return null;
  }
}

class EmbeddedMode {
  /**
   * @param {string} kind
   * @param {?CodeMirror.Mode} mode
   * @param {?} state
   */
  constructor(kind, mode, state) {
    /** @type {string} Either 'template' or 'inline-expression' */
    this.kind = kind;
    /**
     * @type {?CodeMirror.Mode} If defined, the mode to parse
     *   the current template with. kind must be 'template' if this is defined.
     */
    this.mode = mode;
    /** @type {?} The state object for this.mode. */
    this.state = state;
  }

  copy() {
    if (!this.mode) {
      return new EmbeddedMode(this.kind, null, null);
    }
    return new EmbeddedMode(
        this.kind, this.mode, CodeMirror.copyState(this.mode, this.state))
  }
}

/** @record */
class EmbeddedLanguageParserState {
  constructor() {
    /**
     * A stack of language modes. Last in, first out.
     *
     * This must be a stack to handle cases like:
     *     html`<div>${spans.map(s => html`<span>${s}</span>`}`;
     *
     * @type {Array<EmbeddedMode}
     */
    this.modeStack;
    // TODO(rictic): is parseAsEmbeddedLanguage at all necessary?
    /**
     * While true, we're inside an embedded language, and should defer
     * to that language's parser. See interceptTokenizing().
     *
     * @type {boolean}
     */
    this.parseAsEmbeddedLanguage;
    /**
     * Used to figure out the tag name of tagged template literals, to
     * infer the inline language.
     *
     * @type {null|string}
     */
    this.previousVariable;
  }
}

/** @record */
class Stream {
  /**
   * Returns the string value of the currently matched token.
   *
   * Can be called during tokenizing, in which case it returns what's been
   * consumed so far.
   *
   * @return {string}
   */
  current() {}

  /**
   * Unconsumes `n` characters of input from the current token.
   *
   * @param {number} n
   */
  backUp(chars) {}

  /**
   * Tries to consume text matching the given value. Returns true if successful.
   *
   * @param {string|RegExp} v
   * @return {boolean}
   */
  match(v) {}

  constructor() {
    /** @type {string} */
    this.string;
  }
}


let meta = {
  electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
  blockCommentStart: "/*",
  blockCommentEnd: "*/",
  blockCommentContinue: " * ",
  lineComment: "//",
  fold: "brace",
  closeBrackets: "()[]{}''\"\"``"
}
for (let prop in meta) TSMode.prototype[prop] = meta[prop]

CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/)

CodeMirror.defineMode("google-typescript", (conf, modeConf) => new TSMode(conf, modeConf))
