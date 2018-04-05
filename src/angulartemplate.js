import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./angulartemplate.mode"
import {predicates, indent} from "./html_util"

class AngularTemplateMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {predicates})
    this.conf = conf
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  }
}

let proto = AngularTemplateMode.prototype
proto.electricInput = /^\s*<\/.*?>/
proto.blockCommentStart = "<!--"
proto.blockCommentEnd = "-->"
proto.fold = "xml"

CodeMirror.defineMode("google-angular-template", (conf, modeConf) => new AngularTemplateMode(conf, modeConf))
