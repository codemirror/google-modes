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

export function contextInfo(proto) {
  proto.xmlCurrentTag = state => {
    let cx = state.context
    if (!cx || (cx.name != "openTag" && cx.name != "closeTag")) return null
    let match = /^<\/?\s*([\w\-\.]+)/.exec(cx.startLine.slice(cx.startPos))
    return match ? {name: match[1], close: cx.name == "closeTag"} : null
  }
  proto.xmlCurrentContext = state => {
    let context = []
    for (let cx = state.context; cx; cx = cx.parent) {
      if (cx.name == "tag") {
        let match = /^<\s*([\w\-\.]+)/.exec(cx.startLine.slice(cx.startPos))
        if (match) context.push(match[1])
      }
    }
    return context.reverse()
  }
}
