(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 114]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, [1, "\n", "\t", " "], /^new(?![a-zA-Z¡-￿_0-9_\$])/];
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
     2, 116, -1, {"name":"string","token":"string"},
     3, "number", e[32], -1,
     2, 121, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[33], -1,
     1, 127, -1,
     /^[^]/, -1],
    [e[38], 6,
     2, 121, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 8,
     3, "keyword", e[1], 23,
     3, "keyword", e[2], 23,
     3, "keyword", e[3], 27,
     2, 131, -1, {"name":"Block"},
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
     1, 135, 112],
    [1, 6, 9],
    [1, 141, 10],
    [1, 6, 11],
    [3, "operator", "=", 12,
     0, 13],
    [1, 6, 14],
    [1, 6, 15],
    [1, 144, 13],
    [",", 16,
     e[19], -1],
    [1, 6, 17],
    [1, 141, 18],
    [1, 6, 19],
    [3, "operator", "=", 20,
     0, 21],
    [1, 6, 22],
    [1, 6, 15],
    [1, 144, 21],
    [1, 6, 24],
    [2, 148, 25, {"name":"CondExpr"}],
    [1, 6, 26],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 28],
    [2, 7, 29, {"name":"Statement"}],
    [1, 6, 30],
    [3, "keyword", e[1], 31,
     0, -1],
    [1, 6, 32],
    [2, 148, 33, {"name":"CondExpr"}],
    [1, 6, 34],
    [e[19], -1],
    [1, 6, 36],
    [2, 148, 37, {"name":"CondExpr"}],
    [1, 6, 38],
    [2, 7, 39, {"name":"Statement"}],
    [2, 153, -1, {"name":"Alternative"}],
    [1, 6, 41],
    [3, "keyword", "*", 42,
     0, 42],
    [1, 6, 43],
    [3, "def", e[20], 44],
    [1, 6, 45],
    [2, 157, -1, {"name":"FunctionDef"}],
    [1, 6, 47],
    [2, 160, -1, {"name":"ForStatement"}],
    [1, 6, 50],
    [1, 6, 51],
    [":", -1],
    [1, 135, 48],
    [1, 6, 53],
    [e[19], -1,
     1, 135, 54],
    [1, 6, 55],
    [e[19], -1],
    [1, 6, 57],
    [1, 135, 58],
    [1, 6, 59],
    [e[19], -1],
    [1, 6, 61],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 62],
    [1, 6, 63],
    [e[19], -1],
    [1, 6, 65],
    [2, 148, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 131, -1, {"name":"Block"}],
    [1, 6, 69],
    [2, 131, 70, {"name":"Block"}],
    [1, 6, 71],
    [2, 163, -1, {"name":"Catch"}],
    [1, 6, 73],
    [3, "type def", e[20], 74],
    [1, 6, 75],
    [3, "keyword", e[21], 76,
     0, 77],
    [1, 6, 78],
    [1, 6, 79],
    [1, 135, 77],
    [2, 176, -1, {"name":"ClassBody"}],
    [1, 6, 81],
    ["*", 82,
     3, "keyword", e[8], 82,
     "{", 83,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 84],
    [1, 6, 85],
    [3, "keyword", e[22], 86,
     0, 87],
    [1, 184, 88],
    [1, 6, 89],
    [1, 6, 90],
    [1, 6, 91],
    [2, 116, 87, {"name":"string","token":"string"}],
    [e[19], -1],
    ["}", 82],
    [1, 6, 93],
    [2, 116, 94, {"name":"string","token":"string"},
     3, "keyword", "*", 95,
     1, 190, 96,
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
    [1, 184, 104],
    [1, 6, 105],
    [1, 6, 106],
    [1, 6, 107],
    [3, "def", e[20], 96],
    [2, 116, 94, {"name":"string","token":"string"}],
    ["}", 96],
    [1, 6, 109],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 111],
    [1, 135, -1],
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
     "/*", 126,
     /^\/\/.*/, -1],
    [0, 123,
     2, 195, 122, {"name":"doccomment.braced"},
     0, 124],
    [e[27], 125],
    [2, 199, 124, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 123,
     0, 122],
    [[0, /^(?!\*\/)/, /^[^]/], 126,
     "*/", -1],
    [3, "string-2", "`", 128],
    [3, "string-2", "${", 129,
     2, 203, 128, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 128,
     3, "string-2", "`", -1],
    [1, 135, 130],
    [3, "string-2", "}", 128],
    ["{", 132],
    [1, 6, 133],
    [2, 7, 134, {"name":"Statement"},
     "}", -1],
    [1, 6, 133],
    [1, 205, 136],
    [1, 6, 137],
    [",", 138,
     1, 223, 139,
     0, -1],
    [1, 6, 140],
    [1, 6, 137],
    [1, 135, 139],
    [3, "operator", "...", 142,
     0, 142],
    [1, 6, 143],
    [3, "def", e[20], -1,
     2, 238, -1, {"name":"ArrayPattern"},
     2, 243, -1, {"name":"ObjectPattern"}],
    [1, 205, 145],
    [1, 6, 146],
    [1, 248, 147,
     0, -1],
    [1, 6, 146],
    ["(", 149],
    [1, 6, 150],
    [1, 135, 151],
    [1, 6, 152],
    [")", -1],
    [1, 6, 154],
    [3, "keyword", e[23], 155,
     0, -1],
    [1, 6, 156],
    [2, 7, -1, {"name":"Statement"}],
    [2, 263, 158, {"name":"ParamList"}],
    [1, 6, 159],
    [2, 131, -1, {"name":"Block"}],
    [2, 268, 161, {"name":"ForSpec"}],
    [1, 6, 162],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[24], 164,
     0, 172],
    [1, 6, 165],
    ["(", 166,
     0, 167],
    [1, 6, 168],
    [1, 6, 169],
    [3, "def", e[20], 170],
    [2, 131, 172, {"name":"Block"}],
    [1, 6, 171],
    [")", 167],
    [1, 6, 173],
    [3, "keyword", e[25], 174,
     0, -1],
    [1, 6, 175],
    [2, 131, -1, {"name":"Block"}],
    ["{", 177],
    [1, 6, 178],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 179,
     0, 179,
     "@", 180,
     "}", -1],
    [1, 6, 181],
    [1, 6, 182],
    [2, 279, 183, {"name":"ObjectMember"}],
    [1, 135, 183],
    [1, 6, 178],
    [1, 190, 185,
     0, -1],
    [1, 6, 186],
    [",", 187,
     0, -1],
    [1, 6, 188],
    [1, 190, 189,
     0, 189],
    [1, 6, 186],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 191,
     3, "def", e[20], -1],
    [1, 6, 192],
    [3, "keyword", e[26], 193],
    [1, 6, 194],
    [3, "def", e[20], -1],
    ["{", 196],
    [1, 294, 197,
     2, 300, 198, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 197,
     0, 198],
    [/^(?:\}|(?=\*\/))/, -1],
    [1, 294, 200],
    [0, 201,
     2, 195, 200, {"name":"doccomment.braced"},
     0, -1],
    [e[27], 202],
    [0, 201,
     0, 200],
    ["\\", 204,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], 206,
     3, "operator", e[31], 206,
     3, "keyword", e[18], 206,
     2, 304, -1, {"name":"NewExpression"},
     3, "keyword", e[6], 208,
     3, "keyword", e[15], 214,
     2, 314, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[37], -1,
     3, "variable", e[20], -1,
     3, "number", e[32], -1,
     2, 116, -1, {"name":"string","token":"string"},
     3, "string-2", e[33], -1,
     1, 127, -1,
     2, 318, -1, {"name":"ArrayLiteral"},
     2, 323, -1, {"name":"ObjectLiteral"},
     2, 328, -1, {"name":"ParenExpr"}],
    [1, 6, 207],
    [1, 205, -1],
    [1, 6, 209],
    [3, "keyword", "*", 210,
     0, 210],
    [1, 6, 211],
    [3, "def", e[20], 212,
     0, 212],
    [1, 6, 213],
    [2, 157, -1, {"name":"FunctionDef"}],
    [1, 6, 215],
    [[6, 333], 216,
     0, 217],
    [3, "type def", e[20], 217],
    [1, 6, 218],
    [3, "keyword", e[21], 219,
     0, 220],
    [1, 6, 221],
    [1, 6, 222],
    [1, 135, 220],
    [2, 176, -1, {"name":"ClassBody"}],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 224,
     3, "keyword", e[36], 224,
     2, 334, -1, {"name":"ArgList"},
     1, 127, -1,
     ".", 226,
     "[", 228,
     3, "operator", "?", 232],
    [1, 6, 225],
    [1, 135, -1],
    [1, 6, 227],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 229],
    [1, 135, 230],
    [1, 6, 231],
    ["]", -1],
    [1, 6, 233],
    [1, 135, 234],
    [1, 6, 235],
    [3, "operator", ":", 236],
    [1, 6, 237],
    [1, 135, -1],
    ["[", 239],
    [1, 6, 240],
    [1, 339, 241],
    [1, 6, 242],
    ["]", -1],
    ["{", 244],
    [1, 6, 245],
    [1, 345, 246],
    [1, 6, 247],
    ["}", -1],
    [3, "operator", e[34], -1,
     3, "operator", e[35], 249,
     3, "keyword", e[36], 249,
     2, 334, -1, {"name":"ArgList"},
     1, 127, -1,
     ".", 251,
     "[", 253,
     3, "operator", "?", 257],
    [1, 6, 250],
    [1, 144, -1],
    [1, 6, 252],
    [3, "property callee", e[37], -1,
     3, "property", e[20], -1],
    [1, 6, 254],
    [1, 135, 255],
    [1, 6, 256],
    ["]", -1],
    [1, 6, 258],
    [1, 135, 259],
    [1, 6, 260],
    [3, "operator", ":", 261],
    [1, 6, 262],
    [1, 144, -1],
    ["(", 264],
    [1, 6, 265],
    [1, 351, 266],
    [1, 6, 267],
    [")", -1],
    ["(", 269],
    [1, 6, 270],
    [2, 357, 271, {"name":"StatementMaybeOf"}],
    [1, 6, 272],
    [1, 135, 273,
     0, 273,
     0, 277],
    [1, 6, 274],
    [";", 275],
    [1, 6, 276],
    [1, 135, 277,
     0, 277],
    [1, 6, 278],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 280,
     0, 280],
    [1, 6, 281],
    [3, "def property", e[20], 282,
     "[", 283,
     3, "number", e[32], 282,
     2, 116, 282, {"name":"string","token":"string"},
     3, "operator", "...", 284],
    [1, 6, 285],
    [1, 6, 286],
    [1, 6, 287],
    [3, "keyword", "*", 288,
     0, 288,
     ":", 289,
     0, -1],
    [1, 135, 290],
    [1, 144, -1],
    [1, 6, 291],
    [1, 6, 292],
    [1, 6, 293],
    [2, 157, -1, {"name":"FunctionDef"}],
    [1, 144, -1],
    ["]", 282],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 295,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[38], 295,
     "{", 296,
     0, 297,
     0, -1],
    [2, 300, 298, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 299],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 299,
     0, 297],
    [3, "type", "{", 301,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 300,
     "\n", 302,
     0, -1],
    [2, 300, 303, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 300],
    [/^(?=\*\/)/, 300,
     3, "type", "}", 300],
    [3, "keyword", e[39], 305],
    [1, 6, 306],
    [".", 307,
     1, 205, 308],
    [1, 6, 309],
    [1, 6, 310],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 334, 311, {"name":"ArgList"},
     ".", 312,
     0, -1],
    [1, 6, 310],
    [1, 6, 313],
    [3, "property callee", e[37], 311,
     3, "property", e[20], 311],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 362]], 316,
     [5, 364], 315],
    [2, 263, 316, {"name":"ParamList"}],
    [1, 6, 317],
    [2, 367, -1, {"name":"ArrowRest"}],
    ["[", 319],
    [1, 6, 320],
    [1, 370, 321],
    [1, 6, 322],
    ["]", -1],
    ["{", 324],
    [1, 6, 325],
    [1, 376, 326],
    [1, 6, 327],
    ["}", -1],
    ["(", 329],
    [1, 6, 330],
    [1, 135, 331],
    [1, 6, 332],
    [")", -1],
    [3, "keyword", e[21], -1],
    ["(", 335],
    [1, 6, 336],
    [1, 370, 337],
    [1, 6, 338],
    [")", -1],
    [1, 382, 340,
     0, 340,
     0, -1],
    [1, 6, 341],
    [",", 342,
     0, -1],
    [1, 6, 343],
    [1, 382, 344,
     0, 344,
     0, 344],
    [1, 6, 341],
    [1, 387, 346,
     0, -1],
    [1, 6, 347],
    [",", 348,
     0, -1],
    [1, 6, 349],
    [1, 387, 350,
     0, 350],
    [1, 6, 347],
    [1, 382, 352,
     0, -1],
    [1, 6, 353],
    [",", 354,
     0, -1],
    [1, 6, 355],
    [1, 382, 356,
     0, 356],
    [1, 6, 353],
    [2, 7, 358, {"name":"Statement"}],
    [1, 6, 359],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 360,
     0, -1],
    [1, 6, 361],
    [1, 135, -1],
    [1, 6, 363],
    ["=>", -1],
    [2, 263, 365, {"name":"ParamList"}],
    [1, 6, 366],
    ["=>", -1],
    [3, "operator", "=>", 368],
    [1, 6, 369],
    [2, 131, -1, {"name":"Block"},
     1, 144, -1],
    [1, 144, 371,
     0, -1],
    [1, 6, 372],
    [",", 373,
     0, -1],
    [1, 6, 374],
    [1, 144, 375,
     0, 375],
    [1, 6, 372],
    [2, 279, 377, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 378],
    [",", 379,
     0, -1],
    [1, 6, 380],
    [2, 279, 381, {"name":"ObjectMember"},
     0, 381],
    [1, 6, 378],
    [1, 141, 383],
    [1, 6, 384],
    [3, "operator", "=", 385,
     0, -1],
    [1, 6, 386],
    [1, 144, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 388,
     3, "property", e[20], 392,
     3, "number", e[32], 392,
     2, 116, 392, {"name":"string","token":"string"},
     3, "operator", "...", 396],
    [1, 6, 389],
    [3, "operator", "=", 390,
     0, -1],
    [1, 6, 391],
    [1, 144, -1],
    [1, 6, 393],
    [":", 394],
    [1, 6, 395],
    [1, 382, -1],
    [1, 6, 397],
    [1, 382, -1]
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
