# Google mode pack

This is a set of [CodeMirror](http://codemirror.net/) modes for the
**C**, **C++**, **Java**, **Go**, **JavaScript**, and **Python**
languages, providing a consistent highlighting style across these
languages and an indentation style compatible with Google's style
guides.

The repository contains the sources needed to create the modes. To
actually build them, run `npm install`. That will create files for the
different modes under `dist/`.

These modes are defined using the
[codemirror-grammar-mode](https://github.com/codemirror/grammar-mode)
tool, and have that tool's
[runtime](https://github.com/codemirror/grammar-mode/blob/master/src/mode.js)
as a client-side dependency.
