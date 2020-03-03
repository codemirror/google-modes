(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 241]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
     1, 138, 98],
    [1, 9, 14],
    [3, "type def", e[13], 15,
     0, 15],
    [1, 9, 16],
    [2, 156, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 174, 24, {"name":"CondExpr"}],
    [2, 12, 25, {"name":"Statement"}],
    [1, 9, 26],
    [1, 9, 27],
    [1, 9, 28],
    [2, 12, 29, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[2], 30],
    [1, 9, 31],
    [1, 9, 32],
    [1, 138, 33,
     0, 33],
    [2, 174, 34, {"name":"CondExpr"}],
    [1, 9, 35],
    [1, 9, 36],
    [";", 37],
    [";", -1],
    [1, 9, 38],
    [1, 138, 39,
     0, 39],
    [1, 9, 40],
    [")", 41],
    [1, 9, 42],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 44],
    [2, 174, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 179, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 174, 50, {"name":"CondExpr"}],
    [1, 9, 51],
    [2, 110, -1, {"name":"Block"}],
    [1, 9, 53],
    [";", -1],
    [1, 9, 55],
    [e[13], 56],
    [1, 9, 57],
    [";", -1],
    [1, 9, 59],
    [1, 138, 60,
     0, 60],
    [1, 9, 61],
    [";", -1],
    [1, 9, 63],
    [3, "def", e[13], 64,
     0, 64],
    [1, 9, 65],
    [2, 183, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [";", -1],
    [1, 9, 70],
    [1, 9, 71],
    [":", -1],
    [1, 138, 68],
    [1, 9, 73],
    [2, 193, 74, {"name":"ParenTokens"},
     0, 74],
    [1, 9, 75],
    [2, 110, -1, {"name":"Block"},
     0, 76],
    [1, 197, 77,
     0, -1],
    [1, 9, 76],
    [1, 9, 79],
    [1, 212, 80],
    [1, 9, 81],
    [3, "meta", e[12], 82,
     0, 83],
    [1, 9, 84],
    [1, 9, 85],
    [2, 193, 83, {"name":"ParenTokens"},
     0, 83],
    [[5, 224], 86,
     3, "operator", "=", 87,
     0, 88],
    [2, 227, -1, {"name":"FunctionDef"}],
    [1, 9, 89],
    [1, 9, 90],
    [1, 138, 88],
    [",", 91,
     ";", -1],
    [1, 9, 92],
    [3, "def", e[13], 93],
    [1, 9, 94],
    [3, "operator", "=", 95,
     0, 96],
    [1, 9, 97],
    [1, 9, 90],
    [1, 138, 96],
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
    [2, 230, 108, {"name":"doccomment.tagGroup"},
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
     0, 127,
     3, "keyword", e[14], 133,
     3, "type", e[26], 134],
    [3, "keyword", e[15], 117,
     3, "keyword", e[16], 117],
    [1, 9, 118],
    [0, 116,
     3, "keyword", e[14], 119,
     0, 120,
     3, "type", e[13], 121],
    [1, 9, 122],
    [3, "type", e[17], 123],
    [1, 9, 124],
    [/^\&?/, -1],
    [0, 120,
     1, 9, 125,
     0, 121],
    [1, 245, 126,
     0, -1],
    [3, "type", e[18], 121],
    [1, 9, 124],
    [3, "type", e[17], 128],
    [1, 9, 129],
    [0, 127,
     3, "type", e[18], 130,
     0, 130],
    [1, 9, 131],
    [1, 245, 132,
     0, -1],
    [1, 9, 131],
    [1, 9, 135],
    [1, 9, 136],
    [/^\&?/, -1],
    [1, 245, 137,
     0, -1],
    [1, 9, 136],
    [3, "operator", e[19], 139,
     2, 250, 140, {"name":"ParenExpr"},
     3, "atom", e[20], 153,
     3, "number", e[21], 153,
     2, 101, 153, {"name":"string","token":"string"},
     2, 255, 153, {"name":"BlockOf"},
     3, "keyword", e[22], 141,
     3, "meta", e[12], 142,
     2, 100, 153, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 138],
    [1, 9, 143],
    [1, 9, 144],
    [1, 9, 145],
    [/^(?![\[\(\-\+])/, 146,
     0, 153],
    ["(", 147,
     /^(?:\.\.\.)?/, 148],
    [2, 193, 153, {"name":"ParenTokens"},
     0, 153],
    [1, 138, 153],
    [1, 9, 149],
    [1, 9, 150],
    [1, 265, 151],
    [1, 138, 153],
    [1, 9, 152],
    [")", 153],
    [1, 9, 154],
    [1, 197, 155,
     0, -1],
    [1, 9, 154],
    ["{", 157],
    [1, 9, 158],
    [3, "def property", e[13], 159,
     0, 172],
    [1, 9, 160],
    [3, "operator", "=", 161,
     0, 162],
    [1, 9, 163],
    [1, 9, 164],
    [1, 138, 162],
    [",", 165,
     0, 172],
    [1, 9, 166],
    [3, "def property", e[13], 167,
     0, 168],
    [1, 9, 169],
    [1, 9, 164],
    [3, "operator", "=", 170,
     0, 168],
    [1, 9, 171],
    [1, 138, 168],
    [1, 9, 173],
    ["}", -1],
    ["(", 175],
    [1, 9, 176],
    [1, 138, 177,
     0, 177],
    [1, 9, 178],
    [")", -1],
    [1, 9, 180],
    [3, "keyword", e[23], 181,
     0, -1],
    [1, 9, 182],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 184],
    [1, 9, 185],
    [1, 277, 186,
     0, 191],
    [1, 9, 187],
    [";", 188,
     0, 191],
    [1, 9, 189],
    [1, 277, 190,
     0, 190],
    [1, 9, 187],
    [1, 9, 192],
    ["}", -1],
    ["(", 194],
    [1, 9, 195],
    [1, 288, 196,
     ")", -1],
    [1, 9, 195],
    [2, 289, -1, {"name":"ArgList"},
     "[", 198,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 202,
     3, "operator", e[25], 204,
     "?", 206],
    [1, 9, 199],
    [1, 138, 200],
    [1, 9, 201],
    ["]", -1],
    [1, 9, 203],
    [2, 299, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 205],
    [1, 138, -1,
     0, -1],
    [1, 9, 207],
    [1, 138, 208],
    [1, 9, 209],
    [":", 210],
    [1, 9, 211],
    [1, 138, -1],
    [0, 213,
     "(", 220],
    ["*", 214,
     3, "def", e[13], 215],
    [1, 9, 213],
    [1, 9, 216],
    ["[", 217,
     0, -1],
    [1, 9, 218],
    ["]", 219],
    [1, 9, 216],
    [1, 9, 221],
    [1, 212, 222],
    [1, 9, 223],
    [")", -1],
    ["(", 225],
    [1, 9, 226],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 300, 228, {"name":"ParamList"}],
    [1, 9, 229],
    [";", -1,
     2, 110, -1, {"name":"Block"}],
    [3, "tag", /^\@f[\$\[\]]/, 239,
     3, "tag", /^\@param(?:\[(?:in|out|in\,out)\])?(?![a-zA-Z0-9¡-￿_])/, 231,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 232,
     3, "tag", e[29], 239,
     "{", 233],
    [e[27], 231,
     3, "def", e[28], 239,
     "<", 234,
     0, 239],
    [e[27], 232,
     3, "type", e[28], 239,
     0, 239],
    [3, "tag", e[29], 235],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 236],
    [/^[\t ]*/, 237],
    [">", 239],
    [1, 305, 238],
    ["}", 239],
    [e[30], 240,
     0, -1],
    [0, 239,
     0, 239],
    [/^(?![a-zA-Z¡-￿_0-9])/, 242],
    [1, 9, 243],
    [1, 245, 244,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 243],
    ["[", 246,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 247],
    [1, 138, 248,
     0, 248],
    [1, 9, 249],
    ["]", -1],
    ["(", 251],
    [1, 9, 252],
    [1, 138, 253,
     0, 253],
    [1, 9, 254],
    [")", -1],
    ["{", 256],
    [1, 9, 257],
    [1, 138, 258,
     0, 263],
    [1, 9, 259],
    [",", 260,
     0, 263],
    [1, 9, 261],
    [1, 138, 262,
     0, 262],
    [1, 9, 259],
    [1, 9, 264],
    ["}", -1],
    [3, "keyword", e[15], 266,
     3, "keyword", e[16], 266,
     3, "keyword", e[9], 267,
     0, 267],
    [1, 9, 265],
    [1, 9, 268],
    [3, "keyword", e[14], 269,
     0, 270,
     3, "type", e[13], 271],
    [1, 9, 272],
    [3, "type", e[17], 273],
    [1, 9, 274],
    [/^\&?/, -1],
    [0, 270,
     1, 9, 275,
     0, 271],
    [1, 245, 276,
     0, -1],
    [3, "type", e[18], 271],
    [1, 9, 274],
    [1, 265, 278],
    [1, 9, 279],
    [2, 299, 280, {"name":"fieldName","token":"property"},
     0, 280],
    [1, 9, 281],
    [":", 282,
     "[", 283,
     0, -1],
    [1, 9, 284],
    [1, 9, 285],
    [3, "number", e[21], -1],
    [1, 138, 286,
     0, 286],
    [1, 9, 287],
    ["]", -1],
    [2, 193, -1, {"name":"ParenTokens"},
     2, 309, -1, {"name":"BracketTokens"},
     2, 313, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[20], -1,
     3, "number", e[21], -1,
     2, 101, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[19], -1,
     2, 100, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 290],
    [1, 9, 291],
    [1, 138, 292,
     0, 297],
    [1, 9, 293],
    [",", 294,
     0, 297],
    [1, 9, 295],
    [1, 138, 296],
    [1, 9, 293],
    [1, 9, 298],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 301],
    [1, 9, 302],
    [1, 317, 303],
    [1, 9, 304],
    [")", -1],
    [3, "attribute", "{", 306,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 305,
     "\n", 307,
     0, -1],
    [1, 305, 308],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 305],
    [/^(?=\*\/)/, 305,
     3, "attribute", "}", 305],
    ["[", 310],
    [1, 9, 311],
    [1, 288, 312,
     "]", -1],
    [1, 9, 311],
    ["{", 314],
    [1, 9, 315],
    [1, 288, 316,
     "}", -1],
    [1, 9, 315],
    [1, 265, 318,
     0, -1],
    [1, 9, 319],
    [1, 212, 320,
     0, 321],
    [1, 9, 322],
    [1, 9, 323],
    [2, 300, 324, {"name":"ParamList"},
     0, 324],
    [",", 325,
     0, -1],
    [1, 9, 326],
    [1, 9, 327],
    [3, "operator", "=", 328,
     0, 321],
    [1, 265, 329],
    [1, 9, 330],
    [1, 9, 331],
    [1, 138, 321],
    [1, 212, 332,
     0, 333],
    [1, 9, 334],
    [1, 9, 323],
    [2, 300, 335, {"name":"ParamList"},
     0, 335],
    [1, 9, 336],
    [3, "operator", "=", 337,
     0, 333],
    [1, 9, 338],
    [1, 138, 333]
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
