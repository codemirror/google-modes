function tagName(str) {
  let m = /^\s*([\w_\.-]+)/.exec(str)
  return m ? m[1].toLowerCase() : "x"
}

function cxTagName(cx) {
  return tagName(cx.startLine.slice(cx.startPos + 1))
}

const selfClosers = "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")

function selfClosing(_string, _pos, cx) {
  return selfClosers.indexOf(cxTagName(cx)) > -1
}

function matchingTag(string, pos, cx) {
  return tagName(string.slice(pos + 2)) == cxTagName(cx)
}

export let predicates = {selfClosing, matchingTag}

export function indent(state, textAfter, line, config) {
  let cx = state.contextAt(line, line.length - textAfter.length)
  let closing = /^\s*<\/\s*([\w_\.-]+)/.exec(textAfter)
  while (cx) {
    if (cx.name == "tag") {
      let base = CodeMirror.countColumn(cx.startLine, null, config.tabSize)
      if (closing && closing[1].toLowerCase() == cxTagName(cx)) return base
      else return base + config.indentUnit
    } else if (cx.name == "openTag") {
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + 2 * config.indentUnit
    }
    cx = cx.parent
  }
  return 0
}
