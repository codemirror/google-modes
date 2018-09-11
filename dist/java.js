(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, [0, [5, 449], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 393]], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     2, 238, 104, {"name":"Lambda"},
     3, "variable callee", e[19], 104,
     3, "variable", e[20], 104,
     [0, [5, 247], "("], 98,
     2, 250, 104, {"name":"ParenExpr"}],
    [1, 5, 96],
    [1, 5, 99],
    [1, 255, 100],
    [1, 5, 101],
    [")", 102],
    [1, 5, 103],
    [1, 96, 104],
    [1, 5, 105],
    [2, 264, 106, {"name":"ArgList"},
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
     2, 269, 106, {"name":"TypeArgs"},
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
     1, 255, 136],
    [1, 5, 134],
    [1, 5, 137],
    ["|", 138,
     3, "def", e[20], 139],
    [1, 5, 140],
    [1, 5, 141],
    [1, 255, 142],
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
     [5, 274], 186],
    [1, 5, 154],
    [3, "type def", e[20], 155],
    [1, 5, 156],
    [3, "keyword", e[31], 157,
     0, 158],
    [1, 5, 159],
    [1, 5, 160],
    [1, 284, 158],
    [2, 290, -1, {"name":"EnumBody"}],
    [1, 5, 162],
    [3, "type def", e[20], 163],
    [1, 5, 164],
    [2, 302, 165, {"name":"TypeParams"},
     0, 165],
    [1, 5, 166],
    [3, "keyword", e[32], 167,
     0, 168],
    [1, 5, 169],
    [1, 5, 170],
    [1, 255, 168],
    [3, "keyword", e[31], 171,
     0, 172],
    [1, 5, 173],
    [1, 5, 174],
    [1, 284, 172],
    [2, 307, -1, {"name":"ClassBody"}],
    [1, 5, 176],
    [3, "def", e[20], 177],
    [1, 5, 178],
    [2, 311, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 180],
    [e[20], 181],
    [1, 5, 182],
    [".", 183,
     ";", -1],
    [1, 5, 184],
    [e[20], 185],
    [1, 5, 182],
    [1, 255, 187],
    [1, 5, 188],
    [1, 315, 189],
    [1, 5, 190],
    [2, 320, -1, {"name":"FunctionDef"},
     3, "operator", "=", 191,
     0, 192],
    [1, 5, 193],
    [1, 5, 194],
    [1, 96, 192],
    [",", 195,
     ";", -1],
    [1, 5, 196],
    [1, 315, 197],
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
    [1, 325, 210],
    ["}", 211],
    [e[36], 212,
     0, -1],
    [0, 211,
     0, 211],
    [3, "meta", [0, [6, 329], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 214],
    [1, 5, 215],
    ["(", 216,
     0, -1],
    [1, 5, 217],
    [1, 330, 218],
    [1, 5, 219],
    [")", -1],
    [3, "keyword", e[37], 221],
    [1, 5, 222],
    [2, 269, 223, {"name":"TypeArgs"},
     0, 223],
    [1, 5, 224],
    [1, 213, 225,
     1, 344, 226],
    [1, 5, 224],
    [1, 5, 227],
    [2, 269, 228, {"name":"TypeArgs"},
     1, 5, 229],
    [1, 5, 227],
    ["[", 230,
     2, 264, 231, {"name":"ArgList"},
     0, 231],
    [1, 5, 232],
    [1, 5, 233],
    [1, 96, 234,
     0, 234],
    [2, 307, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 235],
    ["]", 236],
    [1, 5, 237],
    [2, 352, -1, {"name":"ArrayInitializer"},
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
    ["(", 248],
    [1, 5, 249],
    [1, 344, -1],
    ["(", 251],
    [1, 5, 252],
    [1, 96, 253,
     0, 253],
    [1, 5, 254],
    [")", -1],
    [1, 213, 256,
     1, 344, 257],
    [1, 5, 255],
    [1, 5, 258],
    ["[", 259,
     2, 269, 260, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 261],
    [1, 5, 258],
    [1, 96, 262,
     0, 262],
    [1, 5, 263],
    ["]", 260],
    ["(", 265],
    [1, 5, 266],
    [1, 373, 267],
    [1, 5, 268],
    [")", -1],
    ["<", 270],
    [1, 5, 271],
    [1, 379, 272],
    [1, 5, 273],
    [">", -1],
    [1, 213, 275,
     2, 302, 276, {"name":"TypeParams"},
     0, 276],
    [1, 5, 274],
    [1, 5, 277],
    [3, "type", e[38], -1,
     0, 278],
    [3, "type qualifier", e[41], 279,
     3, "type", e[39], -1],
    [1, 5, 280],
    [2, 269, 281, {"name":"TypeArgs"},
     0, 281],
    [1, 5, 282],
    [".", 283],
    [1, 5, 278],
    [1, 255, 285,
     0, -1],
    [1, 5, 286],
    [",", 287,
     0, -1],
    [1, 5, 288],
    [1, 255, 289],
    [1, 5, 286],
    ["{", 291],
    [1, 5, 292],
    [2, 397, 293, {"name":"EnumConstant"}],
    [1, 5, 294],
    [/^\,?/, 295],
    [1, 5, 296],
    [0, 292,
     ";", 297,
     0, 300],
    [1, 5, 298],
    [2, 404, 299, {"name":"ClassItem"},
     0, 300],
    [1, 5, 298],
    [1, 5, 301],
    ["}", -1],
    ["<", 303],
    [1, 5, 304],
    [1, 411, 305],
    [1, 5, 306],
    [">", -1],
    ["{", 308],
    [1, 5, 309],
    [2, 404, 310, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 309],
    ["{", 312],
    [1, 5, 313],
    [2, 427, 314, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 313],
    [3, "def", e[20], 316],
    [1, 5, 317],
    ["[", 318,
     0, -1],
    [1, 5, 319],
    ["]", -1],
    [2, 363, 321, {"name":"ParamList"}],
    [1, 5, 322],
    [2, 446, 323, {"name":"ThrowsClause"},
     0, 323],
    [1, 5, 324],
    [";", -1,
     2, 126, -1, {"name":"Block"}],
    [3, "attribute", "{", 326,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 325,
     "\n", 327,
     0, -1],
    [1, 325, 328],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 325],
    [/^(?=\*\/)/, 325,
     3, "attribute", "}", 325],
    [3, "keyword", e[29], -1],
    [e[40], 331,
     0, 332,
     0, -1],
    [1, 5, 333],
    [1, 5, 334],
    ["=", 332],
    [1, 213, 335,
     1, 96, 335],
    [1, 5, 336],
    [",", 337,
     0, -1],
    [1, 5, 338],
    [e[40], 339,
     0, 340],
    [1, 5, 341],
    [1, 5, 342],
    ["=", 340],
    [1, 213, 343,
     1, 96, 343],
    [1, 5, 336],
    [3, "type", e[38], -1,
     0, 345,
     3, "type", e[39], -1],
    [3, "type qualifier", e[41], 346],
    [1, 5, 347],
    [2, 269, 348, {"name":"TypeArgs"},
     0, 348],
    [1, 5, 349],
    [".", 350],
    [1, 5, 351],
    [0, 345,
     2, 452, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["{", 353],
    [1, 5, 354],
    [1, 373, 355],
    [1, 5, 356],
    ["}", -1],
    [3, "def", e[20], 358,
     2, 363, 358, {"name":"ParamList"}],
    [1, 5, 359],
    [3, "operator", "->", -1],
    [2, 368, 361, {"name":"SimpleParamList"}],
    [1, 5, 362],
    [3, "operator", "->", -1],
    ["(", 364],
    [1, 5, 365],
    [1, 453, 366],
    [1, 5, 367],
    [")", -1],
    ["(", 369],
    [1, 5, 370],
    [1, 469, 371],
    [1, 5, 372],
    [")", -1],
    [2, 475, 374, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 375],
    [",", 376,
     0, -1],
    [1, 5, 377],
    [2, 475, 378, {"name":"ArgExpr"}],
    [1, 5, 375],
    [1, 255, 380,
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
    [1, 255, 388,
     "?", 389],
    [1, 255, 380],
    [1, 5, 382],
    [1, 5, 390],
    [3, "keyword", e[32], 391,
     3, "keyword", e[17], 391,
     0, 388],
    [1, 5, 392],
    [1, 255, 388],
    [/^ */, 394],
    [2, 269, 395, {"name":"TypeArgs"},
     0, 396],
    [/^ */, 396],
    [/^\.(?!\.)/, -1],
    [1, 213, 398,
     0, 398],
    [1, 5, 399],
    [3, "def property", e[20], 400],
    [1, 5, 401],
    [2, 264, 402, {"name":"ArgList"},
     0, 402],
    [1, 5, 403],
    [2, 307, -1, {"name":"ClassBody"},
     0, -1],
    [2, 94, 405, {"name":"BeforeStatement"}],
    [1, 5, 406],
    [2, 302, 407, {"name":"TypeParams"},
     0, 407],
    [1, 5, 408],
    [3, "def property", e[42], 409,
     1, 476, -1],
    [1, 5, 410],
    [2, 320, -1, {"name":"FunctionDef"}],
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
    [1, 255, 419],
    [1, 5, 420],
    [1, 5, 414],
    [1, 213, 421,
     3, "type def", e[20], 422],
    [1, 5, 420],
    [1, 5, 423],
    [3, "keyword", e[32], 424,
     1, 5, 416],
    [1, 5, 425],
    [1, 255, 426],
    [1, 5, 423],
    [2, 94, 428, {"name":"BeforeStatement"}],
    [1, 5, 429],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 430,
     "(", 431,
     1, 152, -1],
    [1, 5, 432],
    [1, 5, 433],
    ["[", 434,
     3, "operator", "=", 435],
    [")", 436],
    [1, 5, 437],
    [1, 5, 438],
    [1, 5, 439],
    ["]", 440],
    [1, 96, -1],
    ["[", 441,
     3, "keyword", e[10], 442,
     0, -1],
    [1, 5, 432],
    [1, 5, 443],
    [1, 5, 444],
    ["]", 445],
    [1, 96, -1],
    [1, 5, 439],
    [3, "keyword", e[43], 447],
    [1, 5, 448],
    [1, 284, -1],
    [e[20], 450],
    [1, 5, 451],
    ["=", -1],
    [3, "type", e[39], -1],
    [1, 213, 454,
     3, "keyword", e[13], 454,
     1, 213, 454,
     1, 255, 455,
     0, -1],
    [1, 5, 453],
    [1, 5, 456],
    [e[44], 457],
    [1, 5, 458],
    [3, "keyword", e[16], 459,
     1, 315, 459],
    [1, 5, 460],
    [",", 461,
     0, -1],
    [1, 5, 462],
    [1, 213, 463,
     3, "keyword", e[13], 463,
     1, 213, 463,
     1, 255, 464],
    [1, 5, 462],
    [1, 5, 465],
    [e[44], 466],
    [1, 5, 467],
    [3, "keyword", e[16], 468,
     1, 315, 468],
    [1, 5, 460],
    [3, "def", e[20], 470,
     0, -1],
    [1, 5, 471],
    [",", 472,
     0, -1],
    [1, 5, 473],
    [3, "def", e[20], 474],
    [1, 5, 471],
    [1, 96, -1],
    [2, 126, -1, {"name":"Block"},
     3, "keyword", e[27], 477,
     3, "keyword", e[28], 485,
     3, "keyword", e[29], 499,
     3, "keyword", e[30], 503,
     [5, 526], 510],
    [1, 5, 478],
    [3, "type def", e[20], 479],
    [1, 5, 480],
    [3, "keyword", e[31], 481,
     0, 482],
    [1, 5, 483],
    [1, 5, 484],
    [1, 284, 482],
    [2, 290, -1, {"name":"EnumBody"}],
    [1, 5, 486],
    [3, "type def", e[20], 487],
    [1, 5, 488],
    [2, 302, 489, {"name":"TypeParams"},
     0, 489],
    [1, 5, 490],
    [3, "keyword", e[32], 491,
     0, 492],
    [1, 5, 493],
    [1, 5, 494],
    [1, 255, 492],
    [3, "keyword", e[31], 495,
     0, 496],
    [1, 5, 497],
    [1, 5, 498],
    [1, 284, 496],
    [2, 307, -1, {"name":"ClassBody"}],
    [1, 5, 500],
    [3, "def", e[20], 501],
    [1, 5, 502],
    [2, 311, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 504],
    [e[20], 505],
    [1, 5, 506],
    [".", 507,
     ";", -1],
    [1, 5, 508],
    [e[20], 509],
    [1, 5, 506],
    [1, 255, 511],
    [1, 5, 512],
    [1, 536, 513],
    [1, 5, 514],
    [2, 320, -1, {"name":"FunctionDef"},
     3, "operator", "=", 515,
     0, 516],
    [1, 5, 517],
    [1, 5, 518],
    [1, 96, 516],
    [",", 519,
     ";", -1],
    [1, 5, 520],
    [1, 536, 521],
    [1, 5, 522],
    [3, "operator", "=", 523,
     0, 524],
    [1, 5, 525],
    [1, 5, 518],
    [1, 96, 524],
    [1, 213, 527,
     2, 302, 528, {"name":"TypeParams"},
     0, 528],
    [1, 5, 526],
    [1, 5, 529],
    [3, "type", e[38], -1,
     0, 530],
    [3, "type qualifier", e[41], 531,
     3, "type", e[39], -1],
    [1, 5, 532],
    [2, 269, 533, {"name":"TypeArgs"},
     0, 533],
    [1, 5, 534],
    [".", 535],
    [1, 5, 530],
    [3, "def property", e[20], 537],
    [1, 5, 538],
    ["[", 539,
     0, -1],
    [1, 5, 540],
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
