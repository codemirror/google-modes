import * as cpp from "./cpp.mode"
import {markLocals} from "./c_locals"

function constructorAhead(line, pos) {
  let match = /^(\w+)::~?(\w+)/.exec(line.slice(pos))
  return match && match[1] == match[2]
}

class CppMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(cpp, {
      predicates: {constructorAhead}
    })
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

CodeMirror.defineMode("c++", conf => new CppMode(conf))
