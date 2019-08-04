(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror$1) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 139]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 493]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 518]], /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.)?/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
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
    [[5, 215], 20,
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
    [1, 218, 33],
    [2, 224, -1, {"name":"ObjType"}],
    [3, "keyword", e[26], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[19], 41],
    [3, "keyword", e[21], 37],
    [1, 6, 42],
    [2, 232, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 237, 47],
    [1, 6, 48],
    [",", 49,
     e[22], -1],
    [1, 6, 50],
    [1, 237, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 248, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 7, 58, {"name":"Statement"}],
    [1, 6, 59],
    [3, "keyword", e[1], 60,
     0, -1],
    [1, 6, 61],
    [2, 248, 62, {"name":"CondExpr"}],
    [1, 6, 63],
    [e[22], -1],
    [1, 6, 65],
    [2, 248, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 7, 68, {"name":"Statement"}],
    [2, 253, -1, {"name":"Alternative"}],
    [1, 6, 70],
    [3, "keyword", "*", 71,
     0, 71],
    [1, 6, 72],
    [3, "def", e[19], 73],
    [1, 6, 74],
    [2, 257, -1, {"name":"FunctionDef"}],
    [1, 6, 76],
    [2, 266, -1, {"name":"ForStatement"}],
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
    [2, 248, 95, {"name":"CondExpr"}],
    [1, 6, 96],
    [2, 161, -1, {"name":"Block"}],
    [1, 6, 98],
    [2, 161, 99, {"name":"Block"}],
    [1, 6, 100],
    [2, 269, -1, {"name":"CatchFinally"}],
    [1, 6, 102],
    [3, "def type", e[19], 103],
    [1, 6, 104],
    [1, 282, -1],
    [1, 6, 106],
    ["*", 107,
     3, "keyword", e[8], 107,
     "{", 108,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 109],
    [1, 6, 110],
    [3, "keyword", e[23], 111,
     0, 112],
    [1, 293, 113],
    [1, 6, 114],
    [1, 6, 115],
    [1, 6, 116],
    [2, 141, 112, {"name":"string","token":"string"}],
    [e[22], -1],
    ["}", 107],
    [1, 6, 118],
    [2, 141, 119, {"name":"string","token":"string"},
     3, "keyword", "*", 120,
     1, 299, 121,
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
    [1, 293, 129],
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
    [1, 304, 147,
     0, 148],
    [2, 307, 148, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 149,
     "*/", -1],
    [3, "string-2", "`", 151],
    [3, "string-2", "${", 152,
     2, 309, 151, {"name":"str2","token":"string-2"},
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
    [1, 311, 166],
    [1, 6, 167],
    [",", 168,
     1, 333, 169,
     0, -1],
    [1, 6, 170],
    [1, 6, 167],
    [1, 165, 169],
    ["<", 172],
    [1, 6, 173],
    [1, 352, 174],
    [1, 6, 175],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 200,
     3, "atom", e[27], 200,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 177,
     3, "keyword", /^keyof(?![a-zA-Z¡-￿_0-9_\$])/, 178,
     [0, [5, 374], "("], 179,
     3, "keyword", e[28], 180,
     0, 180,
     0, 181,
     2, 377, 200, {"name":"TupleType"},
     2, 224, 200, {"name":"ObjType"},
     2, 141, 200, {"name":"string","token":"string"},
     3, "number", e[29], 200],
    [1, 6, 182],
    [1, 6, 183],
    [1, 6, 184],
    [1, 6, 185],
    [[5, 382], 186,
     3, "type", e[19], 187],
    [1, 385, 200],
    [1, 176, 200],
    [1, 176, 188],
    [2, 171, 189, {"name":"TypeParams"},
     0, 189],
    [3, "variable", e[19], 190],
    [1, 6, 191],
    [1, 6, 192],
    [1, 6, 193],
    [1, 6, 194],
    [2, 389, 200, {"name":"TypeArgs"},
     0, 200],
    [")", 200],
    [2, 394, 195, {"name":"ParamListSpec"}],
    [".", 196],
    [1, 6, 197],
    [1, 6, 181],
    [3, "operator", "=>", 198],
    [1, 6, 199],
    [1, 395, 200],
    [1, 6, 201],
    [3, "operator", /^[\&\|]/, 202,
     3, "keyword", /^(?:extends|implements)(?![a-zA-Z¡-￿_0-9_\$])/, 202,
     "[", 203,
     3, "operator", "?", 204,
     0, -1],
    [1, 6, 205],
    [1, 6, 206],
    [1, 6, 207],
    [1, 176, 208],
    [1, 176, 209,
     0, 209],
    [1, 176, 210],
    [1, 6, 201],
    [1, 6, 211],
    [1, 6, 212],
    ["]", 208],
    [3, "operator", ":", 213],
    [1, 6, 214],
    [1, 176, 208],
    [e[19], 216],
    [1, 6, 217],
    [".", -1],
    [1, 176, 219,
     0, -1],
    [1, 6, 220],
    [",", 221,
     0, -1],
    [1, 6, 222],
    [1, 176, 223,
     0, 223],
    [1, 6, 220],
    ["{", 225],
    [1, 6, 226],
    [1, 401, 227,
     0, 227],
    [1, 6, 228],
    [/^[\,\;]/, 229,
     "}", -1],
    [1, 6, 230],
    [1, 401, 231,
     0, 231],
    [1, 6, 228],
    ["{", 233],
    [1, 6, 234],
    [1, 434, 235],
    [1, 6, 236],
    ["}", -1],
    [1, 448, 238],
    [1, 6, 239],
    [3, "operator", "!", 240,
     0, 240],
    [1, 6, 241],
    [":", 242,
     0, 244],
    [1, 6, 243],
    [1, 176, 244],
    [1, 6, 245],
    [3, "operator", "=", 246,
     0, -1],
    [1, 6, 247],
    [1, 385, -1],
    ["(", 249],
    [1, 6, 250],
    [1, 165, 251],
    [1, 6, 252],
    [")", -1],
    [1, 6, 254],
    [3, "keyword", e[30], 255,
     0, -1],
    [1, 6, 256],
    [2, 7, -1, {"name":"Statement"}],
    [2, 171, 258, {"name":"TypeParams"},
     0, 258],
    [1, 6, 259],
    [2, 451, 260, {"name":"ParamList"}],
    [1, 6, 261],
    [":", 262,
     0, 264],
    [1, 6, 263],
    [1, 395, 264],
    [1, 6, 265],
    [2, 161, -1, {"name":"Block"},
     e[22], -1],
    [2, 456, 267, {"name":"ForSpec"}],
    [1, 6, 268],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[31], 270,
     0, 278],
    [1, 6, 271],
    ["(", 272,
     0, 273],
    [1, 6, 274],
    [1, 6, 275],
    [3, "def", e[19], 276],
    [2, 161, 278, {"name":"Block"}],
    [1, 6, 277],
    [")", 273],
    [1, 6, 279],
    [3, "keyword", e[32], 280,
     0, -1],
    [1, 6, 281],
    [2, 161, -1, {"name":"Block"}],
    [2, 171, 283, {"name":"TypeParams"},
     0, 283],
    [1, 6, 284],
    [3, "keyword", e[20], 285,
     0, 287],
    [1, 6, 286],
    [1, 176, 287],
    [1, 6, 288],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 289,
     0, 291],
    [1, 6, 290],
    [1, 218, 291],
    [1, 6, 292],
    [2, 467, -1, {"name":"ClassBody"}],
    [1, 299, 294,
     0, -1],
    [1, 6, 295],
    [",", 296,
     0, -1],
    [1, 6, 297],
    [1, 299, 298,
     0, 298],
    [1, 6, 295],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 300,
     3, "def", e[19], -1],
    [1, 6, 301],
    [3, "keyword", e[33], 302],
    [1, 6, 303],
    [3, "def", e[19], -1],
    [0, 305,
     2, 475, -1, {"name":"doccomment.braced"}],
    [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 306],
    [0, 305,
     0, -1],
    [1, 479, 308],
    [1, 304, 308,
     0, -1],
    ["\\", 310,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[27], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[35], 312,
     3, "operator", e[36], 312,
     3, "keyword", e[18], 312,
     3, "keyword", e[28], 314,
     3, "keyword", e[6], 320,
     3, "keyword", e[15], 326,
     2, 485, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[38], 331,
     3, "variable", e[19], -1,
     3, "number", e[29], -1,
     2, 141, -1, {"name":"string","token":"string"},
     3, "string-2", e[37], -1,
     1, 150, -1,
     2, 497, -1, {"name":"ArrayLiteral"},
     2, 502, -1, {"name":"ObjectLiteral"},
     2, 507, -1, {"name":"ParenExpr"}],
    [1, 6, 313],
    [1, 311, -1],
    [1, 6, 315],
    [".", 316,
     3, "variable callee", e[38], 317,
     1, 311, -1],
    [1, 6, 318],
    [1, 6, 319],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 389, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 321],
    [3, "keyword", "*", 322,
     0, 322],
    [1, 6, 323],
    [3, "def", e[19], 324,
     0, 324],
    [1, 6, 325],
    [2, 257, -1, {"name":"FunctionDef"}],
    [1, 6, 327],
    [[6, 512], 328,
     0, 329],
    [3, "def type", e[19], 329],
    [1, 6, 330],
    [1, 282, -1],
    [1, 6, 332],
    [2, 389, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[33], 334,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 336,
     3, "keyword", e[41], 336,
     2, 513, -1, {"name":"ArgList"},
     1, 150, -1,
     ".", 338,
     "[", 342,
     3, "operator", "?", 346],
    [1, 6, 335],
    [1, 176, -1],
    [1, 6, 337],
    [1, 165, -1],
    [1, 6, 339],
    [3, "property callee", e[43], 340,
     3, "property", e[19], -1],
    [1, 6, 341],
    [2, 389, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 343],
    [1, 165, 344],
    [1, 6, 345],
    ["]", -1],
    [1, 6, 347],
    [1, 165, 348],
    [1, 6, 349],
    [3, "operator", ":", 350],
    [1, 6, 351],
    [1, 165, -1],
    [3, "def type", e[19], 353,
     0, -1],
    [1, 6, 354],
    [3, "keyword", e[20], 355,
     0, 356],
    [1, 6, 357],
    [1, 6, 358],
    [1, 176, 356],
    [3, "operator", "=", 359,
     0, 360],
    [1, 6, 361],
    [1, 6, 362],
    [1, 176, 360],
    [",", 363,
     0, -1],
    [1, 6, 364],
    [3, "def type", e[19], 365,
     0, 366],
    [1, 6, 367],
    [1, 6, 362],
    [3, "keyword", e[20], 368,
     0, 369],
    [1, 6, 370],
    [1, 6, 371],
    [1, 176, 369],
    [3, "operator", "=", 372,
     0, 366],
    [1, 6, 373],
    [1, 176, 366],
    ["(", 375],
    [1, 6, 376],
    [[6, 522], -1],
    ["[", 378],
    [1, 6, 379],
    [1, 218, 380],
    [1, 6, 381],
    ["]", -1],
    [e[19], 383],
    [1, 6, 384],
    [".", -1],
    [1, 311, 386],
    [1, 6, 387],
    [1, 525, 388,
     0, -1],
    [1, 6, 387],
    ["<", 390],
    [1, 6, 391],
    [1, 218, 392],
    [1, 6, 393],
    [">", -1],
    [2, 451, -1, {"name":"ParamList"}],
    [[5, 544], 396,
     0, 399],
    [3, "variable", e[19], 397],
    [1, 6, 398],
    [3, "keyword", e[44], 399],
    [1, 6, 400],
    [1, 176, -1],
    [3, "keyword", e[28], 402,
     0, 402,
     0, 410],
    [1, 6, 403],
    [2, 171, 404, {"name":"TypeParams"},
     0, 404],
    [1, 6, 405],
    [2, 451, 406, {"name":"ParamList"}],
    [1, 6, 407],
    [":", 408,
     0, -1],
    [1, 6, 409],
    [1, 395, -1],
    [3, "keyword", e[42], 411,
     "[", 412,
     3, "def property", e[19], 413,
     2, 141, 413, {"name":"string","token":"string"},
     3, "number", e[29], 413],
    [1, 6, 410],
    [1, 6, 414],
    [1, 6, 415],
    [[0, [5, 547], /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/], 416,
     1, 165, 417],
    [/^\??/, 418],
    [1, 6, 419],
    [1, 6, 420],
    [1, 6, 421],
    [":", 422,
     3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_\$])/, 422],
    ["]", 423],
    [2, 171, 424, {"name":"TypeParams"},
     0, 424,
     0, 425],
    [1, 6, 426],
    [1, 6, 427],
    [1, 6, 428],
    [1, 6, 429],
    [1, 176, 417],
    [":", 430],
    [2, 451, 425, {"name":"ParamList"}],
    [":", 431,
     0, -1],
    [1, 6, 432],
    [1, 6, 433],
    [1, 176, -1],
    [1, 395, -1],
    [3, "def property", e[19], 435,
     0, -1],
    [1, 6, 436],
    [3, "operator", "=", 437,
     0, 438],
    [1, 6, 439],
    [1, 6, 440],
    [1, 385, 438],
    [",", 441,
     0, -1],
    [1, 6, 442],
    [3, "def property", e[19], 443,
     0, 444],
    [1, 6, 445],
    [1, 6, 440],
    [3, "operator", "=", 446,
     0, 444],
    [1, 6, 447],
    [1, 385, 444],
    [3, "operator", "...", 449,
     0, 449],
    [1, 6, 450],
    [3, "def", e[19], -1,
     2, 550, -1, {"name":"ArrayPattern"},
     2, 555, -1, {"name":"ObjectPattern"}],
    ["(", 452],
    [1, 6, 453],
    [1, 560, 454],
    [1, 6, 455],
    [")", -1],
    ["(", 457],
    [1, 6, 458],
    [2, 600, 459, {"name":"StatementMaybeOf"}],
    [1, 6, 460],
    [1, 165, 461,
     0, 461,
     0, 465],
    [1, 6, 462],
    [";", 463],
    [1, 6, 464],
    [1, 165, 465,
     0, 465],
    [1, 6, 466],
    [")", -1],
    ["{", 468],
    [1, 6, 469],
    [0, 470,
     "@", 471,
     "}", -1],
    [3, "keyword", e[42], 472,
     2, 605, 473, {"name":"ClassItem"}],
    [1, 6, 474],
    [1, 6, 470],
    [1, 6, 469],
    [1, 165, 473],
    ["{", 476],
    [1, 479, 477,
     1, 304, 478],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 477,
     0, 478],
    [/^(?:\}|(?=\*\/))/, -1],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 480,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[24], 480,
     "{", 481,
     0, 482,
     0, -1],
    [2, 626, 483, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 484],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 484,
     0, 482],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 630]], 491,
     [5, 636], 486],
    [2, 451, 487, {"name":"ParamList"}],
    [1, 6, 488],
    [":", 489,
     0, 491],
    [1, 6, 490],
    [1, 395, 491],
    [1, 6, 492],
    [2, 643, -1, {"name":"ArrowRest"}],
    [/^\<(?! )/, -1,
     /^ */, 494],
    [1, 648, 495,
     0, 496],
    [/^ */, 496],
    ["(", -1],
    ["[", 498],
    [1, 6, 499],
    [1, 650, 500],
    [1, 6, 501],
    ["]", -1],
    ["{", 503],
    [1, 6, 504],
    [1, 656, 505],
    [1, 6, 506],
    ["}", -1],
    ["(", 508],
    [1, 6, 509],
    [1, 165, 510],
    [1, 6, 511],
    [")", -1],
    [3, "keyword", e[20], -1],
    ["(", 514],
    [1, 6, 515],
    [1, 650, 516],
    [1, 6, 517],
    [")", -1],
    [/^ */, 519],
    [1, 648, 520,
     0, 521],
    [/^ */, 521],
    ["(", -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[19], 523],
    [1, 6, 524],
    [/^[\?\:]/, -1],
    [3, "keyword", e[33], 526,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 528,
     3, "keyword", e[41], 528,
     2, 513, -1, {"name":"ArgList"},
     1, 150, -1,
     ".", 530,
     "[", 534,
     3, "operator", "?", 538],
    [1, 6, 527],
    [1, 176, -1],
    [1, 6, 529],
    [1, 385, -1],
    [1, 6, 531],
    [3, "property callee", e[43], 532,
     3, "property", e[19], -1],
    [1, 6, 533],
    [2, 389, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 535],
    [1, 165, 536],
    [1, 6, 537],
    ["]", -1],
    [1, 6, 539],
    [1, 165, 540],
    [1, 6, 541],
    [3, "operator", ":", 542],
    [1, 6, 543],
    [1, 385, -1],
    [e[19], 545],
    [1, 6, 546],
    [3, "keyword", e[44], -1],
    [e[19], 548],
    [1, 6, 549],
    [/^(?:\:|in)/, -1],
    ["[", 551],
    [1, 6, 552],
    [1, 662, 553],
    [1, 6, 554],
    ["]", -1],
    ["{", 556],
    [1, 6, 557],
    [1, 668, 558],
    [1, 6, 559],
    ["}", -1],
    ["@", 561,
     0, 562,
     0, -1],
    [1, 6, 563],
    [3, "keyword", e[42], 564,
     e[45], 565],
    [1, 165, 566],
    [1, 6, 562],
    [1, 6, 567],
    [1, 6, 560],
    [1, 448, 568],
    [1, 6, 569],
    [/^\??/, 570],
    [1, 6, 571],
    [":", 572,
     0, 573],
    [1, 6, 574],
    [1, 6, 575],
    [1, 176, 573],
    [3, "operator", "=", 576,
     0, 577],
    [1, 6, 578],
    [1, 6, 579],
    [1, 385, 577],
    [",", 580,
     0, -1],
    [1, 6, 581],
    ["@", 582,
     0, 583,
     0, 584],
    [1, 6, 585],
    [3, "keyword", e[42], 586,
     e[45], 587],
    [1, 6, 579],
    [1, 165, 588],
    [1, 6, 583],
    [1, 6, 589],
    [1, 6, 581],
    [1, 448, 590],
    [1, 6, 591],
    [/^\??/, 592],
    [1, 6, 593],
    [":", 594,
     0, 595],
    [1, 6, 596],
    [1, 6, 597],
    [1, 176, 595],
    [3, "operator", "=", 598,
     0, 584],
    [1, 6, 599],
    [1, 385, 584],
    [2, 7, 601, {"name":"Statement"}],
    [1, 6, 602],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 603,
     0, -1],
    [1, 6, 604],
    [1, 165, -1],
    [3, "keyword", e[46], 606,
     0, 606],
    [1, 6, 607],
    [3, "def property", e[19], 612,
     "[", 608,
     3, "number", e[29], 612,
     2, 141, 612, {"name":"string","token":"string"}],
    [1, 6, 609],
    [1, 165, 610],
    [1, 6, 611],
    ["]", 612],
    [1, 6, 613],
    [3, "keyword", "*", 614,
     0, 614,
     /^[\!\?]?/, 615],
    [1, 6, 616],
    [1, 6, 617],
    [2, 257, -1, {"name":"FunctionDef"}],
    [":", 618,
     0, 619],
    [1, 6, 620],
    [1, 6, 621],
    [1, 176, 619],
    [3, "operator", "=", 622,
     0, 623],
    [1, 6, 624],
    [1, 6, 625],
    [1, 165, 623],
    [e[22], -1],
    [3, "type", "{", 627,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 626,
     "\n", 628,
     0, -1],
    [2, 626, 629, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 626],
    [/^(?=\*\/)/, 626,
     3, "type", "}", 626],
    [1, 6, 631],
    [":", 632,
     0, 635],
    [1, 6, 633],
    [1, 176, 634],
    [1, 6, 635],
    ["=>", -1],
    [2, 451, 637, {"name":"ParamList"}],
    [1, 6, 638],
    [":", 639,
     0, 641],
    [1, 6, 640],
    [1, 395, 641],
    [1, 6, 642],
    ["=>", -1],
    [3, "operator", "=>", 644],
    [1, 6, 645],
    [2, 171, 646, {"name":"TypeParams"},
     0, 646],
    [1, 6, 647],
    [2, 161, -1, {"name":"Block"},
     1, 385, -1],
    ["<", 649],
    [1, 648, 649,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 649,
     ">", -1],
    [1, 385, 651,
     0, -1],
    [1, 6, 652],
    [",", 653,
     0, -1],
    [1, 6, 654],
    [1, 385, 655,
     0, 655],
    [1, 6, 652],
    [2, 674, 657, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 658],
    [",", 659,
     0, -1],
    [1, 6, 660],
    [2, 674, 661, {"name":"ObjectMember"},
     0, 661],
    [1, 6, 658],
    [1, 689, 663,
     0, 663,
     0, -1],
    [1, 6, 664],
    [",", 665,
     0, -1],
    [1, 6, 666],
    [1, 689, 667,
     0, 667,
     0, 667],
    [1, 6, 664],
    [1, 694, 669,
     0, -1],
    [1, 6, 670],
    [",", 671,
     0, -1],
    [1, 6, 672],
    [1, 694, 673,
     0, 673],
    [1, 6, 670],
    [3, "keyword", e[46], 675,
     0, 675],
    [1, 6, 676],
    [3, "keyword", "*", 677,
     0, 677],
    [1, 6, 678],
    [3, "def property", e[19], 679,
     "[", 680,
     3, "number", e[29], 679,
     2, 141, 679, {"name":"string","token":"string"},
     3, "operator", "...", 681],
    [1, 6, 682],
    [1, 6, 683],
    [1, 6, 684],
    [2, 257, -1, {"name":"FunctionDef"},
     ":", 685,
     0, -1],
    [1, 165, 686],
    [1, 385, -1],
    [1, 6, 687],
    [1, 6, 688],
    [1, 385, -1],
    ["]", 679],
    [1, 448, 690],
    [1, 6, 691],
    [3, "operator", "=", 692,
     0, -1],
    [1, 6, 693],
    [1, 385, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 695,
     3, "property", e[19], 699,
     3, "number", e[29], 699,
     2, 141, 699, {"name":"string","token":"string"},
     3, "operator", "...", 703],
    [1, 6, 696],
    [3, "operator", "=", 697,
     0, -1],
    [1, 6, 698],
    [1, 385, -1],
    [1, 6, 700],
    [":", 701],
    [1, 6, 702],
    [1, 689, -1],
    [1, 6, 704],
    [1, 689, -1]
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
      var escaped = this.isEscaped(stream, locationOfEarlyExit);
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
      debugger;
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
      var mode = CodeMirror.getMode(this.config, modeSpecs[i]);
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

  var TSMode = /*@__PURE__*/(function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.templateTokenizer = new TemplateTokenizer(conf);
      this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: conf.tabSize, indentUnit: conf.indentUnit};
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
