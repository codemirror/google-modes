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

export function markLocals(type, stream, state) {
  if (type == "def") storeLocal(state.context, stream.current())
  else if (type == "variable" && isLocal(state.context, stream.current())) type = "variable-2"
  return type
}
