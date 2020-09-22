import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./clif.mode"
import {markLocals} from "./locals"

const scopes = ["FuncDef", "ClassDef"]

const allowNewline = [
    "Bases", "Params", "Types", "QualifiedTypes", "TypeParams",
]

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

const bracketed = {
  Bases: ")", Params: ")",
  Types: ">", QualifiedTypes: ">", TypeParams: ">",
}


function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    if (curLine != cx.startLine && aligned(cx)) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1
    }

    let closed = textAfter && textAfter.charAt(0) == brack
    let flat = closed || curLine == cx.startLine
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "indentedBody") {
    for (;; cx = cx.parent) {
      if (!cx) return config.indentUnit
      if (cx.name == "Statement") return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit
    }
  } else {
    return findIndent(cx.parent, textAfter, curLine, config) +
      (cx.name == "Statement" && curLine != cx.startLine ? 2 * config.indentUnit : 0)
  }
}


class ClifMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {maySkipNewline, stillIndented},
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

ClifMode.prototype.electricInput = /^\s*\(\)<>$/
ClifMode.prototype.closeBrackets = {triples: "'\"", pairs: "()<>''\"\"``",}
ClifMode.prototype.lineComment = "#"
ClifMode.prototype.fold = "indent"

CodeMirror.defineMode("google-clif", conf => new ClifMode(conf))
CodeMirror.defineMIME("text/x-clif", {name: "google-clif"})
