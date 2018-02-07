(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 398], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 5, 2],
  [/^[^]/, 0],
  [2, 6, 3, {"name":"Statement"}],
  [0, 0,
   0, 1],
  [3, "keyword", e[29], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[28], -1,
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
   3, "keyword", e[19], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[20], -1,
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
   3, "keyword", e[25], -1,
   3, "type", e[26], -1,
   3, "type", e[27], -1,
   3, "atom", e[18], -1,
   3, "variable callee", e[22], -1,
   3, "variable", e[16], -1,
   3, "number", e[21], -1,
   2, 102, -1, {"name":"string","token":"string"},
   3, "operator", e[17], -1,
   3, "operator", e[23], -1,
   3, "operator", e[24], -1,
   2, 105, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [[1, " ", "\t", "\n"], 5,
   2, 105, 5, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 7,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 46,
   3, "keyword", e[4], 54,
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
  ["|", 38,
   3, "def", e[16], 39],
  [1, 5, 40],
  [1, 5, 41],
  [1, 155, 42],
  [")", 43],
  [1, 5, 37],
  [1, 5, 44],
  [2, 144, 45, {"name":"Block"}],
  [1, 5, 28],
  [1, 5, 47],
  [2, 6, 48, {"name":"Statement"}],
  [1, 5, 49],
  [3, "keyword", e[1], 50],
  [1, 5, 51],
  [2, 139, 52, {"name":"CondExpr"}],
  [1, 5, 53],
  [";", -1],
  [1, 5, 55],
  [2, 139, 56, {"name":"CondExpr"}],
  [1, 5, 57],
  [2, 6, 58, {"name":"Statement"}],
  [2, 166, -1, {"name":"Alternative"}],
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
  [1, 170, -1],
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
   2, 220, 106, {"name":"doccomment.braced"},
   0, 108],
  [e[39], 109],
  [2, 228, 108, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 107,
   0, 106],
  [[0, /^(?!\*\/)/, /^[^]/], 110,
   "*/", -1],
  [e[35], 111,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[15], 113,
   1, 148, 113,
   0, -1],
  [1, 5, 112],
  [3, "operator", e[17], 115,
   3, "atom", e[18], 122,
   3, "keyword", e[19], 122,
   3, "keyword", e[20], 122,
   3, "number", e[21], 122,
   2, 102, 122, {"name":"string","token":"string"},
   2, 236, 122, {"name":"NewExpr"},
   2, 256, 122, {"name":"Lambda"},
   3, "variable callee", e[22], 122,
   3, "variable", e[16], 122,
   [0, [5, 265], "("], 116,
   2, 270, 122, {"name":"ParenExpr"}],
  [1, 5, 114],
  [1, 5, 117],
  [1, 155, 118],
  [1, 5, 119],
  [")", 120],
  [1, 5, 121],
  [1, 114, 122],
  [1, 5, 123],
  [2, 275, 124, {"name":"ArgList"},
   "[", 125,
   ".", 126,
   3, "operator", e[23], 124,
   3, "operator", e[24], 127,
   3, "keyword", e[25], 127,
   3, "operator", "?", 128,
   0, -1],
  [1, 5, 123],
  [1, 5, 129],
  [1, 5, 130],
  [1, 5, 131],
  [1, 5, 132],
  [1, 114, 133],
  [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 124,
   2, 280, 124, {"name":"TypeArgs"},
   3, "property callee", e[43], 124,
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
  [2, 285, 149, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 150],
  ["(", 151,
   0, -1],
  [1, 5, 152],
  [1, 293, 153],
  [1, 5, 154],
  [")", -1],
  [1, 148, 156,
   3, "type", e[26], 159,
   0, 157,
   3, "type", e[27], 159],
  [1, 5, 155],
  [3, "meta", e[41], 158],
  [0, 157,
   2, 307, 159, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 160],
  ["[", 161,
   2, 280, 162, {"name":"TypeArgs"},
   0, -1],
  [1, 5, 163],
  [1, 5, 160],
  [1, 114, 164,
   0, 164],
  [1, 5, 165],
  ["]", 162],
  [1, 5, 167],
  [3, "keyword", e[28], 168,
   0, -1],
  [1, 5, 169],
  [2, 6, -1, {"name":"Statement"}],
  [2, 144, -1, {"name":"Block"},
   3, "keyword", e[29], 171,
   3, "keyword", e[30], 179,
   3, "keyword", e[31], 193,
   3, "keyword", e[32], 197,
   [5, 308], 204],
  [1, 5, 172],
  [3, "type def", e[16], 173],
  [1, 5, 174],
  [3, "keyword", e[33], 175,
   0, 176],
  [1, 5, 177],
  [1, 5, 178],
  [1, 314, 176],
  [2, 320, -1, {"name":"EnumBody"}],
  [1, 5, 180],
  [3, "type def", e[16], 181],
  [1, 5, 182],
  [2, 332, 183, {"name":"TypeParams"},
   0, 183],
  [1, 5, 184],
  [3, "keyword", e[34], 185,
   0, 186],
  [1, 5, 187],
  [1, 5, 188],
  [1, 155, 186],
  [3, "keyword", e[33], 189,
   0, 190],
  [1, 5, 191],
  [1, 5, 192],
  [1, 314, 190],
  [2, 337, -1, {"name":"ClassBody"}],
  [1, 5, 194],
  [3, "def", e[16], 195],
  [1, 5, 196],
  [2, 341, -1, {"name":"AnnotationTypeBody"}],
  [1, 5, 198],
  [e[16], 199],
  [1, 5, 200],
  [".", 201,
   ";", -1],
  [1, 5, 202],
  [e[16], 203],
  [1, 5, 200],
  [1, 155, 205],
  [1, 5, 206],
  [1, 345, 207],
  [1, 5, 208],
  [2, 350, -1, {"name":"FunctionDef"},
   3, "operator", "=", 209,
   0, 210],
  [1, 5, 211],
  [1, 5, 212],
  [1, 114, 210],
  [",", 213,
   ";", -1],
  [1, 5, 214],
  [1, 345, 215],
  [1, 5, 216],
  [3, "operator", "=", 217,
   0, 218],
  [1, 5, 219],
  [1, 5, 212],
  [1, 114, 218],
  ["{", 221],
  [3, "tag", e[36], 222,
   3, "tag", e[37], 223,
   2, 355, 227, {"name":"doccomment.type","token":"type"}],
  [e[35], 222,
   "{", 224,
   0, 223],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 223,
   0, 227],
  [2, 355, 225, {"name":"doccomment.type","token":"type"}],
  ["}", 226],
  [e[35], 226,
   3, "def", e[38], 223,
   0, 223],
  ["}", -1],
  [3, "tag", e[36], 229,
   3, "tag", e[37], 233],
  [e[35], 229,
   "{", 230,
   0, 233],
  [2, 355, 231, {"name":"doccomment.type","token":"type"}],
  ["}", 232],
  [e[35], 232,
   3, "def", e[38], 233,
   0, 233],
  [0, 234,
   2, 220, 233, {"name":"doccomment.braced"},
   0, -1],
  [e[39], 235],
  [0, 234,
   0, 233],
  [3, "keyword", e[40], 237],
  [1, 5, 238],
  [2, 280, 239, {"name":"TypeArgs"},
   0, 239],
  [1, 5, 240],
  [1, 148, 241,
   3, "type", e[26], 242,
   0, 243,
   3, "type", e[27], 242],
  [1, 5, 240],
  [1, 5, 244],
  [3, "meta", e[41], 245],
  [2, 280, 246, {"name":"TypeArgs"},
   1, 5, 247],
  [0, 243,
   2, 307, 242, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 244],
  ["[", 248,
   2, 275, 249, {"name":"ArgList"},
   0, 249],
  [1, 5, 250],
  [1, 5, 251],
  [1, 114, 252,
   0, 252],
  [2, 337, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 253],
  ["]", 254],
  [1, 5, 255],
  [2, 356, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 361], 257,
   [5, 364], 258],
  [3, "def", e[16], 259,
   2, 367, 259, {"name":"ParamList"}],
  [2, 372, 260, {"name":"SimpleParamList"}],
  [1, 5, 261],
  [1, 5, 262],
  [3, "operator", "->", 263],
  [3, "operator", "->", 263],
  [1, 5, 264],
  [2, 144, -1, {"name":"Block"},
   1, 114, -1],
  ["(", 266],
  [1, 5, 267],
  [3, "type", e[26], -1,
   0, 268,
   3, "type", e[27], -1],
  [3, "meta", e[41], 269],
  [0, 268,
   2, 307, -1, {"name":"qualifiedClassName","token":"qualified"}],
  ["(", 271],
  [1, 5, 272],
  [1, 114, 273,
   0, 273],
  [1, 5, 274],
  [")", -1],
  ["(", 276],
  [1, 5, 277],
  [1, 377, 278],
  [1, 5, 279],
  [")", -1],
  ["<", 281],
  [1, 5, 282],
  [1, 383, 283],
  [1, 5, 284],
  [">", -1],
  [[0, [6, 397], "@"], 286],
  [1, 5, 287],
  [e[16], 288],
  [1, 5, 289],
  [".", 290,
   0, -1],
  [1, 5, 291],
  [e[16], 292],
  [1, 5, 289],
  [e[42], 294,
   0, 295,
   0, -1],
  [1, 5, 296],
  [1, 5, 297],
  ["=", 295],
  [1, 148, 298,
   1, 114, 298],
  [1, 5, 299],
  [",", 300,
   0, -1],
  [1, 5, 301],
  [e[42], 302,
   0, 303],
  [1, 5, 304],
  [1, 5, 305],
  ["=", 303],
  [1, 148, 306,
   1, 114, 306],
  [1, 5, 299],
  [3, "type", e[27], -1],
  [1, 148, 309,
   2, 332, 310, {"name":"TypeParams"},
   0, 310],
  [1, 5, 308],
  [1, 5, 311],
  [3, "type", e[26], -1,
   0, 312],
  [3, "meta", e[41], 313,
   3, "type", e[27], -1],
  [1, 5, 312],
  [1, 155, 315,
   0, -1],
  [1, 5, 316],
  [",", 317,
   0, -1],
  [1, 5, 318],
  [1, 155, 319],
  [1, 5, 316],
  ["{", 321],
  [1, 5, 322],
  [2, 401, 323, {"name":"EnumConstant"}],
  [1, 5, 324],
  [/^\,?/, 325],
  [1, 5, 326],
  [0, 322,
   ";", 327,
   0, 330],
  [1, 5, 328],
  [2, 408, 329, {"name":"ClassItem"},
   0, 330],
  [1, 5, 328],
  [1, 5, 331],
  ["}", -1],
  ["<", 333],
  [1, 5, 334],
  [1, 415, 335],
  [1, 5, 336],
  [">", -1],
  ["{", 338],
  [1, 5, 339],
  [2, 408, 340, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 339],
  ["{", 342],
  [1, 5, 343],
  [2, 431, 344, {"name":"AnnotationTypeItem"},
   "}", -1],
  [1, 5, 343],
  [3, "def", e[16], 346],
  [1, 5, 347],
  ["[", 348,
   0, -1],
  [1, 5, 349],
  ["]", -1],
  [2, 367, 351, {"name":"ParamList"}],
  [1, 5, 352],
  [2, 450, 353, {"name":"ThrowsClause"},
   0, 353],
  [1, 5, 354],
  [";", -1,
   2, 144, -1, {"name":"Block"}],
  [1, 453, -1],
  ["{", 357],
  [1, 5, 358],
  [1, 377, 359],
  [1, 5, 360],
  ["}", -1],
  [3, "def", e[16], 362,
   2, 367, 362, {"name":"ParamList"}],
  [1, 5, 363],
  [3, "operator", "->", -1],
  [2, 372, 365, {"name":"SimpleParamList"}],
  [1, 5, 366],
  [3, "operator", "->", -1],
  ["(", 368],
  [1, 5, 369],
  [1, 457, 370],
  [1, 5, 371],
  [")", -1],
  ["(", 373],
  [1, 5, 374],
  [1, 473, 375],
  [1, 5, 376],
  [")", -1],
  [1, 114, 378,
   0, -1],
  [1, 5, 379],
  [",", 380,
   0, -1],
  [1, 5, 381],
  [1, 114, 382],
  [1, 5, 379],
  [1, 155, 384,
   "?", 385,
   0, -1],
  [1, 5, 386],
  [1, 5, 387],
  [",", 388,
   0, -1],
  [3, "keyword", e[34], 389,
   3, "keyword", e[20], 389,
   0, 384],
  [1, 5, 390],
  [1, 5, 391],
  [1, 155, 392,
   "?", 393],
  [1, 155, 384],
  [1, 5, 386],
  [1, 5, 394],
  [3, "keyword", e[34], 395,
   3, "keyword", e[20], 395,
   0, 392],
  [1, 5, 396],
  [1, 155, 392],
  [3, "keyword", e[31], -1],
  [e[16], 399],
  [1, 5, 400],
  ["=", -1],
  [1, 148, 402,
   0, 402],
  [1, 5, 403],
  [3, "def property", e[16], 404],
  [1, 5, 405],
  [2, 275, 406, {"name":"ArgList"},
   0, 406],
  [1, 5, 407],
  [2, 337, -1, {"name":"ClassBody"},
   0, -1],
  [2, 112, 409, {"name":"BeforeStatement"}],
  [1, 5, 410],
  [2, 332, 411, {"name":"TypeParams"},
   0, 411],
  [1, 5, 412],
  [3, "def property", e[43], 413,
   1, 479, -1],
  [1, 5, 414],
  [2, 350, -1, {"name":"FunctionDef"}],
  [1, 148, 416,
   3, "type def", e[16], 417,
   0, -1],
  [1, 5, 415],
  [1, 5, 418],
  [3, "keyword", e[34], 419,
   1, 5, 420],
  [1, 5, 421],
  [",", 422,
   0, -1],
  [1, 155, 423],
  [1, 5, 424],
  [1, 5, 418],
  [1, 148, 425,
   3, "type def", e[16], 426],
  [1, 5, 424],
  [1, 5, 427],
  [3, "keyword", e[34], 428,
   1, 5, 420],
  [1, 5, 429],
  [1, 155, 430],
  [1, 5, 427],
  [2, 112, 432, {"name":"BeforeStatement"}],
  [1, 5, 433],
  [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 434,
   "(", 435,
   1, 170, -1],
  [1, 5, 436],
  [1, 5, 437],
  ["[", 438,
   3, "operator", "=", 439],
  [")", 440],
  [1, 5, 441],
  [1, 5, 442],
  [1, 5, 443],
  ["]", 444],
  [1, 114, -1],
  ["[", 445,
   3, "keyword", e[10], 446,
   0, -1],
  [1, 5, 436],
  [1, 5, 447],
  [1, 5, 448],
  ["]", 449],
  [1, 114, -1],
  [1, 5, 443],
  [3, "keyword", e[44], 451],
  [1, 5, 452],
  [1, 314, -1],
  [/^(?!\}|\*\/)/, 454,
   0, -1],
  ["{", 455,
   /^[^]/, 453],
  [1, 453, 456],
  [/^\}?/, 453],
  [1, 148, 458,
   3, "keyword", e[15], 458,
   1, 148, 458,
   1, 155, 459,
   0, -1],
  [1, 5, 457],
  [1, 5, 460],
  [e[45], 461],
  [1, 5, 462],
  [3, "keyword", e[19], 463,
   1, 345, 463],
  [1, 5, 464],
  [",", 465,
   0, -1],
  [1, 5, 466],
  [1, 148, 467,
   3, "keyword", e[15], 467,
   1, 148, 467,
   1, 155, 468],
  [1, 5, 466],
  [1, 5, 469],
  [e[45], 470],
  [1, 5, 471],
  [3, "keyword", e[19], 472,
   1, 345, 472],
  [1, 5, 464],
  [3, "def", e[16], 474,
   0, -1],
  [1, 5, 475],
  [",", 476,
   0, -1],
  [1, 5, 477],
  [3, "def", e[16], 478],
  [1, 5, 475],
  [2, 144, -1, {"name":"Block"},
   3, "keyword", e[29], 480,
   3, "keyword", e[30], 488,
   3, "keyword", e[31], 502,
   3, "keyword", e[32], 506,
   [5, 529], 513],
  [1, 5, 481],
  [3, "type def", e[16], 482],
  [1, 5, 483],
  [3, "keyword", e[33], 484,
   0, 485],
  [1, 5, 486],
  [1, 5, 487],
  [1, 314, 485],
  [2, 320, -1, {"name":"EnumBody"}],
  [1, 5, 489],
  [3, "type def", e[16], 490],
  [1, 5, 491],
  [2, 332, 492, {"name":"TypeParams"},
   0, 492],
  [1, 5, 493],
  [3, "keyword", e[34], 494,
   0, 495],
  [1, 5, 496],
  [1, 5, 497],
  [1, 155, 495],
  [3, "keyword", e[33], 498,
   0, 499],
  [1, 5, 500],
  [1, 5, 501],
  [1, 314, 499],
  [2, 337, -1, {"name":"ClassBody"}],
  [1, 5, 503],
  [3, "def", e[16], 504],
  [1, 5, 505],
  [2, 341, -1, {"name":"AnnotationTypeBody"}],
  [1, 5, 507],
  [e[16], 508],
  [1, 5, 509],
  [".", 510,
   ";", -1],
  [1, 5, 511],
  [e[16], 512],
  [1, 5, 509],
  [1, 155, 514],
  [1, 5, 515],
  [1, 535, 516],
  [1, 5, 517],
  [2, 350, -1, {"name":"FunctionDef"},
   3, "operator", "=", 518,
   0, 519],
  [1, 5, 520],
  [1, 5, 521],
  [1, 114, 519],
  [",", 522,
   ";", -1],
  [1, 5, 523],
  [1, 535, 524],
  [1, 5, 525],
  [3, "operator", "=", 526,
   0, 527],
  [1, 5, 528],
  [1, 5, 521],
  [1, 114, 527],
  [1, 148, 530,
   2, 332, 531, {"name":"TypeParams"},
   0, 531],
  [1, 5, 529],
  [1, 5, 532],
  [3, "type", e[26], -1,
   0, 533],
  [3, "meta", e[41], 534,
   3, "type", e[27], -1],
  [1, 5, 533],
  [3, "def property", e[16], 536],
  [1, 5, 537],
  ["[", 538,
   0, -1],
  [1, 5, 539],
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
