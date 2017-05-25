function findSingle(str, pos, ch) {
  for (;;) {
    var found = str.indexOf(ch, pos);
    if (found == -1) return null;
    if (str.charAt(found + 1) != ch) return found;
    pos = found + 2;
  }
}

exports.tokenType = function(str) {
  return str ? str.split(" ").sort().join(" ") : null
}

const typeName = /[\w&-_]+/g;

exports.parseSpec = function(str, filename) {
  let tokens = [], plain = "", pos = 0
  while (pos < str.length) {
    let type = null, text
    if (str.charAt(pos) == "[" && str.charAt(pos+1) != "[") {
      typeName.lastIndex = pos + 1
      let m = typeName.exec(str)
      type = exports.tokenType(m[0].replace(/&/g, " "))
      let textStart = pos + type.length + 2
      let end = findSingle(str, textStart, "]")
      if (end == null) throw new Error("Unterminated token at " + pos + " in " + filename)
      text = str.slice(textStart, end)
      pos = end + 1
    } else {
      let end = findSingle(str, pos, "[")
      if (end == null) end = str.length
      text = str.slice(pos, end)
      pos = end
    }
    text = text.replace(/\[\[|\]\]/g, s => s.charAt(0))
    tokens.push({type, text})
    plain += text
  }
  return {tokens, plain}
}
