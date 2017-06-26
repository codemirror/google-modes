import * as grammar from "./python.mode"
import {markLocals} from "./locals"

const scopes = ["LambdaDef", "FuncDef", "ClassDef"]
const allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "SubScript"]

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

function aligned(cx) {
  return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
}

function lineCol(line, pos, config) {
  let col = 0
  for (let i = 0; i < pos; i++)
    col += line.charCodeAt(i) == 9 ? config.tabSize - (col % config.tabSize) : 1
  return col
}

function lineIndent(line, config) {
  return lineCol(line, /^\s*/.exec(line)[0].length, config)
}

const bracketed = {
  ObjectLiteral: "}",
  ArrayLiteral: "]", SubScript: "]",
  ParamList: ")", ArgList: ")", ParenExpr: ")"
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) return 0
    if (cx.name == "Statement") return lineIndent(cx.startLine, config)
  }
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    if (curLine != cx.startLine && aligned(cx))
      return lineCol(cx.startLine, cx.startPos, config) + 1

    let closed = textAfter && textAfter.charAt(0) == brack
    let flat = closed && brack == "}" || curLine == cx.startLine
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "indentedBody") {
    return statementIndent(cx, config) + config.indentUnit
  } else {
    return findIndent(cx.parent, textAfter, curLine, config) +
      ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
  }
}

class PythonMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {maySkipNewline, stillIndented}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  }
}

CodeMirror.defineMode("python", conf => new PythonMode(conf))
