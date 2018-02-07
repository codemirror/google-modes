import * as CodeMirror from "codemirror"

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
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
}

function baseIndent(cx, config) {
  for (let startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize)
    if (!cx.parent || cx.parent.startLine != startLine)
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize)
  }
}

function findIndent(cx, textAfter, config) {
  if (!cx) return 0
  if (cx.name == "string" || cx.name == "comment") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  let closed = textAfter && textAfter.charAt(0) == brack
  if (brack && config.align !== false && aligned(cx))
    return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1)

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
    let parent = cx.parent
    if (parent && parent.name == "Statement" && parent.parent &&
        parent.parent.name == "Statement" && hasSubStatement(parent.parent))
      parent = parent.parent
    let base = statementIndent(parent, config)

    if (closed || cx.name == "NamespaceBlock") return base
    if (/^(public|private|protected)\s*:/.test(textAfter)) return base + 1
    if (isSwitch(cx.parent) && !isLabel(textAfter)) return base + 2 * config.indentUnit
    return base + config.indentUnit
  }

  let base = baseIndent(cx, config.tabSize)
  if (brack) {
    if (closed && brack != ")") return base
    return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    if (hasSubStatement(cx)) return base + config.indentUnit;
    return base + 2 * config.indentUnit
  } else if (cx.name == "Alternative") {
    base = baseIndent(cx.parent, config.tabSize)
    if (!textAfter || /^else\b/.test(textAfter)) return base
    return base + config.indentUnit
  } else if (cx.name == "ArrowRest") {
    return base + config.indentUnit
  } else if (cx.name == "InitializerList") {
    return base + 2
  } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
    return base + 2 * config.indentUnit
  } else {
    return findIndent(cx.parent, textAfter, config)
  }
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) return 0
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize)
  }
}

export function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") return 0
  let top = state.context && state.context.name
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    return statementIndent(state.context, config)
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
}
