const fs = require("fs")
const {runMode, getMode} = require("codemirror/addon/runmode/runmode.node")
global.CodeMirror = require("codemirror") // FIXME make the modes properly require CodeMirror
global.CodeMirror.Pass = {}
require("codemirror-grammar-mode")

const {parseSpec, tokenType} = require("./parse_spec")

require("../dist/cpp")
require("../dist/c")
require("../dist/javascript")
require("../dist/typescript")
require("../dist/python")
require("../dist/go")
require("../dist/java")
require("../dist/angulartemplate")

let filter = process.argv[2]

;[{dir: "c", mode: "google-c"},
  {dir: "cpp", mode: "google-cpp"},
  {dir: "js", mode: "google-javascript"},
  {dir: "ts", mode: "google-typescript"},
  {dir: "py", mode: "google-python"},
  {dir: "go", mode: "google-go"},
  {dir: "java", mode: "google-java"},
  {dir: "ng", mode: "google-angular-template"}
 ].forEach(lang => {
  let base = __dirname + "/" + lang.dir + "/"
  fs.readdirSync(base).forEach(file => {
    if (file[0] == "." || (filter && filter != file)) return
    let {tokens, plain, open, conf = {}} = parseTestSpec(fs.readFileSync(base + file, "utf8"), base + file)
    conf.name = lang.mode
    try {
      compare(plain, tokens, conf, open)
    } catch(e) {
      console.log(`${file}: ${e.stack || e.message}`)
    }
  })
})

function parseTestSpec(file, fileName) {
  let directive = /(?:\/\/|#)\s*test:\s*(.*)/.exec(file)
  if (directive) file = file.slice(0, directive.index) + file.slice(directive.index + directive[0].length)
  if (directive && /\bindent_only\b/.test(directive[1]))
    return {tokens: [{text: file, type: null}], plain: file, open: true}
  let result = parseSpec(file, fileName)
  result.open = directive && /\bopen\b/.test(directive[1])
  result.conf = directive && /^\s*\{.*?\}\s*$/.test(directive[1]) && JSON.parse(directive[1]) || undefined
  return result
}

function compare(text, tokens, mode, open) {
  let index = 0, off = 0, line = 1, ch = 0
  let conf = {indentUnit: 2, tabSize: 4}
  let lines = text.split("\n"), modeObj = CodeMirror.getMode(conf, mode), curState = null

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
      if (modeObj.indent && curState) {
        let str = lines[line - 1], ws = str.match(/^(\s*)(.*)/)
        if (str) {
          let indent = modeObj.indent(curState, ws[2], str)
          let expected = CodeMirror.countColumn(str, ws[1].length, conf.tabSize)
          if (indent != CodeMirror.Pass && indent != expected)
            throw new Error("Indentation of line " + line + " is " + indent + " (expected " + expected + ")")
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
