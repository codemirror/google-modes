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
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) return 0
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize)
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string" || cx.name == "comment") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    let closed = textAfter && textAfter.charAt(0) == brack
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1)

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      let skipCx = cx
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        skipCx = cx.parent.parent
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    let flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr"
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    let base = statementIndent(cx, config)
    if (!curLine && hasSubStatement(cx))
      return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit)
    let flat = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base
    return base + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                (cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0))
  }
}

export function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") return 0
  if (state.context && (state.context.name == "DeclType" || state.context.name == "BeforeStatement"))
    return statementIndent(state.context, config)
  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}
