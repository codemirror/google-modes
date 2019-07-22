import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./kotlin.mode"
import {markLocals, markTypeLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionSpec", "LambdaBlock", "ClassSpec", "TypeAliasSpec", "ForStatement", "CatchFinally"]
const typeScopes = ["FunctionDeclaration", "ClassSpec", "TypeAliasSpec"]

class KotlinMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar)
    this.indentConf = {tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  token(stream, state) {
    return markTypeLocals(markLocals(super.token(stream, state), scopes, stream, state), typeScopes, stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  }
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
