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

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

const bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}",
  ArrayLiteral: "]",
  ParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")"
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) return 0
    if (cx.name == "Statement" || cx.name == "ObjectMember") return lineIndent(cx.startLine, config)
  }
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string" || cx.name == "comment") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    let closed = textAfter && textAfter.charAt(0) == brack
    if (curLine != cx.startLine && aligned(cx))
      return lineCol(cx.startLine, cx.startPos, config) + (closed ? 0 : 1)

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf") {
      // Skip wrapping statement context
      let skipCx = cx.parent && cx.parent.name == "Statement" ? cx.parent.parent : cx
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    let flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr"
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember") {
    let base = statementIndent(cx, config)
    if (!curLine && hasSubStatement(cx))
      return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit)
    let flat = curLine == cx.startLine ||
        curLine && lineIndent(curLine, config) <= base ||
        textAfter && /^\{$/.test(textAfter)
    return base + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return findIndent(cx.parent, textAfter, cx.startLine, config) + config.indentUnit
  } else {
    return findIndent(cx.parent, textAfter, curLine, config) + (cx.name == "InitializerList" ? 2 : 0)
  }
}

export function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") return 0
  if (state.context && state.context.name == "DeclType") return 0
  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}
