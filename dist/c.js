(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 214]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[0], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[15], -1,
   3, "type", e[17], -1,
   3, "type", e[18], -1,
   3, "keyword", e[16], -1,
   3, "atom", e[21], -1,
   2, 94, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[22], -1,
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
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 16,
   3, "keyword", e[2], 17,
   3, "keyword", e[3], 18,
   3, "keyword", e[4], 42,
   3, "keyword", e[5], 50,
   2, 105, -1, {"name":"Block"},
   3, "keyword", e[6], 54,
   3, "keyword", e[7], 56,
   3, "keyword", e[8], 60,
   3, "keyword", e[9], 64,
   2, 109, 70, {"name":"DeclType"},
   3, "keyword", e[10], 86,
   3, "keyword", e[11], 87,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 125]], 86,
   ";", -1,
   1, 126, 92],
  [1, 9, 13],
  [3, "def", e[13], 14,
   0, 14],
  [1, 9, 15],
  [2, 147, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 19],
  [1, 9, 20],
  [1, 9, 21],
  ["(", 22],
  [2, 165, 23, {"name":"CondExpr"}],
  [2, 11, 24, {"name":"Statement"}],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [2, 11, 28, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 29],
  [1, 9, 30],
  [1, 9, 31],
  [1, 126, 32,
   0, 32],
  [2, 165, 33, {"name":"CondExpr"}],
  [1, 9, 34],
  [1, 9, 35],
  [";", 36],
  [";", -1],
  [1, 9, 37],
  [1, 126, 38,
   0, 38],
  [1, 9, 39],
  [")", 40],
  [1, 9, 41],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 43],
  [2, 165, 44, {"name":"CondExpr"}],
  [1, 9, 45],
  [2, 11, 46, {"name":"Statement"}],
  [1, 9, 47],
  [3, "keyword", e[12], 48,
   0, -1],
  [1, 9, 49],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 51],
  [2, 165, 52, {"name":"CondExpr"}],
  [1, 9, 53],
  [2, 105, -1, {"name":"Block"}],
  [1, 9, 55],
  [";", -1],
  [1, 9, 57],
  [e[13], 58],
  [1, 9, 59],
  [";", -1],
  [1, 9, 61],
  [1, 126, 62,
   0, 62],
  [1, 9, 63],
  [";", -1],
  [1, 9, 65],
  [3, "def", e[13], 66,
   0, 66],
  [1, 9, 67],
  [2, 170, 68, {"name":"BlockOf"},
   0, 68],
  [1, 9, 69],
  [";", -1],
  [1, 9, 71],
  [1, 180, 72],
  [1, 9, 73],
  [[5, 192], 74,
   3, "operator", "=", 75,
   0, 76],
  [2, 195, -1, {"name":"FunctionDef"}],
  [1, 9, 77],
  [1, 9, 78],
  [1, 126, 76],
  [",", 79,
   ";", -1],
  [1, 9, 80],
  [3, "def", e[13], 81],
  [1, 9, 82],
  [3, "operator", "=", 83,
   0, 84],
  [1, 9, 85],
  [1, 9, 78],
  [1, 126, 84],
  [1, 9, 88],
  [1, 9, 89],
  [":", 90],
  [1, 126, 86],
  [1, 9, 91],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 93],
  [";", -1],
  [3, "callee", e[31], -1,
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
   2, 198, 100, {"name":"doccomment.braced"},
   0, 102],
  [e[30], 103],
  [2, 206, 102, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 101,
   0, 100],
  [[0, /^(?!\*\/)/, /^[^]/], 104,
   "*/", -1],
  ["{", 106],
  [1, 9, 107],
  [2, 11, 108, {"name":"Statement"},
   "}", -1],
  [1, 9, 107],
  [0, 110,
   0, 111,
   3, "keyword", e[14], 122,
   3, "type", e[25], 122],
  [3, "keyword", e[15], 112,
   3, "keyword", e[16], 112],
  [3, "type", e[17], 113],
  [1, 9, 114],
  [1, 9, 115],
  [0, 110,
   3, "keyword", e[14], 116,
   0, 117,
   3, "type", e[13], 116],
  [0, 111,
   3, "type", e[18], 116,
   0, 116],
  [1, 9, 118],
  [3, "type", e[17], 119],
  [1, 218, 120,
   0, -1],
  [0, 117,
   1, 9, 121,
   0, 116],
  [1, 9, 118],
  [3, "type", e[18], 116],
  [1, 9, 123],
  [1, 218, 124,
   0, -1],
  [1, 9, 123],
  [e[26], 125,
   /^\:(?!\:)/, -1],
  [3, "operator", e[19], 127,
   3, "keyword", e[20], 127,
   2, 223, 128, {"name":"ParenExpr"},
   3, "atom", e[21], 130,
   3, "number", e[22], 130,
   2, 95, 130, {"name":"string","token":"string"},
   2, 228, 130, {"name":"BlockOf"},
   2, 94, 130, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 126],
  [1, 9, 129],
  [1, 126, 130,
   0, 130],
  [1, 9, 131],
  [2, 238, 132, {"name":"ArgList"},
   "[", 133,
   3, "operator", e[23], 132,
   /^(?:\-\>|\.)/, 134,
   3, "operator", e[24], 135,
   "?", 136,
   0, -1],
  [1, 9, 131],
  [1, 9, 137],
  [1, 9, 138],
  [1, 9, 139],
  [1, 9, 140],
  [1, 126, 141],
  [2, 248, 132, {"name":"fieldName","token":"property"}],
  [1, 126, 132],
  [1, 126, 142],
  [1, 9, 143],
  [1, 9, 144],
  ["]", 132],
  [":", 145],
  [1, 9, 146],
  [1, 126, 132],
  ["{", 148],
  [1, 9, 149],
  [3, "def", e[13], 150,
   0, 163],
  [1, 9, 151],
  [3, "operator", "=", 152,
   0, 153],
  [1, 9, 154],
  [1, 9, 155],
  [1, 126, 153],
  [",", 156,
   0, 163],
  [1, 9, 157],
  [3, "def", e[13], 158],
  [1, 9, 159],
  [3, "operator", "=", 160,
   0, 161],
  [1, 9, 162],
  [1, 9, 155],
  [1, 126, 161],
  [1, 9, 164],
  ["}", -1],
  ["(", 166],
  [1, 9, 167],
  [1, 126, 168,
   0, 168],
  [1, 9, 169],
  [")", -1],
  ["{", 171],
  [1, 9, 172],
  [1, 249, 173,
   0, 178],
  [1, 9, 174],
  [";", 175,
   0, 178],
  [1, 9, 176],
  [1, 249, 177],
  [1, 9, 174],
  [1, 9, 179],
  ["}", -1],
  [0, 181,
   "(", 188],
  ["*", 182,
   3, "def", e[13], 183],
  [1, 9, 181],
  [1, 9, 184],
  ["[", 185,
   0, -1],
  [1, 9, 186],
  ["]", 187],
  [1, 9, 184],
  [1, 9, 189],
  [1, 180, 190],
  [1, 9, 191],
  [")", -1],
  ["(", 193],
  [1, 9, 194],
  [")", -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[14], -1,
   3, "type", e[25], -1],
  [2, 260, 196, {"name":"ParamList"}],
  [1, 9, 197],
  [";", -1,
   2, 105, -1, {"name":"Block"}],
  ["{", 199],
  [3, "tag", e[27], 200,
   3, "tag", e[28], 201,
   2, 265, 205, {"name":"doccomment.type","token":"type"}],
  [e[26], 200,
   "{", 202,
   0, 201],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 201,
   0, 205],
  [2, 265, 203, {"name":"doccomment.type","token":"type"}],
  ["}", 204],
  [e[26], 204,
   3, "def", e[29], 201,
   0, 201],
  ["}", -1],
  [3, "tag", e[27], 207,
   3, "tag", e[28], 211],
  [e[26], 207,
   "{", 208,
   0, 211],
  [2, 265, 209, {"name":"doccomment.type","token":"type"}],
  ["}", 210],
  [e[26], 210,
   3, "def", e[29], 211,
   0, 211],
  [0, 212,
   2, 198, 211, {"name":"doccomment.braced"},
   0, -1],
  [e[30], 213],
  [0, 212,
   0, 211],
  [/^(?![a-zA-Z¡-￿_0-9])/, 215],
  [1, 9, 216],
  [1, 218, 216,
   1, 9, 217],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["[", 219,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 220],
  [3, "number", e[22], 221,
   0, 221],
  [1, 9, 222],
  ["]", -1],
  ["(", 224],
  [1, 9, 225],
  [1, 126, 226,
   0, 226],
  [1, 9, 227],
  [")", -1],
  ["{", 229],
  [1, 9, 230],
  [1, 126, 231,
   0, 236],
  [1, 9, 232],
  [",", 233,
   0, 236],
  [1, 9, 234],
  [1, 126, 235],
  [1, 9, 232],
  [1, 9, 237],
  ["}", -1],
  ["(", 239],
  [1, 9, 240],
  [1, 126, 241,
   0, 246],
  [1, 9, 242],
  [",", 243,
   0, 246],
  [1, 9, 244],
  [1, 126, 245],
  [1, 9, 242],
  [1, 9, 247],
  [")", -1],
  [3, "callee", e[31], -1,
   e[13], -1],
  [1, 266, 250],
  [1, 9, 251],
  [2, 248, 252, {"name":"fieldName","token":"property"},
   0, 252],
  [1, 9, 253],
  [":", 254,
   "[", 255,
   0, -1],
  [1, 9, 256],
  [1, 9, 257],
  [3, "number", e[22], -1],
  [3, "number", e[22], 258,
   0, 258],
  [1, 9, 259],
  ["]", -1],
  ["(", 261],
  [1, 9, 262],
  [1, 276, 263],
  [1, 9, 264],
  [")", -1],
  [1, 290, -1],
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
  [1, 218, 275,
   0, -1],
  [1, 9, 274],
  [1, 266, 277,
   0, -1],
  [1, 9, 278],
  [1, 180, 279,
   0, 280],
  [1, 9, 281],
  [1, 9, 282],
  [2, 260, 280, {"name":"ParamList"},
   0, 280],
  [",", 283,
   0, -1],
  [1, 9, 284],
  [1, 266, 285],
  [1, 9, 286],
  [1, 180, 287,
   0, 288],
  [1, 9, 289],
  [1, 9, 282],
  [2, 260, 288, {"name":"ParamList"},
   0, 288],
  [/^(?!\}|\*\/)/, 291,
   0, -1],
  ["{", 292,
   /^[^]/, 290],
  [1, 290, 293],
  [/^\}?/, 290]
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

function isNamespace(context) {
  return context && context.name == "Statement" &&
    /^namespace\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
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

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
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
