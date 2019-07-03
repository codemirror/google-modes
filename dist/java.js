(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, /^var(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, [0, [5, 452], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 395]], /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     3, "keyword", e[13], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[33], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[44], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[35], -1,
     3, "type", e[40], -1,
     3, "type", e[41], -1,
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
    [2, 123, 23, {"name":"CondExpr"}],
    [1, 5, 24],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 26],
    [2, 128, 27, {"name":"Block"}],
    [1, 5, 28],
    [2, 132, -1, {"name":"CatchFinally"}],
    [1, 5, 30],
    [2, 6, 31, {"name":"Statement"}],
    [1, 5, 32],
    [3, "keyword", e[1], 33],
    [1, 5, 34],
    [2, 123, 35, {"name":"CondExpr"}],
    [1, 5, 36],
    [";", -1],
    [1, 5, 38],
    [2, 123, 39, {"name":"CondExpr"}],
    [1, 5, 40],
    [2, 6, 41, {"name":"Statement"}],
    [2, 150, -1, {"name":"Alternative"}],
    [1, 5, 43],
    [2, 123, 44, {"name":"CondExpr"}],
    [1, 5, 45],
    [2, 128, -1, {"name":"Block"}],
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
    [1, 154, -1],
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
    [e[39], 90,
     0, 91],
    [0, 89,
     0, 89],
    [2, 204, 91, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 92,
     "*/", -1],
    [e[36], 93,
     /^\:(?!\:)/, -1],
    [3, "keyword", e[13], 95,
     1, 215, 95,
     0, -1],
    [1, 5, 94],
    [3, "operator", e[14], 97,
     3, "atom", e[15], 104,
     3, "keyword", e[16], 104,
     3, "keyword", e[17], 104,
     3, "number", e[18], 104,
     2, 85, 104, {"name":"string","token":"string"},
     2, 222, 104, {"name":"NewExpr"},
     2, 240, 104, {"name":"Lambda"},
     3, "variable callee", e[19], 104,
     3, "variable", e[20], 104,
     2, 249, 104, {"name":"ArrayInitializer"},
     [0, [5, 254], "("], 98,
     2, 257, 104, {"name":"ParenExpr"}],
    [1, 5, 96],
    [1, 5, 99],
    [1, 262, 100],
    [1, 5, 101],
    [")", 102],
    [1, 5, 103],
    [1, 96, 104],
    [1, 5, 105],
    [2, 271, 106, {"name":"ArgList"},
     "[", 107,
     ".", 108,
     "::", 109,
     3, "operator", e[21], 106,
     3, "operator", e[22], 110,
     3, "keyword", e[23], 110,
     3, "operator", "?", 111,
     0, -1],
    [1, 5, 105],
    [1, 5, 112],
    [1, 5, 113],
    [1, 5, 114],
    [1, 5, 115],
    [1, 5, 116],
    [1, 96, 117],
    [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 106,
     2, 222, 106, {"name":"NewExpr"},
     2, 276, 106, {"name":"TypeArgs"},
     3, "property callee", e[25], 106,
     3, "property", e[20], 106],
    [3, "keyword", e[24], 106,
     3, "property callee", e[25], 106,
     3, "property", e[20], 106],
    [1, 96, 106],
    [1, 96, 118],
    [1, 5, 119],
    [1, 5, 120],
    ["]", 106],
    [3, "operator", ":", 121],
    [1, 5, 122],
    [1, 96, 106],
    ["(", 124],
    [1, 5, 125],
    [1, 96, 126,
     0, 126],
    [1, 5, 127],
    [")", -1],
    ["{", 129],
    [1, 5, 130],
    [2, 6, 131, {"name":"Statement"},
     "}", -1],
    [1, 5, 130],
    [3, "keyword", e[26], 133,
     3, "keyword", e[27], 148,
     0, -1],
    [1, 5, 134],
    ["(", 135],
    [1, 5, 136],
    [3, "keyword", e[13], 137,
     1, 215, 137,
     1, 262, 138],
    [1, 5, 136],
    [1, 5, 139],
    ["|", 140,
     3, "def", e[20], 141],
    [1, 5, 142],
    [1, 5, 143],
    [1, 262, 144],
    [")", 145],
    [1, 5, 139],
    [1, 5, 146],
    [2, 128, 147, {"name":"Block"}],
    [1, 5, 132],
    [1, 5, 149],
    [2, 128, -1, {"name":"Block"}],
    [1, 5, 151],
    [3, "keyword", e[28], 152,
     0, -1],
    [1, 5, 153],
    [2, 6, -1, {"name":"Statement"}],
    [2, 128, -1, {"name":"Block"},
     3, "keyword", e[29], 155,
     3, "keyword", e[30], 163,
     3, "keyword", e[31], 177,
     3, "keyword", e[32], 181,
     [5, 281], 188],
    [1, 5, 156],
    [3, "type def", e[20], 157],
    [1, 5, 158],
    [3, "keyword", e[33], 159,
     0, 160],
    [1, 5, 161],
    [1, 5, 162],
    [1, 291, 160],
    [2, 297, -1, {"name":"EnumBody"}],
    [1, 5, 164],
    [3, "type def", e[20], 165],
    [1, 5, 166],
    [2, 309, 167, {"name":"TypeParams"},
     0, 167],
    [1, 5, 168],
    [3, "keyword", e[34], 169,
     0, 170],
    [1, 5, 171],
    [1, 5, 172],
    [1, 262, 170],
    [3, "keyword", e[33], 173,
     0, 174],
    [1, 5, 175],
    [1, 5, 176],
    [1, 291, 174],
    [2, 314, -1, {"name":"ClassBody"}],
    [1, 5, 178],
    [3, "def", e[20], 179],
    [1, 5, 180],
    [2, 318, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 182],
    [e[20], 183],
    [1, 5, 184],
    [".", 185,
     ";", -1],
    [1, 5, 186],
    [e[20], 187],
    [1, 5, 184],
    [1, 262, 189,
     3, "keyword", e[35], 189],
    [1, 5, 190],
    [1, 322, 191],
    [1, 5, 192],
    [2, 327, -1, {"name":"FunctionDef"},
     3, "operator", "=", 193,
     0, 194],
    [1, 5, 195],
    [1, 5, 196],
    [1, 96, 194],
    [",", 197,
     ";", -1],
    [1, 5, 198],
    [1, 322, 199],
    [1, 5, 200],
    [3, "operator", "=", 201,
     0, 202],
    [1, 5, 203],
    [1, 5, 196],
    [1, 96, 202],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 205,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 206,
     3, "tag", e[38], 213,
     "{", 207],
    [e[36], 205,
     3, "def", e[37], 213,
     "<", 208,
     0, 213],
    [e[36], 206,
     3, "type", e[37], 213,
     0, 213],
    [3, "tag", e[38], 209],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 210],
    [/^[\t ]*/, 211],
    [">", 213],
    [1, 332, 212],
    ["}", 213],
    [e[39], 214,
     0, -1],
    [0, 213,
     0, 213],
    [3, "meta", [0, [6, 336], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 216],
    [1, 5, 217],
    ["(", 218,
     0, -1],
    [1, 5, 219],
    [1, 337, 220],
    [1, 5, 221],
    [")", -1],
    [3, "keyword", e[24], 223],
    [1, 5, 224],
    [2, 276, 225, {"name":"TypeArgs"},
     0, 225],
    [1, 5, 226],
    [1, 215, 227,
     1, 351, 228],
    [1, 5, 226],
    [1, 5, 229],
    [2, 276, 230, {"name":"TypeArgs"},
     1, 5, 231],
    [1, 5, 229],
    ["[", 232,
     2, 271, 233, {"name":"ArgList"},
     0, 233],
    [1, 5, 234],
    [1, 5, 235],
    [1, 96, 236,
     0, 236],
    [2, 314, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 237],
    ["]", 238],
    [1, 5, 239],
    [2, 249, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 359], 241,
     [5, 362], 242],
    [3, "def", e[20], 243,
     2, 365, 243, {"name":"ParamList"}],
    [2, 370, 244, {"name":"SimpleParamList"}],
    [1, 5, 245],
    [1, 5, 246],
    [3, "operator", "->", 247],
    [3, "operator", "->", 247],
    [1, 5, 248],
    [2, 128, -1, {"name":"Block"},
     1, 96, -1],
    ["{", 250],
    [1, 5, 251],
    [1, 375, 252],
    [1, 5, 253],
    ["}", -1],
    ["(", 255],
    [1, 5, 256],
    [1, 351, -1],
    ["(", 258],
    [1, 5, 259],
    [1, 96, 260,
     0, 260],
    [1, 5, 261],
    [")", -1],
    [1, 215, 263,
     1, 351, 264],
    [1, 5, 262],
    [1, 5, 265],
    ["[", 266,
     2, 276, 267, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 268],
    [1, 5, 265],
    [1, 96, 269,
     0, 269],
    [1, 5, 270],
    ["]", 267],
    ["(", 272],
    [1, 5, 273],
    [1, 375, 274],
    [1, 5, 275],
    [")", -1],
    ["<", 277],
    [1, 5, 278],
    [1, 381, 279],
    [1, 5, 280],
    [">", -1],
    [1, 215, 282,
     2, 309, 283, {"name":"TypeParams"},
     0, 283],
    [1, 5, 281],
    [1, 5, 284],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 285],
    [3, "type qualifier", e[43], 286,
     3, "type", e[41], -1],
    [1, 5, 287],
    [2, 276, 288, {"name":"TypeArgs"},
     0, 288],
    [1, 5, 289],
    [".", 290],
    [1, 5, 285],
    [1, 262, 292,
     0, -1],
    [1, 5, 293],
    [",", 294,
     0, -1],
    [1, 5, 295],
    [1, 262, 296,
     0, 296],
    [1, 5, 293],
    ["{", 298],
    [1, 5, 299],
    [2, 399, 300, {"name":"EnumConstant"}],
    [1, 5, 301],
    [/^\,?/, 302],
    [1, 5, 303],
    [0, 299,
     ";", 304,
     0, 307],
    [1, 5, 305],
    [2, 406, 306, {"name":"ClassItem"},
     0, 307],
    [1, 5, 305],
    [1, 5, 308],
    ["}", -1],
    ["<", 310],
    [1, 5, 311],
    [1, 413, 312],
    [1, 5, 313],
    [">", -1],
    ["{", 315],
    [1, 5, 316],
    [2, 406, 317, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 316],
    ["{", 319],
    [1, 5, 320],
    [2, 430, 321, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 320],
    [3, "def", e[20], 323],
    [1, 5, 324],
    ["[", 325,
     0, -1],
    [1, 5, 326],
    ["]", -1],
    [2, 365, 328, {"name":"ParamList"}],
    [1, 5, 329],
    [2, 449, 330, {"name":"ThrowsClause"},
     0, 330],
    [1, 5, 331],
    [";", -1,
     2, 128, -1, {"name":"Block"}],
    [3, "attribute", "{", 333,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 332,
     "\n", 334,
     0, -1],
    [1, 332, 335],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 332],
    [/^(?=\*\/)/, 332,
     3, "attribute", "}", 332],
    [3, "keyword", e[31], -1],
    [e[42], 338,
     0, 339,
     0, -1],
    [1, 5, 340],
    [1, 5, 341],
    ["=", 339],
    [1, 215, 342,
     2, 249, 342, {"name":"ArrayInitializer"},
     1, 96, 342],
    [1, 5, 343],
    [",", 344,
     0, -1],
    [1, 5, 345],
    [e[42], 346,
     0, 347,
     0, 348],
    [1, 5, 349],
    [1, 5, 350],
    [1, 5, 343],
    ["=", 347],
    [1, 215, 348,
     2, 249, 348, {"name":"ArrayInitializer"},
     1, 96, 348],
    [3, "type", e[40], -1,
     0, 352,
     3, "type", e[41], -1],
    [3, "type qualifier", e[43], 353],
    [1, 5, 354],
    [2, 276, 355, {"name":"TypeArgs"},
     0, 355],
    [1, 5, 356],
    [".", 357],
    [1, 5, 358],
    [0, 352,
     2, 455, -1, {"name":"qualifiedClassName","token":"qualified"}],
    [3, "def", e[20], 360,
     2, 365, 360, {"name":"ParamList"}],
    [1, 5, 361],
    [3, "operator", "->", -1],
    [2, 370, 363, {"name":"SimpleParamList"}],
    [1, 5, 364],
    [3, "operator", "->", -1],
    ["(", 366],
    [1, 5, 367],
    [1, 456, 368],
    [1, 5, 369],
    [")", -1],
    ["(", 371],
    [1, 5, 372],
    [1, 472, 373],
    [1, 5, 374],
    [")", -1],
    [2, 478, 376, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 377],
    [",", 378,
     0, -1],
    [1, 5, 379],
    [2, 478, 380, {"name":"ArgExpr"},
     0, 380],
    [1, 5, 377],
    [1, 262, 382,
     "?", 383,
     0, -1],
    [1, 5, 384],
    [1, 5, 385],
    [",", 386,
     0, -1],
    [3, "keyword", e[34], 387,
     3, "keyword", e[17], 387,
     0, 382],
    [1, 5, 388],
    [1, 5, 389],
    [1, 262, 390,
     "?", 391,
     0, 390],
    [1, 262, 382],
    [1, 5, 384],
    [1, 5, 392],
    [3, "keyword", e[34], 393,
     3, "keyword", e[17], 393,
     0, 390],
    [1, 5, 394],
    [1, 262, 390],
    [/^ */, 396],
    [2, 276, 397, {"name":"TypeArgs"},
     0, 398],
    [/^ */, 398],
    [/^\.(?!\.)/, -1],
    [1, 215, 400,
     0, 400],
    [1, 5, 401],
    [3, "def property", e[20], 402],
    [1, 5, 403],
    [2, 271, 404, {"name":"ArgList"},
     0, 404],
    [1, 5, 405],
    [2, 314, -1, {"name":"ClassBody"},
     0, -1],
    [2, 94, 407, {"name":"BeforeStatement"}],
    [1, 5, 408],
    [2, 309, 409, {"name":"TypeParams"},
     0, 409],
    [1, 5, 410],
    [3, "def property", e[25], 411,
     1, 479, -1],
    [1, 5, 412],
    [2, 327, -1, {"name":"FunctionDef"}],
    [1, 215, 414,
     3, "type def", e[20], 415,
     0, -1],
    [1, 5, 413],
    [1, 5, 416],
    [3, "keyword", e[34], 417,
     1, 5, 418],
    [1, 5, 419],
    [",", 420,
     0, -1],
    [1, 262, 421],
    [1, 5, 422],
    [1, 5, 416],
    [1, 215, 423,
     3, "type def", e[20], 424,
     0, 425],
    [1, 5, 422],
    [1, 5, 426],
    [1, 5, 418],
    [3, "keyword", e[34], 427,
     0, 425],
    [1, 5, 428],
    [1, 262, 429],
    [1, 5, 426],
    [2, 94, 431, {"name":"BeforeStatement"}],
    [1, 5, 432],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 433,
     "(", 434,
     1, 154, -1],
    [1, 5, 435],
    [1, 5, 436],
    ["[", 437,
     3, "operator", "=", 438],
    [")", 439],
    [1, 5, 440],
    [1, 5, 441],
    [1, 5, 442],
    ["]", 443],
    [1, 96, -1],
    ["[", 444,
     3, "keyword", e[10], 445,
     0, -1],
    [1, 5, 435],
    [1, 5, 446],
    [1, 5, 447],
    ["]", 448],
    [1, 96, -1],
    [1, 5, 442],
    [3, "keyword", e[44], 450],
    [1, 5, 451],
    [1, 291, -1],
    [e[20], 453],
    [1, 5, 454],
    ["=", -1],
    [3, "type", e[41], -1],
    [1, 215, 457,
     3, "keyword", e[13], 457,
     1, 215, 457,
     1, 262, 458,
     0, -1],
    [1, 5, 456],
    [1, 5, 459],
    [e[45], 460],
    [1, 5, 461],
    [3, "keyword", e[16], 462,
     1, 322, 462],
    [1, 5, 463],
    [",", 464,
     0, -1],
    [1, 5, 465],
    [1, 215, 466,
     3, "keyword", e[13], 466,
     1, 215, 466,
     1, 262, 467,
     0, 468],
    [1, 5, 465],
    [1, 5, 469],
    [1, 5, 463],
    [e[45], 470],
    [1, 5, 471],
    [3, "keyword", e[16], 468,
     1, 322, 468],
    [3, "def", e[20], 473,
     0, -1],
    [1, 5, 474],
    [",", 475,
     0, -1],
    [1, 5, 476],
    [3, "def", e[20], 477,
     0, 477],
    [1, 5, 474],
    [1, 96, -1],
    [2, 128, -1, {"name":"Block"},
     3, "keyword", e[29], 480,
     3, "keyword", e[30], 488,
     3, "keyword", e[31], 502,
     3, "keyword", e[32], 506,
     [5, 529], 513],
    [1, 5, 481],
    [3, "type def", e[20], 482],
    [1, 5, 483],
    [3, "keyword", e[33], 484,
     0, 485],
    [1, 5, 486],
    [1, 5, 487],
    [1, 291, 485],
    [2, 297, -1, {"name":"EnumBody"}],
    [1, 5, 489],
    [3, "type def", e[20], 490],
    [1, 5, 491],
    [2, 309, 492, {"name":"TypeParams"},
     0, 492],
    [1, 5, 493],
    [3, "keyword", e[34], 494,
     0, 495],
    [1, 5, 496],
    [1, 5, 497],
    [1, 262, 495],
    [3, "keyword", e[33], 498,
     0, 499],
    [1, 5, 500],
    [1, 5, 501],
    [1, 291, 499],
    [2, 314, -1, {"name":"ClassBody"}],
    [1, 5, 503],
    [3, "def", e[20], 504],
    [1, 5, 505],
    [2, 318, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 507],
    [e[20], 508],
    [1, 5, 509],
    [".", 510,
     ";", -1],
    [1, 5, 511],
    [e[20], 512],
    [1, 5, 509],
    [1, 262, 514,
     3, "keyword", e[35], 514],
    [1, 5, 515],
    [1, 539, 516],
    [1, 5, 517],
    [2, 327, -1, {"name":"FunctionDef"},
     3, "operator", "=", 518,
     0, 519],
    [1, 5, 520],
    [1, 5, 521],
    [1, 96, 519],
    [",", 522,
     ";", -1],
    [1, 5, 523],
    [1, 539, 524],
    [1, 5, 525],
    [3, "operator", "=", 526,
     0, 527],
    [1, 5, 528],
    [1, 5, 521],
    [1, 96, 527],
    [1, 215, 530,
     2, 309, 531, {"name":"TypeParams"},
     0, 531],
    [1, 5, 529],
    [1, 5, 532],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 533],
    [3, "type qualifier", e[43], 534,
     3, "type", e[41], -1],
    [1, 5, 535],
    [2, 276, 536, {"name":"TypeArgs"},
     0, 536],
    [1, 5, 537],
    [".", 538],
    [1, 5, 533],
    [3, "def property", e[20], 540],
    [1, 5, 541],
    ["[", 542,
     0, -1],
    [1, 5, 543],
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
