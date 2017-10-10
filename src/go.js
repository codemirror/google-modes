import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./go.mode"
import {markLocals} from "./locals"

const scopes = ["Block", "FunctionDecl", "FunctionExpr", "IfStatement", "ForStatement", "SwitchStatement"]
const allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"]

function skippableNewline(line, pos, cx) {
  if (cx && allowNewline.indexOf(cx.name) > -1) return true
  let match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos))
  return !match ||
    (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
}

const bracketed = {
  Block: "}", LiteralBody: "}", StructBody: "}", InterfaceBody: "}",
  Bracketed: "]",
  Set: ")", ParamList: ")", ArgList: ")", ParenExpr: ")"
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) return 0
  if (cx.name == "string" || cx.name == "comment") return CodeMirror.Pass

  let brack = bracketed[cx.name]
  if (brack) {
    let closed = textAfter && textAfter.charAt(0) == brack
    let flat = closed || curLine == cx.startLine
    if (cx.name == "Block") {
      curLine = cx.parent.startLine
      if (/^(case|default)\b/.test(textAfter)) flat = true
    } else {
      curLine = cx.startLine
    }
    return findIndent(cx.parent, closed ? null : textAfter, curLine, config) + (flat ? 0 : config.tabSize)
  } else if (cx.name == "Statement") {
    return CodeMirror.countColumn(cx.startLine, null, config.tabSize) +
      (curLine == cx.startLine ? 0 : config.tabSize)
  } else {
    return findIndent(cx.parent, textAfter, curLine, config)
  }
}

class GoMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {skippableNewline}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  }
}

GoMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/
GoMode.prototype.closeBrackets = "()[]{}''\"\"``"
GoMode.prototype.blockCommentStart = "/*"
GoMode.prototype.blockCommentEnd = "*/"
GoMode.prototype.blockCommentContinue = " * "
GoMode.prototype.lineComment = "//"
GoMode.prototype.fold = "brace"

CodeMirror.defineMode("google-go", conf => new GoMode(conf))
