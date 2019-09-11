import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./html.mode"
import {predicates, indent, contextInfo} from "./html_util"

class HTMLMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {predicates})
    this.conf = conf
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

let proto = HTMLMode.prototype
proto.electricInput = /^\s*<\/.*?>/
proto.blockCommentStart = "<!--"
proto.blockCommentEnd = "-->"
proto.fold = "xml"
contextInfo(proto)

CodeMirror.defineMode("google-html", (conf, modeConf) => new HTMLMode(conf, modeConf))
