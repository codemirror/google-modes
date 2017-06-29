import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./javascript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef", "ArrowFunc"]

function startOfLine(string, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let ch = string.charCodeAt(i)
    if (ch === 10) break
    if (ch !== 32 && ch !== 9) return false
  }
  return true
}

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {startOfLine}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (!textAfter) textAfter = line = "x"
    return indent(state, textAfter, line, this.conf)
  }
}

let meta = {
  electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
  blockCommentStart: "/*",
  blockCommentEnd: "*/",
  lineComment: "//",
  fold: "brace",
  closeBrackets: "()[]{}''\"\"``",
}
for (let prop in meta) JSMode.prototype[prop] = meta[prop]

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/)

CodeMirror.defineMode("javascript", conf => new JSMode(conf))

CodeMirror.defineMIME("text/javascript", "javascript")
CodeMirror.defineMIME("application/javascript", "javascript")
