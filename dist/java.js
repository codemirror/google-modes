(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 440], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
  var nodes = [
    [1, 5, 2],
    [/^[^]/, 0],
    [2, 6, 3, {"name":"Statement"}],
    [0, 0,
     0, 1],
    [3, "keyword", e[27], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[43], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[23], -1,
     3, "type", e[38], -1,
     3, "type", e[39], -1,
     3, "atom", e[15], -1,
     3, "variable callee", e[19], -1,
     3, "variable", e[20], -1,
     3, "number", e[18], -1,
     2, 85, -1, {"name":"string","token":"string"},
     3, "operator", e[14], -1,
     3, "operator", e[21], -1,
     3, "operator", e[22], -1,
     2, 88, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    [[1, " ", "\t", "\n"], 5,
     2, 88, 5, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 7,
     3, "keyword", e[1], 21,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 37,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 46,
     3, "keyword", e[7], 50,
     3, "keyword", e[8], 58,
     3, "keyword", e[9], 62,
     3, "keyword", e[10], 66,
     3, "keyword", e[11], 67,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 93]], 66,
     3, "keyword", e[12], 70,
     ";", -1,
     2, 94, 77, {"name":"BeforeStatement"},
     1, 96, 79],
    [1, 5, 8],
    ["(", 9],
    [1, 5, 10],
    [2, 6, 11, {"name":"Statement"}],
    [1, 5, 12],
    [1, 96, 13,
     0, 13],
    [1, 5, 14],
    [";", 15],
    [1, 5, 16],
    [1, 96, 17,
     0, 17],
    [1, 5, 18],
    [")", 19],
    [1, 5, 20],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 22],
    [2, 121, 23, {"name":"CondExpr"}],
    [1, 5, 24],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 26],
    [2, 126, 27, {"name":"Block"}],
    [1, 5, 28],
    [2, 130, -1, {"name":"Catch"}],
    [1, 5, 30],
    [2, 6, 31, {"name":"Statement"}],
    [1, 5, 32],
    [3, "keyword", e[1], 33],
    [1, 5, 34],
    [2, 121, 35, {"name":"CondExpr"}],
    [1, 5, 36],
    [";", -1],
    [1, 5, 38],
    [2, 121, 39, {"name":"CondExpr"}],
    [1, 5, 40],
    [2, 6, 41, {"name":"Statement"}],
    [2, 148, -1, {"name":"Alternative"}],
    [1, 5, 43],
    [2, 121, 44, {"name":"CondExpr"}],
    [1, 5, 45],
    [2, 126, -1, {"name":"Block"}],
    [1, 5, 47],
    [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 48],
    [1, 5, 49],
    [";", -1],
    [1, 5, 51],
    [1, 96, 52],
    [1, 5, 53],
    [":", 54,
     0, 55],
    [1, 5, 56],
    [1, 5, 57],
    [1, 96, 55],
    [";", -1],
    [1, 5, 59],
    [1, 96, 60,
     0, 60],
    [1, 5, 61],
    [";", -1],
    [1, 5, 63],
    [1, 96, 64],
    [1, 5, 65],
    [";", -1],
    [1, 5, 68],
    [1, 5, 69],
    [":", -1],
    [1, 96, 66],
    [1, 5, 71],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9])/, 72,
     0, 72],
    [1, 5, 73],
    [/^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\./, 74,
     /^(?:\*|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)/, 75],
    [1, 5, 73],
    [1, 5, 76],
    [";", -1],
    [1, 5, 78],
    [1, 152, -1],
    [1, 5, 80],
    [",", 81,
     1, 5, 82],
    [1, 5, 83],
    [";", -1],
    [1, 96, 84],
    [1, 5, 80],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 86],
    ["\\", 87,
     /^(?!\")./, 86,
     "\"", -1],
    [/^[^]/, 86],
    [/^\/\*\*(?!\/)/, 89,
     "/*", 92,
     /^\/\/.*/, -1],
    [e[36], 90,
     0, 91],
    [0, 89,
     0, 89],
    [2, 202, 91, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 92,
     "*/", -1],
    [e[33], 93,
     /^\:(?!\:)/, -1],
    [3, "keyword", e[13], 95,
     1, 213, 95,
     0, -1],
    [1, 5, 94],
    [3, "operator", e[14], 97,
     3, "atom", e[15], 104,
     3, "keyword", e[16], 104,
     3, "keyword", e[17], 104,
     3, "number", e[18], 104,
     2, 85, 104, {"name":"string","token":"string"},
     2, 220, 104, {"name":"NewExpr"},
     2, 240, 104, {"name":"Lambda"},
     3, "variable callee", e[19], 104,
     3, "variable", e[20], 104,
     [0, [5, 249], "("], 98,
     2, 254, 104, {"name":"ParenExpr"}],
    [1, 5, 96],
    [1, 5, 99],
    [1, 259, 100],
    [1, 5, 101],
    [")", 102],
    [1, 5, 103],
    [1, 96, 104],
    [1, 5, 105],
    [2, 270, 106, {"name":"ArgList"},
     "[", 107,
     ".", 108,
     3, "operator", e[21], 106,
     3, "operator", e[22], 109,
     3, "keyword", e[23], 109,
     3, "operator", "?", 110,
     0, -1],
    [1, 5, 105],
    [1, 5, 111],
    [1, 5, 112],
    [1, 5, 113],
    [1, 5, 114],
    [1, 96, 115],
    [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 106,
     2, 275, 106, {"name":"TypeArgs"},
     3, "property callee", e[42], 106,
     3, "property", e[20], 106],
    [1, 96, 106],
    [1, 96, 116],
    [1, 5, 117],
    [1, 5, 118],
    ["]", 106],
    [3, "operator", ":", 119],
    [1, 5, 120],
    [1, 96, 106],
    ["(", 122],
    [1, 5, 123],
    [1, 96, 124,
     0, 124],
    [1, 5, 125],
    [")", -1],
    ["{", 127],
    [1, 5, 128],
    [2, 6, 129, {"name":"Statement"},
     "}", -1],
    [1, 5, 128],
    [3, "keyword", e[24], 131,
     3, "keyword", e[25], 146,
     0, -1],
    [1, 5, 132],
    ["(", 133],
    [1, 5, 134],
    [3, "keyword", e[13], 135,
     1, 213, 135,
     1, 259, 136],
    [1, 5, 134],
    [1, 5, 137],
    ["|", 138,
     3, "def", e[20], 139],
    [1, 5, 140],
    [1, 5, 141],
    [1, 259, 142],
    [")", 143],
    [1, 5, 137],
    [1, 5, 144],
    [2, 126, 145, {"name":"Block"}],
    [1, 5, 130],
    [1, 5, 147],
    [2, 126, -1, {"name":"Block"}],
    [1, 5, 149],
    [3, "keyword", e[26], 150,
     0, -1],
    [1, 5, 151],
    [2, 6, -1, {"name":"Statement"}],
    [2, 126, -1, {"name":"Block"},
     3, "keyword", e[27], 153,
     3, "keyword", e[28], 161,
     3, "keyword", e[29], 175,
     3, "keyword", e[30], 179,
     [5, 280], 186],
    [1, 5, 154],
    [3, "type def", e[20], 155],
    [1, 5, 156],
    [3, "keyword", e[31], 157,
     0, 158],
    [1, 5, 159],
    [1, 5, 160],
    [1, 286, 158],
    [2, 292, -1, {"name":"EnumBody"}],
    [1, 5, 162],
    [3, "type def", e[20], 163],
    [1, 5, 164],
    [2, 304, 165, {"name":"TypeParams"},
     0, 165],
    [1, 5, 166],
    [3, "keyword", e[32], 167,
     0, 168],
    [1, 5, 169],
    [1, 5, 170],
    [1, 259, 168],
    [3, "keyword", e[31], 171,
     0, 172],
    [1, 5, 173],
    [1, 5, 174],
    [1, 286, 172],
    [2, 309, -1, {"name":"ClassBody"}],
    [1, 5, 176],
    [3, "def", e[20], 177],
    [1, 5, 178],
    [2, 313, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 180],
    [e[20], 181],
    [1, 5, 182],
    [".", 183,
     ";", -1],
    [1, 5, 184],
    [e[20], 185],
    [1, 5, 182],
    [1, 259, 187],
    [1, 5, 188],
    [1, 317, 189],
    [1, 5, 190],
    [2, 322, -1, {"name":"FunctionDef"},
     3, "operator", "=", 191,
     0, 192],
    [1, 5, 193],
    [1, 5, 194],
    [1, 96, 192],
    [",", 195,
     ";", -1],
    [1, 5, 196],
    [1, 317, 197],
    [1, 5, 198],
    [3, "operator", "=", 199,
     0, 200],
    [1, 5, 201],
    [1, 5, 194],
    [1, 96, 200],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 203,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 204,
     3, "tag", e[35], 211,
     "{", 205],
    [e[33], 203,
     3, "def", e[34], 211,
     "<", 206,
     0, 211],
    [e[33], 204,
     3, "type", e[34], 211,
     0, 211],
    [3, "tag", e[35], 207],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 208],
    [/^[\t ]*/, 209],
    [">", 211],
    [1, 327, 210],
    ["}", 211],
    [e[36], 212,
     0, -1],
    [0, 211,
     0, 211],
    [3, "meta", [0, [6, 331], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 214],
    [1, 5, 215],
    ["(", 216,
     0, -1],
    [1, 5, 217],
    [1, 332, 218],
    [1, 5, 219],
    [")", -1],
    [3, "keyword", e[37], 221],
    [1, 5, 222],
    [2, 275, 223, {"name":"TypeArgs"},
     0, 223],
    [1, 5, 224],
    [1, 213, 225,
     3, "type", e[38], 226,
     0, 227,
     3, "type", e[39], 226],
    [1, 5, 224],
    [1, 5, 228],
    [3, "type qualifier", e[40], 229],
    [2, 275, 230, {"name":"TypeArgs"},
     1, 5, 231],
    [0, 227,
     2, 346, 226, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 228],
    ["[", 232,
     2, 270, 233, {"name":"ArgList"},
     0, 233],
    [1, 5, 234],
    [1, 5, 235],
    [1, 96, 236,
     0, 236],
    [2, 309, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 237],
    ["]", 238],
    [1, 5, 239],
    [2, 347, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 352], 241,
     [5, 355], 242],
    [3, "def", e[20], 243,
     2, 358, 243, {"name":"ParamList"}],
    [2, 363, 244, {"name":"SimpleParamList"}],
    [1, 5, 245],
    [1, 5, 246],
    [3, "operator", "->", 247],
    [3, "operator", "->", 247],
    [1, 5, 248],
    [2, 126, -1, {"name":"Block"},
     1, 96, -1],
    ["(", 250],
    [1, 5, 251],
    [3, "type", e[38], -1,
     0, 252,
     3, "type", e[39], -1],
    [3, "type qualifier", e[40], 253],
    [0, 252,
     2, 346, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 255],
    [1, 5, 256],
    [1, 96, 257,
     0, 257],
    [1, 5, 258],
    [")", -1],
    [1, 213, 260,
     3, "type", e[38], 263,
     0, 261,
     3, "type", e[39], 263],
    [1, 5, 259],
    [3, "type qualifier", e[40], 262],
    [0, 261,
     2, 346, 263, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 264],
    ["[", 265,
     2, 275, 266, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 267],
    [1, 5, 264],
    [1, 96, 268,
     0, 268],
    [1, 5, 269],
    ["]", 266],
    ["(", 271],
    [1, 5, 272],
    [1, 368, 273],
    [1, 5, 274],
    [")", -1],
    ["<", 276],
    [1, 5, 277],
    [1, 374, 278],
    [1, 5, 279],
    [">", -1],
    [1, 213, 281,
     2, 304, 282, {"name":"TypeParams"},
     0, 282],
    [1, 5, 280],
    [1, 5, 283],
    [3, "type", e[38], -1,
     0, 284],
    [3, "type qualifier", e[40], 285,
     3, "type", e[39], -1],
    [1, 5, 284],
    [1, 259, 287,
     0, -1],
    [1, 5, 288],
    [",", 289,
     0, -1],
    [1, 5, 290],
    [1, 259, 291],
    [1, 5, 288],
    ["{", 293],
    [1, 5, 294],
    [2, 388, 295, {"name":"EnumConstant"}],
    [1, 5, 296],
    [/^\,?/, 297],
    [1, 5, 298],
    [0, 294,
     ";", 299,
     0, 302],
    [1, 5, 300],
    [2, 395, 301, {"name":"ClassItem"},
     0, 302],
    [1, 5, 300],
    [1, 5, 303],
    ["}", -1],
    ["<", 305],
    [1, 5, 306],
    [1, 402, 307],
    [1, 5, 308],
    [">", -1],
    ["{", 310],
    [1, 5, 311],
    [2, 395, 312, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 311],
    ["{", 314],
    [1, 5, 315],
    [2, 418, 316, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 315],
    [3, "def", e[20], 318],
    [1, 5, 319],
    ["[", 320,
     0, -1],
    [1, 5, 321],
    ["]", -1],
    [2, 358, 323, {"name":"ParamList"}],
    [1, 5, 324],
    [2, 437, 325, {"name":"ThrowsClause"},
     0, 325],
    [1, 5, 326],
    [";", -1,
     2, 126, -1, {"name":"Block"}],
    [3, "attribute", "{", 328,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 327,
     "\n", 329,
     0, -1],
    [1, 327, 330],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 327],
    [/^(?=\*\/)/, 327,
     3, "attribute", "}", 327],
    [3, "keyword", e[29], -1],
    [e[41], 333,
     0, 334,
     0, -1],
    [1, 5, 335],
    [1, 5, 336],
    ["=", 334],
    [1, 213, 337,
     1, 96, 337],
    [1, 5, 338],
    [",", 339,
     0, -1],
    [1, 5, 340],
    [e[41], 341,
     0, 342],
    [1, 5, 343],
    [1, 5, 344],
    ["=", 342],
    [1, 213, 345,
     1, 96, 345],
    [1, 5, 338],
    [3, "type", e[39], -1],
    ["{", 348],
    [1, 5, 349],
    [1, 368, 350],
    [1, 5, 351],
    ["}", -1],
    [3, "def", e[20], 353,
     2, 358, 353, {"name":"ParamList"}],
    [1, 5, 354],
    [3, "operator", "->", -1],
    [2, 363, 356, {"name":"SimpleParamList"}],
    [1, 5, 357],
    [3, "operator", "->", -1],
    ["(", 359],
    [1, 5, 360],
    [1, 443, 361],
    [1, 5, 362],
    [")", -1],
    ["(", 364],
    [1, 5, 365],
    [1, 459, 366],
    [1, 5, 367],
    [")", -1],
    [2, 465, 369, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 370],
    [",", 371,
     0, -1],
    [1, 5, 372],
    [2, 465, 373, {"name":"ArgExpr"}],
    [1, 5, 370],
    [1, 259, 375,
     "?", 376,
     0, -1],
    [1, 5, 377],
    [1, 5, 378],
    [",", 379,
     0, -1],
    [3, "keyword", e[32], 380,
     3, "keyword", e[17], 380,
     0, 375],
    [1, 5, 381],
    [1, 5, 382],
    [1, 259, 383,
     "?", 384],
    [1, 259, 375],
    [1, 5, 377],
    [1, 5, 385],
    [3, "keyword", e[32], 386,
     3, "keyword", e[17], 386,
     0, 383],
    [1, 5, 387],
    [1, 259, 383],
    [1, 213, 389,
     0, 389],
    [1, 5, 390],
    [3, "def property", e[20], 391],
    [1, 5, 392],
    [2, 270, 393, {"name":"ArgList"},
     0, 393],
    [1, 5, 394],
    [2, 309, -1, {"name":"ClassBody"},
     0, -1],
    [2, 94, 396, {"name":"BeforeStatement"}],
    [1, 5, 397],
    [2, 304, 398, {"name":"TypeParams"},
     0, 398],
    [1, 5, 399],
    [3, "def property", e[42], 400,
     1, 466, -1],
    [1, 5, 401],
    [2, 322, -1, {"name":"FunctionDef"}],
    [1, 213, 403,
     3, "type def", e[20], 404,
     0, -1],
    [1, 5, 402],
    [1, 5, 405],
    [3, "keyword", e[32], 406,
     1, 5, 407],
    [1, 5, 408],
    [",", 409,
     0, -1],
    [1, 259, 410],
    [1, 5, 411],
    [1, 5, 405],
    [1, 213, 412,
     3, "type def", e[20], 413],
    [1, 5, 411],
    [1, 5, 414],
    [3, "keyword", e[32], 415,
     1, 5, 407],
    [1, 5, 416],
    [1, 259, 417],
    [1, 5, 414],
    [2, 94, 419, {"name":"BeforeStatement"}],
    [1, 5, 420],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 421,
     "(", 422,
     1, 152, -1],
    [1, 5, 423],
    [1, 5, 424],
    ["[", 425,
     3, "operator", "=", 426],
    [")", 427],
    [1, 5, 428],
    [1, 5, 429],
    [1, 5, 430],
    ["]", 431],
    [1, 96, -1],
    ["[", 432,
     3, "keyword", e[10], 433,
     0, -1],
    [1, 5, 423],
    [1, 5, 434],
    [1, 5, 435],
    ["]", 436],
    [1, 96, -1],
    [1, 5, 430],
    [3, "keyword", e[43], 438],
    [1, 5, 439],
    [1, 286, -1],
    [e[20], 441],
    [1, 5, 442],
    ["=", -1],
    [1, 213, 444,
     3, "keyword", e[13], 444,
     1, 213, 444,
     1, 259, 445,
     0, -1],
    [1, 5, 443],
    [1, 5, 446],
    [e[44], 447],
    [1, 5, 448],
    [3, "keyword", e[16], 449,
     1, 317, 449],
    [1, 5, 450],
    [",", 451,
     0, -1],
    [1, 5, 452],
    [1, 213, 453,
     3, "keyword", e[13], 453,
     1, 213, 453,
     1, 259, 454],
    [1, 5, 452],
    [1, 5, 455],
    [e[44], 456],
    [1, 5, 457],
    [3, "keyword", e[16], 458,
     1, 317, 458],
    [1, 5, 450],
    [3, "def", e[20], 460,
     0, -1],
    [1, 5, 461],
    [",", 462,
     0, -1],
    [1, 5, 463],
    [3, "def", e[20], 464],
    [1, 5, 461],
    [1, 96, -1],
    [2, 126, -1, {"name":"Block"},
     3, "keyword", e[27], 467,
     3, "keyword", e[28], 475,
     3, "keyword", e[29], 489,
     3, "keyword", e[30], 493,
     [5, 516], 500],
    [1, 5, 468],
    [3, "type def", e[20], 469],
    [1, 5, 470],
    [3, "keyword", e[31], 471,
     0, 472],
    [1, 5, 473],
    [1, 5, 474],
    [1, 286, 472],
    [2, 292, -1, {"name":"EnumBody"}],
    [1, 5, 476],
    [3, "type def", e[20], 477],
    [1, 5, 478],
    [2, 304, 479, {"name":"TypeParams"},
     0, 479],
    [1, 5, 480],
    [3, "keyword", e[32], 481,
     0, 482],
    [1, 5, 483],
    [1, 5, 484],
    [1, 259, 482],
    [3, "keyword", e[31], 485,
     0, 486],
    [1, 5, 487],
    [1, 5, 488],
    [1, 286, 486],
    [2, 309, -1, {"name":"ClassBody"}],
    [1, 5, 490],
    [3, "def", e[20], 491],
    [1, 5, 492],
    [2, 313, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 494],
    [e[20], 495],
    [1, 5, 496],
    [".", 497,
     ";", -1],
    [1, 5, 498],
    [e[20], 499],
    [1, 5, 496],
    [1, 259, 501],
    [1, 5, 502],
    [1, 522, 503],
    [1, 5, 504],
    [2, 322, -1, {"name":"FunctionDef"},
     3, "operator", "=", 505,
     0, 506],
    [1, 5, 507],
    [1, 5, 508],
    [1, 96, 506],
    [",", 509,
     ";", -1],
    [1, 5, 510],
    [1, 522, 511],
    [1, 5, 512],
    [3, "operator", "=", 513,
     0, 514],
    [1, 5, 515],
    [1, 5, 508],
    [1, 96, 514],
    [1, 213, 517,
     2, 304, 518, {"name":"TypeParams"},
     0, 518],
    [1, 5, 516],
    [1, 5, 519],
    [3, "type", e[38], -1,
     0, 520],
    [3, "type qualifier", e[40], 521,
     3, "type", e[39], -1],
    [1, 5, 520],
    [3, "def property", e[20], 523],
    [1, 5, 524],
    ["[", 525,
     0, -1],
    [1, 5, 526],
    ["]", -1]
  ];
  var start = 0;
  var token = 4;

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
  function isLocalType(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
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

  var typeRE = /(^|\s)type($|\s)/;

  function markTypeLocals(type, scopes, stream, state) {
    if (type == "type def") {
      var scope = getScope(state.context, scopes);
      if (scope) {
        if (!scope.localTypes) { scope.localTypes = []; }
        scope.localTypes.push(stream.current());
      }
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
               isLocalType(state.context, stream.current())) {
      type += " local";
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
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
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
