import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./javascript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"
import {canInsertSemi} from "./js_semi"

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"]

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
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
