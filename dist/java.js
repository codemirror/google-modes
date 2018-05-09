(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 389], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     3, "keyword", e[39], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[43], -1,
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
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 110]], 83,
     3, "keyword", e[12], 87,
     ";", -1,
     2, 111, 94, {"name":"BeforeStatement"},
     1, 113, 96],
    [1, 5, 8],
    ["(", 9],
    [1, 5, 10],
    [2, 6, 11, {"name":"Statement"}],
    [1, 5, 12],
    [1, 113, 13,
     0, 13],
    [1, 5, 14],
    [";", 15],
    [1, 5, 16],
    [1, 113, 17,
     0, 17],
    [1, 5, 18],
    [")", 19],
    [1, 5, 20],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 22],
    [2, 138, 23, {"name":"CondExpr"}],
    [1, 5, 24],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 26],
    [2, 143, 27, {"name":"Block"}],
    [1, 5, 28],
    [3, "keyword", e[13], 29,
     3, "keyword", e[14], 30,
     0, -1],
    [1, 5, 31],
    [1, 5, 32],
    ["(", 33],
    [2, 143, -1, {"name":"Block"}],
    [1, 5, 34],
    [3, "keyword", e[15], 35,
     1, 147, 35,
     1, 154, 36],
    [1, 5, 34],
    [1, 5, 37],
    ["|", 38,
     3, "def", e[16], 39],
    [1, 5, 40],
    [1, 5, 41],
    [1, 154, 42],
    [")", 43],
    [1, 5, 37],
    [1, 5, 44],
    [2, 143, 45, {"name":"Block"}],
    [1, 5, 28],
    [1, 5, 47],
    [2, 6, 48, {"name":"Statement"}],
    [1, 5, 49],
    [3, "keyword", e[1], 50],
    [1, 5, 51],
    [2, 138, 52, {"name":"CondExpr"}],
    [1, 5, 53],
    [";", -1],
    [1, 5, 55],
    [2, 138, 56, {"name":"CondExpr"}],
    [1, 5, 57],
    [2, 6, 58, {"name":"Statement"}],
    [2, 165, -1, {"name":"Alternative"}],
    [1, 5, 60],
    [2, 138, 61, {"name":"CondExpr"}],
    [1, 5, 62],
    [2, 143, -1, {"name":"Block"}],
    [1, 5, 64],
    [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 65],
    [1, 5, 66],
    [";", -1],
    [1, 5, 68],
    [1, 113, 69],
    [1, 5, 70],
    [":", 71,
     0, 72],
    [1, 5, 73],
    [1, 5, 74],
    [1, 113, 72],
    [";", -1],
    [1, 5, 76],
    [1, 113, 77,
     0, 77],
    [1, 5, 78],
    [";", -1],
    [1, 5, 80],
    [1, 113, 81],
    [1, 5, 82],
    [";", -1],
    [1, 5, 85],
    [1, 5, 86],
    [":", -1],
    [1, 113, 83],
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
    [1, 169, -1],
    [1, 5, 97],
    [",", 98,
     1, 5, 99],
    [1, 5, 100],
    [";", -1],
    [1, 113, 101],
    [1, 5, 97],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 103],
    ["\\", 104,
     /^(?!\")./, 103,
     "\"", -1],
    [/^[^]/, 103],
    [/^\/\*\*(?!\/)/, 106,
     "/*", 109,
     /^\/\/.*/, -1],
    [e[38], 107,
     0, 108],
    [0, 106,
     0, 106],
    [2, 219, 108, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 109,
     "*/", -1],
    [e[35], 110,
     /^\:(?!\:)/, -1],
    [3, "keyword", e[15], 112,
     1, 147, 112,
     0, -1],
    [1, 5, 111],
    [3, "operator", e[17], 114,
     3, "atom", e[18], 121,
     3, "keyword", e[19], 121,
     3, "keyword", e[20], 121,
     3, "number", e[21], 121,
     2, 102, 121, {"name":"string","token":"string"},
     2, 227, 121, {"name":"NewExpr"},
     2, 247, 121, {"name":"Lambda"},
     3, "variable callee", e[22], 121,
     3, "variable", e[16], 121,
     [0, [5, 256], "("], 115,
     2, 261, 121, {"name":"ParenExpr"}],
    [1, 5, 113],
    [1, 5, 116],
    [1, 154, 117],
    [1, 5, 118],
    [")", 119],
    [1, 5, 120],
    [1, 113, 121],
    [1, 5, 122],
    [2, 266, 123, {"name":"ArgList"},
     "[", 124,
     ".", 125,
     3, "operator", e[23], 123,
     3, "operator", e[24], 126,
     3, "keyword", e[25], 126,
     3, "operator", "?", 127,
     0, -1],
    [1, 5, 122],
    [1, 5, 128],
    [1, 5, 129],
    [1, 5, 130],
    [1, 5, 131],
    [1, 113, 132],
    [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 123,
     2, 271, 123, {"name":"TypeArgs"},
     3, "property callee", e[42], 123,
     3, "property", e[16], 123],
    [1, 113, 123],
    [1, 113, 133],
    [1, 5, 134],
    [1, 5, 135],
    ["]", 123],
    [3, "operator", ":", 136],
    [1, 5, 137],
    [1, 113, 123],
    ["(", 139],
    [1, 5, 140],
    [1, 113, 141,
     0, 141],
    [1, 5, 142],
    [")", -1],
    ["{", 144],
    [1, 5, 145],
    [2, 6, 146, {"name":"Statement"},
     "}", -1],
    [1, 5, 145],
    [2, 276, 148, {"name":"AnnotationHead","token":"meta"}],
    [1, 5, 149],
    ["(", 150,
     0, -1],
    [1, 5, 151],
    [1, 284, 152],
    [1, 5, 153],
    [")", -1],
    [1, 147, 155,
     3, "type", e[26], 158,
     0, 156,
     3, "type", e[27], 158],
    [1, 5, 154],
    [3, "type qualifier", e[40], 157],
    [0, 156,
     2, 298, 158, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 159],
    ["[", 160,
     2, 271, 161, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 162],
    [1, 5, 159],
    [1, 113, 163,
     0, 163],
    [1, 5, 164],
    ["]", 161],
    [1, 5, 166],
    [3, "keyword", e[28], 167,
     0, -1],
    [1, 5, 168],
    [2, 6, -1, {"name":"Statement"}],
    [2, 143, -1, {"name":"Block"},
     3, "keyword", e[29], 170,
     3, "keyword", e[30], 178,
     3, "keyword", e[31], 192,
     3, "keyword", e[32], 196,
     [5, 299], 203],
    [1, 5, 171],
    [3, "type def", e[16], 172],
    [1, 5, 173],
    [3, "keyword", e[33], 174,
     0, 175],
    [1, 5, 176],
    [1, 5, 177],
    [1, 305, 175],
    [2, 311, -1, {"name":"EnumBody"}],
    [1, 5, 179],
    [3, "type def", e[16], 180],
    [1, 5, 181],
    [2, 323, 182, {"name":"TypeParams"},
     0, 182],
    [1, 5, 183],
    [3, "keyword", e[34], 184,
     0, 185],
    [1, 5, 186],
    [1, 5, 187],
    [1, 154, 185],
    [3, "keyword", e[33], 188,
     0, 189],
    [1, 5, 190],
    [1, 5, 191],
    [1, 305, 189],
    [2, 328, -1, {"name":"ClassBody"}],
    [1, 5, 193],
    [3, "def", e[16], 194],
    [1, 5, 195],
    [2, 332, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 197],
    [e[16], 198],
    [1, 5, 199],
    [".", 200,
     ";", -1],
    [1, 5, 201],
    [e[16], 202],
    [1, 5, 199],
    [1, 154, 204],
    [1, 5, 205],
    [1, 336, 206],
    [1, 5, 207],
    [2, 341, -1, {"name":"FunctionDef"},
     3, "operator", "=", 208,
     0, 209],
    [1, 5, 210],
    [1, 5, 211],
    [1, 113, 209],
    [",", 212,
     ";", -1],
    [1, 5, 213],
    [1, 336, 214],
    [1, 5, 215],
    [3, "operator", "=", 216,
     0, 217],
    [1, 5, 218],
    [1, 5, 211],
    [1, 113, 217],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 220,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 221,
     3, "tag", e[37], 225,
     "{", 222],
    [e[35], 220,
     3, "def", e[36], 225,
     0, 225],
    [e[35], 221,
     3, "type", e[36], 225,
     0, 225],
    [3, "tag", e[37], 223],
    [e[35], 223,
     2, 346, 224, {"name":"doccomment.tagContent","token":"attribute"}],
    ["}", 225],
    [e[38], 226,
     0, -1],
    [0, 225,
     0, 225],
    [3, "keyword", e[39], 228],
    [1, 5, 229],
    [2, 271, 230, {"name":"TypeArgs"},
     0, 230],
    [1, 5, 231],
    [1, 147, 232,
     3, "type", e[26], 233,
     0, 234,
     3, "type", e[27], 233],
    [1, 5, 231],
    [1, 5, 235],
    [3, "type qualifier", e[40], 236],
    [2, 271, 237, {"name":"TypeArgs"},
     1, 5, 238],
    [0, 234,
     2, 298, 233, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 235],
    ["[", 239,
     2, 266, 240, {"name":"ArgList"},
     0, 240],
    [1, 5, 241],
    [1, 5, 242],
    [1, 113, 243,
     0, 243],
    [2, 328, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 244],
    ["]", 245],
    [1, 5, 246],
    [2, 347, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 352], 248,
     [5, 355], 249],
    [3, "def", e[16], 250,
     2, 358, 250, {"name":"ParamList"}],
    [2, 363, 251, {"name":"SimpleParamList"}],
    [1, 5, 252],
    [1, 5, 253],
    [3, "operator", "->", 254],
    [3, "operator", "->", 254],
    [1, 5, 255],
    [2, 143, -1, {"name":"Block"},
     1, 113, -1],
    ["(", 257],
    [1, 5, 258],
    [3, "type", e[26], -1,
     0, 259,
     3, "type", e[27], -1],
    [3, "type qualifier", e[40], 260],
    [0, 259,
     2, 298, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 262],
    [1, 5, 263],
    [1, 113, 264,
     0, 264],
    [1, 5, 265],
    [")", -1],
    ["(", 267],
    [1, 5, 268],
    [1, 368, 269],
    [1, 5, 270],
    [")", -1],
    ["<", 272],
    [1, 5, 273],
    [1, 374, 274],
    [1, 5, 275],
    [">", -1],
    [[0, [6, 388], "@"], 277],
    [1, 5, 278],
    [e[16], 279],
    [1, 5, 280],
    [".", 281,
     0, -1],
    [1, 5, 282],
    [e[16], 283],
    [1, 5, 280],
    [e[41], 285,
     0, 286,
     0, -1],
    [1, 5, 287],
    [1, 5, 288],
    ["=", 286],
    [1, 147, 289,
     1, 113, 289],
    [1, 5, 290],
    [",", 291,
     0, -1],
    [1, 5, 292],
    [e[41], 293,
     0, 294],
    [1, 5, 295],
    [1, 5, 296],
    ["=", 294],
    [1, 147, 297,
     1, 113, 297],
    [1, 5, 290],
    [3, "type", e[27], -1],
    [1, 147, 300,
     2, 323, 301, {"name":"TypeParams"},
     0, 301],
    [1, 5, 299],
    [1, 5, 302],
    [3, "type", e[26], -1,
     0, 303],
    [3, "type qualifier", e[40], 304,
     3, "type", e[27], -1],
    [1, 5, 303],
    [1, 154, 306,
     0, -1],
    [1, 5, 307],
    [",", 308,
     0, -1],
    [1, 5, 309],
    [1, 154, 310],
    [1, 5, 307],
    ["{", 312],
    [1, 5, 313],
    [2, 392, 314, {"name":"EnumConstant"}],
    [1, 5, 315],
    [/^\,?/, 316],
    [1, 5, 317],
    [0, 313,
     ";", 318,
     0, 321],
    [1, 5, 319],
    [2, 399, 320, {"name":"ClassItem"},
     0, 321],
    [1, 5, 319],
    [1, 5, 322],
    ["}", -1],
    ["<", 324],
    [1, 5, 325],
    [1, 406, 326],
    [1, 5, 327],
    [">", -1],
    ["{", 329],
    [1, 5, 330],
    [2, 399, 331, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 330],
    ["{", 333],
    [1, 5, 334],
    [2, 422, 335, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 334],
    [3, "def", e[16], 337],
    [1, 5, 338],
    ["[", 339,
     0, -1],
    [1, 5, 340],
    ["]", -1],
    [2, 358, 342, {"name":"ParamList"}],
    [1, 5, 343],
    [2, 441, 344, {"name":"ThrowsClause"},
     0, 344],
    [1, 5, 345],
    [";", -1,
     2, 143, -1, {"name":"Block"}],
    [1, 444, -1],
    ["{", 348],
    [1, 5, 349],
    [1, 368, 350],
    [1, 5, 351],
    ["}", -1],
    [3, "def", e[16], 353,
     2, 358, 353, {"name":"ParamList"}],
    [1, 5, 354],
    [3, "operator", "->", -1],
    [2, 363, 356, {"name":"SimpleParamList"}],
    [1, 5, 357],
    [3, "operator", "->", -1],
    ["(", 359],
    [1, 5, 360],
    [1, 448, 361],
    [1, 5, 362],
    [")", -1],
    ["(", 364],
    [1, 5, 365],
    [1, 464, 366],
    [1, 5, 367],
    [")", -1],
    [2, 470, 369, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 370],
    [",", 371,
     0, -1],
    [1, 5, 372],
    [2, 470, 373, {"name":"ArgExpr"}],
    [1, 5, 370],
    [1, 154, 375,
     "?", 376,
     0, -1],
    [1, 5, 377],
    [1, 5, 378],
    [",", 379,
     0, -1],
    [3, "keyword", e[34], 380,
     3, "keyword", e[20], 380,
     0, 375],
    [1, 5, 381],
    [1, 5, 382],
    [1, 154, 383,
     "?", 384],
    [1, 154, 375],
    [1, 5, 377],
    [1, 5, 385],
    [3, "keyword", e[34], 386,
     3, "keyword", e[20], 386,
     0, 383],
    [1, 5, 387],
    [1, 154, 383],
    [3, "keyword", e[31], -1],
    [e[16], 390],
    [1, 5, 391],
    ["=", -1],
    [1, 147, 393,
     0, 393],
    [1, 5, 394],
    [3, "def property", e[16], 395],
    [1, 5, 396],
    [2, 266, 397, {"name":"ArgList"},
     0, 397],
    [1, 5, 398],
    [2, 328, -1, {"name":"ClassBody"},
     0, -1],
    [2, 111, 400, {"name":"BeforeStatement"}],
    [1, 5, 401],
    [2, 323, 402, {"name":"TypeParams"},
     0, 402],
    [1, 5, 403],
    [3, "def property", e[42], 404,
     1, 471, -1],
    [1, 5, 405],
    [2, 341, -1, {"name":"FunctionDef"}],
    [1, 147, 407,
     3, "type def", e[16], 408,
     0, -1],
    [1, 5, 406],
    [1, 5, 409],
    [3, "keyword", e[34], 410,
     1, 5, 411],
    [1, 5, 412],
    [",", 413,
     0, -1],
    [1, 154, 414],
    [1, 5, 415],
    [1, 5, 409],
    [1, 147, 416,
     3, "type def", e[16], 417],
    [1, 5, 415],
    [1, 5, 418],
    [3, "keyword", e[34], 419,
     1, 5, 411],
    [1, 5, 420],
    [1, 154, 421],
    [1, 5, 418],
    [2, 111, 423, {"name":"BeforeStatement"}],
    [1, 5, 424],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 425,
     "(", 426,
     1, 169, -1],
    [1, 5, 427],
    [1, 5, 428],
    ["[", 429,
     3, "operator", "=", 430],
    [")", 431],
    [1, 5, 432],
    [1, 5, 433],
    [1, 5, 434],
    ["]", 435],
    [1, 113, -1],
    ["[", 436,
     3, "keyword", e[10], 437,
     0, -1],
    [1, 5, 427],
    [1, 5, 438],
    [1, 5, 439],
    ["]", 440],
    [1, 113, -1],
    [1, 5, 434],
    [3, "keyword", e[43], 442],
    [1, 5, 443],
    [1, 305, -1],
    [/^(?!\}|\*\/)/, 445,
     0, -1],
    ["{", 446,
     /^[^]/, 444],
    [1, 444, 447],
    [/^\}?/, 444],
    [1, 147, 449,
     3, "keyword", e[15], 449,
     1, 147, 449,
     1, 154, 450,
     0, -1],
    [1, 5, 448],
    [1, 5, 451],
    [e[44], 452],
    [1, 5, 453],
    [3, "keyword", e[19], 454,
     1, 336, 454],
    [1, 5, 455],
    [",", 456,
     0, -1],
    [1, 5, 457],
    [1, 147, 458,
     3, "keyword", e[15], 458,
     1, 147, 458,
     1, 154, 459],
    [1, 5, 457],
    [1, 5, 460],
    [e[44], 461],
    [1, 5, 462],
    [3, "keyword", e[19], 463,
     1, 336, 463],
    [1, 5, 455],
    [3, "def", e[16], 465,
     0, -1],
    [1, 5, 466],
    [",", 467,
     0, -1],
    [1, 5, 468],
    [3, "def", e[16], 469],
    [1, 5, 466],
    [1, 113, -1],
    [2, 143, -1, {"name":"Block"},
     3, "keyword", e[29], 472,
     3, "keyword", e[30], 480,
     3, "keyword", e[31], 494,
     3, "keyword", e[32], 498,
     [5, 521], 505],
    [1, 5, 473],
    [3, "type def", e[16], 474],
    [1, 5, 475],
    [3, "keyword", e[33], 476,
     0, 477],
    [1, 5, 478],
    [1, 5, 479],
    [1, 305, 477],
    [2, 311, -1, {"name":"EnumBody"}],
    [1, 5, 481],
    [3, "type def", e[16], 482],
    [1, 5, 483],
    [2, 323, 484, {"name":"TypeParams"},
     0, 484],
    [1, 5, 485],
    [3, "keyword", e[34], 486,
     0, 487],
    [1, 5, 488],
    [1, 5, 489],
    [1, 154, 487],
    [3, "keyword", e[33], 490,
     0, 491],
    [1, 5, 492],
    [1, 5, 493],
    [1, 305, 491],
    [2, 328, -1, {"name":"ClassBody"}],
    [1, 5, 495],
    [3, "def", e[16], 496],
    [1, 5, 497],
    [2, 332, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 499],
    [e[16], 500],
    [1, 5, 501],
    [".", 502,
     ";", -1],
    [1, 5, 503],
    [e[16], 504],
    [1, 5, 501],
    [1, 154, 506],
    [1, 5, 507],
    [1, 527, 508],
    [1, 5, 509],
    [2, 341, -1, {"name":"FunctionDef"},
     3, "operator", "=", 510,
     0, 511],
    [1, 5, 512],
    [1, 5, 513],
    [1, 113, 511],
    [",", 514,
     ";", -1],
    [1, 5, 515],
    [1, 527, 516],
    [1, 5, 517],
    [3, "operator", "=", 518,
     0, 519],
    [1, 5, 520],
    [1, 5, 513],
    [1, 113, 519],
    [1, 147, 522,
     2, 323, 523, {"name":"TypeParams"},
     0, 523],
    [1, 5, 521],
    [1, 5, 524],
    [3, "type", e[26], -1,
     0, 525],
    [3, "type qualifier", e[40], 526,
     3, "type", e[27], -1],
    [1, 5, 525],
    [3, "def property", e[16], 528],
    [1, 5, 529],
    ["[", 530,
     0, -1],
    [1, 5, 531],
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
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
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
               cx.name == "AnnotationTypeItem" | cx.name == "ArgExpr") {
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
