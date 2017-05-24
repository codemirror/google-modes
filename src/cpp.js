import * as cpp from "./cpp.mode"

function storeLocal(context, name) {
  for (let cx = context; cx; cx = cx.parent)
    if (cx.name == "Block" || cx.name == "FunctionDef")
      return (cx.locals || (cx.locals = [])).push(name)
}
function isLocal(context, name) {
  for (let cx = context; cx; cx = cx.parent)
    if (cx.locals && cx.locals.indexOf(name) > -1) return true
  return false
}

class CppMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(cpp)
    this.conf = conf
  }

  token(stream, state) {
    let inner = super.token(stream, state)
    if (inner == "def") storeLocal(state.context, stream.current())
    else if (inner == "variable" && isLocal(state.context, stream.current())) inner = "variable-2"
    return inner
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
