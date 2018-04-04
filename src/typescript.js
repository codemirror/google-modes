import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./typescript.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"
import {canInsertSemi} from "./js_semi"

const scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"]

class TSMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {
      predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : () => false}
    })
    this.conf = conf
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    if (!textAfter) textAfter = line = "x" // Force getContextAt to terminate the statement, if needed
    return indent(state, textAfter, line, this.conf)
  }
}

let meta = {
  electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
  blockCommentStart: "/*",
  blockCommentEnd: "*/",
  blockCommentContinue: " * ",
  lineComment: "//",
  fold: "brace",
  closeBrackets: "()[]{}''\"\"``"
}
for (let prop in meta) TSMode.prototype[prop] = meta[prop]

CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/)

CodeMirror.defineMode("google-typescript", (conf, modeConf) => new TSMode(conf, modeConf))
