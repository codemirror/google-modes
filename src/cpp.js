import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as cpp from "./cpp.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

function constructorAhead(line, pos) {
  let match = /^(\w+)::~?(\w+)/.exec(line.slice(pos))
  return match && match[1] == match[2]
}

const scopes = ["Block", "FunctionDef"]

class CppMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(cpp, {
      predicates: {constructorAhead}
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

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/
CppMode.prototype.blockCommentStart = "/*"
CppMode.prototype.blockCommentEnd = "*/"
CppMode.prototype.lineComment = "//"
CppMode.prototype.fold = "brace"

CodeMirror.defineMode("google-cpp", conf => new CppMode(conf))
