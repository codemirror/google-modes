import * as grammar from "./javascript.mode"
import {markLocals} from "./c_locals"
import {indent} from "./c_indent"

function startOfLine(line, pos) {
  return !/\S/.test(line.slice(0, pos))
}

class JSMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {startOfLine}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

CodeMirror.defineMode("javascript", conf => new JSMode(conf))
