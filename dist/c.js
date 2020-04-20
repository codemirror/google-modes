(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 243]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
     3, "keyword", e[23], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "type", e[17], -1,
     3, "type", e[18], -1,
     3, "keyword", e[16], -1,
     3, "atom", e[20], -1,
     3, "meta", e[12], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     3, "number", e[21], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[19], -1,
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
    [2, 158, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 176, 24, {"name":"CondExpr"}],
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
    [2, 176, 34, {"name":"CondExpr"}],
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
    [2, 176, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 181, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 176, 50, {"name":"CondExpr"}],
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
    [2, 185, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [3, "def", e[13], 68,
     0, 68],
    [1, 9, 69],
    [";", -1],
    [1, 9, 72],
    [1, 9, 73],
    [":", -1],
    [1, 140, 70],
    [1, 9, 75],
    [2, 195, 76, {"name":"ParenTokens"},
     0, 76],
    [1, 9, 77],
    [2, 112, -1, {"name":"Block"},
     0, 78],
    [1, 199, 79,
     0, -1],
    [1, 9, 78],
    [1, 9, 81],
    [1, 214, 82],
    [1, 9, 83],
    [3, "meta", e[12], 84,
     0, 85],
    [1, 9, 86],
    [1, 9, 87],
    [2, 195, 85, {"name":"ParenTokens"},
     0, 85],
    [[5, 226], 88,
     3, "operator", "=", 89,
     0, 90],
    [2, 229, -1, {"name":"FunctionDef"}],
    [1, 9, 91],
    [1, 9, 92],
    [1, 140, 90],
    [",", 93,
     ";", -1],
    [1, 9, 94],
    [3, "def", e[13], 95],
    [1, 9, 96],
    [3, "operator", "=", 97,
     0, 98],
    [1, 9, 99],
    [1, 9, 92],
    [1, 140, 98],
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
    [2, 232, 110, {"name":"doccomment.tagGroup"},
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
    [1, 247, 128,
     0, -1],
    [3, "type", e[18], 123],
    [1, 9, 126],
    [3, "type", e[17], 130],
    [1, 9, 131],
    [0, 129,
     3, "type", e[18], 132,
     0, 132],
    [1, 9, 133],
    [1, 247, 134,
     0, -1],
    [1, 9, 133],
    [1, 9, 137],
    [1, 9, 138],
    [/^\&?/, -1],
    [1, 247, 139,
     0, -1],
    [1, 9, 138],
    [3, "operator", e[19], 141,
     2, 252, 142, {"name":"ParenExpr"},
     3, "atom", e[20], 155,
     3, "number", e[21], 155,
     2, 103, 155, {"name":"string","token":"string"},
     2, 257, 155, {"name":"BlockOf"},
     3, "keyword", e[22], 143,
     3, "meta", e[12], 144,
     2, 102, 155, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 140],
    [1, 9, 145],
    [1, 9, 146],
    [1, 9, 147],
    [/^(?![\[\(\-\+])/, 148,
     0, 155],
    ["(", 149,
     /^(?:\.\.\.)?/, 150],
    [2, 195, 155, {"name":"ParenTokens"},
     0, 155],
    [1, 140, 155],
    [1, 9, 151],
    [1, 9, 152],
    [1, 267, 153],
    [1, 140, 155],
    [1, 9, 154],
    [")", 155],
    [1, 9, 156],
    [1, 199, 157,
     0, -1],
    [1, 9, 156],
    ["{", 159],
    [1, 9, 160],
    [3, "def property", e[13], 161,
     0, 174],
    [1, 9, 162],
    [3, "operator", "=", 163,
     0, 164],
    [1, 9, 165],
    [1, 9, 166],
    [1, 140, 164],
    [",", 167,
     0, 174],
    [1, 9, 168],
    [3, "def property", e[13], 169,
     0, 170],
    [1, 9, 171],
    [1, 9, 166],
    [3, "operator", "=", 172,
     0, 170],
    [1, 9, 173],
    [1, 140, 170],
    [1, 9, 175],
    ["}", -1],
    ["(", 177],
    [1, 9, 178],
    [1, 140, 179,
     0, 179],
    [1, 9, 180],
    [")", -1],
    [1, 9, 182],
    [3, "keyword", e[23], 183,
     0, -1],
    [1, 9, 184],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 186],
    [1, 9, 187],
    [1, 279, 188,
     0, 193],
    [1, 9, 189],
    [";", 190,
     0, 193],
    [1, 9, 191],
    [1, 279, 192,
     0, 192],
    [1, 9, 189],
    [1, 9, 194],
    ["}", -1],
    ["(", 196],
    [1, 9, 197],
    [1, 290, 198,
     ")", -1],
    [1, 9, 197],
    [2, 291, -1, {"name":"ArgList"},
     "[", 200,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 204,
     3, "operator", e[25], 206,
     "?", 208],
    [1, 9, 201],
    [1, 140, 202],
    [1, 9, 203],
    ["]", -1],
    [1, 9, 205],
    [2, 301, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 207],
    [1, 140, -1,
     0, -1],
    [1, 9, 209],
    [1, 140, 210],
    [1, 9, 211],
    [":", 212],
    [1, 9, 213],
    [1, 140, -1],
    [0, 215,
     "(", 222],
    ["*", 216,
     3, "def", e[13], 217],
    [1, 9, 215],
    [1, 9, 218],
    ["[", 219,
     0, -1],
    [1, 9, 220],
    ["]", 221],
    [1, 9, 218],
    [1, 9, 223],
    [1, 214, 224],
    [1, 9, 225],
    [")", -1],
    ["(", 227],
    [1, 9, 228],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 302, 230, {"name":"ParamList"}],
    [1, 9, 231],
    [";", -1,
     2, 112, -1, {"name":"Block"}],
    [3, "tag", /^\@f[\$\[\]]/, 241,
     3, "tag", /^\@param(?:\[(?:in|out|in\,out)\])?(?![a-zA-Z0-9¡-￿_])/, 233,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 234,
     3, "tag", e[29], 241,
     "{", 235],
    [e[27], 233,
     3, "def", e[28], 241,
     "<", 236,
     0, 241],
    [e[27], 234,
     3, "type", e[28], 241,
     0, 241],
    [3, "tag", e[29], 237],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 238],
    [/^[\t ]*/, 239],
    [">", 241],
    [1, 307, 240],
    ["}", 241],
    [e[30], 242,
     0, -1],
    [0, 241,
     0, 241],
    [/^(?![a-zA-Z¡-￿_0-9])/, 244],
    [1, 9, 245],
    [1, 247, 246,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 245],
    ["[", 248,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 249],
    [1, 140, 250,
     0, 250],
    [1, 9, 251],
    ["]", -1],
    ["(", 253],
    [1, 9, 254],
    [1, 140, 255,
     0, 255],
    [1, 9, 256],
    [")", -1],
    ["{", 258],
    [1, 9, 259],
    [1, 140, 260,
     0, 265],
    [1, 9, 261],
    [",", 262,
     0, 265],
    [1, 9, 263],
    [1, 140, 264,
     0, 264],
    [1, 9, 261],
    [1, 9, 266],
    ["}", -1],
    [3, "keyword", e[15], 268,
     3, "keyword", e[16], 268,
     3, "keyword", e[9], 269,
     0, 269],
    [1, 9, 267],
    [1, 9, 270],
    [3, "keyword", e[14], 271,
     0, 272,
     3, "type", e[13], 273],
    [1, 9, 274],
    [3, "type", e[17], 275],
    [1, 9, 276],
    [/^\&?/, -1],
    [0, 272,
     1, 9, 277,
     0, 273],
    [1, 247, 278,
     0, -1],
    [3, "type", e[18], 273],
    [1, 9, 276],
    [1, 267, 280],
    [1, 9, 281],
    [2, 301, 282, {"name":"fieldName","token":"property"},
     0, 282],
    [1, 9, 283],
    [":", 284,
     "[", 285,
     0, -1],
    [1, 9, 286],
    [1, 9, 287],
    [3, "number", e[21], -1],
    [1, 140, 288,
     0, 288],
    [1, 9, 289],
    ["]", -1],
    [2, 195, -1, {"name":"ParenTokens"},
     2, 311, -1, {"name":"BracketTokens"},
     2, 315, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[20], -1,
     3, "number", e[21], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[19], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 292],
    [1, 9, 293],
    [1, 140, 294,
     0, 299],
    [1, 9, 295],
    [",", 296,
     0, 299],
    [1, 9, 297],
    [1, 140, 298],
    [1, 9, 295],
    [1, 9, 300],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 303],
    [1, 9, 304],
    [1, 319, 305],
    [1, 9, 306],
    [")", -1],
    [3, "attribute", "{", 308,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 307,
     "\n", 309,
     0, -1],
    [1, 307, 310],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 307],
    [/^(?=\*\/)/, 307,
     3, "attribute", "}", 307],
    ["[", 312],
    [1, 9, 313],
    [1, 290, 314,
     "]", -1],
    [1, 9, 313],
    ["{", 316],
    [1, 9, 317],
    [1, 290, 318,
     "}", -1],
    [1, 9, 317],
    [1, 267, 320,
     0, -1],
    [1, 9, 321],
    [1, 214, 322,
     0, 323],
    [1, 9, 324],
    [1, 9, 325],
    [2, 302, 326, {"name":"ParamList"},
     0, 326],
    [",", 327,
     0, -1],
    [1, 9, 328],
    [1, 9, 329],
    [3, "operator", "=", 330,
     0, 323],
    [1, 267, 331],
    [1, 9, 332],
    [1, 9, 333],
    [1, 140, 323],
    [1, 214, 334,
     0, 335],
    [1, 9, 336],
    [1, 9, 325],
    [2, 302, 337, {"name":"ParamList"},
     0, 337],
    [1, 9, 338],
    [3, "operator", "=", 339,
     0, 335],
    [1, 9, 340],
    [1, 140, 335]
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
