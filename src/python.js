import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./python.mode"
import {markLocals} from "./locals"

const scopes = ["LambdaDef", "FuncDef", "ClassDef"]
const allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "SubScript", "DictProp"]

function maySkipNewline(_line, _pos, cx) {
  return cx && allowNewline.indexOf(cx.name) > -1
}

function countIndent(line, pos) {
  let count = 0
  for (let i = pos - 1; i >= 0; i--) {
    let ch = line.charCodeAt(i)
    if (ch === 32) count++
    else if (ch === 9) count += 4
    else break
  }
  return count
}

function stillIndented(line, pos, cx) {
  while (cx && cx.name != "Statement") cx = cx.parent
  return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
}

function isCompLocal(line, pos) {
  let id = /\w*$/.exec(line.slice(0, pos))[0]
  let forDecl = /\s*for\s*(\w+)/.exec(line.slice(pos))
  return forDecl ? forDecl[1] == id : false
}

function aligned(cx) {
  return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
}

const bracketed = {
  ObjectLiteral: "}",
  ArrayLiteral: "]", SubScript: "]",
  ParamList: ")", ArgList: ")", ParenExpr: ")"
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    if (curLine != cx.startLine && aligned(cx))
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1

    let closed = textAfter && textAfter.charAt(0) == brack
    let flat = closed && brack == "}" || curLine == cx.startLine
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "indentedBody") {
    for (;; cx = cx.parent) {
      if (!cx) return config.indentUnit
      if (cx.name == "Statement") return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit
    }
  } else {
    return findIndent(cx.parent, textAfter, curLine, config) +
      ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
  }
}

function pythonMarkLocals(token, stream, state) {
  let marked = markLocals(token, scopes, stream, state, true)
  if (token == "def") {
    let cx = state.context
    while (cx && scopes.indexOf(cx.name) == -1) cx = cx.parent
    if (cx && cx.name == "ClassDef") marked = "def property"
  }
  return marked
}  

class PythonMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {maySkipNewline, stillIndented, isCompLocal}
    })
    this.conf = conf
  }

  token(stream, state) {
    return pythonMarkLocals(super.token(stream, state), stream, state)
  }

  indent(state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  }
}

PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/
PythonMode.prototype.closeBrackets = {triples: "'\""}
PythonMode.prototype.lineComment = "#"
PythonMode.prototype.fold = "indent"

CodeMirror.defineMode("google-python", conf => new PythonMode(conf))
