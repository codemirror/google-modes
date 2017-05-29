/*
Base indentation unit for blocks is 2 spaces. Also for braceless
statement in for/if/etc.

Wrapped things in parentheses aligned if starting on paren line, four
spaces from base otherwise. Also for braced initializers.

Public/private/etc indented one unit from class body.

Preprocessor directives not indentet.

Initializer lists indented 4, then 6 spaces.

Namespace bodies not indented.

Nothing about continued statements (maybe try to glean from tests).
Looks like 4 spaces.
*/

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
  return /^(if|for|do|while)\b/.test(context.startLine.slice(context.startPos))
}

export function indent(state, textAfter, config) {
  let add = 0, close = textAfter && textAfter.charAt(0), direct = true
  for (let cx = state.context; cx; cx = cx.parent) {
    if (cx.name == "Block" || cx.name == "BlockOf" || cx.name == "ClassBody") {
      direct = false
      if (close == "}") close = null
      else add += config.indentUnit
    } else if (cx.name == "Statement") {
      let startIndent = lineIndent(cx.startLine, config)
      if (direct && hasSubStatement(cx)) return startIndent + (/^else\b/.test(textAfter) ? 0 : config.indentUnit)
      return startIndent + add + (direct ? 2 * config.indentUnit : 0)
    } else if (cx.name == "ParamList" || cx.name == "ArgList" || cx.name == "ParenExpr") {
      direct = false
      if (!/^\s*(\/\/.*)?$/.test(cx.startLine.slice(cx.startPos)))
        return lineCol(cx.startLine, cx.startPos, config) + (close == ")" ? 0 : 1)
      add += 2 * config.indentUnit
    } else if (cx.name == "InitializerList") {
      add += 2
    }
  }
  return add
}
