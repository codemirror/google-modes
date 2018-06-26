(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 128]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, [1, "\n", "\t", " "]];
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
     3, "keyword", e[25], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[29], -1,
     3, "atom", e[28], -1,
     3, "variable", e[20], -1,
     3, "operator", e[31], -1,
     3, "operator", e[36], -1,
     3, "operator", e[35], -1,
     2, 130, -1, {"name":"string","token":"string"},
     3, "number", e[33], -1,
     2, 135, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[34], -1,
     1, 141, -1,
     /^[^]/, -1],
    [e[39], 6,
     2, 135, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 8,
     3, "keyword", e[1], 23,
     3, "keyword", e[2], 23,
     3, "keyword", e[3], 27,
     2, 145, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 35,
     3, "keyword", e[6], 40,
     3, "keyword", e[7], 46,
     3, "keyword", e[8], 48,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 48,
     3, "keyword", e[9], 49,
     3, "keyword", e[10], 52,
     3, "keyword", e[11], 56,
     3, "keyword", e[12], 60,
     3, "keyword", e[13], 64,
     3, "keyword", e[14], 68,
     3, "keyword", e[15], 84,
     3, "keyword", e[16], 92,
     3, "keyword", e[17], 104,
     3, "keyword", e[18], 120,
     "@", 122,
     1, 149, 126],
    [1, 6, 9],
    [1, 155, 10],
    [1, 6, 11],
    [3, "operator", "=", 12,
     0, 13],
    [1, 6, 14],
    [1, 6, 15],
    [1, 158, 13],
    [",", 16,
     e[19], -1],
    [1, 6, 17],
    [1, 155, 18],
    [1, 6, 19],
    [3, "operator", "=", 20,
     0, 21],
    [1, 6, 22],
    [1, 6, 15],
    [1, 158, 21],
    [1, 6, 24],
    [2, 162, 25, {"name":"CondExpr"}],
    [1, 6, 26],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 28],
    [2, 7, 29, {"name":"Statement"}],
    [1, 6, 30],
    [3, "keyword", e[1], 31,
     0, -1],
    [1, 6, 32],
    [2, 162, 33, {"name":"CondExpr"}],
    [1, 6, 34],
    [e[19], -1],
    [1, 6, 36],
    [2, 162, 37, {"name":"CondExpr"}],
    [1, 6, 38],
    [2, 7, 39, {"name":"Statement"}],
    [2, 167, -1, {"name":"Alternative"}],
    [1, 6, 41],
    [3, "keyword", "*", 42,
     0, 42],
    [1, 6, 43],
    [3, "def", e[20], 44],
    [1, 6, 45],
    [2, 171, -1, {"name":"FunctionDef"}],
    [1, 6, 47],
    [2, 174, -1, {"name":"ForStatement"}],
    [1, 6, 50],
    [1, 6, 51],
    [":", -1],
    [1, 149, 48],
    [1, 6, 53],
    [e[19], -1,
     1, 149, 54],
    [1, 6, 55],
    [e[19], -1],
    [1, 6, 57],
    [1, 149, 58],
    [1, 6, 59],
    [e[19], -1],
    [1, 6, 61],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 62],
    [1, 6, 63],
    [e[19], -1],
    [1, 6, 65],
    [2, 162, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 145, -1, {"name":"Block"}],
    [1, 6, 69],
    [2, 145, 70, {"name":"Block"}],
    [1, 6, 71],
    [3, "keyword", e[21], 72,
     0, 73],
    [1, 6, 74],
    [1, 6, 75],
    ["(", 76],
    [3, "keyword", e[22], 77,
     0, -1],
    [1, 6, 78],
    [1, 6, 79],
    [3, "def", e[20], 80],
    [2, 145, -1, {"name":"Block"}],
    [1, 6, 81],
    [")", 82],
    [1, 6, 83],
    [2, 145, 73, {"name":"Block"}],
    [1, 6, 85],
    [3, "type def", e[20], 86],
    [1, 6, 87],
    [3, "keyword", e[23], 88,
     0, 89],
    [1, 6, 90],
    [1, 6, 91],
    [1, 149, 89],
    [2, 177, -1, {"name":"ClassBody"}],
    [1, 6, 93],
    ["*", 94,
     3, "keyword", e[8], 94,
     "{", 95,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 96],
    [1, 6, 97],
    [3, "keyword", e[24], 98,
     0, 99],
    [1, 185, 100],
    [1, 6, 101],
    [1, 6, 102],
    [1, 6, 103],
    [2, 130, 99, {"name":"string","token":"string"}],
    [e[19], -1],
    ["}", 94],
    [1, 6, 105],
    [2, 130, 106, {"name":"string","token":"string"},
     3, "keyword", "*", 107,
     1, 191, 108,
     "{", 109],
    [1, 6, 110],
    [1, 6, 111],
    [1, 6, 112],
    [1, 6, 113],
    [e[19], -1],
    [3, "keyword", e[26], 114,
     0, 108],
    [3, "keyword", e[24], 115,
     0, 106],
    [1, 185, 116],
    [1, 6, 117],
    [1, 6, 118],
    [1, 6, 119],
    [3, "def", e[20], 108],
    [2, 130, 106, {"name":"string","token":"string"}],
    ["}", 108],
    [1, 6, 121],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 123],
    [1, 149, 124],
    [1, 6, 125],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 127],
    [e[19], -1],
    [1, 6, 129],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 131,
     "\"", 133],
    ["\\", 132,
     /^(?!\')./, 131,
     "'", -1],
    [/^[^]/, 131],
    ["\\", 134,
     /^(?!\")./, 133,
     "\"", -1],
    [/^[^]/, 133],
    [/^\/\*\*(?!\/)/, 136,
     "/*", 140,
     /^\/\/.*/, -1],
    [0, 137,
     2, 196, 136, {"name":"doccomment.braced"},
     0, 138],
    [e[27], 139],
    [2, 200, 138, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 137,
     0, 136],
    [[0, /^(?!\*\/)/, /^[^]/], 140,
     "*/", -1],
    [3, "string-2", "`", 142],
    [3, "string-2", "${", 143,
     2, 204, 142, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 142,
     3, "string-2", "`", -1],
    [1, 149, 144],
    [3, "string-2", "}", 142],
    ["{", 146],
    [1, 6, 147],
    [2, 7, 148, {"name":"Statement"},
     "}", -1],
    [1, 6, 147],
    [1, 206, 150],
    [1, 6, 151],
    [",", 152,
     1, 228, 153,
     0, -1],
    [1, 6, 154],
    [1, 6, 151],
    [1, 149, 153],
    [3, "operator", "...", 156,
     0, 156],
    [1, 6, 157],
    [3, "def", e[20], -1,
     2, 243, -1, {"name":"ArrayPattern"},
     2, 248, -1, {"name":"ObjectPattern"}],
    [1, 206, 159],
    [1, 6, 160],
    [1, 253, 161,
     0, -1],
    [1, 6, 160],
    ["(", 163],
    [1, 6, 164],
    [1, 149, 165],
    [1, 6, 166],
    [")", -1],
    [1, 6, 168],
    [3, "keyword", e[25], 169,
     0, -1],
    [1, 6, 170],
    [2, 7, -1, {"name":"Statement"}],
    [2, 268, 172, {"name":"ParamList"}],
    [1, 6, 173],
    [2, 145, -1, {"name":"Block"}],
    [2, 273, 175, {"name":"ForSpec"}],
    [1, 6, 176],
    [2, 7, -1, {"name":"Statement"}],
    ["{", 178],
    [1, 6, 179],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 180,
     0, 180,
     "@", 181,
     "}", -1],
    [1, 6, 182],
    [1, 6, 183],
    [2, 284, 184, {"name":"ObjectMember"}],
    [1, 149, 184],
    [1, 6, 179],
    [1, 191, 186,
     0, -1],
    [1, 6, 187],
    [",", 188,
     0, -1],
    [1, 6, 189],
    [1, 191, 190,
     0, 190],
    [1, 6, 187],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 192,
     3, "def", e[20], -1],
    [1, 6, 193],
    [3, "keyword", e[26], 194],
    [1, 6, 195],
    [3, "def", e[20], -1],
    ["{", 197],
    [1, 299, 198,
     2, 305, 199, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 198,
     0, 199],
    ["}", -1],
    [1, 299, 201],
    [0, 202,
     2, 196, 201, {"name":"doccomment.braced"},
     0, -1],
    [e[27], 203],
    [0, 202,
     0, 201],
    ["\\", 205,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], 207,
     3, "operator", e[31], 207,
     3, "keyword", e[18], 207,
     3, "keyword", e[32], 209,
     3, "keyword", e[6], 213,
     3, "keyword", e[15], 219,
     2, 309, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[38], -1,
     3, "variable", e[20], -1,
     3, "number", e[33], -1,
     2, 130, -1, {"name":"string","token":"string"},
     3, "string-2", e[34], -1,
     1, 141, -1,
     2, 313, -1, {"name":"ArrayLiteral"},
     2, 318, -1, {"name":"ObjectLiteral"},
     2, 323, -1, {"name":"ParenExpr"}],
    [1, 6, 208],
    [1, 206, -1],
    [1, 6, 210],
    [".", 211,
     1, 206, -1],
    [1, 6, 212],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [1, 6, 214],
    [3, "keyword", "*", 215,
     0, 215],
    [1, 6, 216],
    [3, "def", e[20], 217,
     0, 217],
    [1, 6, 218],
    [2, 171, -1, {"name":"FunctionDef"}],
    [1, 6, 220],
    [[6, 328], 221,
     0, 222],
    [3, "type def", e[20], 222],
    [1, 6, 223],
    [3, "keyword", e[23], 224,
     0, 225],
    [1, 6, 226],
    [1, 6, 227],
    [1, 149, 225],
    [2, 177, -1, {"name":"ClassBody"}],
    [3, "operator", e[35], -1,
     3, "operator", e[36], 229,
     3, "keyword", e[37], 229,
     2, 329, -1, {"name":"ArgList"},
     1, 141, -1,
     ".", 231,
     "[", 233,
     3, "operator", "?", 237],
    [1, 6, 230],
    [1, 149, -1],
    [1, 6, 232],
    [3, "property callee", e[38], -1,
     3, "property", e[20], -1],
    [1, 6, 234],
    [1, 149, 235],
    [1, 6, 236],
    ["]", -1],
    [1, 6, 238],
    [1, 149, 239],
    [1, 6, 240],
    [3, "operator", ":", 241],
    [1, 6, 242],
    [1, 149, -1],
    ["[", 244],
    [1, 6, 245],
    [1, 334, 246],
    [1, 6, 247],
    ["]", -1],
    ["{", 249],
    [1, 6, 250],
    [1, 340, 251],
    [1, 6, 252],
    ["}", -1],
    [3, "operator", e[35], -1,
     3, "operator", e[36], 254,
     3, "keyword", e[37], 254,
     2, 329, -1, {"name":"ArgList"},
     1, 141, -1,
     ".", 256,
     "[", 258,
     3, "operator", "?", 262],
    [1, 6, 255],
    [1, 158, -1],
    [1, 6, 257],
    [3, "property callee", e[38], -1,
     3, "property", e[20], -1],
    [1, 6, 259],
    [1, 149, 260],
    [1, 6, 261],
    ["]", -1],
    [1, 6, 263],
    [1, 149, 264],
    [1, 6, 265],
    [3, "operator", ":", 266],
    [1, 6, 267],
    [1, 158, -1],
    ["(", 269],
    [1, 6, 270],
    [1, 346, 271],
    [1, 6, 272],
    [")", -1],
    ["(", 274],
    [1, 6, 275],
    [2, 352, 276, {"name":"StatementMaybeOf"}],
    [1, 6, 277],
    [1, 149, 278,
     0, 278,
     0, 282],
    [1, 6, 279],
    [";", 280],
    [1, 6, 281],
    [1, 149, 282,
     0, 282],
    [1, 6, 283],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 285,
     0, 285],
    [1, 6, 286],
    [3, "def property", e[20], 287,
     "[", 288,
     3, "number", e[33], 287,
     2, 130, 287, {"name":"string","token":"string"},
     3, "operator", "...", 289],
    [1, 6, 290],
    [1, 6, 291],
    [1, 6, 292],
    [3, "keyword", "*", 293,
     0, 293,
     ":", 294,
     0, -1],
    [1, 149, 295],
    [1, 158, -1],
    [1, 6, 296],
    [1, 6, 297],
    [1, 6, 298],
    [2, 171, -1, {"name":"FunctionDef"}],
    [1, 158, -1],
    ["]", 287],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, 300,
     3, "tag", /^\@[a-zA-Z¡-￿_]+/, -1],
    [e[39], 300,
     "{", 301,
     0, 302,
     0, -1],
    [2, 305, 303, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_]+/, -1,
     0, -1],
    ["}", 304],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 304,
     0, 302],
    [3, "type", "{", 306,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 305,
     "\n", 307,
     0, -1],
    [2, 305, 308, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 305],
    [/^(?=\*\/)/, 305,
     3, "type", "}", 305],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 357]], 311,
     [5, 359], 310],
    [2, 268, 311, {"name":"ParamList"}],
    [1, 6, 312],
    [2, 362, -1, {"name":"ArrowRest"}],
    ["[", 314],
    [1, 6, 315],
    [1, 365, 316],
    [1, 6, 317],
    ["]", -1],
    ["{", 319],
    [1, 6, 320],
    [1, 371, 321],
    [1, 6, 322],
    ["}", -1],
    ["(", 324],
    [1, 6, 325],
    [1, 149, 326],
    [1, 6, 327],
    [")", -1],
    [3, "keyword", e[23], -1],
    ["(", 330],
    [1, 6, 331],
    [1, 365, 332],
    [1, 6, 333],
    [")", -1],
    [1, 377, 335,
     0, 335,
     0, -1],
    [1, 6, 336],
    [",", 337,
     0, -1],
    [1, 6, 338],
    [1, 377, 339,
     0, 339,
     0, 339],
    [1, 6, 336],
    [1, 382, 341,
     0, -1],
    [1, 6, 342],
    [",", 343,
     0, -1],
    [1, 6, 344],
    [1, 382, 345,
     0, 345],
    [1, 6, 342],
    [1, 377, 347,
     0, -1],
    [1, 6, 348],
    [",", 349,
     0, -1],
    [1, 6, 350],
    [1, 377, 351,
     0, 351],
    [1, 6, 348],
    [2, 7, 353, {"name":"Statement"}],
    [1, 6, 354],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 355,
     0, -1],
    [1, 6, 356],
    [1, 149, -1],
    [1, 6, 358],
    ["=>", -1],
    [2, 268, 360, {"name":"ParamList"}],
    [1, 6, 361],
    ["=>", -1],
    [3, "operator", "=>", 363],
    [1, 6, 364],
    [2, 145, -1, {"name":"Block"},
     1, 158, -1],
    [1, 158, 366,
     0, -1],
    [1, 6, 367],
    [",", 368,
     0, -1],
    [1, 6, 369],
    [1, 158, 370,
     0, 370],
    [1, 6, 367],
    [2, 284, 372, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 373],
    [",", 374,
     0, -1],
    [1, 6, 375],
    [2, 284, 376, {"name":"ObjectMember"},
     0, 376],
    [1, 6, 373],
    [1, 155, 378],
    [1, 6, 379],
    [3, "operator", "=", 380,
     0, -1],
    [1, 6, 381],
    [1, 158, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 383,
     3, "property", e[20], 387,
     3, "number", e[33], 387,
     2, 130, 387, {"name":"string","token":"string"},
     3, "operator", "...", 391],
    [1, 6, 384],
    [3, "operator", "=", 385,
     0, -1],
    [1, 6, 386],
    [1, 158, -1],
    [1, 6, 388],
    [":", 389],
    [1, 6, 390],
    [1, 377, -1],
    [1, 6, 392],
    [1, 377, -1]
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
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
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
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"];

  var JSMode = (function (superclass) {
    function JSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) JSMode.__proto__ = superclass;
    JSMode.prototype = Object.create( superclass && superclass.prototype );
    JSMode.prototype.constructor = JSMode;

    JSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    JSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return JSMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { JSMode.prototype[prop] = meta[prop]; }

  CodeMirror.registerHelper("wordChars", "google-javascript", /[\w$]/);

  CodeMirror.defineMode("google-javascript", function (conf, modeConf) { return new JSMode(conf, modeConf); });

})));
