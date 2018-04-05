(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 120]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^\/(?![\/\*])(?:\\.|.)+\//, /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[23], -1,
     3, "keyword", /^do(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[31], -1,
     3, "atom", e[30], -1,
     3, "variable", e[17], -1,
     3, "operator", e[33], -1,
     3, "operator", e[38], -1,
     3, "operator", e[37], -1,
     2, 122, -1, {"name":"string","token":"string"},
     3, "number", e[35], -1,
     2, 127, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[36], -1,
     1, 133, -1,
     /^[^]/, -1],
    [e[25], 6,
     2, 127, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 8,
     3, "keyword", e[1], 23,
     2, 137, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], 27,
     3, "keyword", e[4], 32,
     3, "keyword", e[5], 38,
     3, "keyword", e[6], 40,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 40,
     3, "keyword", e[7], 41,
     3, "keyword", e[8], 44,
     3, "keyword", e[9], 48,
     3, "keyword", e[10], 52,
     3, "keyword", e[11], 56,
     3, "keyword", e[12], 60,
     3, "keyword", e[13], 76,
     3, "keyword", e[14], 84,
     3, "keyword", e[15], 96,
     3, "keyword", e[16], 112,
     "@", 114,
     1, 141, 118],
    [1, 6, 9],
    [1, 147, 10],
    [1, 6, 11],
    [3, "operator", "=", 12,
     0, 13],
    [1, 6, 14],
    [1, 6, 15],
    [1, 150, 13],
    [",", 16,
     e[18], -1],
    [1, 6, 17],
    [1, 147, 18],
    [1, 6, 19],
    [3, "operator", "=", 20,
     0, 21],
    [1, 6, 22],
    [1, 6, 15],
    [1, 150, 21],
    [1, 6, 24],
    [2, 154, 25, {"name":"CondExpr"}],
    [1, 6, 26],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 28],
    [2, 154, 29, {"name":"CondExpr"}],
    [1, 6, 30],
    [2, 7, 31, {"name":"Statement"}],
    [2, 159, -1, {"name":"Alternative"}],
    [1, 6, 33],
    [3, "keyword", "*", 34,
     0, 34],
    [1, 6, 35],
    [3, "def", e[17], 36],
    [1, 6, 37],
    [2, 163, -1, {"name":"FunctionDef"}],
    [1, 6, 39],
    [2, 166, -1, {"name":"ForStatement"}],
    [1, 6, 42],
    [1, 6, 43],
    [":", -1],
    [1, 141, 40],
    [1, 6, 45],
    [e[18], -1,
     1, 141, 46],
    [1, 6, 47],
    [e[18], -1],
    [1, 6, 49],
    [1, 141, 50],
    [1, 6, 51],
    [e[18], -1],
    [1, 6, 53],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 54],
    [1, 6, 55],
    [e[18], -1],
    [1, 6, 57],
    [2, 154, 58, {"name":"CondExpr"}],
    [1, 6, 59],
    [2, 137, -1, {"name":"Block"}],
    [1, 6, 61],
    [2, 137, 62, {"name":"Block"}],
    [1, 6, 63],
    [3, "keyword", e[19], 64,
     0, 65],
    [1, 6, 66],
    [1, 6, 67],
    ["(", 68],
    [3, "keyword", e[20], 69,
     0, -1],
    [1, 6, 70],
    [1, 6, 71],
    [3, "def", e[17], 72],
    [2, 137, -1, {"name":"Block"}],
    [1, 6, 73],
    [")", 74],
    [1, 6, 75],
    [2, 137, 65, {"name":"Block"}],
    [1, 6, 77],
    [3, "type def", e[17], 78],
    [1, 6, 79],
    [3, "keyword", e[21], 80,
     0, 81],
    [1, 6, 82],
    [1, 6, 83],
    [1, 141, 81],
    [2, 169, -1, {"name":"ClassBody"}],
    [1, 6, 85],
    ["*", 86,
     3, "keyword", e[6], 86,
     "{", 87,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 88],
    [1, 6, 89],
    [3, "keyword", e[22], 90,
     0, 91],
    [1, 177, 92],
    [1, 6, 93],
    [1, 6, 94],
    [1, 6, 95],
    [2, 122, 91, {"name":"string","token":"string"}],
    [e[18], -1],
    ["}", 86],
    [1, 6, 97],
    [2, 122, 98, {"name":"string","token":"string"},
     3, "keyword", "*", 99,
     1, 183, 100,
     "{", 101],
    [1, 6, 102],
    [1, 6, 103],
    [1, 6, 104],
    [1, 6, 105],
    [e[18], -1],
    [3, "keyword", e[24], 106,
     0, 100],
    [3, "keyword", e[22], 107,
     0, 98],
    [1, 177, 108],
    [1, 6, 109],
    [1, 6, 110],
    [1, 6, 111],
    [3, "def", e[17], 100],
    [2, 122, 98, {"name":"string","token":"string"}],
    ["}", 100],
    [1, 6, 113],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 115],
    [1, 141, 116],
    [1, 6, 117],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 119],
    [e[18], -1],
    [1, 6, 121],
    [3, "keyword", e[4], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 123,
     "\"", 125],
    ["\\", 124,
     /^(?!\')./, 123,
     "'", -1],
    [/^[^]/, 123],
    ["\\", 126,
     /^(?!\")./, 125,
     "\"", -1],
    [/^[^]/, 125],
    [/^\/\*\*(?!\/)/, 128,
     "/*", 132,
     /^\/\/.*/, -1],
    [0, 129,
     2, 188, 128, {"name":"doccomment.braced"},
     0, 130],
    [e[29], 131],
    [2, 196, 130, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 129,
     0, 128],
    [[0, /^(?!\*\/)/, /^[^]/], 132,
     "*/", -1],
    [3, "string-2", "`", 134],
    [3, "string-2", "${", 135,
     2, 204, 134, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 134,
     3, "string-2", "`", -1],
    [1, 141, 136],
    [3, "string-2", "}", 134],
    ["{", 138],
    [1, 6, 139],
    [2, 7, 140, {"name":"Statement"},
     "}", -1],
    [1, 6, 139],
    [1, 206, 142],
    [1, 6, 143],
    [",", 144,
     1, 228, 145,
     0, -1],
    [1, 6, 146],
    [1, 6, 143],
    [1, 141, 145],
    [3, "operator", "...", 148,
     0, 148],
    [1, 6, 149],
    [3, "def", e[17], -1,
     2, 243, -1, {"name":"ArrayPattern"},
     2, 248, -1, {"name":"ObjectPattern"}],
    [1, 206, 151],
    [1, 6, 152],
    [1, 253, 153,
     0, -1],
    [1, 6, 152],
    ["(", 155],
    [1, 6, 156],
    [1, 141, 157],
    [1, 6, 158],
    [")", -1],
    [1, 6, 160],
    [3, "keyword", e[23], 161,
     0, -1],
    [1, 6, 162],
    [2, 7, -1, {"name":"Statement"}],
    [2, 268, 164, {"name":"ParamList"}],
    [1, 6, 165],
    [2, 137, -1, {"name":"Block"}],
    [2, 273, 167, {"name":"ForSpec"}],
    [1, 6, 168],
    [2, 7, -1, {"name":"Statement"}],
    ["{", 170],
    [1, 6, 171],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 172,
     0, 172,
     "@", 173,
     "}", -1],
    [1, 6, 174],
    [1, 6, 175],
    [2, 286, 176, {"name":"ObjectMember"}],
    [1, 141, 176],
    [1, 6, 171],
    [1, 183, 178,
     0, -1],
    [1, 6, 179],
    [",", 180,
     0, -1],
    [1, 6, 181],
    [1, 183, 182,
     0, 182],
    [1, 6, 179],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *as)/, 184,
     3, "def", e[17], -1],
    [1, 6, 185],
    [3, "keyword", e[24], 186],
    [1, 6, 187],
    [3, "def", e[17], -1],
    ["{", 189],
    [3, "tag", e[26], 190,
     3, "tag", e[27], 191,
     2, 301, 195, {"name":"doccomment.type","token":"type"}],
    [e[25], 190,
     "{", 192,
     0, 191],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 191,
     0, 195],
    [2, 301, 193, {"name":"doccomment.type","token":"type"}],
    ["}", 194],
    [e[25], 194,
     3, "def", e[28], 191,
     0, 191],
    ["}", -1],
    [3, "tag", e[26], 197,
     3, "tag", e[27], 201],
    [e[25], 197,
     "{", 198,
     0, 201],
    [2, 301, 199, {"name":"doccomment.type","token":"type"}],
    ["}", 200],
    [e[25], 200,
     3, "def", e[28], 201,
     0, 201],
    [0, 202,
     2, 188, 201, {"name":"doccomment.braced"},
     0, -1],
    [e[29], 203],
    [0, 202,
     0, 201],
    ["\\", 205,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[30], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[32], 207,
     3, "operator", e[33], 207,
     3, "keyword", e[16], 207,
     3, "keyword", e[34], 209,
     3, "keyword", e[4], 213,
     3, "keyword", e[13], 219,
     2, 302, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[40], -1,
     3, "variable", e[17], -1,
     3, "number", e[35], -1,
     2, 122, -1, {"name":"string","token":"string"},
     3, "string-2", e[36], -1,
     1, 133, -1,
     2, 306, -1, {"name":"ArrayLiteral"},
     2, 311, -1, {"name":"ObjectLiteral"},
     2, 316, -1, {"name":"ParenExpr"}],
    [1, 6, 208],
    [1, 206, -1],
    [1, 6, 210],
    [".", 211,
     1, 206, -1],
    [1, 6, 212],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [1, 6, 214],
    [3, "keyword", "*", 215,
     0, 215],
    [1, 6, 216],
    [3, "def", e[17], 217,
     0, 217],
    [1, 6, 218],
    [2, 163, -1, {"name":"FunctionDef"}],
    [1, 6, 220],
    [[6, 321], 221,
     0, 222],
    [3, "type def", e[17], 222],
    [1, 6, 223],
    [3, "keyword", e[21], 224,
     0, 225],
    [1, 6, 226],
    [1, 6, 227],
    [1, 141, 225],
    [2, 169, -1, {"name":"ClassBody"}],
    [3, "operator", e[37], -1,
     3, "operator", e[38], 229,
     3, "keyword", e[39], 229,
     2, 322, -1, {"name":"ArgList"},
     1, 133, -1,
     ".", 231,
     "[", 233,
     3, "operator", "?", 237],
    [1, 6, 230],
    [1, 141, -1],
    [1, 6, 232],
    [3, "property callee", e[40], -1,
     3, "property", e[17], -1],
    [1, 6, 234],
    [1, 141, 235],
    [1, 6, 236],
    ["]", -1],
    [1, 6, 238],
    [1, 141, 239],
    [1, 6, 240],
    [3, "operator", ":", 241],
    [1, 6, 242],
    [1, 141, -1],
    ["[", 244],
    [1, 6, 245],
    [1, 327, 246],
    [1, 6, 247],
    ["]", -1],
    ["{", 249],
    [1, 6, 250],
    [1, 333, 251],
    [1, 6, 252],
    ["}", -1],
    [3, "operator", e[37], -1,
     3, "operator", e[38], 254,
     3, "keyword", e[39], 254,
     2, 322, -1, {"name":"ArgList"},
     1, 133, -1,
     ".", 256,
     "[", 258,
     3, "operator", "?", 262],
    [1, 6, 255],
    [1, 150, -1],
    [1, 6, 257],
    [3, "property callee", e[40], -1,
     3, "property", e[17], -1],
    [1, 6, 259],
    [1, 141, 260],
    [1, 6, 261],
    ["]", -1],
    [1, 6, 263],
    [1, 141, 264],
    [1, 6, 265],
    [3, "operator", ":", 266],
    [1, 6, 267],
    [1, 150, -1],
    ["(", 269],
    [1, 6, 270],
    [1, 327, 271],
    [1, 6, 272],
    [")", -1],
    ["(", 274],
    [1, 6, 275],
    [2, 7, 276, {"name":"Statement"}],
    [1, 6, 277],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 278,
     1, 141, 279,
     0, 279,
     0, 284],
    [1, 6, 280],
    [1, 6, 281],
    [1, 141, 284],
    [";", 282],
    [1, 6, 283],
    [1, 141, 284,
     0, 284],
    [1, 6, 285],
    [")", -1],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 287,
     0, 287],
    [1, 6, 288],
    [3, "def property", e[17], 289,
     "[", 290,
     3, "number", e[35], 289,
     2, 122, 289, {"name":"string","token":"string"},
     3, "operator", "...", 291],
    [1, 6, 292],
    [1, 6, 293],
    [1, 6, 294],
    [3, "keyword", "*", 295,
     0, 295,
     ":", 296,
     0, -1],
    [1, 141, 297],
    [1, 150, -1],
    [1, 6, 298],
    [1, 6, 299],
    [1, 6, 300],
    [2, 163, -1, {"name":"FunctionDef"}],
    [1, 150, -1],
    ["]", 289],
    [1, 351, -1],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 355]], 304,
     [5, 357], 303],
    [2, 268, 304, {"name":"ParamList"}],
    [1, 6, 305],
    [2, 360, -1, {"name":"ArrowRest"}],
    ["[", 307],
    [1, 6, 308],
    [1, 363, 309],
    [1, 6, 310],
    ["]", -1],
    ["{", 312],
    [1, 6, 313],
    [1, 369, 314],
    [1, 6, 315],
    ["}", -1],
    ["(", 317],
    [1, 6, 318],
    [1, 141, 319],
    [1, 6, 320],
    [")", -1],
    [3, "keyword", e[21], -1],
    ["(", 323],
    [1, 6, 324],
    [1, 363, 325],
    [1, 6, 326],
    [")", -1],
    [1, 375, 328,
     0, -1],
    [1, 6, 329],
    [",", 330,
     0, -1],
    [1, 6, 331],
    [1, 375, 332,
     0, 332],
    [1, 6, 329],
    [3, "def", e[41], 334,
     3, "property", e[17], 335,
     3, "operator", "...", 336,
     0, -1],
    [1, 6, 337],
    [1, 6, 338],
    [1, 6, 339],
    [",", 340,
     0, -1],
    [":", 341],
    [1, 375, 334],
    [1, 6, 342],
    [1, 6, 343],
    [3, "def", e[41], 344,
     3, "property", e[17], 345,
     3, "operator", "...", 346,
     0, 344],
    [1, 375, 334],
    [1, 6, 337],
    [1, 6, 347],
    [1, 6, 348],
    [":", 349],
    [1, 375, 344],
    [1, 6, 350],
    [1, 375, 344],
    [/^(?!\}|\*\/)/, 352,
     0, -1],
    ["{", 353,
     /^[^]/, 351],
    [1, 351, 354],
    [/^\}?/, 351],
    [1, 6, 356],
    ["=>", -1],
    [2, 268, 358, {"name":"ParamList"}],
    [1, 6, 359],
    ["=>", -1],
    [3, "operator", "=>", 361],
    [1, 6, 362],
    [2, 137, -1, {"name":"Block"},
     1, 150, -1],
    [1, 150, 364,
     0, -1],
    [1, 6, 365],
    [",", 366,
     0, -1],
    [1, 6, 367],
    [1, 150, 368,
     0, 368],
    [1, 6, 365],
    [2, 286, 370, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 371],
    [",", 372,
     0, -1],
    [1, 6, 373],
    [2, 286, 374, {"name":"ObjectMember"},
     0, 374],
    [1, 6, 371],
    [1, 147, 376],
    [1, 6, 377],
    [3, "operator", "=", 378,
     0, -1],
    [1, 6, 379],
    [1, 150, -1]
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
    if (textAfter.charAt(0) == "#") { return 0 }
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }
    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
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
