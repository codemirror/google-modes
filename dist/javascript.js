(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 128]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, [1, "\n", "\t", " "], /^new(?![a-zA-Z¡-￿_0-9_\$])/];
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
     3, "keyword", e[39], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[29], -1,
     3, "atom", e[28], -1,
     3, "variable", e[20], -1,
     3, "operator", e[31], -1,
     3, "operator", e[35], -1,
     3, "operator", e[34], -1,
     2, 130, -1, {"name":"string","token":"string"},
     3, "number", e[32], -1,
     2, 135, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[33], -1,
     1, 141, -1,
     /^[^]/, -1],
    [e[38], 6,
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
     1, 224, 153,
     0, -1],
    [1, 6, 154],
    [1, 6, 151],
    [1, 149, 153],
    [3, "operator", "...", 156,
     0, 156],
    [1, 6, 157],
    [3, "def", e[20], -1,
     2, 239, -1, {"name":"ArrayPattern"},
     2, 244, -1, {"name":"ObjectPattern"}],
    [1, 206, 159],
    [1, 6, 160],
    [1, 249, 161,
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
    [2, 264, 172, {"name":"ParamList"}],
    [1, 6, 173],
    [2, 145, -1, {"name":"Block"}],
    [2, 269, 175, {"name":"ForSpec"}],
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
    [2, 280, 184, {"name":"ObjectMember"}],
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
    [1, 295, 198,
     2, 301, 199, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 198,
     0, 199],
    [/^(?:\}|(?=\*\/))/, -1],
    [1, 295, 201],
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
     2, 305, -1, {"name":"NewExpression"},
     3, "keyword", e[6], 209,
     3, "keyword", e[15], 215,
     2, 315, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[37], -1,
     3, "variable", e[20], -1,
     3, "number", e[32], -1,
     2, 130, -1, {"name":"string","token":"string"},
     3, "string-2", e[33], -1,
     1, 141, -1,
     2, 319, -1, {"name":"ArrayLiteral"},
     2, 324, -1, {"name":"ObjectLiteral"},
     2, 329, -1, {"name":"ParenExpr"}],
    [1, 6, 208],
    [1, 206, -1],
    [1, 6, 210],
    [3, "keyword", "*", 211,
     0, 211],
    [1, 6, 212],
    [3, "def", e[20], 213,
     0, 213],
    [1, 6, 214],
    [2, 171, -1, {"name":"FunctionDef"}],
    [1, 6, 216],
    [[6, 334], 217,
     0, 218],
    [3, "type def", e[20], 218],
    [1, 6, 219],
    [3, "keyword", e[23], 220,
     0, 221],
    [1, 6, 222],
    [1, 6, 223],
    [1, 149, 221],
    [2, 177, -1, {"name":"ClassBody"}],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 225,
     3, "keyword", e[36], 225,
     2, 335, -1, {"name":"ArgList"},
     1, 141, -1,
     ".", 227,
     "[", 229,
     3, "operator", "?", 233],
    [1, 6, 226],
    [1, 149, -1],
    [1, 6, 228],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 230],
    [1, 149, 231],
    [1, 6, 232],
    ["]", -1],
    [1, 6, 234],
    [1, 149, 235],
    [1, 6, 236],
    [3, "operator", ":", 237],
    [1, 6, 238],
    [1, 149, -1],
    ["[", 240],
    [1, 6, 241],
    [1, 340, 242],
    [1, 6, 243],
    ["]", -1],
    ["{", 245],
    [1, 6, 246],
    [1, 346, 247],
    [1, 6, 248],
    ["}", -1],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 250,
     3, "keyword", e[36], 250,
     2, 335, -1, {"name":"ArgList"},
     1, 141, -1,
     ".", 252,
     "[", 254,
     3, "operator", "?", 258],
    [1, 6, 251],
    [1, 158, -1],
    [1, 6, 253],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 255],
    [1, 149, 256],
    [1, 6, 257],
    ["]", -1],
    [1, 6, 259],
    [1, 149, 260],
    [1, 6, 261],
    [3, "operator", ":", 262],
    [1, 6, 263],
    [1, 158, -1],
    ["(", 265],
    [1, 6, 266],
    [1, 352, 267],
    [1, 6, 268],
    [")", -1],
    ["(", 270],
    [1, 6, 271],
    [2, 358, 272, {"name":"StatementMaybeOf"}],
    [1, 6, 273],
    [1, 149, 274,
     0, 274,
     0, 278],
    [1, 6, 275],
    [";", 276],
    [1, 6, 277],
    [1, 149, 278,
     0, 278],
    [1, 6, 279],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 281,
     0, 281],
    [1, 6, 282],
    [3, "def property", e[20], 283,
     "[", 284,
     3, "number", e[32], 283,
     2, 130, 283, {"name":"string","token":"string"},
     3, "operator", "...", 285],
    [1, 6, 286],
    [1, 6, 287],
    [1, 6, 288],
    [3, "keyword", "*", 289,
     0, 289,
     ":", 290,
     0, -1],
    [1, 149, 291],
    [1, 158, -1],
    [1, 6, 292],
    [1, 6, 293],
    [1, 6, 294],
    [2, 171, -1, {"name":"FunctionDef"}],
    [1, 158, -1],
    ["]", 283],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, 296,
     3, "tag", /^\@[a-zA-Z¡-￿_]+/, -1],
    [e[38], 296,
     "{", 297,
     0, 298,
     0, -1],
    [2, 301, 299, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_]+/, -1,
     0, -1],
    ["}", 300],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 300,
     0, 298],
    [3, "type", "{", 302,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 301,
     "\n", 303,
     0, -1],
    [2, 301, 304, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 301],
    [/^(?=\*\/)/, 301,
     3, "type", "}", 301],
    [3, "keyword", e[39], 306],
    [1, 6, 307],
    [".", 308,
     1, 206, 309],
    [1, 6, 310],
    [1, 6, 311],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 335, 312, {"name":"ArgList"},
     ".", 313,
     0, -1],
    [1, 6, 311],
    [1, 6, 314],
    [3, "property callee", e[37], 312,
     3, "property", e[20], 312],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 363]], 317,
     [5, 365], 316],
    [2, 264, 317, {"name":"ParamList"}],
    [1, 6, 318],
    [2, 368, -1, {"name":"ArrowRest"}],
    ["[", 320],
    [1, 6, 321],
    [1, 371, 322],
    [1, 6, 323],
    ["]", -1],
    ["{", 325],
    [1, 6, 326],
    [1, 377, 327],
    [1, 6, 328],
    ["}", -1],
    ["(", 330],
    [1, 6, 331],
    [1, 149, 332],
    [1, 6, 333],
    [")", -1],
    [3, "keyword", e[23], -1],
    ["(", 336],
    [1, 6, 337],
    [1, 371, 338],
    [1, 6, 339],
    [")", -1],
    [1, 383, 341,
     0, 341,
     0, -1],
    [1, 6, 342],
    [",", 343,
     0, -1],
    [1, 6, 344],
    [1, 383, 345,
     0, 345,
     0, 345],
    [1, 6, 342],
    [1, 388, 347,
     0, -1],
    [1, 6, 348],
    [",", 349,
     0, -1],
    [1, 6, 350],
    [1, 388, 351,
     0, 351],
    [1, 6, 348],
    [1, 383, 353,
     0, -1],
    [1, 6, 354],
    [",", 355,
     0, -1],
    [1, 6, 356],
    [1, 383, 357,
     0, 357],
    [1, 6, 354],
    [2, 7, 359, {"name":"Statement"}],
    [1, 6, 360],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 361,
     0, -1],
    [1, 6, 362],
    [1, 149, -1],
    [1, 6, 364],
    ["=>", -1],
    [2, 264, 366, {"name":"ParamList"}],
    [1, 6, 367],
    ["=>", -1],
    [3, "operator", "=>", 369],
    [1, 6, 370],
    [2, 145, -1, {"name":"Block"},
     1, 158, -1],
    [1, 158, 372,
     0, -1],
    [1, 6, 373],
    [",", 374,
     0, -1],
    [1, 6, 375],
    [1, 158, 376,
     0, 376],
    [1, 6, 373],
    [2, 280, 378, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 379],
    [",", 380,
     0, -1],
    [1, 6, 381],
    [2, 280, 382, {"name":"ObjectMember"},
     0, 382],
    [1, 6, 379],
    [1, 155, 384],
    [1, 6, 385],
    [3, "operator", "=", 386,
     0, -1],
    [1, 6, 387],
    [1, 158, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 389,
     3, "property", e[20], 393,
     3, "number", e[32], 393,
     2, 130, 393, {"name":"string","token":"string"},
     3, "operator", "...", 397],
    [1, 6, 390],
    [3, "operator", "=", 391,
     0, -1],
    [1, 6, 392],
    [1, 158, -1],
    [1, 6, 394],
    [":", 395],
    [1, 6, 396],
    [1, 383, -1],
    [1, 6, 398],
    [1, 383, -1]
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
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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
