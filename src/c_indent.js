import * as CodeMirror from "codemirror"

function hasSubStatement(context) {
  let m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos))
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
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}",
  ObjectPattern: "}", EnumBody: "}", LambdaBlock: "}", WhenBody: "}",
  ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
  ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
  ParenthesizedExpression: ")", ConstructorParamList: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
}

const blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"]

const statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"]

function baseIndent(cx, config) {
  for (let startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize)
    if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize)
    if (!cx.parent || cx.parent.startLine != startLine)
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize)
  }
}

function findIndent(cx, textAfter, config) {
  if (!cx) return 0
  if (cx.name == "string" || cx.name == "comment") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  let closed = textAfter && textAfter.charAt(0) == brack
  if (brack && config.align !== false && (!config.dontAlign || config.dontAlign.indexOf(cx.name) < 0) && aligned(cx))
    return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1)

  if (brack && blockish.indexOf(cx.name) > -1) {
    let parent = cx.parent
    if (parent && parent.name == "Statement" && parent.parent &&
        parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
      parent = parent.parent
    let base = statementIndent(parent, config)

    if (closed || cx.name == "NamespaceBlock") return base
    if (/^(public|private|protected)\s*:/.test(textAfter)) return base + 1
    if (isSwitch(cx.parent) && !isLabel(textAfter)) return base + 2 * config.indentUnit
    return base + config.indentUnit
  }

  let base = baseIndent(cx, config)
  if (brack) {
    if (closed && (config.dontCloseBrackets || "").indexOf(brack) < 0) return base
    return base + config.indentUnit * ((config.doubleIndentBrackets || "").indexOf(brack) < 0 ? 1 : 2)
  } else if (statementish.indexOf(cx.name) > -1) {
    if (hasSubStatement(cx)) return base + config.indentUnit;
    return base + 2 * config.indentUnit
  } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
    base = baseIndent(cx.parent, config)
    if (!textAfter || /^((else|catch|finally)\b|\/[\/\*])/.test(textAfter)) return base
    return base + config.indentUnit
  } else if (cx.name == "ArrowRest") {
    return base + config.indentUnit
  } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
    return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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
    if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize)
  }
}

export function indent(state, textAfter, line, config) {
  let top = state.context && state.context.name
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
    return statementIndent(state.context, config)

  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
    return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit

  let passLine = config.forceContent && /^\s*(\/\/.*)?$/.test(line) ? "x" : line
  return findIndent(state.contextAt(passLine, line.length - textAfter.length), textAfter, config)
}
