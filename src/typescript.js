import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./typescript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"
import {canInsertSemi} from "./js_semi"
import {TemplateTokenizer} from "./template_string_inline_language";

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"]

class TSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.templateTokenizer = new TemplateTokenizer(conf);
    this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  startState() {
    const state = super.startState();
    state.embeddedParserState = this.templateTokenizer.startState();
    return state;
  }

  copyState(state) {
    const copy = super.copyState(state);
    copy.embeddedParserState =
        this.templateTokenizer.copyState(state.embeddedParserState);
    return copy;
  }

  token(stream, state) {
    const templateTokenizerState = state.embeddedParserState;
    if (this.templateTokenizer
          .shouldInterceptTokenizing(templateTokenizerState)) {
      const {handled, style} = this.templateTokenizer
          .interceptTokenizing(stream, templateTokenizerState);
      if (handled) {
        return style;
      }
    }
    const style = super.token(stream, state);
    this.templateTokenizer.trackState(style, stream, templateTokenizerState);
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
for (let prop in meta) TSMode.prototype[prop] = meta[prop]

CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/)

CodeMirror.defineMode("google-typescript", (conf, modeConf) => new TSMode(conf, modeConf))
