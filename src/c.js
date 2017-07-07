import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./c.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef"]

class CMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

CMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/
CMode.prototype.blockCommentStart = "/*"
CMode.prototype.blockCommentEnd = "*/"
CMode.prototype.lineComment = "//"
CMode.prototype.fold = "brace"

CodeMirror.defineMode("google-c", conf => new CMode(conf))
