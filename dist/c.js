(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+|[A-Z]+_[A-Z_]*)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^else(?![a-zA-Z¡-￿_0-9])/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 238]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   3, "keyword", e[25], -1,
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
   2, 94, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[21], -1,
   2, 95, -1, {"name":"string","token":"string"},
   3, "operator", e[19], -1,
   3, "operator", e[23], -1,
   3, "operator", e[24], -1,
   2, 99, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 99, 9, {"name":"comment","token":"comment"},
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
   2, 105, -1, {"name":"Block"},
   3, "keyword", e[6], 52,
   3, "keyword", e[7], 54,
   3, "keyword", e[8], 58,
   3, "keyword", e[9], 62,
   3, "keyword", e[10], 68,
   3, "keyword", e[11], 69,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 109]], 68,
   3, "meta", e[12], 72,
   2, 110, 76, {"name":"DeclType"},
   ";", -1,
   1, 126, 92],
  [1, 9, 14],
  [3, "type def", e[13], 15,
   0, 15],
  [1, 9, 16],
  [2, 157, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 20],
  [1, 9, 21],
  [1, 9, 22],
  ["(", 23],
  [2, 175, 24, {"name":"CondExpr"}],
  [2, 12, 25, {"name":"Statement"}],
  [1, 9, 26],
  [1, 9, 27],
  [1, 9, 28],
  [2, 12, 29, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 30],
  [1, 9, 31],
  [1, 9, 32],
  [1, 126, 33,
   0, 33],
  [2, 175, 34, {"name":"CondExpr"}],
  [1, 9, 35],
  [1, 9, 36],
  [";", 37],
  [";", -1],
  [1, 9, 38],
  [1, 126, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 44],
  [2, 175, 45, {"name":"CondExpr"}],
  [1, 9, 46],
  [2, 12, 47, {"name":"Statement"}],
  [2, 180, -1, {"name":"Alternative"}],
  [1, 9, 49],
  [2, 175, 50, {"name":"CondExpr"}],
  [1, 9, 51],
  [2, 105, -1, {"name":"Block"}],
  [1, 9, 53],
  [";", -1],
  [1, 9, 55],
  [e[13], 56],
  [1, 9, 57],
  [";", -1],
  [1, 9, 59],
  [1, 126, 60,
   0, 60],
  [1, 9, 61],
  [";", -1],
  [1, 9, 63],
  [3, "def", e[13], 64,
   0, 64],
  [1, 9, 65],
  [2, 184, 66, {"name":"BlockOf"},
   0, 66],
  [1, 9, 67],
  [";", -1],
  [1, 9, 70],
  [1, 9, 71],
  [":", -1],
  [1, 126, 68],
  [1, 9, 73],
  [2, 194, 74, {"name":"ArgList"},
   0, 74],
  [1, 9, 75],
  [/^\;?/, -1],
  [1, 9, 77],
  [1, 204, 78],
  [1, 9, 79],
  [[5, 216], 80,
   3, "operator", "=", 81,
   0, 82],
  [2, 219, -1, {"name":"FunctionDef"}],
  [1, 9, 83],
  [1, 9, 84],
  [1, 126, 82],
  [",", 85,
   ";", -1],
  [1, 9, 86],
  [3, "def", e[13], 87],
  [1, 9, 88],
  [3, "operator", "=", 89,
   0, 90],
  [1, 9, 91],
  [1, 9, 84],
  [1, 126, 90],
  [1, 9, 93],
  [";", -1],
  [3, "callee", e[32], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 96],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 97],
  ["\\", 98,
   [0, /^(?!\")/, /^[^]/], 97,
   "\"", -1],
  [/^[^]/, 97],
  [/^\/\*\*(?!\/)/, 100,
   "/*", 104,
   /^\/\/.*/, -1],
  [0, 101,
   2, 222, 100, {"name":"doccomment.braced"},
   0, 102],
  [e[31], 103],
  [2, 230, 102, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 101,
   0, 100],
  [[0, /^(?!\*\/)/, /^[^]/], 104,
   "*/", -1],
  ["{", 106],
  [1, 9, 107],
  [2, 12, 108, {"name":"Statement"},
   "}", -1],
  [1, 9, 107],
  [e[27], 109,
   /^\:(?!\:)/, -1],
  [0, 111,
   0, 112,
   3, "keyword", e[14], 123,
   3, "type", e[26], 123],
  [3, "keyword", e[15], 113,
   3, "keyword", e[16], 113],
  [3, "type", e[17], 114],
  [1, 9, 115],
  [1, 9, 116],
  [0, 111,
   3, "keyword", e[14], 117,
   0, 118,
   3, "type", e[13], 117],
  [0, 112,
   3, "type", e[18], 117,
   0, 117],
  [1, 9, 119],
  [3, "type", e[17], 120],
  [1, 242, 121,
   0, -1],
  [0, 118,
   1, 9, 122,
   0, 117],
  [1, 9, 119],
  [3, "type", e[18], 117],
  [1, 9, 124],
  [1, 242, 125,
   0, -1],
  [1, 9, 124],
  [3, "operator", e[19], 127,
   2, 247, 128, {"name":"ParenExpr"},
   3, "atom", e[20], 140,
   3, "number", e[21], 140,
   2, 95, 140, {"name":"string","token":"string"},
   2, 252, 140, {"name":"BlockOf"},
   3, "keyword", e[22], 129,
   2, 94, 140, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 126],
  [1, 9, 130],
  [1, 9, 131],
  [1, 126, 140,
   0, 140],
  ["(", 132,
   /^(?:\.\.\.)?/, 133],
  [1, 9, 134],
  [1, 9, 135],
  [1, 262, 136],
  [1, 126, 137],
  [1, 9, 138],
  [1, 9, 139],
  [")", 137],
  [3, "meta", e[12], 140],
  [1, 9, 141],
  [2, 194, 142, {"name":"ArgList"},
   "[", 143,
   3, "operator", e[23], 142,
   /^(?:\-\>|\.)/, 144,
   3, "operator", e[24], 145,
   "?", 146,
   0, -1],
  [1, 9, 141],
  [1, 9, 147],
  [1, 9, 148],
  [1, 9, 149],
  [1, 9, 150],
  [1, 126, 151],
  [2, 272, 142, {"name":"fieldName","token":"property"}],
  [1, 126, 142],
  [1, 126, 152],
  [1, 9, 153],
  [1, 9, 154],
  ["]", 142],
  [":", 155],
  [1, 9, 156],
  [1, 126, 142],
  ["{", 158],
  [1, 9, 159],
  [3, "def property", e[13], 160,
   0, 173],
  [1, 9, 161],
  [3, "operator", "=", 162,
   0, 163],
  [1, 9, 164],
  [1, 9, 165],
  [1, 126, 163],
  [",", 166,
   0, 173],
  [1, 9, 167],
  [3, "def property", e[13], 168,
   0, 169],
  [1, 9, 170],
  [1, 9, 165],
  [3, "operator", "=", 171,
   0, 169],
  [1, 9, 172],
  [1, 126, 169],
  [1, 9, 174],
  ["}", -1],
  ["(", 176],
  [1, 9, 177],
  [1, 126, 178,
   0, 178],
  [1, 9, 179],
  [")", -1],
  [1, 9, 181],
  [3, "keyword", e[25], 182,
   0, -1],
  [1, 9, 183],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 185],
  [1, 9, 186],
  [1, 273, 187,
   0, 192],
  [1, 9, 188],
  [";", 189,
   0, 192],
  [1, 9, 190],
  [1, 273, 191,
   0, 191],
  [1, 9, 188],
  [1, 9, 193],
  ["}", -1],
  ["(", 195],
  [1, 9, 196],
  [1, 126, 197,
   0, 202],
  [1, 9, 198],
  [",", 199,
   0, 202],
  [1, 9, 200],
  [1, 126, 201],
  [1, 9, 198],
  [1, 9, 203],
  [")", -1],
  [0, 205,
   "(", 212],
  ["*", 206,
   3, "def", e[13], 207],
  [1, 9, 205],
  [1, 9, 208],
  ["[", 209,
   0, -1],
  [1, 9, 210],
  ["]", 211],
  [1, 9, 208],
  [1, 9, 213],
  [1, 204, 214],
  [1, 9, 215],
  [")", -1],
  ["(", 217],
  [1, 9, 218],
  [")", -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[14], -1,
   3, "type", e[26], -1],
  [2, 284, 220, {"name":"ParamList"}],
  [1, 9, 221],
  [";", -1,
   2, 105, -1, {"name":"Block"}],
  ["{", 223],
  [3, "tag", e[28], 224,
   3, "tag", e[29], 225,
   2, 289, 229, {"name":"doccomment.type","token":"type"}],
  [e[27], 224,
   "{", 226,
   0, 225],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 225,
   0, 229],
  [2, 289, 227, {"name":"doccomment.type","token":"type"}],
  ["}", 228],
  [e[27], 228,
   3, "def", e[30], 225,
   0, 225],
  ["}", -1],
  [3, "tag", e[28], 231,
   3, "tag", e[29], 235],
  [e[27], 231,
   "{", 232,
   0, 235],
  [2, 289, 233, {"name":"doccomment.type","token":"type"}],
  ["}", 234],
  [e[27], 234,
   3, "def", e[30], 235,
   0, 235],
  [0, 236,
   2, 222, 235, {"name":"doccomment.braced"},
   0, -1],
  [e[31], 237],
  [0, 236,
   0, 235],
  [/^(?![a-zA-Z¡-￿_0-9])/, 239],
  [1, 9, 240],
  [1, 242, 241,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 240],
  ["[", 243,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 244],
  [3, "number", e[21], 245,
   0, 245],
  [1, 9, 246],
  ["]", -1],
  ["(", 248],
  [1, 9, 249],
  [1, 126, 250,
   0, 250],
  [1, 9, 251],
  [")", -1],
  ["{", 253],
  [1, 9, 254],
  [1, 126, 255,
   0, 260],
  [1, 9, 256],
  [",", 257,
   0, 260],
  [1, 9, 258],
  [1, 126, 259,
   0, 259],
  [1, 9, 256],
  [1, 9, 261],
  ["}", -1],
  [3, "keyword", e[15], 263,
   3, "keyword", e[16], 263,
   3, "keyword", e[9], 264,
   0, 264],
  [1, 9, 262],
  [1, 9, 265],
  [3, "keyword", e[14], 269,
   0, 266,
   3, "type", e[13], 269],
  [3, "type", e[17], 267],
  [0, 266,
   1, 9, 268,
   0, 269],
  [3, "type", e[18], 269],
  [1, 9, 270],
  [1, 242, 271,
   0, -1],
  [1, 9, 270],
  [3, "callee", e[32], -1,
   e[13], -1],
  [1, 262, 274],
  [1, 9, 275],
  [2, 272, 276, {"name":"fieldName","token":"property"},
   0, 276],
  [1, 9, 277],
  [":", 278,
   "[", 279,
   0, -1],
  [1, 9, 280],
  [1, 9, 281],
  [3, "number", e[21], -1],
  [3, "number", e[21], 282,
   0, 282],
  [1, 9, 283],
  ["]", -1],
  ["(", 285],
  [1, 9, 286],
  [1, 290, 287],
  [1, 9, 288],
  [")", -1],
  [1, 304, -1],
  [1, 262, 291,
   0, -1],
  [1, 9, 292],
  [1, 204, 293,
   0, 294],
  [1, 9, 295],
  [1, 9, 296],
  [2, 284, 294, {"name":"ParamList"},
   0, 294],
  [",", 297,
   0, -1],
  [1, 9, 298],
  [1, 262, 299],
  [1, 9, 300],
  [1, 204, 301,
   0, 302],
  [1, 9, 303],
  [1, 9, 296],
  [2, 284, 302, {"name":"ParamList"},
   0, 302],
  [/^(?!\}|\*\/)/, 305,
   0, -1],
  ["{", 306,
   /^[^]/, 304],
  [1, 304, 307],
  [/^\}?/, 304]
];
var start = 0;
var token = 5;


var grammar = Object.freeze({
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

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
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
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function baseIndent(cx, config) {
  for (var startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
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

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
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
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
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
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
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
