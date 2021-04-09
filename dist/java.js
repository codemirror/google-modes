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

  var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\-|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^\@interface(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, /^var(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, [0, [5, 458], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 401]], /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
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
     2, 89, -1, {"name":"string","token":"string"},
     3, "operator", e[14], -1,
     3, "operator", e[21], -1,
     3, "operator", e[23], -1,
     2, 92, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    [[1, " ", "\t", "\n"], 5,
     2, 92, 5, {"name":"comment","token":"comment"},
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
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 97]], 66,
     3, "keyword", e[12], 70,
     3, "keyword", /^synchronized(?![a-zA-Z¡-￿_0-9])/, 77,
     ";", -1,
     2, 98, 81, {"name":"BeforeStatement"},
     1, 100, 83],
    [1, 5, 8],
    ["(", 9],
    [1, 5, 10],
    [2, 6, 11, {"name":"Statement"}],
    [1, 5, 12],
    [1, 100, 13,
     0, 13],
    [1, 5, 14],
    [";", 15],
    [1, 5, 16],
    [1, 100, 17,
     0, 17],
    [1, 5, 18],
    [")", 19],
    [1, 5, 20],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 22],
    [2, 129, 23, {"name":"CondExpr"}],
    [1, 5, 24],
    [2, 6, -1, {"name":"Statement"}],
    [1, 5, 26],
    [2, 134, 27, {"name":"Block"}],
    [1, 5, 28],
    [2, 138, -1, {"name":"CatchFinally"}],
    [1, 5, 30],
    [2, 6, 31, {"name":"Statement"}],
    [1, 5, 32],
    [3, "keyword", e[1], 33],
    [1, 5, 34],
    [2, 129, 35, {"name":"CondExpr"}],
    [1, 5, 36],
    [";", -1],
    [1, 5, 38],
    [2, 129, 39, {"name":"CondExpr"}],
    [1, 5, 40],
    [2, 6, 41, {"name":"Statement"}],
    [2, 156, -1, {"name":"Alternative"}],
    [1, 5, 43],
    [2, 129, 44, {"name":"CondExpr"}],
    [1, 5, 45],
    [2, 134, -1, {"name":"Block"}],
    [1, 5, 47],
    [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 48],
    [1, 5, 49],
    [";", -1],
    [1, 5, 51],
    [1, 100, 52],
    [1, 5, 53],
    [":", 54,
     0, 55],
    [1, 5, 56],
    [1, 5, 57],
    [1, 100, 55],
    [";", -1],
    [1, 5, 59],
    [1, 100, 60,
     0, 60],
    [1, 5, 61],
    [";", -1],
    [1, 5, 63],
    [1, 100, 64],
    [1, 5, 65],
    [";", -1],
    [1, 5, 68],
    [1, 5, 69],
    [":", -1],
    [1, 100, 66],
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
    [2, 129, 79, {"name":"CondExpr"}],
    [1, 5, 80],
    [2, 134, -1, {"name":"Block"}],
    [1, 5, 82],
    [1, 160, -1],
    [1, 5, 84],
    [",", 85,
     1, 5, 86],
    [1, 5, 87],
    [";", -1],
    [1, 100, 88],
    [1, 5, 84],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 90],
    ["\\", 91,
     /^(?!\")./, 90,
     "\"", -1],
    [/^[^]/, 90],
    [/^\/\*\*(?!\/)/, 93,
     "/*", 96,
     /^\/\/.*/, -1],
    [e[39], 94,
     0, 95],
    [0, 93,
     0, 93],
    [2, 210, 95, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 96,
     "*/", -1],
    [e[36], 97,
     /^\:(?!\:)/, -1],
    [3, "keyword", e[13], 99,
     1, 221, 99,
     0, -1],
    [1, 5, 98],
    [3, "operator", e[14], 101,
     3, "atom", e[15], 108,
     3, "keyword", e[16], 108,
     3, "keyword", e[17], 108,
     3, "number", e[18], 108,
     2, 89, 108, {"name":"string","token":"string"},
     2, 228, 108, {"name":"NewExpr"},
     2, 246, 108, {"name":"Lambda"},
     3, "variable callee", e[19], 108,
     3, "variable", e[20], 108,
     2, 255, 108, {"name":"ArrayInitializer"},
     [0, [5, 260], "("], 102,
     2, 263, 108, {"name":"ParenExpr"}],
    [1, 5, 100],
    [1, 5, 103],
    [1, 268, 104],
    [1, 5, 105],
    [")", 106],
    [1, 5, 107],
    [1, 100, 108],
    [1, 5, 109],
    [2, 277, 110, {"name":"ArgList"},
     "[", 111,
     ".", 112,
     "::", 113,
     3, "operator", e[21], 110,
     3, "keyword", e[22], 114,
     3, "operator", e[23], 115,
     3, "operator", "?", 116,
     0, -1],
    [1, 5, 109],
    [1, 5, 117],
    [1, 5, 118],
    [1, 5, 119],
    [1, 5, 120],
    [1, 5, 121],
    [1, 5, 122],
    [1, 100, 123,
     0, 123],
    [3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, 110,
     2, 228, 110, {"name":"NewExpr"},
     2, 282, 110, {"name":"TypeArgs"},
     3, "property callee", e[25], 110,
     3, "property", e[20], 110],
    [3, "keyword", e[24], 110,
     3, "property callee", e[25], 110,
     3, "property", e[20], 110],
    [1, 268, 110],
    [1, 100, 110],
    [1, 100, 124],
    [1, 5, 125],
    [1, 5, 126],
    ["]", 110],
    [3, "operator", ":", 127],
    [1, 5, 128],
    [1, 100, 110],
    ["(", 130],
    [1, 5, 131],
    [1, 100, 132,
     0, 132],
    [1, 5, 133],
    [")", -1],
    ["{", 135],
    [1, 5, 136],
    [2, 6, 137, {"name":"Statement"},
     "}", -1],
    [1, 5, 136],
    [3, "keyword", e[26], 139,
     3, "keyword", e[27], 154,
     0, -1],
    [1, 5, 140],
    ["(", 141],
    [1, 5, 142],
    [3, "keyword", e[13], 143,
     1, 221, 143,
     1, 268, 144],
    [1, 5, 142],
    [1, 5, 145],
    ["|", 146,
     3, "def", e[20], 147],
    [1, 5, 148],
    [1, 5, 149],
    [1, 268, 150],
    [")", 151],
    [1, 5, 145],
    [1, 5, 152],
    [2, 134, 153, {"name":"Block"}],
    [1, 5, 138],
    [1, 5, 155],
    [2, 134, -1, {"name":"Block"}],
    [1, 5, 157],
    [3, "keyword", e[28], 158,
     0, -1],
    [1, 5, 159],
    [2, 6, -1, {"name":"Statement"}],
    [2, 134, -1, {"name":"Block"},
     3, "keyword", e[29], 161,
     3, "keyword", e[30], 169,
     3, "keyword", e[31], 183,
     3, "keyword", e[32], 187,
     [5, 287], 194],
    [1, 5, 162],
    [3, "type def", e[20], 163],
    [1, 5, 164],
    [3, "keyword", e[33], 165,
     0, 166],
    [1, 5, 167],
    [1, 5, 168],
    [1, 297, 166],
    [2, 303, -1, {"name":"EnumBody"}],
    [1, 5, 170],
    [3, "type def", e[20], 171],
    [1, 5, 172],
    [2, 315, 173, {"name":"TypeParams"},
     0, 173],
    [1, 5, 174],
    [3, "keyword", e[34], 175,
     0, 176],
    [1, 5, 177],
    [1, 5, 178],
    [1, 268, 176],
    [3, "keyword", e[33], 179,
     0, 180],
    [1, 5, 181],
    [1, 5, 182],
    [1, 297, 180],
    [2, 320, -1, {"name":"ClassBody"}],
    [1, 5, 184],
    [3, "def", e[20], 185],
    [1, 5, 186],
    [2, 324, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 188],
    [e[20], 189],
    [1, 5, 190],
    [".", 191,
     ";", -1],
    [1, 5, 192],
    [e[20], 193],
    [1, 5, 190],
    [1, 268, 195,
     3, "keyword", e[35], 195],
    [1, 5, 196],
    [1, 328, 197],
    [1, 5, 198],
    [2, 333, -1, {"name":"FunctionDef"},
     3, "operator", "=", 199,
     0, 200],
    [1, 5, 201],
    [1, 5, 202],
    [1, 100, 200],
    [",", 203,
     ";", -1],
    [1, 5, 204],
    [1, 328, 205],
    [1, 5, 206],
    [3, "operator", "=", 207,
     0, 208],
    [1, 5, 209],
    [1, 5, 202],
    [1, 100, 208],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 211,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 212,
     3, "tag", e[38], 219,
     "{", 213],
    [e[36], 211,
     3, "def", e[37], 219,
     "<", 214,
     0, 219],
    [e[36], 212,
     3, "type", e[37], 219,
     0, 219],
    [3, "tag", e[38], 215],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 216],
    [/^[\t ]*/, 217],
    [">", 219],
    [1, 338, 218],
    ["}", 219],
    [e[39], 220,
     0, -1],
    [0, 219,
     0, 219],
    [3, "meta", [0, [6, 342], "@", /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, /^(?:\.[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)*/], 222],
    [1, 5, 223],
    ["(", 224,
     0, -1],
    [1, 5, 225],
    [1, 343, 226],
    [1, 5, 227],
    [")", -1],
    [3, "keyword", e[24], 229],
    [1, 5, 230],
    [2, 282, 231, {"name":"TypeArgs"},
     0, 231],
    [1, 5, 232],
    [1, 221, 233,
     1, 357, 234],
    [1, 5, 232],
    [1, 5, 235],
    [2, 282, 236, {"name":"TypeArgs"},
     1, 5, 237],
    [1, 5, 235],
    ["[", 238,
     2, 277, 239, {"name":"ArgList"},
     0, 239],
    [1, 5, 240],
    [1, 5, 241],
    [1, 100, 242,
     0, 242],
    [2, 320, -1, {"name":"ClassBody"},
     0, -1],
    [1, 5, 243],
    ["]", 244],
    [1, 5, 245],
    [2, 255, -1, {"name":"ArrayInitializer"},
     0, -1],
    [[5, 365], 247,
     [5, 368], 248],
    [3, "def", e[20], 249,
     2, 371, 249, {"name":"ParamList"}],
    [2, 376, 250, {"name":"SimpleParamList"}],
    [1, 5, 251],
    [1, 5, 252],
    [3, "operator", "->", 253],
    [3, "operator", "->", 253],
    [1, 5, 254],
    [2, 134, -1, {"name":"Block"},
     1, 100, -1],
    ["{", 256],
    [1, 5, 257],
    [1, 381, 258],
    [1, 5, 259],
    ["}", -1],
    ["(", 261],
    [1, 5, 262],
    [1, 357, -1],
    ["(", 264],
    [1, 5, 265],
    [1, 100, 266,
     0, 266],
    [1, 5, 267],
    [")", -1],
    [1, 221, 269,
     1, 357, 270],
    [1, 5, 268],
    [1, 5, 271],
    ["[", 272,
     2, 282, 273, {"name":"TypeArgs"},
     0, -1],
    [1, 5, 274],
    [1, 5, 271],
    [1, 100, 275,
     0, 275],
    [1, 5, 276],
    ["]", 273],
    ["(", 278],
    [1, 5, 279],
    [1, 381, 280],
    [1, 5, 281],
    [")", -1],
    ["<", 283],
    [1, 5, 284],
    [1, 387, 285],
    [1, 5, 286],
    [">", -1],
    [1, 221, 288,
     2, 315, 289, {"name":"TypeParams"},
     0, 289],
    [1, 5, 287],
    [1, 5, 290],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 291],
    [3, "type qualifier", e[43], 292,
     3, "type", e[41], -1],
    [1, 5, 293],
    [2, 282, 294, {"name":"TypeArgs"},
     0, 294],
    [1, 5, 295],
    [".", 296],
    [1, 5, 291],
    [1, 268, 298,
     0, -1],
    [1, 5, 299],
    [",", 300,
     0, -1],
    [1, 5, 301],
    [1, 268, 302,
     0, 302],
    [1, 5, 299],
    ["{", 304],
    [1, 5, 305],
    [2, 405, 306, {"name":"EnumConstant"}],
    [1, 5, 307],
    [/^\,?/, 308],
    [1, 5, 309],
    [0, 305,
     ";", 310,
     0, 313],
    [1, 5, 311],
    [2, 412, 312, {"name":"ClassItem"},
     0, 313],
    [1, 5, 311],
    [1, 5, 314],
    ["}", -1],
    ["<", 316],
    [1, 5, 317],
    [1, 419, 318],
    [1, 5, 319],
    [">", -1],
    ["{", 321],
    [1, 5, 322],
    [2, 412, 323, {"name":"ClassItem"},
     "}", -1],
    [1, 5, 322],
    ["{", 325],
    [1, 5, 326],
    [2, 436, 327, {"name":"AnnotationTypeItem"},
     "}", -1],
    [1, 5, 326],
    [3, "def", e[20], 329],
    [1, 5, 330],
    ["[", 331,
     0, -1],
    [1, 5, 332],
    ["]", -1],
    [2, 371, 334, {"name":"ParamList"}],
    [1, 5, 335],
    [2, 455, 336, {"name":"ThrowsClause"},
     0, 336],
    [1, 5, 337],
    [";", -1,
     2, 134, -1, {"name":"Block"}],
    [3, "attribute", "{", 339,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 338,
     "\n", 340,
     0, -1],
    [1, 338, 341],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 338],
    [/^(?=\*\/)/, 338,
     3, "attribute", "}", 338],
    [3, "keyword", e[31], -1],
    [e[42], 344,
     0, 345,
     0, -1],
    [1, 5, 346],
    [1, 5, 347],
    ["=", 345],
    [1, 221, 348,
     2, 255, 348, {"name":"ArrayInitializer"},
     1, 100, 348],
    [1, 5, 349],
    [",", 350,
     0, -1],
    [1, 5, 351],
    [e[42], 352,
     0, 353,
     0, 354],
    [1, 5, 355],
    [1, 5, 356],
    [1, 5, 349],
    ["=", 353],
    [1, 221, 354,
     2, 255, 354, {"name":"ArrayInitializer"},
     1, 100, 354],
    [3, "type", e[40], -1,
     0, 358,
     3, "type", e[41], -1],
    [3, "type qualifier", e[43], 359],
    [1, 5, 360],
    [2, 282, 361, {"name":"TypeArgs"},
     0, 361],
    [1, 5, 362],
    [".", 363],
    [1, 5, 364],
    [0, 358,
     2, 461, -1, {"name":"qualifiedClassName","token":"qualified"}],
    [3, "def", e[20], 366,
     2, 371, 366, {"name":"ParamList"}],
    [1, 5, 367],
    [3, "operator", "->", -1],
    [2, 376, 369, {"name":"SimpleParamList"}],
    [1, 5, 370],
    [3, "operator", "->", -1],
    ["(", 372],
    [1, 5, 373],
    [1, 462, 374],
    [1, 5, 375],
    [")", -1],
    ["(", 377],
    [1, 5, 378],
    [1, 478, 379],
    [1, 5, 380],
    [")", -1],
    [2, 484, 382, {"name":"ArgExpr"},
     0, -1],
    [1, 5, 383],
    [",", 384,
     0, -1],
    [1, 5, 385],
    [2, 484, 386, {"name":"ArgExpr"},
     0, 386],
    [1, 5, 383],
    [1, 268, 388,
     "?", 389,
     0, -1],
    [1, 5, 390],
    [1, 5, 391],
    [",", 392,
     0, -1],
    [3, "keyword", e[34], 393,
     3, "keyword", e[17], 393,
     0, 388],
    [1, 5, 394],
    [1, 5, 395],
    [1, 268, 396,
     "?", 397,
     0, 396],
    [1, 268, 388],
    [1, 5, 390],
    [1, 5, 398],
    [3, "keyword", e[34], 399,
     3, "keyword", e[17], 399,
     0, 396],
    [1, 5, 400],
    [1, 268, 396],
    [/^ */, 402],
    [2, 282, 403, {"name":"TypeArgs"},
     0, 404],
    [/^ */, 404],
    [/^\.(?!\.)/, -1],
    [1, 221, 406,
     0, 406],
    [1, 5, 407],
    [3, "def property", e[20], 408],
    [1, 5, 409],
    [2, 277, 410, {"name":"ArgList"},
     0, 410],
    [1, 5, 411],
    [2, 320, -1, {"name":"ClassBody"},
     0, -1],
    [2, 98, 413, {"name":"BeforeStatement"}],
    [1, 5, 414],
    [2, 315, 415, {"name":"TypeParams"},
     0, 415],
    [1, 5, 416],
    [3, "def property", e[25], 417,
     1, 485, -1],
    [1, 5, 418],
    [2, 333, -1, {"name":"FunctionDef"}],
    [1, 221, 420,
     3, "type def", e[20], 421,
     0, -1],
    [1, 5, 419],
    [1, 5, 422],
    [3, "keyword", e[34], 423,
     1, 5, 424],
    [1, 5, 425],
    [",", 426,
     0, -1],
    [1, 268, 427],
    [1, 5, 428],
    [1, 5, 422],
    [1, 221, 429,
     3, "type def", e[20], 430,
     0, 431],
    [1, 5, 428],
    [1, 5, 432],
    [1, 5, 424],
    [3, "keyword", e[34], 433,
     0, 431],
    [1, 5, 434],
    [1, 268, 435],
    [1, 5, 432],
    [2, 98, 437, {"name":"BeforeStatement"}],
    [1, 5, 438],
    [3, "def", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *[\(\[\=])/, 439,
     "(", 440,
     1, 160, -1],
    [1, 5, 441],
    [1, 5, 442],
    ["[", 443,
     3, "operator", "=", 444],
    [")", 445],
    [1, 5, 446],
    [1, 5, 447],
    [1, 5, 448],
    ["]", 449],
    [1, 100, -1],
    ["[", 450,
     3, "keyword", e[10], 451,
     0, -1],
    [1, 5, 441],
    [1, 5, 452],
    [1, 5, 453],
    ["]", 454],
    [1, 100, -1],
    [1, 5, 448],
    [3, "keyword", e[44], 456],
    [1, 5, 457],
    [1, 297, -1],
    [e[20], 459],
    [1, 5, 460],
    ["=", -1],
    [3, "type", e[41], -1],
    [1, 221, 463,
     3, "keyword", e[13], 463,
     1, 221, 463,
     1, 268, 464,
     0, -1],
    [1, 5, 462],
    [1, 5, 465],
    [e[45], 466],
    [1, 5, 467],
    [3, "keyword", e[16], 468,
     1, 328, 468],
    [1, 5, 469],
    [",", 470,
     0, -1],
    [1, 5, 471],
    [1, 221, 472,
     3, "keyword", e[13], 472,
     1, 221, 472,
     1, 268, 473,
     0, 474],
    [1, 5, 471],
    [1, 5, 475],
    [1, 5, 469],
    [e[45], 476],
    [1, 5, 477],
    [3, "keyword", e[16], 474,
     1, 328, 474],
    [3, "def", e[20], 479,
     0, -1],
    [1, 5, 480],
    [",", 481,
     0, -1],
    [1, 5, 482],
    [3, "def", e[20], 483,
     0, 483],
    [1, 5, 480],
    [1, 100, -1],
    [2, 134, -1, {"name":"Block"},
     3, "keyword", e[29], 486,
     3, "keyword", e[30], 494,
     3, "keyword", e[31], 508,
     3, "keyword", e[32], 512,
     [5, 535], 519],
    [1, 5, 487],
    [3, "type def", e[20], 488],
    [1, 5, 489],
    [3, "keyword", e[33], 490,
     0, 491],
    [1, 5, 492],
    [1, 5, 493],
    [1, 297, 491],
    [2, 303, -1, {"name":"EnumBody"}],
    [1, 5, 495],
    [3, "type def", e[20], 496],
    [1, 5, 497],
    [2, 315, 498, {"name":"TypeParams"},
     0, 498],
    [1, 5, 499],
    [3, "keyword", e[34], 500,
     0, 501],
    [1, 5, 502],
    [1, 5, 503],
    [1, 268, 501],
    [3, "keyword", e[33], 504,
     0, 505],
    [1, 5, 506],
    [1, 5, 507],
    [1, 297, 505],
    [2, 320, -1, {"name":"ClassBody"}],
    [1, 5, 509],
    [3, "def", e[20], 510],
    [1, 5, 511],
    [2, 324, -1, {"name":"AnnotationTypeBody"}],
    [1, 5, 513],
    [e[20], 514],
    [1, 5, 515],
    [".", 516,
     ";", -1],
    [1, 5, 517],
    [e[20], 518],
    [1, 5, 515],
    [1, 268, 520,
     3, "keyword", e[35], 520],
    [1, 5, 521],
    [1, 545, 522],
    [1, 5, 523],
    [2, 333, -1, {"name":"FunctionDef"},
     3, "operator", "=", 524,
     0, 525],
    [1, 5, 526],
    [1, 5, 527],
    [1, 100, 525],
    [",", 528,
     ";", -1],
    [1, 5, 529],
    [1, 545, 530],
    [1, 5, 531],
    [3, "operator", "=", 532,
     0, 533],
    [1, 5, 534],
    [1, 5, 527],
    [1, 100, 533],
    [1, 221, 536,
     2, 315, 537, {"name":"TypeParams"},
     0, 537],
    [1, 5, 535],
    [1, 5, 538],
    [3, "type", e[40], -1,
     3, "keyword", e[35], -1,
     0, 539],
    [3, "type qualifier", e[43], 540,
     3, "type", e[41], -1],
    [1, 5, 541],
    [2, 282, 542, {"name":"TypeArgs"},
     0, 542],
    [1, 5, 543],
    [".", 544],
    [1, 5, 539],
    [3, "def property", e[20], 546],
    [1, 5, 547],
    ["[", 548,
     0, -1],
    [1, 5, 549],
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
