(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z\¡-\￿_0-9])/, /^for(?![a-zA-Z\¡-\￿_0-9])/, /^while(?![a-zA-Z\¡-\￿_0-9])/, /^do(?![a-zA-Z\¡-\￿_0-9])/, /^if(?![a-zA-Z\¡-\￿_0-9])/, /^switch(?![a-zA-Z\¡-\￿_0-9])/, /^(?:break|continue)(?![a-zA-Z\¡-\￿_0-9])/, /^goto(?![a-zA-Z\¡-\￿_0-9])/, /^return(?![a-zA-Z\¡-\￿_0-9])/, /^(?:struct|union)(?![a-zA-Z\¡-\￿_0-9])/, /^default(?![a-zA-Z\¡-\￿_0-9])/, /^case(?![a-zA-Z\¡-\￿_0-9])/, /^else(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, /^auto(?![a-zA-Z\¡-\￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:int|float|double)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^sizeof(?![a-zA-Z\¡-\￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z\¡-\￿_]|\{)/, /^[^]/], /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?= *\()/];
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
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 16,
   3, "keyword", e[2], 17,
   3, "keyword", e[3], 18,
   3, "keyword", e[4], 42,
   3, "keyword", e[5], 50,
   2, 104, -1, {"name":"Block"},
   3, "keyword", e[6], 54,
   3, "keyword", e[7], 56,
   3, "keyword", e[8], 60,
   3, "keyword", e[9], 64,
   2, 108, 70, {"name":"DeclType"},
   3, "keyword", e[10], 85,
   3, "keyword", e[11], 86,
   [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 123]], 85,
   ";", -1,
   1, 124, 91],
  [1, 9, 13],
  [3, "def", e[13], 14,
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
  [2, 104, -1, {"name":"Block"}],
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
  [1, 9, 71],
  [1, 190, 72],
  [1, 9, 73],
  [2, 197, -1, {"name":"FunctionDef"},
   3, "operator", "=", 74,
   0, 75],
  [1, 9, 76],
  [1, 9, 77],
  [1, 124, 75],
  [",", 78,
   ";", -1],
  [1, 9, 79],
  [3, "def", e[13], 80],
  [1, 9, 81],
  [3, "operator", "=", 82,
   0, 83],
  [1, 9, 84],
  [1, 9, 77],
  [1, 124, 83],
  [1, 9, 87],
  [1, 9, 88],
  [":", 89],
  [1, 124, 85],
  [1, 9, 90],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 92],
  [";", -1],
  [3, "callee", e[30], -1,
   e[13], -1],
  [/^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 95],
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
   2, 200, 99, {"name":"doccomment.braced"},
   0, 101],
  [e[29], 102],
  [2, 208, 101, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 100,
   0, 99],
  [[0, /^(?!\*\/)/, /^[^]/], 103,
   "*/", -1],
  ["{", 105],
  [1, 9, 106],
  [2, 11, 107, {"name":"Statement"},
   "}", -1],
  [1, 9, 106],
  [0, 109,
   0, 110,
   3, "keyword", e[14], 120,
   3, "type", [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 216]], 120],
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
  [1, 220, 119,
   0, -1],
  [0, 116,
   3, "type", e[18], 115,
   0, 115],
  [1, 9, 117],
  [1, 9, 121],
  [1, 220, 122,
   0, -1],
  [1, 9, 121],
  [e[25], 123,
   /^\:(?!\:)/, -1],
  [3, "operator", e[19], 125,
   3, "keyword", e[20], 125,
   2, 225, 126, {"name":"ParenExpr"},
   3, "atom", e[21], 128,
   3, "number", e[22], 128,
   2, 94, 128, {"name":"string","token":"string"},
   2, 230, 128, {"name":"BlockOf"},
   2, 93, 128, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 124],
  [1, 9, 127],
  [1, 124, 128,
   0, 128],
  [1, 9, 129],
  [2, 240, 130, {"name":"ArgList"},
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
  [2, 250, 130, {"name":"fieldName","token":"property"}],
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
  [3, "def", e[13], 156],
  [1, 9, 157],
  [3, "operator", "=", 158,
   0, 159],
  [1, 9, 160],
  [1, 9, 153],
  [1, 124, 159],
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
  [1, 251, 171,
   0, 188],
  [1, 9, 172],
  [2, 250, 173, {"name":"fieldName","token":"property"},
   0, 173],
  [1, 9, 174],
  [":", 175,
   0, 176],
  [1, 9, 177],
  [1, 9, 178],
  [3, "number", e[22], 176],
  [";", 179,
   0, 188],
  [1, 9, 180],
  [1, 251, 181],
  [1, 9, 182],
  [2, 250, 183, {"name":"fieldName","token":"property"},
   0, 183],
  [1, 9, 184],
  [":", 185,
   0, 186],
  [1, 9, 187],
  [1, 9, 178],
  [3, "number", e[22], 186],
  [1, 9, 189],
  ["}", -1],
  [0, 191,
   "(", 193],
  ["*", 192,
   3, "def", e[13], -1],
  [1, 9, 191],
  [1, 9, 194],
  [1, 190, 195],
  [1, 9, 196],
  [")", -1],
  [2, 258, 198, {"name":"ParamList"}],
  [1, 9, 199],
  [";", -1,
   2, 104, -1, {"name":"Block"}],
  ["{", 201],
  [3, "tag", e[26], 202,
   3, "tag", e[27], 203,
   2, 263, 207, {"name":"doccomment.type","token":"type"}],
  [e[25], 202,
   "{", 204,
   0, 203],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 203,
   0, 207],
  [2, 263, 205, {"name":"doccomment.type","token":"type"}],
  ["}", 206],
  [e[25], 206,
   3, "def", e[28], 203,
   0, 203],
  ["}", -1],
  [3, "tag", e[26], 209,
   3, "tag", e[27], 213],
  [e[25], 209,
   "{", 210,
   0, 213],
  [2, 263, 211, {"name":"doccomment.type","token":"type"}],
  ["}", 212],
  [e[25], 212,
   3, "def", e[28], 213,
   0, 213],
  [0, 214,
   2, 200, 213, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 215],
  [0, 214,
   0, 213],
  [/^(?![a-zA-Z\¡-\￿_0-9])/, 217],
  [1, 9, 218],
  [1, 220, 218,
   1, 9, 219],
  [/^[a-zA-Z\¡-\￿_]/, -1],
  ["[", 221,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 222],
  [3, "number", e[22], 223,
   0, 223],
  [1, 9, 224],
  ["]", -1],
  ["(", 226],
  [1, 9, 227],
  [1, 124, 228,
   0, 228],
  [1, 9, 229],
  [")", -1],
  ["{", 231],
  [1, 9, 232],
  [1, 124, 233,
   0, 238],
  [1, 9, 234],
  [",", 235,
   0, 238],
  [1, 9, 236],
  [1, 124, 237],
  [1, 9, 234],
  [1, 9, 239],
  ["}", -1],
  ["(", 241],
  [1, 9, 242],
  [1, 124, 243,
   0, 248],
  [1, 9, 244],
  [",", 245,
   0, 248],
  [1, 9, 246],
  [1, 124, 247],
  [1, 9, 244],
  [1, 9, 249],
  [")", -1],
  [3, "callee", e[30], -1,
   e[13], -1],
  [3, "keyword", e[15], 252,
   3, "keyword", e[16], 252,
   3, "keyword", e[14], 255,
   0, 253,
   3, "type", e[13], 255],
  [1, 9, 251],
  [3, "type", e[17], 254],
  [0, 253,
   3, "type", e[18], 255,
   0, 255],
  [1, 9, 256],
  [1, 220, 257,
   0, -1],
  [1, 9, 256],
  ["(", 259],
  [1, 9, 260],
  [1, 264, 261],
  [1, 9, 262],
  [")", -1],
  [1, 274, -1],
  [1, 251, 265,
   0, -1],
  [1, 9, 266],
  [3, "def", e[13], 267,
   0, 267],
  [1, 9, 268],
  [",", 269,
   0, -1],
  [1, 9, 270],
  [1, 251, 271],
  [1, 9, 272],
  [3, "def", e[13], 273,
   0, 273],
  [1, 9, 268],
  [/^(?!\}|\*\/)/, 275,
   0, -1],
  ["{", 276,
   /^[^]/, 274],
  [1, 274, 277],
  [/^\}?/, 274]
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

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state) {
  if (type == "def")
    { storeLocal(state.context, stream.current(), scopes); }
  else if (varRE.test(type) && !/qualified/.test(type) &&
           isLocal(state.context, stream.current()))
    { type = type.replace(varRE, "$1variable-2$2"); }
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
                cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0)
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
