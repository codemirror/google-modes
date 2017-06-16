let fs = require("fs")

let input = fs.readFileSync(process.argv[2], "utf8")

input = input.replace(/[\[\]]/g, "$&$&")
let legend = {
  "Ⓥ": "def",
  "Ⓣ": "type",
  "Ⓦ": "variable-2"
}
for (let ch in legend)
  input = input.replace(new RegExp(`${ch}(.*?)${ch}`, "g"), `[${legend[ch]} $1]`)

console.log("// test: open\n\n" + input)
