const fs = require("fs")
const {runMode, getMode} = require("codemirror/addon/runmode/runmode.node")
global.CodeMirror = require("codemirror") // FIXME make the modes properly require CodeMirror
require("modegrammar/src/matcher")

const {parseSpec, tokenType} = require("./parse_spec")

require("../dist/cpp")
require("../dist/c")

;[{dir: "c", mode: "c"},
  {dir: "cpp", mode: "c++"}
 ].forEach(lang => {
  let base = __dirname + "/" + lang.dir + "/"
  fs.readdirSync(base).forEach(file => {
    let {tokens, plain} = parseSpec(fs.readFileSync(base + file, "utf8"), base + file)
    try {
      compare(plain, tokens, lang.mode)
    } catch(e) {
      console.log(`${file}: ${e.message}`)
    }
  })
})

function compare(text, tokens, mode) {
  let index = 0, off = 0, line = 1, ch = 0
  runMode(text, mode, (text, style) => {
    if (!text) return
    let token = tokens[index], type = tokenType(style)
    if (token.type != type) {
      let shortText = token.text.length < text.length ? token.text : text
      throw new Error(`Unexpected token ${JSON.stringify(type)} for ${JSON.stringify(shortText)} at ${line}:${ch}. Expected ${JSON.stringify(token.type)}`)
    }
    if (text == "\n") {
      line++
      ch = 0
    } else {
      ch += text.length
    }
    if (text.length == token.text.length - off) {
      off = 0
      index++
    } else {
      off += text.length
    }
  })
}
