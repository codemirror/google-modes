import buble from "@rollup/plugin-buble"

export default {
  external: ["codemirror", "codemirror-grammar-mode"],
  output: {
    globals: {"codemirror": "CodeMirror"},
    format: "umd"
  },
  plugins: [buble()]
}
