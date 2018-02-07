(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 120]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|.)+\//, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/];
var nodes = [
  [1, 6, 2],
  [/^[^]/, 0],
  [1, 6, 3],
  [2, 7, 4, {"name":"Statement"},
   0, 1],
  [1, 6, 3],
  [3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[23], -1,
   3, "keyword", /^do(?![a-zA-Z¡-￿_0-9_\$])/, -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[19], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[34], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[31], -1,
   3, "atom", e[30], -1,
   3, "variable", e[17], -1,
   3, "operator", e[33], -1,
   3, "operator", e[38], -1,
   3, "operator", e[37], -1,
   2, 122, -1, {"name":"string","token":"string"},
   3, "number", e[35], -1,
   2, 127, -1, {"name":"comment","token":"comment"},
   3, "string-2", e[36], -1,
   1, 133, -1,
   /^[^]/, -1],
  [e[25], 6,
   2, 127, 6, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 8,
   3, "keyword", e[1], 23,
   2, 137, -1, {"name":"Block"},
   ";", -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[3], 27,
   3, "keyword", e[4], 32,
   3, "keyword", e[5], 38,
   3, "keyword", e[6], 40,
   /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 40,
   3, "keyword", e[7], 41,
   3, "keyword", e[8], 44,
   3, "keyword", e[9], 48,
   3, "keyword", e[10], 52,
   3, "keyword", e[11], 56,
   3, "keyword", e[12], 60,
   3, "keyword", e[13], 76,
   3, "keyword", e[14], 84,
   3, "keyword", e[15], 96,
   3, "keyword", e[16], 112,
   "@", 114,
   1, 141, 118],
  [1, 6, 9],
  [1, 147, 10],
  [1, 6, 11],
  [3, "operator", "=", 12,
   0, 13],
  [1, 6, 14],
  [1, 6, 15],
  [1, 154, 13],
  [",", 16,
   e[18], -1],
  [1, 6, 17],
  [1, 147, 18],
  [1, 6, 19],
  [3, "operator", "=", 20,
   0, 21],
  [1, 6, 22],
  [1, 6, 15],
  [1, 154, 21],
  [1, 6, 24],
  [2, 158, 25, {"name":"CondExpr"}],
  [1, 6, 26],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 28],
  [2, 158, 29, {"name":"CondExpr"}],
  [1, 6, 30],
  [2, 7, 31, {"name":"Statement"}],
  [2, 163, -1, {"name":"Alternative"}],
  [1, 6, 33],
  [3, "keyword", "*", 34,
   0, 34],
  [1, 6, 35],
  [3, "def", e[17], 36],
  [1, 6, 37],
  [2, 167, -1, {"name":"FunctionDef"}],
  [1, 6, 39],
  [2, 170, -1, {"name":"ForStatement"}],
  [1, 6, 42],
  [1, 6, 43],
  [":", -1],
  [1, 141, 40],
  [1, 6, 45],
  [e[18], -1,
   1, 141, 46],
  [1, 6, 47],
  [e[18], -1],
  [1, 6, 49],
  [1, 141, 50],
  [1, 6, 51],
  [e[18], -1],
  [1, 6, 53],
  [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 54],
  [1, 6, 55],
  [e[18], -1],
  [1, 6, 57],
  [2, 158, 58, {"name":"CondExpr"}],
  [1, 6, 59],
  [2, 137, -1, {"name":"Block"}],
  [1, 6, 61],
  [2, 137, 62, {"name":"Block"}],
  [1, 6, 63],
  [3, "keyword", e[19], 64,
   0, 65],
  [1, 6, 66],
  [1, 6, 67],
  ["(", 68],
  [3, "keyword", e[20], 69,
   0, -1],
  [1, 6, 70],
  [1, 6, 71],
  [3, "def", e[17], 72],
  [2, 137, -1, {"name":"Block"}],
  [1, 6, 73],
  [")", 74],
  [1, 6, 75],
  [2, 137, 65, {"name":"Block"}],
  [1, 6, 77],
  [3, "type def", e[17], 78],
  [1, 6, 79],
  [3, "keyword", e[21], 80,
   0, 81],
  [1, 6, 82],
  [1, 6, 83],
  [1, 141, 81],
  [2, 173, -1, {"name":"ClassBody"}],
  [1, 6, 85],
  ["*", 86,
   3, "keyword", e[6], 86,
   "{", 87,
   2, 7, 88, {"name":"Statement"}],
  [1, 6, 89],
  [1, 6, 90],
  [1, 6, 91],
  [3, "keyword", e[22], 92,
   0, 88],
  [1, 181, 93],
  [e[18], -1],
  [1, 6, 94],
  [1, 6, 95],
  [2, 122, 88, {"name":"string","token":"string"}],
  ["}", 86],
  [1, 6, 97],
  [2, 122, 98, {"name":"string","token":"string"},
   3, "keyword", "*", 99,
   1, 187, 100,
   "{", 101],
  [1, 6, 102],
  [1, 6, 103],
  [1, 6, 104],
  [1, 6, 105],
  [e[18], -1],
  [3, "keyword", e[24], 106,
   0, 100],
  [3, "keyword", e[22], 107,
   0, 98],
  [1, 181, 108],
  [1, 6, 109],
  [1, 6, 110],
  [1, 6, 111],
  [3, "def", e[17], 100],
  [2, 122, 98, {"name":"string","token":"string"}],
  ["}", 100],
  [1, 6, 113],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 115],
  [1, 141, 116],
  [1, 6, 117],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 119],
  [e[18], -1],
  [1, 6, 121],
  [3, "keyword", e[4], -1,
   /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
  ["'", 123,
   "\"", 125],
  ["\\", 124,
   /^(?!\')./, 123,
   "'", -1],
  [/^[^]/, 123],
  ["\\", 126,
   /^(?!\")./, 125,
   "\"", -1],
  [/^[^]/, 125],
  [/^\/\*\*(?!\/)/, 128,
   "/*", 132,
   /^\/\/.*/, -1],
  [0, 129,
   2, 192, 128, {"name":"doccomment.braced"},
   0, 130],
  [e[29], 131],
  [2, 200, 130, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 129,
   0, 128],
  [[0, /^(?!\*\/)/, /^[^]/], 132,
   "*/", -1],
  [3, "string-2", "`", 134],
  [3, "string-2", "${", 135,
   2, 208, 134, {"name":"str2","token":"string-2"},
   3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 134,
   3, "string-2", "`", -1],
  [1, 141, 136],
  [3, "string-2", "}", 134],
  ["{", 138],
  [1, 6, 139],
  [2, 7, 140, {"name":"Statement"},
   "}", -1],
  [1, 6, 139],
  [1, 210, 142],
  [1, 6, 143],
  [",", 144,
   1, 232, 145,
   0, -1],
  [1, 6, 146],
  [1, 6, 143],
  [1, 141, 145],
  [3, "def", e[17], 150,
   3, "operator", "...", 148,
   2, 247, 150, {"name":"ArrayPattern"},
   2, 252, 150, {"name":"ObjectPattern"}],
  [1, 6, 149],
  [1, 147, 150],
  [1, 6, 151],
  [3, "operator", "=", 152,
   0, -1],
  [1, 6, 153],
  [1, 154, -1],
  [1, 210, 155],
  [1, 6, 156],
  [1, 257, 157,
   0, -1],
  [1, 6, 156],
  ["(", 159],
  [1, 6, 160],
  [1, 141, 161],
  [1, 6, 162],
  [")", -1],
  [1, 6, 164],
  [3, "keyword", e[23], 165,
   0, -1],
  [1, 6, 166],
  [2, 7, -1, {"name":"Statement"}],
  [2, 272, 168, {"name":"ParamList"}],
  [1, 6, 169],
  [2, 137, -1, {"name":"Block"}],
  [2, 277, 171, {"name":"ForSpec"}],
  [1, 6, 172],
  [2, 7, -1, {"name":"Statement"}],
  ["{", 174],
  [1, 6, 175],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 176,
   0, 176,
   "@", 177,
   "}", -1],
  [1, 6, 178],
  [1, 6, 179],
  [2, 290, 180, {"name":"ObjectMember"}],
  [1, 141, 180],
  [1, 6, 175],
  [1, 187, 182,
   0, -1],
  [1, 6, 183],
  [",", 184,
   0, -1],
  [1, 6, 185],
  [1, 187, 186,
   0, 186],
  [1, 6, 183],
  [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *as)/, 188,
   3, "def", e[17], -1],
  [1, 6, 189],
  [3, "keyword", e[24], 190],
  [1, 6, 191],
  [3, "def", e[17], -1],
  ["{", 193],
  [3, "tag", e[26], 194,
   3, "tag", e[27], 195,
   2, 305, 199, {"name":"doccomment.type","token":"type"}],
  [e[25], 194,
   "{", 196,
   0, 195],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 195,
   0, 199],
  [2, 305, 197, {"name":"doccomment.type","token":"type"}],
  ["}", 198],
  [e[25], 198,
   3, "def", e[28], 195,
   0, 195],
  ["}", -1],
  [3, "tag", e[26], 201,
   3, "tag", e[27], 205],
  [e[25], 201,
   "{", 202,
   0, 205],
  [2, 305, 203, {"name":"doccomment.type","token":"type"}],
  ["}", 204],
  [e[25], 204,
   3, "def", e[28], 205,
   0, 205],
  [0, 206,
   2, 192, 205, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 207],
  [0, 206,
   0, 205],
  ["\\", 209,
   "\n", -1],
  [/^[^]/, -1],
  [3, "atom", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], 211,
   3, "operator", e[33], 211,
   3, "keyword", e[16], 211,
   3, "keyword", e[34], 213,
   3, "keyword", e[4], 217,
   3, "keyword", e[13], 223,
   2, 306, -1, {"name":"ArrowFunc"},
   3, "variable callee", e[40], -1,
   3, "variable", e[17], -1,
   3, "number", e[35], -1,
   2, 122, -1, {"name":"string","token":"string"},
   3, "string-2", e[36], -1,
   1, 133, -1,
   2, 313, -1, {"name":"ArrayLiteral"},
   2, 318, -1, {"name":"ObjectLiteral"},
   2, 323, -1, {"name":"ParenExpr"}],
  [1, 6, 212],
  [1, 210, -1],
  [1, 6, 214],
  [".", 215,
   1, 210, -1],
  [1, 6, 216],
  [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
  [1, 6, 218],
  [3, "keyword", "*", 219,
   0, 219],
  [1, 6, 220],
  [3, "def", e[17], 221,
   0, 221],
  [1, 6, 222],
  [2, 167, -1, {"name":"FunctionDef"}],
  [1, 6, 224],
  [[6, 328], 225,
   0, 226],
  [3, "type def", e[17], 226],
  [1, 6, 227],
  [3, "keyword", e[21], 228,
   0, 229],
  [1, 6, 230],
  [1, 6, 231],
  [1, 141, 229],
  [2, 173, -1, {"name":"ClassBody"}],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 233,
   3, "keyword", e[39], 233,
   2, 329, -1, {"name":"ArgList"},
   1, 133, -1,
   ".", 235,
   "[", 237,
   3, "operator", "?", 241],
  [1, 6, 234],
  [1, 141, -1],
  [1, 6, 236],
  [3, "property callee", e[40], -1,
   3, "property", e[17], -1],
  [1, 6, 238],
  [1, 141, 239],
  [1, 6, 240],
  ["]", -1],
  [1, 6, 242],
  [1, 141, 243],
  [1, 6, 244],
  [3, "operator", ":", 245],
  [1, 6, 246],
  [1, 141, -1],
  ["[", 248],
  [1, 6, 249],
  [1, 334, 250],
  [1, 6, 251],
  ["]", -1],
  ["{", 253],
  [1, 6, 254],
  [1, 340, 255],
  [1, 6, 256],
  ["}", -1],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 258,
   3, "keyword", e[39], 258,
   2, 329, -1, {"name":"ArgList"},
   1, 133, -1,
   ".", 260,
   "[", 262,
   3, "operator", "?", 266],
  [1, 6, 259],
  [1, 154, -1],
  [1, 6, 261],
  [3, "property callee", e[40], -1,
   3, "property", e[17], -1],
  [1, 6, 263],
  [1, 141, 264],
  [1, 6, 265],
  ["]", -1],
  [1, 6, 267],
  [1, 141, 268],
  [1, 6, 269],
  [3, "operator", ":", 270],
  [1, 6, 271],
  [1, 154, -1],
  ["(", 273],
  [1, 6, 274],
  [1, 334, 275],
  [1, 6, 276],
  [")", -1],
  ["(", 278],
  [1, 6, 279],
  [2, 7, 280, {"name":"Statement"}],
  [1, 6, 281],
  [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 282,
   1, 141, 283,
   0, 283,
   0, 288],
  [1, 6, 284],
  [1, 6, 285],
  [1, 141, 288],
  [";", 286],
  [1, 6, 287],
  [1, 141, 288,
   0, 288],
  [1, 6, 289],
  [")", -1],
  [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 291,
   0, 291],
  [1, 6, 292],
  [3, "def property", e[17], 293,
   "[", 294,
   3, "number", e[35], 293,
   2, 122, 293, {"name":"string","token":"string"},
   "...", 295],
  [1, 6, 296],
  [1, 6, 297],
  [1, 6, 298],
  [3, "keyword", "*", 299,
   0, 299,
   ":", 300,
   0, -1],
  [1, 141, 301],
  [1, 154, -1],
  [1, 6, 302],
  [1, 6, 303],
  [1, 6, 304],
  [2, 167, -1, {"name":"FunctionDef"}],
  [1, 154, -1],
  ["]", 293],
  [1, 358, -1],
  [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 362]], 311,
   [0, "(", [5, 364]], 307],
  [1, 6, 308],
  [1, 334, 309],
  [1, 6, 310],
  [")", 311],
  [1, 6, 312],
  [2, 369, -1, {"name":"ArrowRest"}],
  ["[", 314],
  [1, 6, 315],
  [1, 372, 316],
  [1, 6, 317],
  ["]", -1],
  ["{", 319],
  [1, 6, 320],
  [1, 378, 321],
  [1, 6, 322],
  ["}", -1],
  ["(", 324],
  [1, 6, 325],
  [1, 141, 326],
  [1, 6, 327],
  [")", -1],
  [3, "keyword", e[21], -1],
  ["(", 330],
  [1, 6, 331],
  [1, 372, 332],
  [1, 6, 333],
  [")", -1],
  [1, 147, 335,
   0, -1],
  [1, 6, 336],
  [",", 337,
   0, -1],
  [1, 6, 338],
  [1, 147, 339,
   0, 339],
  [1, 6, 336],
  [3, "def", e[41], 341,
   3, "property", e[17], 342,
   "...", 343,
   0, -1],
  [1, 6, 344],
  [1, 6, 345],
  [1, 6, 346],
  [",", 347,
   0, -1],
  [":", 348],
  [1, 147, 341],
  [1, 6, 349],
  [1, 6, 350],
  [3, "def", e[41], 351,
   3, "property", e[17], 352,
   "...", 353,
   0, 351],
  [1, 147, 341],
  [1, 6, 344],
  [1, 6, 354],
  [1, 6, 355],
  [":", 356],
  [1, 147, 351],
  [1, 6, 357],
  [1, 147, 351],
  [/^(?!\}|\*\/)/, 359,
   0, -1],
  ["{", 360,
   /^[^]/, 358],
  [1, 358, 361],
  [/^\}?/, 358],
  [1, 6, 363],
  ["=>", -1],
  [1, 6, 365],
  [1, 334, 366],
  [")", 367],
  [1, 6, 368],
  ["=>", -1],
  [3, "operator", "=>", 370],
  [1, 6, 371],
  [2, 137, -1, {"name":"Block"},
   1, 154, -1],
  [1, 154, 373,
   0, -1],
  [1, 6, 374],
  [",", 375,
   0, -1],
  [1, 6, 376],
  [1, 154, 377,
   0, 377],
  [1, 6, 374],
  [2, 290, 379, {"name":"ObjectMember"},
   0, -1],
  [1, 6, 380],
  [",", 381,
   0, -1],
  [1, 6, 382],
  [2, 290, 383, {"name":"ObjectMember"},
   0, 383],
  [1, 6, 380]
];
var start = 0;
var token = 5;


var grammar = Object.freeze({
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

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
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
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function baseIndent(cx, config) {
  for (var startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
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

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
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
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
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
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
}

var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"];

function canInsertSemi(string, pos) {
  for (var i = pos - 1; i >= 0; i--) {
    var ch = string.charCodeAt(i);
    if (ch === 10) { break }
    if (ch !== 32 && ch !== 9) { return false }
  }
  return true
}

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

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMode("google-javascript", function (conf, modeConf) { return new JSMode(conf, modeConf); });

})));
