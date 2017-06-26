import * as grammar from "./go.mode"
import {markLocals} from "./locals"

const scopes = ["Block", "FunctionDef"]

function insertSemi(line, pos) {
  let match = /(?:(\w+)|[\d"'\)\]\}]|\+\+|--)\s*(?:\/\/.*)?$/.test(line.slice(0, pos))
  return match &&
    !/^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1])
}

class GoMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar, {
      predicates: {insertSemi}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }
}

CodeMirror.defineMode("go", conf => new GoMode(conf))
