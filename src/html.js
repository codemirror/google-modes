import * as CodeMirror from "codemirror"
import "codemirror-grammar-mode"
import * as grammar from "./html.mode"

function tagName(str) {
  let m = /\s*([\w_\.-]+)/.exec(str)
  return m ? m[1].toLowerCase() : "x"
}

function cxTagName(cx) {
  return tagName(cx.startLine.slice(cx.startPos + 1))
}

const selfClosers = "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")

function selfClosing(_string, _pos, cx) {
  return selfClosers.indexOf(tagName(cx)) > -1
}

function matchingTag(string, pos, cx) {
  return tagName(string.slice(pos + 2)) == cxTagName(cx)
}

class HTMLMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar, {predicates: {selfClosing, matchingTag}})
    this.conf = conf
  }

  indent(state, textAfter, line) {
    return 0 // FIXME
  }
}

let proto = HTMLMode.prototype
proto.electricInput = /^\s*<\//,
proto.blockCommentStart = "<!--",
proto.blockCommentEnd = "-->",
proto.fold = "xml"

CodeMirror.defineMode("google-html", (conf, modeConf) => new HTMLMode(conf, modeConf))
