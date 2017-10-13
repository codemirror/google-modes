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
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[47], -1,
   3, "operator", e[43], -1,
   2, 167, -1, {"name":"comment","token":"comment"},
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
   2, 167, 9, {"name":"comment","token":"comment"},
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
   2, 173, -1, {"name":"Template"},
   [7, "constructorAhead"], 77,
   0, 80,
   3, "keyword", e[7], 88,
   3, "keyword", e[8], 92,
   3, "keyword", e[9], 93,
   3, "keyword", e[10], 94,
   3, "keyword", e[11], 118,
   3, "keyword", e[12], 126,
   2, 186, -1, {"name":"Block"},
   3, "keyword", e[13], 130,
   3, "keyword", e[14], 132,
   3, "keyword", e[15], 136,
   3, "keyword", e[1], 140,
   2, 190, 146, {"name":"DeclType"},
   3, "keyword", e[16], 148,
   3, "keyword", e[17], 149,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 200]], 148,
   ";", -1,
   1, 201, 154],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [1, 240, 19],
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
   2, 244, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 250, 24],
  [1, 9, 33],
  [1, 240, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 186, -1, {"name":"Block"}],
  [1, 9, 37],
  [1, 156, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 201, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 186, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 250, 52],
  [1, 9, 53],
  [1, 258, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 186, 58, {"name":"Block"}],
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
  [1, 250, 71],
  [1, 156, 71],
  [1, 9, 72],
  ["=", 73,
   0, 74],
  [1, 9, 75],
  [1, 9, 76],
  [1, 250, 74],
  [";", -1],
  [1, 240, 78],
  [1, 9, 79],
  [2, 265, -1, {"name":"FunctionDef"}],
  [3, "meta", e[25], 81],
  [1, 9, 82],
  [0, 80,
   1, 291, 83,
   2, 298, 84, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 85],
  [1, 9, 86],
  [1, 299, -1],
  [1, 309, 87,
   ";", -1],
  [1, 9, 86],
  [1, 9, 89],
  [1, 240, 90,
   0, 90],
  [1, 9, 91],
  [2, 324, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 95],
  [1, 9, 96],
  [1, 9, 97],
  ["(", 98],
  [2, 342, 99, {"name":"CondExpr"}],
  [2, 11, 100, {"name":"Statement"}],
  [1, 9, 101],
  [1, 9, 102],
  [1, 9, 103],
  [2, 11, 104, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 105],
  [1, 9, 106],
  [1, 9, 107],
  [1, 201, 108,
   0, 108],
  [2, 342, 109, {"name":"CondExpr"}],
  [1, 9, 110],
  [1, 9, 111],
  [";", 112],
  [";", -1],
  [1, 9, 113],
  [1, 201, 114,
   0, 114],
  [1, 9, 115],
  [")", 116],
  [1, 9, 117],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 119],
  [2, 342, 120, {"name":"CondExpr"}],
  [1, 9, 121],
  [2, 11, 122, {"name":"Statement"}],
  [1, 9, 123],
  [3, "keyword", e[24], 124,
   0, -1],
  [1, 9, 125],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 127],
  [2, 342, 128, {"name":"CondExpr"}],
  [1, 9, 129],
  [2, 186, -1, {"name":"Block"}],
  [1, 9, 131],
  [";", -1],
  [1, 9, 133],
  [e[46], 134],
  [1, 9, 135],
  [";", -1],
  [1, 9, 137],
  [1, 201, 138,
   0, 138],
  [1, 9, 139],
  [";", -1],
  [1, 9, 141],
  [1, 240, 142,
   0, 142],
  [1, 9, 143],
  [2, 347, 144, {"name":"BlockOf"},
   0, 144],
  [1, 9, 145],
  [";", -1],
  [1, 9, 147],
  [1, 299, -1],
  [1, 9, 150],
  [1, 9, 151],
  [":", 152],
  [1, 201, 148],
  [1, 9, 153],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 155],
  [";", -1],
  [0, 157,
   3, "type", e[27], -1,
   3, "variable", e[26], 160,
   2, 369, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[25], 158],
  [0, 157,
   3, "variable qualified", e[26], 159,
   3, "type", e[27], -1,
   2, 298, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 370, -1, {"name":"TemplateArgs"}],
  [2, 370, -1, {"name":"TemplateArgs"}],
  ["R\"(", 162,
   /^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 163],
  [[0, /^(?!\)\")/, /^[^]/], 162,
   ")\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 164],
  ["\\", 165,
   [0, /^(?!\")/, /^[^]/], 164,
   "\"", -1],
  [/^[^]/, 164],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 168,
   "/*", 172,
   /^\/\/.*/, -1],
  [0, 169,
   2, 375, 168, {"name":"doccomment.braced"},
   0, 170],
  [e[52], 171],
  [2, 383, 170, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 169,
   0, 168],
  [[0, /^(?!\*\/)/, /^[^]/], 172,
   "*/", -1],
  [3, "keyword", e[28], 174,
   0, 174],
  [1, 9, 175],
  [3, "keyword", e[29], 176],
  [1, 9, 177],
  ["<", 178],
  [1, 9, 179],
  [1, 391, 180],
  [1, 9, 181],
  [">", 182],
  [1, 9, 183],
  [1, 9, 184],
  [1, 9, 185],
  [2, 11, -1, {"name":"Statement"}],
  ["{", 187],
  [1, 9, 188],
  [2, 11, 189, {"name":"Statement"},
   "}", -1],
  [1, 9, 188],
  [0, 191,
   0, 192,
   1, 291, -1],
  [3, "keyword", e[30], 193,
   3, "keyword", e[31], 193,
   3, "keyword", e[32], 193],
  [3, "type", e[33], 194],
  [1, 9, 195],
  [1, 9, 196],
  [0, 191,
   3, "keyword", e[34], 197,
   1, 409, 197],
  [0, 192,
   3, "type", e[35], 197,
   0, 197],
  [1, 9, 198],
  [1, 415, 199,
   0, -1],
  [1, 9, 198],
  [e[48], 200,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[36], 202,
   3, "keyword", e[37], 203,
   2, 166, 204, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[38], 204,
   3, "keyword", e[39], 237,
   "[", 217,
   3, "keyword", e[40], 218,
   2, 422, 219, {"name":"ParenExpr"},
   3, "atom", e[41], 237,
   3, "number", e[19], 237,
   2, 161, 237, {"name":"string","token":"string"},
   2, 427, 237, {"name":"BlockOf"},
   1, 156, 237],
  [1, 9, 205],
  [1, 9, 206],
  [1, 9, 201],
  ["[", 207,
   0, 204],
  ["[", 208,
   0, 209],
  [1, 9, 210],
  [1, 9, 211],
  [1, 9, 212],
  ["]", 204],
  ["]", 209],
  ["(", 213,
   0, 204],
  [1, 9, 214],
  [1, 201, 215],
  [1, 9, 216],
  [")", 204],
  [1, 9, 220],
  [1, 9, 221],
  [1, 9, 222],
  [1, 437, 223],
  ["<", 224],
  [1, 201, 237,
   0, 237],
  [1, 9, 225],
  [1, 9, 226],
  ["]", 227],
  [1, 250, 228],
  [1, 9, 229],
  [1, 9, 230],
  [2, 265, 237, {"name":"FunctionDef"}],
  [">", 231],
  [1, 9, 232],
  ["(", 233],
  [1, 9, 234],
  [1, 201, 235],
  [1, 9, 236],
  [")", 237],
  [1, 9, 238],
  [1, 309, 239,
   0, -1],
  [1, 9, 238],
  [3, "keyword", e[42], 241,
   0, 242,
   3, "def", e[44], -1],
  [3, "operator", e[43], -1,
   2, 166, -1, {"name":"prefixOp","token":"operator"}],
  [3, "meta", e[25], 243],
  [0, 242,
   3, "qualified def", e[44], -1],
  ["{", 245],
  [1, 9, 246],
  [3, "keyword", e[21], 247,
   2, 447, 248, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 249],
  [1, 9, 246],
  [":", 248],
  [3, "keyword", e[23], 251,
   0, 253],
  [1, 9, 252],
  [1, 250, -1],
  [3, "keyword", e[30], 254,
   3, "keyword", e[31], 254,
   3, "keyword", e[32], 254,
   3, "keyword", e[34], 255,
   1, 409, 255],
  [1, 9, 253],
  [1, 9, 256],
  [1, 415, 257,
   0, -1],
  [1, 9, 256],
  [0, 259,
   "(", 261],
  [/^(?:\*|\&\&|\&)/, 260,
   1, 240, -1],
  [1, 9, 259],
  [1, 9, 262],
  [1, 258, 263],
  [1, 9, 264],
  [")", -1],
  [2, 455, 266, {"name":"ParamList"}],
  [1, 9, 267],
  [3, "keyword", e[32], 268,
   /^(?:\&|\&\&)?/, 269],
  [1, 9, 267],
  [1, 9, 270],
  [3, "keyword", e[45], 271,
   3, "keyword", e[3], 272,
   0, 283],
  [1, 9, 273],
  [1, 9, 274],
  ["(", 275,
   0, 283],
  ["(", 276],
  [1, 9, 277],
  [1, 9, 278],
  [1, 201, 279],
  [1, 460, 280],
  [1, 9, 281],
  [1, 9, 282],
  [")", 283],
  [")", 283],
  [1, 9, 284],
  ["->", 285,
   0, 287],
  [1, 9, 286],
  [1, 250, 287],
  [1, 9, 288],
  [2, 466, 289, {"name":"InitializerList"},
   0, 289],
  [1, 9, 290],
  [";", -1,
   2, 186, -1, {"name":"Block"}],
  [3, "keyword", e[34], 295,
   3, "keyword", e[23], 292,
   /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 293],
  [1, 9, 294],
  [3, "type", [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 469]], 295],
  [3, "meta", e[25], 294,
   3, "type", e[46], 295],
  [1, 9, 296],
  [1, 415, 297,
   0, -1],
  [1, 9, 296],
  [2, 369, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 258, 300],
  [1, 9, 301],
  [2, 265, -1, {"name":"FunctionDef"},
   1, 473, 302,
   0, 302],
  [1, 9, 303],
  [",", 304,
   ";", -1],
  [1, 9, 305],
  [1, 240, 306],
  [1, 9, 307],
  [1, 473, 308,
   0, 308],
  [1, 9, 303],
  [2, 427, -1, {"name":"BlockOf"},
   2, 476, -1, {"name":"ArgList"},
   "[", 310,
   3, "operator", e[47], -1,
   /^(?:\-\>|\.)/, 314,
   3, "operator", e[43], 316,
   "?", 318],
  [1, 9, 311],
  [1, 201, 312],
  [1, 9, 313],
  ["]", -1],
  [1, 9, 315],
  [2, 481, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 317],
  [1, 201, -1],
  [1, 9, 319],
  [1, 201, 320],
  [1, 9, 321],
  [":", 322],
  [1, 9, 323],
  [1, 201, -1],
  ["{", 325],
  [1, 9, 326],
  [1, 240, 327,
   0, 340],
  [1, 9, 328],
  [3, "operator", "=", 329,
   0, 330],
  [1, 9, 331],
  [1, 9, 332],
  [1, 201, 330],
  [",", 333,
   0, 340],
  [1, 9, 334],
  [1, 240, 335],
  [1, 9, 336],
  [3, "operator", "=", 337,
   0, 338],
  [1, 9, 339],
  [1, 9, 332],
  [1, 201, 338],
  [1, 9, 341],
  ["}", -1],
  ["(", 343],
  [1, 9, 344],
  [1, 201, 345,
   0, 345],
  [1, 9, 346],
  [")", -1],
  ["{", 348],
  [1, 9, 349],
  [1, 250, 350,
   0, 367],
  [1, 9, 351],
  [2, 481, 352, {"name":"fieldName","token":"property"},
   0, 352],
  [1, 9, 353],
  [":", 354,
   0, 355],
  [1, 9, 356],
  [1, 9, 357],
  [3, "number", e[19], 355],
  [";", 358,
   0, 367],
  [1, 9, 359],
  [1, 250, 360],
  [1, 9, 361],
  [2, 481, 362, {"name":"fieldName","token":"property"},
   0, 362],
  [1, 9, 363],
  [":", 364,
   0, 365],
  [1, 9, 366],
  [1, 9, 357],
  [3, "number", e[19], 365],
  [1, 9, 368],
  ["}", -1],
  [3, "callee", e[53], -1,
   e[46], -1],
  ["<", 371],
  [1, 9, 372],
  [1, 482, 373],
  [1, 9, 374],
  [">", -1],
  ["{", 376],
  [3, "tag", e[49], 377,
   3, "tag", e[50], 378,
   2, 496, 382, {"name":"doccomment.type","token":"type"}],
  [e[48], 377,
   "{", 379,
   0, 378],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 378,
   0, 382],
  [2, 496, 380, {"name":"doccomment.type","token":"type"}],
  ["}", 381],
  [e[48], 381,
   3, "def", e[51], 378,
   0, 378],
  ["}", -1],
  [3, "tag", e[49], 384,
   3, "tag", e[50], 388],
  [e[48], 384,
   "{", 385,
   0, 388],
  [2, 496, 386, {"name":"doccomment.type","token":"type"}],
  ["}", 387],
  [e[48], 387,
   3, "def", e[51], 388,
   0, 388],
  [0, 389,
   2, 375, 388, {"name":"doccomment.braced"},
   0, -1],
  [e[52], 390],
  [0, 389,
   0, 388],
  [1, 497, 392,
   0, 393,
   0, -1],
  [1, 9, 394],
  [3, "keyword", e[30], 395,
   3, "keyword", e[31], 395,
   1, 250, 396],
  [",", 397,
   0, -1],
  [1, 9, 393],
  [1, 9, 398],
  [1, 9, 399],
  [1, 240, 400],
  [1, 497, 401,
   0, 402],
  [1, 9, 403],
  [1, 9, 394],
  [3, "keyword", e[30], 404,
   3, "keyword", e[31], 404,
   1, 250, 405],
  [1, 473, 392,
   0, 392],
  [1, 9, 402],
  [1, 9, 406],
  [1, 240, 407],
  [1, 9, 408],
  [1, 473, 401,
   0, 401],
  [0, 410,
   3, "keyword", e[23], 413,
   0, 414],
  [3, "type", e[33], 411],
  [0, 410,
   1, 9, 412,
   0, -1],
  [3, "type", e[35], -1],
  [1, 9, 414],
  [3, "meta", e[25], 414,
   3, "type", e[46], -1],
  [2, 370, -1, {"name":"TemplateArgs"},
   "::", 416,
   "[", 418,
   /^[\*\&]/, -1,
   3, "keyword", e[32], -1],
  [1, 9, 417],
  [1, 250, -1],
  [1, 9, 419],
  [3, "number", e[19], 420,
   0, 420],
  [1, 9, 421],
  ["]", -1],
  ["(", 423],
  [1, 9, 424],
  [1, 201, 425,
   0, 425],
  [1, 9, 426],
  [")", -1],
  ["{", 428],
  [1, 9, 429],
  [1, 201, 430,
   0, 435],
  [1, 9, 431],
  [",", 432,
   0, 435],
  [1, 9, 433],
  [1, 201, 434],
  [1, 9, 431],
  [1, 9, 436],
  ["}", -1],
  ["&", 438,
   "=", 439,
   3, "keyword", e[39], 439,
   0, -1],
  [1, 9, 440],
  [1, 9, 441],
  [1, 156, 439,
   0, 439],
  [",", 442,
   0, -1],
  [1, 9, 443],
  ["&", 444,
   "=", 445,
   3, "keyword", e[39], 445],
  [1, 9, 446],
  [1, 9, 441],
  [1, 156, 445,
   0, 445],
  [3, "keyword", e[30], 448,
   3, "keyword", e[31], 448,
   3, "keyword", e[32], 448,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 451,
   1, 250, 449],
  [1, 9, 447],
  [1, 9, 450],
  [1, 258, 451],
  [1, 9, 452],
  [1, 473, 453,
   0, 453,
   2, 265, -1, {"name":"FunctionDef"}],
  [1, 9, 454],
  [";", -1],
  ["(", 456],
  [1, 9, 457],
  [1, 508, 458],
  [1, 9, 459],
  [")", -1],
  [1, 250, 461,
   0, -1],
  [1, 9, 462],
  [",", 463,
   0, -1],
  [1, 9, 464],
  [1, 250, 465],
  [1, 9, 462],
  [":", 467],
  [1, 9, 468],
  [1, 522, -1],
  [/^(?![a-zA-Z¡-￿_0-9])/, 470],
  [1, 9, 471],
  [1, 415, 471,
   1, 9, 472],
  [/^[a-zA-Z¡-￿_]/, -1],
  [3, "operator", "=", 474,
   2, 427, -1, {"name":"BlockOf"}],
  [1, 9, 475],
  [1, 201, -1],
  ["(", 477],
  [1, 9, 478],
  [1, 528, 479],
  [1, 9, 480],
  [")", -1],
  [3, "callee", e[53], -1,
   e[46], -1],
  [1, 497, 483,
   0, 484,
   3, "number", e[19], 483,
   0, -1],
  [1, 9, 485],
  [3, "keyword", e[30], 486,
   3, "keyword", e[31], 486,
   1, 250, 487],
  [",", 488,
   0, -1],
  [1, 9, 484],
  [1, 9, 489],
  [1, 9, 490],
  [1, 473, 483,
   0, 483],
  [1, 497, 491,
   0, 492,
   3, "number", e[19], 491],
  [1, 9, 485],
  [3, "keyword", e[30], 493,
   3, "keyword", e[31], 493,
   1, 250, 494],
  [1, 9, 492],
  [1, 9, 495],
  [1, 473, 491,
   0, 491],
  [1, 534, -1],
  [3, "keyword", e[29], 498,
   0, 500],
  [1, 9, 499],
  [2, 370, 500, {"name":"TemplateArgs"}],
  [1, 9, 501],
  [3, "keyword", e[0], 502,
   3, "keyword", e[23], 502],
  [1, 9, 503],
  [3, "type def", e[46], 504],
  [1, 9, 505],
  [3, "operator", "=", 506,
   0, -1],
  [1, 9, 507],
  [1, 156, -1,
   3, "number", e[19], -1],
  [1, 250, 509,
   0, -1],
  [1, 9, 510],
  [1, 258, 511,
   0, 512],
  [1, 9, 513],
  [1, 9, 514],
  [2, 455, 512, {"name":"ParamList"},
   0, 512],
  [",", 515,
   0, -1],
  [1, 9, 516],
  [1, 250, 517],
  [1, 9, 518],
  [1, 258, 519,
   0, 520],
  [1, 9, 521],
  [1, 9, 514],
  [2, 455, 520, {"name":"ParamList"},
   0, 520],
  [1, 538, 523,
   0, -1],
  [1, 9, 524],
  [",", 525,
   0, -1],
  [1, 9, 526],
  [1, 538, 527],
  [1, 9, 524],
  [1, 201, 529,
   0, -1],
  [1, 9, 530],
  [",", 531,
   0, -1],
  [1, 9, 532],
  [1, 201, 533],
  [1, 9, 530],
  [/^(?!\}|\*\/)/, 535,
   0, -1],
  ["{", 536,
   /^[^]/, 534],
  [1, 534, 537],
  [/^\}?/, 534],
  [2, 481, 539, {"name":"fieldName","token":"property"}],
  [1, 9, 540],
  ["(", 541,
   "{", 542],
  [1, 9, 543],
  [1, 9, 544],
  [1, 528, 545],
  [1, 528, 546],
  [1, 9, 547],
  [1, 9, 548],
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
