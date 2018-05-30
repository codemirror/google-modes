(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 395], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     2, 230, 121, {"name":"NewExpr"},
     2, 250, 121, {"name":"Lambda"},
     3, "variable callee", e[22], 121,
     3, "variable", e[16], 121,
     [0, [5, 259], "("], 115,
     2, 264, 121, {"name":"ParenExpr"}],
    [1, 5, 113],
    [1, 5, 116],
    [1, 154, 117],
    [1, 5, 118],
    [")", 119],
    [1, 5, 120],
    [1, 113, 121],
    [1, 5, 122],
    [2, 269, 123, {"name":"ArgList"},
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
     2, 274, 123, {"name":"TypeArgs"},
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
    [2, 279, 148, {"name":"AnnotationHead","token":"meta"}],
    [1, 5, 149],
    ["(", 150,
     0, -1],
    [1, 5, 151],
    [1, 287, 152],
    [1, 5, 153],
    [")", -1],
    [1, 147, 155,
     3, "type", e[26], 158,
     0, 156,
     3, "type", e[27], 158],
    [1, 5, 154],
    [3, "type qualifier", e[40], 157],
    [0, 156,
     2, 301, 158, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 159],
    ["[", 160,
     2, 274, 161, {"name":"TypeArgs"},
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
     [5, 302], 203],
    [1, 5, 171],
    [3, "type def", e[16], 172],
    [1, 5, 173],
    [3, "keyword", e[33], 174,
     0, 175],
    [1, 5, 176],
    [1, 5, 177],
    [1, 308, 175],
    [2, 314, -1, {"name":"EnumBody"}],
    [1, 5, 179],
    [3, "type def", e[16], 180],
    [1, 5, 181],
    [2, 326, 182, {"name":"TypeParams"},
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
    [1, 308, 189],
    [2, 331, -1, {"name":"ClassBody"}],
    [1, 5, 193],
    [3, "def", e[16], 194],
    [1, 5, 195],
    [2, 335, -1, {"name":"AnnotationTypeBody"}],
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
    [1, 339, 206],
    [1, 5, 207],
    [2, 344, -1, {"name":"FunctionDef"},
     3, "operator", "=", 208,
     0, 209],
    [1, 5, 210],
    [1, 5, 211],
    [1, 113, 209],
    [",", 212,
     ";", -1],
    [1, 5, 213],
    [1, 339, 214],
    [1, 5, 215],
    [3, "operator", "=", 216,
     0, 217],
    [1, 5, 218],
    [1, 5, 211],
    [1, 113, 217],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 220,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 221,
     3, "tag", e[37], 228,
     "{", 222],
    [e[35], 220,
     3, "def", e[36], 228,
     "<", 223,
     0, 228],
    [e[35], 221,
     3, "type", e[36], 228,
     0, 228],
    [3, "tag", e[37], 224],
    [3, "type def", /^[a-zA-Z¡-￿_]+/, 225],
    [/^[\t ]*/, 226],
    [">", 228],
    [1, 349, 227],
    ["}", 228],
    [e[38], 229,
     0, -1],
    [0, 228,
     0, 228],
    [3, "keyword", e[39], 231],
    [1, 5, 232],
    [2, 274, 233, {"name":"TypeArgs"},
     0, 233],
    [1, 5, 234],
    [1, 147, 235,
     3, "type", e[26], 236,
     0, 237,
     3, "type", e[27], 236],
    [1, 5, 234],
    [1, 5, 238],
    [3, "type qualifier", e[40], 239],
    [2, 274, 240, {"name":"TypeArgs"},
     1, 5, 241],
    [0, 237,
     2, 301, 236, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 238],
    ["[", 242,
     2, 269, 243, {"name":"ArgList"},
     0, 243],
    [1, 5, 244],
    [1, 5, 245],
    [1, 113, 246,
     0, 246],
    [2, 331, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 247],
    ["]", 248],
    [1, 5, 249],
    [2, 353, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 358], 251,
     [5, 361], 252],
    [3, "def", e[16], 253,
     2, 364, 253, {"name":"ParamList"}],
    [2, 369, 254, {"name":"SimpleParamList"}],
    [1, 5, 255],
    [1, 5, 256],
    [3, "operator", "->", 257],
    [3, "operator", "->", 257],
    [1, 5, 258],
    [2, 143, -1, {"name":"Block"},
     1, 113, -1],
    ["(", 260],
    [1, 5, 261],
    [3, "type", e[26], -1,
     0, 262,
     3, "type", e[27], -1],
    [3, "type qualifier", e[40], 263],
    [0, 262,
     2, 301, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 265],
    [1, 5, 266],
    [1, 113, 267,
     0, 267],
    [1, 5, 268],
    [")", -1],
    ["(", 270],
    [1, 5, 271],
    [1, 374, 272],
    [1, 5, 273],
    [")", -1],
    ["<", 275],
    [1, 5, 276],
    [1, 380, 277],
    [1, 5, 278],
    [">", -1],
    [[0, [6, 394], "@"], 280],
    [1, 5, 281],
    [e[16], 282],
    [1, 5, 283],
    [".", 284,
     0, -1],
    [1, 5, 285],
    [e[16], 286],
    [1, 5, 283],
    [e[41], 288,
     0, 289,
     0, -1],
    [1, 5, 290],
    [1, 5, 291],
    ["=", 289],
    [1, 147, 292,
     1, 113, 292],
    [1, 5, 293],
    [",", 294,
     0, -1],
    [1, 5, 295],
    [e[41], 296,
     0, 297],
    [1, 5, 298],
    [1, 5, 299],
    ["=", 297],
    [1, 147, 300,
     1, 113, 300],
    [1, 5, 293],
    [3, "type", e[27], -1],
    [1, 147, 303,
     2, 326, 304, {"name":"TypeParams"},
     0, 304],
    [1, 5, 302],
    [1, 5, 305],
    [3, "type", e[26], -1,
     0, 306],
    [3, "type qualifier", e[40], 307,
     3, "type", e[27], -1],
    [1, 5, 306],
    [1, 154, 309,
     0, -1],
    [1, 5, 310],
    [",", 311,
     0, -1],
    [1, 5, 312],
    [1, 154, 313],
    [1, 5, 310],
    ["{", 315],
    [1, 5, 316],
    [2, 398, 317, {"name":"EnumConstant"}],
    [1, 5, 318],
    [/^\,?/, 319],
    [1, 5, 320],
    [0, 316,
     ";", 321,
     0, 324],
    [1, 5, 322],
    [2, 405, 323, {"name":"ClassItem"},
     0, 324],
    [1, 5, 322],
    [1, 5, 325],
    ["}", -1],
    ["<", 327],
    [1, 5, 328],
    [1, 412, 329],
    [1, 5, 330],
    [">", -1],
    ["{", 332],
    [1, 5, 333],
    [2, 405, 334, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 333],
    ["{", 336],
    [1, 5, 337],
    [2, 428, 338, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 337],
    [3, "def", e[16], 340],
    [1, 5, 341],
    ["[", 342,
     0, -1],
    [1, 5, 343],
    ["]", -1],
    [2, 364, 345, {"name":"ParamList"}],
    [1, 5, 346],
    [2, 447, 347, {"name":"ThrowsClause"},
     0, 347],
    [1, 5, 348],
    [";", -1,
     2, 143, -1, {"name":"Block"}],
    [3, "attribute", "{", 350,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 349,
     "\n", 351,
     0, -1],
    [1, 349, 352],
    [/^[\t ]*(?:\*[\t ]*)?/, 349],
    [/^(?=\*\/)/, 349,
     3, "attribute", "}", 349],
    ["{", 354],
    [1, 5, 355],
    [1, 374, 356],
    [1, 5, 357],
    ["}", -1],
    [3, "def", e[16], 359,
     2, 364, 359, {"name":"ParamList"}],
    [1, 5, 360],
    [3, "operator", "->", -1],
    [2, 369, 362, {"name":"SimpleParamList"}],
    [1, 5, 363],
    [3, "operator", "->", -1],
    ["(", 365],
    [1, 5, 366],
    [1, 450, 367],
    [1, 5, 368],
    [")", -1],
    ["(", 370],
    [1, 5, 371],
    [1, 466, 372],
    [1, 5, 373],
    [")", -1],
    [2, 472, 375, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 376],
    [",", 377,
     0, -1],
    [1, 5, 378],
    [2, 472, 379, {"name":"ArgExpr"}],
    [1, 5, 376],
    [1, 154, 381,
     "?", 382,
     0, -1],
    [1, 5, 383],
    [1, 5, 384],
    [",", 385,
     0, -1],
    [3, "keyword", e[34], 386,
     3, "keyword", e[20], 386,
     0, 381],
    [1, 5, 387],
    [1, 5, 388],
    [1, 154, 389,
     "?", 390],
    [1, 154, 381],
    [1, 5, 383],
    [1, 5, 391],
    [3, "keyword", e[34], 392,
     3, "keyword", e[20], 392,
     0, 389],
    [1, 5, 393],
    [1, 154, 389],
    [3, "keyword", e[31], -1],
    [e[16], 396],
    [1, 5, 397],
    ["=", -1],
    [1, 147, 399,
     0, 399],
    [1, 5, 400],
    [3, "def property", e[16], 401],
    [1, 5, 402],
    [2, 269, 403, {"name":"ArgList"},
     0, 403],
    [1, 5, 404],
    [2, 331, -1, {"name":"ClassBody"},
     0, -1],
    [2, 111, 406, {"name":"BeforeStatement"}],
    [1, 5, 407],
    [2, 326, 408, {"name":"TypeParams"},
     0, 408],
    [1, 5, 409],
    [3, "def property", e[42], 410,
     1, 473, -1],
    [1, 5, 411],
    [2, 344, -1, {"name":"FunctionDef"}],
    [1, 147, 413,
     3, "type def", e[16], 414,
     0, -1],
    [1, 5, 412],
    [1, 5, 415],
    [3, "keyword", e[34], 416,
     1, 5, 417],
    [1, 5, 418],
    [",", 419,
     0, -1],
    [1, 154, 420],
    [1, 5, 421],
    [1, 5, 415],
    [1, 147, 422,
     3, "type def", e[16], 423],
    [1, 5, 421],
    [1, 5, 424],
    [3, "keyword", e[34], 425,
     1, 5, 417],
    [1, 5, 426],
    [1, 154, 427],
    [1, 5, 424],
    [2, 111, 429, {"name":"BeforeStatement"}],
    [1, 5, 430],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 431,
     "(", 432,
     1, 169, -1],
    [1, 5, 433],
    [1, 5, 434],
    ["[", 435,
     3, "operator", "=", 436],
    [")", 437],
    [1, 5, 438],
    [1, 5, 439],
    [1, 5, 440],
    ["]", 441],
    [1, 113, -1],
    ["[", 442,
     3, "keyword", e[10], 443,
     0, -1],
    [1, 5, 433],
    [1, 5, 444],
    [1, 5, 445],
    ["]", 446],
    [1, 113, -1],
    [1, 5, 440],
    [3, "keyword", e[43], 448],
    [1, 5, 449],
    [1, 308, -1],
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
     1, 339, 456],
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
     1, 339, 465],
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
    [1, 308, 479],
    [2, 314, -1, {"name":"EnumBody"}],
    [1, 5, 483],
    [3, "type def", e[16], 484],
    [1, 5, 485],
    [2, 326, 486, {"name":"TypeParams"},
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
    [1, 308, 493],
    [2, 331, -1, {"name":"ClassBody"}],
    [1, 5, 497],
    [3, "def", e[16], 498],
    [1, 5, 499],
    [2, 335, -1, {"name":"AnnotationTypeBody"}],
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
    [2, 344, -1, {"name":"FunctionDef"},
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
     2, 326, 525, {"name":"TypeParams"},
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
