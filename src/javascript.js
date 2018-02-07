import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./javascript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"]

function canInsertSemi(string, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let ch = string.charCodeAt(i)
    if (ch === 10) break
    if (ch !== 32 && ch !== 9) return false
  }
  return true
}

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (!textAfter) textAfter = line = "x" // Force getContextAt to terminate the statement, if needed
    return indent(state, textAfter, line, this.conf)
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

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/)

CodeMirror.defineMode("google-javascript", (conf, modeConf) => new JSMode(conf, modeConf))
