const fs = require("fs")
const {runMode, getMode} = require("codemirror/addon/runmode/runmode.node")
global.CodeMirror = require("codemirror") // FIXME make the modes properly require CodeMirror
global.CodeMirror.Pass = {}
require("codemirror-grammar-mode/src/matcher")

const {parseSpec, tokenType} = require("./parse_spec")

require("../dist/cpp")
require("../dist/c")
require("../dist/javascript")
require("../dist/python")
require("../dist/go")

let filter = process.argv[2]

;[{dir: "c", mode: "c"},
  {dir: "cpp", mode: "c++"},
  {dir: "js", mode: "javascript"},
  {dir: "py", mode: "python"},
  {dir: "go", mode: "go"}
 ].forEach(lang => {
  let base = __dirname + "/" + lang.dir + "/"
  fs.readdirSync(base).forEach(file => {
    if (filter && filter != file) return
    let {tokens, plain, open} = parseTestSpec(fs.readFileSync(base + file, "utf8"), base + file)
    try {
      compare(plain, tokens, lang.mode, open)
    } catch(e) {
      console.log(`${file}: ${e.message}`)
    }
  })
})

function parseTestSpec(file, fileName) {
  let directive = /(?:\/\/|#)\s*test:\s*(.*)/.exec(file)
  if (directive && /\bindent_only\b/.test(directive[1]))
    return {tokens: [{text: file, type: null}], plain: file, open: true}
  let result = parseSpec(file, fileName)
  result.open = directive && /\bopen\b/.test(directive[1])
  return result
}

function compare(text, tokens, mode, open) {
  let index = 0, off = 0, line = 1, ch = 0
  let lines = text.split("\n"), modeObj = CodeMirror.getMode({indentUnit: 2}, mode), curState = null

  runMode(text, mode, (text, style, _i, _s, state) => {
    if (!text) return
    if (state) curState = state
    let token = tokens[index], type = tokenType(style)
    if (token.type != type && !(open && token.type == null)) {
      let shortText = token.text.length < text.length ? token.text : text
      throw new Error(`Unexpected token ${JSON.stringify(type)} for ${JSON.stringify(shortText)} at ${line}:${ch}. Expected ${JSON.stringify(token.type)}`)
    }

    if (text == "\n") {
      line++
      ch = 0
      if (modeObj.indent) {
        let str = lines[line - 1], ws = str.match(/^(\s*)(.*)/)
        if (str) {
          let indent = modeObj.indent(curState, ws[2], str)
          if (indent != CodeMirror.Pass && indent != ws[1].length) {
            throw new Error("Indentation of line " + line + " is " + indent + " (expected " + ws[1].length + ")")
          }
        }
      }
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
