import * as grammar from "./c.mode"

class CMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.conf = conf
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
