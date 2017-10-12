(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 125]], /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|.)+\//, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/];
var nodes = [
  [1, 6, 2],
  [/^[^]/, 0],
  [1, 6, 3],
  [2, 7, 4, {"name":"Statement"},
   0, 1],
  [1, 6, 3],
  [3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[17], -1,
   3, "keyword", /^do(?![a-zA-Z¡-￿_0-9_\$])/, -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[34], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[31], -1,
   3, "atom", e[30], -1,
   3, "variable", e[18], -1,
   3, "operator", e[33], -1,
   3, "operator", e[38], -1,
   3, "operator", e[37], -1,
   2, 127, -1, {"name":"string","token":"string"},
   3, "number", e[35], -1,
   2, 132, -1, {"name":"comment","token":"comment"},
   3, "string-2", e[36], -1,
   1, 138, -1,
   /^[^]/, -1],
  [e[25], 6,
   2, 132, 6, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 8,
   3, "keyword", e[1], 23,
   2, 142, -1, {"name":"Block"},
   ";", -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[3], 27,
   3, "keyword", e[4], 35,
   3, "keyword", e[5], 41,
   3, "keyword", e[6], 45,
   /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 45,
   3, "keyword", e[7], 46,
   3, "keyword", e[8], 49,
   3, "keyword", e[9], 53,
   3, "keyword", e[10], 57,
   3, "keyword", e[11], 61,
   3, "keyword", e[12], 65,
   3, "keyword", e[13], 81,
   3, "keyword", e[14], 89,
   3, "keyword", e[15], 101,
   3, "keyword", e[16], 117,
   "@", 119,
   1, 146, 123],
  [1, 6, 9],
  [1, 152, 10],
  [1, 6, 11],
  [3, "operator", "=", 12,
   0, 13],
  [1, 6, 14],
  [1, 6, 15],
  [1, 159, 13],
  [",", 16,
   e[19], -1],
  [1, 6, 17],
  [1, 152, 18],
  [1, 6, 19],
  [3, "operator", "=", 20,
   0, 21],
  [1, 6, 22],
  [1, 6, 15],
  [1, 159, 21],
  [1, 6, 24],
  [2, 163, 25, {"name":"CondExpr"}],
  [1, 6, 26],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 28],
  [2, 163, 29, {"name":"CondExpr"}],
  [1, 6, 30],
  [2, 7, 31, {"name":"Statement"}],
  [1, 6, 32],
  [3, "keyword", e[17], 33,
   0, -1],
  [1, 6, 34],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 36],
  [3, "keyword", "*", 37,
   0, 37],
  [1, 6, 38],
  [3, "def", e[18], 39],
  [1, 6, 40],
  [2, 168, -1, {"name":"FunctionDef"}],
  [1, 6, 42],
  [2, 171, 43, {"name":"ForSpec"}],
  [1, 6, 44],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 47],
  [1, 6, 48],
  [":", -1],
  [1, 146, 45],
  [1, 6, 50],
  [e[19], -1,
   1, 146, 51],
  [1, 6, 52],
  [e[19], -1],
  [1, 6, 54],
  [1, 146, 55],
  [1, 6, 56],
  [e[19], -1],
  [1, 6, 58],
  [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 59],
  [1, 6, 60],
  [e[19], -1],
  [1, 6, 62],
  [2, 163, 63, {"name":"CondExpr"}],
  [1, 6, 64],
  [2, 142, -1, {"name":"Block"}],
  [1, 6, 66],
  [2, 142, 67, {"name":"Block"}],
  [1, 6, 68],
  [3, "keyword", e[20], 69,
   0, 70],
  [1, 6, 71],
  [1, 6, 72],
  ["(", 73],
  [3, "keyword", e[21], 74,
   0, -1],
  [1, 6, 75],
  [1, 6, 76],
  [3, "def", e[18], 77],
  [2, 142, -1, {"name":"Block"}],
  [1, 6, 78],
  [")", 79],
  [1, 6, 80],
  [2, 142, 70, {"name":"Block"}],
  [1, 6, 82],
  [3, "def", e[18], 83],
  [1, 6, 84],
  [3, "keyword", e[22], 85,
   0, 86],
  [1, 6, 87],
  [1, 6, 88],
  [1, 146, 86],
  [2, 184, -1, {"name":"ClassBody"}],
  [1, 6, 90],
  ["*", 91,
   3, "keyword", e[6], 91,
   "{", 92,
   2, 7, 93, {"name":"Statement"}],
  [1, 6, 94],
  [1, 6, 95],
  [1, 6, 96],
  [3, "keyword", e[23], 97,
   0, 93],
  [1, 192, 98],
  [e[19], -1],
  [1, 6, 99],
  [1, 6, 100],
  [2, 127, 93, {"name":"string","token":"string"}],
  ["}", 91],
  [1, 6, 102],
  [2, 127, 103, {"name":"string","token":"string"},
   3, "keyword", "*", 104,
   1, 198, 105,
   "{", 106],
  [1, 6, 107],
  [1, 6, 108],
  [1, 6, 109],
  [1, 6, 110],
  [e[19], -1],
  [3, "keyword", e[24], 111,
   0, 105],
  [3, "keyword", e[23], 112,
   0, 103],
  [1, 192, 113],
  [1, 6, 114],
  [1, 6, 115],
  [1, 6, 116],
  [3, "def", e[18], 105],
  [2, 127, 103, {"name":"string","token":"string"}],
  ["}", 105],
  [1, 6, 118],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 120],
  [1, 146, 121],
  [1, 6, 122],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 124],
  [e[19], -1],
  [1, 6, 126],
  [3, "keyword", e[4], -1,
   /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
  ["'", 128,
   "\"", 130],
  ["\\", 129,
   /^(?!\')./, 128,
   "'", -1],
  [/^[^]/, 128],
  ["\\", 131,
   /^(?!\")./, 130,
   "\"", -1],
  [/^[^]/, 130],
  [/^\/\*\*(?!\/)/, 133,
   "/*", 137,
   /^\/\/.*/, -1],
  [0, 134,
   2, 203, 133, {"name":"doccomment.braced"},
   0, 135],
  [e[29], 136],
  [2, 211, 135, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 134,
   0, 133],
  [[0, /^(?!\*\/)/, /^[^]/], 137,
   "*/", -1],
  [3, "string-2", "`", 139],
  [3, "string-2", "${", 140,
   2, 219, 139, {"name":"str2","token":"string-2"},
   3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 139,
   3, "string-2", "`", -1],
  [1, 146, 141],
  [3, "string-2", "}", 139],
  ["{", 143],
  [1, 6, 144],
  [2, 7, 145, {"name":"Statement"},
   "}", -1],
  [1, 6, 144],
  [1, 221, 147],
  [1, 6, 148],
  [",", 149,
   1, 243, 150,
   0, -1],
  [1, 6, 151],
  [1, 6, 148],
  [1, 146, 150],
  [3, "def", e[18], 155,
   3, "operator", "...", 153,
   2, 258, 155, {"name":"ArrayPattern"},
   2, 263, 155, {"name":"ObjectPattern"}],
  [1, 6, 154],
  [1, 152, 155],
  [1, 6, 156],
  [3, "operator", "=", 157,
   0, -1],
  [1, 6, 158],
  [1, 159, -1],
  [1, 221, 160],
  [1, 6, 161],
  [1, 268, 162,
   0, -1],
  [1, 6, 161],
  ["(", 164],
  [1, 6, 165],
  [1, 146, 166],
  [1, 6, 167],
  [")", -1],
  [2, 283, 169, {"name":"ParamList"}],
  [1, 6, 170],
  [2, 142, -1, {"name":"Block"}],
  ["(", 172],
  [1, 6, 173],
  [2, 7, 174, {"name":"Statement"}],
  [1, 6, 175],
  [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 176,
   1, 146, 177,
   0, 177,
   0, 182],
  [1, 6, 178],
  [1, 6, 179],
  [1, 146, 182],
  [";", 180],
  [1, 6, 181],
  [1, 146, 182,
   0, 182],
  [1, 6, 183],
  [")", -1],
  ["{", 185],
  [1, 6, 186],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 187,
   0, 187,
   "@", 188,
   "}", -1],
  [1, 6, 189],
  [1, 6, 190],
  [2, 288, 191, {"name":"ObjectMember"}],
  [1, 146, 191],
  [1, 6, 186],
  [1, 198, 193,
   0, -1],
  [1, 6, 194],
  [",", 195,
   0, -1],
  [1, 6, 196],
  [1, 198, 197,
   0, 197],
  [1, 6, 194],
  [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *as)/, 199,
   3, "def", e[18], -1],
  [1, 6, 200],
  [3, "keyword", e[24], 201],
  [1, 6, 202],
  [3, "def", e[18], -1],
  ["{", 204],
  [3, "tag", e[26], 205,
   3, "tag", e[27], 206,
   2, 303, 210, {"name":"doccomment.type","token":"type"}],
  [e[25], 205,
   "{", 207,
   0, 206],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 206,
   0, 210],
  [2, 303, 208, {"name":"doccomment.type","token":"type"}],
  ["}", 209],
  [e[25], 209,
   3, "def", e[28], 206,
   0, 206],
  ["}", -1],
  [3, "tag", e[26], 212,
   3, "tag", e[27], 216],
  [e[25], 212,
   "{", 213,
   0, 216],
  [2, 303, 214, {"name":"doccomment.type","token":"type"}],
  ["}", 215],
  [e[25], 215,
   3, "def", e[28], 216,
   0, 216],
  [0, 217,
   2, 203, 216, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 218],
  [0, 217,
   0, 216],
  ["\\", 220,
   "\n", -1],
  [/^[^]/, -1],
  [3, "atom", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], 222,
   3, "operator", e[33], 222,
   3, "keyword", e[16], 222,
   3, "keyword", e[34], 224,
   3, "keyword", e[4], 228,
   3, "keyword", e[13], 234,
   2, 304, -1, {"name":"ArrowFunc"},
   3, "variable callee", e[40], -1,
   3, "variable", e[18], -1,
   3, "number", e[35], -1,
   2, 127, -1, {"name":"string","token":"string"},
   3, "string-2", e[36], -1,
   1, 138, -1,
   2, 311, -1, {"name":"ArrayLiteral"},
   2, 316, -1, {"name":"ObjectLiteral"},
   2, 321, -1, {"name":"ParenExpr"}],
  [1, 6, 223],
  [1, 221, -1],
  [1, 6, 225],
  [".", 226,
   1, 221, -1],
  [1, 6, 227],
  [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
  [1, 6, 229],
  [3, "keyword", "*", 230,
   0, 230],
  [1, 6, 231],
  [3, "def", e[18], 232,
   0, 232],
  [1, 6, 233],
  [2, 168, -1, {"name":"FunctionDef"}],
  [1, 6, 235],
  [[6, 326], 236,
   0, 237],
  [3, "def", e[18], 237],
  [1, 6, 238],
  [3, "keyword", e[22], 239,
   0, 240],
  [1, 6, 241],
  [1, 6, 242],
  [1, 146, 240],
  [2, 184, -1, {"name":"ClassBody"}],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 244,
   3, "keyword", e[39], 244,
   2, 327, -1, {"name":"ArgList"},
   1, 138, -1,
   ".", 246,
   "[", 248,
   3, "operator", "?", 252],
  [1, 6, 245],
  [1, 146, -1],
  [1, 6, 247],
  [3, "property callee", e[40], -1,
   3, "property", e[18], -1],
  [1, 6, 249],
  [1, 146, 250],
  [1, 6, 251],
  ["]", -1],
  [1, 6, 253],
  [1, 146, 254],
  [1, 6, 255],
  [3, "operator", ":", 256],
  [1, 6, 257],
  [1, 146, -1],
  ["[", 259],
  [1, 6, 260],
  [1, 332, 261],
  [1, 6, 262],
  ["]", -1],
  ["{", 264],
  [1, 6, 265],
  [1, 338, 266],
  [1, 6, 267],
  ["}", -1],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 269,
   3, "keyword", e[39], 269,
   2, 327, -1, {"name":"ArgList"},
   1, 138, -1,
   ".", 271,
   "[", 273,
   3, "operator", "?", 277],
  [1, 6, 270],
  [1, 159, -1],
  [1, 6, 272],
  [3, "property callee", e[40], -1,
   3, "property", e[18], -1],
  [1, 6, 274],
  [1, 146, 275],
  [1, 6, 276],
  ["]", -1],
  [1, 6, 278],
  [1, 146, 279],
  [1, 6, 280],
  [3, "operator", ":", 281],
  [1, 6, 282],
  [1, 159, -1],
  ["(", 284],
  [1, 6, 285],
  [1, 332, 286],
  [1, 6, 287],
  [")", -1],
  [3, "keyword", e[42], 289,
   0, 289],
  [1, 6, 290],
  [3, "def", e[18], 291,
   "[", 292,
   3, "number", e[35], 291,
   2, 127, 291, {"name":"string","token":"string"},
   "...", 293],
  [1, 6, 294],
  [1, 6, 295],
  [1, 6, 296],
  [3, "keyword", "*", 297,
   0, 297,
   ":", 298,
   0, -1],
  [1, 146, 299],
  [1, 159, -1],
  [1, 6, 300],
  [1, 6, 301],
  [1, 6, 302],
  [2, 168, -1, {"name":"FunctionDef"}],
  [1, 159, -1],
  ["]", 291],
  [1, 356, -1],
  [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 360]], 309,
   [0, "(", [5, 362]], 305],
  [1, 6, 306],
  [1, 332, 307],
  [1, 6, 308],
  [")", 309],
  [1, 6, 310],
  [2, 367, -1, {"name":"ArrowRest"}],
  ["[", 312],
  [1, 6, 313],
  [1, 370, 314],
  [1, 6, 315],
  ["]", -1],
  ["{", 317],
  [1, 6, 318],
  [1, 376, 319],
  [1, 6, 320],
  ["}", -1],
  ["(", 322],
  [1, 6, 323],
  [1, 146, 324],
  [1, 6, 325],
  [")", -1],
  [3, "keyword", e[22], -1],
  ["(", 328],
  [1, 6, 329],
  [1, 370, 330],
  [1, 6, 331],
  [")", -1],
  [1, 152, 333,
   0, -1],
  [1, 6, 334],
  [",", 335,
   0, -1],
  [1, 6, 336],
  [1, 152, 337,
   0, 337],
  [1, 6, 334],
  [3, "def", e[41], 339,
   3, "property", e[18], 340,
   "...", 341,
   0, -1],
  [1, 6, 342],
  [1, 6, 343],
  [1, 6, 344],
  [",", 345,
   0, -1],
  [":", 346],
  [1, 152, 339],
  [1, 6, 347],
  [1, 6, 348],
  [3, "def", e[41], 349,
   3, "property", e[18], 350,
   "...", 351,
   0, 349],
  [1, 152, 339],
  [1, 6, 342],
  [1, 6, 352],
  [1, 6, 353],
  [":", 354],
  [1, 152, 349],
  [1, 6, 355],
  [1, 152, 349],
  [/^(?!\}|\*\/)/, 357,
   0, -1],
  ["{", 358,
   /^[^]/, 356],
  [1, 356, 359],
  [/^\}?/, 356],
  [1, 6, 361],
  ["=>", -1],
  [1, 6, 363],
  [1, 332, 364],
  [")", 365],
  [1, 6, 366],
  ["=>", -1],
  [3, "operator", "=>", 368],
  [1, 6, 369],
  [2, 142, -1, {"name":"Block"},
   1, 159, -1],
  [1, 159, 371,
   0, -1],
  [1, 6, 372],
  [",", 373,
   0, -1],
  [1, 6, 374],
  [1, 159, 375,
   0, 375],
  [1, 6, 372],
  [2, 382, 377, {"name":"ObjectMember"},
   0, -1],
  [1, 6, 378],
  [",", 379,
   0, -1],
  [1, 6, 380],
  [2, 382, 381, {"name":"ObjectMember"},
   0, 381],
  [1, 6, 378],
  [3, "keyword", e[42], 383,
   0, 383],
  [1, 6, 384],
  [3, "property", e[18], 385,
   "[", 386,
   3, "number", e[35], 385,
   2, 127, 385, {"name":"string","token":"string"},
   "...", 387],
  [1, 6, 388],
  [1, 6, 389],
  [1, 6, 390],
  [3, "keyword", "*", 391,
   0, 391,
   ":", 392,
   0, -1],
  [1, 146, 393],
  [1, 159, -1],
  [1, 6, 394],
  [1, 6, 395],
  [1, 6, 396],
  [2, 168, -1, {"name":"FunctionDef"}],
  [1, 159, -1],
  ["]", 385]
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

function isNamespace(context) {
  return context && context.name == "Statement" &&
    /^namespace\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

var scopes = ["Block", "FunctionDef", "ArrowFunc"];

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
