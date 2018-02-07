(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 397], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
   3, "keyword", e[34], -1,
   3, "keyword", e[33], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[44], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
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
   2, 219, 109, {"name":"doccomment.braced"},
   0, 111],
  [e[39], 112],
  [2, 227, 111, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 110,
   0, 109],
  [[0, /^(?!\*\/)/, /^[^]/], 113,
   "*/", -1],
  [e[35], 114,
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
   2, 235, 125, {"name":"NewExpr"},
   2, 255, 125, {"name":"Lambda"},
   3, "variable callee", e[23], 125,
   3, "variable", e[16], 125,
   [0, [5, 264], "("], 119,
   2, 269, 125, {"name":"ParenExpr"}],
  [1, 5, 117],
  [1, 5, 120],
  [1, 158, 121],
  [1, 5, 122],
  [")", 123],
  [1, 5, 124],
  [1, 117, 125],
  [1, 5, 126],
  [2, 274, 127, {"name":"ArgList"},
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
  [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 127,
   2, 279, 127, {"name":"TypeArgs"},
   3, "property callee", e[43], 127,
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
  [2, 284, 152, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 153],
  ["(", 154,
   0, -1],
  [1, 5, 155],
  [1, 292, 156],
  [1, 5, 157],
  [")", -1],
  [1, 151, 159,
   3, "type", e[27], 162,
   0, 160,
   3, "type", e[28], 162],
  [1, 5, 158],
  [3, "meta", e[41], 161],
  [0, 160,
   2, 306, 162, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 163],
  ["[", 164,
   2, 279, 165, {"name":"TypeArgs"},
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
   3, "keyword", e[32], 196,
   [5, 307], 203],
  [1, 5, 171],
  [3, "type def", e[16], 172],
  [1, 5, 173],
  [3, "keyword", e[33], 174,
   0, 175],
  [1, 5, 176],
  [1, 5, 177],
  [1, 313, 175],
  [2, 319, -1, {"name":"EnumBody"}],
  [1, 5, 179],
  [3, "type def", e[16], 180],
  [1, 5, 181],
  [2, 331, 182, {"name":"TypeParams"},
   0, 182],
  [1, 5, 183],
  [3, "keyword", e[34], 184,
   0, 185],
  [1, 5, 186],
  [1, 5, 187],
  [1, 158, 185],
  [3, "keyword", e[33], 188,
   0, 189],
  [1, 5, 190],
  [1, 5, 191],
  [1, 313, 189],
  [2, 336, -1, {"name":"ClassBody"}],
  [1, 5, 193],
  [3, "def", e[16], 194],
  [1, 5, 195],
  [2, 340, -1, {"name":"AnnotationTypeBody"}],
  [1, 5, 197],
  [e[16], 198],
  [1, 5, 199],
  [".", 200,
   ";", -1],
  [1, 5, 201],
  [e[16], 202],
  [1, 5, 199],
  [1, 158, 204],
  [1, 5, 205],
  [1, 344, 206],
  [1, 5, 207],
  [2, 349, -1, {"name":"FunctionDef"},
   3, "operator", "=", 208,
   0, 209],
  [1, 5, 210],
  [1, 5, 211],
  [1, 117, 209],
  [",", 212,
   ";", -1],
  [1, 5, 213],
  [1, 344, 214],
  [1, 5, 215],
  [3, "operator", "=", 216,
   0, 217],
  [1, 5, 218],
  [1, 5, 211],
  [1, 117, 217],
  ["{", 220],
  [3, "tag", e[36], 221,
   3, "tag", e[37], 222,
   2, 354, 226, {"name":"doccomment.type","token":"type"}],
  [e[35], 221,
   "{", 223,
   0, 222],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 222,
   0, 226],
  [2, 354, 224, {"name":"doccomment.type","token":"type"}],
  ["}", 225],
  [e[35], 225,
   3, "def", e[38], 222,
   0, 222],
  ["}", -1],
  [3, "tag", e[36], 228,
   3, "tag", e[37], 232],
  [e[35], 228,
   "{", 229,
   0, 232],
  [2, 354, 230, {"name":"doccomment.type","token":"type"}],
  ["}", 231],
  [e[35], 231,
   3, "def", e[38], 232,
   0, 232],
  [0, 233,
   2, 219, 232, {"name":"doccomment.braced"},
   0, -1],
  [e[39], 234],
  [0, 233,
   0, 232],
  [3, "keyword", e[40], 236],
  [1, 5, 237],
  [2, 279, 238, {"name":"TypeArgs"},
   0, 238],
  [1, 5, 239],
  [1, 151, 240,
   3, "type", e[27], 241,
   0, 242,
   3, "type", e[28], 241],
  [1, 5, 239],
  [1, 5, 243],
  [3, "meta", e[41], 244],
  [2, 279, 245, {"name":"TypeArgs"},
   1, 5, 246],
  [0, 242,
   2, 306, 241, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 243],
  ["[", 247,
   2, 274, 248, {"name":"ArgList"},
   0, 248],
  [1, 5, 249],
  [1, 5, 250],
  [1, 117, 251,
   0, 251],
  [2, 336, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 252],
  ["]", 253],
  [1, 5, 254],
  [2, 355, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 360], 256,
   [5, 363], 257],
  [3, "def", e[16], 258,
   2, 366, 258, {"name":"ParamList"}],
  [2, 371, 259, {"name":"SimpleParamList"}],
  [1, 5, 260],
  [1, 5, 261],
  [3, "operator", "->", 262],
  [3, "operator", "->", 262],
  [1, 5, 263],
  [2, 147, -1, {"name":"Block"},
   1, 117, -1],
  ["(", 265],
  [1, 5, 266],
  [3, "type", e[27], -1,
   0, 267,
   3, "type", e[28], -1],
  [3, "meta", e[41], 268],
  [0, 267,
   2, 306, -1, {"name":"qualifiedClassName","token":"qualified"}],
  ["(", 270],
  [1, 5, 271],
  [1, 117, 272,
   0, 272],
  [1, 5, 273],
  [")", -1],
  ["(", 275],
  [1, 5, 276],
  [1, 376, 277],
  [1, 5, 278],
  [")", -1],
  ["<", 280],
  [1, 5, 281],
  [1, 382, 282],
  [1, 5, 283],
  [">", -1],
  [[0, [6, 396], "@"], 285],
  [1, 5, 286],
  [e[16], 287],
  [1, 5, 288],
  [".", 289,
   0, -1],
  [1, 5, 290],
  [e[16], 291],
  [1, 5, 288],
  [e[42], 293,
   0, 294,
   0, -1],
  [1, 5, 295],
  [1, 5, 296],
  ["=", 294],
  [1, 151, 297,
   1, 117, 297],
  [1, 5, 298],
  [",", 299,
   0, -1],
  [1, 5, 300],
  [e[42], 301,
   0, 302],
  [1, 5, 303],
  [1, 5, 304],
  ["=", 302],
  [1, 151, 305,
   1, 117, 305],
  [1, 5, 298],
  [3, "type", e[28], -1],
  [1, 151, 308,
   2, 331, 309, {"name":"TypeParams"},
   0, 309],
  [1, 5, 307],
  [1, 5, 310],
  [3, "type", e[27], -1,
   0, 311],
  [3, "meta", e[41], 312,
   3, "type", e[28], -1],
  [1, 5, 311],
  [1, 158, 314,
   0, -1],
  [1, 5, 315],
  [",", 316,
   0, -1],
  [1, 5, 317],
  [1, 158, 318],
  [1, 5, 315],
  ["{", 320],
  [1, 5, 321],
  [2, 400, 322, {"name":"EnumConstant"}],
  [1, 5, 323],
  [/^\,?/, 324],
  [1, 5, 325],
  [0, 321,
   ";", 326,
   0, 329],
  [1, 5, 327],
  [2, 407, 328, {"name":"ClassItem"},
   0, 329],
  [1, 5, 327],
  [1, 5, 330],
  ["}", -1],
  ["<", 332],
  [1, 5, 333],
  [1, 414, 334],
  [1, 5, 335],
  [">", -1],
  ["{", 337],
  [1, 5, 338],
  [2, 407, 339, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 338],
  ["{", 341],
  [1, 5, 342],
  [2, 430, 343, {"name":"AnnotationTypeItem"},
   "}", -1],
  [1, 5, 342],
  [3, "def", e[16], 345],
  [1, 5, 346],
  ["[", 347,
   0, -1],
  [1, 5, 348],
  ["]", -1],
  [2, 366, 350, {"name":"ParamList"}],
  [1, 5, 351],
  [2, 449, 352, {"name":"ThrowsClause"},
   0, 352],
  [1, 5, 353],
  [";", -1,
   2, 147, -1, {"name":"Block"}],
  [1, 452, -1],
  ["{", 356],
  [1, 5, 357],
  [1, 376, 358],
  [1, 5, 359],
  ["}", -1],
  [3, "def", e[16], 361,
   2, 366, 361, {"name":"ParamList"}],
  [1, 5, 362],
  [3, "operator", "->", -1],
  [2, 371, 364, {"name":"SimpleParamList"}],
  [1, 5, 365],
  [3, "operator", "->", -1],
  ["(", 367],
  [1, 5, 368],
  [1, 456, 369],
  [1, 5, 370],
  [")", -1],
  ["(", 372],
  [1, 5, 373],
  [1, 472, 374],
  [1, 5, 375],
  [")", -1],
  [1, 117, 377,
   0, -1],
  [1, 5, 378],
  [",", 379,
   0, -1],
  [1, 5, 380],
  [1, 117, 381],
  [1, 5, 378],
  [1, 158, 383,
   "?", 384,
   0, -1],
  [1, 5, 385],
  [1, 5, 386],
  [",", 387,
   0, -1],
  [3, "keyword", e[34], 388,
   3, "keyword", e[21], 388,
   0, 383],
  [1, 5, 389],
  [1, 5, 390],
  [1, 158, 391,
   "?", 392],
  [1, 158, 383],
  [1, 5, 385],
  [1, 5, 393],
  [3, "keyword", e[34], 394,
   3, "keyword", e[21], 394,
   0, 391],
  [1, 5, 395],
  [1, 158, 391],
  [3, "keyword", e[31], -1],
  [e[16], 398],
  [1, 5, 399],
  ["=", -1],
  [1, 151, 401,
   0, 401],
  [1, 5, 402],
  [3, "def property", e[16], 403],
  [1, 5, 404],
  [2, 274, 405, {"name":"ArgList"},
   0, 405],
  [1, 5, 406],
  [2, 336, -1, {"name":"ClassBody"},
   0, -1],
  [2, 115, 408, {"name":"BeforeStatement"}],
  [1, 5, 409],
  [2, 331, 410, {"name":"TypeParams"},
   0, 410],
  [1, 5, 411],
  [3, "def property", e[43], 412,
   1, 478, -1],
  [1, 5, 413],
  [2, 349, -1, {"name":"FunctionDef"}],
  [1, 151, 415,
   3, "type def", e[16], 416,
   0, -1],
  [1, 5, 414],
  [1, 5, 417],
  [3, "keyword", e[34], 418,
   1, 5, 419],
  [1, 5, 420],
  [",", 421,
   0, -1],
  [1, 158, 422],
  [1, 5, 423],
  [1, 5, 417],
  [1, 151, 424,
   3, "type def", e[16], 425],
  [1, 5, 423],
  [1, 5, 426],
  [3, "keyword", e[34], 427,
   1, 5, 419],
  [1, 5, 428],
  [1, 158, 429],
  [1, 5, 426],
  [2, 115, 431, {"name":"BeforeStatement"}],
  [1, 5, 432],
  [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 433,
   "(", 434,
   1, 169, -1],
  [1, 5, 435],
  [1, 5, 436],
  ["[", 437,
   3, "operator", "=", 438],
  [")", 439],
  [1, 5, 440],
  [1, 5, 441],
  [1, 5, 442],
  ["]", 443],
  [1, 117, -1],
  ["[", 444,
   3, "keyword", e[10], 445,
   0, -1],
  [1, 5, 435],
  [1, 5, 446],
  [1, 5, 447],
  ["]", 448],
  [1, 117, -1],
  [1, 5, 442],
  [3, "keyword", e[44], 450],
  [1, 5, 451],
  [1, 313, -1],
  [/^(?!\}|\*\/)/, 453,
   0, -1],
  ["{", 454,
   /^[^]/, 452],
  [1, 452, 455],
  [/^\}?/, 452],
  [1, 151, 457,
   3, "keyword", e[15], 457,
   1, 151, 457,
   1, 158, 458,
   0, -1],
  [1, 5, 456],
  [1, 5, 459],
  [e[45], 460],
  [1, 5, 461],
  [3, "keyword", e[20], 462,
   1, 344, 462],
  [1, 5, 463],
  [",", 464,
   0, -1],
  [1, 5, 465],
  [1, 151, 466,
   3, "keyword", e[15], 466,
   1, 151, 466,
   1, 158, 467],
  [1, 5, 465],
  [1, 5, 468],
  [e[45], 469],
  [1, 5, 470],
  [3, "keyword", e[20], 471,
   1, 344, 471],
  [1, 5, 463],
  [3, "def", e[16], 473,
   0, -1],
  [1, 5, 474],
  [",", 475,
   0, -1],
  [1, 5, 476],
  [3, "def", e[16], 477],
  [1, 5, 474],
  [2, 147, -1, {"name":"Block"},
   3, "keyword", e[29], 479,
   3, "keyword", e[30], 487,
   3, "keyword", e[31], 501,
   3, "keyword", e[32], 505,
   [5, 528], 512],
  [1, 5, 480],
  [3, "type def", e[16], 481],
  [1, 5, 482],
  [3, "keyword", e[33], 483,
   0, 484],
  [1, 5, 485],
  [1, 5, 486],
  [1, 313, 484],
  [2, 319, -1, {"name":"EnumBody"}],
  [1, 5, 488],
  [3, "type def", e[16], 489],
  [1, 5, 490],
  [2, 331, 491, {"name":"TypeParams"},
   0, 491],
  [1, 5, 492],
  [3, "keyword", e[34], 493,
   0, 494],
  [1, 5, 495],
  [1, 5, 496],
  [1, 158, 494],
  [3, "keyword", e[33], 497,
   0, 498],
  [1, 5, 499],
  [1, 5, 500],
  [1, 313, 498],
  [2, 336, -1, {"name":"ClassBody"}],
  [1, 5, 502],
  [3, "def", e[16], 503],
  [1, 5, 504],
  [2, 340, -1, {"name":"AnnotationTypeBody"}],
  [1, 5, 506],
  [e[16], 507],
  [1, 5, 508],
  [".", 509,
   ";", -1],
  [1, 5, 510],
  [e[16], 511],
  [1, 5, 508],
  [1, 158, 513],
  [1, 5, 514],
  [1, 534, 515],
  [1, 5, 516],
  [2, 349, -1, {"name":"FunctionDef"},
   3, "operator", "=", 517,
   0, 518],
  [1, 5, 519],
  [1, 5, 520],
  [1, 117, 518],
  [",", 521,
   ";", -1],
  [1, 5, 522],
  [1, 534, 523],
  [1, 5, 524],
  [3, "operator", "=", 525,
   0, 526],
  [1, 5, 527],
  [1, 5, 520],
  [1, 117, 526],
  [1, 151, 529,
   2, 331, 530, {"name":"TypeParams"},
   0, 530],
  [1, 5, 528],
  [1, 5, 531],
  [3, "type", e[27], -1,
   0, 532],
  [3, "meta", e[41], 533,
   3, "type", e[28], -1],
  [1, 5, 532],
  [3, "def property", e[16], 535],
  [1, 5, 536],
  ["[", 537,
   0, -1],
  [1, 5, 538],
  ["]", -1]
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
      if (state.context.name != "funcName") { return "def local" }
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
    var sub = hasSubStatement(cx);
    if (sub == "if" && (/^else\b/.test(textAfter) || /[{;]\s*(\/\/.*)?$/.test(cx.startLine))) { return base }
    if (sub) { return base + config.indentUnit; }
    return base + 2 * config.indentUnit
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
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
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

var scopes = ["Block", "FunctionDef", "Lambda"];
var typeScopes = ["ClassItem", "Statement", "AnnotationTypeItem"];

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
