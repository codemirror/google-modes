(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 213]], [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   2, 93, -1, {"name":"plainVariableName","token":"variable"},
   3, "number", e[22], -1,
   2, 94, -1, {"name":"string","token":"string"},
   3, "operator", e[19], -1,
   3, "operator", e[23], -1,
   3, "operator", e[24], -1,
   2, 98, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 98, 9, {"name":"comment","token":"comment"},
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
   2, 104, -1, {"name":"Block"},
   3, "keyword", e[6], 55,
   3, "keyword", e[7], 57,
   3, "keyword", e[8], 61,
   3, "keyword", e[9], 65,
   3, "keyword", e[10], 71,
   3, "keyword", e[11], 72,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 108]], 71,
   2, 109, 75, {"name":"DeclType"},
   ";", -1,
   1, 125, 91],
  [1, 9, 14],
  [3, "type def", e[13], 15,
   0, 15],
  [1, 9, 16],
  [2, 146, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 20],
  [1, 9, 21],
  [1, 9, 22],
  ["(", 23],
  [2, 164, 24, {"name":"CondExpr"}],
  [2, 12, 25, {"name":"Statement"}],
  [1, 9, 26],
  [1, 9, 27],
  [1, 9, 28],
  [2, 12, 29, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 30],
  [1, 9, 31],
  [1, 9, 32],
  [1, 125, 33,
   0, 33],
  [2, 164, 34, {"name":"CondExpr"}],
  [1, 9, 35],
  [1, 9, 36],
  [";", 37],
  [";", -1],
  [1, 9, 38],
  [1, 125, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 44],
  [2, 164, 45, {"name":"CondExpr"}],
  [1, 9, 46],
  [2, 12, 47, {"name":"Statement"}],
  [1, 9, 48],
  [3, "keyword", e[12], 49,
   0, -1],
  [1, 9, 50],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 52],
  [2, 164, 53, {"name":"CondExpr"}],
  [1, 9, 54],
  [2, 104, -1, {"name":"Block"}],
  [1, 9, 56],
  [";", -1],
  [1, 9, 58],
  [e[13], 59],
  [1, 9, 60],
  [";", -1],
  [1, 9, 62],
  [1, 125, 63,
   0, 63],
  [1, 9, 64],
  [";", -1],
  [1, 9, 66],
  [3, "def", e[13], 67,
   0, 67],
  [1, 9, 68],
  [2, 169, 69, {"name":"BlockOf"},
   0, 69],
  [1, 9, 70],
  [";", -1],
  [1, 9, 73],
  [1, 9, 74],
  [":", -1],
  [1, 125, 71],
  [1, 9, 76],
  [1, 179, 77],
  [1, 9, 78],
  [[5, 191], 79,
   3, "operator", "=", 80,
   0, 81],
  [2, 194, -1, {"name":"FunctionDef"}],
  [1, 9, 82],
  [1, 9, 83],
  [1, 125, 81],
  [",", 84,
   ";", -1],
  [1, 9, 85],
  [3, "def", e[13], 86],
  [1, 9, 87],
  [3, "operator", "=", 88,
   0, 89],
  [1, 9, 90],
  [1, 9, 83],
  [1, 125, 89],
  [1, 9, 92],
  [";", -1],
  [3, "callee", e[31], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U)(?=[\'\"]))?/, 95],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 96],
  ["\\", 97,
   [0, /^(?!\")/, /^[^]/], 96,
   "\"", -1],
  [/^[^]/, 96],
  [/^\/\*\*(?!\/)/, 99,
   "/*", 103,
   /^\/\/.*/, -1],
  [0, 100,
   2, 197, 99, {"name":"doccomment.braced"},
   0, 101],
  [e[30], 102],
  [2, 205, 101, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 100,
   0, 99],
  [[0, /^(?!\*\/)/, /^[^]/], 103,
   "*/", -1],
  ["{", 105],
  [1, 9, 106],
  [2, 12, 107, {"name":"Statement"},
   "}", -1],
  [1, 9, 106],
  [e[26], 108,
   /^\:(?!\:)/, -1],
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
  [1, 217, 120,
   0, -1],
  [0, 117,
   1, 9, 121,
   0, 116],
  [1, 9, 118],
  [3, "type", e[18], 116],
  [1, 9, 123],
  [1, 217, 124,
   0, -1],
  [1, 9, 123],
  [3, "operator", e[19], 126,
   3, "keyword", e[20], 126,
   2, 222, 127, {"name":"ParenExpr"},
   3, "atom", e[21], 129,
   3, "number", e[22], 129,
   2, 94, 129, {"name":"string","token":"string"},
   2, 227, 129, {"name":"BlockOf"},
   2, 93, 129, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 125],
  [1, 9, 128],
  [1, 125, 129,
   0, 129],
  [1, 9, 130],
  [2, 237, 131, {"name":"ArgList"},
   "[", 132,
   3, "operator", e[23], 131,
   /^(?:\-\>|\.)/, 133,
   3, "operator", e[24], 134,
   "?", 135,
   0, -1],
  [1, 9, 130],
  [1, 9, 136],
  [1, 9, 137],
  [1, 9, 138],
  [1, 9, 139],
  [1, 125, 140],
  [2, 247, 131, {"name":"fieldName","token":"property"}],
  [1, 125, 131],
  [1, 125, 141],
  [1, 9, 142],
  [1, 9, 143],
  ["]", 131],
  [":", 144],
  [1, 9, 145],
  [1, 125, 131],
  ["{", 147],
  [1, 9, 148],
  [3, "def", e[13], 149,
   0, 162],
  [1, 9, 150],
  [3, "operator", "=", 151,
   0, 152],
  [1, 9, 153],
  [1, 9, 154],
  [1, 125, 152],
  [",", 155,
   0, 162],
  [1, 9, 156],
  [3, "def", e[13], 157,
   0, 158],
  [1, 9, 159],
  [1, 9, 154],
  [3, "operator", "=", 160,
   0, 158],
  [1, 9, 161],
  [1, 125, 158],
  [1, 9, 163],
  ["}", -1],
  ["(", 165],
  [1, 9, 166],
  [1, 125, 167,
   0, 167],
  [1, 9, 168],
  [")", -1],
  ["{", 170],
  [1, 9, 171],
  [1, 248, 172,
   0, 177],
  [1, 9, 173],
  [";", 174,
   0, 177],
  [1, 9, 175],
  [1, 248, 176,
   0, 176],
  [1, 9, 173],
  [1, 9, 178],
  ["}", -1],
  [0, 180,
   "(", 187],
  ["*", 181,
   3, "def", e[13], 182],
  [1, 9, 180],
  [1, 9, 183],
  ["[", 184,
   0, -1],
  [1, 9, 185],
  ["]", 186],
  [1, 9, 183],
  [1, 9, 188],
  [1, 179, 189],
  [1, 9, 190],
  [")", -1],
  ["(", 192],
  [1, 9, 193],
  [")", -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[14], -1,
   3, "type", e[25], -1],
  [2, 259, 195, {"name":"ParamList"}],
  [1, 9, 196],
  [";", -1,
   2, 104, -1, {"name":"Block"}],
  ["{", 198],
  [3, "tag", e[27], 199,
   3, "tag", e[28], 200,
   2, 264, 204, {"name":"doccomment.type","token":"type"}],
  [e[26], 199,
   "{", 201,
   0, 200],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 200,
   0, 204],
  [2, 264, 202, {"name":"doccomment.type","token":"type"}],
  ["}", 203],
  [e[26], 203,
   3, "def", e[29], 200,
   0, 200],
  ["}", -1],
  [3, "tag", e[27], 206,
   3, "tag", e[28], 210],
  [e[26], 206,
   "{", 207,
   0, 210],
  [2, 264, 208, {"name":"doccomment.type","token":"type"}],
  ["}", 209],
  [e[26], 209,
   3, "def", e[29], 210,
   0, 210],
  [0, 211,
   2, 197, 210, {"name":"doccomment.braced"},
   0, -1],
  [e[30], 212],
  [0, 211,
   0, 210],
  [/^(?![a-zA-Z¡-￿_0-9])/, 214],
  [1, 9, 215],
  [1, 217, 215,
   1, 9, 216],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["[", 218,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 219],
  [3, "number", e[22], 220,
   0, 220],
  [1, 9, 221],
  ["]", -1],
  ["(", 223],
  [1, 9, 224],
  [1, 125, 225,
   0, 225],
  [1, 9, 226],
  [")", -1],
  ["{", 228],
  [1, 9, 229],
  [1, 125, 230,
   0, 235],
  [1, 9, 231],
  [",", 232,
   0, 235],
  [1, 9, 233],
  [1, 125, 234,
   0, 234],
  [1, 9, 231],
  [1, 9, 236],
  ["}", -1],
  ["(", 238],
  [1, 9, 239],
  [1, 125, 240,
   0, 245],
  [1, 9, 241],
  [",", 242,
   0, 245],
  [1, 9, 243],
  [1, 125, 244],
  [1, 9, 241],
  [1, 9, 246],
  [")", -1],
  [3, "callee", e[31], -1,
   e[13], -1],
  [1, 265, 249],
  [1, 9, 250],
  [2, 247, 251, {"name":"fieldName","token":"property"},
   0, 251],
  [1, 9, 252],
  [":", 253,
   "[", 254,
   0, -1],
  [1, 9, 255],
  [1, 9, 256],
  [3, "number", e[22], -1],
  [3, "number", e[22], 257,
   0, 257],
  [1, 9, 258],
  ["]", -1],
  ["(", 260],
  [1, 9, 261],
  [1, 275, 262],
  [1, 9, 263],
  [")", -1],
  [1, 289, -1],
  [3, "keyword", e[15], 266,
   3, "keyword", e[16], 266,
   3, "keyword", e[9], 267,
   0, 267],
  [1, 9, 265],
  [1, 9, 268],
  [3, "keyword", e[14], 272,
   0, 269,
   3, "type", e[13], 272],
  [3, "type", e[17], 270],
  [0, 269,
   1, 9, 271,
   0, 272],
  [3, "type", e[18], 272],
  [1, 9, 273],
  [1, 217, 274,
   0, -1],
  [1, 9, 273],
  [1, 265, 276,
   0, -1],
  [1, 9, 277],
  [1, 179, 278,
   0, 279],
  [1, 9, 280],
  [1, 9, 281],
  [2, 259, 279, {"name":"ParamList"},
   0, 279],
  [",", 282,
   0, -1],
  [1, 9, 283],
  [1, 265, 284],
  [1, 9, 285],
  [1, 179, 286,
   0, 287],
  [1, 9, 288],
  [1, 9, 281],
  [2, 259, 287, {"name":"ParamList"},
   0, 287],
  [/^(?!\}|\*\/)/, 290,
   0, -1],
  ["{", 291,
   /^[^]/, 289],
  [1, 289, 292],
  [/^\}?/, 289]
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
