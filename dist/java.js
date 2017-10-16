(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 383], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
   2, 102, -1, {"name":"string","token":"string"},
   3, "operator", e[18], -1,
   3, "operator", e[24], -1,
   3, "operator", e[25], -1,
   2, 105, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [[1, " ", "\t", "\n"], 5,
   2, 105, 5, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 7,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 43,
   3, "keyword", e[4], 51,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 63,
   3, "keyword", e[7], 67,
   3, "keyword", e[8], 75,
   3, "keyword", e[9], 79,
   3, "keyword", e[10], 83,
   3, "keyword", e[11], 84,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 111]], 83,
   3, "keyword", e[12], 87,
   ";", -1,
   2, 112, 94, {"name":"BeforeStatement"},
   1, 114, 96],
  [1, 5, 8],
  ["(", 9],
  [1, 5, 10],
  [2, 6, 11, {"name":"Statement"}],
  [1, 5, 12],
  [1, 114, 13,
   0, 13],
  [1, 5, 14],
  [";", 15],
  [1, 5, 16],
  [1, 114, 17,
   0, 17],
  [1, 5, 18],
  [")", 19],
  [1, 5, 20],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 22],
  [2, 139, 23, {"name":"CondExpr"}],
  [1, 5, 24],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 26],
  [2, 144, 27, {"name":"Block"}],
  [1, 5, 28],
  [3, "keyword", e[13], 29,
   3, "keyword", e[14], 30,
   0, -1],
  [1, 5, 31],
  [1, 5, 32],
  ["(", 33],
  [2, 144, -1, {"name":"Block"}],
  [1, 5, 34],
  [3, "keyword", e[15], 35,
   1, 148, 35,
   1, 155, 36],
  [1, 5, 34],
  [1, 5, 37],
  [3, "def", e[16], 38],
  [1, 5, 39],
  [")", 40],
  [1, 5, 41],
  [2, 144, 42, {"name":"Block"}],
  [1, 5, 28],
  [1, 5, 44],
  [2, 6, 45, {"name":"Statement"}],
  [1, 5, 46],
  [3, "keyword", e[1], 47],
  [1, 5, 48],
  [2, 139, 49, {"name":"CondExpr"}],
  [1, 5, 50],
  [";", -1],
  [1, 5, 52],
  [2, 139, 53, {"name":"CondExpr"}],
  [1, 5, 54],
  [2, 6, 55, {"name":"Statement"}],
  [1, 5, 56],
  [3, "keyword", e[17], 57,
   0, -1],
  [1, 5, 58],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 60],
  [2, 139, 61, {"name":"CondExpr"}],
  [1, 5, 62],
  [2, 144, -1, {"name":"Block"}],
  [1, 5, 64],
  [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 65],
  [1, 5, 66],
  [";", -1],
  [1, 5, 68],
  [1, 114, 69],
  [1, 5, 70],
  [":", 71,
   0, 72],
  [1, 5, 73],
  [1, 5, 74],
  [1, 114, 72],
  [";", -1],
  [1, 5, 76],
  [1, 114, 77,
   0, 77],
  [1, 5, 78],
  [";", -1],
  [1, 5, 80],
  [1, 114, 81],
  [1, 5, 82],
  [";", -1],
  [1, 5, 85],
  [1, 5, 86],
  [":", -1],
  [1, 114, 83],
  [1, 5, 88],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9])/, 89,
   0, 89],
  [1, 5, 90],
  [/^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\./, 91,
   /^(?:\*|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)/, 92],
  [1, 5, 90],
  [1, 5, 93],
  [";", -1],
  [1, 5, 95],
  [1, 166, -1],
  [1, 5, 97],
  [",", 98,
   1, 5, 99],
  [1, 5, 100],
  [";", -1],
  [1, 114, 101],
  [1, 5, 97],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 103],
  ["\\", 104,
   /^(?!\")./, 103,
   "\"", -1],
  [/^[^]/, 103],
  [/^\/\*\*(?!\/)/, 106,
   "/*", 110,
   /^\/\/.*/, -1],
  [0, 107,
   2, 212, 106, {"name":"doccomment.braced"},
   0, 108],
  [e[38], 109],
  [2, 220, 108, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 107,
   0, 106],
  [[0, /^(?!\*\/)/, /^[^]/], 110,
   "*/", -1],
  [e[34], 111,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[15], 113,
   1, 148, 113,
   0, -1],
  [1, 5, 112],
  [3, "operator", e[18], 115,
   3, "atom", e[19], 122,
   3, "keyword", e[20], 122,
   3, "keyword", e[21], 122,
   3, "number", e[22], 122,
   2, 102, 122, {"name":"string","token":"string"},
   2, 228, 122, {"name":"NewExpr"},
   2, 248, 122, {"name":"Lambda"},
   3, "variable callee", e[23], 122,
   3, "variable", e[16], 122,
   [0, [5, 257], "("], 116,
   2, 262, 122, {"name":"ParenExpr"}],
  [1, 5, 114],
  [1, 5, 117],
  [1, 155, 118],
  [1, 5, 119],
  [")", 120],
  [1, 5, 121],
  [1, 114, 122],
  [1, 5, 123],
  [2, 267, 124, {"name":"ArgList"},
   "[", 125,
   ".", 126,
   3, "operator", e[24], 124,
   3, "operator", e[25], 127,
   3, "keyword", e[26], 127,
   3, "operator", "?", 128,
   0, -1],
  [1, 5, 123],
  [1, 5, 129],
  [1, 5, 130],
  [1, 5, 131],
  [1, 5, 132],
  [1, 114, 133],
  [2, 272, 124, {"name":"TypeArgs"},
   3, "property callee", e[42], 124,
   3, "property", e[16], 124],
  [1, 114, 124],
  [1, 114, 134],
  [1, 5, 135],
  [1, 5, 136],
  ["]", 124],
  [3, "operator", ":", 137],
  [1, 5, 138],
  [1, 114, 124],
  ["(", 140],
  [1, 5, 141],
  [1, 114, 142,
   0, 142],
  [1, 5, 143],
  [")", -1],
  ["{", 145],
  [1, 5, 146],
  [2, 6, 147, {"name":"Statement"},
   "}", -1],
  [1, 5, 146],
  [2, 277, 149, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 150],
  ["(", 151,
   0, -1],
  [1, 5, 152],
  [1, 285, 153],
  [1, 5, 154],
  [")", -1],
  [1, 148, 156,
   3, "type", e[27], 159,
   0, 157,
   3, "type", e[28], 159],
  [1, 5, 155],
  [3, "meta", e[40], 158],
  [0, 157,
   2, 299, 159, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 160],
  ["[", 161,
   2, 272, 162, {"name":"TypeArgs"},
   0, -1],
  [1, 5, 163],
  [1, 5, 160],
  [1, 114, 164,
   0, 164],
  [1, 5, 165],
  ["]", 162],
  [2, 144, -1, {"name":"Block"},
   3, "keyword", e[29], 167,
   3, "keyword", e[30], 175,
   3, "keyword", e[31], 189,
   [5, 300], 196],
  [1, 5, 168],
  [3, "def", e[16], 169],
  [1, 5, 170],
  [3, "keyword", e[32], 171,
   0, 172],
  [1, 5, 173],
  [1, 5, 174],
  [1, 306, 172],
  [2, 312, -1, {"name":"EnumBody"}],
  [1, 5, 176],
  [3, "def", e[16], 177],
  [1, 5, 178],
  [2, 322, 179, {"name":"TypeParams"},
   0, 179],
  [1, 5, 180],
  [3, "keyword", e[33], 181,
   0, 182],
  [1, 5, 183],
  [1, 5, 184],
  [1, 155, 182],
  [3, "keyword", e[32], 185,
   0, 186],
  [1, 5, 187],
  [1, 5, 188],
  [1, 306, 186],
  [2, 327, -1, {"name":"ClassBody"}],
  [1, 5, 190],
  [e[16], 191],
  [1, 5, 192],
  [".", 193,
   ";", -1],
  [1, 5, 194],
  [e[16], 195],
  [1, 5, 192],
  [1, 155, 197],
  [1, 5, 198],
  [1, 331, 199],
  [1, 5, 200],
  [2, 336, -1, {"name":"FunctionDef"},
   3, "operator", "=", 201,
   0, 202],
  [1, 5, 203],
  [1, 5, 204],
  [1, 114, 202],
  [",", 205,
   ";", -1],
  [1, 5, 206],
  [1, 331, 207],
  [1, 5, 208],
  [3, "operator", "=", 209,
   0, 210],
  [1, 5, 211],
  [1, 5, 204],
  [1, 114, 210],
  ["{", 213],
  [3, "tag", e[35], 214,
   3, "tag", e[36], 215,
   2, 341, 219, {"name":"doccomment.type","token":"type"}],
  [e[34], 214,
   "{", 216,
   0, 215],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 215,
   0, 219],
  [2, 341, 217, {"name":"doccomment.type","token":"type"}],
  ["}", 218],
  [e[34], 218,
   3, "def", e[37], 215,
   0, 215],
  ["}", -1],
  [3, "tag", e[35], 221,
   3, "tag", e[36], 225],
  [e[34], 221,
   "{", 222,
   0, 225],
  [2, 341, 223, {"name":"doccomment.type","token":"type"}],
  ["}", 224],
  [e[34], 224,
   3, "def", e[37], 225,
   0, 225],
  [0, 226,
   2, 212, 225, {"name":"doccomment.braced"},
   0, -1],
  [e[38], 227],
  [0, 226,
   0, 225],
  [3, "keyword", e[39], 229],
  [1, 5, 230],
  [2, 272, 231, {"name":"TypeArgs"},
   0, 231],
  [1, 5, 232],
  [1, 148, 233,
   3, "type", e[27], 234,
   0, 235,
   3, "type", e[28], 234],
  [1, 5, 232],
  [1, 5, 236],
  [3, "meta", e[40], 237],
  [2, 272, 238, {"name":"TypeArgs"},
   1, 5, 239],
  [0, 235,
   2, 299, 234, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 236],
  ["[", 240,
   2, 267, 241, {"name":"ArgList"},
   0, 241],
  [1, 5, 242],
  [1, 5, 243],
  [1, 114, 244,
   0, 244],
  [2, 327, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 245],
  ["]", 246],
  [1, 5, 247],
  [2, 342, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 347], 249,
   [5, 350], 250],
  [3, "def", e[16], 251,
   2, 353, 251, {"name":"ParamList"}],
  [2, 358, 252, {"name":"SimpleParamList"}],
  [1, 5, 253],
  [1, 5, 254],
  [3, "operator", "->", 255],
  [3, "operator", "->", 255],
  [1, 5, 256],
  [2, 144, -1, {"name":"Block"},
   1, 114, -1],
  ["(", 258],
  [1, 5, 259],
  [3, "type", e[27], -1,
   0, 260,
   3, "type", e[28], -1],
  [3, "meta", e[40], 261],
  [0, 260,
   2, 299, -1, {"name":"qualifiedClassName","token":"qualified"}],
  ["(", 263],
  [1, 5, 264],
  [1, 114, 265,
   0, 265],
  [1, 5, 266],
  [")", -1],
  ["(", 268],
  [1, 5, 269],
  [1, 363, 270],
  [1, 5, 271],
  [")", -1],
  ["<", 273],
  [1, 5, 274],
  [1, 369, 275],
  [1, 5, 276],
  [">", -1],
  ["@", 278],
  [1, 5, 279],
  [e[16], 280],
  [1, 5, 281],
  [".", 282,
   0, -1],
  [1, 5, 283],
  [e[16], 284],
  [1, 5, 281],
  [e[41], 286,
   0, 287,
   0, -1],
  [1, 5, 288],
  [1, 5, 289],
  ["=", 287],
  [1, 148, 290,
   1, 114, 290],
  [1, 5, 291],
  [",", 292,
   0, -1],
  [1, 5, 293],
  [e[41], 294,
   0, 295],
  [1, 5, 296],
  [1, 5, 297],
  ["=", 295],
  [1, 148, 298,
   1, 114, 298],
  [1, 5, 291],
  [3, "type", e[28], -1],
  [1, 148, 301,
   2, 322, 302, {"name":"TypeParams"},
   0, 302],
  [1, 5, 300],
  [1, 5, 303],
  [3, "type", e[27], -1,
   0, 304],
  [3, "meta", e[40], 305,
   3, "type", e[28], -1],
  [1, 5, 304],
  [1, 155, 307,
   0, -1],
  [1, 5, 308],
  [",", 309,
   0, -1],
  [1, 5, 310],
  [1, 155, 311],
  [1, 5, 308],
  ["{", 313],
  [1, 5, 314],
  [1, 386, 315],
  [1, 5, 316],
  [";", 317,
   0, 320],
  [1, 5, 318],
  [2, 404, 319, {"name":"ClassItem"},
   0, 320],
  [1, 5, 318],
  [1, 5, 321],
  ["}", -1],
  ["<", 323],
  [1, 5, 324],
  [1, 411, 325],
  [1, 5, 326],
  [">", -1],
  ["{", 328],
  [1, 5, 329],
  [2, 404, 330, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 329],
  [3, "def", e[16], 332],
  [1, 5, 333],
  ["[", 334,
   0, -1],
  [1, 5, 335],
  ["]", -1],
  [2, 353, 337, {"name":"ParamList"}],
  [1, 5, 338],
  [2, 427, 339, {"name":"ThrowsClause"},
   0, 339],
  [1, 5, 340],
  [";", -1,
   2, 144, -1, {"name":"Block"}],
  [1, 430, -1],
  ["{", 343],
  [1, 5, 344],
  [1, 363, 345],
  [1, 5, 346],
  ["}", -1],
  [3, "def", e[16], 348,
   2, 353, 348, {"name":"ParamList"}],
  [1, 5, 349],
  [3, "operator", "->", -1],
  [2, 358, 351, {"name":"SimpleParamList"}],
  [1, 5, 352],
  [3, "operator", "->", -1],
  ["(", 354],
  [1, 5, 355],
  [1, 434, 356],
  [1, 5, 357],
  [")", -1],
  ["(", 359],
  [1, 5, 360],
  [1, 450, 361],
  [1, 5, 362],
  [")", -1],
  [1, 114, 364,
   0, -1],
  [1, 5, 365],
  [",", 366,
   0, -1],
  [1, 5, 367],
  [1, 114, 368],
  [1, 5, 365],
  [1, 155, 370,
   "?", 371,
   0, -1],
  [1, 5, 372],
  [1, 5, 373],
  [",", 374,
   0, -1],
  [3, "keyword", e[33], 375,
   3, "keyword", e[21], 375,
   0, 370],
  [1, 5, 376],
  [1, 5, 377],
  [1, 155, 378,
   "?", 379],
  [1, 155, 370],
  [1, 5, 372],
  [1, 5, 380],
  [3, "keyword", e[33], 381,
   3, "keyword", e[21], 381,
   0, 378],
  [1, 5, 382],
  [1, 155, 378],
  [e[16], 384],
  [1, 5, 385],
  ["=", -1],
  [1, 148, 387,
   0, 387,
   0, -1],
  [1, 5, 388],
  [3, "def", e[16], 389],
  [1, 5, 390],
  [2, 267, 391, {"name":"ArgList"},
   0, 391],
  [1, 5, 392],
  [2, 144, 393, {"name":"Block"},
   0, 393],
  [1, 5, 394],
  [",", 395,
   0, -1],
  [1, 5, 396],
  [1, 148, 397,
   0, 397],
  [1, 5, 398],
  [3, "def", e[16], 399],
  [1, 5, 400],
  [2, 267, 401, {"name":"ArgList"},
   0, 401],
  [1, 5, 402],
  [2, 144, 403, {"name":"Block"},
   0, 403],
  [1, 5, 394],
  [2, 112, 405, {"name":"BeforeStatement"}],
  [1, 5, 406],
  [2, 322, 407, {"name":"TypeParams"},
   0, 407],
  [1, 5, 408],
  [3, "def", e[42], 409,
   1, 166, -1],
  [1, 5, 410],
  [2, 336, -1, {"name":"FunctionDef"}],
  [1, 148, 412,
   3, "type def", e[16], 413,
   0, -1],
  [1, 5, 411],
  [1, 5, 414],
  [3, "keyword", e[33], 415,
   1, 5, 416],
  [1, 5, 417],
  [",", 418,
   0, -1],
  [1, 155, 419],
  [1, 5, 420],
  [1, 5, 414],
  [1, 148, 421,
   3, "type def", e[16], 422],
  [1, 5, 420],
  [1, 5, 423],
  [3, "keyword", e[33], 424,
   1, 5, 416],
  [1, 5, 425],
  [1, 155, 426],
  [1, 5, 423],
  [3, "keyword", e[43], 428],
  [1, 5, 429],
  [1, 306, -1],
  [/^(?!\}|\*\/)/, 431,
   0, -1],
  ["{", 432,
   /^[^]/, 430],
  [1, 430, 433],
  [/^\}?/, 430],
  [1, 148, 435,
   3, "keyword", e[15], 435,
   1, 148, 435,
   1, 155, 436,
   0, -1],
  [1, 5, 434],
  [1, 5, 437],
  [e[44], 438],
  [1, 5, 439],
  [3, "keyword", e[20], 440,
   1, 331, 440],
  [1, 5, 441],
  [",", 442,
   0, -1],
  [1, 5, 443],
  [1, 148, 444,
   3, "keyword", e[15], 444,
   1, 148, 444,
   1, 155, 445],
  [1, 5, 443],
  [1, 5, 446],
  [e[44], 447],
  [1, 5, 448],
  [3, "keyword", e[20], 449,
   1, 331, 449],
  [1, 5, 441],
  [3, "def", e[16], 451,
   0, -1],
  [1, 5, 452],
  [",", 453,
   0, -1],
  [1, 5, 454],
  [3, "def", e[16], 455],
  [1, 5, 452]
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
