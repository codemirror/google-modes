import buble from "rollup-plugin-buble"

export default {
  format: "umd",
  external: ["codemirror", "codemirror-grammar-mode"],
  globals: {"codemirror": "CodeMirror"},
  plugins: [buble()]
}
