(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 123]], /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|.)+\//, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/];
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
   2, 125, -1, {"name":"string","token":"string"},
   3, "number", e[35], -1,
   2, 130, -1, {"name":"comment","token":"comment"},
   3, "string-2", e[36], -1,
   1, 136, -1,
   /^[^]/, -1],
  [e[25], 6,
   2, 130, 6, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 8,
   3, "keyword", e[1], 23,
   2, 140, -1, {"name":"Block"},
   ";", -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[3], 27,
   3, "keyword", e[4], 35,
   3, "keyword", e[5], 41,
   3, "keyword", e[6], 43,
   /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 43,
   3, "keyword", e[7], 44,
   3, "keyword", e[8], 47,
   3, "keyword", e[9], 51,
   3, "keyword", e[10], 55,
   3, "keyword", e[11], 59,
   3, "keyword", e[12], 63,
   3, "keyword", e[13], 79,
   3, "keyword", e[14], 87,
   3, "keyword", e[15], 99,
   3, "keyword", e[16], 115,
   "@", 117,
   1, 144, 121],
  [1, 6, 9],
  [1, 150, 10],
  [1, 6, 11],
  [3, "operator", "=", 12,
   0, 13],
  [1, 6, 14],
  [1, 6, 15],
  [1, 157, 13],
  [",", 16,
   e[19], -1],
  [1, 6, 17],
  [1, 150, 18],
  [1, 6, 19],
  [3, "operator", "=", 20,
   0, 21],
  [1, 6, 22],
  [1, 6, 15],
  [1, 157, 21],
  [1, 6, 24],
  [2, 161, 25, {"name":"CondExpr"}],
  [1, 6, 26],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 28],
  [2, 161, 29, {"name":"CondExpr"}],
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
  [2, 166, -1, {"name":"FunctionDef"}],
  [1, 6, 42],
  [2, 169, -1, {"name":"ForStatement"}],
  [1, 6, 45],
  [1, 6, 46],
  [":", -1],
  [1, 144, 43],
  [1, 6, 48],
  [e[19], -1,
   1, 144, 49],
  [1, 6, 50],
  [e[19], -1],
  [1, 6, 52],
  [1, 144, 53],
  [1, 6, 54],
  [e[19], -1],
  [1, 6, 56],
  [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 57],
  [1, 6, 58],
  [e[19], -1],
  [1, 6, 60],
  [2, 161, 61, {"name":"CondExpr"}],
  [1, 6, 62],
  [2, 140, -1, {"name":"Block"}],
  [1, 6, 64],
  [2, 140, 65, {"name":"Block"}],
  [1, 6, 66],
  [3, "keyword", e[20], 67,
   0, 68],
  [1, 6, 69],
  [1, 6, 70],
  ["(", 71],
  [3, "keyword", e[21], 72,
   0, -1],
  [1, 6, 73],
  [1, 6, 74],
  [3, "def", e[18], 75],
  [2, 140, -1, {"name":"Block"}],
  [1, 6, 76],
  [")", 77],
  [1, 6, 78],
  [2, 140, 68, {"name":"Block"}],
  [1, 6, 80],
  [3, "type def", e[18], 81],
  [1, 6, 82],
  [3, "keyword", e[22], 83,
   0, 84],
  [1, 6, 85],
  [1, 6, 86],
  [1, 144, 84],
  [2, 172, -1, {"name":"ClassBody"}],
  [1, 6, 88],
  ["*", 89,
   3, "keyword", e[6], 89,
   "{", 90,
   2, 7, 91, {"name":"Statement"}],
  [1, 6, 92],
  [1, 6, 93],
  [1, 6, 94],
  [3, "keyword", e[23], 95,
   0, 91],
  [1, 180, 96],
  [e[19], -1],
  [1, 6, 97],
  [1, 6, 98],
  [2, 125, 91, {"name":"string","token":"string"}],
  ["}", 89],
  [1, 6, 100],
  [2, 125, 101, {"name":"string","token":"string"},
   3, "keyword", "*", 102,
   1, 186, 103,
   "{", 104],
  [1, 6, 105],
  [1, 6, 106],
  [1, 6, 107],
  [1, 6, 108],
  [e[19], -1],
  [3, "keyword", e[24], 109,
   0, 103],
  [3, "keyword", e[23], 110,
   0, 101],
  [1, 180, 111],
  [1, 6, 112],
  [1, 6, 113],
  [1, 6, 114],
  [3, "def", e[18], 103],
  [2, 125, 101, {"name":"string","token":"string"}],
  ["}", 103],
  [1, 6, 116],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 118],
  [1, 144, 119],
  [1, 6, 120],
  [2, 7, -1, {"name":"Statement"}],
  [1, 6, 122],
  [e[19], -1],
  [1, 6, 124],
  [3, "keyword", e[4], -1,
   /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
  ["'", 126,
   "\"", 128],
  ["\\", 127,
   /^(?!\')./, 126,
   "'", -1],
  [/^[^]/, 126],
  ["\\", 129,
   /^(?!\")./, 128,
   "\"", -1],
  [/^[^]/, 128],
  [/^\/\*\*(?!\/)/, 131,
   "/*", 135,
   /^\/\/.*/, -1],
  [0, 132,
   2, 191, 131, {"name":"doccomment.braced"},
   0, 133],
  [e[29], 134],
  [2, 199, 133, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 132,
   0, 131],
  [[0, /^(?!\*\/)/, /^[^]/], 135,
   "*/", -1],
  [3, "string-2", "`", 137],
  [3, "string-2", "${", 138,
   2, 207, 137, {"name":"str2","token":"string-2"},
   3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 137,
   3, "string-2", "`", -1],
  [1, 144, 139],
  [3, "string-2", "}", 137],
  ["{", 141],
  [1, 6, 142],
  [2, 7, 143, {"name":"Statement"},
   "}", -1],
  [1, 6, 142],
  [1, 209, 145],
  [1, 6, 146],
  [",", 147,
   1, 231, 148,
   0, -1],
  [1, 6, 149],
  [1, 6, 146],
  [1, 144, 148],
  [3, "def", e[18], 153,
   3, "operator", "...", 151,
   2, 246, 153, {"name":"ArrayPattern"},
   2, 251, 153, {"name":"ObjectPattern"}],
  [1, 6, 152],
  [1, 150, 153],
  [1, 6, 154],
  [3, "operator", "=", 155,
   0, -1],
  [1, 6, 156],
  [1, 157, -1],
  [1, 209, 158],
  [1, 6, 159],
  [1, 256, 160,
   0, -1],
  [1, 6, 159],
  ["(", 162],
  [1, 6, 163],
  [1, 144, 164],
  [1, 6, 165],
  [")", -1],
  [2, 271, 167, {"name":"ParamList"}],
  [1, 6, 168],
  [2, 140, -1, {"name":"Block"}],
  [2, 276, 170, {"name":"ForSpec"}],
  [1, 6, 171],
  [2, 7, -1, {"name":"Statement"}],
  ["{", 173],
  [1, 6, 174],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 175,
   0, 175,
   "@", 176,
   "}", -1],
  [1, 6, 177],
  [1, 6, 178],
  [2, 289, 179, {"name":"ObjectMember"}],
  [1, 144, 179],
  [1, 6, 174],
  [1, 186, 181,
   0, -1],
  [1, 6, 182],
  [",", 183,
   0, -1],
  [1, 6, 184],
  [1, 186, 185,
   0, 185],
  [1, 6, 182],
  [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *as)/, 187,
   3, "def", e[18], -1],
  [1, 6, 188],
  [3, "keyword", e[24], 189],
  [1, 6, 190],
  [3, "def", e[18], -1],
  ["{", 192],
  [3, "tag", e[26], 193,
   3, "tag", e[27], 194,
   2, 304, 198, {"name":"doccomment.type","token":"type"}],
  [e[25], 193,
   "{", 195,
   0, 194],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 194,
   0, 198],
  [2, 304, 196, {"name":"doccomment.type","token":"type"}],
  ["}", 197],
  [e[25], 197,
   3, "def", e[28], 194,
   0, 194],
  ["}", -1],
  [3, "tag", e[26], 200,
   3, "tag", e[27], 204],
  [e[25], 200,
   "{", 201,
   0, 204],
  [2, 304, 202, {"name":"doccomment.type","token":"type"}],
  ["}", 203],
  [e[25], 203,
   3, "def", e[28], 204,
   0, 204],
  [0, 205,
   2, 191, 204, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 206],
  [0, 205,
   0, 204],
  ["\\", 208,
   "\n", -1],
  [/^[^]/, -1],
  [3, "atom", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], 210,
   3, "operator", e[33], 210,
   3, "keyword", e[16], 210,
   3, "keyword", e[34], 212,
   3, "keyword", e[4], 216,
   3, "keyword", e[13], 222,
   2, 305, -1, {"name":"ArrowFunc"},
   3, "variable callee", e[40], -1,
   3, "variable", e[18], -1,
   3, "number", e[35], -1,
   2, 125, -1, {"name":"string","token":"string"},
   3, "string-2", e[36], -1,
   1, 136, -1,
   2, 312, -1, {"name":"ArrayLiteral"},
   2, 317, -1, {"name":"ObjectLiteral"},
   2, 322, -1, {"name":"ParenExpr"}],
  [1, 6, 211],
  [1, 209, -1],
  [1, 6, 213],
  [".", 214,
   1, 209, -1],
  [1, 6, 215],
  [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
  [1, 6, 217],
  [3, "keyword", "*", 218,
   0, 218],
  [1, 6, 219],
  [3, "def", e[18], 220,
   0, 220],
  [1, 6, 221],
  [2, 166, -1, {"name":"FunctionDef"}],
  [1, 6, 223],
  [[6, 327], 224,
   0, 225],
  [3, "type def", e[18], 225],
  [1, 6, 226],
  [3, "keyword", e[22], 227,
   0, 228],
  [1, 6, 229],
  [1, 6, 230],
  [1, 144, 228],
  [2, 172, -1, {"name":"ClassBody"}],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 232,
   3, "keyword", e[39], 232,
   2, 328, -1, {"name":"ArgList"},
   1, 136, -1,
   ".", 234,
   "[", 236,
   3, "operator", "?", 240],
  [1, 6, 233],
  [1, 144, -1],
  [1, 6, 235],
  [3, "property callee", e[40], -1,
   3, "property", e[18], -1],
  [1, 6, 237],
  [1, 144, 238],
  [1, 6, 239],
  ["]", -1],
  [1, 6, 241],
  [1, 144, 242],
  [1, 6, 243],
  [3, "operator", ":", 244],
  [1, 6, 245],
  [1, 144, -1],
  ["[", 247],
  [1, 6, 248],
  [1, 333, 249],
  [1, 6, 250],
  ["]", -1],
  ["{", 252],
  [1, 6, 253],
  [1, 339, 254],
  [1, 6, 255],
  ["}", -1],
  [3, "operator", e[37], -1,
   3, "operator", e[38], 257,
   3, "keyword", e[39], 257,
   2, 328, -1, {"name":"ArgList"},
   1, 136, -1,
   ".", 259,
   "[", 261,
   3, "operator", "?", 265],
  [1, 6, 258],
  [1, 157, -1],
  [1, 6, 260],
  [3, "property callee", e[40], -1,
   3, "property", e[18], -1],
  [1, 6, 262],
  [1, 144, 263],
  [1, 6, 264],
  ["]", -1],
  [1, 6, 266],
  [1, 144, 267],
  [1, 6, 268],
  [3, "operator", ":", 269],
  [1, 6, 270],
  [1, 157, -1],
  ["(", 272],
  [1, 6, 273],
  [1, 333, 274],
  [1, 6, 275],
  [")", -1],
  ["(", 277],
  [1, 6, 278],
  [2, 7, 279, {"name":"Statement"}],
  [1, 6, 280],
  [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 281,
   1, 144, 282,
   0, 282,
   0, 287],
  [1, 6, 283],
  [1, 6, 284],
  [1, 144, 287],
  [";", 285],
  [1, 6, 286],
  [1, 144, 287,
   0, 287],
  [1, 6, 288],
  [")", -1],
  [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 290,
   0, 290],
  [1, 6, 291],
  [3, "def property", e[18], 292,
   "[", 293,
   3, "number", e[35], 292,
   2, 125, 292, {"name":"string","token":"string"},
   "...", 294],
  [1, 6, 295],
  [1, 6, 296],
  [1, 6, 297],
  [3, "keyword", "*", 298,
   0, 298,
   ":", 299,
   0, -1],
  [1, 144, 300],
  [1, 157, -1],
  [1, 6, 301],
  [1, 6, 302],
  [1, 6, 303],
  [2, 166, -1, {"name":"FunctionDef"}],
  [1, 157, -1],
  ["]", 292],
  [1, 357, -1],
  [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 361]], 310,
   [0, "(", [5, 363]], 306],
  [1, 6, 307],
  [1, 333, 308],
  [1, 6, 309],
  [")", 310],
  [1, 6, 311],
  [2, 368, -1, {"name":"ArrowRest"}],
  ["[", 313],
  [1, 6, 314],
  [1, 371, 315],
  [1, 6, 316],
  ["]", -1],
  ["{", 318],
  [1, 6, 319],
  [1, 377, 320],
  [1, 6, 321],
  ["}", -1],
  ["(", 323],
  [1, 6, 324],
  [1, 144, 325],
  [1, 6, 326],
  [")", -1],
  [3, "keyword", e[22], -1],
  ["(", 329],
  [1, 6, 330],
  [1, 371, 331],
  [1, 6, 332],
  [")", -1],
  [1, 150, 334,
   0, -1],
  [1, 6, 335],
  [",", 336,
   0, -1],
  [1, 6, 337],
  [1, 150, 338,
   0, 338],
  [1, 6, 335],
  [3, "def", e[41], 340,
   3, "property", e[18], 341,
   "...", 342,
   0, -1],
  [1, 6, 343],
  [1, 6, 344],
  [1, 6, 345],
  [",", 346,
   0, -1],
  [":", 347],
  [1, 150, 340],
  [1, 6, 348],
  [1, 6, 349],
  [3, "def", e[41], 350,
   3, "property", e[18], 351,
   "...", 352,
   0, 350],
  [1, 150, 340],
  [1, 6, 343],
  [1, 6, 353],
  [1, 6, 354],
  [":", 355],
  [1, 150, 350],
  [1, 6, 356],
  [1, 150, 350],
  [/^(?!\}|\*\/)/, 358,
   0, -1],
  ["{", 359,
   /^[^]/, 357],
  [1, 357, 360],
  [/^\}?/, 357],
  [1, 6, 362],
  ["=>", -1],
  [1, 6, 364],
  [1, 333, 365],
  [")", 366],
  [1, 6, 367],
  ["=>", -1],
  [3, "operator", "=>", 369],
  [1, 6, 370],
  [2, 140, -1, {"name":"Block"},
   1, 157, -1],
  [1, 157, 372,
   0, -1],
  [1, 6, 373],
  [",", 374,
   0, -1],
  [1, 6, 375],
  [1, 157, 376,
   0, 376],
  [1, 6, 373],
  [2, 289, 378, {"name":"ObjectMember"},
   0, -1],
  [1, 6, 379],
  [",", 380,
   0, -1],
  [1, 6, 381],
  [2, 289, 382, {"name":"ObjectMember"},
   0, 382],
  [1, 6, 379]
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

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
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

    if (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" || cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || cx.name == "NamespaceBlock" ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    var base = statementIndent(cx, config), sub;
    if (!curLine && (sub = hasSubStatement(cx)))
      { return base + (sub == "if" && (/[{;]\s*(\/\/.*)?$/.test(cx.startLine) || /^else\b/.test(textAfter)) ? 0 : config.indentUnit); }
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
