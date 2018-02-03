(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 212]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   2, 92, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[22], -1,
   2, 93, -1, {"name":"string","token":"string"},
   3, "operator", e[19], -1,
   3, "operator", e[23], -1,
   3, "operator", e[24], -1,
   2, 97, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 97, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 16,
   3, "keyword", e[2], 17,
   3, "keyword", e[3], 18,
   3, "keyword", e[4], 42,
   3, "keyword", e[5], 50,
   2, 103, -1, {"name":"Block"},
   3, "keyword", e[6], 54,
   3, "keyword", e[7], 56,
   3, "keyword", e[8], 60,
   3, "keyword", e[9], 64,
   3, "keyword", e[10], 70,
   3, "keyword", e[11], 71,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 107]], 70,
   2, 108, 74, {"name":"DeclType"},
   ";", -1,
   1, 124, 90],
  [1, 9, 13],
  [3, "type def", e[13], 14,
   0, 14],
  [1, 9, 15],
  [2, 145, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 19],
  [1, 9, 20],
  [1, 9, 21],
  ["(", 22],
  [2, 163, 23, {"name":"CondExpr"}],
  [2, 11, 24, {"name":"Statement"}],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [2, 11, 28, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 29],
  [1, 9, 30],
  [1, 9, 31],
  [1, 124, 32,
   0, 32],
  [2, 163, 33, {"name":"CondExpr"}],
  [1, 9, 34],
  [1, 9, 35],
  [";", 36],
  [";", -1],
  [1, 9, 37],
  [1, 124, 38,
   0, 38],
  [1, 9, 39],
  [")", 40],
  [1, 9, 41],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 43],
  [2, 163, 44, {"name":"CondExpr"}],
  [1, 9, 45],
  [2, 11, 46, {"name":"Statement"}],
  [1, 9, 47],
  [3, "keyword", e[12], 48,
   0, -1],
  [1, 9, 49],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 51],
  [2, 163, 52, {"name":"CondExpr"}],
  [1, 9, 53],
  [2, 103, -1, {"name":"Block"}],
  [1, 9, 55],
  [";", -1],
  [1, 9, 57],
  [e[13], 58],
  [1, 9, 59],
  [";", -1],
  [1, 9, 61],
  [1, 124, 62,
   0, 62],
  [1, 9, 63],
  [";", -1],
  [1, 9, 65],
  [3, "def", e[13], 66,
   0, 66],
  [1, 9, 67],
  [2, 168, 68, {"name":"BlockOf"},
   0, 68],
  [1, 9, 69],
  [";", -1],
  [1, 9, 72],
  [1, 9, 73],
  [":", -1],
  [1, 124, 70],
  [1, 9, 75],
  [1, 178, 76],
  [1, 9, 77],
  [[5, 190], 78,
   3, "operator", "=", 79,
   0, 80],
  [2, 193, -1, {"name":"FunctionDef"}],
  [1, 9, 81],
  [1, 9, 82],
  [1, 124, 80],
  [",", 83,
   ";", -1],
  [1, 9, 84],
  [3, "def", e[13], 85],
  [1, 9, 86],
  [3, "operator", "=", 87,
   0, 88],
  [1, 9, 89],
  [1, 9, 82],
  [1, 124, 88],
  [1, 9, 91],
  [";", -1],
  [3, "callee", e[31], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 94],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 95],
  ["\\", 96,
   [0, /^(?!\")/, /^[^]/], 95,
   "\"", -1],
  [/^[^]/, 95],
  [/^\/\*\*(?!\/)/, 98,
   "/*", 102,
   /^\/\/.*/, -1],
  [0, 99,
   2, 196, 98, {"name":"doccomment.braced"},
   0, 100],
  [e[30], 101],
  [2, 204, 100, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 99,
   0, 98],
  [[0, /^(?!\*\/)/, /^[^]/], 102,
   "*/", -1],
  ["{", 104],
  [1, 9, 105],
  [2, 11, 106, {"name":"Statement"},
   "}", -1],
  [1, 9, 105],
  [e[26], 107,
   /^\:(?!\:)/, -1],
  [0, 109,
   0, 110,
   3, "keyword", e[14], 121,
   3, "type", e[25], 121],
  [3, "keyword", e[15], 111,
   3, "keyword", e[16], 111],
  [3, "type", e[17], 112],
  [1, 9, 113],
  [1, 9, 114],
  [0, 109,
   3, "keyword", e[14], 115,
   0, 116,
   3, "type", e[13], 115],
  [0, 110,
   3, "type", e[18], 115,
   0, 115],
  [1, 9, 117],
  [3, "type", e[17], 118],
  [1, 216, 119,
   0, -1],
  [0, 116,
   1, 9, 120,
   0, 115],
  [1, 9, 117],
  [3, "type", e[18], 115],
  [1, 9, 122],
  [1, 216, 123,
   0, -1],
  [1, 9, 122],
  [3, "operator", e[19], 125,
   3, "keyword", e[20], 125,
   2, 221, 126, {"name":"ParenExpr"},
   3, "atom", e[21], 128,
   3, "number", e[22], 128,
   2, 93, 128, {"name":"string","token":"string"},
   2, 226, 128, {"name":"BlockOf"},
   2, 92, 128, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 124],
  [1, 9, 127],
  [1, 124, 128,
   0, 128],
  [1, 9, 129],
  [2, 236, 130, {"name":"ArgList"},
   "[", 131,
   3, "operator", e[23], 130,
   /^(?:\-\>|\.)/, 132,
   3, "operator", e[24], 133,
   "?", 134,
   0, -1],
  [1, 9, 129],
  [1, 9, 135],
  [1, 9, 136],
  [1, 9, 137],
  [1, 9, 138],
  [1, 124, 139],
  [2, 246, 130, {"name":"fieldName","token":"property"}],
  [1, 124, 130],
  [1, 124, 140],
  [1, 9, 141],
  [1, 9, 142],
  ["]", 130],
  [":", 143],
  [1, 9, 144],
  [1, 124, 130],
  ["{", 146],
  [1, 9, 147],
  [3, "def", e[13], 148,
   0, 161],
  [1, 9, 149],
  [3, "operator", "=", 150,
   0, 151],
  [1, 9, 152],
  [1, 9, 153],
  [1, 124, 151],
  [",", 154,
   0, 161],
  [1, 9, 155],
  [3, "def", e[13], 156,
   0, 157],
  [1, 9, 158],
  [1, 9, 153],
  [3, "operator", "=", 159,
   0, 157],
  [1, 9, 160],
  [1, 124, 157],
  [1, 9, 162],
  ["}", -1],
  ["(", 164],
  [1, 9, 165],
  [1, 124, 166,
   0, 166],
  [1, 9, 167],
  [")", -1],
  ["{", 169],
  [1, 9, 170],
  [1, 247, 171,
   0, 176],
  [1, 9, 172],
  [";", 173,
   0, 176],
  [1, 9, 174],
  [1, 247, 175,
   0, 175],
  [1, 9, 172],
  [1, 9, 177],
  ["}", -1],
  [0, 179,
   "(", 186],
  ["*", 180,
   3, "def", e[13], 181],
  [1, 9, 179],
  [1, 9, 182],
  ["[", 183,
   0, -1],
  [1, 9, 184],
  ["]", 185],
  [1, 9, 182],
  [1, 9, 187],
  [1, 178, 188],
  [1, 9, 189],
  [")", -1],
  ["(", 191],
  [1, 9, 192],
  [")", -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[14], -1,
   3, "type", e[25], -1],
  [2, 258, 194, {"name":"ParamList"}],
  [1, 9, 195],
  [";", -1,
   2, 103, -1, {"name":"Block"}],
  ["{", 197],
  [3, "tag", e[27], 198,
   3, "tag", e[28], 199,
   2, 263, 203, {"name":"doccomment.type","token":"type"}],
  [e[26], 198,
   "{", 200,
   0, 199],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 199,
   0, 203],
  [2, 263, 201, {"name":"doccomment.type","token":"type"}],
  ["}", 202],
  [e[26], 202,
   3, "def", e[29], 199,
   0, 199],
  ["}", -1],
  [3, "tag", e[27], 205,
   3, "tag", e[28], 209],
  [e[26], 205,
   "{", 206,
   0, 209],
  [2, 263, 207, {"name":"doccomment.type","token":"type"}],
  ["}", 208],
  [e[26], 208,
   3, "def", e[29], 209,
   0, 209],
  [0, 210,
   2, 196, 209, {"name":"doccomment.braced"},
   0, -1],
  [e[30], 211],
  [0, 210,
   0, 209],
  [/^(?![a-zA-Z¡-￿_0-9])/, 213],
  [1, 9, 214],
  [1, 216, 214,
   1, 9, 215],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["[", 217,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 218],
  [3, "number", e[22], 219,
   0, 219],
  [1, 9, 220],
  ["]", -1],
  ["(", 222],
  [1, 9, 223],
  [1, 124, 224,
   0, 224],
  [1, 9, 225],
  [")", -1],
  ["{", 227],
  [1, 9, 228],
  [1, 124, 229,
   0, 234],
  [1, 9, 230],
  [",", 231,
   0, 234],
  [1, 9, 232],
  [1, 124, 233,
   0, 233],
  [1, 9, 230],
  [1, 9, 235],
  ["}", -1],
  ["(", 237],
  [1, 9, 238],
  [1, 124, 239,
   0, 244],
  [1, 9, 240],
  [",", 241,
   0, 244],
  [1, 9, 242],
  [1, 124, 243],
  [1, 9, 240],
  [1, 9, 245],
  [")", -1],
  [3, "callee", e[31], -1,
   e[13], -1],
  [1, 264, 248],
  [1, 9, 249],
  [2, 246, 250, {"name":"fieldName","token":"property"},
   0, 250],
  [1, 9, 251],
  [":", 252,
   "[", 253,
   0, -1],
  [1, 9, 254],
  [1, 9, 255],
  [3, "number", e[22], -1],
  [3, "number", e[22], 256,
   0, 256],
  [1, 9, 257],
  ["]", -1],
  ["(", 259],
  [1, 9, 260],
  [1, 274, 261],
  [1, 9, 262],
  [")", -1],
  [1, 288, -1],
  [3, "keyword", e[15], 265,
   3, "keyword", e[16], 265,
   3, "keyword", e[9], 266,
   0, 266],
  [1, 9, 264],
  [1, 9, 267],
  [3, "keyword", e[14], 271,
   0, 268,
   3, "type", e[13], 271],
  [3, "type", e[17], 269],
  [0, 268,
   1, 9, 270,
   0, 271],
  [3, "type", e[18], 271],
  [1, 9, 272],
  [1, 216, 273,
   0, -1],
  [1, 9, 272],
  [1, 264, 275,
   0, -1],
  [1, 9, 276],
  [1, 178, 277,
   0, 278],
  [1, 9, 279],
  [1, 9, 280],
  [2, 258, 278, {"name":"ParamList"},
   0, 278],
  [",", 281,
   0, -1],
  [1, 9, 282],
  [1, 264, 283],
  [1, 9, 284],
  [1, 178, 285,
   0, 286],
  [1, 9, 287],
  [1, 9, 280],
  [2, 258, 286, {"name":"ParamList"},
   0, 286],
  [/^(?!\}|\*\/)/, 289,
   0, -1],
  ["{", 290,
   /^[^]/, 288],
  [1, 288, 291],
  [/^\}?/, 288]
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
