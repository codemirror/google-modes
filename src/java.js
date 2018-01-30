import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./java.mode"
import {markLocals, markTypeLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef", "Lambda"]
const typeScopes = ["ClassItem", "Statement", "AnnotationTypeItem"]

class JavaMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.indentConf = {align: false, tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  token(stream, state) {
    return markTypeLocals(markLocals(super.token(stream, state), scopes, stream, state), typeScopes, stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  }
}

JavaMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/
JavaMode.prototype.blockCommentStart = "/*"
JavaMode.prototype.blockCommentEnd = "*/"
JavaMode.prototype.blockCommentContinue = " * "
JavaMode.prototype.lineComment = "//"
JavaMode.prototype.fold = "brace"

CodeMirror.defineMode("google-java", conf => new JavaMode(conf))
