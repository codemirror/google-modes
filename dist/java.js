(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, /^var(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, [0, [5, 450], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 393]], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     3, "keyword", e[38], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[44], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[33], -1,
     3, "type", e[39], -1,
     3, "type", e[40], -1,
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
    [2, 130, -1, {"name":"CatchFinally"}],
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
    [e[37], 90,
     0, 91],
    [0, 89,
     0, 89],
    [2, 202, 91, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 92,
     "*/", -1],
    [e[34], 93,
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
     2, 238, 104, {"name":"Lambda"},
     3, "variable callee", e[19], 104,
     3, "variable", e[20], 104,
     2, 247, 104, {"name":"ArrayInitializer"},
     [0, [5, 252], "("], 98,
     2, 255, 104, {"name":"ParenExpr"}],
    [1, 5, 96],
    [1, 5, 99],
    [1, 260, 100],
    [1, 5, 101],
    [")", 102],
    [1, 5, 103],
    [1, 96, 104],
    [1, 5, 105],
    [2, 269, 106, {"name":"ArgList"},
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
     2, 220, 106, {"name":"NewExpr"},
     2, 274, 106, {"name":"TypeArgs"},
     3, "property callee", e[43], 106,
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
     1, 260, 136],
    [1, 5, 134],
    [1, 5, 137],
    ["|", 138,
     3, "def", e[20], 139],
    [1, 5, 140],
    [1, 5, 141],
    [1, 260, 142],
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
     [5, 279], 186],
    [1, 5, 154],
    [3, "type def", e[20], 155],
    [1, 5, 156],
    [3, "keyword", e[31], 157,
     0, 158],
    [1, 5, 159],
    [1, 5, 160],
    [1, 289, 158],
    [2, 295, -1, {"name":"EnumBody"}],
    [1, 5, 162],
    [3, "type def", e[20], 163],
    [1, 5, 164],
    [2, 307, 165, {"name":"TypeParams"},
     0, 165],
    [1, 5, 166],
    [3, "keyword", e[32], 167,
     0, 168],
    [1, 5, 169],
    [1, 5, 170],
    [1, 260, 168],
    [3, "keyword", e[31], 171,
     0, 172],
    [1, 5, 173],
    [1, 5, 174],
    [1, 289, 172],
    [2, 312, -1, {"name":"ClassBody"}],
    [1, 5, 176],
    [3, "def", e[20], 177],
    [1, 5, 178],
    [2, 316, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 180],
    [e[20], 181],
    [1, 5, 182],
    [".", 183,
     ";", -1],
    [1, 5, 184],
    [e[20], 185],
    [1, 5, 182],
    [1, 260, 187,
     3, "keyword", e[33], 187],
    [1, 5, 188],
    [1, 320, 189],
    [1, 5, 190],
    [2, 325, -1, {"name":"FunctionDef"},
     3, "operator", "=", 191,
     0, 192],
    [1, 5, 193],
    [1, 5, 194],
    [1, 96, 192],
    [",", 195,
     ";", -1],
    [1, 5, 196],
    [1, 320, 197],
    [1, 5, 198],
    [3, "operator", "=", 199,
     0, 200],
    [1, 5, 201],
    [1, 5, 194],
    [1, 96, 200],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 203,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 204,
     3, "tag", e[36], 211,
     "{", 205],
    [e[34], 203,
     3, "def", e[35], 211,
     "<", 206,
     0, 211],
    [e[34], 204,
     3, "type", e[35], 211,
     0, 211],
    [3, "tag", e[36], 207],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 208],
    [/^[\t ]*/, 209],
    [">", 211],
    [1, 330, 210],
    ["}", 211],
    [e[37], 212,
     0, -1],
    [0, 211,
     0, 211],
    [3, "meta", [0, [6, 334], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 214],
    [1, 5, 215],
    ["(", 216,
     0, -1],
    [1, 5, 217],
    [1, 335, 218],
    [1, 5, 219],
    [")", -1],
    [3, "keyword", e[38], 221],
    [1, 5, 222],
    [2, 274, 223, {"name":"TypeArgs"},
     0, 223],
    [1, 5, 224],
    [1, 213, 225,
     1, 349, 226],
    [1, 5, 224],
    [1, 5, 227],
    [2, 274, 228, {"name":"TypeArgs"},
     1, 5, 229],
    [1, 5, 227],
    ["[", 230,
     2, 269, 231, {"name":"ArgList"},
     0, 231],
    [1, 5, 232],
    [1, 5, 233],
    [1, 96, 234,
     0, 234],
    [2, 312, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 235],
    ["]", 236],
    [1, 5, 237],
    [2, 247, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 357], 239,
     [5, 360], 240],
    [3, "def", e[20], 241,
     2, 363, 241, {"name":"ParamList"}],
    [2, 368, 242, {"name":"SimpleParamList"}],
    [1, 5, 243],
    [1, 5, 244],
    [3, "operator", "->", 245],
    [3, "operator", "->", 245],
    [1, 5, 246],
    [2, 126, -1, {"name":"Block"},
     1, 96, -1],
    ["{", 248],
    [1, 5, 249],
    [1, 373, 250],
    [1, 5, 251],
    ["}", -1],
    ["(", 253],
    [1, 5, 254],
    [1, 349, -1],
    ["(", 256],
    [1, 5, 257],
    [1, 96, 258,
     0, 258],
    [1, 5, 259],
    [")", -1],
    [1, 213, 261,
     1, 349, 262],
    [1, 5, 260],
    [1, 5, 263],
    ["[", 264,
     2, 274, 265, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 266],
    [1, 5, 263],
    [1, 96, 267,
     0, 267],
    [1, 5, 268],
    ["]", 265],
    ["(", 270],
    [1, 5, 271],
    [1, 373, 272],
    [1, 5, 273],
    [")", -1],
    ["<", 275],
    [1, 5, 276],
    [1, 379, 277],
    [1, 5, 278],
    [">", -1],
    [1, 213, 280,
     2, 307, 281, {"name":"TypeParams"},
     0, 281],
    [1, 5, 279],
    [1, 5, 282],
    [3, "type", e[39], -1,
     3, "keyword", e[33], -1,
     0, 283],
    [3, "type qualifier", e[42], 284,
     3, "type", e[40], -1],
    [1, 5, 285],
    [2, 274, 286, {"name":"TypeArgs"},
     0, 286],
    [1, 5, 287],
    [".", 288],
    [1, 5, 283],
    [1, 260, 290,
     0, -1],
    [1, 5, 291],
    [",", 292,
     0, -1],
    [1, 5, 293],
    [1, 260, 294,
     0, 294],
    [1, 5, 291],
    ["{", 296],
    [1, 5, 297],
    [2, 397, 298, {"name":"EnumConstant"}],
    [1, 5, 299],
    [/^\,?/, 300],
    [1, 5, 301],
    [0, 297,
     ";", 302,
     0, 305],
    [1, 5, 303],
    [2, 404, 304, {"name":"ClassItem"},
     0, 305],
    [1, 5, 303],
    [1, 5, 306],
    ["}", -1],
    ["<", 308],
    [1, 5, 309],
    [1, 411, 310],
    [1, 5, 311],
    [">", -1],
    ["{", 313],
    [1, 5, 314],
    [2, 404, 315, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 314],
    ["{", 317],
    [1, 5, 318],
    [2, 428, 319, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 318],
    [3, "def", e[20], 321],
    [1, 5, 322],
    ["[", 323,
     0, -1],
    [1, 5, 324],
    ["]", -1],
    [2, 363, 326, {"name":"ParamList"}],
    [1, 5, 327],
    [2, 447, 328, {"name":"ThrowsClause"},
     0, 328],
    [1, 5, 329],
    [";", -1,
     2, 126, -1, {"name":"Block"}],
    [3, "attribute", "{", 331,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 330,
     "\n", 332,
     0, -1],
    [1, 330, 333],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 330],
    [/^(?=\*\/)/, 330,
     3, "attribute", "}", 330],
    [3, "keyword", e[29], -1],
    [e[41], 336,
     0, 337,
     0, -1],
    [1, 5, 338],
    [1, 5, 339],
    ["=", 337],
    [1, 213, 340,
     2, 247, 340, {"name":"ArrayInitializer"},
     1, 96, 340],
    [1, 5, 341],
    [",", 342,
     0, -1],
    [1, 5, 343],
    [e[41], 344,
     0, 345,
     0, 346],
    [1, 5, 347],
    [1, 5, 348],
    [1, 5, 341],
    ["=", 345],
    [1, 213, 346,
     2, 247, 346, {"name":"ArrayInitializer"},
     1, 96, 346],
    [3, "type", e[39], -1,
     0, 350,
     3, "type", e[40], -1],
    [3, "type qualifier", e[42], 351],
    [1, 5, 352],
    [2, 274, 353, {"name":"TypeArgs"},
     0, 353],
    [1, 5, 354],
    [".", 355],
    [1, 5, 356],
    [0, 350,
     2, 453, -1, {"name":"qualifiedClassName","token":"qualified"}],
    [3, "def", e[20], 358,
     2, 363, 358, {"name":"ParamList"}],
    [1, 5, 359],
    [3, "operator", "->", -1],
    [2, 368, 361, {"name":"SimpleParamList"}],
    [1, 5, 362],
    [3, "operator", "->", -1],
    ["(", 364],
    [1, 5, 365],
    [1, 454, 366],
    [1, 5, 367],
    [")", -1],
    ["(", 369],
    [1, 5, 370],
    [1, 470, 371],
    [1, 5, 372],
    [")", -1],
    [2, 476, 374, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 375],
    [",", 376,
     0, -1],
    [1, 5, 377],
    [2, 476, 378, {"name":"ArgExpr"},
     0, 378],
    [1, 5, 375],
    [1, 260, 380,
     "?", 381,
     0, -1],
    [1, 5, 382],
    [1, 5, 383],
    [",", 384,
     0, -1],
    [3, "keyword", e[32], 385,
     3, "keyword", e[17], 385,
     0, 380],
    [1, 5, 386],
    [1, 5, 387],
    [1, 260, 388,
     "?", 389,
     0, 388],
    [1, 260, 380],
    [1, 5, 382],
    [1, 5, 390],
    [3, "keyword", e[32], 391,
     3, "keyword", e[17], 391,
     0, 388],
    [1, 5, 392],
    [1, 260, 388],
    [/^ */, 394],
    [2, 274, 395, {"name":"TypeArgs"},
     0, 396],
    [/^ */, 396],
    [/^\.(?!\.)/, -1],
    [1, 213, 398,
     0, 398],
    [1, 5, 399],
    [3, "def property", e[20], 400],
    [1, 5, 401],
    [2, 269, 402, {"name":"ArgList"},
     0, 402],
    [1, 5, 403],
    [2, 312, -1, {"name":"ClassBody"},
     0, -1],
    [2, 94, 405, {"name":"BeforeStatement"}],
    [1, 5, 406],
    [2, 307, 407, {"name":"TypeParams"},
     0, 407],
    [1, 5, 408],
    [3, "def property", e[43], 409,
     1, 477, -1],
    [1, 5, 410],
    [2, 325, -1, {"name":"FunctionDef"}],
    [1, 213, 412,
     3, "type def", e[20], 413,
     0, -1],
    [1, 5, 411],
    [1, 5, 414],
    [3, "keyword", e[32], 415,
     1, 5, 416],
    [1, 5, 417],
    [",", 418,
     0, -1],
    [1, 260, 419],
    [1, 5, 420],
    [1, 5, 414],
    [1, 213, 421,
     3, "type def", e[20], 422,
     0, 423],
    [1, 5, 420],
    [1, 5, 424],
    [1, 5, 416],
    [3, "keyword", e[32], 425,
     0, 423],
    [1, 5, 426],
    [1, 260, 427],
    [1, 5, 424],
    [2, 94, 429, {"name":"BeforeStatement"}],
    [1, 5, 430],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 431,
     "(", 432,
     1, 152, -1],
    [1, 5, 433],
    [1, 5, 434],
    ["[", 435,
     3, "operator", "=", 436],
    [")", 437],
    [1, 5, 438],
    [1, 5, 439],
    [1, 5, 440],
    ["]", 441],
    [1, 96, -1],
    ["[", 442,
     3, "keyword", e[10], 443,
     0, -1],
    [1, 5, 433],
    [1, 5, 444],
    [1, 5, 445],
    ["]", 446],
    [1, 96, -1],
    [1, 5, 440],
    [3, "keyword", e[44], 448],
    [1, 5, 449],
    [1, 289, -1],
    [e[20], 451],
    [1, 5, 452],
    ["=", -1],
    [3, "type", e[40], -1],
    [1, 213, 455,
     3, "keyword", e[13], 455,
     1, 213, 455,
     1, 260, 456,
     0, -1],
    [1, 5, 454],
    [1, 5, 457],
    [e[45], 458],
    [1, 5, 459],
    [3, "keyword", e[16], 460,
     1, 320, 460],
    [1, 5, 461],
    [",", 462,
     0, -1],
    [1, 5, 463],
    [1, 213, 464,
     3, "keyword", e[13], 464,
     1, 213, 464,
     1, 260, 465,
     0, 466],
    [1, 5, 463],
    [1, 5, 467],
    [1, 5, 461],
    [e[45], 468],
    [1, 5, 469],
    [3, "keyword", e[16], 466,
     1, 320, 466],
    [3, "def", e[20], 471,
     0, -1],
    [1, 5, 472],
    [",", 473,
     0, -1],
    [1, 5, 474],
    [3, "def", e[20], 475,
     0, 475],
    [1, 5, 472],
    [1, 96, -1],
    [2, 126, -1, {"name":"Block"},
     3, "keyword", e[27], 478,
     3, "keyword", e[28], 486,
     3, "keyword", e[29], 500,
     3, "keyword", e[30], 504,
     [5, 527], 511],
    [1, 5, 479],
    [3, "type def", e[20], 480],
    [1, 5, 481],
    [3, "keyword", e[31], 482,
     0, 483],
    [1, 5, 484],
    [1, 5, 485],
    [1, 289, 483],
    [2, 295, -1, {"name":"EnumBody"}],
    [1, 5, 487],
    [3, "type def", e[20], 488],
    [1, 5, 489],
    [2, 307, 490, {"name":"TypeParams"},
     0, 490],
    [1, 5, 491],
    [3, "keyword", e[32], 492,
     0, 493],
    [1, 5, 494],
    [1, 5, 495],
    [1, 260, 493],
    [3, "keyword", e[31], 496,
     0, 497],
    [1, 5, 498],
    [1, 5, 499],
    [1, 289, 497],
    [2, 312, -1, {"name":"ClassBody"}],
    [1, 5, 501],
    [3, "def", e[20], 502],
    [1, 5, 503],
    [2, 316, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 505],
    [e[20], 506],
    [1, 5, 507],
    [".", 508,
     ";", -1],
    [1, 5, 509],
    [e[20], 510],
    [1, 5, 507],
    [1, 260, 512,
     3, "keyword", e[33], 512],
    [1, 5, 513],
    [1, 537, 514],
    [1, 5, 515],
    [2, 325, -1, {"name":"FunctionDef"},
     3, "operator", "=", 516,
     0, 517],
    [1, 5, 518],
    [1, 5, 519],
    [1, 96, 517],
    [",", 520,
     ";", -1],
    [1, 5, 521],
    [1, 537, 522],
    [1, 5, 523],
    [3, "operator", "=", 524,
     0, 525],
    [1, 5, 526],
    [1, 5, 519],
    [1, 96, 525],
    [1, 213, 528,
     2, 307, 529, {"name":"TypeParams"},
     0, 529],
    [1, 5, 527],
    [1, 5, 530],
    [3, "type", e[39], -1,
     3, "keyword", e[33], -1,
     0, 531],
    [3, "type qualifier", e[42], 532,
     3, "type", e[40], -1],
    [1, 5, 533],
    [2, 274, 534, {"name":"TypeArgs"},
     0, 534],
    [1, 5, 535],
    [".", 536],
    [1, 5, 531],
    [3, "def property", e[20], 538],
    [1, 5, 539],
    ["[", 540,
     0, -1],
    [1, 5, 541],
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
      if (!textAfter || /^(else\b|\/[\/\*])/.test(textAfter)) { return base }
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
