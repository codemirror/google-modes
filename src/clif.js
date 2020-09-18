import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./clif.mode"
import {markLocals} from "./locals"

const allowNewline = [
  "ParamList",
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

class ClifMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {maySkipNewline, stillIndented},
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), stream, state)
  }

  indent(state, textAfter, line) {
    // TODO(slebedev): Not currently supported.
    return CodeMirror.Pass
  }
}

ClifMode.prototype.electricInput = /^\s*\(\)<>$/
ClifMode.prototype.closeBrackets = {triples: "'\"", pairs: "()<>''\"\"``",}
ClifMode.prototype.lineComment = "#"

CodeMirror.defineMode("google-clif", conf => new ClifMode(conf))
