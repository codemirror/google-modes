import * as grammar from "./c.mode"
import {markLocals} from "./c_locals"

class CMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), stream, state)
  }

  indent(state) {
    let indent = 0
    for (let cx = state.context; cx; cx = cx.parent) {
      if (cx.name == "Block") indent += this.conf.indentUnit
    }
    return indent
  }
}

CodeMirror.defineMode("c", conf => new CMode(conf))
