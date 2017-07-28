(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z\¡-\￿_0-9])/, /^for(?![a-zA-Z\¡-\￿_0-9])/, /^while(?![a-zA-Z\¡-\￿_0-9])/, /^do(?![a-zA-Z\¡-\￿_0-9])/, /^if(?![a-zA-Z\¡-\￿_0-9])/, /^switch(?![a-zA-Z\¡-\￿_0-9])/, /^(?:break|continue)(?![a-zA-Z\¡-\￿_0-9])/, /^goto(?![a-zA-Z\¡-\￿_0-9])/, /^return(?![a-zA-Z\¡-\￿_0-9])/, /^(?:struct|union)(?![a-zA-Z\¡-\￿_0-9])/, /^default(?![a-zA-Z\¡-\￿_0-9])/, /^case(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, /^else(?![a-zA-Z\¡-\￿_0-9])/, /^(?:register|static|extern|typedef|auto)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:int|float|double)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^sizeof(?![a-zA-Z\¡-\￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@|\{)/, /^[^]/]];
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
   3, "keyword", e[19], -1,
   3, "keyword", e[14], -1,
   3, "type", e[16], -1,
   3, "type", e[17], -1,
   3, "keyword", e[15], -1,
   3, "atom", e[20], -1,
   3, "builtin", e[22], -1,
   3, "variable", e[12], -1,
   3, "number", e[21], -1,
   2, 93, -1, {"name":"string","token":"string"},
   3, "operator", e[18], -1,
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
   2, 107, 70, {"name":"DeclType"},
   3, "keyword", e[10], 85,
   3, "keyword", e[11], 86,
   [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 122]], 85,
   ";", -1,
   1, 123, 91],
  [1, 9, 13],
  [3, "def", e[12], 14,
   0, 14],
  [1, 9, 15],
  [2, 144, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 19],
  [1, 9, 20],
  [1, 9, 21],
  ["(", 22],
  [2, 162, 23, {"name":"CondExpr"}],
  [2, 11, 24, {"name":"Statement"}],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [2, 11, 28, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 29],
  [1, 9, 30],
  [1, 9, 31],
  [1, 123, 32,
   0, 32],
  [2, 162, 33, {"name":"CondExpr"}],
  [1, 9, 34],
  [1, 9, 35],
  [";", 36],
  [";", -1],
  [1, 9, 37],
  [1, 123, 38,
   0, 38],
  [1, 9, 39],
  [")", 40],
  [1, 9, 41],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 43],
  [2, 162, 44, {"name":"CondExpr"}],
  [1, 9, 45],
  [2, 11, 46, {"name":"Statement"}],
  [1, 9, 47],
  [3, "keyword", e[13], 48,
   0, -1],
  [1, 9, 49],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 51],
  [2, 162, 52, {"name":"CondExpr"}],
  [1, 9, 53],
  [2, 103, -1, {"name":"Block"}],
  [1, 9, 55],
  [";", -1],
  [1, 9, 57],
  [e[12], 58],
  [1, 9, 59],
  [";", -1],
  [1, 9, 61],
  [1, 123, 62,
   0, 62],
  [1, 9, 63],
  [";", -1],
  [1, 9, 65],
  [3, "def", e[12], 66,
   0, 66],
  [1, 9, 67],
  [2, 167, 68, {"name":"BlockOf"},
   0, 68],
  [1, 9, 69],
  [";", -1],
  [1, 9, 71],
  [3, "def", e[12], 72],
  [1, 9, 73],
  [2, 189, -1, {"name":"FunctionDef"},
   3, "operator", "=", 74,
   0, 75],
  [1, 9, 76],
  [1, 9, 77],
  [1, 123, 75],
  [",", 78,
   ";", -1],
  [1, 9, 79],
  [3, "def", e[12], 80],
  [1, 9, 81],
  [3, "operator", "=", 82,
   0, 83],
  [1, 9, 84],
  [1, 9, 77],
  [1, 123, 83],
  [1, 9, 87],
  [1, 9, 88],
  [":", 89],
  [1, 123, 85],
  [1, 9, 90],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 92],
  [";", -1],
  [/^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 94],
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
   2, 192, 98, {"name":"doccomment.braced"},
   0, 100],
  [e[29], 101],
  [2, 200, 100, {"name":"doccomment.tagGroup"},
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
  [0, 108,
   0, 109,
   3, "type", [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 208]], 119],
  [3, "keyword", e[14], 110,
   3, "keyword", e[15], 110],
  [3, "type", e[16], 111],
  [1, 9, 112],
  [1, 9, 113],
  [0, 108,
   0, 114,
   3, "type", e[12], 115],
  [0, 109,
   3, "type", e[17], 115,
   0, 115],
  [3, "type", e[16], 116],
  [1, 9, 117],
  [0, 114,
   3, "type", e[17], 115,
   0, 115],
  [1, 212, 118,
   0, -1],
  [1, 9, 117],
  [1, 9, 120],
  [1, 212, 121,
   0, -1],
  [1, 9, 120],
  [e[25], 122,
   /^\:(?!\:)/, -1],
  [3, "operator", e[18], 124,
   3, "keyword", e[19], 124,
   2, 217, 125, {"name":"ParenExpr"},
   3, "atom", e[20], 127,
   3, "number", e[21], 127,
   2, 93, 127, {"name":"string","token":"string"},
   2, 222, 127, {"name":"BlockOf"},
   3, "builtin", e[22], 127,
   3, "variable", e[12], 127],
  [1, 9, 123],
  [1, 9, 126],
  [1, 123, 127,
   0, 127],
  [1, 9, 128],
  [2, 232, 129, {"name":"ArgList"},
   "[", 130,
   3, "operator", e[23], 129,
   /^(?:\-\>|\.)/, 131,
   3, "operator", e[24], 132,
   "?", 133,
   0, -1],
  [1, 9, 128],
  [1, 9, 134],
  [1, 9, 135],
  [1, 9, 136],
  [1, 9, 137],
  [1, 123, 138],
  [3, "builtin", e[22], 129,
   3, "property", e[12], 129],
  [1, 123, 129],
  [1, 123, 139],
  [1, 9, 140],
  [1, 9, 141],
  ["]", 129],
  [":", 142],
  [1, 9, 143],
  [1, 123, 129],
  ["{", 145],
  [1, 9, 146],
  [3, "def", e[12], 147,
   0, 160],
  [1, 9, 148],
  [3, "operator", "=", 149,
   0, 150],
  [1, 9, 151],
  [1, 9, 152],
  [1, 123, 150],
  [",", 153,
   0, 160],
  [1, 9, 154],
  [3, "def", e[12], 155],
  [1, 9, 156],
  [3, "operator", "=", 157,
   0, 158],
  [1, 9, 159],
  [1, 9, 152],
  [1, 123, 158],
  [1, 9, 161],
  ["}", -1],
  ["(", 163],
  [1, 9, 164],
  [1, 123, 165,
   0, 165],
  [1, 9, 166],
  [")", -1],
  ["{", 168],
  [1, 9, 169],
  [1, 242, 170,
   0, 187],
  [1, 9, 171],
  [3, "property", e[12], 172,
   0, 172],
  [1, 9, 173],
  [":", 174,
   0, 175],
  [1, 9, 176],
  [1, 9, 177],
  [3, "number", e[21], 175],
  [";", 178,
   0, 187],
  [1, 9, 179],
  [1, 242, 180],
  [1, 9, 181],
  [3, "property", e[12], 182,
   0, 182],
  [1, 9, 183],
  [":", 184,
   0, 185],
  [1, 9, 186],
  [1, 9, 177],
  [3, "number", e[21], 185],
  [1, 9, 188],
  ["}", -1],
  [2, 249, 190, {"name":"ParamList"}],
  [1, 9, 191],
  [";", -1,
   2, 103, -1, {"name":"Block"}],
  ["{", 193],
  [3, "tag", e[26], 194,
   3, "tag", e[27], 195,
   2, 254, 199, {"name":"doccomment.type","token":"type"}],
  [e[25], 194,
   "{", 196,
   0, 195],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 195,
   0, 199],
  [2, 254, 197, {"name":"doccomment.type","token":"type"}],
  ["}", 198],
  [e[25], 198,
   3, "def", e[28], 195,
   0, 195],
  ["}", -1],
  [3, "tag", e[26], 201,
   3, "tag", e[27], 205],
  [e[25], 201,
   "{", 202,
   0, 205],
  [2, 254, 203, {"name":"doccomment.type","token":"type"}],
  ["}", 204],
  [e[25], 204,
   3, "def", e[28], 205,
   0, 205],
  [0, 206,
   2, 192, 205, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 207],
  [0, 206,
   0, 205],
  [/^(?![a-zA-Z\¡-\￿_0-9])/, 209],
  [1, 9, 210],
  [1, 212, 210,
   1, 9, 211],
  [/^[a-zA-Z\¡-\￿_]/, -1],
  ["[", 213,
   /^[\*\&]/, -1,
   3, "keyword", e[15], -1],
  [1, 9, 214],
  [3, "number", e[21], 215,
   0, 215],
  [1, 9, 216],
  ["]", -1],
  ["(", 218],
  [1, 9, 219],
  [1, 123, 220,
   0, 220],
  [1, 9, 221],
  [")", -1],
  ["{", 223],
  [1, 9, 224],
  [1, 123, 225,
   0, 230],
  [1, 9, 226],
  [",", 227,
   0, 230],
  [1, 9, 228],
  [1, 123, 229],
  [1, 9, 226],
  [1, 9, 231],
  ["}", -1],
  ["(", 233],
  [1, 9, 234],
  [1, 123, 235,
   0, 240],
  [1, 9, 236],
  [",", 237,
   0, 240],
  [1, 9, 238],
  [1, 123, 239],
  [1, 9, 236],
  [1, 9, 241],
  [")", -1],
  [3, "keyword", e[14], 243,
   3, "keyword", e[15], 243,
   0, 244,
   3, "type", e[12], 246],
  [1, 9, 242],
  [3, "type", e[16], 245],
  [0, 244,
   3, "type", e[17], 246,
   0, 246],
  [1, 9, 247],
  [1, 212, 248,
   0, -1],
  [1, 9, 247],
  ["(", 250],
  [1, 9, 251],
  [1, 255, 252],
  [1, 9, 253],
  [")", -1],
  [1, 265, -1],
  [1, 242, 256,
   0, -1],
  [1, 9, 257],
  [3, "def", e[12], 258,
   0, 258],
  [1, 9, 259],
  [",", 260,
   0, -1],
  [1, 9, 261],
  [1, 242, 262],
  [1, 9, 263],
  [3, "def", e[12], 264,
   0, 264],
  [1, 9, 259],
  [/^(?!\}|\*\/)/, 266,
   0, -1],
  ["{", 267,
   /^[^]/, 265],
  [1, 265, 268],
  [/^\}?/, 265]
];
var start = 0;
var token = 5;


var grammar = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function storeLocal(context, name, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1)
      { return (cx.locals || (cx.locals = [])).push(name) } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}

function markLocals(type, scopes, stream, state) {
  if (type == "def") { storeLocal(state.context, stream.current(), scopes); }
  else if (type == "variable" && isLocal(state.context, stream.current())) { type = "variable-2"; }
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
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
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

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
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
                (cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0))
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "TemplateHead")
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
