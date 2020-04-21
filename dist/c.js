(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile|restrict)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 249]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?:\.\.\.)?/];
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
    [2, 201, 76, {"name":"ParenTokens"},
     0, 76],
    [1, 9, 77],
    [2, 112, -1, {"name":"Block"},
     0, 78],
    [1, 205, 79,
     0, -1],
    [1, 9, 78],
    [1, 9, 81],
    [1, 220, 82],
    [1, 9, 83],
    [3, "meta", e[12], 84,
     0, 85],
    [1, 9, 86],
    [1, 9, 87],
    [2, 201, 85, {"name":"ParenTokens"},
     0, 85],
    [[5, 232], 88,
     3, "operator", "=", 89,
     0, 90],
    [2, 235, -1, {"name":"FunctionDef"}],
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
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
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
    [2, 238, 110, {"name":"doccomment.tagGroup"},
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
    [1, 253, 128,
     0, -1],
    [3, "type", e[18], 123],
    [1, 9, 126],
    [3, "type", e[17], 130],
    [1, 9, 131],
    [0, 129,
     3, "type", e[18], 132,
     0, 132],
    [1, 9, 133],
    [1, 253, 134,
     0, -1],
    [1, 9, 133],
    [1, 9, 137],
    [1, 9, 138],
    [/^\&?/, -1],
    [1, 253, 139,
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
    [1, 258, 176,
     0, 181],
    [1, 9, 177],
    [";", 178,
     0, 181],
    [1, 9, 179],
    [1, 258, 180,
     0, 180],
    [1, 9, 177],
    [1, 9, 182],
    ["}", -1],
    [3, "operator", e[20], 184,
     2, 269, 185, {"name":"ParenExpr"},
     3, "atom", e[21], 198,
     3, "number", e[22], 198,
     2, 103, 198, {"name":"string","token":"string"},
     2, 274, 198, {"name":"BlockOf"},
     3, "keyword", e[23], 186,
     3, "meta", e[12], 187,
     2, 102, 198, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 183],
    [1, 9, 188],
    [1, 9, 189],
    [1, 9, 190],
    [/^(?![\[\(\-\+])/, 191,
     0, 198],
    ["(", 192,
     e[32], 193],
    [2, 201, 198, {"name":"ParenTokens"},
     0, 198],
    [1, 183, 198],
    [1, 9, 194],
    [1, 9, 195],
    [1, 284, 196],
    [1, 183, 198],
    [1, 9, 197],
    [")", 198],
    [1, 9, 199],
    [1, 205, 200,
     0, -1],
    [1, 9, 199],
    ["(", 202],
    [1, 9, 203],
    [1, 296, 204,
     ")", -1],
    [1, 9, 203],
    [2, 297, -1, {"name":"ArgList"},
     "[", 206,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 210,
     3, "operator", e[25], 212,
     "?", 214],
    [1, 9, 207],
    [1, 183, 208],
    [1, 9, 209],
    ["]", -1],
    [1, 9, 211],
    [2, 307, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 213],
    [1, 183, -1,
     0, -1],
    [1, 9, 215],
    [1, 183, 216],
    [1, 9, 217],
    [":", 218],
    [1, 9, 219],
    [1, 183, -1],
    [0, 221,
     "(", 228],
    ["*", 222,
     3, "def", e[13], 223],
    [1, 9, 221],
    [1, 9, 224],
    ["[", 225,
     0, -1],
    [1, 9, 226],
    ["]", 227],
    [1, 9, 224],
    [1, 9, 229],
    [1, 220, 230],
    [1, 9, 231],
    [")", -1],
    ["(", 233],
    [1, 9, 234],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 308, 236, {"name":"ParamList"}],
    [1, 9, 237],
    [";", -1,
     2, 112, -1, {"name":"Block"}],
    [3, "tag", /^\@f[\$\[\]]/, 247,
     3, "tag", /^\@param(?:\[(?:in|out|in\,out)\])?(?![a-zA-Z0-9¡-￿_])/, 239,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 240,
     3, "tag", e[29], 247,
     "{", 241],
    [e[27], 239,
     3, "def", e[28], 247,
     "<", 242,
     0, 247],
    [e[27], 240,
     3, "type", e[28], 247,
     0, 247],
    [3, "tag", e[29], 243],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 244],
    [/^[\t ]*/, 245],
    [">", 247],
    [1, 313, 246],
    ["}", 247],
    [e[30], 248,
     0, -1],
    [0, 247,
     0, 247],
    [/^(?![a-zA-Z¡-￿_0-9])/, 250],
    [1, 9, 251],
    [1, 253, 252,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 251],
    ["[", 254,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 255],
    [1, 183, 256,
     0, 256],
    [1, 9, 257],
    ["]", -1],
    [1, 284, 259],
    [1, 9, 260],
    [2, 307, 261, {"name":"fieldName","token":"property"},
     0, 261],
    [1, 9, 262],
    [":", 263,
     "[", 264,
     0, -1],
    [1, 9, 265],
    [1, 9, 266],
    [3, "number", e[22], -1],
    [1, 183, 267,
     0, 267],
    [1, 9, 268],
    ["]", -1],
    ["(", 270],
    [1, 9, 271],
    [1, 140, 272,
     0, 272],
    [1, 9, 273],
    [")", -1],
    ["{", 275],
    [1, 9, 276],
    [1, 183, 277,
     0, 282],
    [1, 9, 278],
    [",", 279,
     0, 282],
    [1, 9, 280],
    [1, 183, 281,
     0, 281],
    [1, 9, 278],
    [1, 9, 283],
    ["}", -1],
    [3, "keyword", e[15], 285,
     3, "keyword", e[16], 285,
     3, "keyword", e[9], 286,
     0, 286],
    [1, 9, 284],
    [1, 9, 287],
    [3, "keyword", e[14], 288,
     0, 289,
     3, "type", e[13], 290],
    [1, 9, 291],
    [3, "type", e[17], 292],
    [1, 9, 293],
    [/^\&?/, -1],
    [0, 289,
     1, 9, 294,
     0, 290],
    [1, 253, 295,
     0, -1],
    [3, "type", e[18], 290],
    [1, 9, 293],
    [2, 201, -1, {"name":"ParenTokens"},
     2, 317, -1, {"name":"BracketTokens"},
     2, 321, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[21], -1,
     3, "number", e[22], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[20], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 298],
    [1, 9, 299],
    [1, 183, 300,
     0, 305],
    [1, 9, 301],
    [",", 302,
     0, 305],
    [1, 9, 303],
    [1, 183, 304],
    [1, 9, 301],
    [1, 9, 306],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 309],
    [1, 9, 310],
    [1, 325, 311],
    [1, 9, 312],
    [")", -1],
    [3, "attribute", "{", 314,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 313,
     "\n", 315,
     0, -1],
    [1, 313, 316],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 313],
    [/^(?=\*\/)/, 313,
     3, "attribute", "}", 313],
    ["[", 318],
    [1, 9, 319],
    [1, 296, 320,
     "]", -1],
    [1, 9, 319],
    ["{", 322],
    [1, 9, 323],
    [1, 296, 324,
     "}", -1],
    [1, 9, 323],
    [1, 284, 326,
     "...", 327,
     0, -1],
    [1, 9, 328],
    [1, 9, 329],
    [1, 220, 330,
     0, 331],
    [",", 332,
     0, -1],
    [1, 9, 333],
    [1, 9, 334],
    [1, 9, 335],
    [2, 308, 336, {"name":"ParamList"},
     0, 336],
    [e[32], 327],
    [1, 284, 337,
     "...", 338],
    [1, 9, 339],
    [1, 9, 340],
    [1, 9, 329],
    [3, "operator", "=", 341,
     0, 331],
    [1, 220, 342,
     0, 343],
    [1, 9, 344],
    [1, 9, 345],
    [1, 9, 346],
    [1, 183, 331],
    [2, 308, 347, {"name":"ParamList"},
     0, 347],
    [e[32], 338],
    [1, 9, 348],
    [3, "operator", "=", 349,
     0, 343],
    [1, 9, 350],
    [1, 183, 343]
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

  var CMode = (function (superclass) {
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
