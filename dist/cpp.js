(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+|[A-Z]+_[A-Z_]*)/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\<)/, /^(?:\:\:|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\:\:)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^class(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^else(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 451]], /^(?:\.\.\.)?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?!\>)/, /^(?:\*|\&\&|\&)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 12, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[5], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[43], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[53], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "type", e[34], -1,
   3, "type", e[36], -1,
   3, "keyword", e[33], -1,
   3, "atom", e[52], -1,
   3, "meta", e[17], -1,
   1, 138, -1,
   3, "number", e[26], -1,
   2, 143, -1, {"name":"string","token":"string"},
   2, 148, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[41], -1,
   3, "operator", e[42], -1,
   2, 149, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[0], -1,
   3, "keyword", e[19], -1,
   3, "keyword", e[49], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[50], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[58], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[39], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 149, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [1, 155, -1,
   3, "keyword", e[0], 13,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 46,
   2, 176, -1, {"name":"Template"},
   [7, "constructorAhead"], 58,
   0, 61,
   3, "keyword", e[5], 71,
   3, "keyword", e[6], 75,
   3, "keyword", e[7], 76,
   3, "keyword", e[8], 77,
   3, "keyword", e[9], 101,
   3, "keyword", e[10], 106,
   2, 185, -1, {"name":"Block"},
   3, "keyword", e[11], 110,
   3, "keyword", e[12], 112,
   3, "keyword", e[13], 116,
   3, "keyword", e[14], 120,
   3, "keyword", e[15], 126,
   3, "keyword", e[16], 127,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 189]], 126,
   3, "meta", e[17], 130,
   2, 190, 134, {"name":"DeclType"},
   ";", -1,
   1, 200, 136],
  [1, 9, 14],
  [1, 205, 15,
   0, 15],
  [1, 9, 16],
  [3, "operator", "=", 17,
   2, 212, -1, {"name":"NamespaceBlock"}],
  [1, 9, 18],
  [1, 138, 19],
  [1, 9, 20],
  [";", -1],
  [1, 9, 22],
  [1, 200, 23],
  [1, 9, 24],
  [";", -1],
  [1, 9, 26],
  [2, 185, 27, {"name":"Block"}],
  [1, 9, 28],
  [3, "keyword", e[18], 29,
   0, -1],
  [1, 9, 30],
  ["(", 31],
  [1, 9, 32],
  [1, 216, 33],
  [1, 9, 34],
  [1, 226, 35,
   0, 35],
  [1, 9, 36],
  [")", 37],
  [1, 9, 38],
  [2, 185, 39, {"name":"Block"}],
  [1, 9, 28],
  [1, 9, 41],
  ["{", 42],
  [1, 9, 43],
  [2, 143, 44, {"name":"string","token":"string"}],
  [1, 9, 45],
  ["}", -1],
  [1, 9, 47],
  [3, "keyword", e[19], 48,
   3, "keyword", e[0], 49,
   0, 49],
  [1, 9, 50],
  [1, 9, 51],
  [1, 216, 52],
  [1, 138, 52],
  [1, 9, 53],
  [3, "operator", "=", 54,
   0, 55],
  [1, 9, 56],
  [1, 9, 57],
  [1, 216, 55],
  [";", -1],
  [1, 205, 59],
  [1, 9, 60],
  [2, 238, -1, {"name":"FunctionDef"}],
  [3, "meta", e[22], 62],
  [1, 9, 63],
  [0, 61,
   1, 269, 64,
   3, "variable qualified", e[21], 65,
   2, 276, 66, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 67],
  [1, 9, 68],
  [1, 9, 69],
  [1, 277, -1],
  [2, 288, 66, {"name":"TemplateArgs"}],
  [1, 293, 70,
   ";", -1],
  [1, 9, 69],
  [1, 9, 72],
  [3, "type def", e[20], 73,
   0, 73],
  [1, 9, 74],
  [2, 310, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 78],
  [1, 9, 79],
  [1, 9, 80],
  ["(", 81],
  [2, 328, 82, {"name":"CondExpr"}],
  [2, 12, 83, {"name":"Statement"}],
  [1, 9, 84],
  [1, 9, 85],
  [1, 9, 86],
  [2, 12, 87, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[7], 88],
  [1, 9, 89],
  [1, 9, 90],
  [1, 200, 91,
   0, 91],
  [2, 328, 92, {"name":"CondExpr"}],
  [1, 9, 93],
  [1, 9, 94],
  [";", 95],
  [";", -1],
  [1, 9, 96],
  [1, 200, 97,
   0, 97],
  [1, 9, 98],
  [")", 99],
  [1, 9, 100],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 102],
  [2, 328, 103, {"name":"CondExpr"}],
  [1, 9, 104],
  [2, 12, 105, {"name":"Statement"}],
  [2, 333, -1, {"name":"Alternative"}],
  [1, 9, 107],
  [2, 328, 108, {"name":"CondExpr"}],
  [1, 9, 109],
  [2, 185, -1, {"name":"Block"}],
  [1, 9, 111],
  [";", -1],
  [1, 9, 113],
  [e[20], 114],
  [1, 9, 115],
  [";", -1],
  [1, 9, 117],
  [1, 200, 118,
   0, 118],
  [1, 9, 119],
  [";", -1],
  [1, 9, 121],
  [1, 205, 122,
   0, 122],
  [1, 9, 123],
  [2, 337, 124, {"name":"BlockOf"},
   0, 124],
  [1, 9, 125],
  [";", -1],
  [1, 9, 128],
  [1, 9, 129],
  [":", -1],
  [1, 200, 126],
  [1, 9, 131],
  [2, 347, 132, {"name":"ArgList"},
   0, 132],
  [1, 9, 133],
  [/^\;?/, -1],
  [1, 9, 135],
  [1, 277, -1],
  [1, 9, 137],
  [";", -1],
  [0, 139,
   3, "type", e[23], -1,
   3, "variable", e[21], 142,
   2, 352, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[22], 140],
  [0, 139,
   3, "variable qualified", e[21], 141,
   3, "type", e[23], -1,
   2, 276, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 288, -1, {"name":"TemplateArgs"}],
  [2, 288, -1, {"name":"TemplateArgs"}],
  [/^R\"(?:(?!\().)*\(/, 144,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 145],
  [[0, [7, "rawStringContinues"], /^[^]/], 144,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 146],
  ["\\", 147,
   [0, /^(?!\")/, /^[^]/], 146,
   "\"", -1],
  [/^[^]/, 146],
  [3, "keyword", e[19], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 150,
   "/*", 154,
   /^\/\/.*/, -1],
  [0, 151,
   2, 353, 150, {"name":"doccomment.braced"},
   0, 152],
  [e[48], 153],
  [2, 361, 152, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 151,
   0, 150],
  [[0, /^(?!\*\/)/, /^[^]/], 154,
   "*/", -1],
  [3, "keyword", e[24], 156,
   3, "keyword", e[14], 156],
  [1, 9, 157],
  [3, "keyword", e[25], 158,
   0, 164],
  [1, 9, 159],
  ["(", 160],
  [1, 9, 161],
  [3, "number", e[26], 162],
  [1, 9, 163],
  [")", 164],
  [1, 9, 165],
  [3, "type def", e[20], 166],
  [1, 9, 167],
  [":", 168,
   0, 174],
  [1, 9, 169],
  [3, "keyword", e[27], 170,
   0, 170],
  [1, 9, 171],
  [3, "keyword", e[28], 172,
   0, 172],
  [1, 9, 173],
  [1, 216, 174],
  [1, 9, 175],
  [";", -1,
   2, 369, -1, {"name":"ClassBody"}],
  [3, "keyword", e[29], 177,
   0, 177],
  [1, 9, 178],
  [3, "keyword", e[30], 179],
  [1, 9, 180],
  [2, 373, 181, {"name":"TemplateParams"}],
  [1, 9, 182],
  [1, 9, 183],
  [1, 9, 184],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 186],
  [1, 9, 187],
  [2, 12, 188, {"name":"Statement"},
   "}", -1],
  [1, 9, 187],
  [e[44], 189,
   /^\:(?!\:)/, -1],
  [0, 191,
   0, 192,
   1, 269, -1],
  [3, "keyword", e[31], 193,
   3, "keyword", e[32], 193,
   3, "keyword", e[33], 193],
  [3, "type", e[34], 194],
  [1, 9, 195],
  [1, 9, 196],
  [0, 191,
   3, "keyword", e[35], 197,
   1, 378, 197],
  [0, 192,
   3, "type", e[36], 197,
   0, 197],
  [1, 9, 198],
  [1, 384, 199,
   0, -1],
  [1, 9, 198],
  [1, 391, 201,
   1, 406, 202],
  [1, 9, 200],
  [1, 9, 203],
  [1, 293, 204,
   0, -1],
  [1, 9, 203],
  [0, 206,
   3, "def", e[37], -1],
  [3, "meta", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\<)/, 207,
   3, "meta", e[22], 208],
  [1, 9, 209],
  [0, 206,
   3, "qualified def", e[37], -1],
  [2, 288, 210, {"name":"TemplateArgs"}],
  [3, "meta", "::", 211],
  [3, "qualified def", e[37], 208],
  ["{", 213],
  [1, 9, 214],
  [2, 12, 215, {"name":"Statement"},
   "}", -1],
  [1, 9, 214],
  [3, "keyword", e[19], 217,
   0, 219],
  [1, 9, 218],
  [1, 216, -1],
  [3, "keyword", e[31], 220,
   3, "keyword", e[32], 220,
   3, "keyword", e[33], 220,
   3, "keyword", e[14], 221,
   0, 221],
  [1, 9, 219],
  [1, 9, 222],
  [3, "keyword", e[35], 223,
   1, 378, 223],
  [1, 9, 224],
  [1, 384, 225,
   0, -1],
  [1, 9, 224],
  [0, 227,
   "(", 234],
  [e[60], 228,
   1, 205, 229],
  [1, 9, 227],
  [1, 9, 230],
  ["[", 231,
   0, -1],
  [1, 9, 232],
  ["]", 233],
  [1, 9, 230],
  [1, 9, 235],
  [1, 226, 236],
  [1, 9, 237],
  [")", -1],
  [2, 437, 239, {"name":"ParamList"}],
  [1, 9, 240],
  [3, "keyword", e[33], 241,
   /^(?:\&|\&\&)?/, 242],
  [1, 9, 240],
  [1, 9, 243],
  [3, "keyword", e[38], 244,
   3, "keyword", e[1], 245,
   0, 256],
  [1, 9, 246],
  [1, 9, 247],
  ["(", 248,
   0, 256],
  ["(", 249],
  [1, 9, 250],
  [1, 9, 251],
  [1, 200, 252],
  [1, 442, 253],
  [1, 9, 254],
  [1, 9, 255],
  [")", 256],
  [")", 256],
  [1, 9, 257],
  ["->", 258,
   0, 260],
  [1, 9, 259],
  [1, 216, 260],
  [1, 9, 261],
  [3, "keyword", e[39], 262,
   2, 448, 263, {"name":"InitializerList"},
   0, 263],
  [1, 9, 261],
  [1, 9, 264],
  [";", -1,
   2, 185, -1, {"name":"Block"},
   3, "operator", "=", 265],
  [1, 9, 266],
  [3, "keyword", e[15], 267,
   3, "keyword", e[40], 267],
  [1, 9, 268],
  [";", -1],
  [3, "keyword", e[35], 273,
   3, "keyword", e[19], 270,
   e[54], 271],
  [1, 9, 272],
  [3, "meta", e[22], 271,
   3, "type", e[55], 273],
  [3, "meta", e[22], 272,
   3, "type", e[20], 273],
  [1, 9, 274],
  [1, 384, 275,
   0, -1],
  [1, 9, 274],
  [2, 352, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 226, 278],
  [1, 9, 279],
  [[5, 454], 280,
   1, 460, 281,
   0, 281],
  [2, 238, -1, {"name":"FunctionDef"}],
  [1, 9, 282],
  [",", 283,
   ";", -1],
  [1, 9, 284],
  [1, 205, 285],
  [1, 9, 286],
  [1, 460, 287,
   0, 287],
  [1, 9, 282],
  ["<", 289],
  [1, 9, 290],
  [1, 463, 291],
  [1, 9, 292],
  [">", -1],
  [2, 493, -1, {"name":"BlockOf"},
   2, 347, 294, {"name":"ArgList"},
   2, 347, -1, {"name":"ArgList"},
   "[", 296,
   3, "operator", e[41], -1,
   /^(?:\-\>|\.)/, 300,
   3, "operator", e[42], 302,
   "?", 304],
  [1, 9, 295],
  [2, 185, -1, {"name":"Block"},
   0, -1],
  [1, 9, 297],
  [1, 200, 298],
  [1, 9, 299],
  ["]", -1],
  [1, 9, 301],
  [2, 503, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 303],
  [1, 200, -1],
  [1, 9, 305],
  [1, 200, 306],
  [1, 9, 307],
  [":", 308],
  [1, 9, 309],
  [1, 200, -1],
  ["{", 311],
  [1, 9, 312],
  [1, 504, 313,
   0, 326],
  [1, 9, 314],
  [3, "operator", "=", 315,
   0, 316],
  [1, 9, 317],
  [1, 9, 318],
  [1, 200, 316],
  [",", 319,
   0, 326],
  [1, 9, 320],
  [1, 504, 321,
   0, 322],
  [1, 9, 323],
  [1, 9, 318],
  [3, "operator", "=", 324,
   0, 322],
  [1, 9, 325],
  [1, 200, 322],
  [1, 9, 327],
  ["}", -1],
  ["(", 329],
  [1, 9, 330],
  [1, 200, 331,
   0, 331],
  [1, 9, 332],
  [")", -1],
  [1, 9, 334],
  [3, "keyword", e[43], 335,
   0, -1],
  [1, 9, 336],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 338],
  [1, 9, 339],
  [1, 507, 340,
   0, 345],
  [1, 9, 341],
  [";", 342,
   0, 345],
  [1, 9, 343],
  [1, 507, 344,
   0, 344],
  [1, 9, 341],
  [1, 9, 346],
  ["}", -1],
  ["(", 348],
  [1, 9, 349],
  [1, 518, 350],
  [1, 9, 351],
  [")", -1],
  [3, "callee", e[57], -1,
   e[20], -1],
  ["{", 354],
  [3, "tag", e[45], 355,
   3, "tag", e[46], 356,
   2, 524, 360, {"name":"doccomment.type","token":"type"}],
  [e[44], 355,
   "{", 357,
   0, 356],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 356,
   0, 360],
  [2, 524, 358, {"name":"doccomment.type","token":"type"}],
  ["}", 359],
  [e[44], 359,
   3, "def", e[47], 356,
   0, 356],
  ["}", -1],
  [3, "tag", e[45], 362,
   3, "tag", e[46], 366],
  [e[44], 362,
   "{", 363,
   0, 366],
  [2, 524, 364, {"name":"doccomment.type","token":"type"}],
  ["}", 365],
  [e[44], 365,
   3, "def", e[47], 366,
   0, 366],
  [0, 367,
   2, 353, 366, {"name":"doccomment.braced"},
   0, -1],
  [e[48], 368],
  [0, 367,
   0, 366],
  ["{", 370],
  [1, 9, 371],
  [2, 525, 372, {"name":"ClassItem"},
   "}", -1],
  [1, 9, 371],
  ["<", 374],
  [1, 9, 375],
  [1, 532, 376],
  [1, 9, 377],
  [">", -1],
  [0, 379,
   3, "keyword", e[19], 382,
   0, 383],
  [3, "type", e[34], 380],
  [0, 379,
   1, 9, 381,
   0, -1],
  [3, "type", e[36], -1],
  [1, 9, 383],
  [3, "meta", e[22], 383,
   3, "type", e[20], -1],
  [2, 288, -1, {"name":"TemplateArgs"},
   "::", 385,
   "[", 387,
   /^[\*\&]/, -1,
   3, "keyword", e[33], -1],
  [1, 9, 386],
  [1, 216, -1],
  [1, 9, 388],
  [3, "number", e[26], 389,
   0, 389],
  [1, 9, 390],
  ["]", -1],
  [3, "keyword", e[40], 392,
   3, "keyword", e[49], 396,
   2, 148, -1, {"name":"prefixOp","token":"operator"}],
  [1, 9, 393],
  ["[", 394,
   0, -1],
  [1, 9, 395],
  ["]", -1],
  [1, 9, 397],
  ["[", 398,
   0, 399],
  [1, 9, 400],
  [1, 9, 401],
  ["]", 399],
  ["(", 402,
   0, -1],
  [1, 9, 403],
  [1, 200, 404],
  [1, 9, 405],
  [")", -1],
  [3, "keyword", e[50], -1,
   [0, [5, 568], "["], 407,
   3, "keyword", e[51], 413,
   2, 572, 425, {"name":"ParenExpr"},
   3, "atom", e[52], -1,
   3, "number", e[26], -1,
   2, 143, -1, {"name":"string","token":"string"},
   2, 493, -1, {"name":"BlockOf"},
   3, "keyword", e[53], 427,
   1, 138, -1],
  [1, 9, 408],
  [1, 577, 409],
  [1, 9, 410],
  ["]", 411],
  [1, 9, 412],
  [2, 238, -1, {"name":"FunctionDef"},
   2, 185, -1, {"name":"Block"}],
  [1, 9, 414],
  ["<", 415],
  [1, 9, 416],
  [1, 216, 417],
  [1, 9, 418],
  [">", 419],
  [1, 9, 420],
  ["(", 421],
  [1, 9, 422],
  [1, 200, 423],
  [1, 9, 424],
  [")", -1],
  [1, 9, 426],
  [1, 200, -1,
   0, -1],
  [1, 9, 428],
  ["(", 429,
   e[56], 430],
  [1, 9, 431],
  [1, 9, 432],
  [1, 216, 433],
  [1, 200, 434],
  [1, 9, 435],
  [1, 9, 436],
  [")", 434],
  [3, "meta", e[17], -1],
  ["(", 438],
  [1, 9, 439],
  [1, 587, 440],
  [1, 9, 441],
  [")", -1],
  [1, 216, 443,
   0, -1],
  [1, 9, 444],
  [",", 445,
   0, -1],
  [1, 9, 446],
  [1, 216, 447],
  [1, 9, 444],
  [":", 449],
  [1, 9, 450],
  [1, 601, -1],
  [1, 9, 452],
  [1, 384, 453,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 452],
  ["(", 455],
  [1, 9, 456],
  [")", -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[33], -1,
   3, "type", e[34], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[19], 457,
   e[54], 458],
  [1, 9, 459],
  [3, "meta", e[22], 458,
   3, "type", e[55], -1],
  [3, "meta", e[22], 459,
   3, "type", e[20], -1],
  [3, "operator", "=", 461,
   2, 493, -1, {"name":"BlockOf"},
   2, 347, -1, {"name":"ArgList"}],
  [1, 9, 462],
  [1, 200, -1],
  [3, "keyword", e[30], 464,
   0, 465,
   0, 466,
   3, "number", e[26], 467,
   0, -1],
  [1, 9, 468],
  [1, 9, 469],
  [3, "keyword", e[31], 470,
   3, "keyword", e[32], 470,
   1, 216, 471],
  [1, 9, 472],
  [2, 288, 465, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 473,
   3, "keyword", e[19], 473],
  [1, 9, 466],
  [1, 9, 474],
  [",", 475,
   0, -1],
  [1, 9, 476],
  [e[56], 477],
  [1, 9, 478],
  [1, 216, 467],
  [1, 9, 479],
  [3, "keyword", e[30], 480,
   0, 481,
   0, 482,
   3, "number", e[26], 483],
  [2, 437, 467, {"name":"ParamList"},
   1, 460, 467,
   0, 467],
  [1, 9, 484],
  [1, 9, 485],
  [3, "keyword", e[31], 486,
   3, "keyword", e[32], 486,
   1, 216, 487],
  [1, 9, 472],
  [2, 288, 481, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 488,
   3, "keyword", e[19], 488],
  [1, 9, 482],
  [1, 9, 489],
  [1, 9, 490],
  [e[56], 491],
  [1, 216, 483],
  [1, 9, 492],
  [2, 437, 483, {"name":"ParamList"},
   1, 460, 483,
   0, 483],
  ["{", 494],
  [1, 9, 495],
  [1, 200, 496,
   0, 501],
  [1, 9, 497],
  [",", 498,
   0, 501],
  [1, 9, 499],
  [1, 200, 500,
   0, 500],
  [1, 9, 497],
  [1, 9, 502],
  ["}", -1],
  [3, "callee", e[57], -1,
   e[20], -1],
  [3, "keyword", e[58], 505,
   3, "def property", e[20], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[42], -1,
   2, 148, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[49], 506,
   3, "keyword", e[40], 506],
  [/^(?:\[\])?/, -1],
  [1, 216, 508],
  [1, 9, 509],
  [2, 503, 510, {"name":"fieldName","token":"property"},
   0, 510],
  [1, 9, 511],
  [":", 512,
   "[", 513,
   0, -1],
  [1, 9, 514],
  [1, 9, 515],
  [3, "number", e[26], -1],
  [3, "number", e[26], 516,
   0, 516],
  [1, 9, 517],
  ["]", -1],
  [1, 200, 519,
   0, -1],
  [1, 9, 520],
  [",", 521,
   0, -1],
  [1, 9, 522],
  [1, 200, 523],
  [1, 9, 520],
  [1, 607, -1],
  [3, "keyword", e[28], 526,
   2, 176, -1, {"name":"Template"},
   3, "meta", e[17], 528,
   1, 155, -1,
   2, 611, -1, {"name":"ObjectMember"}],
  [1, 9, 527],
  [":", -1],
  [1, 9, 529],
  [2, 347, 530, {"name":"ArgList"},
   0, 530],
  [1, 9, 531],
  [/^\;?/, -1],
  [1, 625, 533,
   0, 534,
   0, -1],
  [1, 9, 535],
  [3, "keyword", e[31], 536,
   3, "keyword", e[32], 536,
   1, 216, 537],
  [",", 538,
   0, -1],
  [1, 9, 534],
  [1, 9, 539],
  [1, 9, 540],
  [e[56], 541],
  [1, 625, 542,
   0, 543],
  [1, 9, 544],
  [1, 9, 535],
  [3, "keyword", e[31], 545,
   3, "keyword", e[32], 545,
   1, 216, 546],
  [1, 205, 547],
  [1, 9, 543],
  [1, 9, 548],
  [1, 9, 549],
  [e[56], 550],
  [3, "operator", "=", 551,
   0, 533],
  [1, 9, 552],
  [1, 9, 553],
  [1, 205, 554],
  [1, 391, 555,
   1, 406, 556],
  [1, 9, 557],
  [1, 9, 553],
  [1, 9, 558],
  [3, "operator", "=", 559,
   0, 542],
  [e[59], 560,
   0, 533],
  [1, 9, 561],
  [1, 293, 562],
  [1, 391, 563,
   1, 406, 564],
  [1, 9, 558],
  [1, 9, 561],
  [1, 9, 565],
  [e[59], 566,
   0, 542],
  [1, 293, 567],
  [1, 9, 565],
  ["[", 569],
  [1, 9, 570],
  [e[44], 571,
   /^(?:\&|\=|this|\])/, -1],
  [1, 9, 570],
  ["(", 573],
  [1, 9, 574],
  [1, 200, 575,
   0, 575],
  [1, 9, 576],
  [")", -1],
  ["&", 578,
   "=", 579,
   3, "keyword", e[50], 579,
   0, -1],
  [1, 9, 580],
  [1, 9, 581],
  [1, 138, 579,
   0, 579],
  [",", 582,
   0, -1],
  [1, 9, 583],
  ["&", 584,
   "=", 585,
   3, "keyword", e[50], 585],
  [1, 9, 586],
  [1, 9, 581],
  [1, 138, 585,
   0, 585],
  [1, 216, 588,
   0, -1],
  [1, 9, 589],
  [1, 226, 590,
   0, 591],
  [1, 9, 592],
  [1, 9, 593],
  [2, 437, 591, {"name":"ParamList"},
   0, 591],
  [",", 594,
   0, -1],
  [1, 9, 595],
  [1, 216, 596],
  [1, 9, 597],
  [1, 226, 598,
   0, 599],
  [1, 9, 600],
  [1, 9, 593],
  [2, 437, 599, {"name":"ParamList"},
   0, 599],
  [1, 636, 602,
   0, -1],
  [1, 9, 603],
  [",", 604,
   0, -1],
  [1, 9, 605],
  [1, 636, 606],
  [1, 9, 603],
  [/^(?!\}|\*\/)/, 608,
   0, -1],
  ["{", 609,
   /^[^]/, 607],
  [1, 607, 610],
  [/^\}?/, 607],
  [3, "keyword", e[31], 612,
   3, "keyword", e[32], 612,
   3, "keyword", e[33], 612,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 615,
   1, 216, 613],
  [1, 9, 611],
  [1, 9, 614],
  [1, 647, 615],
  [1, 9, 616],
  [2, 238, -1, {"name":"FunctionDef"},
   1, 460, 617,
   ":", 618,
   "[", 619,
   0, 617],
  [1, 9, 620],
  [1, 9, 621],
  [1, 9, 622],
  [";", -1],
  [3, "number", e[26], 617],
  [3, "number", e[26], 623,
   0, 623],
  [1, 9, 624],
  ["]", 617],
  [3, "keyword", e[30], 626,
   0, 628],
  [1, 9, 627],
  [2, 288, 628, {"name":"TemplateArgs"}],
  [1, 9, 629],
  [3, "keyword", e[24], 630,
   3, "keyword", e[19], 630],
  [1, 9, 631],
  [3, "type def", e[20], 632],
  [1, 9, 633],
  [3, "operator", "=", 634,
   0, -1],
  [1, 9, 635],
  [1, 138, -1,
   3, "number", e[26], -1],
  [2, 503, 637, {"name":"fieldName","token":"property"}],
  [1, 9, 638],
  ["(", 639,
   "{", 640],
  [1, 9, 641],
  [1, 9, 642],
  [1, 518, 643],
  [1, 518, 644],
  [1, 9, 645],
  [1, 9, 646],
  [")", -1],
  ["}", -1],
  [0, 648,
   "(", 655],
  [e[60], 649,
   1, 504, 650],
  [1, 9, 648],
  [1, 9, 651],
  ["[", 652,
   0, -1],
  [1, 9, 653],
  ["]", 654],
  [1, 9, 651],
  [1, 9, 656],
  [1, 647, 657],
  [1, 9, 658],
  [")", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
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

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
