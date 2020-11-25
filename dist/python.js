(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^print(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, [0, /^(?![\{\}])/, /^[^]/], /^(?![\{\}])./, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [7, "stillIndented"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=)/, [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], /^(?:\*|\*\*)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 9, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[24], -1,
     3, "atom", e[26], -1,
     3, "atom", e[27], -1,
     3, "keyword", e[32], -1,
     3, "builtin", e[30], -1,
     3, "builtin", e[7], -1,
     3, "operator", e[31], -1,
     3, "operator", e[23], -1,
     3, "number", e[25], -1,
     2, 53, -1, {"name":"string","token":"string"},
     1, 55, -1,
     3, "variable", e[10], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     "\\", 7,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 8,
     0, -1],
    ["\n", 6],
    ["\n", 6],
    [3, "keyword", e[0], 10,
     3, "keyword", e[1], 10,
     3, "keyword", e[2], 16,
     3, "keyword", e[3], 16,
     3, "keyword", e[4], 20,
     3, "keyword", e[5], 30,
     3, "keyword", e[6], 40,
     1, 67, -1,
     2, 80, 42, {"name":"Annotation","token":"meta"},
     3, "builtin", e[7], 46,
     1, 88, 48],
    [1, 6, 11],
    [1, 120, 12],
    [1, 6, 13],
    [":", 14],
    [1, 6, 15],
    [1, 127, -1],
    [1, 6, 17],
    [":", 18],
    [1, 6, 19],
    [1, 127, -1],
    [1, 6, 21],
    [1, 133, 22],
    [1, 6, 23],
    [3, "keyword", e[8], 24],
    [1, 6, 25],
    [1, 120, 26],
    [1, 6, 27],
    [":", 28],
    [1, 6, 29],
    [1, 127, -1],
    [1, 6, 31],
    [1, 120, 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [3, "keyword", e[9], 36,
     0, 33],
    [":", 37],
    [1, 6, 38],
    [1, 6, 39],
    [3, "def", e[10], 33],
    [1, 127, -1],
    [1, 6, 41],
    [1, 67, -1],
    [1, 6, 43],
    [2, 141, 44, {"name":"ArgList"},
     0, 44],
    [1, 6, 45],
    ["\n", -1],
    [1, 6, 47],
    [2, 141, -1, {"name":"ArgList"},
     1, 120, -1],
    [1, 6, 49],
    [";", 50,
     "\n", -1],
    [1, 6, 51],
    [1, 88, 52,
     0, 52],
    [1, 6, 49],
    [/^[uUrRbB]+(?=[\'\"])/, 54,
     1, 146, -1],
    [1, 146, -1],
    [3, "string", /^[uUrR]*[fF][uUrR]*(?=[\'\"])/, 56],
    [3, "string", "'''", 57,
     3, "string", "\"\"\"", 58,
     3, "string", "'", 59,
     3, "string", "\"", 60],
    [/^(?!\'\'\')/, 61,
     3, "string", "{{", 57,
     3, "string", "}}", 57,
     1, 155, 57,
     3, "string", "'''", -1],
    [/^(?!\"\"\")/, 62,
     3, "string", "{{", 58,
     3, "string", "}}", 58,
     1, 155, 58,
     3, "string", "\"\"\"", -1],
    [3, "string", "\\", 63,
     /^(?!\')/, 64,
     3, "string", "{{", 59,
     3, "string", "}}", 59,
     1, 155, 59,
     3, "string", "'", -1],
    [3, "string", "\\", 65,
     /^(?!\")/, 66,
     3, "string", "{{", 60,
     3, "string", "}}", 60,
     1, 155, 60,
     3, "string", "\"", -1],
    [3, "string", e[11], 57],
    [3, "string", e[11], 58],
    [3, "string", e[11], 59],
    [3, "string", e[12], 59],
    [3, "string", e[11], 60],
    [3, "string", e[12], 60],
    [3, "keyword", e[13], 68,
     3, "keyword", e[14], 74,
     3, "keyword", e[15], 78],
    [1, 6, 69],
    [1, 163, 70],
    [1, 6, 71],
    [":", 72],
    [1, 6, 73],
    [1, 127, -1],
    [1, 6, 75],
    [3, "def", e[10], 76],
    [1, 6, 77],
    [2, 177, -1, {"name":"FuncDef"}],
    [1, 6, 79],
    [2, 186, -1, {"name":"ClassDef"}],
    ["@", 81],
    [1, 6, 82],
    [e[10], 83],
    [1, 6, 84],
    [".", 85,
     0, -1],
    [1, 6, 86],
    [e[10], 87],
    [1, 6, 84],
    [3, "keyword", e[16], -1,
     3, "keyword", e[17], 89,
     3, "keyword", e[18], 91,
     3, "keyword", e[19], 93,
     3, "keyword", e[20], 99,
     3, "keyword", e[21], 101,
     3, "keyword", e[22], 109,
     [5, 193], 111,
     1, 120, -1],
    [1, 6, 90],
    [1, 120, -1],
    [1, 6, 92],
    [1, 120, -1,
     0, -1],
    [1, 6, 94],
    [1, 120, 95,
     0, 95],
    [1, 6, 96],
    [3, "keyword", e[21], 97,
     0, -1],
    [1, 6, 98],
    [1, 120, -1],
    [1, 6, 100],
    [1, 196, -1],
    [1, 6, 102],
    [".", 103,
     [6, 210], 104,
     3, "keyword", e[20], 105],
    [1, 6, 102],
    [1, 120, 106],
    [1, 6, 107],
    [1, 6, 108],
    ["*", -1,
     2, 211, -1, {"name":"FromImportList"},
     1, 218, -1],
    [3, "keyword", e[20], 105],
    [1, 6, 110],
    [1, 232, -1],
    [1, 238, 112],
    [1, 6, 113],
    [":", 114,
     0, 115],
    [1, 6, 116],
    [1, 6, 117],
    [1, 120, 115],
    [3, "operator", "=", 118,
     0, -1],
    [1, 6, 119],
    [1, 120, -1],
    [3, "operator", e[23], 121,
     3, "keyword", e[24], 121,
     1, 239, 122],
    [1, 6, 120],
    [1, 6, 123],
    [1, 249, 124,
     3, "keyword", e[8], 125,
     ",", 125,
     0, -1],
    [1, 6, 123],
    [1, 6, 126],
    [1, 260, 124],
    [1, 88, 128,
     2, 267, -1, {"name":"indentedBody"}],
    [1, 6, 129],
    [";", 130,
     "\n", -1],
    [1, 6, 131],
    [1, 88, 132,
     0, 132],
    [1, 6, 129],
    [[5, 273], 134,
     1, 276, 135],
    [1, 238, 135],
    [1, 6, 136],
    [",", 137,
     0, -1],
    [1, 6, 138],
    [[5, 273], 139,
     1, 276, 140,
     0, 140],
    [1, 238, 140],
    [1, 6, 136],
    ["(", 142],
    [1, 6, 143],
    [1, 281, 144,
     0, 144],
    [1, 6, 145],
    [")", -1],
    ["'''", 147,
     "\"\"\"", 149,
     "'", 151,
     "\"", 153],
    ["\\", 148,
     [0, /^(?!\'\'\')/, /^[^]/], 147,
     "'''", -1],
    [/^[^]/, 147],
    ["\\", 150,
     [0, /^(?!\"\"\")/, /^[^]/], 149,
     "\"\"\"", -1],
    [/^[^]/, 149],
    ["\\", 152,
     /^(?!\')./, 151,
     "'", -1],
    [/^[^]/, 151],
    ["\\", 154,
     /^(?!\")./, 153,
     "\"", -1],
    [/^[^]/, 153],
    [3, "operator", "{", 156],
    [1, 120, 157,
     0, 157],
    [3, "operator", "=", 158,
     0, 158],
    [3, "operator", "!", 159,
     0, 160],
    [3, "keyword", /^(?:(?![\:\} \t]).)*/, 160],
    [3, "operator", ":", 161,
     0, 162],
    [3, "string", e[12], 161,
     1, 155, 161,
     0, 162],
    [3, "operator", "}", -1],
    [1, 260, 164],
    [1, 6, 165],
    [3, "keyword", e[9], 166,
     0, 168],
    [1, 6, 167],
    [3, "def", e[10], 168,
     2, 293, 168, {"name":"ParenPattern"},
     2, 298, 168, {"name":"BracketPattern"}],
    [1, 6, 169],
    [",", 170,
     0, -1],
    [1, 6, 171],
    [1, 260, 172,
     0, 173],
    [1, 6, 174],
    [1, 6, 169],
    [3, "keyword", e[9], 175,
     0, 173],
    [1, 6, 176],
    [3, "def", e[10], 173,
     2, 293, 173, {"name":"ParenPattern"},
     2, 298, 173, {"name":"BracketPattern"}],
    [2, 303, 178, {"name":"ParamList"}],
    [1, 6, 179],
    ["->", 180,
     0, 182],
    [1, 6, 181],
    [1, 120, 182],
    [1, 6, 183],
    [":", 184],
    [1, 6, 185],
    [1, 127, -1],
    [3, "type def", e[10], 187],
    [1, 6, 188],
    [2, 141, 189, {"name":"ArgList"},
     0, 189],
    [1, 6, 190],
    [":", 191],
    [1, 6, 192],
    [1, 127, -1],
    [1, 238, 194],
    [1, 6, 195],
    [/^[\=\:]/, -1],
    [1, 260, 197],
    [1, 6, 198],
    [3, "keyword", e[9], 199,
     0, 201],
    [1, 6, 200],
    [3, "def", e[10], 201],
    [1, 6, 202],
    [",", 203,
     0, -1],
    [1, 6, 204],
    [1, 260, 205,
     0, 206],
    [1, 6, 207],
    [1, 6, 202],
    [3, "keyword", e[9], 208,
     0, 206],
    [1, 6, 209],
    [3, "def", e[10], 206],
    [3, "keyword", e[20], -1],
    ["(", 212],
    [1, 6, 213],
    [1, 218, 214,
     0, 214],
    [1, 6, 215],
    [/^\,?/, 216],
    [1, 6, 217],
    [")", -1],
    [e[10], 219],
    [1, 6, 220],
    [3, "keyword", e[9], 221,
     0, 223],
    [1, 6, 222],
    [3, "def", e[10], 223],
    [1, 6, 224],
    [",", 225,
     0, -1],
    [1, 6, 226],
    [e[10], 227,
     0, 228],
    [1, 6, 229],
    [1, 6, 224],
    [3, "keyword", e[9], 230,
     0, 228],
    [1, 6, 231],
    [3, "def", e[10], 228],
    [3, "variable", e[10], 233],
    [1, 6, 234],
    [",", 235,
     0, -1],
    [1, 6, 236],
    [3, "variable", e[10], 237,
     0, 237],
    [1, 6, 234],
    [1, 308, -1],
    [2, 316, -1, {"name":"ParenExpr"},
     2, 321, -1, {"name":"ArrayLiteral"},
     2, 326, -1, {"name":"ObjectLiteral"},
     3, "number", e[25], -1,
     0, 240,
     3, "operator", "...", -1,
     3, "atom", e[26], -1,
     3, "atom", e[27], -1,
     3, "keyword", e[28], 243,
     3, "keyword", e[29], 247,
     3, "builtin", e[30], -1,
     3, "variable callee", e[33], -1,
     3, "variable", e[10], -1],
    [2, 53, 241, {"name":"string","token":"string"},
     1, 55, 241],
    [1, 6, 242],
    [0, 240,
     0, -1],
    [1, 6, 244],
    [3, "keyword", e[21], 245,
     1, 120, -1,
     0, -1],
    [1, 6, 246],
    [1, 120, -1],
    [1, 6, 248],
    [2, 333, -1, {"name":"LambdaDef"}],
    [3, "operator", e[31], 250,
     3, "keyword", e[32], 250,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 252,
     3, "keyword", e[0], 254],
    [1, 6, 251],
    [1, 120, -1],
    [1, 6, 253],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 255],
    [1, 120, 256],
    [1, 6, 257],
    [3, "keyword", e[2], 258,
     0, -1],
    [1, 6, 259],
    [1, 120, -1],
    [3, "operator", e[23], 261,
     3, "keyword", e[24], 261,
     1, 239, 262],
    [1, 6, 260],
    [1, 6, 263],
    [1, 343, 264,
     3, "keyword", e[8], 265,
     0, -1],
    [1, 6, 263],
    [1, 6, 266],
    [1, 120, 264],
    ["\n", 268],
    [/^[ \t]/, 268,
     3, "comment", /^\#.*/, 268,
     "\n", 268,
     e[34], 269],
    [2, 9, 270, {"name":"Statement"}],
    [/^[ \t]/, 270,
     3, "comment", /^\#.*/, 270,
     "\n", 270,
     0, 271],
    [0, 272,
     0, -1],
    [e[34], 269],
    [1, 238, 274],
    [1, 6, 275],
    [3, "keyword", e[8], -1],
    [3, "operator", e[23], 277,
     3, "keyword", e[24], 277,
     1, 239, 278],
    [1, 6, 276],
    [1, 6, 279],
    [1, 354, 280,
     0, -1],
    [1, 6, 279],
    [3, "variable-2", e[36], 282,
     3, "operator", "**", 283,
     3, "meta", e[35], 284,
     0, 283],
    [1, 6, 285],
    [1, 6, 286],
    [1, 6, 287],
    [1, 343, 288,
     0, 289],
    [1, 260, 289],
    ["=", 283],
    [1, 6, 285],
    [1, 6, 290],
    [",", 291,
     1, 365, -1,
     0, -1],
    [1, 6, 292],
    [1, 377, -1,
     0, -1],
    ["(", 294],
    [1, 6, 295],
    [1, 238, 296],
    [1, 6, 297],
    [")", -1],
    ["[", 299],
    [1, 6, 300],
    [1, 238, 301],
    [1, 6, 302],
    ["]", -1],
    ["(", 304],
    [1, 6, 305],
    [1, 391, 306,
     0, 306],
    [1, 6, 307],
    [")", -1],
    [[6, 417], 309,
     2, 293, 310, {"name":"ParenPattern"},
     2, 298, 310, {"name":"BracketPattern"}],
    [3, "def", e[10], 310],
    [1, 6, 311],
    [",", 312,
     0, -1],
    [1, 6, 313],
    [[6, 417], 314,
     2, 293, 315, {"name":"ParenPattern"},
     2, 298, 315, {"name":"BracketPattern"},
     0, 315],
    [3, "def", e[10], 315],
    [1, 6, 311],
    ["(", 317],
    [1, 6, 318],
    [1, 418, 319,
     0, 319],
    [1, 6, 320],
    [")", -1],
    ["[", 322],
    [1, 6, 323],
    [1, 418, 324,
     0, 324],
    [1, 6, 325],
    ["]", -1],
    ["{", 327],
    [1, 6, 328],
    [1, 426, 329,
     0, 331],
    [1, 6, 330],
    [1, 365, 331,
     0, 331],
    [1, 6, 332],
    ["}", -1],
    [1, 432, 334,
     0, 334],
    [1, 6, 335],
    [":", 336],
    [1, 6, 337],
    [1, 260, -1],
    ["[", 339],
    [1, 6, 340],
    [1, 450, 341],
    [1, 6, 342],
    ["]", -1],
    [3, "operator", e[31], 344,
     3, "keyword", e[32], 344,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 346,
     3, "keyword", e[0], 348],
    [1, 6, 345],
    [1, 260, -1],
    [1, 6, 347],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 349],
    [1, 260, 350],
    [1, 6, 351],
    [3, "keyword", e[2], 352,
     0, -1],
    [1, 6, 353],
    [1, 260, -1],
    [3, "operator", e[31], 355,
     3, "keyword", e[32], 355,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 357,
     3, "keyword", e[0], 359],
    [1, 6, 356],
    [1, 276, -1],
    [1, 6, 358],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 360],
    [1, 276, 361],
    [1, 6, 362],
    [3, "keyword", e[2], 363,
     0, -1],
    [1, 6, 364],
    [1, 276, -1],
    [3, "keyword", e[6], 366,
     0, 366],
    [1, 6, 367],
    [3, "keyword", e[4], 368],
    [1, 6, 369],
    [[5, 273], 370,
     1, 276, 371],
    [1, 238, 371],
    [1, 6, 372],
    [3, "keyword", e[8], 373],
    [1, 6, 374],
    [1, 120, 375],
    [1, 6, 376],
    [1, 365, -1,
     1, 484, -1,
     0, -1],
    [3, "operator", "**", 378,
     3, "meta", e[35], 379,
     0, 378],
    [1, 6, 380],
    [1, 6, 381],
    [1, 260, 382],
    ["=", 378],
    [1, 6, 383],
    [",", 384,
     0, -1],
    [1, 6, 385],
    [3, "operator", "**", 386,
     3, "meta", e[35], 387,
     0, 386,
     0, 388],
    [1, 6, 389],
    [1, 6, 390],
    [1, 6, 383],
    [1, 260, 388],
    ["=", 386],
    [2, 489, 392, {"name":"op","token":"operator"},
     0, 392],
    [1, 6, 393],
    [3, "atom", e[27], 394,
     3, "def", e[10], 394],
    [1, 6, 395],
    [":", 396,
     0, 397],
    [1, 6, 398],
    [1, 6, 399],
    [1, 260, 397],
    [3, "operator", "=", 400,
     0, 402],
    [1, 6, 401],
    [1, 260, 402],
    [1, 6, 403],
    [",", 404,
     0, -1],
    [1, 6, 405],
    [2, 489, 406, {"name":"op","token":"operator"},
     0, 406,
     0, 407],
    [1, 6, 408],
    [1, 6, 403],
    [3, "atom", e[27], 409,
     3, "def", e[10], 409],
    [1, 6, 410],
    [":", 411,
     0, 412],
    [1, 6, 413],
    [1, 6, 414],
    [1, 260, 412],
    [3, "operator", "=", 415,
     0, 407],
    [1, 6, 416],
    [1, 260, 407],
    [3, "keyword", e[8], -1],
    [3, "variable-2", e[36], 419,
     1, 260, 422],
    [1, 6, 420],
    [1, 343, 421,
     0, 422],
    [1, 6, 420],
    [1, 6, 423],
    [",", 424,
     1, 365, -1,
     0, -1],
    [1, 6, 425],
    [1, 492, -1,
     0, -1],
    [2, 498, 427, {"name":"DictProp"}],
    [1, 6, 428],
    [",", 429,
     0, -1],
    [1, 6, 430],
    [2, 498, 431, {"name":"DictProp"},
     0, 431],
    [1, 6, 428],
    [3, "operator", e[37], 433,
     0, 433],
    [1, 6, 434],
    [3, "def", e[10], 435],
    [1, 6, 436],
    [3, "operator", "=", 437,
     0, 439],
    [1, 6, 438],
    [1, 260, 439],
    [1, 6, 440],
    [",", 441,
     0, -1],
    [1, 6, 442],
    [3, "operator", e[37], 443,
     0, 443,
     0, 444],
    [1, 6, 445],
    [1, 6, 440],
    [3, "def", e[10], 446],
    [1, 6, 447],
    [3, "operator", "=", 448,
     0, 444],
    [1, 6, 449],
    [1, 260, 444],
    [1, 260, 451,
     ":", 452],
    [1, 6, 453],
    [1, 6, 454],
    [":", 455,
     0, 465],
    [1, 260, 456,
     0, 456],
    [1, 6, 457],
    [1, 6, 458],
    [1, 260, 459,
     0, 459],
    [":", 460,
     0, 465],
    [1, 6, 461],
    [1, 6, 462],
    [":", 463,
     0, 465],
    [1, 260, 465,
     0, 465],
    [1, 6, 464],
    [1, 260, 465,
     0, 465],
    [1, 6, 466],
    [",", 467,
     0, -1],
    [1, 6, 468],
    [1, 260, 469,
     ":", 470,
     0, 471],
    [1, 6, 472],
    [1, 6, 473],
    [1, 6, 466],
    [":", 474,
     0, 471],
    [1, 260, 475,
     0, 475],
    [1, 6, 476],
    [1, 6, 477],
    [1, 260, 478,
     0, 478],
    [":", 479,
     0, 471],
    [1, 6, 480],
    [1, 6, 481],
    [":", 482,
     0, 471],
    [1, 260, 471,
     0, 471],
    [1, 6, 483],
    [1, 260, 471,
     0, 471],
    [3, "keyword", e[0], 485],
    [1, 6, 486],
    [1, 120, 487],
    [1, 6, 488],
    [1, 365, -1,
     1, 484, -1,
     0, -1],
    ["*", 490],
    [1, 6, 491],
    [/^\*?/, -1],
    [1, 260, 493],
    [1, 6, 494],
    [",", 495,
     0, -1],
    [1, 6, 496],
    [1, 260, 497,
     0, 497],
    [1, 6, 494],
    [3, "operator", "**", 499,
     1, 260, 501],
    [1, 6, 500],
    [1, 260, -1],
    [1, 6, 502],
    [":", 503,
     0, -1],
    [1, 6, 504],
    [1, 260, -1]
  ];
  var start = 0;
  var token = 5;

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

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "FromImportList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "Subscript", "DictProp", "ParenPattern", "BracketPattern"];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s+for\s+(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]", BracketPattern: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")", ParenPattern: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack != ")" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function pythonMarkLocals(token$$1, stream, state) {
    var marked = markLocals(token$$1, scopes, stream, state);
    if (token$$1 == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
      else if (marked == "def local") { marked = "variable-2"; }
    }
    return marked
  }

  var PythonMode = (function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token$$1 (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  // ` also gets autoclosed since it's often used in comments/docstrings.
  PythonMode.prototype.closeBrackets = {triples: "'\"", pairs: "()[]{}''\"\"``",};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror.defineMode("google-python", function (conf) { return new PythonMode(conf); });

})));
