import * as grammar from "./c.mode"
import {markLocals} from "./c_locals"
import {indent} from "./c_indent"

class CMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

CodeMirror.defineMode("c", conf => new CMode(conf))
