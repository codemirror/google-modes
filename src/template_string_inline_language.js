/**
 * @fileoverview Provides a class that facilitates tokenizing JavaScript tagged
 * template string contents as a separate, embedded language.
 *
 * Consider code like:
 *     html`<div>Hello ${'world'}</div>`
 *
 * For a good editing experience, the contents of that template string should
 * be syntax highlighted as HTML.
 *
 * Doing this correctly in the limit is more difficult than it appears however,
 * because arbitrary JS expressions are allowed inline, up to and including
 * nesting of templates. This is even used in the real world. Consider:
 *
 * html`
 *   <style>
 *     ${css`
 *       li {
 *         color: green;
 *       }
 *     `}
 *   </style>
 *   <ul>
 *     ${items.map(item => html`<li>${item}</li>`)}
 *   </ul>
 * `
 */

/**
 * Use within a containing tokenizer to defer tokenizing the contents of some
 * JavaScript tagged template literals to other CodeMirror language modes.
 *
 * This tokenizer is intended to be used from a JavaScript tokenizer, or
 * one very similar to JavaScript, like TypeScript. It assumes that tagged
 * template literals are tagged with the style 'string-2'.
 *
 * This class maintains its own state. Its state needs to be stored as part
 * of the containing tokenizer's state, and copied when it is copied. See
 * startState and copyState.
 *
 * Design goals:
 *   - Minimally interfere with containing tokenizer, and make minimal
 *     assumptions about its behavior.
 *   - Have no impact on tokenizing code that does not use tagged template
 *     literals, or tagged template literals that do not correspond to other
 *     languages
 *   - Defer tokenizing the contents of template strings to embedded language
 *     modes but begin, end, and interrupt template strings according to the
 *     JavaScript grammar.
 *   - Parse correctly even for deeply nested combinations of literals inside
 *     of literals.
 *
 * Known limitations:
 *   - Embedded tokenizers will see JavaScript string escape sequences
 *     (like \`, \\, etc), though semantically they should see the unescaped
 *     values. This can confuse embedded tokenizers, though that confusion
 *     will not spread outside of the template string.
 */
export class TemplateTokenizer {
  constructor(config) {
    this.config = config;
  }

  /** @return {!State} */
  startState() {
    return new State();
  }

  /**
   * @param {!State} state
   * @return {!State}
   */
  copyState(state) {
    return state.copy();
  }

  /**
   * If true, the containing tokenizer should defer to `interceptTokenizing`.
   *
   * @param {!State} state
   */
  shouldInterceptTokenizing(state) {
    const templateState = state.currentTemplateState;
    if (templateState !== undefined && templateState.mode !== null) {
      return true;
    }
    return false;
  }

  /**
   * Defer to the embedded language tokenizer, but interrupt it for inline
   * exprssions and the end of the template literal.
   *
   * This MUST only be called if shouldInterceptTokenizing is true for the
   * current state.
   *
   * shouldInterceptTokenizing is separated out into its own
   * method, even though this method also tells the containing tokenizer
   * when it should defer to the embedded language because this method returns
   * an object, and we don't want to allocate an extra object for each token
   * consumed.
   *
   * @param {!Stream} stream
   * @param {!State} state
   * @return {{handled: boolean, state: string|null}} If handled is true,
   *     then the TS/JS tokenizer should not do any tokenizing of its own,
   *     and return state. If handled is false, then this method has consumed
   *     no input, and instead the TS/JS tokenizer should consume input instead.
   */
  interceptTokenizing(stream, state) {
    // Check for an inline expression in the template literal.
    if (stream.match('${')) {
      stream.backUp(2);
      if (!this.isEscaped(stream, stream.pos - 2)) {
        // Hand things back to the normal tokenizer.
        return {handled: false};
      }
    }
    // Check for end of the template literal.
    if (stream.peek() === '`' && !this.isEscaped(stream, stream.pos)) {
      // Hand things back to the normal tokenizer.
      return {handled: false};
    }
    // Important note for the above two early exit checks. We must first check
    //   for the end characters, then check to see if they were escaped.
    //   That avoids doing exponential work in the case where there's a long
    //   sequence of backslashes that the embedded tokenizer consumes character
    //   by character.

    const {mode, state: innerState} = state.currentTemplateState;
    const style = mode.token(stream, innerState);
    this.backupIfEmbeddedTokenizerOvershot(stream);
    return {handled: true, style};
  }

  /**
   * Called after the containing tokenizer has consumed a token, but before
   * that consumption is finalized.
   *
   * We keep track of entering and exiting template literals and inline
   * expressions in template literals. In some cases, we reduce the
   * amount of text consumed by the containing tokenizer, so that an embedded
   * language has the opportunity to tokenize the contents of a template
   * string that it controls.
   *
   * @param {string|null} style
   * @param {!Stream} stream
   * @param {!State} state
   */
  trackState(style, stream, state) {
    if (!style) {
      return;
    }
    const templateState = state.currentTemplateState;
    if (!templateState || templateState.kind === 'inline-expression') {
      this.trackStateNotInTemplate(style, stream, state, templateState);
    } else {
      this.trackStateInTemplate(style, stream, state, templateState);
    }
    if (style === 'variable') {
      state.previousVariable = stream.current();
    } else {
      state.previousVariable = null;
    }
  }

  /**
   * Maintain state.templateStack while not directly inside of a template
   * literal.
   *
   * We could be inside of an inline expression in a template literal however.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {?TemplateState} templateState
   */
  trackStateNotInTemplate(style, stream, state, templateState) {
    // Has the inline expression represented by embeddedMode just ended?
    if (templateState && style === 'string-2' &&
        stream.current().startsWith('}')) {
      state.templateStack.pop();
      // The containing tokenizer should only consume the } at this point.
      stream.backUp(stream.current().length - 1);
      return;
    }
    // Are we starting a new template?
    if (style === 'string-2' &&
      stream.current().startsWith('`')) {
      const mode = this.getModeForTemplateTag(state.previousVariable);
      const kind = 'template';
      if (mode) {
        // Nothing except the opening ` should be consumed.
        stream.backUp(stream.current().length - 1);
        state.templateStack.push(new TemplateState(
          kind,
          mode,
          CodeMirror.startState(mode),
        ));
      } else {
        state.templateStack.push(new TemplateState(kind, null, null));
      }
    }
  }

  /**
   * Maintain state.templateStack while in the contents of a template literal.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {!TemplateState} templateState
   */
  trackStateInTemplate(style, stream, state, templateState) {
    // Is the current template ending?
    if (style === 'string-2' && stream.current().endsWith('`') &&
        !this.isEscaped(stream.pos - 1)) {
      state.templateStack.pop();
      return;
    }

    // Are we starting a new inline expression?
    if (style === 'string-2' && stream.current().endsWith('${') &&
        !this.isEscaped(stream.pos - 2)) {
      state.templateStack.push(
          new TemplateState('inline-expression', null, null));
      return;
    }
  }

  /**
   * Inside of an inline template, we've let the embedded language tokenizer
   * consume a token. However, it can't be allowed to consume text that actually
   * indicates the end of that section of template literal string. If it has
   * back up to right beforehand.
   *
   * @private
   * @param {!Stream} stream
   */
  backupIfEmbeddedTokenizerOvershot(stream) {
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
   * @private
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
   * @private
   * @param {string|null} templateTag
   */
  getModeForTemplateTag(templateTag) {
    if (!templateTag) {
      return null;
    }
    // There are likely more customizations that would be nice here.
    // Would be a good place for configuration if so.
    if (templateTag === 'htm') {
      templateTag = 'html';
    }
    const modeSpecs = [`google-${templateTag}`, `${templateTag}`];
    // Note: the google-modules build pipeline does not currently support
    //   for/of.
    for (let i = 0; i < modeSpecs.length; i++) {
      const mode = CodeMirror.getMode(this.config, modeSpecs[i]);
      if (mode && mode.name !== 'null') {
        return mode;
      }
    }
    return null;
  }
}

class State {
  constructor(templateStack = [], previousVariable = null) {
    /**
     * A stack to keep track of the nesting of templates and inline expressions.
     *
     * Whenever we enter a template, we push a TemplateState with kind
     * 'template' on the stack. Whenever, inside of a template, we enter
     * an inline expression i.e. ${}, we push a TemplateState with kind
     * 'inline-expression' on the stack. Likewise, as we leave templates and
     * inline expressions we pop them off.
     *
     * A template that is being tokenized with an embedded CodeMirror mode will
     * have a `mode` and its `state` on its associated TemplateState.
     *
     * @type {Array<!TemplateState>}
     */
    this.templateStack = templateStack;
    /**
     * Used to figure out the tag name of tagged template literals, to
     * infer the inline language.
     *
     * @type {null|string}
     */
    this.previousVariable = previousVariable;
  }

  copy() {
    return new State(
        this.templateStack.map((t) => t.copy()), this.previousVariable);
  }

  /** @return {!TemplateState | undefined} */
  get currentTemplateState() {
    return this.templateStack[this.templateStack.length - 1];
  }
}

class TemplateState {
  /**
   * @param {string} kind
   * @param {?CodeMirror.Mode} mode
   * @param {?} state
   */
  constructor(kind, mode, state) {
    /** @type {string} Either 'template' or 'inline-expression' */
    this.kind = kind;
    /**
     * @type {?CodeMirror.Mode} If defined, the mode to tokenize
     *   the current template with. kind must be 'template' if this is defined.
     */
    this.mode = mode;
    /** @type {?} The state object for this.mode. */
    this.state = state;
  }

  copy() {
    if (!this.mode) {
      return new TemplateState(this.kind, null, null);
    }
    return new TemplateState(
        this.kind, this.mode, CodeMirror.copyState(this.mode, this.state))
  }
}


/**
 * Just a basic type declaration describing a few parts of the CodeMirror stream
 * API. Neither complete nor canonical.
 *
 * @record
 */
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

  /**
   * Returns the next unconsumed character.
   *
   * @return {string}
   */
  peek() {}


  constructor() {
    /** @type {string} */
    this.string;
  }
}
