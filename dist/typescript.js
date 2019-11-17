(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror$1) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 139]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 502]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 527]], /^(?:\.\.\.)?/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[35], -1,
     3, "keyword", e[34], -1,
     3, "atom", e[27], -1,
     3, "variable", e[19], -1,
     3, "operator", e[36], -1,
     3, "operator", e[40], -1,
     3, "operator", e[39], -1,
     2, 141, -1, {"name":"string","token":"string"},
     3, "number", e[29], -1,
     2, 146, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[37], -1,
     1, 150, -1,
     /^[^]/, -1],
    [e[24], 6,
     2, 146, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 154]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 155]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 156]], 26,
     [5, 157], 36,
     3, "keyword", e[21], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 160]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     3, "keyword", e[2], 52,
     3, "keyword", e[3], 56,
     2, 161, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 64,
     3, "keyword", e[6], 69,
     3, "keyword", e[7], 75,
     3, "keyword", e[8], 77,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 77,
     3, "keyword", e[9], 78,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 93,
     3, "keyword", e[14], 97,
     3, "keyword", e[15], 101,
     3, "keyword", e[16], 105,
     3, "keyword", e[17], 117,
     3, "keyword", e[18], 133,
     "@", 135,
     1, 165, 137],
    [1, 6, 9],
    [3, "def type", e[19], 10],
    [1, 6, 11],
    [2, 171, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 176, 16],
    [1, 6, 17],
    [e[22], -1],
    [1, 6, 19],
    [[5, 224], 20,
     3, "def", e[19], 21],
    [3, "variable", e[19], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 161, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[19], 28],
    [1, 6, 29],
    [2, 171, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[20], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 227, 33],
    [2, 233, -1, {"name":"ObjType"}],
    [3, "keyword", e[26], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[19], 41],
    [3, "keyword", e[21], 37],
    [1, 6, 42],
    [2, 241, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 246, 47],
    [1, 6, 48],
    [",", 49,
     e[22], -1],
    [1, 6, 50],
    [1, 246, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 257, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 7, 58, {"name":"Statement"}],
    [1, 6, 59],
    [3, "keyword", e[1], 60,
     0, -1],
    [1, 6, 61],
    [2, 257, 62, {"name":"CondExpr"}],
    [1, 6, 63],
    [e[22], -1],
    [1, 6, 65],
    [2, 257, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 7, 68, {"name":"Statement"}],
    [2, 262, -1, {"name":"Alternative"}],
    [1, 6, 70],
    [3, "keyword", "*", 71,
     0, 71],
    [1, 6, 72],
    [3, "def", e[19], 73],
    [1, 6, 74],
    [2, 266, -1, {"name":"FunctionDef"}],
    [1, 6, 76],
    [2, 275, -1, {"name":"ForStatement"}],
    [1, 6, 79],
    [1, 6, 80],
    [":", -1],
    [1, 165, 77],
    [1, 6, 82],
    [e[22], -1,
     1, 165, 83],
    [1, 6, 84],
    [e[22], -1],
    [1, 6, 86],
    [1, 165, 87],
    [1, 6, 88],
    [e[22], -1],
    [1, 6, 90],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 91],
    [1, 6, 92],
    [e[22], -1],
    [1, 6, 94],
    [2, 257, 95, {"name":"CondExpr"}],
    [1, 6, 96],
    [2, 161, -1, {"name":"Block"}],
    [1, 6, 98],
    [2, 161, 99, {"name":"Block"}],
    [1, 6, 100],
    [2, 278, -1, {"name":"CatchFinally"}],
    [1, 6, 102],
    [3, "def type", e[19], 103],
    [1, 6, 104],
    [1, 291, -1],
    [1, 6, 106],
    ["*", 107,
     3, "keyword", e[8], 107,
     "{", 108,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 109],
    [1, 6, 110],
    [3, "keyword", e[23], 111,
     0, 112],
    [1, 302, 113],
    [1, 6, 114],
    [1, 6, 115],
    [1, 6, 116],
    [2, 141, 112, {"name":"string","token":"string"}],
    [e[22], -1],
    ["}", 107],
    [1, 6, 118],
    [2, 141, 119, {"name":"string","token":"string"},
     3, "keyword", "*", 120,
     1, 308, 121,
     "{", 122],
    [1, 6, 123],
    [1, 6, 124],
    [1, 6, 125],
    [1, 6, 126],
    [e[22], -1],
    [3, "keyword", e[33], 127,
     0, 121],
    [3, "keyword", e[23], 128,
     0, 119],
    [1, 302, 129],
    [1, 6, 130],
    [1, 6, 131],
    [1, 6, 132],
    [3, "def", e[19], 121],
    [2, 141, 119, {"name":"string","token":"string"}],
    ["}", 121],
    [1, 6, 134],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 136],
    [1, 165, -1],
    [1, 6, 138],
    [e[22], -1],
    [1, 6, 140],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 142,
     "\"", 144],
    ["\\", 143,
     /^(?!\')./, 142,
     "'", -1],
    [/^[^]/, 142],
    ["\\", 145,
     /^(?!\")./, 144,
     "\"", -1],
    [/^[^]/, 144],
    [/^\/\*\*(?!\/)/, 147,
     "/*", 149,
     /^\/\/.*/, -1],
    [1, 313, 147,
     0, 148],
    [2, 316, 148, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 149,
     "*/", -1],
    [3, "string-2", "`", 151],
    [3, "string-2", "${", 152,
     2, 318, 151, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 151,
     3, "string-2", "`", -1],
    [1, 165, 153],
    [3, "string-2", "}", 151],
    [e[24], 154,
     e[25], -1],
    [e[24], 155,
     e[25], -1],
    [e[24], 156,
     e[25], -1],
    [3, "keyword", e[26], 158],
    [1, 6, 159],
    [3, "keyword", e[21], -1],
    [e[24], 160,
     e[25], -1],
    ["{", 162],
    [1, 6, 163],
    [2, 7, 164, {"name":"Statement"},
     "}", -1],
    [1, 6, 163],
    [1, 320, 166],
    [1, 6, 167],
    [",", 168,
     1, 342, 169,
     0, -1],
    [1, 6, 170],
    [1, 6, 167],
    [1, 165, 169],
    ["<", 172],
    [1, 6, 173],
    [1, 361, 174],
    [1, 6, 175],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 209,
     3, "atom", e[27], 209,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 177,
     3, "keyword", /^(?:keyof|readonly|unique)(?![a-zA-Z¡-￿_0-9_\$])/, 178,
     [0, [5, 383], "("], 179,
     3, "keyword", e[28], 180,
     0, 180,
     0, 181,
     2, 386, 209, {"name":"TupleType"},
     2, 233, 209, {"name":"ObjType"},
     2, 141, 209, {"name":"string","token":"string"},
     3, "number", e[29], 209],
    [1, 6, 182],
    [1, 6, 183],
    [1, 6, 184],
    [1, 6, 185],
    [[5, 391], 186,
     3, "type", e[19], 187],
    [3, "variable", e[19], 188],
    [1, 176, 209],
    [1, 176, 189],
    [2, 171, 190, {"name":"TypeParams"},
     0, 190],
    [3, "variable", e[19], 191],
    [1, 6, 192],
    [1, 6, 193],
    [1, 6, 194],
    [1, 6, 195],
    [1, 6, 196],
    [2, 394, 209, {"name":"TypeArgs"},
     0, 209],
    [".", 197,
     "[", 198,
     0, 209],
    [")", 209],
    [2, 399, 199, {"name":"ParamListSpec"}],
    [".", 200],
    [1, 6, 201],
    [1, 6, 202],
    [1, 6, 203],
    [1, 6, 181],
    [3, "property", e[19], 204],
    [1, 165, 205],
    [3, "operator", "=>", 206],
    [1, 6, 193],
    [1, 6, 207],
    [1, 6, 208],
    ["]", 204],
    [1, 400, 209],
    [1, 6, 210],
    [3, "operator", /^[\&\|]/, 211,
     3, "keyword", /^(?:extends|implements)(?![a-zA-Z¡-￿_0-9_\$])/, 211,
     "[", 212,
     3, "operator", "?", 213,
     0, -1],
    [1, 6, 214],
    [1, 6, 215],
    [1, 6, 216],
    [1, 176, 217],
    [1, 176, 218,
     0, 218],
    [1, 176, 219],
    [1, 6, 210],
    [1, 6, 220],
    [1, 6, 221],
    ["]", 217],
    [3, "operator", ":", 222],
    [1, 6, 223],
    [1, 176, 217],
    [e[19], 225],
    [1, 6, 226],
    [".", -1],
    [1, 176, 228,
     0, -1],
    [1, 6, 229],
    [",", 230,
     0, -1],
    [1, 6, 231],
    [1, 176, 232,
     0, 232],
    [1, 6, 229],
    ["{", 234],
    [1, 6, 235],
    [1, 406, 236,
     0, 236],
    [1, 6, 237],
    [/^[\,\;]/, 238,
     "}", -1],
    [1, 6, 239],
    [1, 406, 240,
     0, 240],
    [1, 6, 237],
    ["{", 242],
    [1, 6, 243],
    [1, 439, 244],
    [1, 6, 245],
    ["}", -1],
    [1, 453, 247],
    [1, 6, 248],
    [3, "operator", "!", 249,
     0, 249],
    [1, 6, 250],
    [":", 251,
     0, 253],
    [1, 6, 252],
    [1, 176, 253],
    [1, 6, 254],
    [3, "operator", "=", 255,
     0, -1],
    [1, 6, 256],
    [1, 456, -1],
    ["(", 258],
    [1, 6, 259],
    [1, 165, 260],
    [1, 6, 261],
    [")", -1],
    [1, 6, 263],
    [3, "keyword", e[30], 264,
     0, -1],
    [1, 6, 265],
    [2, 7, -1, {"name":"Statement"}],
    [2, 171, 267, {"name":"TypeParams"},
     0, 267],
    [1, 6, 268],
    [2, 460, 269, {"name":"ParamList"}],
    [1, 6, 270],
    [":", 271,
     0, 273],
    [1, 6, 272],
    [1, 400, 273],
    [1, 6, 274],
    [2, 161, -1, {"name":"Block"},
     e[22], -1],
    [2, 465, 276, {"name":"ForSpec"}],
    [1, 6, 277],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[31], 279,
     0, 287],
    [1, 6, 280],
    ["(", 281,
     0, 282],
    [1, 6, 283],
    [1, 6, 284],
    [3, "def", e[19], 285],
    [2, 161, 287, {"name":"Block"}],
    [1, 6, 286],
    [")", 282],
    [1, 6, 288],
    [3, "keyword", e[32], 289,
     0, -1],
    [1, 6, 290],
    [2, 161, -1, {"name":"Block"}],
    [2, 171, 292, {"name":"TypeParams"},
     0, 292],
    [1, 6, 293],
    [3, "keyword", e[20], 294,
     0, 296],
    [1, 6, 295],
    [1, 176, 296],
    [1, 6, 297],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 298,
     0, 300],
    [1, 6, 299],
    [1, 227, 300],
    [1, 6, 301],
    [2, 476, -1, {"name":"ClassBody"}],
    [1, 308, 303,
     0, -1],
    [1, 6, 304],
    [",", 305,
     0, -1],
    [1, 6, 306],
    [1, 308, 307,
     0, 307],
    [1, 6, 304],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 309,
     3, "def", e[19], -1],
    [1, 6, 310],
    [3, "keyword", e[33], 311],
    [1, 6, 312],
    [3, "def", e[19], -1],
    [0, 314,
     2, 484, -1, {"name":"doccomment.braced"}],
    [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 315],
    [0, 314,
     0, -1],
    [1, 488, 317],
    [1, 313, 317,
     0, -1],
    ["\\", 319,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[27], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[35], 321,
     3, "operator", e[36], 321,
     3, "keyword", e[18], 321,
     3, "keyword", e[28], 323,
     3, "keyword", e[6], 329,
     3, "keyword", e[15], 335,
     2, 494, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[38], 340,
     3, "variable", e[19], -1,
     3, "number", e[29], -1,
     2, 141, -1, {"name":"string","token":"string"},
     3, "string-2", e[37], -1,
     1, 150, -1,
     2, 506, -1, {"name":"ArrayLiteral"},
     2, 511, -1, {"name":"ObjectLiteral"},
     2, 516, -1, {"name":"ParenExpr"}],
    [1, 6, 322],
    [1, 320, -1],
    [1, 6, 324],
    [".", 325,
     3, "variable callee", e[38], 326,
     1, 320, -1],
    [1, 6, 327],
    [1, 6, 328],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 394, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 330],
    [3, "keyword", "*", 331,
     0, 331],
    [1, 6, 332],
    [3, "def", e[19], 333,
     0, 333],
    [1, 6, 334],
    [2, 266, -1, {"name":"FunctionDef"}],
    [1, 6, 336],
    [[6, 521], 337,
     0, 338],
    [3, "def type", e[19], 338],
    [1, 6, 339],
    [1, 291, -1],
    [1, 6, 341],
    [2, 394, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[33], 343,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 345,
     3, "keyword", e[41], 345,
     2, 522, -1, {"name":"ArgList"},
     1, 150, -1,
     ".", 347,
     "[", 351,
     3, "operator", "?", 355],
    [1, 6, 344],
    [1, 176, -1],
    [1, 6, 346],
    [1, 165, -1],
    [1, 6, 348],
    [3, "property callee", e[44], 349,
     3, "property", e[19], -1],
    [1, 6, 350],
    [2, 394, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 352],
    [1, 165, 353],
    [1, 6, 354],
    ["]", -1],
    [1, 6, 356],
    [1, 165, 357],
    [1, 6, 358],
    [3, "operator", ":", 359],
    [1, 6, 360],
    [1, 165, -1],
    [3, "def type", e[19], 362,
     0, -1],
    [1, 6, 363],
    [3, "keyword", e[20], 364,
     0, 365],
    [1, 6, 366],
    [1, 6, 367],
    [1, 176, 365],
    [3, "operator", "=", 368,
     0, 369],
    [1, 6, 370],
    [1, 6, 371],
    [1, 176, 369],
    [",", 372,
     0, -1],
    [1, 6, 373],
    [3, "def type", e[19], 374,
     0, 375],
    [1, 6, 376],
    [1, 6, 371],
    [3, "keyword", e[20], 377,
     0, 378],
    [1, 6, 379],
    [1, 6, 380],
    [1, 176, 378],
    [3, "operator", "=", 381,
     0, 375],
    [1, 6, 382],
    [1, 176, 375],
    ["(", 384],
    [1, 6, 385],
    [[6, 531], -1],
    ["[", 387],
    [1, 6, 388],
    [1, 227, 389],
    [1, 6, 390],
    ["]", -1],
    [e[19], 392],
    [1, 6, 393],
    [".", -1],
    ["<", 395],
    [1, 6, 396],
    [1, 227, 397],
    [1, 6, 398],
    [">", -1],
    [2, 460, -1, {"name":"ParamList"}],
    [[5, 534], 401,
     0, 404],
    [3, "variable", e[19], 402],
    [1, 6, 403],
    [3, "keyword", e[43], 404],
    [1, 6, 405],
    [1, 176, -1],
    [3, "keyword", e[28], 407,
     0, 407,
     0, 415],
    [1, 6, 408],
    [2, 171, 409, {"name":"TypeParams"},
     0, 409],
    [1, 6, 410],
    [2, 460, 411, {"name":"ParamList"}],
    [1, 6, 412],
    [":", 413,
     0, -1],
    [1, 6, 414],
    [1, 400, -1],
    [3, "keyword", e[42], 416,
     "[", 417,
     3, "def property", e[19], 418,
     2, 141, 418, {"name":"string","token":"string"},
     3, "number", e[29], 418],
    [1, 6, 415],
    [1, 6, 419],
    [1, 6, 420],
    [[0, [5, 537], /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/], 421,
     1, 165, 422],
    [/^\??/, 423],
    [1, 6, 424],
    [1, 6, 425],
    [1, 6, 426],
    [":", 427,
     3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_\$])/, 427],
    ["]", 428],
    [2, 171, 429, {"name":"TypeParams"},
     0, 429,
     0, 430],
    [1, 6, 431],
    [1, 6, 432],
    [1, 6, 433],
    [1, 6, 434],
    [1, 176, 422],
    [":", 435],
    [2, 460, 430, {"name":"ParamList"}],
    [":", 436,
     0, -1],
    [1, 6, 437],
    [1, 6, 438],
    [1, 176, -1],
    [1, 400, -1],
    [3, "def property", e[19], 440,
     0, -1],
    [1, 6, 441],
    [3, "operator", "=", 442,
     0, 443],
    [1, 6, 444],
    [1, 6, 445],
    [1, 456, 443],
    [",", 446,
     0, -1],
    [1, 6, 447],
    [3, "def property", e[19], 448,
     0, 449],
    [1, 6, 450],
    [1, 6, 445],
    [3, "operator", "=", 451,
     0, 449],
    [1, 6, 452],
    [1, 456, 449],
    [3, "operator", "...", 454,
     0, 454],
    [1, 6, 455],
    [3, "def", e[19], -1,
     2, 540, -1, {"name":"ArrayPattern"},
     2, 545, -1, {"name":"ObjectPattern"}],
    [1, 320, 457],
    [1, 6, 458],
    [1, 550, 459,
     0, -1],
    [1, 6, 458],
    ["(", 461],
    [1, 6, 462],
    [1, 569, 463],
    [1, 6, 464],
    [")", -1],
    ["(", 466],
    [1, 6, 467],
    [2, 609, 468, {"name":"StatementMaybeOf"}],
    [1, 6, 469],
    [1, 165, 470,
     0, 470,
     0, 474],
    [1, 6, 471],
    [";", 472],
    [1, 6, 473],
    [1, 165, 474,
     0, 474],
    [1, 6, 475],
    [")", -1],
    ["{", 477],
    [1, 6, 478],
    [0, 479,
     "@", 480,
     "}", -1],
    [3, "keyword", e[42], 481,
     2, 614, 482, {"name":"ClassItem"}],
    [1, 6, 483],
    [1, 6, 479],
    [1, 6, 478],
    [1, 165, 482],
    ["{", 485],
    [1, 488, 486,
     1, 313, 487],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 486,
     0, 487],
    [/^(?:\}|(?=\*\/))/, -1],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 489,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[24], 489,
     "{", 490,
     0, 491,
     0, -1],
    [2, 635, 492, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 493],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 493,
     0, 491],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 639]], 500,
     [5, 645], 495],
    [2, 460, 496, {"name":"ParamList"}],
    [1, 6, 497],
    [":", 498,
     0, 500],
    [1, 6, 499],
    [1, 400, 500],
    [1, 6, 501],
    [2, 652, -1, {"name":"ArrowRest"}],
    [/^\<(?! )/, -1,
     /^ */, 503],
    [1, 657, 504,
     0, 505],
    [/^ */, 505],
    ["(", -1],
    ["[", 507],
    [1, 6, 508],
    [1, 659, 509],
    [1, 6, 510],
    ["]", -1],
    ["{", 512],
    [1, 6, 513],
    [1, 665, 514],
    [1, 6, 515],
    ["}", -1],
    ["(", 517],
    [1, 6, 518],
    [1, 165, 519],
    [1, 6, 520],
    [")", -1],
    [3, "keyword", e[20], -1],
    ["(", 523],
    [1, 6, 524],
    [1, 659, 525],
    [1, 6, 526],
    [")", -1],
    [/^ */, 528],
    [1, 657, 529,
     0, 530],
    [/^ */, 530],
    ["(", -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[19], 532],
    [1, 6, 533],
    [/^[\?\:]/, -1],
    [e[19], 535],
    [1, 6, 536],
    [3, "keyword", e[43], -1],
    [e[19], 538],
    [1, 6, 539],
    [/^(?:\:|in)/, -1],
    ["[", 541],
    [1, 6, 542],
    [1, 671, 543],
    [1, 6, 544],
    ["]", -1],
    ["{", 546],
    [1, 6, 547],
    [1, 677, 548],
    [1, 6, 549],
    ["}", -1],
    [3, "keyword", e[33], 551,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 553,
     3, "keyword", e[41], 553,
     2, 522, -1, {"name":"ArgList"},
     1, 150, -1,
     ".", 555,
     "[", 559,
     3, "operator", "?", 563],
    [1, 6, 552],
    [1, 176, -1],
    [1, 6, 554],
    [1, 456, -1],
    [1, 6, 556],
    [3, "property callee", e[44], 557,
     3, "property", e[19], -1],
    [1, 6, 558],
    [2, 394, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 560],
    [1, 165, 561],
    [1, 6, 562],
    ["]", -1],
    [1, 6, 564],
    [1, 165, 565],
    [1, 6, 566],
    [3, "operator", ":", 567],
    [1, 6, 568],
    [1, 456, -1],
    ["@", 570,
     0, 571,
     0, -1],
    [1, 6, 572],
    [3, "keyword", e[42], 573,
     e[45], 574],
    [1, 165, 575],
    [1, 6, 571],
    [1, 6, 576],
    [1, 6, 569],
    [1, 453, 577],
    [1, 6, 578],
    [/^\??/, 579],
    [1, 6, 580],
    [":", 581,
     0, 582],
    [1, 6, 583],
    [1, 6, 584],
    [1, 176, 582],
    [3, "operator", "=", 585,
     0, 586],
    [1, 6, 587],
    [1, 6, 588],
    [1, 456, 586],
    [",", 589,
     0, -1],
    [1, 6, 590],
    ["@", 591,
     0, 592,
     0, 593],
    [1, 6, 594],
    [3, "keyword", e[42], 595,
     e[45], 596],
    [1, 6, 588],
    [1, 165, 597],
    [1, 6, 592],
    [1, 6, 598],
    [1, 6, 590],
    [1, 453, 599],
    [1, 6, 600],
    [/^\??/, 601],
    [1, 6, 602],
    [":", 603,
     0, 604],
    [1, 6, 605],
    [1, 6, 606],
    [1, 176, 604],
    [3, "operator", "=", 607,
     0, 593],
    [1, 6, 608],
    [1, 456, 593],
    [2, 7, 610, {"name":"Statement"}],
    [1, 6, 611],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 612,
     0, -1],
    [1, 6, 613],
    [1, 165, -1],
    [3, "keyword", e[46], 615,
     0, 615],
    [1, 6, 616],
    [3, "def property", e[19], 621,
     "[", 617,
     3, "number", e[29], 621,
     2, 141, 621, {"name":"string","token":"string"}],
    [1, 6, 618],
    [1, 165, 619],
    [1, 6, 620],
    ["]", 621],
    [1, 6, 622],
    [3, "keyword", "*", 623,
     0, 623,
     /^[\!\?]?/, 624],
    [1, 6, 625],
    [1, 6, 626],
    [2, 266, -1, {"name":"FunctionDef"}],
    [":", 627,
     0, 628],
    [1, 6, 629],
    [1, 6, 630],
    [1, 176, 628],
    [3, "operator", "=", 631,
     0, 632],
    [1, 6, 633],
    [1, 6, 634],
    [1, 165, 632],
    [e[22], -1],
    [3, "type", "{", 636,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 635,
     "\n", 637,
     0, -1],
    [2, 635, 638, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 635],
    [/^(?=\*\/)/, 635,
     3, "type", "}", 635],
    [1, 6, 640],
    [":", 641,
     0, 644],
    [1, 6, 642],
    [1, 176, 643],
    [1, 6, 644],
    ["=>", -1],
    [2, 460, 646, {"name":"ParamList"}],
    [1, 6, 647],
    [":", 648,
     0, 650],
    [1, 6, 649],
    [1, 400, 650],
    [1, 6, 651],
    ["=>", -1],
    [3, "operator", "=>", 653],
    [1, 6, 654],
    [2, 171, 655, {"name":"TypeParams"},
     0, 655],
    [1, 6, 656],
    [2, 161, -1, {"name":"Block"},
     1, 456, -1],
    ["<", 658],
    [1, 657, 658,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 658,
     ">", -1],
    [1, 456, 660,
     0, -1],
    [1, 6, 661],
    [",", 662,
     0, -1],
    [1, 6, 663],
    [1, 456, 664,
     0, 664],
    [1, 6, 661],
    [2, 683, 666, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 667],
    [",", 668,
     0, -1],
    [1, 6, 669],
    [2, 683, 670, {"name":"ObjectMember"},
     0, 670],
    [1, 6, 667],
    [1, 698, 672,
     0, 672,
     0, -1],
    [1, 6, 673],
    [",", 674,
     0, -1],
    [1, 6, 675],
    [1, 698, 676,
     0, 676,
     0, 676],
    [1, 6, 673],
    [1, 703, 678,
     0, -1],
    [1, 6, 679],
    [",", 680,
     0, -1],
    [1, 6, 681],
    [1, 703, 682,
     0, 682],
    [1, 6, 679],
    [3, "keyword", e[46], 684,
     0, 684],
    [1, 6, 685],
    [3, "keyword", "*", 686,
     0, 686],
    [1, 6, 687],
    [3, "def property", e[19], 688,
     "[", 689,
     3, "number", e[29], 688,
     2, 141, 688, {"name":"string","token":"string"},
     3, "operator", "...", 690],
    [1, 6, 691],
    [1, 6, 692],
    [1, 6, 693],
    [2, 266, -1, {"name":"FunctionDef"},
     ":", 694,
     0, -1],
    [1, 165, 695],
    [1, 456, -1],
    [1, 6, 696],
    [1, 6, 697],
    [1, 456, -1],
    ["]", 688],
    [1, 453, 699],
    [1, 6, 700],
    [3, "operator", "=", 701,
     0, -1],
    [1, 6, 702],
    [1, 456, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 704,
     3, "property", e[19], 708,
     3, "number", e[29], 708,
     2, 141, 708, {"name":"string","token":"string"},
     3, "operator", "...", 712],
    [1, 6, 705],
    [3, "operator", "=", 706,
     0, -1],
    [1, 6, 707],
    [1, 456, -1],
    [1, 6, 709],
    [":", 710],
    [1, 6, 711],
    [1, 698, -1],
    [1, 6, 713],
    [1, 698, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}",
    ObjectPattern: "}", EnumBody: "}", LambdaBlock: "}", WhenBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    ParenthesizedExpression: ")", ConstructorParamList: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror$1.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror$1.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror$1.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && (config.dontCloseBrackets || "").indexOf(brack) < 0) { return base }
      return base + config.indentUnit * ((config.doubleIndentBrackets || "").indexOf(brack) < 0 ? 1 : 2)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^((else|catch|finally)\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror$1.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror$1.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    var passLine = config.forceContent && /^\s*(\/\/.*)?$/.test(line) ? "x" : line;
    return findIndent(state.contextAt(passLine, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  /**
   * @fileoverview Provides a class that facilitates tokenizing JavaScript tagged
   * template string contents as a separate, embedded language.
   *
   * Consider code like:
   *     html`<div>Hello ${'world'}</div>`
   *
   * For a good editing experience, the contents of that template string should
   * be syntax highlighted as HTML.
   *
   * Doing this correctly in the limit is more difficult than it appears however,
   * because arbitrary JS expressions are allowed inline, up to and including
   * nesting of templates. This is even used in the real world. Consider:
   *
   * html`
   *   <style>
   *     ${css`
   *       li {
   *         color: green;
   *       }
   *     `}
   *   </style>
   *   <ul>
   *     ${items.map(item => html`<li>${item}</li>`)}
   *   </ul>
   * `
   */

  /**
   * Use within a containing tokenizer to defer tokenizing the contents of some
   * JavaScript tagged template literals to other CodeMirror language modes.
   *
   * This tokenizer is intended to be used from a JavaScript tokenizer, or
   * one very similar to JavaScript, like TypeScript. It assumes that tagged
   * template literals are tagged with the style 'string-2'.
   *
   * This class maintains its own state. Its state needs to be stored as part
   * of the containing tokenizer's state, and copied when it is copied. See
   * startState and copyState.
   *
   * Design goals:
   *   - Minimally interfere with containing tokenizer, and make minimal
   *     assumptions about its behavior.
   *   - Have no impact on tokenizing code that does not use tagged template
   *     literals, or tagged template literals that do not correspond to other
   *     languages
   *   - Defer tokenizing the contents of template strings to embedded language
   *     modes but begin, end, and interrupt template strings according to the
   *     JavaScript grammar.
   *   - Parse correctly even for deeply nested combinations of literals inside
   *     of literals.
   *
   * Known limitations:
   *   - Embedded tokenizers will see JavaScript string escape sequences
   *     (like \`, \\, etc), though semantically they should see the unescaped
   *     values. This can confuse embedded tokenizers, though that confusion
   *     will not spread outside of the template string.
   */
  var TemplateTokenizer = function TemplateTokenizer(config) {
    this.config = config;
  };

  /** @return {!State} */
  TemplateTokenizer.prototype.startState = function startState () {
    return new State();
  };

  /**
   * @param {!State} state
   * @return {!State}
   */
  TemplateTokenizer.prototype.copyState = function copyState (state) {
    return state.copy();
  };

  /**
   * If true, the containing tokenizer should defer to `interceptTokenizing`.
   *
   * @param {!State} state
   */
  TemplateTokenizer.prototype.shouldInterceptTokenizing = function shouldInterceptTokenizing (state) {
    var templateState = state.currentTemplateState;
    if (templateState !== undefined && templateState.mode !== null) {
      return true;
    }
    return false;
  };

  /**
   * Defer to the embedded language tokenizer, but interrupt it for inline
   * exprssions and the end of the template literal.
   *
   * This MUST only be called if shouldInterceptTokenizing is true for the
   * current state.
   *
   * shouldInterceptTokenizing is separated out into its own
   * method, even though this method also tells the containing tokenizer
   * when it should defer to the embedded language because this method returns
   * an object, and we don't want to allocate an extra object for each token
   * consumed.
   *
   * @param {!Stream} stream
   * @param {!State} state
   * @return {{handled: boolean, state: string|null}} If handled is true,
   *   then the TS/JS tokenizer should not do any tokenizing of its own,
   *   and return state. If handled is false, then this method has consumed
   *   no input, and instead the TS/JS tokenizer should consume input instead.
   */
  TemplateTokenizer.prototype.interceptTokenizing = function interceptTokenizing (stream, state) {
    // Check for an inline expression in the template literal.
    if (stream.match('${')) {
      stream.backUp(2);
      if (!this.isEscaped(stream, stream.pos - 2)) {
        // Hand things back to the normal tokenizer.
        return {handled: false};
      }
    }
    // Check for end of the template literal.
    if (stream.peek() === '`' && !this.isEscaped(stream, stream.pos)) {
      // Hand things back to the normal tokenizer.
      return {handled: false};
    }
    // Important note for the above two early exit checks. We must first check
    // for the end characters, then check to see if they were escaped.
    // That avoids doing exponential work in the case where there's a long
    // sequence of backslashes that the embedded tokenizer consumes character
    // by character.

    var ref = state.currentTemplateState;
      var mode = ref.mode;
      var innerState = ref.state;
    var style = mode.token(stream, innerState);
    this.backupIfEmbeddedTokenizerOvershot(stream);
    return {handled: true, style: style};
  };

  /**
   * Called after the containing tokenizer has consumed a token, but before
   * that consumption is finalized.
   *
   * We keep track of entering and exiting template literals and inline
   * expressions in template literals. In some cases, we reduce the
   * amount of text consumed by the containing tokenizer, so that an embedded
   * language has the opportunity to tokenize the contents of a template
   * string that it controls.
   *
   * @param {string|null} style
   * @param {!Stream} stream
   * @param {!State} state
   */
  TemplateTokenizer.prototype.trackState = function trackState (style, stream, state) {
    if (!style) {
      return;
    }
    var templateState = state.currentTemplateState;
    if (!templateState || templateState.kind === 'inline-expression') {
      this.trackStateNotInTemplate(style, stream, state, templateState);
    } else {
      this.trackStateInTemplate(style, stream, state, templateState);
    }
    if (style === 'variable') {
      state.previousVariable = stream.current();
    } else {
      state.previousVariable = null;
    }
  };

  /**
   * Maintain state.templateStack while not directly inside of a template
   * literal.
   *
   * We could be inside of an inline expression in a template literal however.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {?TemplateState} templateState
   */
  TemplateTokenizer.prototype.trackStateNotInTemplate = function trackStateNotInTemplate (style, stream, state, templateState) {
    // Has the inline expression represented by embeddedMode just ended?
    if (templateState && style === 'string-2' &&
        stream.current().startsWith('}')) {
      state.templateStack.pop();
      // The containing tokenizer should only consume the } at this point.
      stream.backUp(stream.current().length - 1);
      return;
    }
    // Are we starting a new template?
    if (style === 'string-2' &&
      stream.current().startsWith('`')) {
      var mode = this.getModeForTemplateTag(state.previousVariable);
      var kind = 'template';
      if (mode) {
        // Nothing except the opening ` should be consumed.
        stream.backUp(stream.current().length - 1);
        state.templateStack.push(new TemplateState(
          kind,
          mode,
          CodeMirror.startState(mode)
        ));
      } else {
        state.templateStack.push(new TemplateState(kind, null, null));
      }
    }
  };

  /**
   * Maintain state.templateStack while in the contents of a template literal.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {!TemplateState} templateState
   */
  TemplateTokenizer.prototype.trackStateInTemplate = function trackStateInTemplate (style, stream, state, templateState) {
    // Is the current template ending?
    if (style === 'string-2' && stream.current().endsWith('`') &&
        !this.isEscaped(stream.pos - 1)) {
      state.templateStack.pop();
      return;
    }

    // Are we starting a new inline expression?
    if (style === 'string-2' && stream.current().endsWith('${') &&
        !this.isEscaped(stream.pos - 2)) {
      state.templateStack.push(
          new TemplateState('inline-expression', null, null));
      return;
    }
  };

  /**
   * Inside of an inline template, we've let the embedded language tokenizer
   * consume a token. However, it can't be allowed to consume text that actually
   * indicates the end of that section of template literal string. If it has
   * back up to right beforehand.
   *
   * @private
   * @param {!Stream} stream
   */
  TemplateTokenizer.prototype.backupIfEmbeddedTokenizerOvershot = function backupIfEmbeddedTokenizerOvershot (stream) {
      var this$1 = this;

    var cur = stream.current();
    var searchFrom = 0;
    while(true) {
      var closingIdx = cur.slice(searchFrom).search(/`|\$\{/);
      if (closingIdx === -1) {
        // No template boundary found in the token.
        return;
      }
      closingIdx = closingIdx + searchFrom;
      var amountToBackUp = cur.length - closingIdx;
      var locationOfEarlyExit = stream.pos - amountToBackUp;
      var escaped = this$1.isEscaped(stream, locationOfEarlyExit);
      if (!escaped) {
        // Found a template boundary. Must not consume it.
        stream.backUp(cur.length - closingIdx);
        return;
      }
      // Found a potential template boundary, but it turns out it
      // was escaped with backslashes, so we need to keep looking beyond it.
      searchFrom = closingIdx + 1;
    }
  };

  /**
   * Walks backwards from the given position in the stream looking for
   * backslashes. Returns true if there are an odd number, and so the given
   * position is string-escaped, and false if there are an even number.
   *
   * @private
   * @param {!Stream} stream
   * @param {number} start
   */
  TemplateTokenizer.prototype.isEscaped = function isEscaped (stream, start) {
    var escaped = false;
    var idx = start;
    while(idx > 0) {
      if (stream.string[idx - 1] !== '\\') {
        break;
      }
      escaped = !escaped;
      idx--;
    }
    return escaped;
  };

  /**
   * @private
   * @param {string|null} templateTag
   */
  TemplateTokenizer.prototype.getModeForTemplateTag = function getModeForTemplateTag (templateTag) {
      var this$1 = this;

    if (!templateTag) {
      return null;
    }
    // There are likely more customizations that would be nice here.
    // Would be a good place for configuration if so.
    if (templateTag === 'htm') {
      templateTag = 'html';
    }
    var modeSpecs = [("google-" + templateTag), ("" + templateTag)];
    // Note: the google-modules build pipeline does not currently support
    // for/of.
    for (var i = 0; i < modeSpecs.length; i++) {
      var mode = CodeMirror.getMode(this$1.config, modeSpecs[i]);
      if (mode && mode.name !== 'null') {
        return mode;
      }
    }
    return null;
  };

  var State = function State(templateStack, previousVariable) {
    if ( templateStack === void 0 ) templateStack = [];
    if ( previousVariable === void 0 ) previousVariable = null;

    /**
     * A stack to keep track of the nesting of templates and inline expressions.
     *
     * Whenever we enter a template, we push a TemplateState with kind
     * 'template' on the stack. Whenever, inside of a template, we enter
     * an inline expression i.e. ${}, we push a TemplateState with kind
     * 'inline-expression' on the stack. Likewise, as we leave templates and
     * inline expressions we pop them off.
     *
     * A template that is being tokenized with an embedded CodeMirror mode will
     * have a `mode` and its `state` on its associated TemplateState.
     *
     * @type {Array<!TemplateState>}
     */
    this.templateStack = templateStack;
    /**
     * Used to figure out the tag name of tagged template literals, to
     * infer the inline language.
     *
     * @type {null|string}
     */
    this.previousVariable = previousVariable;
  };

  var prototypeAccessors = { currentTemplateState: { configurable: true } };

  State.prototype.copy = function copy () {
    return new State(
        this.templateStack.map(function (t) { return t.copy(); }), this.previousVariable);
  };

  /** @return {!TemplateState | undefined} */
  prototypeAccessors.currentTemplateState.get = function () {
    return this.templateStack[this.templateStack.length - 1];
  };

  Object.defineProperties( State.prototype, prototypeAccessors );

  var TemplateState = function TemplateState(kind, mode, state) {
    /** @type {string} Either 'template' or 'inline-expression' */
    this.kind = kind;
    /**
     * @type {?CodeMirror.Mode} If defined, the mode to tokenize
     * the current template with. kind must be 'template' if this is defined.
     */
    this.mode = mode;
    /** @type {?} The state object for this.mode. */
    this.state = state;
  };

  TemplateState.prototype.copy = function copy () {
    if (!this.mode) {
      return new TemplateState(this.kind, null, null);
    }
    return new TemplateState(
        this.kind, this.mode, CodeMirror.copyState(this.mode, this.state))
  };

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = (function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.templateTokenizer = new TemplateTokenizer(conf);
      this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")",
                         tabSize: conf.tabSize, indentUnit: conf.indentUnit,
                         forceContent: true};
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.startState = function startState () {
      var state = superclass.prototype.startState.call(this);
      state.embeddedParserState = this.templateTokenizer.startState();
      return state;
    };

    TSMode.prototype.copyState = function copyState (state) {
      var copy = superclass.prototype.copyState.call(this, state);
      copy.embeddedParserState =
          this.templateTokenizer.copyState(state.embeddedParserState);
      return copy;
    };

    TSMode.prototype.token = function token$$1 (stream, state) {
      var templateTokenizerState = state.embeddedParserState;
      if (this.templateTokenizer
            .shouldInterceptTokenizing(templateTokenizerState)) {
        var ref = this.templateTokenizer
            .interceptTokenizing(stream, templateTokenizerState);
        var handled = ref.handled;
        var style$1 = ref.style;
        if (handled) {
          return style$1;
        }
      }
      var style = superclass.prototype.token.call(this, stream, state);
      this.templateTokenizer.trackState(style, stream, templateTokenizerState);
      return markLocals(style, scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.indentConf)
    };

    return TSMode;
  }(CodeMirror$1.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror$1.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror$1.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

})));
