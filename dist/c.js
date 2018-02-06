(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+|[A-Z]+_[A-Z_]*)/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 237]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   3, "keyword", e[13], -1,
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
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[18], -1,
   3, "type", e[19], -1,
   3, "keyword", e[17], -1,
   3, "atom", e[21], -1,
   3, "meta", e[12], -1,
   2, 97, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[22], -1,
   2, 98, -1, {"name":"string","token":"string"},
   3, "operator", e[20], -1,
   3, "operator", e[24], -1,
   3, "operator", e[25], -1,
   2, 102, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 102, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 13,
   3, "keyword", e[1], 17,
   3, "keyword", e[2], 18,
   3, "keyword", e[3], 19,
   3, "keyword", e[4], 43,
   3, "keyword", e[5], 51,
   2, 108, -1, {"name":"Block"},
   3, "keyword", e[6], 55,
   3, "keyword", e[7], 57,
   3, "keyword", e[8], 61,
   3, "keyword", e[9], 65,
   3, "keyword", e[10], 71,
   3, "keyword", e[11], 72,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 112]], 71,
   3, "meta", e[12], 75,
   2, 113, 79, {"name":"DeclType"},
   ";", -1,
   1, 129, 95],
  [1, 9, 14],
  [3, "type def", e[14], 15,
   0, 15],
  [1, 9, 16],
  [2, 160, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 20],
  [1, 9, 21],
  [1, 9, 22],
  ["(", 23],
  [2, 178, 24, {"name":"CondExpr"}],
  [2, 12, 25, {"name":"Statement"}],
  [1, 9, 26],
  [1, 9, 27],
  [1, 9, 28],
  [2, 12, 29, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 30],
  [1, 9, 31],
  [1, 9, 32],
  [1, 129, 33,
   0, 33],
  [2, 178, 34, {"name":"CondExpr"}],
  [1, 9, 35],
  [1, 9, 36],
  [";", 37],
  [";", -1],
  [1, 9, 38],
  [1, 129, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 44],
  [2, 178, 45, {"name":"CondExpr"}],
  [1, 9, 46],
  [2, 12, 47, {"name":"Statement"}],
  [1, 9, 48],
  [3, "keyword", e[13], 49,
   0, -1],
  [1, 9, 50],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 52],
  [2, 178, 53, {"name":"CondExpr"}],
  [1, 9, 54],
  [2, 108, -1, {"name":"Block"}],
  [1, 9, 56],
  [";", -1],
  [1, 9, 58],
  [e[14], 59],
  [1, 9, 60],
  [";", -1],
  [1, 9, 62],
  [1, 129, 63,
   0, 63],
  [1, 9, 64],
  [";", -1],
  [1, 9, 66],
  [3, "def", e[14], 67,
   0, 67],
  [1, 9, 68],
  [2, 183, 69, {"name":"BlockOf"},
   0, 69],
  [1, 9, 70],
  [";", -1],
  [1, 9, 73],
  [1, 9, 74],
  [":", -1],
  [1, 129, 71],
  [1, 9, 76],
  [2, 193, 77, {"name":"ArgList"},
   0, 77],
  [1, 9, 78],
  [/^\;?/, -1],
  [1, 9, 80],
  [1, 203, 81],
  [1, 9, 82],
  [[5, 215], 83,
   3, "operator", "=", 84,
   0, 85],
  [2, 218, -1, {"name":"FunctionDef"}],
  [1, 9, 86],
  [1, 9, 87],
  [1, 129, 85],
  [",", 88,
   ";", -1],
  [1, 9, 89],
  [3, "def", e[14], 90],
  [1, 9, 91],
  [3, "operator", "=", 92,
   0, 93],
  [1, 9, 94],
  [1, 9, 87],
  [1, 129, 93],
  [1, 9, 96],
  [";", -1],
  [3, "callee", e[32], -1,
   e[14], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 99],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 100],
  ["\\", 101,
   [0, /^(?!\")/, /^[^]/], 100,
   "\"", -1],
  [/^[^]/, 100],
  [/^\/\*\*(?!\/)/, 103,
   "/*", 107,
   /^\/\/.*/, -1],
  [0, 104,
   2, 221, 103, {"name":"doccomment.braced"},
   0, 105],
  [e[31], 106],
  [2, 229, 105, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 104,
   0, 103],
  [[0, /^(?!\*\/)/, /^[^]/], 107,
   "*/", -1],
  ["{", 109],
  [1, 9, 110],
  [2, 12, 111, {"name":"Statement"},
   "}", -1],
  [1, 9, 110],
  [e[27], 112,
   /^\:(?!\:)/, -1],
  [0, 114,
   0, 115,
   3, "keyword", e[15], 126,
   3, "type", e[26], 126],
  [3, "keyword", e[16], 116,
   3, "keyword", e[17], 116],
  [3, "type", e[18], 117],
  [1, 9, 118],
  [1, 9, 119],
  [0, 114,
   3, "keyword", e[15], 120,
   0, 121,
   3, "type", e[14], 120],
  [0, 115,
   3, "type", e[19], 120,
   0, 120],
  [1, 9, 122],
  [3, "type", e[18], 123],
  [1, 241, 124,
   0, -1],
  [0, 121,
   1, 9, 125,
   0, 120],
  [1, 9, 122],
  [3, "type", e[19], 120],
  [1, 9, 127],
  [1, 241, 128,
   0, -1],
  [1, 9, 127],
  [3, "operator", e[20], 130,
   2, 246, 131, {"name":"ParenExpr"},
   3, "atom", e[21], 143,
   3, "number", e[22], 143,
   2, 98, 143, {"name":"string","token":"string"},
   2, 251, 143, {"name":"BlockOf"},
   3, "keyword", e[23], 132,
   2, 97, 143, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 129],
  [1, 9, 133],
  [1, 9, 134],
  [1, 129, 143,
   0, 143],
  ["(", 135,
   /^(?:\.\.\.)?/, 136],
  [1, 9, 137],
  [1, 9, 138],
  [1, 261, 139],
  [1, 129, 140],
  [1, 9, 141],
  [1, 9, 142],
  [")", 140],
  [3, "meta", e[12], 143],
  [1, 9, 144],
  [2, 193, 145, {"name":"ArgList"},
   "[", 146,
   3, "operator", e[24], 145,
   /^(?:\-\>|\.)/, 147,
   3, "operator", e[25], 148,
   "?", 149,
   0, -1],
  [1, 9, 144],
  [1, 9, 150],
  [1, 9, 151],
  [1, 9, 152],
  [1, 9, 153],
  [1, 129, 154],
  [2, 271, 145, {"name":"fieldName","token":"property"}],
  [1, 129, 145],
  [1, 129, 155],
  [1, 9, 156],
  [1, 9, 157],
  ["]", 145],
  [":", 158],
  [1, 9, 159],
  [1, 129, 145],
  ["{", 161],
  [1, 9, 162],
  [3, "def", e[14], 163,
   0, 176],
  [1, 9, 164],
  [3, "operator", "=", 165,
   0, 166],
  [1, 9, 167],
  [1, 9, 168],
  [1, 129, 166],
  [",", 169,
   0, 176],
  [1, 9, 170],
  [3, "def", e[14], 171,
   0, 172],
  [1, 9, 173],
  [1, 9, 168],
  [3, "operator", "=", 174,
   0, 172],
  [1, 9, 175],
  [1, 129, 172],
  [1, 9, 177],
  ["}", -1],
  ["(", 179],
  [1, 9, 180],
  [1, 129, 181,
   0, 181],
  [1, 9, 182],
  [")", -1],
  ["{", 184],
  [1, 9, 185],
  [1, 272, 186,
   0, 191],
  [1, 9, 187],
  [";", 188,
   0, 191],
  [1, 9, 189],
  [1, 272, 190,
   0, 190],
  [1, 9, 187],
  [1, 9, 192],
  ["}", -1],
  ["(", 194],
  [1, 9, 195],
  [1, 129, 196,
   0, 201],
  [1, 9, 197],
  [",", 198,
   0, 201],
  [1, 9, 199],
  [1, 129, 200],
  [1, 9, 197],
  [1, 9, 202],
  [")", -1],
  [0, 204,
   "(", 211],
  ["*", 205,
   3, "def", e[14], 206],
  [1, 9, 204],
  [1, 9, 207],
  ["[", 208,
   0, -1],
  [1, 9, 209],
  ["]", 210],
  [1, 9, 207],
  [1, 9, 212],
  [1, 203, 213],
  [1, 9, 214],
  [")", -1],
  ["(", 216],
  [1, 9, 217],
  [")", -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "type", e[18], -1,
   3, "keyword", e[15], -1,
   3, "type", e[26], -1],
  [2, 283, 219, {"name":"ParamList"}],
  [1, 9, 220],
  [";", -1,
   2, 108, -1, {"name":"Block"}],
  ["{", 222],
  [3, "tag", e[28], 223,
   3, "tag", e[29], 224,
   2, 288, 228, {"name":"doccomment.type","token":"type"}],
  [e[27], 223,
   "{", 225,
   0, 224],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 224,
   0, 228],
  [2, 288, 226, {"name":"doccomment.type","token":"type"}],
  ["}", 227],
  [e[27], 227,
   3, "def", e[30], 224,
   0, 224],
  ["}", -1],
  [3, "tag", e[28], 230,
   3, "tag", e[29], 234],
  [e[27], 230,
   "{", 231,
   0, 234],
  [2, 288, 232, {"name":"doccomment.type","token":"type"}],
  ["}", 233],
  [e[27], 233,
   3, "def", e[30], 234,
   0, 234],
  [0, 235,
   2, 221, 234, {"name":"doccomment.braced"},
   0, -1],
  [e[31], 236],
  [0, 235,
   0, 234],
  [/^(?![a-zA-Z¡-￿_0-9])/, 238],
  [1, 9, 239],
  [1, 241, 240,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 239],
  ["[", 242,
   /^[\*\&]/, -1,
   3, "keyword", e[17], -1],
  [1, 9, 243],
  [3, "number", e[22], 244,
   0, 244],
  [1, 9, 245],
  ["]", -1],
  ["(", 247],
  [1, 9, 248],
  [1, 129, 249,
   0, 249],
  [1, 9, 250],
  [")", -1],
  ["{", 252],
  [1, 9, 253],
  [1, 129, 254,
   0, 259],
  [1, 9, 255],
  [",", 256,
   0, 259],
  [1, 9, 257],
  [1, 129, 258,
   0, 258],
  [1, 9, 255],
  [1, 9, 260],
  ["}", -1],
  [3, "keyword", e[16], 262,
   3, "keyword", e[17], 262,
   3, "keyword", e[9], 263,
   0, 263],
  [1, 9, 261],
  [1, 9, 264],
  [3, "keyword", e[15], 268,
   0, 265,
   3, "type", e[14], 268],
  [3, "type", e[18], 266],
  [0, 265,
   1, 9, 267,
   0, 268],
  [3, "type", e[19], 268],
  [1, 9, 269],
  [1, 241, 270,
   0, -1],
  [1, 9, 269],
  [3, "callee", e[32], -1,
   e[14], -1],
  [1, 261, 273],
  [1, 9, 274],
  [2, 271, 275, {"name":"fieldName","token":"property"},
   0, 275],
  [1, 9, 276],
  [":", 277,
   "[", 278,
   0, -1],
  [1, 9, 279],
  [1, 9, 280],
  [3, "number", e[22], -1],
  [3, "number", e[22], 281,
   0, 281],
  [1, 9, 282],
  ["]", -1],
  ["(", 284],
  [1, 9, 285],
  [1, 289, 286],
  [1, 9, 287],
  [")", -1],
  [1, 303, -1],
  [1, 261, 290,
   0, -1],
  [1, 9, 291],
  [1, 203, 292,
   0, 293],
  [1, 9, 294],
  [1, 9, 295],
  [2, 283, 293, {"name":"ParamList"},
   0, 293],
  [",", 296,
   0, -1],
  [1, 9, 297],
  [1, 261, 298],
  [1, 9, 299],
  [1, 203, 300,
   0, 301],
  [1, 9, 302],
  [1, 9, 295],
  [2, 283, 301, {"name":"ParamList"},
   0, 301],
  [/^(?!\}|\*\/)/, 304,
   0, -1],
  ["{", 305,
   /^[^]/, 303],
  [1, 303, 306],
  [/^\}?/, 303]
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

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" || cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || cx.name == "NamespaceBlock" ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    var base = statementIndent(cx, config), sub;
    if (!curLine && (sub = hasSubStatement(cx)))
      { return base + (sub == "if" && (/[{;]\s*(\/\/.*)?$/.test(cx.startLine) || /^else\b/.test(textAfter)) ? 0 : config.indentUnit); }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
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
