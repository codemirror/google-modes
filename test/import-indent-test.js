let fs = require("fs")

let input = fs.readFileSync(process.argv[2], "utf8")

console.log("// test: indent_only\n\n" + input.replace(/([⓪①-⑳])(})?/g, function(_, ch, brace) {
  let result = "\n", n = ch == "⓪" ? 0 : ch.charCodeAt(0) - 9311
  for (let i = 0; i < n; i++) result += " "
  if (brace) {
    result += "\n"
    for (let i = 2; i < n; i++) result += " "
    result += "}"
  }
  return result
}))
