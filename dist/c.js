(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 236]], [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
    [2, 151, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 20],
    [1, 9, 21],
    [1, 9, 22],
    ["(", 23],
    [2, 169, 24, {"name":"CondExpr"}],
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
    [2, 169, 34, {"name":"CondExpr"}],
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
    [2, 169, 45, {"name":"CondExpr"}],
    [1, 9, 46],
    [2, 12, 47, {"name":"Statement"}],
    [2, 174, -1, {"name":"Alternative"}],
    [1, 9, 49],
    [2, 169, 50, {"name":"CondExpr"}],
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
    [2, 178, 66, {"name":"BlockOf"},
     0, 66],
    [1, 9, 67],
    [";", -1],
    [1, 9, 70],
    [1, 9, 71],
    [":", -1],
    [1, 131, 68],
    [1, 9, 73],
    [2, 188, 74, {"name":"ParenTokens"},
     0, 74],
    [1, 9, 75],
    [2, 110, -1, {"name":"Block"},
     0, 76],
    [1, 192, 77,
     0, -1],
    [1, 9, 76],
    [1, 9, 79],
    [1, 207, 80],
    [1, 9, 81],
    [3, "meta", e[12], 82,
     [5, 219], 83,
     3, "operator", "=", 84,
     0, 85],
    [1, 9, 86],
    [2, 222, -1, {"name":"FunctionDef"}],
    [1, 9, 87],
    [1, 9, 88],
    [2, 188, 89, {"name":"ParenTokens"},
     0, 89],
    [1, 131, 85],
    [",", 90,
     ";", -1],
    [1, 9, 91],
    [1, 9, 92],
    [/^\;?/, -1],
    [3, "def", e[13], 93],
    [1, 9, 94],
    [3, "operator", "=", 95,
     0, 96],
    [1, 9, 97],
    [1, 9, 88],
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
    [2, 225, 108, {"name":"doccomment.tagGroup"},
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
    [1, 240, 126,
     0, -1],
    [0, 123,
     1, 9, 127,
     0, 122],
    [1, 9, 124],
    [3, "type", e[18], 122],
    [1, 9, 129],
    [1, 240, 130,
     0, -1],
    [1, 9, 129],
    [3, "operator", e[19], 132,
     2, 245, 133, {"name":"ParenExpr"},
     3, "atom", e[20], 148,
     3, "number", e[21], 148,
     2, 101, 148, {"name":"string","token":"string"},
     2, 250, 148, {"name":"BlockOf"},
     3, "keyword", e[22], 134,
     2, 100, 148, {"name":"plainVariableName","token":"variable"}],
    [1, 9, 131],
    [1, 9, 135],
    [1, 9, 136],
    [/^(?![\[\(\-\+])/, 137,
     0, 148],
    ["(", 138,
     /^(?:\.\.\.)?/, 139],
    [1, 131, 148],
    [1, 9, 140],
    [1, 9, 141],
    [1, 260, 142],
    [1, 131, 143],
    [1, 9, 144],
    [1, 9, 145],
    [")", 143],
    [3, "meta", e[12], 146],
    [1, 9, 147],
    [2, 188, 148, {"name":"ParenTokens"},
     0, 148],
    [1, 9, 149],
    [1, 192, 150,
     0, -1],
    [1, 9, 149],
    ["{", 152],
    [1, 9, 153],
    [3, "def property", e[13], 154,
     0, 167],
    [1, 9, 155],
    [3, "operator", "=", 156,
     0, 157],
    [1, 9, 158],
    [1, 9, 159],
    [1, 131, 157],
    [",", 160,
     0, 167],
    [1, 9, 161],
    [3, "def property", e[13], 162,
     0, 163],
    [1, 9, 164],
    [1, 9, 159],
    [3, "operator", "=", 165,
     0, 163],
    [1, 9, 166],
    [1, 131, 163],
    [1, 9, 168],
    ["}", -1],
    ["(", 170],
    [1, 9, 171],
    [1, 131, 172,
     0, 172],
    [1, 9, 173],
    [")", -1],
    [1, 9, 175],
    [3, "keyword", e[23], 176,
     0, -1],
    [1, 9, 177],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 179],
    [1, 9, 180],
    [1, 270, 181,
     0, 186],
    [1, 9, 182],
    [";", 183,
     0, 186],
    [1, 9, 184],
    [1, 270, 185,
     0, 185],
    [1, 9, 182],
    [1, 9, 187],
    ["}", -1],
    ["(", 189],
    [1, 9, 190],
    [1, 281, 191,
     ")", -1],
    [1, 9, 190],
    [2, 282, -1, {"name":"ArgList"},
     "[", 193,
     3, "operator", e[24], -1,
     /^(?:\-\>|(?!\.\.)\.)/, 197,
     3, "operator", e[25], 199,
     "?", 201],
    [1, 9, 194],
    [1, 131, 195],
    [1, 9, 196],
    ["]", -1],
    [1, 9, 198],
    [2, 292, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 200],
    [1, 131, -1,
     0, -1],
    [1, 9, 202],
    [1, 131, 203],
    [1, 9, 204],
    [":", 205],
    [1, 9, 206],
    [1, 131, -1],
    [0, 208,
     "(", 215],
    ["*", 209,
     3, "def", e[13], 210],
    [1, 9, 208],
    [1, 9, 211],
    ["[", 212,
     0, -1],
    [1, 9, 213],
    ["]", 214],
    [1, 9, 211],
    [1, 9, 216],
    [1, 207, 217],
    [1, 9, 218],
    [")", -1],
    ["(", 220],
    [1, 9, 221],
    [")", -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "type", e[17], -1,
     3, "keyword", e[14], -1,
     3, "type", e[26], -1],
    [2, 293, 223, {"name":"ParamList"}],
    [1, 9, 224],
    [";", -1,
     2, 110, -1, {"name":"Block"}],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 226,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 227,
     3, "tag", e[29], 234,
     "{", 228],
    [e[27], 226,
     3, "def", e[28], 234,
     "<", 229,
     0, 234],
    [e[27], 227,
     3, "type", e[28], 234,
     0, 234],
    [3, "tag", e[29], 230],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 231],
    [/^[\t ]*/, 232],
    [">", 234],
    [1, 298, 233],
    ["}", 234],
    [e[30], 235,
     0, -1],
    [0, 234,
     0, 234],
    [/^(?![a-zA-Z¡-￿_0-9])/, 237],
    [1, 9, 238],
    [1, 240, 239,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 238],
    ["[", 241,
     /^[\*\&]/, -1,
     3, "keyword", e[16], -1],
    [1, 9, 242],
    [1, 131, 243,
     0, 243],
    [1, 9, 244],
    ["]", -1],
    ["(", 246],
    [1, 9, 247],
    [1, 131, 248,
     0, 248],
    [1, 9, 249],
    [")", -1],
    ["{", 251],
    [1, 9, 252],
    [1, 131, 253,
     0, 258],
    [1, 9, 254],
    [",", 255,
     0, 258],
    [1, 9, 256],
    [1, 131, 257,
     0, 257],
    [1, 9, 254],
    [1, 9, 259],
    ["}", -1],
    [3, "keyword", e[15], 261,
     3, "keyword", e[16], 261,
     3, "keyword", e[9], 262,
     0, 262],
    [1, 9, 260],
    [1, 9, 263],
    [3, "keyword", e[14], 267,
     0, 264,
     3, "type", e[13], 267],
    [3, "type", e[17], 265],
    [0, 264,
     1, 9, 266,
     0, 267],
    [3, "type", e[18], 267],
    [1, 9, 268],
    [1, 240, 269,
     0, -1],
    [1, 9, 268],
    [1, 260, 271],
    [1, 9, 272],
    [2, 292, 273, {"name":"fieldName","token":"property"},
     0, 273],
    [1, 9, 274],
    [":", 275,
     "[", 276,
     0, -1],
    [1, 9, 277],
    [1, 9, 278],
    [3, "number", e[21], -1],
    [1, 131, 279,
     0, 279],
    [1, 9, 280],
    ["]", -1],
    [2, 188, -1, {"name":"ParenTokens"},
     2, 302, -1, {"name":"BracketTokens"},
     2, 306, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[20], -1,
     3, "number", e[21], -1,
     2, 101, -1, {"name":"string","token":"string"},
     3, "operator", e[25], -1,
     3, "operator", e[19], -1,
     2, 100, -1, {"name":"plainVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["(", 283],
    [1, 9, 284],
    [1, 131, 285,
     0, 290],
    [1, 9, 286],
    [",", 287,
     0, 290],
    [1, 9, 288],
    [1, 131, 289],
    [1, 9, 286],
    [1, 9, 291],
    [")", -1],
    [3, "callee", e[31], -1,
     e[13], -1],
    ["(", 294],
    [1, 9, 295],
    [1, 310, 296],
    [1, 9, 297],
    [")", -1],
    [3, "attribute", "{", 299,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 298,
     "\n", 300,
     0, -1],
    [1, 298, 301],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 298],
    [/^(?=\*\/)/, 298,
     3, "attribute", "}", 298],
    ["[", 303],
    [1, 9, 304],
    [1, 281, 305,
     "]", -1],
    [1, 9, 304],
    ["{", 307],
    [1, 9, 308],
    [1, 281, 309,
     "}", -1],
    [1, 9, 308],
    [1, 260, 311,
     0, -1],
    [1, 9, 312],
    [1, 207, 313,
     0, 314],
    [1, 9, 315],
    [1, 9, 316],
    [2, 293, 317, {"name":"ParamList"},
     0, 317],
    [",", 318,
     0, -1],
    [1, 9, 319],
    [1, 9, 320],
    [3, "operator", "=", 321,
     0, 314],
    [1, 260, 322],
    [1, 9, 323],
    [1, 9, 324],
    [1, 131, 314],
    [1, 207, 325,
     0, 326],
    [1, 9, 327],
    [1, 9, 316],
    [2, 293, 328, {"name":"ParamList"},
     0, 328],
    [1, 9, 329],
    [3, "operator", "=", 330,
     0, 326],
    [1, 9, 331],
    [1, 131, 326]
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
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
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^(else\b|\/[\/\*])/.test(textAfter)) { return base }
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
