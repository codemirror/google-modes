(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+|[A-Z]+_[A-Z_]*)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^else(?![a-zA-Z¡-￿_0-9])/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 242]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   2, 98, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[21], -1,
   2, 99, -1, {"name":"string","token":"string"},
   3, "operator", e[19], -1,
   3, "operator", e[23], -1,
   3, "operator", e[24], -1,
   2, 103, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 103, 9, {"name":"comment","token":"comment"},
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
   2, 109, -1, {"name":"Block"},
   3, "keyword", e[6], 52,
   3, "keyword", e[7], 54,
   3, "keyword", e[8], 58,
   3, "keyword", e[9], 62,
   3, "keyword", e[10], 68,
   3, "keyword", e[11], 69,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 113]], 68,
   3, "meta", e[12], 72,
   2, 114, 76, {"name":"DeclType"},
   ";", -1,
   1, 130, 96],
  [1, 9, 14],
  [3, "type def", e[13], 15,
   0, 15],
  [1, 9, 16],
  [2, 161, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 20],
  [1, 9, 21],
  [1, 9, 22],
  ["(", 23],
  [2, 179, 24, {"name":"CondExpr"}],
  [2, 12, 25, {"name":"Statement"}],
  [1, 9, 26],
  [1, 9, 27],
  [1, 9, 28],
  [2, 12, 29, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 30],
  [1, 9, 31],
  [1, 9, 32],
  [1, 130, 33,
   0, 33],
  [2, 179, 34, {"name":"CondExpr"}],
  [1, 9, 35],
  [1, 9, 36],
  [";", 37],
  [";", -1],
  [1, 9, 38],
  [1, 130, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 44],
  [2, 179, 45, {"name":"CondExpr"}],
  [1, 9, 46],
  [2, 12, 47, {"name":"Statement"}],
  [2, 184, -1, {"name":"Alternative"}],
  [1, 9, 49],
  [2, 179, 50, {"name":"CondExpr"}],
  [1, 9, 51],
  [2, 109, -1, {"name":"Block"}],
  [1, 9, 53],
  [";", -1],
  [1, 9, 55],
  [e[13], 56],
  [1, 9, 57],
  [";", -1],
  [1, 9, 59],
  [1, 130, 60,
   0, 60],
  [1, 9, 61],
  [";", -1],
  [1, 9, 63],
  [3, "def", e[13], 64,
   0, 64],
  [1, 9, 65],
  [2, 188, 66, {"name":"BlockOf"},
   0, 66],
  [1, 9, 67],
  [";", -1],
  [1, 9, 70],
  [1, 9, 71],
  [":", -1],
  [1, 130, 68],
  [1, 9, 73],
  [2, 198, 74, {"name":"ArgList"},
   0, 74],
  [1, 9, 75],
  [/^\;?/, -1],
  [1, 9, 77],
  [1, 208, 78],
  [1, 9, 79],
  [3, "meta", e[12], 80,
   [5, 220], 81,
   3, "operator", "=", 82,
   0, 83],
  [1, 9, 84],
  [2, 223, -1, {"name":"FunctionDef"}],
  [1, 9, 85],
  [1, 9, 86],
  [2, 198, 87, {"name":"ArgList"},
   0, 87],
  [1, 130, 83],
  [",", 88,
   ";", -1],
  [1, 9, 89],
  [1, 9, 90],
  [/^\;?/, -1],
  [3, "def", e[13], 91],
  [1, 9, 92],
  [3, "operator", "=", 93,
   0, 94],
  [1, 9, 95],
  [1, 9, 86],
  [1, 130, 94],
  [1, 9, 97],
  [";", -1],
  [3, "callee", e[32], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 100],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 101],
  ["\\", 102,
   [0, /^(?!\")/, /^[^]/], 101,
   "\"", -1],
  [/^[^]/, 101],
  [/^\/\*\*(?!\/)/, 104,
   "/*", 108,
   /^\/\/.*/, -1],
  [0, 105,
   2, 226, 104, {"name":"doccomment.braced"},
   0, 106],
  [e[31], 107],
  [2, 234, 106, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 105,
   0, 104],
  [[0, /^(?!\*\/)/, /^[^]/], 108,
   "*/", -1],
  ["{", 110],
  [1, 9, 111],
  [2, 12, 112, {"name":"Statement"},
   "}", -1],
  [1, 9, 111],
  [e[27], 113,
   /^\:(?!\:)/, -1],
  [0, 115,
   0, 116,
   3, "keyword", e[14], 127,
   3, "type", e[26], 127],
  [3, "keyword", e[15], 117,
   3, "keyword", e[16], 117],
  [3, "type", e[17], 118],
  [1, 9, 119],
  [1, 9, 120],
  [0, 115,
   3, "keyword", e[14], 121,
   0, 122,
   3, "type", e[13], 121],
  [0, 116,
   3, "type", e[18], 121,
   0, 121],
  [1, 9, 123],
  [3, "type", e[17], 124],
  [1, 246, 125,
   0, -1],
  [0, 122,
   1, 9, 126,
   0, 121],
  [1, 9, 123],
  [3, "type", e[18], 121],
  [1, 9, 128],
  [1, 246, 129,
   0, -1],
  [1, 9, 128],
  [3, "operator", e[19], 131,
   2, 251, 132, {"name":"ParenExpr"},
   3, "atom", e[20], 144,
   3, "number", e[21], 144,
   2, 99, 144, {"name":"string","token":"string"},
   2, 256, 144, {"name":"BlockOf"},
   3, "keyword", e[22], 133,
   2, 98, 144, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 130],
  [1, 9, 134],
  [1, 9, 135],
  [1, 130, 144,
   0, 144],
  ["(", 136,
   /^(?:\.\.\.)?/, 137],
  [1, 9, 138],
  [1, 9, 139],
  [1, 266, 140],
  [1, 130, 141],
  [1, 9, 142],
  [1, 9, 143],
  [")", 141],
  [3, "meta", e[12], 144],
  [1, 9, 145],
  [2, 198, 146, {"name":"ArgList"},
   "[", 147,
   3, "operator", e[23], 146,
   /^(?:\-\>|\.)/, 148,
   3, "operator", e[24], 149,
   "?", 150,
   0, -1],
  [1, 9, 145],
  [1, 9, 151],
  [1, 9, 152],
  [1, 9, 153],
  [1, 9, 154],
  [1, 130, 155],
  [2, 276, 146, {"name":"fieldName","token":"property"}],
  [1, 130, 146],
  [1, 130, 156],
  [1, 9, 157],
  [1, 9, 158],
  ["]", 146],
  [":", 159],
  [1, 9, 160],
  [1, 130, 146],
  ["{", 162],
  [1, 9, 163],
  [3, "def property", e[13], 164,
   0, 177],
  [1, 9, 165],
  [3, "operator", "=", 166,
   0, 167],
  [1, 9, 168],
  [1, 9, 169],
  [1, 130, 167],
  [",", 170,
   0, 177],
  [1, 9, 171],
  [3, "def property", e[13], 172,
   0, 173],
  [1, 9, 174],
  [1, 9, 169],
  [3, "operator", "=", 175,
   0, 173],
  [1, 9, 176],
  [1, 130, 173],
  [1, 9, 178],
  ["}", -1],
  ["(", 180],
  [1, 9, 181],
  [1, 130, 182,
   0, 182],
  [1, 9, 183],
  [")", -1],
  [1, 9, 185],
  [3, "keyword", e[25], 186,
   0, -1],
  [1, 9, 187],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 189],
  [1, 9, 190],
  [1, 277, 191,
   0, 196],
  [1, 9, 192],
  [";", 193,
   0, 196],
  [1, 9, 194],
  [1, 277, 195,
   0, 195],
  [1, 9, 192],
  [1, 9, 197],
  ["}", -1],
  ["(", 199],
  [1, 9, 200],
  [1, 130, 201,
   0, 206],
  [1, 9, 202],
  [",", 203,
   0, 206],
  [1, 9, 204],
  [1, 130, 205],
  [1, 9, 202],
  [1, 9, 207],
  [")", -1],
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
  [2, 288, 224, {"name":"ParamList"}],
  [1, 9, 225],
  [";", -1,
   2, 109, -1, {"name":"Block"}],
  ["{", 227],
  [3, "tag", e[28], 228,
   3, "tag", e[29], 229,
   2, 293, 233, {"name":"doccomment.type","token":"type"}],
  [e[27], 228,
   "{", 230,
   0, 229],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 229,
   0, 233],
  [2, 293, 231, {"name":"doccomment.type","token":"type"}],
  ["}", 232],
  [e[27], 232,
   3, "def", e[30], 229,
   0, 229],
  ["}", -1],
  [3, "tag", e[28], 235,
   3, "tag", e[29], 239],
  [e[27], 235,
   "{", 236,
   0, 239],
  [2, 293, 237, {"name":"doccomment.type","token":"type"}],
  ["}", 238],
  [e[27], 238,
   3, "def", e[30], 239,
   0, 239],
  [0, 240,
   2, 226, 239, {"name":"doccomment.braced"},
   0, -1],
  [e[31], 241],
  [0, 240,
   0, 239],
  [/^(?![a-zA-Z¡-￿_0-9])/, 243],
  [1, 9, 244],
  [1, 246, 245,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 244],
  ["[", 247,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 248],
  [3, "number", e[21], 249,
   0, 249],
  [1, 9, 250],
  ["]", -1],
  ["(", 252],
  [1, 9, 253],
  [1, 130, 254,
   0, 254],
  [1, 9, 255],
  [")", -1],
  ["{", 257],
  [1, 9, 258],
  [1, 130, 259,
   0, 264],
  [1, 9, 260],
  [",", 261,
   0, 264],
  [1, 9, 262],
  [1, 130, 263,
   0, 263],
  [1, 9, 260],
  [1, 9, 265],
  ["}", -1],
  [3, "keyword", e[15], 267,
   3, "keyword", e[16], 267,
   3, "keyword", e[9], 268,
   0, 268],
  [1, 9, 266],
  [1, 9, 269],
  [3, "keyword", e[14], 273,
   0, 270,
   3, "type", e[13], 273],
  [3, "type", e[17], 271],
  [0, 270,
   1, 9, 272,
   0, 273],
  [3, "type", e[18], 273],
  [1, 9, 274],
  [1, 246, 275,
   0, -1],
  [1, 9, 274],
  [3, "callee", e[32], -1,
   e[13], -1],
  [1, 266, 278],
  [1, 9, 279],
  [2, 276, 280, {"name":"fieldName","token":"property"},
   0, 280],
  [1, 9, 281],
  [":", 282,
   "[", 283,
   0, -1],
  [1, 9, 284],
  [1, 9, 285],
  [3, "number", e[21], -1],
  [3, "number", e[21], 286,
   0, 286],
  [1, 9, 287],
  ["]", -1],
  ["(", 289],
  [1, 9, 290],
  [1, 294, 291],
  [1, 9, 292],
  [")", -1],
  [1, 308, -1],
  [1, 266, 295,
   0, -1],
  [1, 9, 296],
  [1, 208, 297,
   0, 298],
  [1, 9, 299],
  [1, 9, 300],
  [2, 288, 298, {"name":"ParamList"},
   0, 298],
  [",", 301,
   0, -1],
  [1, 9, 302],
  [1, 266, 303],
  [1, 9, 304],
  [1, 208, 305,
   0, 306],
  [1, 9, 307],
  [1, 9, 300],
  [2, 288, 306, {"name":"ParamList"},
   0, 306],
  [/^(?!\}|\*\/)/, 309,
   0, -1],
  ["{", 310,
   /^[^]/, 308],
  [1, 308, 311],
  [/^\}?/, 308]
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
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
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
