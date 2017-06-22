function lineCol(line, pos, config) {
  let col = 0
  for (let i = 0; i < pos; i++)
    col += line.charCodeAt(i) == 9 ? config.tabSize - (col % config.tabSize) : 1
  return col
}

function lineIndent(line, config) {
  return lineCol(line, /^\s*/.exec(line)[0].length, config)
}

function hasSubStatement(context) {
  let m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos))
  return m && m[1]
}

function aligned(cx) {
  return !/^\s*(\/\/.*)?$/.test(cx.startLine.slice(cx.startPos + 1))
}

export function indent(state, textAfter, line, config) {
  let next = textAfter && textAfter.charAt(0)
  if (next == "#") return 0
  let add = 0, addedForLine = null
  let direct = state.context && state.context.name != "DeclType"

  for (let cx = state.contextAt(line, line.length - textAfter.length); cx; cx = cx.parent) {
    if (cx.name == "string" || cx.name == "comment") {
      return CodeMirror.Pass
    } else if (cx.name == "Block" || cx.name == "BlockOf" || cx.name == "ClassBody" || cx.name == "ObjectLiteral") {
      if (aligned(cx)) return lineCol(cx.startLine, cx.startPos, config) + (next == "}" ? 0 : 1 + add)
      else if (next == "}") next = null
      else if (/^(public|private|protected)\s*:/.test(textAfter)) add += 1
      else { add += config.indentUnit; addedForLine = cx.startLine }
      if (cx.name == "Block" && cx.parent && cx.parent.name == "Statement") cx = cx.parent // Skip wrapping statement scope
      direct = false
    } else if (cx.name == "Statement") {
      let startIndent = lineIndent(cx.startLine, config), sub
      if (direct) {
        if (hasSubStatement(cx))
          return startIndent + (/^else\b/.test(textAfter) ? 0 : config.indentUnit)
        if (addedForLine != cx.startLine && next != "{")
          add += 2 * config.indentUnit
      }
      return startIndent + add
    } else if (direct && (cx.name == "ParamList" || cx.name == "ArgList" || cx.name == "ParenExpr" ||
                          cx.name == "TemplateArgs" || cx.name == "ArrayLiteral" || cx.name == "ForSpec")) {
      let closed = next == (cx.name == "ArrayLiteral" ? "]" : ")")
      if (aligned(cx))
        return lineCol(cx.startLine, cx.startPos, config) +
          (closed ? 0 : 1 + add)
      if (!closed && addedForLine != cx.startLine) {
        add += 2 * config.indentUnit
        addedForLine = cx.startLine
      }
      if (cx.name == "ParamList" || closed) direct = false
    } else if (cx.name == "InitializerList") {
      add += 2
    }
  }
  return add
}
