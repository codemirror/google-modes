(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 237]], [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
     3, "keyword", e[10], 68,
     3, "keyword", e[11], 69,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 116]], 68,
     3, "meta", e[12], 72,
     2, 117, 80, {"name":"DeclType"},
     ";", -1,
     1, 133, 100],
    [1, 9, 14],
    [3, "type def", e[13], 15,
     0, 15],
    [1, 9, 16],
    [2, 152, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 170, 24, {"name":"CondExpr"}],
    [2, 12, 25, {"name":"Statement"}],
    [1, 9, 26],
    [1, 9, 27],
    [1, 9, 28],
    [2, 12, 29, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[2], 30],
    [1, 9, 31],
    [1, 9, 32],
    [1, 133, 33,
     0, 33],
    [2, 170, 34, {"name":"CondExpr"}],
    [1, 9, 35],
    [1, 9, 36],
    [";", 37],
    [";", -1],
    [1, 9, 38],
    [1, 133, 39,
     0, 39],
    [1, 9, 40],
    [")", 41],
    [1, 9, 42],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 44],
    [2, 170, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 175, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 170, 50, {"name":"CondExpr"}],
    [1, 9, 51],
    [2, 112, -1, {"name":"Block"}],
    [1, 9, 53],
    [";", -1],
    [1, 9, 55],
    [e[13], 56],
    [1, 9, 57],
    [";", -1],
    [1, 9, 59],
    [1, 133, 60,
     0, 60],
    [1, 9, 61],
    [";", -1],
    [1, 9, 63],
    [3, "def", e[13], 64,
     0, 64],
    [1, 9, 65],
    [2, 179, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [";", -1],
    [1, 9, 70],
    [1, 9, 71],
    [":", -1],
    [1, 133, 68],
    [1, 9, 73],
    [2, 189, 74, {"name":"ParenTokens"},
     0, 74],
    [1, 9, 75],
    [2, 112, 76, {"name":"Block"},
     0, 77,
     0, 76],
    [1, 9, 78],
    [1, 193, 79,
     0, 76],
    [/^\;?/, -1],
    [1, 9, 77],
    [1, 9, 81],
    [1, 208, 82],
    [1, 9, 83],
    [3, "meta", e[12], 84,
     [5, 220], 85,
     3, "operator", "=", 86,
     0, 87],
    [1, 9, 88],
    [2, 223, -1, {"name":"FunctionDef"}],
    [1, 9, 89],
    [1, 9, 90],
    [2, 189, 91, {"name":"ParenTokens"},
     0, 91],
    [1, 133, 87],
    [",", 92,
     ";", -1],
    [1, 9, 93],
    [1, 9, 94],
    [/^\;?/, -1],
    [3, "def", e[13], 95],
    [1, 9, 96],
    [3, "operator", "=", 97,
     0, 98],
    [1, 9, 99],
    [1, 9, 90],
    [1, 133, 98],
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
    [2, 226, 110, {"name":"doccomment.tagGroup"},
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
     0, 119,
     3, "keyword", e[14], 130,
     3, "type", e[26], 130],
    [3, "keyword", e[15], 120,
     3, "keyword", e[16], 120],
    [3, "type", e[17], 121],
    [1, 9, 122],
    [1, 9, 123],
    [0, 118,
     3, "keyword", e[14], 124,
     0, 125,
     3, "type", e[13], 124],
    [0, 119,
     3, "type", e[18], 124,
     0, 124],
    [1, 9, 126],
    [3, "type", e[17], 127],
    [1, 241, 128,
     0, -1],
    [0, 125,
     1, 9, 129,
     0, 124],
    [1, 9, 126],
    [3, "type", e[18], 124],
    [1, 9, 131],
    [1, 241, 132,
     0, -1],
    [1, 9, 131],
    [3, "operator", e[19], 134,
     2, 246, 135, {"name":"ParenExpr"},
     3, "atom", e[20], 149,
     3, "number", e[21], 149,
     2, 103, 149, {"name":"string","token":"string"},
     2, 251, 149, {"name":"BlockOf"},
     3, "keyword", e[22], 136,
     2, 102, 149, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 133],
    [1, 9, 137],
    [1, 9, 138],
    [1, 133, 149,
     0, 149],
    ["(", 139,
     /^(?:\.\.\.)?/, 140],
    [1, 9, 141],
    [1, 9, 142],
    [1, 261, 143],
    [1, 133, 144],
    [1, 9, 145],
    [1, 9, 146],
    [")", 144],
    [3, "meta", e[12], 147],
    [1, 9, 148],
    [2, 189, 149, {"name":"ParenTokens"},
     0, 149],
    [1, 9, 150],
    [1, 193, 151,
     0, -1],
    [1, 9, 150],
    ["{", 153],
    [1, 9, 154],
    [3, "def property", e[13], 155,
     0, 168],
    [1, 9, 156],
    [3, "operator", "=", 157,
     0, 158],
    [1, 9, 159],
    [1, 9, 160],
    [1, 133, 158],
    [",", 161,
     0, 168],
    [1, 9, 162],
    [3, "def property", e[13], 163,
     0, 164],
    [1, 9, 165],
    [1, 9, 160],
    [3, "operator", "=", 166,
     0, 164],
    [1, 9, 167],
    [1, 133, 164],
    [1, 9, 169],
    ["}", -1],
    ["(", 171],
    [1, 9, 172],
    [1, 133, 173,
     0, 173],
    [1, 9, 174],
    [")", -1],
    [1, 9, 176],
    [3, "keyword", e[23], 177,
     0, -1],
    [1, 9, 178],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 180],
    [1, 9, 181],
    [1, 271, 182,
     0, 187],
    [1, 9, 183],
    [";", 184,
     0, 187],
    [1, 9, 185],
    [1, 271, 186,
     0, 186],
    [1, 9, 183],
    [1, 9, 188],
    ["}", -1],
    ["(", 190],
    [1, 9, 191],
    [1, 282, 192,
     ")", -1],
    [1, 9, 191],
    [2, 283, -1, {"name":"ArgList"},
     "[", 194,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 198,
     3, "operator", e[25], 200,
     "?", 202],
    [1, 9, 195],
    [1, 133, 196],
    [1, 9, 197],
    ["]", -1],
    [1, 9, 199],
    [2, 293, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 201],
    [1, 133, -1],
    [1, 9, 203],
    [1, 133, 204],
    [1, 9, 205],
    [":", 206],
    [1, 9, 207],
    [1, 133, -1],
    [0, 209,
     "(", 216],
    ["*", 210,
     3, "def", e[13], 211],
    [1, 9, 209],
    [1, 9, 212],
    ["[", 213,
     0, -1],
    [1, 9, 214],
    ["]", 215],
    [1, 9, 212],
    [1, 9, 217],
    [1, 208, 218],
    [1, 9, 219],
    [")", -1],
    ["(", 221],
    [1, 9, 222],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 294, 224, {"name":"ParamList"}],
    [1, 9, 225],
    [";", -1,
     2, 112, -1, {"name":"Block"}],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 227,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 228,
     3, "tag", e[29], 235,
     "{", 229],
    [e[27], 227,
     3, "def", e[28], 235,
     "<", 230,
     0, 235],
    [e[27], 228,
     3, "type", e[28], 235,
     0, 235],
    [3, "tag", e[29], 231],
    [3, "type def", /^[a-zA-Z¡-￿_]+/, 232],
    [/^[\t ]*/, 233],
    [">", 235],
    [1, 299, 234],
    ["}", 235],
    [e[30], 236,
     0, -1],
    [0, 235,
     0, 235],
    [/^(?![a-zA-Z¡-￿_0-9])/, 238],
    [1, 9, 239],
    [1, 241, 240,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 239],
    ["[", 242,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 243],
    [3, "number", e[21], 244,
     0, 244],
    [1, 9, 245],
    ["]", -1],
    ["(", 247],
    [1, 9, 248],
    [1, 133, 249,
     0, 249],
    [1, 9, 250],
    [")", -1],
    ["{", 252],
    [1, 9, 253],
    [1, 133, 254,
     0, 259],
    [1, 9, 255],
    [",", 256,
     0, 259],
    [1, 9, 257],
    [1, 133, 258,
     0, 258],
    [1, 9, 255],
    [1, 9, 260],
    ["}", -1],
    [3, "keyword", e[15], 262,
     3, "keyword", e[16], 262,
     3, "keyword", e[9], 263,
     0, 263],
    [1, 9, 261],
    [1, 9, 264],
    [3, "keyword", e[14], 268,
     0, 265,
     3, "type", e[13], 268],
    [3, "type", e[17], 266],
    [0, 265,
     1, 9, 267,
     0, 268],
    [3, "type", e[18], 268],
    [1, 9, 269],
    [1, 241, 270,
     0, -1],
    [1, 9, 269],
    [1, 261, 272],
    [1, 9, 273],
    [2, 293, 274, {"name":"fieldName","token":"property"},
     0, 274],
    [1, 9, 275],
    [":", 276,
     "[", 277,
     0, -1],
    [1, 9, 278],
    [1, 9, 279],
    [3, "number", e[21], -1],
    [3, "number", e[21], 280,
     0, 280],
    [1, 9, 281],
    ["]", -1],
    [2, 189, -1, {"name":"ParenTokens"},
     2, 303, -1, {"name":"BracketTokens"},
     2, 307, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[20], -1,
     3, "number", e[21], -1,
     2, 103, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[19], -1,
     2, 102, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 284],
    [1, 9, 285],
    [1, 133, 286,
     0, 291],
    [1, 9, 287],
    [",", 288,
     0, 291],
    [1, 9, 289],
    [1, 133, 290],
    [1, 9, 287],
    [1, 9, 292],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 295],
    [1, 9, 296],
    [1, 311, 297],
    [1, 9, 298],
    [")", -1],
    [3, "attribute", "{", 300,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 299,
     "\n", 301,
     0, -1],
    [1, 299, 302],
    [/^[\t ]*(?:\*[\t ]*)?/, 299],
    [/^(?=\*\/)/, 299,
     3, "attribute", "}", 299],
    ["[", 304],
    [1, 9, 305],
    [1, 282, 306,
     "]", -1],
    [1, 9, 305],
    ["{", 308],
    [1, 9, 309],
    [1, 282, 310,
     "}", -1],
    [1, 9, 309],
    [1, 261, 312,
     0, -1],
    [1, 9, 313],
    [1, 208, 314,
     0, 315],
    [1, 9, 316],
    [1, 9, 317],
    [2, 294, 315, {"name":"ParamList"},
     0, 315],
    [",", 318,
     0, -1],
    [1, 9, 319],
    [1, 261, 320],
    [1, 9, 321],
    [1, 208, 322,
     0, 323],
    [1, 9, 324],
    [1, 9, 317],
    [2, 294, 323, {"name":"ParamList"},
     0, 323]
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
    } else if (statementish.indexOf(cx.name) > -1) {
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
