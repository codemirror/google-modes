(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 386], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 5, 2],
  [/^[^]/, 0],
  [2, 6, 3, {"name":"Statement"}],
  [0, 0,
   0, 1],
  [3, "keyword", e[29], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[33], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[43], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[26], -1,
   3, "type", e[27], -1,
   3, "type", e[28], -1,
   3, "atom", e[19], -1,
   3, "variable callee", e[23], -1,
   3, "variable", e[16], -1,
   3, "number", e[22], -1,
   2, 105, -1, {"name":"string","token":"string"},
   3, "operator", e[18], -1,
   3, "operator", e[24], -1,
   3, "operator", e[25], -1,
   2, 108, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [[1, " ", "\t", "\n"], 5,
   2, 108, 5, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 7,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 46,
   3, "keyword", e[4], 54,
   3, "keyword", e[5], 62,
   3, "keyword", e[6], 66,
   3, "keyword", e[7], 70,
   3, "keyword", e[8], 78,
   3, "keyword", e[9], 82,
   3, "keyword", e[10], 86,
   3, "keyword", e[11], 87,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 114]], 86,
   3, "keyword", e[12], 90,
   ";", -1,
   2, 115, 97, {"name":"BeforeStatement"},
   1, 117, 99],
  [1, 5, 8],
  ["(", 9],
  [1, 5, 10],
  [2, 6, 11, {"name":"Statement"}],
  [1, 5, 12],
  [1, 117, 13,
   0, 13],
  [1, 5, 14],
  [";", 15],
  [1, 5, 16],
  [1, 117, 17,
   0, 17],
  [1, 5, 18],
  [")", 19],
  [1, 5, 20],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 22],
  [2, 142, 23, {"name":"CondExpr"}],
  [1, 5, 24],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 26],
  [2, 147, 27, {"name":"Block"}],
  [1, 5, 28],
  [3, "keyword", e[13], 29,
   3, "keyword", e[14], 30,
   0, -1],
  [1, 5, 31],
  [1, 5, 32],
  ["(", 33],
  [2, 147, -1, {"name":"Block"}],
  [1, 5, 34],
  [3, "keyword", e[15], 35,
   1, 151, 35,
   1, 158, 36],
  [1, 5, 34],
  [1, 5, 37],
  ["|", 38,
   3, "def", e[16], 39],
  [1, 5, 40],
  [1, 5, 41],
  [1, 158, 42],
  [")", 43],
  [1, 5, 37],
  [1, 5, 44],
  [2, 147, 45, {"name":"Block"}],
  [1, 5, 28],
  [1, 5, 47],
  [2, 6, 48, {"name":"Statement"}],
  [1, 5, 49],
  [3, "keyword", e[1], 50],
  [1, 5, 51],
  [2, 142, 52, {"name":"CondExpr"}],
  [1, 5, 53],
  [";", -1],
  [1, 5, 55],
  [2, 142, 56, {"name":"CondExpr"}],
  [1, 5, 57],
  [2, 6, 58, {"name":"Statement"}],
  [1, 5, 59],
  [3, "keyword", e[17], 60,
   0, -1],
  [1, 5, 61],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 63],
  [2, 142, 64, {"name":"CondExpr"}],
  [1, 5, 65],
  [2, 147, -1, {"name":"Block"}],
  [1, 5, 67],
  [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 68],
  [1, 5, 69],
  [";", -1],
  [1, 5, 71],
  [1, 117, 72],
  [1, 5, 73],
  [":", 74,
   0, 75],
  [1, 5, 76],
  [1, 5, 77],
  [1, 117, 75],
  [";", -1],
  [1, 5, 79],
  [1, 117, 80,
   0, 80],
  [1, 5, 81],
  [";", -1],
  [1, 5, 83],
  [1, 117, 84],
  [1, 5, 85],
  [";", -1],
  [1, 5, 88],
  [1, 5, 89],
  [":", -1],
  [1, 117, 86],
  [1, 5, 91],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9])/, 92,
   0, 92],
  [1, 5, 93],
  [/^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\./, 94,
   /^(?:\*|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)/, 95],
  [1, 5, 93],
  [1, 5, 96],
  [";", -1],
  [1, 5, 98],
  [1, 169, -1],
  [1, 5, 100],
  [",", 101,
   1, 5, 102],
  [1, 5, 103],
  [";", -1],
  [1, 117, 104],
  [1, 5, 100],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 106],
  ["\\", 107,
   /^(?!\")./, 106,
   "\"", -1],
  [/^[^]/, 106],
  [/^\/\*\*(?!\/)/, 109,
   "/*", 113,
   /^\/\/.*/, -1],
  [0, 110,
   2, 215, 109, {"name":"doccomment.braced"},
   0, 111],
  [e[38], 112],
  [2, 223, 111, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 110,
   0, 109],
  [[0, /^(?!\*\/)/, /^[^]/], 113,
   "*/", -1],
  [e[34], 114,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[15], 116,
   1, 151, 116,
   0, -1],
  [1, 5, 115],
  [3, "operator", e[18], 118,
   3, "atom", e[19], 125,
   3, "keyword", e[20], 125,
   3, "keyword", e[21], 125,
   3, "number", e[22], 125,
   2, 105, 125, {"name":"string","token":"string"},
   2, 231, 125, {"name":"NewExpr"},
   2, 251, 125, {"name":"Lambda"},
   3, "variable callee", e[23], 125,
   3, "variable", e[16], 125,
   [0, [5, 260], "("], 119,
   2, 265, 125, {"name":"ParenExpr"}],
  [1, 5, 117],
  [1, 5, 120],
  [1, 158, 121],
  [1, 5, 122],
  [")", 123],
  [1, 5, 124],
  [1, 117, 125],
  [1, 5, 126],
  [2, 270, 127, {"name":"ArgList"},
   "[", 128,
   ".", 129,
   3, "operator", e[24], 127,
   3, "operator", e[25], 130,
   3, "keyword", e[26], 130,
   3, "operator", "?", 131,
   0, -1],
  [1, 5, 126],
  [1, 5, 132],
  [1, 5, 133],
  [1, 5, 134],
  [1, 5, 135],
  [1, 117, 136],
  [2, 275, 127, {"name":"TypeArgs"},
   3, "property callee", e[42], 127,
   3, "property", e[16], 127],
  [1, 117, 127],
  [1, 117, 137],
  [1, 5, 138],
  [1, 5, 139],
  ["]", 127],
  [3, "operator", ":", 140],
  [1, 5, 141],
  [1, 117, 127],
  ["(", 143],
  [1, 5, 144],
  [1, 117, 145,
   0, 145],
  [1, 5, 146],
  [")", -1],
  ["{", 148],
  [1, 5, 149],
  [2, 6, 150, {"name":"Statement"},
   "}", -1],
  [1, 5, 149],
  [2, 280, 152, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 153],
  ["(", 154,
   0, -1],
  [1, 5, 155],
  [1, 288, 156],
  [1, 5, 157],
  [")", -1],
  [1, 151, 159,
   3, "type", e[27], 162,
   0, 160,
   3, "type", e[28], 162],
  [1, 5, 158],
  [3, "meta", e[40], 161],
  [0, 160,
   2, 302, 162, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 163],
  ["[", 164,
   2, 275, 165, {"name":"TypeArgs"},
   0, -1],
  [1, 5, 166],
  [1, 5, 163],
  [1, 117, 167,
   0, 167],
  [1, 5, 168],
  ["]", 165],
  [2, 147, -1, {"name":"Block"},
   3, "keyword", e[29], 170,
   3, "keyword", e[30], 178,
   3, "keyword", e[31], 192,
   [5, 303], 199],
  [1, 5, 171],
  [3, "def", e[16], 172],
  [1, 5, 173],
  [3, "keyword", e[32], 174,
   0, 175],
  [1, 5, 176],
  [1, 5, 177],
  [1, 309, 175],
  [2, 315, -1, {"name":"EnumBody"}],
  [1, 5, 179],
  [3, "def", e[16], 180],
  [1, 5, 181],
  [2, 325, 182, {"name":"TypeParams"},
   0, 182],
  [1, 5, 183],
  [3, "keyword", e[33], 184,
   0, 185],
  [1, 5, 186],
  [1, 5, 187],
  [1, 158, 185],
  [3, "keyword", e[32], 188,
   0, 189],
  [1, 5, 190],
  [1, 5, 191],
  [1, 309, 189],
  [2, 330, -1, {"name":"ClassBody"}],
  [1, 5, 193],
  [e[16], 194],
  [1, 5, 195],
  [".", 196,
   ";", -1],
  [1, 5, 197],
  [e[16], 198],
  [1, 5, 195],
  [1, 158, 200],
  [1, 5, 201],
  [1, 334, 202],
  [1, 5, 203],
  [2, 339, -1, {"name":"FunctionDef"},
   3, "operator", "=", 204,
   0, 205],
  [1, 5, 206],
  [1, 5, 207],
  [1, 117, 205],
  [",", 208,
   ";", -1],
  [1, 5, 209],
  [1, 334, 210],
  [1, 5, 211],
  [3, "operator", "=", 212,
   0, 213],
  [1, 5, 214],
  [1, 5, 207],
  [1, 117, 213],
  ["{", 216],
  [3, "tag", e[35], 217,
   3, "tag", e[36], 218,
   2, 344, 222, {"name":"doccomment.type","token":"type"}],
  [e[34], 217,
   "{", 219,
   0, 218],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 218,
   0, 222],
  [2, 344, 220, {"name":"doccomment.type","token":"type"}],
  ["}", 221],
  [e[34], 221,
   3, "def", e[37], 218,
   0, 218],
  ["}", -1],
  [3, "tag", e[35], 224,
   3, "tag", e[36], 228],
  [e[34], 224,
   "{", 225,
   0, 228],
  [2, 344, 226, {"name":"doccomment.type","token":"type"}],
  ["}", 227],
  [e[34], 227,
   3, "def", e[37], 228,
   0, 228],
  [0, 229,
   2, 215, 228, {"name":"doccomment.braced"},
   0, -1],
  [e[38], 230],
  [0, 229,
   0, 228],
  [3, "keyword", e[39], 232],
  [1, 5, 233],
  [2, 275, 234, {"name":"TypeArgs"},
   0, 234],
  [1, 5, 235],
  [1, 151, 236,
   3, "type", e[27], 237,
   0, 238,
   3, "type", e[28], 237],
  [1, 5, 235],
  [1, 5, 239],
  [3, "meta", e[40], 240],
  [2, 275, 241, {"name":"TypeArgs"},
   1, 5, 242],
  [0, 238,
   2, 302, 237, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 239],
  ["[", 243,
   2, 270, 244, {"name":"ArgList"},
   0, 244],
  [1, 5, 245],
  [1, 5, 246],
  [1, 117, 247,
   0, 247],
  [2, 330, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 248],
  ["]", 249],
  [1, 5, 250],
  [2, 345, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 350], 252,
   [5, 353], 253],
  [3, "def", e[16], 254,
   2, 356, 254, {"name":"ParamList"}],
  [2, 361, 255, {"name":"SimpleParamList"}],
  [1, 5, 256],
  [1, 5, 257],
  [3, "operator", "->", 258],
  [3, "operator", "->", 258],
  [1, 5, 259],
  [2, 147, -1, {"name":"Block"},
   1, 117, -1],
  ["(", 261],
  [1, 5, 262],
  [3, "type", e[27], -1,
   0, 263,
   3, "type", e[28], -1],
  [3, "meta", e[40], 264],
  [0, 263,
   2, 302, -1, {"name":"qualifiedClassName","token":"qualified"}],
  ["(", 266],
  [1, 5, 267],
  [1, 117, 268,
   0, 268],
  [1, 5, 269],
  [")", -1],
  ["(", 271],
  [1, 5, 272],
  [1, 366, 273],
  [1, 5, 274],
  [")", -1],
  ["<", 276],
  [1, 5, 277],
  [1, 372, 278],
  [1, 5, 279],
  [">", -1],
  ["@", 281],
  [1, 5, 282],
  [e[16], 283],
  [1, 5, 284],
  [".", 285,
   0, -1],
  [1, 5, 286],
  [e[16], 287],
  [1, 5, 284],
  [e[41], 289,
   0, 290,
   0, -1],
  [1, 5, 291],
  [1, 5, 292],
  ["=", 290],
  [1, 151, 293,
   1, 117, 293],
  [1, 5, 294],
  [",", 295,
   0, -1],
  [1, 5, 296],
  [e[41], 297,
   0, 298],
  [1, 5, 299],
  [1, 5, 300],
  ["=", 298],
  [1, 151, 301,
   1, 117, 301],
  [1, 5, 294],
  [3, "type", e[28], -1],
  [1, 151, 304,
   2, 325, 305, {"name":"TypeParams"},
   0, 305],
  [1, 5, 303],
  [1, 5, 306],
  [3, "type", e[27], -1,
   0, 307],
  [3, "meta", e[40], 308,
   3, "type", e[28], -1],
  [1, 5, 307],
  [1, 158, 310,
   0, -1],
  [1, 5, 311],
  [",", 312,
   0, -1],
  [1, 5, 313],
  [1, 158, 314],
  [1, 5, 311],
  ["{", 316],
  [1, 5, 317],
  [1, 389, 318],
  [1, 5, 319],
  [";", 320,
   0, 323],
  [1, 5, 321],
  [2, 395, 322, {"name":"ClassItem"},
   0, 323],
  [1, 5, 321],
  [1, 5, 324],
  ["}", -1],
  ["<", 326],
  [1, 5, 327],
  [1, 402, 328],
  [1, 5, 329],
  [">", -1],
  ["{", 331],
  [1, 5, 332],
  [2, 395, 333, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 332],
  [3, "def", e[16], 335],
  [1, 5, 336],
  ["[", 337,
   0, -1],
  [1, 5, 338],
  ["]", -1],
  [2, 356, 340, {"name":"ParamList"}],
  [1, 5, 341],
  [2, 418, 342, {"name":"ThrowsClause"},
   0, 342],
  [1, 5, 343],
  [";", -1,
   2, 147, -1, {"name":"Block"}],
  [1, 421, -1],
  ["{", 346],
  [1, 5, 347],
  [1, 366, 348],
  [1, 5, 349],
  ["}", -1],
  [3, "def", e[16], 351,
   2, 356, 351, {"name":"ParamList"}],
  [1, 5, 352],
  [3, "operator", "->", -1],
  [2, 361, 354, {"name":"SimpleParamList"}],
  [1, 5, 355],
  [3, "operator", "->", -1],
  ["(", 357],
  [1, 5, 358],
  [1, 425, 359],
  [1, 5, 360],
  [")", -1],
  ["(", 362],
  [1, 5, 363],
  [1, 441, 364],
  [1, 5, 365],
  [")", -1],
  [1, 117, 367,
   0, -1],
  [1, 5, 368],
  [",", 369,
   0, -1],
  [1, 5, 370],
  [1, 117, 371],
  [1, 5, 368],
  [1, 158, 373,
   "?", 374,
   0, -1],
  [1, 5, 375],
  [1, 5, 376],
  [",", 377,
   0, -1],
  [3, "keyword", e[33], 378,
   3, "keyword", e[21], 378,
   0, 373],
  [1, 5, 379],
  [1, 5, 380],
  [1, 158, 381,
   "?", 382],
  [1, 158, 373],
  [1, 5, 375],
  [1, 5, 383],
  [3, "keyword", e[33], 384,
   3, "keyword", e[21], 384,
   0, 381],
  [1, 5, 385],
  [1, 158, 381],
  [e[16], 387],
  [1, 5, 388],
  ["=", -1],
  [2, 447, 390, {"name":"EnumConstant"},
   0, -1],
  [1, 5, 391],
  [",", 392,
   0, -1],
  [1, 5, 393],
  [2, 447, 394, {"name":"EnumConstant"}],
  [1, 5, 391],
  [2, 115, 396, {"name":"BeforeStatement"}],
  [1, 5, 397],
  [2, 325, 398, {"name":"TypeParams"},
   0, 398],
  [1, 5, 399],
  [3, "def", e[42], 400,
   1, 169, -1],
  [1, 5, 401],
  [2, 339, -1, {"name":"FunctionDef"}],
  [1, 151, 403,
   3, "type def", e[16], 404,
   0, -1],
  [1, 5, 402],
  [1, 5, 405],
  [3, "keyword", e[33], 406,
   1, 5, 407],
  [1, 5, 408],
  [",", 409,
   0, -1],
  [1, 158, 410],
  [1, 5, 411],
  [1, 5, 405],
  [1, 151, 412,
   3, "type def", e[16], 413],
  [1, 5, 411],
  [1, 5, 414],
  [3, "keyword", e[33], 415,
   1, 5, 407],
  [1, 5, 416],
  [1, 158, 417],
  [1, 5, 414],
  [3, "keyword", e[43], 419],
  [1, 5, 420],
  [1, 309, -1],
  [/^(?!\}|\*\/)/, 422,
   0, -1],
  ["{", 423,
   /^[^]/, 421],
  [1, 421, 424],
  [/^\}?/, 421],
  [1, 151, 426,
   3, "keyword", e[15], 426,
   1, 151, 426,
   1, 158, 427,
   0, -1],
  [1, 5, 425],
  [1, 5, 428],
  [e[44], 429],
  [1, 5, 430],
  [3, "keyword", e[20], 431,
   1, 334, 431],
  [1, 5, 432],
  [",", 433,
   0, -1],
  [1, 5, 434],
  [1, 151, 435,
   3, "keyword", e[15], 435,
   1, 151, 435,
   1, 158, 436],
  [1, 5, 434],
  [1, 5, 437],
  [e[44], 438],
  [1, 5, 439],
  [3, "keyword", e[20], 440,
   1, 334, 440],
  [1, 5, 432],
  [3, "def", e[16], 442,
   0, -1],
  [1, 5, 443],
  [",", 444,
   0, -1],
  [1, 5, 445],
  [3, "def", e[16], 446],
  [1, 5, 443],
  [1, 151, 448,
   0, 448],
  [1, 5, 449],
  [3, "def", e[16], 450],
  [1, 5, 451],
  [2, 270, 452, {"name":"ArgList"},
   0, 452],
  [1, 5, 453],
  [2, 330, -1, {"name":"ClassBody"},
   0, -1]
];
var start = 0;
var token = 4;


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
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
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

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualified/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
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
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template")
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
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant") {
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

var scopes = ["Block", "FunctionDef", "Lambda"];
var typeScopes = ["ClassItem", "Statement"];

var JavaMode = (function (superclass) {
  function JavaMode(conf) {
    superclass.call(this, grammar);
    this.indentConf = {align: false, tabSize: conf.tabSize, indentUnit: conf.indentUnit};
  }

  if ( superclass ) JavaMode.__proto__ = superclass;
  JavaMode.prototype = Object.create( superclass && superclass.prototype );
  JavaMode.prototype.constructor = JavaMode;

  JavaMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  JavaMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  };

  return JavaMode;
}(CodeMirror.GrammarMode));

JavaMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
JavaMode.prototype.blockCommentStart = "/*";
JavaMode.prototype.blockCommentEnd = "*/";
JavaMode.prototype.blockCommentContinue = " * ";
JavaMode.prototype.lineComment = "//";
JavaMode.prototype.fold = "brace";

CodeMirror.defineMode("google-java", function (conf) { return new JavaMode(conf); });

})));
