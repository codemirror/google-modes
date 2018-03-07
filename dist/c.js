(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 247]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   2, 113, -1, {"name":"Block"},
   3, "keyword", e[6], 52,
   3, "keyword", e[7], 54,
   3, "keyword", e[8], 58,
   3, "keyword", e[9], 62,
   3, "keyword", e[10], 68,
   3, "keyword", e[11], 69,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 117]], 68,
   3, "meta", e[12], 72,
   2, 118, 80, {"name":"DeclType"},
   ";", -1,
   1, 134, 100],
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
  [1, 134, 33,
   0, 33],
  [2, 169, 34, {"name":"CondExpr"}],
  [1, 9, 35],
  [1, 9, 36],
  [";", 37],
  [";", -1],
  [1, 9, 38],
  [1, 134, 39,
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
  [2, 113, -1, {"name":"Block"}],
  [1, 9, 53],
  [";", -1],
  [1, 9, 55],
  [e[13], 56],
  [1, 9, 57],
  [";", -1],
  [1, 9, 59],
  [1, 134, 60,
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
  [1, 134, 68],
  [1, 9, 73],
  [2, 188, 74, {"name":"ArgList"},
   0, 74],
  [1, 9, 75],
  [2, 113, 76, {"name":"Block"},
   0, 77,
   0, 76],
  [1, 9, 78],
  [1, 198, 79,
   0, 76],
  [/^\;?/, -1],
  [1, 9, 77],
  [1, 9, 81],
  [1, 213, 82],
  [1, 9, 83],
  [3, "meta", e[12], 84,
   [5, 225], 85,
   3, "operator", "=", 86,
   0, 87],
  [1, 9, 88],
  [2, 228, -1, {"name":"FunctionDef"}],
  [1, 9, 89],
  [1, 9, 90],
  [2, 188, 91, {"name":"ArgList"},
   0, 91],
  [1, 134, 87],
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
  [1, 134, 98],
  [1, 9, 101],
  [";", -1],
  [3, "callee", e[32], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 104],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 105],
  ["\\", 106,
   [0, /^(?!\")/, /^[^]/], 105,
   "\"", -1],
  [/^[^]/, 105],
  [/^\/\*\*(?!\/)/, 108,
   "/*", 112,
   /^\/\/.*/, -1],
  [0, 109,
   2, 231, 108, {"name":"doccomment.braced"},
   0, 110],
  [e[31], 111],
  [2, 239, 110, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 109,
   0, 108],
  [[0, /^(?!\*\/)/, /^[^]/], 112,
   "*/", -1],
  ["{", 114],
  [1, 9, 115],
  [2, 12, 116, {"name":"Statement"},
   "}", -1],
  [1, 9, 115],
  [e[27], 117,
   /^\:(?!\:)/, -1],
  [0, 119,
   0, 120,
   3, "keyword", e[14], 131,
   3, "type", e[26], 131],
  [3, "keyword", e[15], 121,
   3, "keyword", e[16], 121],
  [3, "type", e[17], 122],
  [1, 9, 123],
  [1, 9, 124],
  [0, 119,
   3, "keyword", e[14], 125,
   0, 126,
   3, "type", e[13], 125],
  [0, 120,
   3, "type", e[18], 125,
   0, 125],
  [1, 9, 127],
  [3, "type", e[17], 128],
  [1, 251, 129,
   0, -1],
  [0, 126,
   1, 9, 130,
   0, 125],
  [1, 9, 127],
  [3, "type", e[18], 125],
  [1, 9, 132],
  [1, 251, 133,
   0, -1],
  [1, 9, 132],
  [3, "operator", e[19], 135,
   2, 256, 136, {"name":"ParenExpr"},
   3, "atom", e[20], 148,
   3, "number", e[21], 148,
   2, 103, 148, {"name":"string","token":"string"},
   2, 261, 148, {"name":"BlockOf"},
   3, "keyword", e[22], 137,
   2, 102, 148, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 134],
  [1, 9, 138],
  [1, 9, 139],
  [1, 134, 148,
   0, 148],
  ["(", 140,
   /^(?:\.\.\.)?/, 141],
  [1, 9, 142],
  [1, 9, 143],
  [1, 271, 144],
  [1, 134, 145],
  [1, 9, 146],
  [1, 9, 147],
  [")", 145],
  [3, "meta", e[12], 148],
  [1, 9, 149],
  [1, 198, 150,
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
  [1, 134, 157],
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
  [1, 134, 163],
  [1, 9, 168],
  ["}", -1],
  ["(", 170],
  [1, 9, 171],
  [1, 134, 172,
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
  [1, 281, 181,
   0, 186],
  [1, 9, 182],
  [";", 183,
   0, 186],
  [1, 9, 184],
  [1, 281, 185,
   0, 185],
  [1, 9, 182],
  [1, 9, 187],
  ["}", -1],
  ["(", 189],
  [1, 9, 190],
  [1, 134, 191,
   0, 196],
  [1, 9, 192],
  [",", 193,
   0, 196],
  [1, 9, 194],
  [1, 134, 195],
  [1, 9, 192],
  [1, 9, 197],
  [")", -1],
  [2, 188, -1, {"name":"ArgList"},
   "[", 199,
   3, "operator", e[24], -1,
   /^(?:\-\>|\.)/, 203,
   3, "operator", e[25], 205,
   "?", 207],
  [1, 9, 200],
  [1, 134, 201],
  [1, 9, 202],
  ["]", -1],
  [1, 9, 204],
  [2, 292, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 206],
  [1, 134, -1],
  [1, 9, 208],
  [1, 134, 209],
  [1, 9, 210],
  [":", 211],
  [1, 9, 212],
  [1, 134, -1],
  [0, 214,
   "(", 221],
  ["*", 215,
   3, "def", e[13], 216],
  [1, 9, 214],
  [1, 9, 217],
  ["[", 218,
   0, -1],
  [1, 9, 219],
  ["]", 220],
  [1, 9, 217],
  [1, 9, 222],
  [1, 213, 223],
  [1, 9, 224],
  [")", -1],
  ["(", 226],
  [1, 9, 227],
  [")", -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[14], -1,
   3, "type", e[26], -1],
  [2, 293, 229, {"name":"ParamList"}],
  [1, 9, 230],
  [";", -1,
   2, 113, -1, {"name":"Block"}],
  ["{", 232],
  [3, "tag", e[28], 233,
   3, "tag", e[29], 234,
   2, 298, 238, {"name":"doccomment.type","token":"type"}],
  [e[27], 233,
   "{", 235,
   0, 234],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 234,
   0, 238],
  [2, 298, 236, {"name":"doccomment.type","token":"type"}],
  ["}", 237],
  [e[27], 237,
   3, "def", e[30], 234,
   0, 234],
  ["}", -1],
  [3, "tag", e[28], 240,
   3, "tag", e[29], 244],
  [e[27], 240,
   "{", 241,
   0, 244],
  [2, 298, 242, {"name":"doccomment.type","token":"type"}],
  ["}", 243],
  [e[27], 243,
   3, "def", e[30], 244,
   0, 244],
  [0, 245,
   2, 231, 244, {"name":"doccomment.braced"},
   0, -1],
  [e[31], 246],
  [0, 245,
   0, 244],
  [/^(?![a-zA-Z¡-￿_0-9])/, 248],
  [1, 9, 249],
  [1, 251, 250,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 249],
  ["[", 252,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 253],
  [3, "number", e[21], 254,
   0, 254],
  [1, 9, 255],
  ["]", -1],
  ["(", 257],
  [1, 9, 258],
  [1, 134, 259,
   0, 259],
  [1, 9, 260],
  [")", -1],
  ["{", 262],
  [1, 9, 263],
  [1, 134, 264,
   0, 269],
  [1, 9, 265],
  [",", 266,
   0, 269],
  [1, 9, 267],
  [1, 134, 268,
   0, 268],
  [1, 9, 265],
  [1, 9, 270],
  ["}", -1],
  [3, "keyword", e[15], 272,
   3, "keyword", e[16], 272,
   3, "keyword", e[9], 273,
   0, 273],
  [1, 9, 271],
  [1, 9, 274],
  [3, "keyword", e[14], 278,
   0, 275,
   3, "type", e[13], 278],
  [3, "type", e[17], 276],
  [0, 275,
   1, 9, 277,
   0, 278],
  [3, "type", e[18], 278],
  [1, 9, 279],
  [1, 251, 280,
   0, -1],
  [1, 9, 279],
  [1, 271, 282],
  [1, 9, 283],
  [2, 292, 284, {"name":"fieldName","token":"property"},
   0, 284],
  [1, 9, 285],
  [":", 286,
   "[", 287,
   0, -1],
  [1, 9, 288],
  [1, 9, 289],
  [3, "number", e[21], -1],
  [3, "number", e[21], 290,
   0, 290],
  [1, 9, 291],
  ["]", -1],
  [3, "callee", e[32], -1,
   e[13], -1],
  ["(", 294],
  [1, 9, 295],
  [1, 299, 296],
  [1, 9, 297],
  [")", -1],
  [1, 313, -1],
  [1, 271, 300,
   0, -1],
  [1, 9, 301],
  [1, 213, 302,
   0, 303],
  [1, 9, 304],
  [1, 9, 305],
  [2, 293, 303, {"name":"ParamList"},
   0, 303],
  [",", 306,
   0, -1],
  [1, 9, 307],
  [1, 271, 308],
  [1, 9, 309],
  [1, 213, 310,
   0, 311],
  [1, 9, 312],
  [1, 9, 305],
  [2, 293, 311, {"name":"ParamList"},
   0, 311],
  [/^(?!\}|\*\/)/, 314,
   0, -1],
  ["{", 315,
   /^[^]/, 313],
  [1, 313, 316],
  [/^\}?/, 313]
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
