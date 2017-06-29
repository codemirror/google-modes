import * as grammar from "./javascript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef", "ArrowFunc"]

function startOfLine(string, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let ch = string.charCodeAt(i)
    if (ch === 10) break
    if (ch !== 32 && ch !== 9) return false
  }
  return true
}

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {startOfLine}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (!textAfter) textAfter = line = "x"
    return indent(state, textAfter, line, this.conf)
  }
}

CodeMirror.defineMode("javascript", conf => new JSMode(conf))
