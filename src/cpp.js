import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as cpp from "./cpp.mode"
import {markLocals, markTypeLocals} from "./locals"
import {indent} from "./c_indent"

function constructorAhead(line, pos, _cx, nextLines) {
  let m1 = /^(\w+)\s*(::\s*(?:~?(\w+)|$)|$)/.exec(line.slice(pos))
  if (!m1) return false
  if (m1[3]) return m1[3] == m1[1]
  let m2 = (m1[2] ? /^\s*~?(\w+)/ : /^\s*::\s*~?(\w+)/).exec(nextLines && nextLines(1) || "")
  return m2 && m2[1] == m1[1]
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
  let open = rawStringOpen.exec(cx.startLine)
  if (!open) return false
  let closing = ")" + open[1] + '"'
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
