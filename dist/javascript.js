(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 116]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, [1, "\n", "\t", " "], /^new(?![a-zA-Z¡-￿_0-9_\$])/];
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
     3, "keyword", e[36], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[29], -1,
     3, "atom", e[28], -1,
     3, "variable", e[20], -1,
     3, "operator", e[31], -1,
     3, "operator", e[35], -1,
     3, "operator", e[34], -1,
     2, 118, -1, {"name":"string","token":"string"},
     3, "number", e[32], -1,
     2, 123, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[33], -1,
     1, 129, -1,
     /^[^]/, -1],
    [e[38], 6,
     2, 123, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 8,
     3, "keyword", e[1], 23,
     3, "keyword", e[2], 23,
     3, "keyword", e[3], 27,
     2, 133, -1, {"name":"Block"},
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
     1, 137, 114],
    [1, 6, 9],
    [1, 143, 10],
    [1, 6, 11],
    [3, "operator", "=", 12,
     0, 13],
    [1, 6, 14],
    [1, 6, 15],
    [1, 146, 13],
    [",", 16,
     e[19], -1],
    [1, 6, 17],
    [1, 143, 18],
    [1, 6, 19],
    [3, "operator", "=", 20,
     0, 21],
    [1, 6, 22],
    [1, 6, 15],
    [1, 146, 21],
    [1, 6, 24],
    [2, 150, 25, {"name":"CondExpr"}],
    [1, 6, 26],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 28],
    [2, 7, 29, {"name":"Statement"}],
    [1, 6, 30],
    [3, "keyword", e[1], 31,
     0, -1],
    [1, 6, 32],
    [2, 150, 33, {"name":"CondExpr"}],
    [1, 6, 34],
    [e[19], -1],
    [1, 6, 36],
    [2, 150, 37, {"name":"CondExpr"}],
    [1, 6, 38],
    [2, 7, 39, {"name":"Statement"}],
    [2, 155, -1, {"name":"Alternative"}],
    [1, 6, 41],
    [3, "keyword", "*", 42,
     0, 42],
    [1, 6, 43],
    [3, "def", e[20], 44],
    [1, 6, 45],
    [2, 159, -1, {"name":"FunctionDef"}],
    [1, 6, 47],
    [2, 162, -1, {"name":"ForStatement"}],
    [1, 6, 50],
    [1, 6, 51],
    [":", -1],
    [1, 137, 48],
    [1, 6, 53],
    [e[19], -1,
     1, 137, 54],
    [1, 6, 55],
    [e[19], -1],
    [1, 6, 57],
    [1, 137, 58],
    [1, 6, 59],
    [e[19], -1],
    [1, 6, 61],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 62],
    [1, 6, 63],
    [e[19], -1],
    [1, 6, 65],
    [2, 150, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 133, -1, {"name":"Block"}],
    [1, 6, 69],
    [2, 133, 70, {"name":"Block"}],
    [1, 6, 71],
    [2, 165, -1, {"name":"Catch"}],
    [1, 6, 73],
    [3, "type def", e[20], 74],
    [1, 6, 75],
    [3, "keyword", e[21], 76,
     0, 77],
    [1, 6, 78],
    [1, 6, 79],
    [1, 137, 77],
    [2, 178, -1, {"name":"ClassBody"}],
    [1, 6, 81],
    ["*", 82,
     3, "keyword", e[8], 82,
     "{", 83,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 84],
    [1, 6, 85],
    [3, "keyword", e[22], 86,
     0, 87],
    [1, 186, 88],
    [1, 6, 89],
    [1, 6, 90],
    [1, 6, 91],
    [2, 118, 87, {"name":"string","token":"string"}],
    [e[19], -1],
    ["}", 82],
    [1, 6, 93],
    [2, 118, 94, {"name":"string","token":"string"},
     3, "keyword", "*", 95,
     1, 192, 96,
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
    [1, 186, 104],
    [1, 6, 105],
    [1, 6, 106],
    [1, 6, 107],
    [3, "def", e[20], 96],
    [2, 118, 94, {"name":"string","token":"string"}],
    ["}", 96],
    [1, 6, 109],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 111],
    [1, 137, 112],
    [1, 6, 113],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 115],
    [e[19], -1],
    [1, 6, 117],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 119,
     "\"", 121],
    ["\\", 120,
     /^(?!\')./, 119,
     "'", -1],
    [/^[^]/, 119],
    ["\\", 122,
     /^(?!\")./, 121,
     "\"", -1],
    [/^[^]/, 121],
    [/^\/\*\*(?!\/)/, 124,
     "/*", 128,
     /^\/\/.*/, -1],
    [0, 125,
     2, 197, 124, {"name":"doccomment.braced"},
     0, 126],
    [e[27], 127],
    [2, 201, 126, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 125,
     0, 124],
    [[0, /^(?!\*\/)/, /^[^]/], 128,
     "*/", -1],
    [3, "string-2", "`", 130],
    [3, "string-2", "${", 131,
     2, 205, 130, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 130,
     3, "string-2", "`", -1],
    [1, 137, 132],
    [3, "string-2", "}", 130],
    ["{", 134],
    [1, 6, 135],
    [2, 7, 136, {"name":"Statement"},
     "}", -1],
    [1, 6, 135],
    [1, 207, 138],
    [1, 6, 139],
    [",", 140,
     1, 225, 141,
     0, -1],
    [1, 6, 142],
    [1, 6, 139],
    [1, 137, 141],
    [3, "operator", "...", 144,
     0, 144],
    [1, 6, 145],
    [3, "def", e[20], -1,
     2, 240, -1, {"name":"ArrayPattern"},
     2, 245, -1, {"name":"ObjectPattern"}],
    [1, 207, 147],
    [1, 6, 148],
    [1, 250, 149,
     0, -1],
    [1, 6, 148],
    ["(", 151],
    [1, 6, 152],
    [1, 137, 153],
    [1, 6, 154],
    [")", -1],
    [1, 6, 156],
    [3, "keyword", e[23], 157,
     0, -1],
    [1, 6, 158],
    [2, 7, -1, {"name":"Statement"}],
    [2, 265, 160, {"name":"ParamList"}],
    [1, 6, 161],
    [2, 133, -1, {"name":"Block"}],
    [2, 270, 163, {"name":"ForSpec"}],
    [1, 6, 164],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[24], 166,
     0, 174],
    [1, 6, 167],
    ["(", 168,
     0, 169],
    [1, 6, 170],
    [1, 6, 171],
    [3, "def", e[20], 172],
    [2, 133, 174, {"name":"Block"}],
    [1, 6, 173],
    [")", 169],
    [1, 6, 175],
    [3, "keyword", e[25], 176,
     0, -1],
    [1, 6, 177],
    [2, 133, -1, {"name":"Block"}],
    ["{", 179],
    [1, 6, 180],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 181,
     0, 181,
     "@", 182,
     "}", -1],
    [1, 6, 183],
    [1, 6, 184],
    [2, 281, 185, {"name":"ObjectMember"}],
    [1, 137, 185],
    [1, 6, 180],
    [1, 192, 187,
     0, -1],
    [1, 6, 188],
    [",", 189,
     0, -1],
    [1, 6, 190],
    [1, 192, 191,
     0, 191],
    [1, 6, 188],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 193,
     3, "def", e[20], -1],
    [1, 6, 194],
    [3, "keyword", e[26], 195],
    [1, 6, 196],
    [3, "def", e[20], -1],
    ["{", 198],
    [1, 296, 199,
     2, 302, 200, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 199,
     0, 200],
    [/^(?:\}|(?=\*\/))/, -1],
    [1, 296, 202],
    [0, 203,
     2, 197, 202, {"name":"doccomment.braced"},
     0, -1],
    [e[27], 204],
    [0, 203,
     0, 202],
    ["\\", 206,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], 208,
     3, "operator", e[31], 208,
     3, "keyword", e[18], 208,
     2, 306, -1, {"name":"NewExpression"},
     3, "keyword", e[6], 210,
     3, "keyword", e[15], 216,
     2, 316, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[37], -1,
     3, "variable", e[20], -1,
     3, "number", e[32], -1,
     2, 118, -1, {"name":"string","token":"string"},
     3, "string-2", e[33], -1,
     1, 129, -1,
     2, 320, -1, {"name":"ArrayLiteral"},
     2, 325, -1, {"name":"ObjectLiteral"},
     2, 330, -1, {"name":"ParenExpr"}],
    [1, 6, 209],
    [1, 207, -1],
    [1, 6, 211],
    [3, "keyword", "*", 212,
     0, 212],
    [1, 6, 213],
    [3, "def", e[20], 214,
     0, 214],
    [1, 6, 215],
    [2, 159, -1, {"name":"FunctionDef"}],
    [1, 6, 217],
    [[6, 335], 218,
     0, 219],
    [3, "type def", e[20], 219],
    [1, 6, 220],
    [3, "keyword", e[21], 221,
     0, 222],
    [1, 6, 223],
    [1, 6, 224],
    [1, 137, 222],
    [2, 178, -1, {"name":"ClassBody"}],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 226,
     3, "keyword", e[36], 226,
     2, 336, -1, {"name":"ArgList"},
     1, 129, -1,
     ".", 228,
     "[", 230,
     3, "operator", "?", 234],
    [1, 6, 227],
    [1, 137, -1],
    [1, 6, 229],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 231],
    [1, 137, 232],
    [1, 6, 233],
    ["]", -1],
    [1, 6, 235],
    [1, 137, 236],
    [1, 6, 237],
    [3, "operator", ":", 238],
    [1, 6, 239],
    [1, 137, -1],
    ["[", 241],
    [1, 6, 242],
    [1, 341, 243],
    [1, 6, 244],
    ["]", -1],
    ["{", 246],
    [1, 6, 247],
    [1, 347, 248],
    [1, 6, 249],
    ["}", -1],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 251,
     3, "keyword", e[36], 251,
     2, 336, -1, {"name":"ArgList"},
     1, 129, -1,
     ".", 253,
     "[", 255,
     3, "operator", "?", 259],
    [1, 6, 252],
    [1, 146, -1],
    [1, 6, 254],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 256],
    [1, 137, 257],
    [1, 6, 258],
    ["]", -1],
    [1, 6, 260],
    [1, 137, 261],
    [1, 6, 262],
    [3, "operator", ":", 263],
    [1, 6, 264],
    [1, 146, -1],
    ["(", 266],
    [1, 6, 267],
    [1, 353, 268],
    [1, 6, 269],
    [")", -1],
    ["(", 271],
    [1, 6, 272],
    [2, 359, 273, {"name":"StatementMaybeOf"}],
    [1, 6, 274],
    [1, 137, 275,
     0, 275,
     0, 279],
    [1, 6, 276],
    [";", 277],
    [1, 6, 278],
    [1, 137, 279,
     0, 279],
    [1, 6, 280],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 282,
     0, 282],
    [1, 6, 283],
    [3, "def property", e[20], 284,
     "[", 285,
     3, "number", e[32], 284,
     2, 118, 284, {"name":"string","token":"string"},
     3, "operator", "...", 286],
    [1, 6, 287],
    [1, 6, 288],
    [1, 6, 289],
    [3, "keyword", "*", 290,
     0, 290,
     ":", 291,
     0, -1],
    [1, 137, 292],
    [1, 146, -1],
    [1, 6, 293],
    [1, 6, 294],
    [1, 6, 295],
    [2, 159, -1, {"name":"FunctionDef"}],
    [1, 146, -1],
    ["]", 284],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 297,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[38], 297,
     "{", 298,
     0, 299,
     0, -1],
    [2, 302, 300, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 301],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 301,
     0, 299],
    [3, "type", "{", 303,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 302,
     "\n", 304,
     0, -1],
    [2, 302, 305, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 302],
    [/^(?=\*\/)/, 302,
     3, "type", "}", 302],
    [3, "keyword", e[39], 307],
    [1, 6, 308],
    [".", 309,
     1, 207, 310],
    [1, 6, 311],
    [1, 6, 312],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 336, 313, {"name":"ArgList"},
     ".", 314,
     0, -1],
    [1, 6, 312],
    [1, 6, 315],
    [3, "property callee", e[37], 313,
     3, "property", e[20], 313],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 364]], 318,
     [5, 366], 317],
    [2, 265, 318, {"name":"ParamList"}],
    [1, 6, 319],
    [2, 369, -1, {"name":"ArrowRest"}],
    ["[", 321],
    [1, 6, 322],
    [1, 372, 323],
    [1, 6, 324],
    ["]", -1],
    ["{", 326],
    [1, 6, 327],
    [1, 378, 328],
    [1, 6, 329],
    ["}", -1],
    ["(", 331],
    [1, 6, 332],
    [1, 137, 333],
    [1, 6, 334],
    [")", -1],
    [3, "keyword", e[21], -1],
    ["(", 337],
    [1, 6, 338],
    [1, 372, 339],
    [1, 6, 340],
    [")", -1],
    [1, 384, 342,
     0, 342,
     0, -1],
    [1, 6, 343],
    [",", 344,
     0, -1],
    [1, 6, 345],
    [1, 384, 346,
     0, 346,
     0, 346],
    [1, 6, 343],
    [1, 389, 348,
     0, -1],
    [1, 6, 349],
    [",", 350,
     0, -1],
    [1, 6, 351],
    [1, 389, 352,
     0, 352],
    [1, 6, 349],
    [1, 384, 354,
     0, -1],
    [1, 6, 355],
    [",", 356,
     0, -1],
    [1, 6, 357],
    [1, 384, 358,
     0, 358],
    [1, 6, 355],
    [2, 7, 360, {"name":"Statement"}],
    [1, 6, 361],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 362,
     0, -1],
    [1, 6, 363],
    [1, 137, -1],
    [1, 6, 365],
    ["=>", -1],
    [2, 265, 367, {"name":"ParamList"}],
    [1, 6, 368],
    ["=>", -1],
    [3, "operator", "=>", 370],
    [1, 6, 371],
    [2, 133, -1, {"name":"Block"},
     1, 146, -1],
    [1, 146, 373,
     0, -1],
    [1, 6, 374],
    [",", 375,
     0, -1],
    [1, 6, 376],
    [1, 146, 377,
     0, 377],
    [1, 6, 374],
    [2, 281, 379, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 380],
    [",", 381,
     0, -1],
    [1, 6, 382],
    [2, 281, 383, {"name":"ObjectMember"},
     0, 383],
    [1, 6, 380],
    [1, 143, 385],
    [1, 6, 386],
    [3, "operator", "=", 387,
     0, -1],
    [1, 6, 388],
    [1, 146, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 390,
     3, "property", e[20], 394,
     3, "number", e[32], 394,
     2, 118, 394, {"name":"string","token":"string"},
     3, "operator", "...", 398],
    [1, 6, 391],
    [3, "operator", "=", 392,
     0, -1],
    [1, 6, 393],
    [1, 146, -1],
    [1, 6, 395],
    [":", 396],
    [1, 6, 397],
    [1, 384, -1],
    [1, 6, 399],
    [1, 384, -1]
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
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"];

  var JSMode = (function (superclass) {
    function JSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) JSMode.__proto__ = superclass;
    JSMode.prototype = Object.create( superclass && superclass.prototype );
    JSMode.prototype.constructor = JSMode;

    JSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    JSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return JSMode;
  }(CodeMirror.GrammarMode));

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

  CodeMirror.registerHelper("wordChars", "google-javascript", /[\w$]/);

  CodeMirror.defineMode("google-javascript", function (conf, modeConf) { return new JSMode(conf, modeConf); });

})));
