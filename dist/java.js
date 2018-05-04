(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 388], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     3, "keyword", e[38], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[42], -1,
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
    [e[37], 107,
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
     2, 226, 121, {"name":"NewExpr"},
     2, 246, 121, {"name":"Lambda"},
     3, "variable callee", e[22], 121,
     3, "variable", e[16], 121,
     [0, [5, 255], "("], 115,
     2, 260, 121, {"name":"ParenExpr"}],
    [1, 5, 113],
    [1, 5, 116],
    [1, 154, 117],
    [1, 5, 118],
    [")", 119],
    [1, 5, 120],
    [1, 113, 121],
    [1, 5, 122],
    [2, 265, 123, {"name":"ArgList"},
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
     2, 270, 123, {"name":"TypeArgs"},
     3, "property callee", e[41], 123,
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
    [2, 275, 148, {"name":"AnnotationHead","token":"meta"}],
    [1, 5, 149],
    ["(", 150,
     0, -1],
    [1, 5, 151],
    [1, 283, 152],
    [1, 5, 153],
    [")", -1],
    [1, 147, 155,
     3, "type", e[26], 158,
     0, 156,
     3, "type", e[27], 158],
    [1, 5, 154],
    [3, "type qualifier", e[39], 157],
    [0, 156,
     2, 297, 158, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 159],
    ["[", 160,
     2, 270, 161, {"name":"TypeArgs"},
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
     [5, 298], 203],
    [1, 5, 171],
    [3, "type def", e[16], 172],
    [1, 5, 173],
    [3, "keyword", e[33], 174,
     0, 175],
    [1, 5, 176],
    [1, 5, 177],
    [1, 304, 175],
    [2, 310, -1, {"name":"EnumBody"}],
    [1, 5, 179],
    [3, "type def", e[16], 180],
    [1, 5, 181],
    [2, 322, 182, {"name":"TypeParams"},
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
    [1, 304, 189],
    [2, 327, -1, {"name":"ClassBody"}],
    [1, 5, 193],
    [3, "def", e[16], 194],
    [1, 5, 195],
    [2, 331, -1, {"name":"AnnotationTypeBody"}],
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
    [1, 335, 206],
    [1, 5, 207],
    [2, 340, -1, {"name":"FunctionDef"},
     3, "operator", "=", 208,
     0, 209],
    [1, 5, 210],
    [1, 5, 211],
    [1, 113, 209],
    [",", 212,
     ";", -1],
    [1, 5, 213],
    [1, 335, 214],
    [1, 5, 215],
    [3, "operator", "=", 216,
     0, 217],
    [1, 5, 218],
    [1, 5, 211],
    [1, 113, 217],
    [3, "tag", /^\@(?:param|throws|exception)(?![a-zA-Z¡-￿_])/, 220,
     3, "tag", e[36], 224,
     "{", 221],
    [e[35], 220,
     3, "def", /^[a-zA-Z¡-￿_\.]+/, 224,
     0, 224],
    [3, "tag", e[36], 222],
    [e[35], 222,
     2, 345, 223, {"name":"doccomment.tagContent","token":"attribute"}],
    ["}", 224],
    [e[37], 225,
     0, -1],
    [0, 224,
     0, 224],
    [3, "keyword", e[38], 227],
    [1, 5, 228],
    [2, 270, 229, {"name":"TypeArgs"},
     0, 229],
    [1, 5, 230],
    [1, 147, 231,
     3, "type", e[26], 232,
     0, 233,
     3, "type", e[27], 232],
    [1, 5, 230],
    [1, 5, 234],
    [3, "type qualifier", e[39], 235],
    [2, 270, 236, {"name":"TypeArgs"},
     1, 5, 237],
    [0, 233,
     2, 297, 232, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 234],
    ["[", 238,
     2, 265, 239, {"name":"ArgList"},
     0, 239],
    [1, 5, 240],
    [1, 5, 241],
    [1, 113, 242,
     0, 242],
    [2, 327, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 243],
    ["]", 244],
    [1, 5, 245],
    [2, 346, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 351], 247,
     [5, 354], 248],
    [3, "def", e[16], 249,
     2, 357, 249, {"name":"ParamList"}],
    [2, 362, 250, {"name":"SimpleParamList"}],
    [1, 5, 251],
    [1, 5, 252],
    [3, "operator", "->", 253],
    [3, "operator", "->", 253],
    [1, 5, 254],
    [2, 143, -1, {"name":"Block"},
     1, 113, -1],
    ["(", 256],
    [1, 5, 257],
    [3, "type", e[26], -1,
     0, 258,
     3, "type", e[27], -1],
    [3, "type qualifier", e[39], 259],
    [0, 258,
     2, 297, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 261],
    [1, 5, 262],
    [1, 113, 263,
     0, 263],
    [1, 5, 264],
    [")", -1],
    ["(", 266],
    [1, 5, 267],
    [1, 367, 268],
    [1, 5, 269],
    [")", -1],
    ["<", 271],
    [1, 5, 272],
    [1, 373, 273],
    [1, 5, 274],
    [">", -1],
    [[0, [6, 387], "@"], 276],
    [1, 5, 277],
    [e[16], 278],
    [1, 5, 279],
    [".", 280,
     0, -1],
    [1, 5, 281],
    [e[16], 282],
    [1, 5, 279],
    [e[40], 284,
     0, 285,
     0, -1],
    [1, 5, 286],
    [1, 5, 287],
    ["=", 285],
    [1, 147, 288,
     1, 113, 288],
    [1, 5, 289],
    [",", 290,
     0, -1],
    [1, 5, 291],
    [e[40], 292,
     0, 293],
    [1, 5, 294],
    [1, 5, 295],
    ["=", 293],
    [1, 147, 296,
     1, 113, 296],
    [1, 5, 289],
    [3, "type", e[27], -1],
    [1, 147, 299,
     2, 322, 300, {"name":"TypeParams"},
     0, 300],
    [1, 5, 298],
    [1, 5, 301],
    [3, "type", e[26], -1,
     0, 302],
    [3, "type qualifier", e[39], 303,
     3, "type", e[27], -1],
    [1, 5, 302],
    [1, 154, 305,
     0, -1],
    [1, 5, 306],
    [",", 307,
     0, -1],
    [1, 5, 308],
    [1, 154, 309],
    [1, 5, 306],
    ["{", 311],
    [1, 5, 312],
    [2, 391, 313, {"name":"EnumConstant"}],
    [1, 5, 314],
    [/^\,?/, 315],
    [1, 5, 316],
    [0, 312,
     ";", 317,
     0, 320],
    [1, 5, 318],
    [2, 398, 319, {"name":"ClassItem"},
     0, 320],
    [1, 5, 318],
    [1, 5, 321],
    ["}", -1],
    ["<", 323],
    [1, 5, 324],
    [1, 405, 325],
    [1, 5, 326],
    [">", -1],
    ["{", 328],
    [1, 5, 329],
    [2, 398, 330, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 329],
    ["{", 332],
    [1, 5, 333],
    [2, 421, 334, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 333],
    [3, "def", e[16], 336],
    [1, 5, 337],
    ["[", 338,
     0, -1],
    [1, 5, 339],
    ["]", -1],
    [2, 357, 341, {"name":"ParamList"}],
    [1, 5, 342],
    [2, 440, 343, {"name":"ThrowsClause"},
     0, 343],
    [1, 5, 344],
    [";", -1,
     2, 143, -1, {"name":"Block"}],
    [1, 443, -1],
    ["{", 347],
    [1, 5, 348],
    [1, 367, 349],
    [1, 5, 350],
    ["}", -1],
    [3, "def", e[16], 352,
     2, 357, 352, {"name":"ParamList"}],
    [1, 5, 353],
    [3, "operator", "->", -1],
    [2, 362, 355, {"name":"SimpleParamList"}],
    [1, 5, 356],
    [3, "operator", "->", -1],
    ["(", 358],
    [1, 5, 359],
    [1, 447, 360],
    [1, 5, 361],
    [")", -1],
    ["(", 363],
    [1, 5, 364],
    [1, 463, 365],
    [1, 5, 366],
    [")", -1],
    [2, 469, 368, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 369],
    [",", 370,
     0, -1],
    [1, 5, 371],
    [2, 469, 372, {"name":"ArgExpr"}],
    [1, 5, 369],
    [1, 154, 374,
     "?", 375,
     0, -1],
    [1, 5, 376],
    [1, 5, 377],
    [",", 378,
     0, -1],
    [3, "keyword", e[34], 379,
     3, "keyword", e[20], 379,
     0, 374],
    [1, 5, 380],
    [1, 5, 381],
    [1, 154, 382,
     "?", 383],
    [1, 154, 374],
    [1, 5, 376],
    [1, 5, 384],
    [3, "keyword", e[34], 385,
     3, "keyword", e[20], 385,
     0, 382],
    [1, 5, 386],
    [1, 154, 382],
    [3, "keyword", e[31], -1],
    [e[16], 389],
    [1, 5, 390],
    ["=", -1],
    [1, 147, 392,
     0, 392],
    [1, 5, 393],
    [3, "def property", e[16], 394],
    [1, 5, 395],
    [2, 265, 396, {"name":"ArgList"},
     0, 396],
    [1, 5, 397],
    [2, 327, -1, {"name":"ClassBody"},
     0, -1],
    [2, 111, 399, {"name":"BeforeStatement"}],
    [1, 5, 400],
    [2, 322, 401, {"name":"TypeParams"},
     0, 401],
    [1, 5, 402],
    [3, "def property", e[41], 403,
     1, 470, -1],
    [1, 5, 404],
    [2, 340, -1, {"name":"FunctionDef"}],
    [1, 147, 406,
     3, "type def", e[16], 407,
     0, -1],
    [1, 5, 405],
    [1, 5, 408],
    [3, "keyword", e[34], 409,
     1, 5, 410],
    [1, 5, 411],
    [",", 412,
     0, -1],
    [1, 154, 413],
    [1, 5, 414],
    [1, 5, 408],
    [1, 147, 415,
     3, "type def", e[16], 416],
    [1, 5, 414],
    [1, 5, 417],
    [3, "keyword", e[34], 418,
     1, 5, 410],
    [1, 5, 419],
    [1, 154, 420],
    [1, 5, 417],
    [2, 111, 422, {"name":"BeforeStatement"}],
    [1, 5, 423],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 424,
     "(", 425,
     1, 169, -1],
    [1, 5, 426],
    [1, 5, 427],
    ["[", 428,
     3, "operator", "=", 429],
    [")", 430],
    [1, 5, 431],
    [1, 5, 432],
    [1, 5, 433],
    ["]", 434],
    [1, 113, -1],
    ["[", 435,
     3, "keyword", e[10], 436,
     0, -1],
    [1, 5, 426],
    [1, 5, 437],
    [1, 5, 438],
    ["]", 439],
    [1, 113, -1],
    [1, 5, 433],
    [3, "keyword", e[42], 441],
    [1, 5, 442],
    [1, 304, -1],
    [/^(?!\}|\*\/)/, 444,
     0, -1],
    ["{", 445,
     /^[^]/, 443],
    [1, 443, 446],
    [/^\}?/, 443],
    [1, 147, 448,
     3, "keyword", e[15], 448,
     1, 147, 448,
     1, 154, 449,
     0, -1],
    [1, 5, 447],
    [1, 5, 450],
    [e[43], 451],
    [1, 5, 452],
    [3, "keyword", e[19], 453,
     1, 335, 453],
    [1, 5, 454],
    [",", 455,
     0, -1],
    [1, 5, 456],
    [1, 147, 457,
     3, "keyword", e[15], 457,
     1, 147, 457,
     1, 154, 458],
    [1, 5, 456],
    [1, 5, 459],
    [e[43], 460],
    [1, 5, 461],
    [3, "keyword", e[19], 462,
     1, 335, 462],
    [1, 5, 454],
    [3, "def", e[16], 464,
     0, -1],
    [1, 5, 465],
    [",", 466,
     0, -1],
    [1, 5, 467],
    [3, "def", e[16], 468],
    [1, 5, 465],
    [1, 113, -1],
    [2, 143, -1, {"name":"Block"},
     3, "keyword", e[29], 471,
     3, "keyword", e[30], 479,
     3, "keyword", e[31], 493,
     3, "keyword", e[32], 497,
     [5, 520], 504],
    [1, 5, 472],
    [3, "type def", e[16], 473],
    [1, 5, 474],
    [3, "keyword", e[33], 475,
     0, 476],
    [1, 5, 477],
    [1, 5, 478],
    [1, 304, 476],
    [2, 310, -1, {"name":"EnumBody"}],
    [1, 5, 480],
    [3, "type def", e[16], 481],
    [1, 5, 482],
    [2, 322, 483, {"name":"TypeParams"},
     0, 483],
    [1, 5, 484],
    [3, "keyword", e[34], 485,
     0, 486],
    [1, 5, 487],
    [1, 5, 488],
    [1, 154, 486],
    [3, "keyword", e[33], 489,
     0, 490],
    [1, 5, 491],
    [1, 5, 492],
    [1, 304, 490],
    [2, 327, -1, {"name":"ClassBody"}],
    [1, 5, 494],
    [3, "def", e[16], 495],
    [1, 5, 496],
    [2, 331, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 498],
    [e[16], 499],
    [1, 5, 500],
    [".", 501,
     ";", -1],
    [1, 5, 502],
    [e[16], 503],
    [1, 5, 500],
    [1, 154, 505],
    [1, 5, 506],
    [1, 526, 507],
    [1, 5, 508],
    [2, 340, -1, {"name":"FunctionDef"},
     3, "operator", "=", 509,
     0, 510],
    [1, 5, 511],
    [1, 5, 512],
    [1, 113, 510],
    [",", 513,
     ";", -1],
    [1, 5, 514],
    [1, 526, 515],
    [1, 5, 516],
    [3, "operator", "=", 517,
     0, 518],
    [1, 5, 519],
    [1, 5, 512],
    [1, 113, 518],
    [1, 147, 521,
     2, 322, 522, {"name":"TypeParams"},
     0, 522],
    [1, 5, 520],
    [1, 5, 523],
    [3, "type", e[26], -1,
     0, 524],
    [3, "type qualifier", e[39], 525,
     3, "type", e[27], -1],
    [1, 5, 524],
    [3, "def property", e[16], 527],
    [1, 5, 528],
    ["[", 529,
     0, -1],
    [1, 5, 530],
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
