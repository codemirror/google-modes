(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile|restrict)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 252]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?:\.\.\.)?/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[0], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "type", e[17], -1,
     3, "type", e[18], -1,
     3, "keyword", e[16], -1,
     3, "atom", e[21], -1,
     3, "meta", e[12], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     3, "number", e[22], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[20], -1,
     3, "operator", e[24], -1,
     3, "operator", e[25], -1,
     2, 107, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    ["#", 7],
    [2, 107, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 107, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 18,
     3, "keyword", e[3], 19,
     3, "keyword", e[4], 43,
     3, "keyword", e[5], 48,
     2, 112, -1, {"name":"Block"},
     3, "keyword", e[6], 52,
     3, "keyword", e[7], 54,
     3, "keyword", e[8], 58,
     3, "keyword", e[9], 62,
     3, "keyword", e[10], 70,
     3, "keyword", e[11], 71,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 116]], 70,
     3, "meta", e[12], 74,
     2, 117, 80, {"name":"DeclType"},
     ";", -1,
     1, 140, 100],
    [1, 9, 14],
    [3, "type def", e[13], 15,
     0, 15],
    [1, 9, 16],
    [2, 146, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 164, 24, {"name":"CondExpr"}],
    [2, 12, 25, {"name":"Statement"}],
    [1, 9, 26],
    [1, 9, 27],
    [1, 9, 28],
    [2, 12, 29, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[2], 30],
    [1, 9, 31],
    [1, 9, 32],
    [1, 140, 33,
     0, 33],
    [2, 164, 34, {"name":"CondExpr"}],
    [1, 9, 35],
    [1, 9, 36],
    [";", 37],
    [";", -1],
    [1, 9, 38],
    [1, 140, 39,
     0, 39],
    [1, 9, 40],
    [")", 41],
    [1, 9, 42],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 44],
    [2, 164, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 169, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 164, 50, {"name":"CondExpr"}],
    [1, 9, 51],
    [2, 112, -1, {"name":"Block"}],
    [1, 9, 53],
    [";", -1],
    [1, 9, 55],
    [e[13], 56],
    [1, 9, 57],
    [";", -1],
    [1, 9, 59],
    [1, 140, 60,
     0, 60],
    [1, 9, 61],
    [";", -1],
    [1, 9, 63],
    [3, "def", e[13], 64,
     0, 64],
    [1, 9, 65],
    [2, 173, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [3, "def", e[13], 68,
     0, 68],
    [1, 9, 69],
    [";", -1],
    [1, 9, 72],
    [1, 9, 73],
    [":", -1],
    [1, 183, 70],
    [1, 9, 75],
    [2, 204, 76, {"name":"ParenTokens"},
     0, 76],
    [1, 9, 77],
    [2, 112, -1, {"name":"Block"},
     0, 78],
    [1, 208, 79,
     0, -1],
    [1, 9, 78],
    [1, 9, 81],
    [1, 223, 82],
    [1, 9, 83],
    [3, "meta", e[12], 84,
     0, 85],
    [1, 9, 86],
    [1, 9, 87],
    [2, 204, 85, {"name":"ParenTokens"},
     0, 85],
    [[5, 235], 88,
     3, "operator", "=", 89,
     0, 90],
    [2, 238, -1, {"name":"FunctionDef"}],
    [1, 9, 91],
    [1, 9, 92],
    [1, 183, 90],
    [",", 93,
     ";", -1],
    [1, 9, 94],
    [3, "def", e[13], 95],
    [1, 9, 96],
    [3, "operator", "=", 97,
     0, 98],
    [1, 9, 99],
    [1, 9, 92],
    [1, 183, 98],
    [1, 9, 101],
    [";", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 104],
    [/^\'(?:\\.)?(?:(?!\').)*\'/, -1,
     "\"", 105],
    ["\\", 106,
     [0, /^(?!\")/, /^[^]/], 105,
     "\"", -1],
    [/^[^]/, 105],
    [/^\/\*\*(?!\/)/, 108,
     "/*", 111,
     /^\/\/.*/, -1],
    [e[30], 109,
     0, 110],
    [0, 108,
     0, 108],
    [2, 241, 110, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 111,
     "*/", -1],
    ["{", 113],
    [1, 9, 114],
    [2, 12, 115, {"name":"Statement"},
     "}", -1],
    [1, 9, 114],
    [e[27], 116,
     /^\:(?!\:)/, -1],
    [0, 118,
     0, 129,
     3, "keyword", e[14], 135,
     3, "type", e[26], 136],
    [3, "keyword", e[15], 119,
     3, "keyword", e[16], 119],
    [1, 9, 120],
    [0, 118,
     3, "keyword", e[14], 121,
     0, 122,
     3, "type", e[13], 123],
    [1, 9, 124],
    [3, "type", e[17], 125],
    [1, 9, 126],
    [/^\&?/, -1],
    [0, 122,
     1, 9, 127,
     0, 123],
    [1, 264, 128,
     0, -1],
    [3, "type", e[18], 123],
    [1, 9, 126],
    [3, "type", e[17], 130],
    [1, 9, 131],
    [0, 129,
     3, "type", e[18], 132,
     0, 132],
    [1, 9, 133],
    [1, 264, 134,
     0, -1],
    [1, 9, 133],
    [1, 9, 137],
    [1, 9, 138],
    [/^\&?/, -1],
    [1, 264, 139,
     0, -1],
    [1, 9, 138],
    [1, 183, 141],
    [1, 9, 142],
    [",", 143,
     0, -1],
    [1, 9, 144],
    [1, 183, 145],
    [1, 9, 142],
    ["{", 147],
    [1, 9, 148],
    [3, "def property", e[13], 149,
     0, 162],
    [1, 9, 150],
    [3, "operator", "=", 151,
     0, 152],
    [1, 9, 153],
    [1, 9, 154],
    [1, 183, 152],
    [",", 155,
     0, 162],
    [1, 9, 156],
    [3, "def property", e[13], 157,
     0, 158],
    [1, 9, 159],
    [1, 9, 154],
    [3, "operator", "=", 160,
     0, 158],
    [1, 9, 161],
    [1, 183, 158],
    [1, 9, 163],
    ["}", -1],
    ["(", 165],
    [1, 9, 166],
    [1, 140, 167,
     0, 167],
    [1, 9, 168],
    [")", -1],
    [1, 9, 170],
    [3, "keyword", e[19], 171,
     0, -1],
    [1, 9, 172],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 174],
    [1, 9, 175],
    [1, 269, 176,
     0, 181],
    [1, 9, 177],
    [";", 178,
     0, 181],
    [1, 9, 179],
    [1, 269, 180,
     0, 180],
    [1, 9, 177],
    [1, 9, 182],
    ["}", -1],
    [3, "operator", e[20], 184,
     2, 280, 185, {"name":"ParenExpr"},
     3, "atom", e[21], 201,
     3, "number", e[22], 201,
     2, 103, 186, {"name":"string","token":"string"},
     2, 285, 201, {"name":"BlockOf"},
     3, "keyword", e[23], 187,
     3, "meta", e[12], 188,
     2, 102, 201, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 183],
    [1, 9, 189],
    [1, 9, 190],
    [1, 9, 191],
    [1, 9, 192],
    [/^(?![\[\(\-\+])/, 193,
     0, 201],
    [2, 103, 194, {"name":"string","token":"string"},
     0, 201],
    ["(", 195,
     e[32], 196],
    [2, 204, 201, {"name":"ParenTokens"},
     0, 201],
    [1, 183, 201],
    [1, 9, 190],
    [1, 9, 197],
    [1, 9, 198],
    [1, 295, 199],
    [1, 183, 201],
    [1, 9, 200],
    [")", 201],
    [1, 9, 202],
    [1, 208, 203,
     0, -1],
    [1, 9, 202],
    ["(", 205],
    [1, 9, 206],
    [1, 307, 207,
     ")", -1],
    [1, 9, 206],
    [2, 308, -1, {"name":"ArgList"},
     "[", 209,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 213,
     3, "operator", e[25], 215,
     "?", 217],
    [1, 9, 210],
    [1, 183, 211],
    [1, 9, 212],
    ["]", -1],
    [1, 9, 214],
    [2, 318, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 216],
    [1, 183, -1,
     0, -1],
    [1, 9, 218],
    [1, 183, 219],
    [1, 9, 220],
    [":", 221],
    [1, 9, 222],
    [1, 183, -1],
    [0, 224,
     "(", 231],
    ["*", 225,
     3, "def", e[13], 226],
    [1, 9, 224],
    [1, 9, 227],
    ["[", 228,
     0, -1],
    [1, 9, 229],
    ["]", 230],
    [1, 9, 227],
    [1, 9, 232],
    [1, 223, 233],
    [1, 9, 234],
    [")", -1],
    ["(", 236],
    [1, 9, 237],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 319, 239, {"name":"ParamList"}],
    [1, 9, 240],
    [";", -1,
     2, 112, -1, {"name":"Block"}],
    [3, "tag", /^\@f[\$\[\]]/, 250,
     3, "tag", /^\@param(?:\[(?:in|out|in\,out)\])?(?![a-zA-Z0-9¡-￿_])/, 242,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 243,
     3, "tag", e[29], 250,
     "{", 244],
    [e[27], 242,
     3, "def", e[28], 250,
     "<", 245,
     0, 250],
    [e[27], 243,
     3, "type", e[28], 250,
     0, 250],
    [3, "tag", e[29], 246],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 247],
    [/^[\t ]*/, 248],
    [">", 250],
    [1, 324, 249],
    ["}", 250],
    [e[30], 251,
     0, -1],
    [0, 250,
     0, 250],
    [/^(?![a-zA-Z¡-￿_0-9])/, 253],
    [1, 9, 254],
    [1, 264, 255,
     /^[a-zA-Z¡-￿_]/, -1,
     "(", 256],
    [1, 9, 254],
    [1, 9, 257],
    ["*", 258],
    [1, 9, 259],
    [e[13], 260],
    [1, 9, 261],
    [")", 262],
    [1, 9, 263],
    ["(", -1],
    ["[", 265,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 266],
    [1, 183, 267,
     0, 267],
    [1, 9, 268],
    ["]", -1],
    [1, 295, 270],
    [1, 9, 271],
    [2, 318, 272, {"name":"fieldName","token":"property"},
     0, 272],
    [1, 9, 273],
    [":", 274,
     "[", 275,
     0, -1],
    [1, 9, 276],
    [1, 9, 277],
    [3, "number", e[22], -1],
    [1, 183, 278,
     0, 278],
    [1, 9, 279],
    ["]", -1],
    ["(", 281],
    [1, 9, 282],
    [1, 140, 283,
     0, 283],
    [1, 9, 284],
    [")", -1],
    ["{", 286],
    [1, 9, 287],
    [1, 183, 288,
     0, 293],
    [1, 9, 289],
    [",", 290,
     0, 293],
    [1, 9, 291],
    [1, 183, 292,
     0, 292],
    [1, 9, 289],
    [1, 9, 294],
    ["}", -1],
    [3, "keyword", e[15], 296,
     3, "keyword", e[16], 296,
     3, "keyword", e[9], 297,
     0, 297],
    [1, 9, 295],
    [1, 9, 298],
    [3, "keyword", e[14], 299,
     0, 300,
     3, "type", e[13], 301],
    [1, 9, 302],
    [3, "type", e[17], 303],
    [1, 9, 304],
    [/^\&?/, -1],
    [0, 300,
     1, 9, 305,
     0, 301],
    [1, 264, 306,
     0, -1],
    [3, "type", e[18], 301],
    [1, 9, 304],
    [2, 204, -1, {"name":"ParenTokens"},
     2, 328, -1, {"name":"BracketTokens"},
     2, 332, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[21], -1,
     3, "number", e[22], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[20], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 309],
    [1, 9, 310],
    [1, 183, 311,
     0, 316],
    [1, 9, 312],
    [",", 313,
     0, 316],
    [1, 9, 314],
    [1, 183, 315],
    [1, 9, 312],
    [1, 9, 317],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 320],
    [1, 9, 321],
    [1, 336, 322],
    [1, 9, 323],
    [")", -1],
    [3, "attribute", "{", 325,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 324,
     "\n", 326,
     0, -1],
    [1, 324, 327],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 324],
    [/^(?=\*\/)/, 324,
     3, "attribute", "}", 324],
    ["[", 329],
    [1, 9, 330],
    [1, 307, 331,
     "]", -1],
    [1, 9, 330],
    ["{", 333],
    [1, 9, 334],
    [1, 307, 335,
     "}", -1],
    [1, 9, 334],
    [1, 295, 337,
     "...", 338,
     0, -1],
    [1, 9, 339],
    [1, 9, 340],
    [1, 223, 341,
     0, 342],
    [",", 343,
     0, -1],
    [1, 9, 344],
    [1, 9, 345],
    [1, 9, 346],
    [2, 319, 347, {"name":"ParamList"},
     0, 347],
    [e[32], 338],
    [1, 295, 348,
     "...", 349],
    [1, 9, 350],
    [1, 9, 351],
    [1, 9, 340],
    [3, "operator", "=", 352,
     0, 342],
    [1, 223, 353,
     0, 354],
    [1, 9, 355],
    [1, 9, 356],
    [1, 9, 357],
    [1, 183, 342],
    [2, 319, 358, {"name":"ParamList"},
     0, 358],
    [e[32], 349],
    [1, 9, 359],
    [3, "operator", "=", 360,
     0, 354],
    [1, 9, 361],
    [1, 183, 354]
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
    if (brack && config.align !== false && (!config.dontAlign || config.dontAlign.indexOf(cx.name) < 0) && aligned(cx))
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
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    var passLine = config.forceContent && /^\s*(\/\/.*)?$/.test(line) ? "x" : line;
    return findIndent(state.contextAt(passLine, line.length - textAfter.length), textAfter, config)
  }

  var scopes = ["Block", "FunctionDef"];

  var CMode = /*@__PURE__*/(function (superclass) {
    function CMode(conf) {
      superclass.call(this, grammar);
      this.conf = conf;
    }

    if ( superclass ) CMode.__proto__ = superclass;
    CMode.prototype = Object.create( superclass && superclass.prototype );
    CMode.prototype.constructor = CMode;

    CMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    CMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (textAfter.charAt(0) == "#") { return 0 }
      return indent(state, textAfter, line, this.conf)
    };

    return CMode;
  }(CodeMirror.GrammarMode));

  CMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
  CMode.prototype.blockCommentStart = "/*";
  CMode.prototype.blockCommentEnd = "*/";
  CMode.prototype.blockCommentContinue = " * ";
  CMode.prototype.lineComment = "//";
  CMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-c", function (conf) { return new CMode(conf); });

})));
