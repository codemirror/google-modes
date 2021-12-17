(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
})(this, (function (CodeMirror$1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var CodeMirror__namespace = /*#__PURE__*/_interopNamespace(CodeMirror$1);

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 139]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 508]], /^(?:\+\+|\-\-)/, /^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.|\?\.)/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 533]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.)?/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
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
     3, "keyword", e[30], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[35], -1,
     3, "keyword", e[34], -1,
     3, "atom", e[27], -1,
     3, "variable", e[19], -1,
     3, "operator", e[36], -1,
     3, "operator", e[40], -1,
     3, "operator", e[39], -1,
     2, 141, -1, {"name":"string","token":"string"},
     3, "number", e[29], -1,
     2, 146, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[37], -1,
     1, 150, -1,
     /^[^]/, -1],
    [e[24], 6,
     2, 146, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 154]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 155]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 156]], 26,
     [5, 157], 36,
     3, "keyword", e[21], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 160]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     3, "keyword", e[2], 52,
     3, "keyword", e[3], 56,
     2, 161, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[5], 64,
     3, "keyword", e[6], 69,
     3, "keyword", e[7], 75,
     3, "keyword", e[8], 77,
     e[45], 77,
     3, "keyword", e[9], 78,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 93,
     3, "keyword", e[14], 97,
     3, "keyword", e[15], 101,
     3, "keyword", e[16], 105,
     3, "keyword", e[17], 117,
     3, "keyword", e[18], 133,
     "@", 135,
     1, 165, 137],
    [1, 6, 9],
    [3, "def type", e[19], 10],
    [1, 6, 11],
    [2, 171, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 176, 16],
    [1, 6, 17],
    [e[22], -1],
    [1, 6, 19],
    [[5, 224], 20,
     3, "def", e[19], 21],
    [3, "variable", e[19], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 161, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[19], 28],
    [1, 6, 29],
    [2, 171, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[20], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 227, 33],
    [2, 233, -1, {"name":"ObjType"}],
    [3, "keyword", e[26], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[19], 41],
    [3, "keyword", e[21], 37],
    [1, 6, 42],
    [2, 241, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 246, 47],
    [1, 6, 48],
    [",", 49,
     e[22], -1],
    [1, 6, 50],
    [1, 246, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 257, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 7, 58, {"name":"Statement"}],
    [1, 6, 59],
    [3, "keyword", e[1], 60,
     0, -1],
    [1, 6, 61],
    [2, 257, 62, {"name":"CondExpr"}],
    [1, 6, 63],
    [e[22], -1],
    [1, 6, 65],
    [2, 257, 66, {"name":"CondExpr"}],
    [1, 6, 67],
    [2, 7, 68, {"name":"Statement"}],
    [2, 262, -1, {"name":"Alternative"}],
    [1, 6, 70],
    [3, "keyword", "*", 71,
     0, 71],
    [1, 6, 72],
    [3, "def", e[19], 73],
    [1, 6, 74],
    [2, 266, -1, {"name":"FunctionDef"}],
    [1, 6, 76],
    [2, 275, -1, {"name":"ForStatement"}],
    [1, 6, 79],
    [1, 6, 80],
    [":", -1],
    [1, 165, 77],
    [1, 6, 82],
    [e[22], -1,
     1, 165, 83],
    [1, 6, 84],
    [e[22], -1],
    [1, 6, 86],
    [1, 165, 87],
    [1, 6, 88],
    [e[22], -1],
    [1, 6, 90],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 91],
    [1, 6, 92],
    [e[22], -1],
    [1, 6, 94],
    [2, 257, 95, {"name":"CondExpr"}],
    [1, 6, 96],
    [2, 161, -1, {"name":"Block"}],
    [1, 6, 98],
    [2, 161, 99, {"name":"Block"}],
    [1, 6, 100],
    [2, 278, -1, {"name":"CatchFinally"}],
    [1, 6, 102],
    [3, "def type", e[19], 103],
    [1, 6, 104],
    [1, 291, -1],
    [1, 6, 106],
    ["*", 107,
     3, "keyword", e[8], 107,
     "{", 108,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 109],
    [1, 6, 110],
    [3, "keyword", e[23], 111,
     0, 112],
    [1, 302, 113],
    [1, 6, 114],
    [1, 6, 115],
    [1, 6, 116],
    [2, 141, 112, {"name":"string","token":"string"}],
    [e[22], -1],
    ["}", 107],
    [1, 6, 118],
    [2, 141, 119, {"name":"string","token":"string"},
     3, "keyword", "*", 120,
     1, 308, 121,
     "{", 122],
    [1, 6, 123],
    [1, 6, 124],
    [1, 6, 125],
    [1, 6, 126],
    [e[22], -1],
    [3, "keyword", e[33], 127,
     0, 121],
    [3, "keyword", e[23], 128,
     0, 119],
    [1, 302, 129],
    [1, 6, 130],
    [1, 6, 131],
    [1, 6, 132],
    [3, "def", e[19], 121],
    [2, 141, 119, {"name":"string","token":"string"}],
    ["}", 121],
    [1, 6, 134],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 136],
    [1, 165, -1],
    [1, 6, 138],
    [e[22], -1],
    [1, 6, 140],
    [3, "keyword", e[6], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 142,
     "\"", 144],
    ["\\", 143,
     /^(?!\')./, 142,
     "'", -1],
    [/^[^]/, 142],
    ["\\", 145,
     /^(?!\")./, 144,
     "\"", -1],
    [/^[^]/, 144],
    [/^\/\*\*(?!\/)/, 147,
     "/*", 149,
     /^\/\/.*/, -1],
    [1, 313, 147,
     0, 148],
    [2, 316, 148, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 149,
     "*/", -1],
    [3, "string-2", "`", 151],
    [3, "string-2", "${", 152,
     2, 318, 151, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 151,
     3, "string-2", "`", -1],
    [1, 165, 153],
    [3, "string-2", "}", 151],
    [e[24], 154,
     e[25], -1],
    [e[24], 155,
     e[25], -1],
    [e[24], 156,
     e[25], -1],
    [3, "keyword", e[26], 158],
    [1, 6, 159],
    [3, "keyword", e[21], -1],
    [e[24], 160,
     e[25], -1],
    ["{", 162],
    [1, 6, 163],
    [2, 7, 164, {"name":"Statement"},
     "}", -1],
    [1, 6, 163],
    [1, 320, 166],
    [1, 6, 167],
    [",", 168,
     1, 348, 169,
     0, -1],
    [1, 6, 170],
    [1, 6, 167],
    [1, 367, 169],
    ["<", 172],
    [1, 6, 173],
    [1, 371, 174],
    [1, 6, 175],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 209,
     3, "atom", e[27], 209,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 177,
     3, "keyword", /^(?:keyof|readonly|unique)(?![a-zA-Z¡-￿_0-9_\$])/, 178,
     [0, [5, 393], "("], 179,
     3, "keyword", e[28], 180,
     0, 180,
     0, 181,
     2, 396, 209, {"name":"TupleType"},
     2, 233, 209, {"name":"ObjType"},
     2, 141, 209, {"name":"string","token":"string"},
     3, "number", e[29], 209],
    [1, 6, 182],
    [1, 6, 183],
    [1, 6, 184],
    [1, 6, 185],
    [[5, 401], 186,
     3, "type", e[19], 187],
    [3, "variable", e[19], 188],
    [1, 176, 209],
    [1, 176, 189],
    [2, 171, 190, {"name":"TypeParams"},
     0, 190],
    [3, "variable", e[19], 191],
    [1, 6, 192],
    [1, 6, 193],
    [1, 6, 194],
    [1, 6, 195],
    [1, 6, 196],
    [2, 404, 209, {"name":"TypeArgs"},
     0, 209],
    [".", 197,
     "[", 198,
     0, 209],
    [")", 209],
    [2, 409, 199, {"name":"ParamListSpec"}],
    [".", 200],
    [1, 6, 201],
    [1, 6, 202],
    [1, 6, 203],
    [1, 6, 181],
    [3, "property", e[19], 204],
    [1, 165, 205],
    [3, "operator", "=>", 206],
    [1, 6, 193],
    [1, 6, 207],
    [1, 6, 208],
    ["]", 204],
    [1, 410, 209],
    [1, 6, 210],
    [3, "operator", /^[\&\|]/, 211,
     3, "keyword", e[20], 211,
     "[", 212,
     3, "operator", "?", 213,
     0, -1],
    [1, 6, 214],
    [1, 6, 215],
    [1, 6, 216],
    [1, 176, 217],
    [1, 176, 218,
     0, 218],
    [1, 176, 219],
    [1, 6, 210],
    [1, 6, 220],
    [1, 6, 221],
    ["]", 217],
    [3, "operator", ":", 222],
    [1, 6, 223],
    [1, 176, 217],
    [e[19], 225],
    [1, 6, 226],
    [".", -1],
    [1, 176, 228,
     0, -1],
    [1, 6, 229],
    [",", 230,
     0, -1],
    [1, 6, 231],
    [1, 176, 232,
     0, 232],
    [1, 6, 229],
    ["{", 234],
    [1, 6, 235],
    [1, 416, 236,
     0, 236],
    [1, 6, 237],
    [/^[\,\;]/, 238,
     "}", -1],
    [1, 6, 239],
    [1, 416, 240,
     0, 240],
    [1, 6, 237],
    ["{", 242],
    [1, 6, 243],
    [1, 449, 244],
    [1, 6, 245],
    ["}", -1],
    [1, 463, 247],
    [1, 6, 248],
    [3, "operator", "!", 249,
     0, 249],
    [1, 6, 250],
    [":", 251,
     0, 253],
    [1, 6, 252],
    [1, 176, 253],
    [1, 6, 254],
    [3, "operator", "=", 255,
     0, -1],
    [1, 6, 256],
    [1, 367, -1],
    ["(", 258],
    [1, 6, 259],
    [1, 165, 260],
    [1, 6, 261],
    [")", -1],
    [1, 6, 263],
    [3, "keyword", e[30], 264,
     0, -1],
    [1, 6, 265],
    [2, 7, -1, {"name":"Statement"}],
    [2, 171, 267, {"name":"TypeParams"},
     0, 267],
    [1, 6, 268],
    [2, 466, 269, {"name":"ParamList"}],
    [1, 6, 270],
    [":", 271,
     0, 273],
    [1, 6, 272],
    [1, 410, 273],
    [1, 6, 274],
    [2, 161, -1, {"name":"Block"},
     e[22], -1],
    [2, 471, 276, {"name":"ForSpec"}],
    [1, 6, 277],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[31], 279,
     0, 287],
    [1, 6, 280],
    ["(", 281,
     0, 282],
    [1, 6, 283],
    [1, 6, 284],
    [1, 463, 285],
    [2, 161, 287, {"name":"Block"}],
    [1, 6, 286],
    [")", 282],
    [1, 6, 288],
    [3, "keyword", e[32], 289,
     0, -1],
    [1, 6, 290],
    [2, 161, -1, {"name":"Block"}],
    [2, 171, 292, {"name":"TypeParams"},
     0, 292],
    [1, 6, 293],
    [3, "keyword", e[20], 294,
     0, 296],
    [1, 6, 295],
    [1, 176, 296],
    [1, 6, 297],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 298,
     0, 300],
    [1, 6, 299],
    [1, 227, 300],
    [1, 6, 301],
    [2, 482, -1, {"name":"ClassBody"}],
    [1, 308, 303,
     0, -1],
    [1, 6, 304],
    [",", 305,
     0, -1],
    [1, 6, 306],
    [1, 308, 307,
     0, 307],
    [1, 6, 304],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 309,
     3, "def", e[19], -1],
    [1, 6, 310],
    [3, "keyword", e[33], 311],
    [1, 6, 312],
    [3, "def", e[19], -1],
    [0, 314,
     2, 490, -1, {"name":"doccomment.braced"}],
    [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 315],
    [0, 314,
     0, -1],
    [1, 494, 317],
    [1, 313, 317,
     0, -1],
    ["\\", 319,
     "\n", -1],
    [/^[^]/, -1],
    ["<", 321,
     3, "atom", e[27], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[35], 327,
     3, "operator", e[36], 327,
     3, "keyword", e[18], 327,
     3, "keyword", e[28], 329,
     3, "keyword", e[6], 335,
     3, "keyword", e[15], 341,
     2, 500, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[38], 346,
     3, "variable", e[19], -1,
     3, "number", e[29], -1,
     2, 141, -1, {"name":"string","token":"string"},
     3, "string-2", e[37], -1,
     1, 150, -1,
     2, 512, -1, {"name":"ArrayLiteral"},
     2, 517, -1, {"name":"ObjectLiteral"},
     2, 522, -1, {"name":"ParenExpr"}],
    [1, 6, 322],
    [1, 176, 323],
    [1, 6, 324],
    [">", 325],
    [1, 6, 326],
    [1, 320, -1],
    [1, 6, 328],
    [1, 320, -1],
    [1, 6, 330],
    [".", 331,
     3, "variable callee", e[38], 332,
     1, 320, -1],
    [1, 6, 333],
    [1, 6, 334],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 404, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 336],
    [3, "keyword", "*", 337,
     0, 337],
    [1, 6, 338],
    [3, "def", e[19], 339,
     0, 339],
    [1, 6, 340],
    [2, 266, -1, {"name":"FunctionDef"}],
    [1, 6, 342],
    [[6, 527], 343,
     0, 344],
    [3, "def type", e[19], 344],
    [1, 6, 345],
    [1, 291, -1],
    [1, 6, 347],
    [2, 404, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[33], 349,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 351,
     3, "keyword", e[41], 351,
     2, 528, -1, {"name":"ArgList"},
     1, 150, -1,
     e[43], 353,
     "[", 357,
     3, "operator", "?", 361],
    [1, 6, 350],
    [1, 176, -1],
    [1, 6, 352],
    [1, 165, -1],
    [1, 6, 354],
    [3, "property callee", e[44], 355,
     3, "property", e[19], -1],
    [1, 6, 356],
    [2, 404, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 358],
    [1, 165, 359],
    [1, 6, 360],
    ["]", -1],
    [1, 6, 362],
    [1, 165, 363],
    [1, 6, 364],
    [3, "operator", ":", 365],
    [1, 6, 366],
    [1, 165, -1],
    [1, 320, 368],
    [1, 6, 369],
    [1, 537, 370,
     0, -1],
    [1, 6, 369],
    [3, "def type", e[19], 372,
     0, -1],
    [1, 6, 373],
    [3, "keyword", e[20], 374,
     0, 375],
    [1, 6, 376],
    [1, 6, 377],
    [1, 176, 375],
    [3, "operator", "=", 378,
     0, 379],
    [1, 6, 380],
    [1, 6, 381],
    [1, 176, 379],
    [",", 382,
     0, -1],
    [1, 6, 383],
    [3, "def type", e[19], 384,
     0, 385],
    [1, 6, 386],
    [1, 6, 381],
    [3, "keyword", e[20], 387,
     0, 388],
    [1, 6, 389],
    [1, 6, 390],
    [1, 176, 388],
    [3, "operator", "=", 391,
     0, 385],
    [1, 6, 392],
    [1, 176, 385],
    ["(", 394],
    [1, 6, 395],
    [[6, 556], -1],
    ["[", 397],
    [1, 6, 398],
    [1, 559, 399],
    [1, 6, 400],
    ["]", -1],
    [e[19], 402],
    [1, 6, 403],
    [".", -1],
    ["<", 405],
    [1, 6, 406],
    [1, 227, 407],
    [1, 6, 408],
    [">", -1],
    [2, 466, -1, {"name":"ParamList"}],
    [[5, 573], 411,
     0, 414],
    [3, "variable", e[19], 412],
    [1, 6, 413],
    [3, "keyword", e[46], 414],
    [1, 6, 415],
    [1, 176, -1],
    [3, "keyword", e[28], 417,
     0, 417,
     0, 425],
    [1, 6, 418],
    [2, 171, 419, {"name":"TypeParams"},
     0, 419],
    [1, 6, 420],
    [2, 466, 421, {"name":"ParamList"}],
    [1, 6, 422],
    [":", 423,
     0, -1],
    [1, 6, 424],
    [1, 410, -1],
    [3, "keyword", e[42], 426,
     "[", 427,
     3, "def property", e[19], 428,
     2, 141, 428, {"name":"string","token":"string"},
     3, "number", e[29], 428],
    [1, 6, 425],
    [1, 6, 429],
    [1, 6, 430],
    [[0, [5, 576], /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/], 431,
     1, 165, 432],
    [/^\??/, 433],
    [1, 6, 434],
    [1, 6, 435],
    [1, 6, 436],
    [":", 437,
     3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_\$])/, 437],
    ["]", 438],
    [2, 171, 439, {"name":"TypeParams"},
     0, 439,
     0, 440],
    [1, 6, 441],
    [1, 6, 442],
    [1, 6, 443],
    [1, 6, 444],
    [1, 176, 432],
    [":", 445],
    [2, 466, 440, {"name":"ParamList"}],
    [":", 446,
     0, -1],
    [1, 6, 447],
    [1, 6, 448],
    [1, 176, -1],
    [1, 410, -1],
    [3, "def property", e[19], 450,
     0, -1],
    [1, 6, 451],
    [3, "operator", "=", 452,
     0, 453],
    [1, 6, 454],
    [1, 6, 455],
    [1, 367, 453],
    [",", 456,
     0, -1],
    [1, 6, 457],
    [3, "def property", e[19], 458,
     0, 459],
    [1, 6, 460],
    [1, 6, 455],
    [3, "operator", "=", 461,
     0, 459],
    [1, 6, 462],
    [1, 367, 459],
    [3, "operator", "...", 464,
     0, 464],
    [1, 6, 465],
    [3, "def", e[19], -1,
     2, 579, -1, {"name":"ArrayPattern"},
     2, 584, -1, {"name":"ObjectPattern"}],
    ["(", 467],
    [1, 6, 468],
    [1, 589, 469],
    [1, 6, 470],
    [")", -1],
    ["(", 472],
    [1, 6, 473],
    [2, 629, 474, {"name":"StatementMaybeOf"}],
    [1, 6, 475],
    [1, 165, 476,
     0, 476,
     0, 480],
    [1, 6, 477],
    [";", 478],
    [1, 6, 479],
    [1, 165, 480,
     0, 480],
    [1, 6, 481],
    [")", -1],
    ["{", 483],
    [1, 6, 484],
    [0, 485,
     "@", 486,
     "}", -1],
    [3, "keyword", e[42], 487,
     3, "keyword", [0, "override", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 634]], 487,
     2, 635, 488, {"name":"ClassItem"}],
    [1, 6, 489],
    [1, 6, 485],
    [1, 6, 484],
    [1, 165, 488],
    ["{", 491],
    [1, 494, 492,
     1, 313, 493],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 492,
     0, 493],
    [/^(?:\}|(?=\*\/))/, -1],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 495,
     3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1],
    [e[24], 495,
     "{", 496,
     0, 497,
     0, -1],
    [2, 656, 498, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1,
     0, -1],
    ["}", 499],
    [[1, "\n", "\t", " ", /^\*(?!\/)/], 499,
     0, 497],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 660]], 506,
     [5, 666], 501],
    [2, 466, 502, {"name":"ParamList"}],
    [1, 6, 503],
    [":", 504,
     0, 506],
    [1, 6, 505],
    [1, 410, 506],
    [1, 6, 507],
    [2, 673, -1, {"name":"ArrowRest"}],
    [/^\<(?! )/, -1,
     /^ */, 509],
    [1, 678, 510,
     0, 511],
    [/^ */, 511],
    ["(", -1],
    ["[", 513],
    [1, 6, 514],
    [1, 680, 515],
    [1, 6, 516],
    ["]", -1],
    ["{", 518],
    [1, 6, 519],
    [1, 686, 520],
    [1, 6, 521],
    ["}", -1],
    ["(", 523],
    [1, 6, 524],
    [1, 165, 525],
    [1, 6, 526],
    [")", -1],
    [3, "keyword", e[20], -1],
    ["(", 529],
    [1, 6, 530],
    [1, 680, 531],
    [1, 6, 532],
    [")", -1],
    [/^ */, 534],
    [1, 678, 535,
     0, 536],
    [/^ */, 536],
    ["(", -1],
    [3, "keyword", e[33], 538,
     3, "operator", "!", -1,
     3, "operator", e[39], -1,
     3, "operator", e[40], 540,
     3, "keyword", e[41], 540,
     2, 528, -1, {"name":"ArgList"},
     1, 150, -1,
     e[43], 542,
     "[", 546,
     3, "operator", "?", 550],
    [1, 6, 539],
    [1, 176, -1],
    [1, 6, 541],
    [1, 367, -1],
    [1, 6, 543],
    [3, "property callee", e[44], 544,
     3, "property", e[19], -1],
    [1, 6, 545],
    [2, 404, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 547],
    [1, 165, 548],
    [1, 6, 549],
    ["]", -1],
    [1, 6, 551],
    [1, 165, 552],
    [1, 6, 553],
    [3, "operator", ":", 554],
    [1, 6, 555],
    [1, 367, -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[19], 557],
    [1, 6, 558],
    [/^[\?\:]/, -1],
    [e[45], 560,
     0, 561,
     0, -1],
    [1, 6, 562],
    [1, 6, 563],
    [":", 561],
    [1, 176, 564],
    [1, 6, 565],
    [",", 566,
     0, -1],
    [1, 6, 567],
    [e[45], 568,
     0, 569,
     0, 570],
    [1, 6, 571],
    [1, 6, 572],
    [1, 6, 565],
    [":", 569],
    [1, 176, 570],
    [e[19], 574],
    [1, 6, 575],
    [3, "keyword", e[46], -1],
    [e[19], 577],
    [1, 6, 578],
    [/^(?:\:|in)/, -1],
    ["[", 580],
    [1, 6, 581],
    [1, 692, 582],
    [1, 6, 583],
    ["]", -1],
    ["{", 585],
    [1, 6, 586],
    [1, 698, 587],
    [1, 6, 588],
    ["}", -1],
    ["@", 590,
     0, 591,
     0, -1],
    [1, 6, 592],
    [3, "keyword", e[42], 593,
     e[47], 594],
    [1, 165, 595],
    [1, 6, 591],
    [1, 6, 596],
    [1, 6, 589],
    [1, 463, 597],
    [1, 6, 598],
    [/^\??/, 599],
    [1, 6, 600],
    [":", 601,
     0, 602],
    [1, 6, 603],
    [1, 6, 604],
    [1, 176, 602],
    [3, "operator", "=", 605,
     0, 606],
    [1, 6, 607],
    [1, 6, 608],
    [1, 367, 606],
    [",", 609,
     0, -1],
    [1, 6, 610],
    ["@", 611,
     0, 612,
     0, 613],
    [1, 6, 614],
    [3, "keyword", e[42], 615,
     e[47], 616],
    [1, 6, 608],
    [1, 165, 617],
    [1, 6, 612],
    [1, 6, 618],
    [1, 6, 610],
    [1, 463, 619],
    [1, 6, 620],
    [/^\??/, 621],
    [1, 6, 622],
    [":", 623,
     0, 624],
    [1, 6, 625],
    [1, 6, 626],
    [1, 176, 624],
    [3, "operator", "=", 627,
     0, 613],
    [1, 6, 628],
    [1, 367, 613],
    [2, 7, 630, {"name":"Statement"}],
    [1, 6, 631],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 632,
     0, -1],
    [1, 6, 633],
    [1, 165, -1],
    [e[24], 634,
     e[25], -1],
    [3, "keyword", e[48], 636,
     0, 636],
    [1, 6, 637],
    [3, "def property", e[19], 642,
     "[", 638,
     3, "number", e[29], 642,
     2, 141, 642, {"name":"string","token":"string"}],
    [1, 6, 639],
    [1, 165, 640],
    [1, 6, 641],
    ["]", 642],
    [1, 6, 643],
    [3, "keyword", "*", 644,
     0, 644,
     /^[\!\?]?/, 645],
    [1, 6, 646],
    [1, 6, 647],
    [2, 266, -1, {"name":"FunctionDef"}],
    [":", 648,
     0, 649],
    [1, 6, 650],
    [1, 6, 651],
    [1, 176, 649],
    [3, "operator", "=", 652,
     0, 653],
    [1, 6, 654],
    [1, 6, 655],
    [1, 165, 653],
    [e[22], -1],
    [3, "type", "{", 657,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 656,
     "\n", 658,
     0, -1],
    [2, 656, 659, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 656],
    [/^(?=\*\/)/, 656,
     3, "type", "}", 656],
    [1, 6, 661],
    [":", 662,
     0, 665],
    [1, 6, 663],
    [1, 176, 664],
    [1, 6, 665],
    ["=>", -1],
    [2, 466, 667, {"name":"ParamList"}],
    [1, 6, 668],
    [":", 669,
     0, 671],
    [1, 6, 670],
    [1, 410, 671],
    [1, 6, 672],
    ["=>", -1],
    [3, "operator", "=>", 674],
    [1, 6, 675],
    [2, 171, 676, {"name":"TypeParams"},
     0, 676],
    [1, 6, 677],
    [2, 161, -1, {"name":"Block"},
     1, 367, -1],
    ["<", 679],
    [1, 678, 679,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 679,
     ">", -1],
    [1, 367, 681,
     0, -1],
    [1, 6, 682],
    [",", 683,
     0, -1],
    [1, 6, 684],
    [1, 367, 685,
     0, 685],
    [1, 6, 682],
    [2, 704, 687, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 688],
    [",", 689,
     0, -1],
    [1, 6, 690],
    [2, 704, 691, {"name":"ObjectMember"},
     0, 691],
    [1, 6, 688],
    [1, 719, 693,
     0, 693,
     0, -1],
    [1, 6, 694],
    [",", 695,
     0, -1],
    [1, 6, 696],
    [1, 719, 697,
     0, 697,
     0, 697],
    [1, 6, 694],
    [1, 724, 699,
     0, -1],
    [1, 6, 700],
    [",", 701,
     0, -1],
    [1, 6, 702],
    [1, 724, 703,
     0, 703],
    [1, 6, 700],
    [3, "keyword", e[48], 705,
     0, 705],
    [1, 6, 706],
    [3, "keyword", "*", 707,
     0, 707],
    [1, 6, 708],
    [3, "def property", e[19], 709,
     "[", 710,
     3, "number", e[29], 709,
     2, 141, 709, {"name":"string","token":"string"},
     3, "operator", "...", 711],
    [1, 6, 712],
    [1, 6, 713],
    [1, 6, 714],
    [2, 266, -1, {"name":"FunctionDef"},
     ":", 715,
     0, -1],
    [1, 165, 716],
    [1, 367, -1],
    [1, 6, 717],
    [1, 6, 718],
    [1, 367, -1],
    ["]", 709],
    [1, 463, 720],
    [1, 6, 721],
    [3, "operator", "=", 722,
     0, -1],
    [1, 6, 723],
    [1, 367, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 725,
     3, "property", e[19], 729,
     3, "number", e[29], 729,
     2, 141, 729, {"name":"string","token":"string"},
     3, "operator", "...", 733],
    [1, 6, 726],
    [3, "operator", "=", 727,
     0, -1],
    [1, 6, 728],
    [1, 367, -1],
    [1, 6, 730],
    [":", 731],
    [1, 6, 732],
    [1, 719, -1],
    [1, 6, 734],
    [1, 719, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    __proto__: null,
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
        { return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror__namespace.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror__namespace.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && (!config.dontAlign || config.dontAlign.indexOf(cx.name) < 0) && aligned(cx))
      { return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

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

    var base = baseIndent(cx, config);
    if (brack) {
      if (closed && (config.dontCloseBrackets || "").indexOf(brack) < 0) { return base }
      return base + config.indentUnit * ((config.doubleIndentBrackets || "").indexOf(brack) < 0 ? 1 : 2)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config);
      if (!textAfter || /^((else|catch|finally)\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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
        { return CodeMirror__namespace.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror__namespace.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

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
      var escaped = this.isEscaped(stream, locationOfEarlyExit);
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
      var mode = CodeMirror.getMode(this.config, modeSpecs[i]);
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

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = /*@__PURE__*/(function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.templateTokenizer = new TemplateTokenizer(conf);
      this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")",
                         tabSize: conf.tabSize, indentUnit: conf.indentUnit,
                         forceContent: true};
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.startState = function startState () {
      var state = superclass.prototype.startState.call(this);
      state.embeddedParserState = this.templateTokenizer.startState();
      return state;
    };

    TSMode.prototype.copyState = function copyState (state) {
      var copy = superclass.prototype.copyState.call(this, state);
      copy.embeddedParserState =
          this.templateTokenizer.copyState(state.embeddedParserState);
      return copy;
    };

    TSMode.prototype.token = function token (stream, state) {
      var templateTokenizerState = state.embeddedParserState;
      if (this.templateTokenizer
            .shouldInterceptTokenizing(templateTokenizerState)) {
        var ref = this.templateTokenizer
            .interceptTokenizing(stream, templateTokenizerState);
        var handled = ref.handled;
        var style$1 = ref.style;
        if (handled) {
          return style$1;
        }
      }
      var style = superclass.prototype.token.call(this, stream, state);
      this.templateTokenizer.trackState(style, stream, templateTokenizerState);
      return markLocals(style, scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.indentConf)
    };

    return TSMode;
  }(CodeMirror__namespace.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror__namespace.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror__namespace.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

}));
