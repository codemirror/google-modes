import {token, start} from "./cpp.mode"

CodeMirror.defineMode("c++", () => new CodeMirror.GrammarMode({token, start}))
