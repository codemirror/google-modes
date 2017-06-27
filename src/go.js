import * as grammar from "./go.mode"
import {markLocals} from "./locals"

const scopes = ["Block", "FunctionDef"]
const allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"]

function skippableNewline(line, pos, cx) {
  if (cx && allowNewline.indexOf(cx.name) > -1) return true
  let match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos))
  return !match ||
    (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
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
}

CodeMirror.defineMode("go", conf => new GoMode(conf))
