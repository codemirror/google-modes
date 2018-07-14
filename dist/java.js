(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 387], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
    [3, "meta", [0, [6, 279], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 148],
    [1, 5, 149],
    ["(", 150,
     0, -1],
    [1, 5, 151],
    [1, 280, 152],
    [1, 5, 153],
    [")", -1],
    [1, 147, 155,
     3, "type", e[26], 158,
     0, 156,
     3, "type", e[27], 158],
    [1, 5, 154],
    [3, "type qualifier", e[40], 157],
    [0, 156,
     2, 294, 158, {"name":"qualifiedClassName","token":"qualified"}],
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
     [5, 295], 203],
    [1, 5, 171],
    [3, "type def", e[16], 172],
    [1, 5, 173],
    [3, "keyword", e[33], 174,
     0, 175],
    [1, 5, 176],
    [1, 5, 177],
    [1, 301, 175],
    [2, 307, -1, {"name":"EnumBody"}],
    [1, 5, 179],
    [3, "type def", e[16], 180],
    [1, 5, 181],
    [2, 319, 182, {"name":"TypeParams"},
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
    [1, 301, 189],
    [2, 324, -1, {"name":"ClassBody"}],
    [1, 5, 193],
    [3, "def", e[16], 194],
    [1, 5, 195],
    [2, 328, -1, {"name":"AnnotationTypeBody"}],
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
    [1, 332, 206],
    [1, 5, 207],
    [2, 337, -1, {"name":"FunctionDef"},
     3, "operator", "=", 208,
     0, 209],
    [1, 5, 210],
    [1, 5, 211],
    [1, 113, 209],
    [",", 212,
     ";", -1],
    [1, 5, 213],
    [1, 332, 214],
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
    [1, 342, 227],
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
     2, 294, 236, {"name":"qualifiedClassName","token":"qualified"}],
    [1, 5, 238],
    ["[", 242,
     2, 269, 243, {"name":"ArgList"},
     0, 243],
    [1, 5, 244],
    [1, 5, 245],
    [1, 113, 246,
     0, 246],
    [2, 324, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 247],
    ["]", 248],
    [1, 5, 249],
    [2, 346, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 351], 251,
     [5, 354], 252],
    [3, "def", e[16], 253,
     2, 357, 253, {"name":"ParamList"}],
    [2, 362, 254, {"name":"SimpleParamList"}],
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
     2, 294, -1, {"name":"qualifiedClassName","token":"qualified"}],
    ["(", 265],
    [1, 5, 266],
    [1, 113, 267,
     0, 267],
    [1, 5, 268],
    [")", -1],
    ["(", 270],
    [1, 5, 271],
    [1, 367, 272],
    [1, 5, 273],
    [")", -1],
    ["<", 275],
    [1, 5, 276],
    [1, 373, 277],
    [1, 5, 278],
    [">", -1],
    [3, "keyword", e[31], -1],
    [e[41], 281,
     0, 282,
     0, -1],
    [1, 5, 283],
    [1, 5, 284],
    ["=", 282],
    [1, 147, 285,
     1, 113, 285],
    [1, 5, 286],
    [",", 287,
     0, -1],
    [1, 5, 288],
    [e[41], 289,
     0, 290],
    [1, 5, 291],
    [1, 5, 292],
    ["=", 290],
    [1, 147, 293,
     1, 113, 293],
    [1, 5, 286],
    [3, "type", e[27], -1],
    [1, 147, 296,
     2, 319, 297, {"name":"TypeParams"},
     0, 297],
    [1, 5, 295],
    [1, 5, 298],
    [3, "type", e[26], -1,
     0, 299],
    [3, "type qualifier", e[40], 300,
     3, "type", e[27], -1],
    [1, 5, 299],
    [1, 154, 302,
     0, -1],
    [1, 5, 303],
    [",", 304,
     0, -1],
    [1, 5, 305],
    [1, 154, 306],
    [1, 5, 303],
    ["{", 308],
    [1, 5, 309],
    [2, 390, 310, {"name":"EnumConstant"}],
    [1, 5, 311],
    [/^\,?/, 312],
    [1, 5, 313],
    [0, 309,
     ";", 314,
     0, 317],
    [1, 5, 315],
    [2, 397, 316, {"name":"ClassItem"},
     0, 317],
    [1, 5, 315],
    [1, 5, 318],
    ["}", -1],
    ["<", 320],
    [1, 5, 321],
    [1, 404, 322],
    [1, 5, 323],
    [">", -1],
    ["{", 325],
    [1, 5, 326],
    [2, 397, 327, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 326],
    ["{", 329],
    [1, 5, 330],
    [2, 420, 331, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 330],
    [3, "def", e[16], 333],
    [1, 5, 334],
    ["[", 335,
     0, -1],
    [1, 5, 336],
    ["]", -1],
    [2, 357, 338, {"name":"ParamList"}],
    [1, 5, 339],
    [2, 439, 340, {"name":"ThrowsClause"},
     0, 340],
    [1, 5, 341],
    [";", -1,
     2, 143, -1, {"name":"Block"}],
    [3, "attribute", "{", 343,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 342,
     "\n", 344,
     0, -1],
    [1, 342, 345],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 342],
    [/^(?=\*\/)/, 342,
     3, "attribute", "}", 342],
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
    [1, 442, 360],
    [1, 5, 361],
    [")", -1],
    ["(", 363],
    [1, 5, 364],
    [1, 458, 365],
    [1, 5, 366],
    [")", -1],
    [2, 464, 368, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 369],
    [",", 370,
     0, -1],
    [1, 5, 371],
    [2, 464, 372, {"name":"ArgExpr"}],
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
    [e[16], 388],
    [1, 5, 389],
    ["=", -1],
    [1, 147, 391,
     0, 391],
    [1, 5, 392],
    [3, "def property", e[16], 393],
    [1, 5, 394],
    [2, 269, 395, {"name":"ArgList"},
     0, 395],
    [1, 5, 396],
    [2, 324, -1, {"name":"ClassBody"},
     0, -1],
    [2, 111, 398, {"name":"BeforeStatement"}],
    [1, 5, 399],
    [2, 319, 400, {"name":"TypeParams"},
     0, 400],
    [1, 5, 401],
    [3, "def property", e[42], 402,
     1, 465, -1],
    [1, 5, 403],
    [2, 337, -1, {"name":"FunctionDef"}],
    [1, 147, 405,
     3, "type def", e[16], 406,
     0, -1],
    [1, 5, 404],
    [1, 5, 407],
    [3, "keyword", e[34], 408,
     1, 5, 409],
    [1, 5, 410],
    [",", 411,
     0, -1],
    [1, 154, 412],
    [1, 5, 413],
    [1, 5, 407],
    [1, 147, 414,
     3, "type def", e[16], 415],
    [1, 5, 413],
    [1, 5, 416],
    [3, "keyword", e[34], 417,
     1, 5, 409],
    [1, 5, 418],
    [1, 154, 419],
    [1, 5, 416],
    [2, 111, 421, {"name":"BeforeStatement"}],
    [1, 5, 422],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 423,
     "(", 424,
     1, 169, -1],
    [1, 5, 425],
    [1, 5, 426],
    ["[", 427,
     3, "operator", "=", 428],
    [")", 429],
    [1, 5, 430],
    [1, 5, 431],
    [1, 5, 432],
    ["]", 433],
    [1, 113, -1],
    ["[", 434,
     3, "keyword", e[10], 435,
     0, -1],
    [1, 5, 425],
    [1, 5, 436],
    [1, 5, 437],
    ["]", 438],
    [1, 113, -1],
    [1, 5, 432],
    [3, "keyword", e[43], 440],
    [1, 5, 441],
    [1, 301, -1],
    [1, 147, 443,
     3, "keyword", e[15], 443,
     1, 147, 443,
     1, 154, 444,
     0, -1],
    [1, 5, 442],
    [1, 5, 445],
    [e[44], 446],
    [1, 5, 447],
    [3, "keyword", e[19], 448,
     1, 332, 448],
    [1, 5, 449],
    [",", 450,
     0, -1],
    [1, 5, 451],
    [1, 147, 452,
     3, "keyword", e[15], 452,
     1, 147, 452,
     1, 154, 453],
    [1, 5, 451],
    [1, 5, 454],
    [e[44], 455],
    [1, 5, 456],
    [3, "keyword", e[19], 457,
     1, 332, 457],
    [1, 5, 449],
    [3, "def", e[16], 459,
     0, -1],
    [1, 5, 460],
    [",", 461,
     0, -1],
    [1, 5, 462],
    [3, "def", e[16], 463],
    [1, 5, 460],
    [1, 113, -1],
    [2, 143, -1, {"name":"Block"},
     3, "keyword", e[29], 466,
     3, "keyword", e[30], 474,
     3, "keyword", e[31], 488,
     3, "keyword", e[32], 492,
     [5, 515], 499],
    [1, 5, 467],
    [3, "type def", e[16], 468],
    [1, 5, 469],
    [3, "keyword", e[33], 470,
     0, 471],
    [1, 5, 472],
    [1, 5, 473],
    [1, 301, 471],
    [2, 307, -1, {"name":"EnumBody"}],
    [1, 5, 475],
    [3, "type def", e[16], 476],
    [1, 5, 477],
    [2, 319, 478, {"name":"TypeParams"},
     0, 478],
    [1, 5, 479],
    [3, "keyword", e[34], 480,
     0, 481],
    [1, 5, 482],
    [1, 5, 483],
    [1, 154, 481],
    [3, "keyword", e[33], 484,
     0, 485],
    [1, 5, 486],
    [1, 5, 487],
    [1, 301, 485],
    [2, 324, -1, {"name":"ClassBody"}],
    [1, 5, 489],
    [3, "def", e[16], 490],
    [1, 5, 491],
    [2, 328, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 493],
    [e[16], 494],
    [1, 5, 495],
    [".", 496,
     ";", -1],
    [1, 5, 497],
    [e[16], 498],
    [1, 5, 495],
    [1, 154, 500],
    [1, 5, 501],
    [1, 521, 502],
    [1, 5, 503],
    [2, 337, -1, {"name":"FunctionDef"},
     3, "operator", "=", 504,
     0, 505],
    [1, 5, 506],
    [1, 5, 507],
    [1, 113, 505],
    [",", 508,
     ";", -1],
    [1, 5, 509],
    [1, 521, 510],
    [1, 5, 511],
    [3, "operator", "=", 512,
     0, 513],
    [1, 5, 514],
    [1, 5, 507],
    [1, 113, 513],
    [1, 147, 516,
     2, 319, 517, {"name":"TypeParams"},
     0, 517],
    [1, 5, 515],
    [1, 5, 518],
    [3, "type", e[26], -1,
     0, 519],
    [3, "type qualifier", e[40], 520,
     3, "type", e[27], -1],
    [1, 5, 519],
    [3, "def property", e[16], 522],
    [1, 5, 523],
    ["[", 524,
     0, -1],
    [1, 5, 525],
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
    } else if (statementish.indexOf(cx.name) > -1) {
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
