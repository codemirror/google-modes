(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^class(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\:\:|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\:\:)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\<)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[7], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[34], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "type", e[33], -1,
   3, "type", e[35], -1,
   3, "keyword", e[32], -1,
   3, "atom", e[41], -1,
   1, 156, -1,
   3, "number", e[19], -1,
   2, 161, -1, {"name":"string","token":"string"},
   2, 165, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[47], -1,
   3, "operator", e[43], -1,
   2, 166, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[2], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[36], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[45], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[42], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[40], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 166, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 12,
   3, "keyword", e[2], 32,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 44,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 65,
   2, 172, -1, {"name":"Template"},
   [7, "constructorAhead"], 77,
   0, 80,
   3, "keyword", e[7], 88,
   3, "keyword", e[8], 92,
   3, "keyword", e[9], 93,
   3, "keyword", e[10], 94,
   3, "keyword", e[11], 118,
   3, "keyword", e[12], 126,
   2, 185, -1, {"name":"Block"},
   3, "keyword", e[13], 130,
   3, "keyword", e[14], 132,
   3, "keyword", e[15], 136,
   3, "keyword", e[1], 140,
   2, 189, 146, {"name":"DeclType"},
   3, "keyword", e[16], 148,
   3, "keyword", e[17], 149,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 199]], 148,
   ";", -1,
   1, 200, 154],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [1, 239, 19],
  [1, 9, 20],
  [1, 9, 21],
  [3, "number", e[19], 22],
  [":", 23,
   0, 24],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [")", 15],
  [3, "keyword", e[20], 28,
   0, 28],
  [";", -1,
   2, 243, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 249, 24],
  [1, 9, 33],
  [1, 239, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 185, -1, {"name":"Block"}],
  [1, 9, 37],
  [1, 156, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 200, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 185, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 249, 52],
  [1, 9, 53],
  [1, 257, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 185, 58, {"name":"Block"}],
  [1, 9, 47],
  [1, 9, 60],
  ["{", 61],
  [1, 9, 62],
  [2, 161, 63, {"name":"string","token":"string"}],
  [1, 9, 64],
  ["}", -1],
  [1, 9, 66],
  [3, "keyword", e[23], 67,
   3, "keyword", e[2], 68,
   0, 68],
  [1, 9, 69],
  [1, 9, 70],
  [1, 249, 71],
  [1, 156, 71],
  [1, 9, 72],
  ["=", 73,
   0, 74],
  [1, 9, 75],
  [1, 9, 76],
  [1, 249, 74],
  [";", -1],
  [1, 239, 78],
  [1, 9, 79],
  [2, 264, -1, {"name":"FunctionDef"}],
  [3, "meta", e[25], 81],
  [1, 9, 82],
  [0, 80,
   1, 290, 83,
   2, 297, 84, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 85],
  [1, 9, 86],
  [1, 298, -1],
  [1, 308, 87,
   ";", -1],
  [1, 9, 86],
  [1, 9, 89],
  [1, 239, 90,
   0, 90],
  [1, 9, 91],
  [2, 323, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 95],
  [1, 9, 96],
  [1, 9, 97],
  ["(", 98],
  [2, 341, 99, {"name":"CondExpr"}],
  [2, 11, 100, {"name":"Statement"}],
  [1, 9, 101],
  [1, 9, 102],
  [1, 9, 103],
  [2, 11, 104, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 105],
  [1, 9, 106],
  [1, 9, 107],
  [1, 200, 108,
   0, 108],
  [2, 341, 109, {"name":"CondExpr"}],
  [1, 9, 110],
  [1, 9, 111],
  [";", 112],
  [";", -1],
  [1, 9, 113],
  [1, 200, 114,
   0, 114],
  [1, 9, 115],
  [")", 116],
  [1, 9, 117],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 119],
  [2, 341, 120, {"name":"CondExpr"}],
  [1, 9, 121],
  [2, 11, 122, {"name":"Statement"}],
  [1, 9, 123],
  [3, "keyword", e[24], 124,
   0, -1],
  [1, 9, 125],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 127],
  [2, 341, 128, {"name":"CondExpr"}],
  [1, 9, 129],
  [2, 185, -1, {"name":"Block"}],
  [1, 9, 131],
  [";", -1],
  [1, 9, 133],
  [e[46], 134],
  [1, 9, 135],
  [";", -1],
  [1, 9, 137],
  [1, 200, 138,
   0, 138],
  [1, 9, 139],
  [";", -1],
  [1, 9, 141],
  [1, 239, 142,
   0, 142],
  [1, 9, 143],
  [2, 346, 144, {"name":"BlockOf"},
   0, 144],
  [1, 9, 145],
  [";", -1],
  [1, 9, 147],
  [1, 298, -1],
  [1, 9, 150],
  [1, 9, 151],
  [":", 152],
  [1, 200, 148],
  [1, 9, 153],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 155],
  [";", -1],
  [0, 157,
   3, "type", e[27], -1,
   3, "variable", e[26], 160,
   2, 368, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[25], 158],
  [0, 157,
   3, "variable qualified", e[26], 159,
   3, "type", e[27], -1,
   2, 297, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 369, -1, {"name":"TemplateArgs"}],
  [2, 369, -1, {"name":"TemplateArgs"}],
  [/^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 162],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 163],
  ["\\", 164,
   [0, /^(?!\")/, /^[^]/], 163,
   "\"", -1],
  [/^[^]/, 163],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 167,
   "/*", 171,
   /^\/\/.*/, -1],
  [0, 168,
   2, 374, 167, {"name":"doccomment.braced"},
   0, 169],
  [e[52], 170],
  [2, 382, 169, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 168,
   0, 167],
  [[0, /^(?!\*\/)/, /^[^]/], 171,
   "*/", -1],
  [3, "keyword", e[28], 173,
   0, 173],
  [1, 9, 174],
  [3, "keyword", e[29], 175],
  [1, 9, 176],
  ["<", 177],
  [1, 9, 178],
  [1, 390, 179],
  [1, 9, 180],
  [">", 181],
  [1, 9, 182],
  [1, 9, 183],
  [1, 9, 184],
  [2, 11, -1, {"name":"Statement"}],
  ["{", 186],
  [1, 9, 187],
  [2, 11, 188, {"name":"Statement"},
   "}", -1],
  [1, 9, 187],
  [0, 190,
   0, 191,
   1, 290, -1],
  [3, "keyword", e[30], 192,
   3, "keyword", e[31], 192,
   3, "keyword", e[32], 192],
  [3, "type", e[33], 193],
  [1, 9, 194],
  [1, 9, 195],
  [0, 190,
   3, "keyword", e[34], 196,
   1, 408, 196],
  [0, 191,
   3, "type", e[35], 196,
   0, 196],
  [1, 9, 197],
  [1, 414, 198,
   0, -1],
  [1, 9, 197],
  [e[48], 199,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[36], 201,
   3, "keyword", e[37], 202,
   2, 165, 203, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[38], 203,
   3, "keyword", e[39], 236,
   "[", 216,
   3, "keyword", e[40], 217,
   2, 421, 218, {"name":"ParenExpr"},
   3, "atom", e[41], 236,
   3, "number", e[19], 236,
   2, 161, 236, {"name":"string","token":"string"},
   2, 426, 236, {"name":"BlockOf"},
   1, 156, 236],
  [1, 9, 204],
  [1, 9, 205],
  [1, 9, 200],
  ["[", 206,
   0, 203],
  ["[", 207,
   0, 208],
  [1, 9, 209],
  [1, 9, 210],
  [1, 9, 211],
  ["]", 203],
  ["]", 208],
  ["(", 212,
   0, 203],
  [1, 9, 213],
  [1, 200, 214],
  [1, 9, 215],
  [")", 203],
  [1, 9, 219],
  [1, 9, 220],
  [1, 9, 221],
  [1, 436, 222],
  ["<", 223],
  [1, 200, 236,
   0, 236],
  [1, 9, 224],
  [1, 9, 225],
  ["]", 226],
  [1, 249, 227],
  [1, 9, 228],
  [1, 9, 229],
  [2, 264, 236, {"name":"FunctionDef"}],
  [">", 230],
  [1, 9, 231],
  ["(", 232],
  [1, 9, 233],
  [1, 200, 234],
  [1, 9, 235],
  [")", 236],
  [1, 9, 237],
  [1, 308, 238,
   0, -1],
  [1, 9, 237],
  [3, "keyword", e[42], 240,
   0, 241,
   3, "def", e[44], -1],
  [3, "operator", e[43], -1,
   2, 165, -1, {"name":"prefixOp","token":"operator"}],
  [3, "meta", e[25], 242],
  [0, 241,
   3, "qualified def", e[44], -1],
  ["{", 244],
  [1, 9, 245],
  [3, "keyword", e[21], 246,
   2, 446, 247, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 248],
  [1, 9, 245],
  [":", 247],
  [3, "keyword", e[23], 250,
   0, 252],
  [1, 9, 251],
  [1, 249, -1],
  [3, "keyword", e[30], 253,
   3, "keyword", e[31], 253,
   3, "keyword", e[32], 253,
   3, "keyword", e[34], 254,
   1, 408, 254],
  [1, 9, 252],
  [1, 9, 255],
  [1, 414, 256,
   0, -1],
  [1, 9, 255],
  [0, 258,
   "(", 260],
  [/^(?:\*|\&\&|\&)/, 259,
   1, 239, -1],
  [1, 9, 258],
  [1, 9, 261],
  [1, 257, 262],
  [1, 9, 263],
  [")", -1],
  [2, 454, 265, {"name":"ParamList"}],
  [1, 9, 266],
  [3, "keyword", e[32], 267,
   /^(?:\&|\&\&)?/, 268],
  [1, 9, 266],
  [1, 9, 269],
  [3, "keyword", e[45], 270,
   3, "keyword", e[3], 271,
   0, 282],
  [1, 9, 272],
  [1, 9, 273],
  ["(", 274,
   0, 282],
  ["(", 275],
  [1, 9, 276],
  [1, 9, 277],
  [1, 200, 278],
  [1, 459, 279],
  [1, 9, 280],
  [1, 9, 281],
  [")", 282],
  [")", 282],
  [1, 9, 283],
  ["->", 284,
   0, 286],
  [1, 9, 285],
  [1, 249, 286],
  [1, 9, 287],
  [2, 465, 288, {"name":"InitializerList"},
   0, 288],
  [1, 9, 289],
  [";", -1,
   2, 185, -1, {"name":"Block"}],
  [3, "keyword", e[34], 294,
   3, "keyword", e[23], 291,
   /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 292],
  [1, 9, 293],
  [3, "type", [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 468]], 294],
  [3, "meta", e[25], 293,
   3, "type", e[46], 294],
  [1, 9, 295],
  [1, 414, 296,
   0, -1],
  [1, 9, 295],
  [2, 368, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 257, 299],
  [1, 9, 300],
  [2, 264, -1, {"name":"FunctionDef"},
   1, 472, 301,
   0, 301],
  [1, 9, 302],
  [",", 303,
   ";", -1],
  [1, 9, 304],
  [1, 239, 305],
  [1, 9, 306],
  [1, 472, 307,
   0, 307],
  [1, 9, 302],
  [2, 426, -1, {"name":"BlockOf"},
   2, 475, -1, {"name":"ArgList"},
   "[", 309,
   3, "operator", e[47], -1,
   /^(?:\-\>|\.)/, 313,
   3, "operator", e[43], 315,
   "?", 317],
  [1, 9, 310],
  [1, 200, 311],
  [1, 9, 312],
  ["]", -1],
  [1, 9, 314],
  [2, 480, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 316],
  [1, 200, -1],
  [1, 9, 318],
  [1, 200, 319],
  [1, 9, 320],
  [":", 321],
  [1, 9, 322],
  [1, 200, -1],
  ["{", 324],
  [1, 9, 325],
  [1, 239, 326,
   0, 339],
  [1, 9, 327],
  [3, "operator", "=", 328,
   0, 329],
  [1, 9, 330],
  [1, 9, 331],
  [1, 200, 329],
  [",", 332,
   0, 339],
  [1, 9, 333],
  [1, 239, 334],
  [1, 9, 335],
  [3, "operator", "=", 336,
   0, 337],
  [1, 9, 338],
  [1, 9, 331],
  [1, 200, 337],
  [1, 9, 340],
  ["}", -1],
  ["(", 342],
  [1, 9, 343],
  [1, 200, 344,
   0, 344],
  [1, 9, 345],
  [")", -1],
  ["{", 347],
  [1, 9, 348],
  [1, 249, 349,
   0, 366],
  [1, 9, 350],
  [2, 480, 351, {"name":"fieldName","token":"property"},
   0, 351],
  [1, 9, 352],
  [":", 353,
   0, 354],
  [1, 9, 355],
  [1, 9, 356],
  [3, "number", e[19], 354],
  [";", 357,
   0, 366],
  [1, 9, 358],
  [1, 249, 359],
  [1, 9, 360],
  [2, 480, 361, {"name":"fieldName","token":"property"},
   0, 361],
  [1, 9, 362],
  [":", 363,
   0, 364],
  [1, 9, 365],
  [1, 9, 356],
  [3, "number", e[19], 364],
  [1, 9, 367],
  ["}", -1],
  [3, "callee", e[53], -1,
   e[46], -1],
  ["<", 370],
  [1, 9, 371],
  [1, 481, 372],
  [1, 9, 373],
  [">", -1],
  ["{", 375],
  [3, "tag", e[49], 376,
   3, "tag", e[50], 377,
   2, 495, 381, {"name":"doccomment.type","token":"type"}],
  [e[48], 376,
   "{", 378,
   0, 377],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 377,
   0, 381],
  [2, 495, 379, {"name":"doccomment.type","token":"type"}],
  ["}", 380],
  [e[48], 380,
   3, "def", e[51], 377,
   0, 377],
  ["}", -1],
  [3, "tag", e[49], 383,
   3, "tag", e[50], 387],
  [e[48], 383,
   "{", 384,
   0, 387],
  [2, 495, 385, {"name":"doccomment.type","token":"type"}],
  ["}", 386],
  [e[48], 386,
   3, "def", e[51], 387,
   0, 387],
  [0, 388,
   2, 374, 387, {"name":"doccomment.braced"},
   0, -1],
  [e[52], 389],
  [0, 388,
   0, 387],
  [1, 496, 391,
   0, 392,
   0, -1],
  [1, 9, 393],
  [3, "keyword", e[30], 394,
   3, "keyword", e[31], 394,
   1, 249, 395],
  [",", 396,
   0, -1],
  [1, 9, 392],
  [1, 9, 397],
  [1, 9, 398],
  [1, 239, 399],
  [1, 496, 400,
   0, 401],
  [1, 9, 402],
  [1, 9, 393],
  [3, "keyword", e[30], 403,
   3, "keyword", e[31], 403,
   1, 249, 404],
  [1, 472, 391,
   0, 391],
  [1, 9, 401],
  [1, 9, 405],
  [1, 239, 406],
  [1, 9, 407],
  [1, 472, 400,
   0, 400],
  [0, 409,
   3, "keyword", e[23], 412,
   0, 413],
  [3, "type", e[33], 410],
  [0, 409,
   1, 9, 411,
   0, -1],
  [3, "type", e[35], -1],
  [1, 9, 413],
  [3, "meta", e[25], 413,
   3, "type", e[46], -1],
  [2, 369, -1, {"name":"TemplateArgs"},
   "::", 415,
   "[", 417,
   /^[\*\&]/, -1,
   3, "keyword", e[32], -1],
  [1, 9, 416],
  [1, 249, -1],
  [1, 9, 418],
  [3, "number", e[19], 419,
   0, 419],
  [1, 9, 420],
  ["]", -1],
  ["(", 422],
  [1, 9, 423],
  [1, 200, 424,
   0, 424],
  [1, 9, 425],
  [")", -1],
  ["{", 427],
  [1, 9, 428],
  [1, 200, 429,
   0, 434],
  [1, 9, 430],
  [",", 431,
   0, 434],
  [1, 9, 432],
  [1, 200, 433],
  [1, 9, 430],
  [1, 9, 435],
  ["}", -1],
  ["&", 437,
   "=", 438,
   3, "keyword", e[39], 438,
   0, -1],
  [1, 9, 439],
  [1, 9, 440],
  [1, 156, 438,
   0, 438],
  [",", 441,
   0, -1],
  [1, 9, 442],
  ["&", 443,
   "=", 444,
   3, "keyword", e[39], 444],
  [1, 9, 445],
  [1, 9, 440],
  [1, 156, 444,
   0, 444],
  [3, "keyword", e[30], 447,
   3, "keyword", e[31], 447,
   3, "keyword", e[32], 447,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 450,
   1, 249, 448],
  [1, 9, 446],
  [1, 9, 449],
  [1, 257, 450],
  [1, 9, 451],
  [1, 472, 452,
   0, 452,
   2, 264, -1, {"name":"FunctionDef"}],
  [1, 9, 453],
  [";", -1],
  ["(", 455],
  [1, 9, 456],
  [1, 507, 457],
  [1, 9, 458],
  [")", -1],
  [1, 249, 460,
   0, -1],
  [1, 9, 461],
  [",", 462,
   0, -1],
  [1, 9, 463],
  [1, 249, 464],
  [1, 9, 461],
  [":", 466],
  [1, 9, 467],
  [1, 521, -1],
  [/^(?![a-zA-Z¡-￿_0-9])/, 469],
  [1, 9, 470],
  [1, 414, 470,
   1, 9, 471],
  [/^[a-zA-Z¡-￿_]/, -1],
  [3, "operator", "=", 473,
   2, 426, -1, {"name":"BlockOf"}],
  [1, 9, 474],
  [1, 200, -1],
  ["(", 476],
  [1, 9, 477],
  [1, 527, 478],
  [1, 9, 479],
  [")", -1],
  [3, "callee", e[53], -1,
   e[46], -1],
  [1, 496, 482,
   0, 483,
   3, "number", e[19], 482,
   0, -1],
  [1, 9, 484],
  [3, "keyword", e[30], 485,
   3, "keyword", e[31], 485,
   1, 249, 486],
  [",", 487,
   0, -1],
  [1, 9, 483],
  [1, 9, 488],
  [1, 9, 489],
  [1, 472, 482,
   0, 482],
  [1, 496, 490,
   0, 491,
   3, "number", e[19], 490],
  [1, 9, 484],
  [3, "keyword", e[30], 492,
   3, "keyword", e[31], 492,
   1, 249, 493],
  [1, 9, 491],
  [1, 9, 494],
  [1, 472, 490,
   0, 490],
  [1, 533, -1],
  [3, "keyword", e[29], 497,
   0, 499],
  [1, 9, 498],
  [2, 369, 499, {"name":"TemplateArgs"}],
  [1, 9, 500],
  [3, "keyword", e[0], 501,
   3, "keyword", e[23], 501],
  [1, 9, 502],
  [3, "type def", e[46], 503],
  [1, 9, 504],
  [3, "operator", "=", 505,
   0, -1],
  [1, 9, 506],
  [1, 156, -1,
   3, "number", e[19], -1],
  [1, 249, 508,
   0, -1],
  [1, 9, 509],
  [1, 257, 510,
   0, 511],
  [1, 9, 512],
  [1, 9, 513],
  [2, 454, 511, {"name":"ParamList"},
   0, 511],
  [",", 514,
   0, -1],
  [1, 9, 515],
  [1, 249, 516],
  [1, 9, 517],
  [1, 257, 518,
   0, 519],
  [1, 9, 520],
  [1, 9, 513],
  [2, 454, 519, {"name":"ParamList"},
   0, 519],
  [1, 537, 522,
   0, -1],
  [1, 9, 523],
  [",", 524,
   0, -1],
  [1, 9, 525],
  [1, 537, 526],
  [1, 9, 523],
  [1, 200, 528,
   0, -1],
  [1, 9, 529],
  [",", 530,
   0, -1],
  [1, 9, 531],
  [1, 200, 532],
  [1, 9, 529],
  [/^(?!\}|\*\/)/, 534,
   0, -1],
  ["{", 535,
   /^[^]/, 533],
  [1, 533, 536],
  [/^\}?/, 533],
  [2, 480, 538, {"name":"fieldName","token":"property"}],
  [1, 9, 539],
  ["(", 540,
   "{", 541],
  [1, 9, 542],
  [1, 9, 543],
  [1, 527, 544],
  [1, 527, 545],
  [1, 9, 546],
  [1, 9, 547],
  [")", -1],
  ["}", -1]
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

function isNamespace(context) {
  return context && context.name == "Statement" &&
    /^namespace\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
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

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead}
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
