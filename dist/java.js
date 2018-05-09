(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 391], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     2, 229, 121, {"name":"NewExpr"},
     2, 249, 121, {"name":"Lambda"},
     3, "variable callee", e[22], 121,
     3, "variable", e[16], 121,
     [0, [5, 258], "("], 115,
     2, 263, 121, {"name":"ParenExpr"}],
    [1, 5, 113],
    [1, 5, 116],
    [1, 154, 117],
    [1, 5, 118],
    [")", 119],
    [1, 5, 120],
    [1, 113, 121],
    [1, 5, 122],
    [2, 268, 123, {"name":"ArgList"},
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
     2, 273, 123, {"name":"TypeArgs"},
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
    [2, 278, 148, {"name":"AnnotationHead","token":"meta"}],
    [1, 5, 149],
    ["(", 150,
     0, -1],
    [1, 5, 151],
    [1, 286, 152],
    [1, 5, 153],
    [")", -1],
    [1, 147, 155,
     3, "type", e[26], 158,
     0, 156,
     3, "type", e[27], 158],
    [1, 5, 154],
    [3, "type qualifier", e[40], 157],
    [0, 156,
     2, 300, 158, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 159],
    ["[", 160,
     2, 273, 161, {"name":"TypeArgs"},
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
     [5, 301], 203],
    [1, 5, 171],
    [3, "type def", e[16], 172],
    [1, 5, 173],
    [3, "keyword", e[33], 174,
     0, 175],
    [1, 5, 176],
    [1, 5, 177],
    [1, 307, 175],
    [2, 313, -1, {"name":"EnumBody"}],
    [1, 5, 179],
    [3, "type def", e[16], 180],
    [1, 5, 181],
    [2, 325, 182, {"name":"TypeParams"},
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
    [1, 307, 189],
    [2, 330, -1, {"name":"ClassBody"}],
    [1, 5, 193],
    [3, "def", e[16], 194],
    [1, 5, 195],
    [2, 334, -1, {"name":"AnnotationTypeBody"}],
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
    [1, 338, 206],
    [1, 5, 207],
    [2, 343, -1, {"name":"FunctionDef"},
     3, "operator", "=", 208,
     0, 209],
    [1, 5, 210],
    [1, 5, 211],
    [1, 113, 209],
    [",", 212,
     ";", -1],
    [1, 5, 213],
    [1, 338, 214],
    [1, 5, 215],
    [3, "operator", "=", 216,
     0, 217],
    [1, 5, 218],
    [1, 5, 211],
    [1, 113, 217],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 220,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 221,
     3, "tag", e[37], 227,
     "{", 222],
    [e[35], 220,
     3, "def", e[36], 227,
     "<", 223,
     0, 227],
    [e[35], 221,
     3, "type", e[36], 227,
     0, 227],
    [3, "tag", e[37], 224],
    [3, "type def", /^[a-zA-Z¡-￿_]+/, 225],
    [e[35], 224,
     2, 348, 226, {"name":"doccomment.tagContent","token":"attribute"}],
    [">", 227],
    ["}", 227],
    [e[38], 228,
     0, -1],
    [0, 227,
     0, 227],
    [3, "keyword", e[39], 230],
    [1, 5, 231],
    [2, 273, 232, {"name":"TypeArgs"},
     0, 232],
    [1, 5, 233],
    [1, 147, 234,
     3, "type", e[26], 235,
     0, 236,
     3, "type", e[27], 235],
    [1, 5, 233],
    [1, 5, 237],
    [3, "type qualifier", e[40], 238],
    [2, 273, 239, {"name":"TypeArgs"},
     1, 5, 240],
    [0, 236,
     2, 300, 235, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 237],
    ["[", 241,
     2, 268, 242, {"name":"ArgList"},
     0, 242],
    [1, 5, 243],
    [1, 5, 244],
    [1, 113, 245,
     0, 245],
    [2, 330, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 246],
    ["]", 247],
    [1, 5, 248],
    [2, 349, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 354], 250,
     [5, 357], 251],
    [3, "def", e[16], 252,
     2, 360, 252, {"name":"ParamList"}],
    [2, 365, 253, {"name":"SimpleParamList"}],
    [1, 5, 254],
    [1, 5, 255],
    [3, "operator", "->", 256],
    [3, "operator", "->", 256],
    [1, 5, 257],
    [2, 143, -1, {"name":"Block"},
     1, 113, -1],
    ["(", 259],
    [1, 5, 260],
    [3, "type", e[26], -1,
     0, 261,
     3, "type", e[27], -1],
    [3, "type qualifier", e[40], 262],
    [0, 261,
     2, 300, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 264],
    [1, 5, 265],
    [1, 113, 266,
     0, 266],
    [1, 5, 267],
    [")", -1],
    ["(", 269],
    [1, 5, 270],
    [1, 370, 271],
    [1, 5, 272],
    [")", -1],
    ["<", 274],
    [1, 5, 275],
    [1, 376, 276],
    [1, 5, 277],
    [">", -1],
    [[0, [6, 390], "@"], 279],
    [1, 5, 280],
    [e[16], 281],
    [1, 5, 282],
    [".", 283,
     0, -1],
    [1, 5, 284],
    [e[16], 285],
    [1, 5, 282],
    [e[41], 287,
     0, 288,
     0, -1],
    [1, 5, 289],
    [1, 5, 290],
    ["=", 288],
    [1, 147, 291,
     1, 113, 291],
    [1, 5, 292],
    [",", 293,
     0, -1],
    [1, 5, 294],
    [e[41], 295,
     0, 296],
    [1, 5, 297],
    [1, 5, 298],
    ["=", 296],
    [1, 147, 299,
     1, 113, 299],
    [1, 5, 292],
    [3, "type", e[27], -1],
    [1, 147, 302,
     2, 325, 303, {"name":"TypeParams"},
     0, 303],
    [1, 5, 301],
    [1, 5, 304],
    [3, "type", e[26], -1,
     0, 305],
    [3, "type qualifier", e[40], 306,
     3, "type", e[27], -1],
    [1, 5, 305],
    [1, 154, 308,
     0, -1],
    [1, 5, 309],
    [",", 310,
     0, -1],
    [1, 5, 311],
    [1, 154, 312],
    [1, 5, 309],
    ["{", 314],
    [1, 5, 315],
    [2, 394, 316, {"name":"EnumConstant"}],
    [1, 5, 317],
    [/^\,?/, 318],
    [1, 5, 319],
    [0, 315,
     ";", 320,
     0, 323],
    [1, 5, 321],
    [2, 401, 322, {"name":"ClassItem"},
     0, 323],
    [1, 5, 321],
    [1, 5, 324],
    ["}", -1],
    ["<", 326],
    [1, 5, 327],
    [1, 408, 328],
    [1, 5, 329],
    [">", -1],
    ["{", 331],
    [1, 5, 332],
    [2, 401, 333, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 332],
    ["{", 335],
    [1, 5, 336],
    [2, 424, 337, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 336],
    [3, "def", e[16], 339],
    [1, 5, 340],
    ["[", 341,
     0, -1],
    [1, 5, 342],
    ["]", -1],
    [2, 360, 344, {"name":"ParamList"}],
    [1, 5, 345],
    [2, 443, 346, {"name":"ThrowsClause"},
     0, 346],
    [1, 5, 347],
    [";", -1,
     2, 143, -1, {"name":"Block"}],
    [1, 446, -1],
    ["{", 350],
    [1, 5, 351],
    [1, 370, 352],
    [1, 5, 353],
    ["}", -1],
    [3, "def", e[16], 355,
     2, 360, 355, {"name":"ParamList"}],
    [1, 5, 356],
    [3, "operator", "->", -1],
    [2, 365, 358, {"name":"SimpleParamList"}],
    [1, 5, 359],
    [3, "operator", "->", -1],
    ["(", 361],
    [1, 5, 362],
    [1, 450, 363],
    [1, 5, 364],
    [")", -1],
    ["(", 366],
    [1, 5, 367],
    [1, 466, 368],
    [1, 5, 369],
    [")", -1],
    [2, 472, 371, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 372],
    [",", 373,
     0, -1],
    [1, 5, 374],
    [2, 472, 375, {"name":"ArgExpr"}],
    [1, 5, 372],
    [1, 154, 377,
     "?", 378,
     0, -1],
    [1, 5, 379],
    [1, 5, 380],
    [",", 381,
     0, -1],
    [3, "keyword", e[34], 382,
     3, "keyword", e[20], 382,
     0, 377],
    [1, 5, 383],
    [1, 5, 384],
    [1, 154, 385,
     "?", 386],
    [1, 154, 377],
    [1, 5, 379],
    [1, 5, 387],
    [3, "keyword", e[34], 388,
     3, "keyword", e[20], 388,
     0, 385],
    [1, 5, 389],
    [1, 154, 385],
    [3, "keyword", e[31], -1],
    [e[16], 392],
    [1, 5, 393],
    ["=", -1],
    [1, 147, 395,
     0, 395],
    [1, 5, 396],
    [3, "def property", e[16], 397],
    [1, 5, 398],
    [2, 268, 399, {"name":"ArgList"},
     0, 399],
    [1, 5, 400],
    [2, 330, -1, {"name":"ClassBody"},
     0, -1],
    [2, 111, 402, {"name":"BeforeStatement"}],
    [1, 5, 403],
    [2, 325, 404, {"name":"TypeParams"},
     0, 404],
    [1, 5, 405],
    [3, "def property", e[42], 406,
     1, 473, -1],
    [1, 5, 407],
    [2, 343, -1, {"name":"FunctionDef"}],
    [1, 147, 409,
     3, "type def", e[16], 410,
     0, -1],
    [1, 5, 408],
    [1, 5, 411],
    [3, "keyword", e[34], 412,
     1, 5, 413],
    [1, 5, 414],
    [",", 415,
     0, -1],
    [1, 154, 416],
    [1, 5, 417],
    [1, 5, 411],
    [1, 147, 418,
     3, "type def", e[16], 419],
    [1, 5, 417],
    [1, 5, 420],
    [3, "keyword", e[34], 421,
     1, 5, 413],
    [1, 5, 422],
    [1, 154, 423],
    [1, 5, 420],
    [2, 111, 425, {"name":"BeforeStatement"}],
    [1, 5, 426],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 427,
     "(", 428,
     1, 169, -1],
    [1, 5, 429],
    [1, 5, 430],
    ["[", 431,
     3, "operator", "=", 432],
    [")", 433],
    [1, 5, 434],
    [1, 5, 435],
    [1, 5, 436],
    ["]", 437],
    [1, 113, -1],
    ["[", 438,
     3, "keyword", e[10], 439,
     0, -1],
    [1, 5, 429],
    [1, 5, 440],
    [1, 5, 441],
    ["]", 442],
    [1, 113, -1],
    [1, 5, 436],
    [3, "keyword", e[43], 444],
    [1, 5, 445],
    [1, 307, -1],
    [/^(?!\}|\*\/)/, 447,
     0, -1],
    ["{", 448,
     /^[^]/, 446],
    [1, 446, 449],
    [/^\}?/, 446],
    [1, 147, 451,
     3, "keyword", e[15], 451,
     1, 147, 451,
     1, 154, 452,
     0, -1],
    [1, 5, 450],
    [1, 5, 453],
    [e[44], 454],
    [1, 5, 455],
    [3, "keyword", e[19], 456,
     1, 338, 456],
    [1, 5, 457],
    [",", 458,
     0, -1],
    [1, 5, 459],
    [1, 147, 460,
     3, "keyword", e[15], 460,
     1, 147, 460,
     1, 154, 461],
    [1, 5, 459],
    [1, 5, 462],
    [e[44], 463],
    [1, 5, 464],
    [3, "keyword", e[19], 465,
     1, 338, 465],
    [1, 5, 457],
    [3, "def", e[16], 467,
     0, -1],
    [1, 5, 468],
    [",", 469,
     0, -1],
    [1, 5, 470],
    [3, "def", e[16], 471],
    [1, 5, 468],
    [1, 113, -1],
    [2, 143, -1, {"name":"Block"},
     3, "keyword", e[29], 474,
     3, "keyword", e[30], 482,
     3, "keyword", e[31], 496,
     3, "keyword", e[32], 500,
     [5, 523], 507],
    [1, 5, 475],
    [3, "type def", e[16], 476],
    [1, 5, 477],
    [3, "keyword", e[33], 478,
     0, 479],
    [1, 5, 480],
    [1, 5, 481],
    [1, 307, 479],
    [2, 313, -1, {"name":"EnumBody"}],
    [1, 5, 483],
    [3, "type def", e[16], 484],
    [1, 5, 485],
    [2, 325, 486, {"name":"TypeParams"},
     0, 486],
    [1, 5, 487],
    [3, "keyword", e[34], 488,
     0, 489],
    [1, 5, 490],
    [1, 5, 491],
    [1, 154, 489],
    [3, "keyword", e[33], 492,
     0, 493],
    [1, 5, 494],
    [1, 5, 495],
    [1, 307, 493],
    [2, 330, -1, {"name":"ClassBody"}],
    [1, 5, 497],
    [3, "def", e[16], 498],
    [1, 5, 499],
    [2, 334, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 501],
    [e[16], 502],
    [1, 5, 503],
    [".", 504,
     ";", -1],
    [1, 5, 505],
    [e[16], 506],
    [1, 5, 503],
    [1, 154, 508],
    [1, 5, 509],
    [1, 529, 510],
    [1, 5, 511],
    [2, 343, -1, {"name":"FunctionDef"},
     3, "operator", "=", 512,
     0, 513],
    [1, 5, 514],
    [1, 5, 515],
    [1, 113, 513],
    [",", 516,
     ";", -1],
    [1, 5, 517],
    [1, 529, 518],
    [1, 5, 519],
    [3, "operator", "=", 520,
     0, 521],
    [1, 5, 522],
    [1, 5, 515],
    [1, 113, 521],
    [1, 147, 524,
     2, 325, 525, {"name":"TypeParams"},
     0, 525],
    [1, 5, 523],
    [1, 5, 526],
    [3, "type", e[26], -1,
     0, 527],
    [3, "type qualifier", e[40], 528,
     3, "type", e[27], -1],
    [1, 5, 527],
    [3, "def property", e[16], 530],
    [1, 5, 531],
    ["[", 532,
     0, -1],
    [1, 5, 533],
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
