(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var CodeMirror__namespace = /*#__PURE__*/_interopNamespace(CodeMirror);

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\-|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, /^var(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, [0, [5, 454], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 397]], /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     3, "keyword", e[13], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[33], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[44], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[32], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[35], -1,
     3, "type", e[40], -1,
     3, "type", e[41], -1,
     3, "atom", e[15], -1,
     3, "variable callee", e[19], -1,
     3, "variable", e[20], -1,
     3, "number", e[18], -1,
     2, 85, -1, {"name":"string","token":"string"},
     3, "operator", e[14], -1,
     3, "operator", e[21], -1,
     3, "operator", e[23], -1,
     2, 88, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    [[1, " ", "\t", "\n"], 5,
     2, 88, 5, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", e[0], 7,
     3, "keyword", e[1], 21,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 37,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 46,
     3, "keyword", e[7], 50,
     3, "keyword", e[8], 58,
     3, "keyword", e[9], 62,
     3, "keyword", e[10], 66,
     3, "keyword", e[11], 67,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 93]], 66,
     3, "keyword", e[12], 70,
     ";", -1,
     2, 94, 77, {"name":"BeforeStatement"},
     1, 96, 79],
    [1, 5, 8],
    ["(", 9],
    [1, 5, 10],
    [2, 6, 11, {"name":"Statement"}],
    [1, 5, 12],
    [1, 96, 13,
     0, 13],
    [1, 5, 14],
    [";", 15],
    [1, 5, 16],
    [1, 96, 17,
     0, 17],
    [1, 5, 18],
    [")", 19],
    [1, 5, 20],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 22],
    [2, 125, 23, {"name":"CondExpr"}],
    [1, 5, 24],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 26],
    [2, 130, 27, {"name":"Block"}],
    [1, 5, 28],
    [2, 134, -1, {"name":"CatchFinally"}],
    [1, 5, 30],
    [2, 6, 31, {"name":"Statement"}],
    [1, 5, 32],
    [3, "keyword", e[1], 33],
    [1, 5, 34],
    [2, 125, 35, {"name":"CondExpr"}],
    [1, 5, 36],
    [";", -1],
    [1, 5, 38],
    [2, 125, 39, {"name":"CondExpr"}],
    [1, 5, 40],
    [2, 6, 41, {"name":"Statement"}],
    [2, 152, -1, {"name":"Alternative"}],
    [1, 5, 43],
    [2, 125, 44, {"name":"CondExpr"}],
    [1, 5, 45],
    [2, 130, -1, {"name":"Block"}],
    [1, 5, 47],
    [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 48],
    [1, 5, 49],
    [";", -1],
    [1, 5, 51],
    [1, 96, 52],
    [1, 5, 53],
    [":", 54,
     0, 55],
    [1, 5, 56],
    [1, 5, 57],
    [1, 96, 55],
    [";", -1],
    [1, 5, 59],
    [1, 96, 60,
     0, 60],
    [1, 5, 61],
    [";", -1],
    [1, 5, 63],
    [1, 96, 64],
    [1, 5, 65],
    [";", -1],
    [1, 5, 68],
    [1, 5, 69],
    [":", -1],
    [1, 96, 66],
    [1, 5, 71],
    [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9])/, 72,
     0, 72],
    [1, 5, 73],
    [/^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\./, 74,
     /^(?:\*|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)/, 75],
    [1, 5, 73],
    [1, 5, 76],
    [";", -1],
    [1, 5, 78],
    [1, 156, -1],
    [1, 5, 80],
    [",", 81,
     1, 5, 82],
    [1, 5, 83],
    [";", -1],
    [1, 96, 84],
    [1, 5, 80],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 86],
    ["\\", 87,
     /^(?!\")./, 86,
     "\"", -1],
    [/^[^]/, 86],
    [/^\/\*\*(?!\/)/, 89,
     "/*", 92,
     /^\/\/.*/, -1],
    [e[39], 90,
     0, 91],
    [0, 89,
     0, 89],
    [2, 206, 91, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 92,
     "*/", -1],
    [e[36], 93,
     /^\:(?!\:)/, -1],
    [3, "keyword", e[13], 95,
     1, 217, 95,
     0, -1],
    [1, 5, 94],
    [3, "operator", e[14], 97,
     3, "atom", e[15], 104,
     3, "keyword", e[16], 104,
     3, "keyword", e[17], 104,
     3, "number", e[18], 104,
     2, 85, 104, {"name":"string","token":"string"},
     2, 224, 104, {"name":"NewExpr"},
     2, 242, 104, {"name":"Lambda"},
     3, "variable callee", e[19], 104,
     3, "variable", e[20], 104,
     2, 251, 104, {"name":"ArrayInitializer"},
     [0, [5, 256], "("], 98,
     2, 259, 104, {"name":"ParenExpr"}],
    [1, 5, 96],
    [1, 5, 99],
    [1, 264, 100],
    [1, 5, 101],
    [")", 102],
    [1, 5, 103],
    [1, 96, 104],
    [1, 5, 105],
    [2, 273, 106, {"name":"ArgList"},
     "[", 107,
     ".", 108,
     "::", 109,
     3, "operator", e[21], 106,
     3, "keyword", e[22], 110,
     3, "operator", e[23], 111,
     3, "operator", "?", 112,
     0, -1],
    [1, 5, 105],
    [1, 5, 113],
    [1, 5, 114],
    [1, 5, 115],
    [1, 5, 116],
    [1, 5, 117],
    [1, 5, 118],
    [1, 96, 119,
     0, 119],
    [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 106,
     2, 224, 106, {"name":"NewExpr"},
     2, 278, 106, {"name":"TypeArgs"},
     3, "property callee", e[25], 106,
     3, "property", e[20], 106],
    [3, "keyword", e[24], 106,
     3, "property callee", e[25], 106,
     3, "property", e[20], 106],
    [1, 264, 106],
    [1, 96, 106],
    [1, 96, 120],
    [1, 5, 121],
    [1, 5, 122],
    ["]", 106],
    [3, "operator", ":", 123],
    [1, 5, 124],
    [1, 96, 106],
    ["(", 126],
    [1, 5, 127],
    [1, 96, 128,
     0, 128],
    [1, 5, 129],
    [")", -1],
    ["{", 131],
    [1, 5, 132],
    [2, 6, 133, {"name":"Statement"},
     "}", -1],
    [1, 5, 132],
    [3, "keyword", e[26], 135,
     3, "keyword", e[27], 150,
     0, -1],
    [1, 5, 136],
    ["(", 137],
    [1, 5, 138],
    [3, "keyword", e[13], 139,
     1, 217, 139,
     1, 264, 140],
    [1, 5, 138],
    [1, 5, 141],
    ["|", 142,
     3, "def", e[20], 143],
    [1, 5, 144],
    [1, 5, 145],
    [1, 264, 146],
    [")", 147],
    [1, 5, 141],
    [1, 5, 148],
    [2, 130, 149, {"name":"Block"}],
    [1, 5, 134],
    [1, 5, 151],
    [2, 130, -1, {"name":"Block"}],
    [1, 5, 153],
    [3, "keyword", e[28], 154,
     0, -1],
    [1, 5, 155],
    [2, 6, -1, {"name":"Statement"}],
    [2, 130, -1, {"name":"Block"},
     3, "keyword", e[29], 157,
     3, "keyword", e[30], 165,
     3, "keyword", e[31], 179,
     3, "keyword", e[32], 183,
     [5, 283], 190],
    [1, 5, 158],
    [3, "type def", e[20], 159],
    [1, 5, 160],
    [3, "keyword", e[33], 161,
     0, 162],
    [1, 5, 163],
    [1, 5, 164],
    [1, 293, 162],
    [2, 299, -1, {"name":"EnumBody"}],
    [1, 5, 166],
    [3, "type def", e[20], 167],
    [1, 5, 168],
    [2, 311, 169, {"name":"TypeParams"},
     0, 169],
    [1, 5, 170],
    [3, "keyword", e[34], 171,
     0, 172],
    [1, 5, 173],
    [1, 5, 174],
    [1, 264, 172],
    [3, "keyword", e[33], 175,
     0, 176],
    [1, 5, 177],
    [1, 5, 178],
    [1, 293, 176],
    [2, 316, -1, {"name":"ClassBody"}],
    [1, 5, 180],
    [3, "def", e[20], 181],
    [1, 5, 182],
    [2, 320, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 184],
    [e[20], 185],
    [1, 5, 186],
    [".", 187,
     ";", -1],
    [1, 5, 188],
    [e[20], 189],
    [1, 5, 186],
    [1, 264, 191,
     3, "keyword", e[35], 191],
    [1, 5, 192],
    [1, 324, 193],
    [1, 5, 194],
    [2, 329, -1, {"name":"FunctionDef"},
     3, "operator", "=", 195,
     0, 196],
    [1, 5, 197],
    [1, 5, 198],
    [1, 96, 196],
    [",", 199,
     ";", -1],
    [1, 5, 200],
    [1, 324, 201],
    [1, 5, 202],
    [3, "operator", "=", 203,
     0, 204],
    [1, 5, 205],
    [1, 5, 198],
    [1, 96, 204],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 207,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 208,
     3, "tag", e[38], 215,
     "{", 209],
    [e[36], 207,
     3, "def", e[37], 215,
     "<", 210,
     0, 215],
    [e[36], 208,
     3, "type", e[37], 215,
     0, 215],
    [3, "tag", e[38], 211],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 212],
    [/^[\t ]*/, 213],
    [">", 215],
    [1, 334, 214],
    ["}", 215],
    [e[39], 216,
     0, -1],
    [0, 215,
     0, 215],
    [3, "meta", [0, [6, 338], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 218],
    [1, 5, 219],
    ["(", 220,
     0, -1],
    [1, 5, 221],
    [1, 339, 222],
    [1, 5, 223],
    [")", -1],
    [3, "keyword", e[24], 225],
    [1, 5, 226],
    [2, 278, 227, {"name":"TypeArgs"},
     0, 227],
    [1, 5, 228],
    [1, 217, 229,
     1, 353, 230],
    [1, 5, 228],
    [1, 5, 231],
    [2, 278, 232, {"name":"TypeArgs"},
     1, 5, 233],
    [1, 5, 231],
    ["[", 234,
     2, 273, 235, {"name":"ArgList"},
     0, 235],
    [1, 5, 236],
    [1, 5, 237],
    [1, 96, 238,
     0, 238],
    [2, 316, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 239],
    ["]", 240],
    [1, 5, 241],
    [2, 251, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 361], 243,
     [5, 364], 244],
    [3, "def", e[20], 245,
     2, 367, 245, {"name":"ParamList"}],
    [2, 372, 246, {"name":"SimpleParamList"}],
    [1, 5, 247],
    [1, 5, 248],
    [3, "operator", "->", 249],
    [3, "operator", "->", 249],
    [1, 5, 250],
    [2, 130, -1, {"name":"Block"},
     1, 96, -1],
    ["{", 252],
    [1, 5, 253],
    [1, 377, 254],
    [1, 5, 255],
    ["}", -1],
    ["(", 257],
    [1, 5, 258],
    [1, 353, -1],
    ["(", 260],
    [1, 5, 261],
    [1, 96, 262,
     0, 262],
    [1, 5, 263],
    [")", -1],
    [1, 217, 265,
     1, 353, 266],
    [1, 5, 264],
    [1, 5, 267],
    ["[", 268,
     2, 278, 269, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 270],
    [1, 5, 267],
    [1, 96, 271,
     0, 271],
    [1, 5, 272],
    ["]", 269],
    ["(", 274],
    [1, 5, 275],
    [1, 377, 276],
    [1, 5, 277],
    [")", -1],
    ["<", 279],
    [1, 5, 280],
    [1, 383, 281],
    [1, 5, 282],
    [">", -1],
    [1, 217, 284,
     2, 311, 285, {"name":"TypeParams"},
     0, 285],
    [1, 5, 283],
    [1, 5, 286],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 287],
    [3, "type qualifier", e[43], 288,
     3, "type", e[41], -1],
    [1, 5, 289],
    [2, 278, 290, {"name":"TypeArgs"},
     0, 290],
    [1, 5, 291],
    [".", 292],
    [1, 5, 287],
    [1, 264, 294,
     0, -1],
    [1, 5, 295],
    [",", 296,
     0, -1],
    [1, 5, 297],
    [1, 264, 298,
     0, 298],
    [1, 5, 295],
    ["{", 300],
    [1, 5, 301],
    [2, 401, 302, {"name":"EnumConstant"}],
    [1, 5, 303],
    [/^\,?/, 304],
    [1, 5, 305],
    [0, 301,
     ";", 306,
     0, 309],
    [1, 5, 307],
    [2, 408, 308, {"name":"ClassItem"},
     0, 309],
    [1, 5, 307],
    [1, 5, 310],
    ["}", -1],
    ["<", 312],
    [1, 5, 313],
    [1, 415, 314],
    [1, 5, 315],
    [">", -1],
    ["{", 317],
    [1, 5, 318],
    [2, 408, 319, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 318],
    ["{", 321],
    [1, 5, 322],
    [2, 432, 323, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 322],
    [3, "def", e[20], 325],
    [1, 5, 326],
    ["[", 327,
     0, -1],
    [1, 5, 328],
    ["]", -1],
    [2, 367, 330, {"name":"ParamList"}],
    [1, 5, 331],
    [2, 451, 332, {"name":"ThrowsClause"},
     0, 332],
    [1, 5, 333],
    [";", -1,
     2, 130, -1, {"name":"Block"}],
    [3, "attribute", "{", 335,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 334,
     "\n", 336,
     0, -1],
    [1, 334, 337],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 334],
    [/^(?=\*\/)/, 334,
     3, "attribute", "}", 334],
    [3, "keyword", e[31], -1],
    [e[42], 340,
     0, 341,
     0, -1],
    [1, 5, 342],
    [1, 5, 343],
    ["=", 341],
    [1, 217, 344,
     2, 251, 344, {"name":"ArrayInitializer"},
     1, 96, 344],
    [1, 5, 345],
    [",", 346,
     0, -1],
    [1, 5, 347],
    [e[42], 348,
     0, 349,
     0, 350],
    [1, 5, 351],
    [1, 5, 352],
    [1, 5, 345],
    ["=", 349],
    [1, 217, 350,
     2, 251, 350, {"name":"ArrayInitializer"},
     1, 96, 350],
    [3, "type", e[40], -1,
     0, 354,
     3, "type", e[41], -1],
    [3, "type qualifier", e[43], 355],
    [1, 5, 356],
    [2, 278, 357, {"name":"TypeArgs"},
     0, 357],
    [1, 5, 358],
    [".", 359],
    [1, 5, 360],
    [0, 354,
     2, 457, -1, {"name":"qualifiedClassName","token":"qualified"}],
    [3, "def", e[20], 362,
     2, 367, 362, {"name":"ParamList"}],
    [1, 5, 363],
    [3, "operator", "->", -1],
    [2, 372, 365, {"name":"SimpleParamList"}],
    [1, 5, 366],
    [3, "operator", "->", -1],
    ["(", 368],
    [1, 5, 369],
    [1, 458, 370],
    [1, 5, 371],
    [")", -1],
    ["(", 373],
    [1, 5, 374],
    [1, 474, 375],
    [1, 5, 376],
    [")", -1],
    [2, 480, 378, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 379],
    [",", 380,
     0, -1],
    [1, 5, 381],
    [2, 480, 382, {"name":"ArgExpr"},
     0, 382],
    [1, 5, 379],
    [1, 264, 384,
     "?", 385,
     0, -1],
    [1, 5, 386],
    [1, 5, 387],
    [",", 388,
     0, -1],
    [3, "keyword", e[34], 389,
     3, "keyword", e[17], 389,
     0, 384],
    [1, 5, 390],
    [1, 5, 391],
    [1, 264, 392,
     "?", 393,
     0, 392],
    [1, 264, 384],
    [1, 5, 386],
    [1, 5, 394],
    [3, "keyword", e[34], 395,
     3, "keyword", e[17], 395,
     0, 392],
    [1, 5, 396],
    [1, 264, 392],
    [/^ */, 398],
    [2, 278, 399, {"name":"TypeArgs"},
     0, 400],
    [/^ */, 400],
    [/^\.(?!\.)/, -1],
    [1, 217, 402,
     0, 402],
    [1, 5, 403],
    [3, "def property", e[20], 404],
    [1, 5, 405],
    [2, 273, 406, {"name":"ArgList"},
     0, 406],
    [1, 5, 407],
    [2, 316, -1, {"name":"ClassBody"},
     0, -1],
    [2, 94, 409, {"name":"BeforeStatement"}],
    [1, 5, 410],
    [2, 311, 411, {"name":"TypeParams"},
     0, 411],
    [1, 5, 412],
    [3, "def property", e[25], 413,
     1, 481, -1],
    [1, 5, 414],
    [2, 329, -1, {"name":"FunctionDef"}],
    [1, 217, 416,
     3, "type def", e[20], 417,
     0, -1],
    [1, 5, 415],
    [1, 5, 418],
    [3, "keyword", e[34], 419,
     1, 5, 420],
    [1, 5, 421],
    [",", 422,
     0, -1],
    [1, 264, 423],
    [1, 5, 424],
    [1, 5, 418],
    [1, 217, 425,
     3, "type def", e[20], 426,
     0, 427],
    [1, 5, 424],
    [1, 5, 428],
    [1, 5, 420],
    [3, "keyword", e[34], 429,
     0, 427],
    [1, 5, 430],
    [1, 264, 431],
    [1, 5, 428],
    [2, 94, 433, {"name":"BeforeStatement"}],
    [1, 5, 434],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 435,
     "(", 436,
     1, 156, -1],
    [1, 5, 437],
    [1, 5, 438],
    ["[", 439,
     3, "operator", "=", 440],
    [")", 441],
    [1, 5, 442],
    [1, 5, 443],
    [1, 5, 444],
    ["]", 445],
    [1, 96, -1],
    ["[", 446,
     3, "keyword", e[10], 447,
     0, -1],
    [1, 5, 437],
    [1, 5, 448],
    [1, 5, 449],
    ["]", 450],
    [1, 96, -1],
    [1, 5, 444],
    [3, "keyword", e[44], 452],
    [1, 5, 453],
    [1, 293, -1],
    [e[20], 455],
    [1, 5, 456],
    ["=", -1],
    [3, "type", e[41], -1],
    [1, 217, 459,
     3, "keyword", e[13], 459,
     1, 217, 459,
     1, 264, 460,
     0, -1],
    [1, 5, 458],
    [1, 5, 461],
    [e[45], 462],
    [1, 5, 463],
    [3, "keyword", e[16], 464,
     1, 324, 464],
    [1, 5, 465],
    [",", 466,
     0, -1],
    [1, 5, 467],
    [1, 217, 468,
     3, "keyword", e[13], 468,
     1, 217, 468,
     1, 264, 469,
     0, 470],
    [1, 5, 467],
    [1, 5, 471],
    [1, 5, 465],
    [e[45], 472],
    [1, 5, 473],
    [3, "keyword", e[16], 470,
     1, 324, 470],
    [3, "def", e[20], 475,
     0, -1],
    [1, 5, 476],
    [",", 477,
     0, -1],
    [1, 5, 478],
    [3, "def", e[20], 479,
     0, 479],
    [1, 5, 476],
    [1, 96, -1],
    [2, 130, -1, {"name":"Block"},
     3, "keyword", e[29], 482,
     3, "keyword", e[30], 490,
     3, "keyword", e[31], 504,
     3, "keyword", e[32], 508,
     [5, 531], 515],
    [1, 5, 483],
    [3, "type def", e[20], 484],
    [1, 5, 485],
    [3, "keyword", e[33], 486,
     0, 487],
    [1, 5, 488],
    [1, 5, 489],
    [1, 293, 487],
    [2, 299, -1, {"name":"EnumBody"}],
    [1, 5, 491],
    [3, "type def", e[20], 492],
    [1, 5, 493],
    [2, 311, 494, {"name":"TypeParams"},
     0, 494],
    [1, 5, 495],
    [3, "keyword", e[34], 496,
     0, 497],
    [1, 5, 498],
    [1, 5, 499],
    [1, 264, 497],
    [3, "keyword", e[33], 500,
     0, 501],
    [1, 5, 502],
    [1, 5, 503],
    [1, 293, 501],
    [2, 316, -1, {"name":"ClassBody"}],
    [1, 5, 505],
    [3, "def", e[20], 506],
    [1, 5, 507],
    [2, 320, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 509],
    [e[20], 510],
    [1, 5, 511],
    [".", 512,
     ";", -1],
    [1, 5, 513],
    [e[20], 514],
    [1, 5, 511],
    [1, 264, 516,
     3, "keyword", e[35], 516],
    [1, 5, 517],
    [1, 541, 518],
    [1, 5, 519],
    [2, 329, -1, {"name":"FunctionDef"},
     3, "operator", "=", 520,
     0, 521],
    [1, 5, 522],
    [1, 5, 523],
    [1, 96, 521],
    [",", 524,
     ";", -1],
    [1, 5, 525],
    [1, 541, 526],
    [1, 5, 527],
    [3, "operator", "=", 528,
     0, 529],
    [1, 5, 530],
    [1, 5, 523],
    [1, 96, 529],
    [1, 217, 532,
     2, 311, 533, {"name":"TypeParams"},
     0, 533],
    [1, 5, 531],
    [1, 5, 534],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 535],
    [3, "type qualifier", e[43], 536,
     3, "type", e[41], -1],
    [1, 5, 537],
    [2, 278, 538, {"name":"TypeArgs"},
     0, 538],
    [1, 5, 539],
    [".", 540],
    [1, 5, 535],
    [3, "def property", e[20], 542],
    [1, 5, 543],
    ["[", 544,
     0, -1],
    [1, 5, 545],
    ["]", -1]
  ];
  var start = 0;
  var token = 4;

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

  var scopes = ["Block", "FunctionDef", "Lambda"];
  var typeScopes = ["ClassItem", "Statement", "AnnotationTypeItem"];

  var JavaMode = /*@__PURE__*/(function (superclass) {
    function JavaMode(conf) {
      superclass.call(this, grammar);
      this.indentConf = {doubleIndentBrackets: ">)", dontCloseBrackets: ")", align: false,
                         tabSize: conf.tabSize, indentUnit: conf.indentUnit};
    }

    if ( superclass ) JavaMode.__proto__ = superclass;
    JavaMode.prototype = Object.create( superclass && superclass.prototype );
    JavaMode.prototype.constructor = JavaMode;

    JavaMode.prototype.token = function token (stream, state) {
      return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
    };

    JavaMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.indentConf)
    };

    return JavaMode;
  }(CodeMirror__namespace.GrammarMode));

  JavaMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
  JavaMode.prototype.blockCommentStart = "/*";
  JavaMode.prototype.blockCommentEnd = "*/";
  JavaMode.prototype.blockCommentContinue = " * ";
  JavaMode.prototype.lineComment = "//";
  JavaMode.prototype.fold = "brace";

  CodeMirror__namespace.defineMode("google-java", function (conf) { return new JavaMode(conf); });

})));
