import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./javascript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"
import {canInsertSemi} from "./js_semi"
import {TemplateTokenizer} from "./template_string_inline_language";

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"]

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.embeddedParser = new TemplateTokenizer(conf);
    this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")",
                       tabSize: conf.tabSize, indentUnit: conf.indentUnit,
                       forceContent: true}
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

let meta = {
  electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
  blockCommentStart: "/*",
  blockCommentEnd: "*/",
  blockCommentContinue: " * ",
  lineComment: "//",
  fold: "brace",
  closeBrackets: "()[]{}''\"\"``"
}
for (let prop in meta) JSMode.prototype[prop] = meta[prop]

CodeMirror.registerHelper("wordChars", "google-javascript", /[\w$]/)

CodeMirror.defineMode("google-javascript", (conf, modeConf) => new JSMode(conf, modeConf))
