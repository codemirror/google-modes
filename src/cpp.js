import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as cpp from "./cpp.mode"
import {markLocals, markTypeLocals} from "./locals"
import {indent} from "./c_indent"

function constructorAhead(line, pos) {
  let match = /^(\w+)::~?(\w+)/.exec(line.slice(pos))
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  let ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos)), skippedItem = false
  if (!ahead) return false
  while (!(cx.name == "Statement" || skippedItem && cx.name == "ClassItem")) {
    if (cx.name == "ClassItem") skippedItem = true
    cx = cx.parent
  }
  let className = /\b(?:class|struct)\s+(\w+)/.exec(cx.startLine.slice(cx.startPos))
  return className ? className[1] == ahead[1] : false
}

const rawStringOpen = /R"(.*?)\(/g

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos
  let closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"'
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

const scopes = ["Block", "FunctionDef"], typeScopes = ["Template"]

class CppMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(cpp, {
      predicates: {constructorAhead, localConstructorAhead, rawStringContinues}
    })
    this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  token(stream, state) {
    return markTypeLocals(markLocals(super.token(stream, state), scopes, stream, state), typeScopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (textAfter.charAt(0) == "#") return 0
    return indent(state, textAfter, line, this.indentConf)
  }
}

CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/
CppMode.prototype.blockCommentStart = "/*"
CppMode.prototype.blockCommentEnd = "*/"
CppMode.prototype.blockCommentContinue = " * "
CppMode.prototype.lineComment = "//"
CppMode.prototype.fold = "brace"

CodeMirror.defineMode("google-cpp", conf => new CppMode(conf))
