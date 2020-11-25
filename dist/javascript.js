(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror$1) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 114]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^(?:\.|\?\.)/, [1, "\n", "\t", " "], /^new(?![a-zA-Z¡-￿_0-9_\$])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[35], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[28], -1,
     3, "atom", e[27], -1,
     3, "variable", e[20], -1,
     3, "operator", e[30], -1,
     3, "operator", e[34], -1,
     3, "operator", e[33], -1,
     2, 116, -1, {"name":"string","token":"string"},
     3, "number", e[31], -1,
     2, 121, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[32], -1,
     1, 125, -1,
     /^[^]/, -1],
    [e[38], 6,
     2, 121, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 8,
     3, "keyword", e[1], 23,
     3, "keyword", e[2], 23,
     3, "keyword", e[3], 27,
     2, 129, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 35,
     3, "keyword", e[6], 40,
     3, "keyword", e[7], 46,
     3, "keyword", e[8], 48,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 48,
     3, "keyword", e[9], 49,
     3, "keyword", e[10], 52,
     3, "keyword", e[11], 56,
     3, "keyword", e[12], 60,
     3, "keyword", e[13], 64,
     3, "keyword", e[14], 68,
     3, "keyword", e[15], 72,
     3, "keyword", e[16], 80,
     3, "keyword", e[17], 92,
     3, "keyword", e[18], 108,
     "@", 110,
     1, 133, 112],
    [1, 6, 9],
    [1, 139, 10],
    [1, 6, 11],
    [3, "operator", "=", 12,
     0, 13],
    [1, 6, 14],
    [1, 6, 15],
    [1, 142, 13],
    [",", 16,
     e[19], -1],
    [1, 6, 17],
    [1, 139, 18],
    [1, 6, 19],
    [3, "operator", "=", 20,
     0, 21],
    [1, 6, 22],
    [1, 6, 15],
    [1, 142, 21],
    [1, 6, 24],
    [2, 146, 25, {"name":"CondExpr"}],
    [1, 6, 26],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 28],
    [2, 7, 29, {"name":"Statement"}],
    [1, 6, 30],
    [3, "keyword", e[1], 31,
     0, -1],
    [1, 6, 32],
    [2, 146, 33, {"name":"CondExpr"}],
    [1, 6, 34],
    [e[19], -1],
    [1, 6, 36],
    [2, 146, 37, {"name":"CondExpr"}],
    [1, 6, 38],
    [2, 7, 39, {"name":"Statement"}],
    [2, 151, -1, {"name":"Alternative"}],
    [1, 6, 41],
    [3, "keyword", "*", 42,
     0, 42],
    [1, 6, 43],
    [3, "def", e[20], 44],
    [1, 6, 45],
    [2, 155, -1, {"name":"FunctionDef"}],
    [1, 6, 47],
    [2, 158, -1, {"name":"ForStatement"}],
    [1, 6, 50],
    [1, 6, 51],
    [":", -1],
    [1, 133, 48],
    [1, 6, 53],
    [e[19], -1,
     1, 133, 54],
    [1, 6, 55],
    [e[19], -1],
    [1, 6, 57],
    [1, 133, 58],
    [1, 6, 59],
    [e[19], -1],
    [1, 6, 61],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 62],
    [1, 6, 63],
    [e[19], -1],
    [1, 6, 65],
    [2, 146, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 129, -1, {"name":"Block"}],
    [1, 6, 69],
    [2, 129, 70, {"name":"Block"}],
    [1, 6, 71],
    [2, 161, -1, {"name":"CatchFinally"}],
    [1, 6, 73],
    [3, "type def", e[20], 74],
    [1, 6, 75],
    [3, "keyword", e[21], 76,
     0, 77],
    [1, 6, 78],
    [1, 6, 79],
    [1, 133, 77],
    [2, 174, -1, {"name":"ClassBody"}],
    [1, 6, 81],
    ["*", 82,
     3, "keyword", e[8], 82,
     "{", 83,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 84],
    [1, 6, 85],
    [3, "keyword", e[22], 86,
     0, 87],
    [1, 182, 88],
    [1, 6, 89],
    [1, 6, 90],
    [1, 6, 91],
    [2, 116, 87, {"name":"string","token":"string"}],
    [e[19], -1],
    ["}", 82],
    [1, 6, 93],
    [2, 116, 94, {"name":"string","token":"string"},
     3, "keyword", "*", 95,
     1, 188, 96,
     "{", 97],
    [1, 6, 98],
    [1, 6, 99],
    [1, 6, 100],
    [1, 6, 101],
    [e[19], -1],
    [3, "keyword", e[26], 102,
     0, 96],
    [3, "keyword", e[22], 103,
     0, 94],
    [1, 182, 104],
    [1, 6, 105],
    [1, 6, 106],
    [1, 6, 107],
    [3, "def", e[20], 96],
    [2, 116, 94, {"name":"string","token":"string"}],
    ["}", 96],
    [1, 6, 109],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 111],
    [1, 133, -1],
    [1, 6, 113],
    [e[19], -1],
    [1, 6, 115],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 117,
     "\"", 119],
    ["\\", 118,
     /^(?!\')./, 117,
     "'", -1],
    [/^[^]/, 117],
    ["\\", 120,
     /^(?!\")./, 119,
     "\"", -1],
    [/^[^]/, 119],
    [/^\/\*\*(?!\/)/, 122,
     "/*", 124,
     /^\/\/.*/, -1],
    [1, 193, 122,
     0, 123],
    [2, 196, 123, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 124,
     "*/", -1],
    [3, "string-2", "`", 126],
    [3, "string-2", "${", 127,
     2, 198, 126, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 126,
     3, "string-2", "`", -1],
    [1, 133, 128],
    [3, "string-2", "}", 126],
    ["{", 130],
    [1, 6, 131],
    [2, 7, 132, {"name":"Statement"},
     "}", -1],
    [1, 6, 131],
    [1, 200, 134],
    [1, 6, 135],
    [",", 136,
     1, 218, 137,
     0, -1],
    [1, 6, 138],
    [1, 6, 135],
    [1, 142, 137],
    [3, "operator", "...", 140,
     0, 140],
    [1, 6, 141],
    [3, "def", e[20], -1,
     2, 233, -1, {"name":"ArrayPattern"},
     2, 238, -1, {"name":"ObjectPattern"}],
    [1, 200, 143],
    [1, 6, 144],
    [1, 243, 145,
     0, -1],
    [1, 6, 144],
    ["(", 147],
    [1, 6, 148],
    [1, 133, 149],
    [1, 6, 150],
    [")", -1],
    [1, 6, 152],
    [3, "keyword", e[23], 153,
     0, -1],
    [1, 6, 154],
    [2, 7, -1, {"name":"Statement"}],
    [2, 258, 156, {"name":"ParamList"}],
    [1, 6, 157],
    [2, 129, -1, {"name":"Block"}],
    [2, 263, 159, {"name":"ForSpec"}],
    [1, 6, 160],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[24], 162,
     0, 170],
    [1, 6, 163],
    ["(", 164,
     0, 165],
    [1, 6, 166],
    [1, 6, 167],
    [1, 139, 168],
    [2, 129, 170, {"name":"Block"}],
    [1, 6, 169],
    [")", 165],
    [1, 6, 171],
    [3, "keyword", e[25], 172,
     0, -1],
    [1, 6, 173],
    [2, 129, -1, {"name":"Block"}],
    ["{", 175],
    [1, 6, 176],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 177,
     0, 177,
     "@", 178,
     "}", -1],
    [1, 6, 179],
    [1, 6, 180],
    [2, 274, 181, {"name":"ObjectMember"}],
    [1, 133, 181],
    [1, 6, 176],
    [1, 188, 183,
     0, -1],
    [1, 6, 184],
    [",", 185,
     0, -1],
    [1, 6, 186],
    [1, 188, 187,
     0, 187],
    [1, 6, 184],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 189,
     3, "def", e[20], -1],
    [1, 6, 190],
    [3, "keyword", e[26], 191],
    [1, 6, 192],
    [3, "def", e[20], -1],
    [0, 194,
     2, 289, -1, {"name":"doccomment.braced"}],
    [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 195],
    [0, 194,
     0, -1],
    [1, 293, 197],
    [1, 193, 197,
     0, -1],
    ["\\", 199,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[27], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], 201,
     3, "operator", e[30], 201,
     3, "keyword", e[18], 201,
     2, 299, -1, {"name":"NewExpression"},
     3, "keyword", e[6], 203,
     3, "keyword", e[15], 209,
     2, 309, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[36], -1,
     3, "variable", e[20], -1,
     3, "number", e[31], -1,
     2, 116, -1, {"name":"string","token":"string"},
     3, "string-2", e[32], -1,
     1, 125, -1,
     2, 313, -1, {"name":"ArrayLiteral"},
     2, 318, -1, {"name":"ObjectLiteral"},
     2, 323, -1, {"name":"ParenExpr"}],
    [1, 6, 202],
    [1, 200, -1],
    [1, 6, 204],
    [3, "keyword", "*", 205,
     0, 205],
    [1, 6, 206],
    [3, "def", e[20], 207,
     0, 207],
    [1, 6, 208],
    [2, 155, -1, {"name":"FunctionDef"}],
    [1, 6, 210],
    [[6, 328], 211,
     0, 212],
    [3, "type def", e[20], 212],
    [1, 6, 213],
    [3, "keyword", e[21], 214,
     0, 215],
    [1, 6, 216],
    [1, 6, 217],
    [1, 133, 215],
    [2, 174, -1, {"name":"ClassBody"}],
    [3, "operator", e[33], -1,
     3, "operator", e[34], 219,
     3, "keyword", e[35], 219,
     2, 329, -1, {"name":"ArgList"},
     1, 125, -1,
     e[37], 221,
     "[", 223,
     3, "operator", "?", 227],
    [1, 6, 220],
    [1, 133, -1],
    [1, 6, 222],
    [3, "property callee", e[36], -1,
     3, "property", e[20], -1],
    [1, 6, 224],
    [1, 133, 225],
    [1, 6, 226],
    ["]", -1],
    [1, 6, 228],
    [1, 133, 229],
    [1, 6, 230],
    [3, "operator", ":", 231],
    [1, 6, 232],
    [1, 133, -1],
    ["[", 234],
    [1, 6, 235],
    [1, 334, 236],
    [1, 6, 237],
    ["]", -1],
    ["{", 239],
    [1, 6, 240],
    [1, 340, 241],
    [1, 6, 242],
    ["}", -1],
    [3, "operator", e[33], -1,
     3, "operator", e[34], 244,
     3, "keyword", e[35], 244,
     2, 329, -1, {"name":"ArgList"},
     1, 125, -1,
     e[37], 246,
     "[", 248,
     3, "operator", "?", 252],
    [1, 6, 245],
    [1, 142, -1],
    [1, 6, 247],
    [3, "property callee", e[36], -1,
     3, "property", e[20], -1],
    [1, 6, 249],
    [1, 133, 250],
    [1, 6, 251],
    ["]", -1],
    [1, 6, 253],
    [1, 133, 254],
    [1, 6, 255],
    [3, "operator", ":", 256],
    [1, 6, 257],
    [1, 142, -1],
    ["(", 259],
    [1, 6, 260],
    [1, 346, 261],
    [1, 6, 262],
    [")", -1],
    ["(", 264],
    [1, 6, 265],
    [2, 352, 266, {"name":"StatementMaybeOf"}],
    [1, 6, 267],
    [1, 133, 268,
     0, 268,
     0, 272],
    [1, 6, 269],
    [";", 270],
    [1, 6, 271],
    [1, 133, 272,
     0, 272],
    [1, 6, 273],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 275,
     0, 275],
    [1, 6, 276],
    [3, "keyword", "*", 277,
     0, 277],
    [1, 6, 278],
    [3, "def property", e[20], 279,
     "[", 280,
     3, "number", e[31], 279,
     2, 116, 279, {"name":"string","token":"string"},
     3, "operator", "...", 281],
    [1, 6, 282],
    [1, 6, 283],
    [1, 6, 284],
    [2, 155, -1, {"name":"FunctionDef"},
     ":", 285,
     0, -1],
    [1, 133, 286],
    [1, 142, -1],
    [1, 6, 287],
    [1, 6, 288],
    [1, 142, -1],
    ["]", 279],
    ["{", 290],
    [1, 293, 291,
     1, 193, 292],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 291,
     0, 292],
    [/^(?:\}|(?=\*\/))/, -1],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 294,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[38], 294,
     "{", 295,
     0, 296,
     0, -1],
    [2, 357, 297, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 298],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 298,
     0, 296],
    [3, "keyword", e[39], 300],
    [1, 6, 301],
    [".", 302,
     1, 200, 303],
    [1, 6, 304],
    [1, 6, 305],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 329, 306, {"name":"ArgList"},
     ".", 307,
     0, -1],
    [1, 6, 305],
    [1, 6, 308],
    [3, "property callee", e[36], 306,
     3, "property", e[20], 306],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 361]], 311,
     [5, 363], 310],
    [2, 258, 311, {"name":"ParamList"}],
    [1, 6, 312],
    [2, 366, -1, {"name":"ArrowRest"}],
    ["[", 314],
    [1, 6, 315],
    [1, 369, 316],
    [1, 6, 317],
    ["]", -1],
    ["{", 319],
    [1, 6, 320],
    [1, 375, 321],
    [1, 6, 322],
    ["}", -1],
    ["(", 324],
    [1, 6, 325],
    [1, 133, 326],
    [1, 6, 327],
    [")", -1],
    [3, "keyword", e[21], -1],
    ["(", 330],
    [1, 6, 331],
    [1, 369, 332],
    [1, 6, 333],
    [")", -1],
    [1, 381, 335,
     0, 335,
     0, -1],
    [1, 6, 336],
    [",", 337,
     0, -1],
    [1, 6, 338],
    [1, 381, 339,
     0, 339,
     0, 339],
    [1, 6, 336],
    [1, 386, 341,
     0, -1],
    [1, 6, 342],
    [",", 343,
     0, -1],
    [1, 6, 344],
    [1, 386, 345,
     0, 345],
    [1, 6, 342],
    [1, 381, 347,
     0, -1],
    [1, 6, 348],
    [",", 349,
     0, -1],
    [1, 6, 350],
    [1, 381, 351,
     0, 351],
    [1, 6, 348],
    [2, 7, 353, {"name":"Statement"}],
    [1, 6, 354],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 355,
     0, -1],
    [1, 6, 356],
    [1, 133, -1],
    [3, "type", "{", 358,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 357,
     "\n", 359,
     0, -1],
    [2, 357, 360, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 357],
    [/^(?=\*\/)/, 357,
     3, "type", "}", 357],
    [1, 6, 362],
    ["=>", -1],
    [2, 258, 364, {"name":"ParamList"}],
    [1, 6, 365],
    ["=>", -1],
    [3, "operator", "=>", 367],
    [1, 6, 368],
    [2, 129, -1, {"name":"Block"},
     1, 142, -1],
    [1, 142, 370,
     0, -1],
    [1, 6, 371],
    [",", 372,
     0, -1],
    [1, 6, 373],
    [1, 142, 374,
     0, 374],
    [1, 6, 371],
    [2, 274, 376, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 377],
    [",", 378,
     0, -1],
    [1, 6, 379],
    [2, 274, 380, {"name":"ObjectMember"},
     0, 380],
    [1, 6, 377],
    [1, 139, 382],
    [1, 6, 383],
    [3, "operator", "=", 384,
     0, -1],
    [1, 6, 385],
    [1, 142, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 387,
     3, "property", e[20], 391,
     3, "number", e[31], 391,
     2, 116, 391, {"name":"string","token":"string"},
     3, "operator", "...", 395],
    [1, 6, 388],
    [3, "operator", "=", 389,
     0, -1],
    [1, 6, 390],
    [1, 142, -1],
    [1, 6, 392],
    [":", 393],
    [1, 6, 394],
    [1, 381, -1],
    [1, 6, 396],
    [1, 381, -1]
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}",
    ObjectPattern: "}", EnumBody: "}", LambdaBlock: "}", WhenBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    ParenthesizedExpression: ")", ConstructorParamList: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror$1.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror$1.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror$1.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && (!config.dontAlign || config.dontAlign.indexOf(cx.name) < 0) && aligned(cx))
      { return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

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
      if (closed && (config.dontCloseBrackets || "").indexOf(brack) < 0) { return base }
      return base + config.indentUnit * ((config.doubleIndentBrackets || "").indexOf(brack) < 0 ? 1 : 2)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^((else|catch|finally)\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror$1.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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
        { return CodeMirror$1.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror$1.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    var passLine = config.forceContent && /^\s*(\/\/.*)?$/.test(line) ? "x" : line;
    return findIndent(state.contextAt(passLine, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  /**
   * @fileoverview Provides a class that facilitates tokenizing JavaScript tagged
   * template string contents as a separate, embedded language.
   *
   * Consider code like:
   *     html`<div>Hello ${'world'}</div>`
   *
   * For a good editing experience, the contents of that template string should
   * be syntax highlighted as HTML.
   *
   * Doing this correctly in the limit is more difficult than it appears however,
   * because arbitrary JS expressions are allowed inline, up to and including
   * nesting of templates. This is even used in the real world. Consider:
   *
   * html`
   *   <style>
   *     ${css`
   *       li {
   *         color: green;
   *       }
   *     `}
   *   </style>
   *   <ul>
   *     ${items.map(item => html`<li>${item}</li>`)}
   *   </ul>
   * `
   */

  /**
   * Use within a containing tokenizer to defer tokenizing the contents of some
   * JavaScript tagged template literals to other CodeMirror language modes.
   *
   * This tokenizer is intended to be used from a JavaScript tokenizer, or
   * one very similar to JavaScript, like TypeScript. It assumes that tagged
   * template literals are tagged with the style 'string-2'.
   *
   * This class maintains its own state. Its state needs to be stored as part
   * of the containing tokenizer's state, and copied when it is copied. See
   * startState and copyState.
   *
   * Design goals:
   *   - Minimally interfere with containing tokenizer, and make minimal
   *     assumptions about its behavior.
   *   - Have no impact on tokenizing code that does not use tagged template
   *     literals, or tagged template literals that do not correspond to other
   *     languages
   *   - Defer tokenizing the contents of template strings to embedded language
   *     modes but begin, end, and interrupt template strings according to the
   *     JavaScript grammar.
   *   - Parse correctly even for deeply nested combinations of literals inside
   *     of literals.
   *
   * Known limitations:
   *   - Embedded tokenizers will see JavaScript string escape sequences
   *     (like \`, \\, etc), though semantically they should see the unescaped
   *     values. This can confuse embedded tokenizers, though that confusion
   *     will not spread outside of the template string.
   */
  var TemplateTokenizer = function TemplateTokenizer(config) {
    this.config = config;
  };

  /** @return {!State} */
  TemplateTokenizer.prototype.startState = function startState () {
    return new State();
  };

  /**
   * @param {!State} state
   * @return {!State}
   */
  TemplateTokenizer.prototype.copyState = function copyState (state) {
    return state.copy();
  };

  /**
   * If true, the containing tokenizer should defer to `interceptTokenizing`.
   *
   * @param {!State} state
   */
  TemplateTokenizer.prototype.shouldInterceptTokenizing = function shouldInterceptTokenizing (state) {
    var templateState = state.currentTemplateState;
    if (templateState !== undefined && templateState.mode !== null) {
      return true;
    }
    return false;
  };

  /**
   * Defer to the embedded language tokenizer, but interrupt it for inline
   * exprssions and the end of the template literal.
   *
   * This MUST only be called if shouldInterceptTokenizing is true for the
   * current state.
   *
   * shouldInterceptTokenizing is separated out into its own
   * method, even though this method also tells the containing tokenizer
   * when it should defer to the embedded language because this method returns
   * an object, and we don't want to allocate an extra object for each token
   * consumed.
   *
   * @param {!Stream} stream
   * @param {!State} state
   * @return {{handled: boolean, state: string|null}} If handled is true,
   *   then the TS/JS tokenizer should not do any tokenizing of its own,
   *   and return state. If handled is false, then this method has consumed
   *   no input, and instead the TS/JS tokenizer should consume input instead.
   */
  TemplateTokenizer.prototype.interceptTokenizing = function interceptTokenizing (stream, state) {
    // Check for an inline expression in the template literal.
    if (stream.match('${')) {
      stream.backUp(2);
      if (!this.isEscaped(stream, stream.pos - 2)) {
        // Hand things back to the normal tokenizer.
        return {handled: false};
      }
    }
    // Check for end of the template literal.
    if (stream.peek() === '`' && !this.isEscaped(stream, stream.pos)) {
      // Hand things back to the normal tokenizer.
      return {handled: false};
    }
    // Important note for the above two early exit checks. We must first check
    // for the end characters, then check to see if they were escaped.
    // That avoids doing exponential work in the case where there's a long
    // sequence of backslashes that the embedded tokenizer consumes character
    // by character.

    var ref = state.currentTemplateState;
      var mode = ref.mode;
      var innerState = ref.state;
    var style = mode.token(stream, innerState);
    this.backupIfEmbeddedTokenizerOvershot(stream);
    return {handled: true, style: style};
  };

  /**
   * Called after the containing tokenizer has consumed a token, but before
   * that consumption is finalized.
   *
   * We keep track of entering and exiting template literals and inline
   * expressions in template literals. In some cases, we reduce the
   * amount of text consumed by the containing tokenizer, so that an embedded
   * language has the opportunity to tokenize the contents of a template
   * string that it controls.
   *
   * @param {string|null} style
   * @param {!Stream} stream
   * @param {!State} state
   */
  TemplateTokenizer.prototype.trackState = function trackState (style, stream, state) {
    if (!style) {
      return;
    }
    var templateState = state.currentTemplateState;
    if (!templateState || templateState.kind === 'inline-expression') {
      this.trackStateNotInTemplate(style, stream, state, templateState);
    } else {
      this.trackStateInTemplate(style, stream, state, templateState);
    }
    if (style === 'variable') {
      state.previousVariable = stream.current();
    } else {
      state.previousVariable = null;
    }
  };

  /**
   * Maintain state.templateStack while not directly inside of a template
   * literal.
   *
   * We could be inside of an inline expression in a template literal however.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {?TemplateState} templateState
   */
  TemplateTokenizer.prototype.trackStateNotInTemplate = function trackStateNotInTemplate (style, stream, state, templateState) {
    // Has the inline expression represented by embeddedMode just ended?
    if (templateState && style === 'string-2' &&
        stream.current().startsWith('}')) {
      state.templateStack.pop();
      // The containing tokenizer should only consume the } at this point.
      stream.backUp(stream.current().length - 1);
      return;
    }
    // Are we starting a new template?
    if (style === 'string-2' &&
      stream.current().startsWith('`')) {
      var mode = this.getModeForTemplateTag(state.previousVariable);
      var kind = 'template';
      if (mode) {
        // Nothing except the opening ` should be consumed.
        stream.backUp(stream.current().length - 1);
        state.templateStack.push(new TemplateState(
          kind,
          mode,
          CodeMirror.startState(mode)
        ));
      } else {
        state.templateStack.push(new TemplateState(kind, null, null));
      }
    }
  };

  /**
   * Maintain state.templateStack while in the contents of a template literal.
   *
   * @private
   * @param {string} style
   * @param {!Stream} stream
   * @param {!State} state
   * @param {!TemplateState} templateState
   */
  TemplateTokenizer.prototype.trackStateInTemplate = function trackStateInTemplate (style, stream, state, templateState) {
    // Is the current template ending?
    if (style === 'string-2' && stream.current().endsWith('`') &&
        !this.isEscaped(stream.pos - 1)) {
      state.templateStack.pop();
      return;
    }

    // Are we starting a new inline expression?
    if (style === 'string-2' && stream.current().endsWith('${') &&
        !this.isEscaped(stream.pos - 2)) {
      state.templateStack.push(
          new TemplateState('inline-expression', null, null));
      return;
    }
  };

  /**
   * Inside of an inline template, we've let the embedded language tokenizer
   * consume a token. However, it can't be allowed to consume text that actually
   * indicates the end of that section of template literal string. If it has
   * back up to right beforehand.
   *
   * @private
   * @param {!Stream} stream
   */
  TemplateTokenizer.prototype.backupIfEmbeddedTokenizerOvershot = function backupIfEmbeddedTokenizerOvershot (stream) {
      var this$1 = this;

    var cur = stream.current();
    var searchFrom = 0;
    while(true) {
      var closingIdx = cur.slice(searchFrom).search(/`|\$\{/);
      if (closingIdx === -1) {
        // No template boundary found in the token.
        return;
      }
      closingIdx = closingIdx + searchFrom;
      var amountToBackUp = cur.length - closingIdx;
      var locationOfEarlyExit = stream.pos - amountToBackUp;
      var escaped = this$1.isEscaped(stream, locationOfEarlyExit);
      if (!escaped) {
        // Found a template boundary. Must not consume it.
        stream.backUp(cur.length - closingIdx);
        return;
      }
      // Found a potential template boundary, but it turns out it
      // was escaped with backslashes, so we need to keep looking beyond it.
      searchFrom = closingIdx + 1;
    }
  };

  /**
   * Walks backwards from the given position in the stream looking for
   * backslashes. Returns true if there are an odd number, and so the given
   * position is string-escaped, and false if there are an even number.
   *
   * @private
   * @param {!Stream} stream
   * @param {number} start
   */
  TemplateTokenizer.prototype.isEscaped = function isEscaped (stream, start) {
    var escaped = false;
    var idx = start;
    while(idx > 0) {
      if (stream.string[idx - 1] !== '\\') {
        break;
      }
      escaped = !escaped;
      idx--;
    }
    return escaped;
  };

  /**
   * @private
   * @param {string|null} templateTag
   */
  TemplateTokenizer.prototype.getModeForTemplateTag = function getModeForTemplateTag (templateTag) {
      var this$1 = this;

    if (!templateTag) {
      return null;
    }
    // There are likely more customizations that would be nice here.
    // Would be a good place for configuration if so.
    if (templateTag === 'htm') {
      templateTag = 'html';
    }
    var modeSpecs = [("google-" + templateTag), ("" + templateTag)];
    // Note: the google-modules build pipeline does not currently support
    // for/of.
    for (var i = 0; i < modeSpecs.length; i++) {
      var mode = CodeMirror.getMode(this$1.config, modeSpecs[i]);
      if (mode && mode.name !== 'null') {
        return mode;
      }
    }
    return null;
  };

  var State = function State(templateStack, previousVariable) {
    if ( templateStack === void 0 ) templateStack = [];
    if ( previousVariable === void 0 ) previousVariable = null;

    /**
     * A stack to keep track of the nesting of templates and inline expressions.
     *
     * Whenever we enter a template, we push a TemplateState with kind
     * 'template' on the stack. Whenever, inside of a template, we enter
     * an inline expression i.e. ${}, we push a TemplateState with kind
     * 'inline-expression' on the stack. Likewise, as we leave templates and
     * inline expressions we pop them off.
     *
     * A template that is being tokenized with an embedded CodeMirror mode will
     * have a `mode` and its `state` on its associated TemplateState.
     *
     * @type {Array<!TemplateState>}
     */
    this.templateStack = templateStack;
    /**
     * Used to figure out the tag name of tagged template literals, to
     * infer the inline language.
     *
     * @type {null|string}
     */
    this.previousVariable = previousVariable;
  };

  var prototypeAccessors = { currentTemplateState: { configurable: true } };

  State.prototype.copy = function copy () {
    return new State(
        this.templateStack.map(function (t) { return t.copy(); }), this.previousVariable);
  };

  /** @return {!TemplateState | undefined} */
  prototypeAccessors.currentTemplateState.get = function () {
    return this.templateStack[this.templateStack.length - 1];
  };

  Object.defineProperties( State.prototype, prototypeAccessors );

  var TemplateState = function TemplateState(kind, mode, state) {
    /** @type {string} Either 'template' or 'inline-expression' */
    this.kind = kind;
    /**
     * @type {?CodeMirror.Mode} If defined, the mode to tokenize
     * the current template with. kind must be 'template' if this is defined.
     */
    this.mode = mode;
    /** @type {?} The state object for this.mode. */
    this.state = state;
  };

  TemplateState.prototype.copy = function copy () {
    if (!this.mode) {
      return new TemplateState(this.kind, null, null);
    }
    return new TemplateState(
        this.kind, this.mode, CodeMirror.copyState(this.mode, this.state))
  };

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"];

  var JSMode = (function (superclass) {
    function JSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.embeddedParser = new TemplateTokenizer(conf);
      this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")",
                         tabSize: conf.tabSize, indentUnit: conf.indentUnit,
                         forceContent: true};
    }

    if ( superclass ) JSMode.__proto__ = superclass;
    JSMode.prototype = Object.create( superclass && superclass.prototype );
    JSMode.prototype.constructor = JSMode;

    JSMode.prototype.startState = function startState () {
      var state = superclass.prototype.startState.call(this);
      state.embeddedParserState = this.embeddedParser.startState();
      return state;
    };

    JSMode.prototype.copyState = function copyState (state) {
      var copy = superclass.prototype.copyState.call(this, state);
      copy.embeddedParserState =
          this.embeddedParser.copyState(state.embeddedParserState);
      return copy;
    };

    JSMode.prototype.token = function token$$1 (stream, state) {
      var embeddedParserState = state.embeddedParserState;
      if (this.embeddedParser.shouldInterceptTokenizing(embeddedParserState)) {
        var ref = this.embeddedParser.interceptTokenizing(
            stream, embeddedParserState);
        var handled = ref.handled;
        var style$1 = ref.style;
        if (handled) {
          return style$1;
        }
      }
      var style = superclass.prototype.token.call(this, stream, state);
      this.embeddedParser.trackState(
          style, stream, embeddedParserState);
      return markLocals(style, scopes, stream, state)
    };

    JSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.indentConf)
    };

    return JSMode;
  }(CodeMirror$1.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { JSMode.prototype[prop] = meta[prop]; }

  CodeMirror$1.registerHelper("wordChars", "google-javascript", /[\w$]/);

  CodeMirror$1.defineMode("google-javascript", function (conf, modeConf) { return new JSMode(conf, modeConf); });

})));
