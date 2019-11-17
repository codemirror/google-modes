(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 234]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
     2, 100, -1, {"name":"plainVariableName","token":"variable"},
     3, "number", e[21], -1,
     2, 101, -1, {"name":"string","token":"string"},
     3, "operator", e[19], -1,
     3, "operator", e[24], -1,
     3, "operator", e[25], -1,
     2, 105, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    ["#", 7],
    [2, 105, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 105, 9, {"name":"comment","token":"comment"},
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
     2, 110, -1, {"name":"Block"},
     3, "keyword", e[6], 52,
     3, "keyword", e[7], 54,
     3, "keyword", e[8], 58,
     3, "keyword", e[9], 62,
     3, "keyword", e[10], 68,
     3, "keyword", e[11], 69,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 114]], 68,
     3, "meta", e[12], 72,
     2, 115, 78, {"name":"DeclType"},
     ";", -1,
     1, 131, 98],
    [1, 9, 14],
    [3, "type def", e[13], 15,
     0, 15],
    [1, 9, 16],
    [2, 149, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 167, 24, {"name":"CondExpr"}],
    [2, 12, 25, {"name":"Statement"}],
    [1, 9, 26],
    [1, 9, 27],
    [1, 9, 28],
    [2, 12, 29, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[2], 30],
    [1, 9, 31],
    [1, 9, 32],
    [1, 131, 33,
     0, 33],
    [2, 167, 34, {"name":"CondExpr"}],
    [1, 9, 35],
    [1, 9, 36],
    [";", 37],
    [";", -1],
    [1, 9, 38],
    [1, 131, 39,
     0, 39],
    [1, 9, 40],
    [")", 41],
    [1, 9, 42],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 44],
    [2, 167, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 172, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 167, 50, {"name":"CondExpr"}],
    [1, 9, 51],
    [2, 110, -1, {"name":"Block"}],
    [1, 9, 53],
    [";", -1],
    [1, 9, 55],
    [e[13], 56],
    [1, 9, 57],
    [";", -1],
    [1, 9, 59],
    [1, 131, 60,
     0, 60],
    [1, 9, 61],
    [";", -1],
    [1, 9, 63],
    [3, "def", e[13], 64,
     0, 64],
    [1, 9, 65],
    [2, 176, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [";", -1],
    [1, 9, 70],
    [1, 9, 71],
    [":", -1],
    [1, 131, 68],
    [1, 9, 73],
    [2, 186, 74, {"name":"ParenTokens"},
     0, 74],
    [1, 9, 75],
    [2, 110, -1, {"name":"Block"},
     0, 76],
    [1, 190, 77,
     0, -1],
    [1, 9, 76],
    [1, 9, 79],
    [1, 205, 80],
    [1, 9, 81],
    [3, "meta", e[12], 82,
     0, 83],
    [1, 9, 84],
    [1, 9, 85],
    [2, 186, 83, {"name":"ParenTokens"},
     0, 83],
    [[5, 217], 86,
     3, "operator", "=", 87,
     0, 88],
    [2, 220, -1, {"name":"FunctionDef"}],
    [1, 9, 89],
    [1, 9, 90],
    [1, 131, 88],
    [",", 91,
     ";", -1],
    [1, 9, 92],
    [3, "def", e[13], 93],
    [1, 9, 94],
    [3, "operator", "=", 95,
     0, 96],
    [1, 9, 97],
    [1, 9, 90],
    [1, 131, 96],
    [1, 9, 99],
    [";", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 102],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 103],
    ["\\", 104,
     [0, /^(?!\")/, /^[^]/], 103,
     "\"", -1],
    [/^[^]/, 103],
    [/^\/\*\*(?!\/)/, 106,
     "/*", 109,
     /^\/\/.*/, -1],
    [e[30], 107,
     0, 108],
    [0, 106,
     0, 106],
    [2, 223, 108, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 109,
     "*/", -1],
    ["{", 111],
    [1, 9, 112],
    [2, 12, 113, {"name":"Statement"},
     "}", -1],
    [1, 9, 112],
    [e[27], 114,
     /^\:(?!\:)/, -1],
    [0, 116,
     0, 117,
     3, "keyword", e[14], 128,
     3, "type", e[26], 128],
    [3, "keyword", e[15], 118,
     3, "keyword", e[16], 118],
    [3, "type", e[17], 119],
    [1, 9, 120],
    [1, 9, 121],
    [0, 116,
     3, "keyword", e[14], 122,
     0, 123,
     3, "type", e[13], 122],
    [0, 117,
     3, "type", e[18], 122,
     0, 122],
    [1, 9, 124],
    [3, "type", e[17], 125],
    [1, 238, 126,
     0, -1],
    [0, 123,
     1, 9, 127,
     0, 122],
    [1, 9, 124],
    [3, "type", e[18], 122],
    [1, 9, 129],
    [1, 238, 130,
     0, -1],
    [1, 9, 129],
    [3, "operator", e[19], 132,
     2, 243, 133, {"name":"ParenExpr"},
     3, "atom", e[20], 146,
     3, "number", e[21], 146,
     2, 101, 146, {"name":"string","token":"string"},
     2, 248, 146, {"name":"BlockOf"},
     3, "keyword", e[22], 134,
     3, "meta", e[12], 135,
     2, 100, 146, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 131],
    [1, 9, 136],
    [1, 9, 137],
    [1, 9, 138],
    [/^(?![\[\(\-\+])/, 139,
     0, 146],
    ["(", 140,
     /^(?:\.\.\.)?/, 141],
    [2, 186, 146, {"name":"ParenTokens"},
     0, 146],
    [1, 131, 146],
    [1, 9, 142],
    [1, 9, 143],
    [1, 258, 144],
    [1, 131, 146],
    [1, 9, 145],
    [")", 146],
    [1, 9, 147],
    [1, 190, 148,
     0, -1],
    [1, 9, 147],
    ["{", 150],
    [1, 9, 151],
    [3, "def property", e[13], 152,
     0, 165],
    [1, 9, 153],
    [3, "operator", "=", 154,
     0, 155],
    [1, 9, 156],
    [1, 9, 157],
    [1, 131, 155],
    [",", 158,
     0, 165],
    [1, 9, 159],
    [3, "def property", e[13], 160,
     0, 161],
    [1, 9, 162],
    [1, 9, 157],
    [3, "operator", "=", 163,
     0, 161],
    [1, 9, 164],
    [1, 131, 161],
    [1, 9, 166],
    ["}", -1],
    ["(", 168],
    [1, 9, 169],
    [1, 131, 170,
     0, 170],
    [1, 9, 171],
    [")", -1],
    [1, 9, 173],
    [3, "keyword", e[23], 174,
     0, -1],
    [1, 9, 175],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 177],
    [1, 9, 178],
    [1, 268, 179,
     0, 184],
    [1, 9, 180],
    [";", 181,
     0, 184],
    [1, 9, 182],
    [1, 268, 183,
     0, 183],
    [1, 9, 180],
    [1, 9, 185],
    ["}", -1],
    ["(", 187],
    [1, 9, 188],
    [1, 279, 189,
     ")", -1],
    [1, 9, 188],
    [2, 280, -1, {"name":"ArgList"},
     "[", 191,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 195,
     3, "operator", e[25], 197,
     "?", 199],
    [1, 9, 192],
    [1, 131, 193],
    [1, 9, 194],
    ["]", -1],
    [1, 9, 196],
    [2, 290, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 198],
    [1, 131, -1,
     0, -1],
    [1, 9, 200],
    [1, 131, 201],
    [1, 9, 202],
    [":", 203],
    [1, 9, 204],
    [1, 131, -1],
    [0, 206,
     "(", 213],
    ["*", 207,
     3, "def", e[13], 208],
    [1, 9, 206],
    [1, 9, 209],
    ["[", 210,
     0, -1],
    [1, 9, 211],
    ["]", 212],
    [1, 9, 209],
    [1, 9, 214],
    [1, 205, 215],
    [1, 9, 216],
    [")", -1],
    ["(", 218],
    [1, 9, 219],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 291, 221, {"name":"ParamList"}],
    [1, 9, 222],
    [";", -1,
     2, 110, -1, {"name":"Block"}],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 224,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 225,
     3, "tag", e[29], 232,
     "{", 226],
    [e[27], 224,
     3, "def", e[28], 232,
     "<", 227,
     0, 232],
    [e[27], 225,
     3, "type", e[28], 232,
     0, 232],
    [3, "tag", e[29], 228],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 229],
    [/^[\t ]*/, 230],
    [">", 232],
    [1, 296, 231],
    ["}", 232],
    [e[30], 233,
     0, -1],
    [0, 232,
     0, 232],
    [/^(?![a-zA-Z¡-￿_0-9])/, 235],
    [1, 9, 236],
    [1, 238, 237,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 236],
    ["[", 239,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 240],
    [1, 131, 241,
     0, 241],
    [1, 9, 242],
    ["]", -1],
    ["(", 244],
    [1, 9, 245],
    [1, 131, 246,
     0, 246],
    [1, 9, 247],
    [")", -1],
    ["{", 249],
    [1, 9, 250],
    [1, 131, 251,
     0, 256],
    [1, 9, 252],
    [",", 253,
     0, 256],
    [1, 9, 254],
    [1, 131, 255,
     0, 255],
    [1, 9, 252],
    [1, 9, 257],
    ["}", -1],
    [3, "keyword", e[15], 259,
     3, "keyword", e[16], 259,
     3, "keyword", e[9], 260,
     0, 260],
    [1, 9, 258],
    [1, 9, 261],
    [3, "keyword", e[14], 265,
     0, 262,
     3, "type", e[13], 265],
    [3, "type", e[17], 263],
    [0, 262,
     1, 9, 264,
     0, 265],
    [3, "type", e[18], 265],
    [1, 9, 266],
    [1, 238, 267,
     0, -1],
    [1, 9, 266],
    [1, 258, 269],
    [1, 9, 270],
    [2, 290, 271, {"name":"fieldName","token":"property"},
     0, 271],
    [1, 9, 272],
    [":", 273,
     "[", 274,
     0, -1],
    [1, 9, 275],
    [1, 9, 276],
    [3, "number", e[21], -1],
    [1, 131, 277,
     0, 277],
    [1, 9, 278],
    ["]", -1],
    [2, 186, -1, {"name":"ParenTokens"},
     2, 300, -1, {"name":"BracketTokens"},
     2, 304, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[20], -1,
     3, "number", e[21], -1,
     2, 101, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[19], -1,
     2, 100, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 281],
    [1, 9, 282],
    [1, 131, 283,
     0, 288],
    [1, 9, 284],
    [",", 285,
     0, 288],
    [1, 9, 286],
    [1, 131, 287],
    [1, 9, 284],
    [1, 9, 289],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 292],
    [1, 9, 293],
    [1, 308, 294],
    [1, 9, 295],
    [")", -1],
    [3, "attribute", "{", 297,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 296,
     "\n", 298,
     0, -1],
    [1, 296, 299],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 296],
    [/^(?=\*\/)/, 296,
     3, "attribute", "}", 296],
    ["[", 301],
    [1, 9, 302],
    [1, 279, 303,
     "]", -1],
    [1, 9, 302],
    ["{", 305],
    [1, 9, 306],
    [1, 279, 307,
     "}", -1],
    [1, 9, 306],
    [1, 258, 309,
     0, -1],
    [1, 9, 310],
    [1, 205, 311,
     0, 312],
    [1, 9, 313],
    [1, 9, 314],
    [2, 291, 315, {"name":"ParamList"},
     0, 315],
    [",", 316,
     0, -1],
    [1, 9, 317],
    [1, 9, 318],
    [3, "operator", "=", 319,
     0, 312],
    [1, 258, 320],
    [1, 9, 321],
    [1, 9, 322],
    [1, 131, 312],
    [1, 205, 323,
     0, 324],
    [1, 9, 325],
    [1, 9, 314],
    [2, 291, 326, {"name":"ParamList"},
     0, 326],
    [1, 9, 327],
    [3, "operator", "=", 328,
     0, 324],
    [1, 9, 329],
    [1, 131, 324]
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
