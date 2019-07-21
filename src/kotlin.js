import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./kotlin.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDeclaration", "Lambda", "FunctionExpression", "ForStatement"]

class KotlinMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {noNL}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

function noNL(string, pos) {
  return /\S/.test(string.slice(0, pos))
}

let meta = {
  electricInput: /^\s*[{}]$/,
  blockCommentStart: "/*",
  blockCommentEnd: "*/",
  blockCommentContinue: " * ",
  lineComment: "//",
  fold: "brace",
  closeBrackets: "()[]{}''\"\"``"
}
for (let prop in meta) KotlinMode.prototype[prop] = meta[prop]

CodeMirror.defineMode("google-kotlin", (conf, modeConf) => new KotlinMode(conf, modeConf))
