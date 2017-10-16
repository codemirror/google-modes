(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE]\-?[0-9]+)?)[LlUuFf]?/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/];
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
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 124]], 85,
   ";", -1,
   1, 125, 91],
  [1, 9, 13],
  [3, "def", e[13], 14,
   0, 14],
  [1, 9, 15],
  [2, 146, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 19],
  [1, 9, 20],
  [1, 9, 21],
  ["(", 22],
  [2, 164, 23, {"name":"CondExpr"}],
  [2, 11, 24, {"name":"Statement"}],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [2, 11, 28, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[2], 29],
  [1, 9, 30],
  [1, 9, 31],
  [1, 125, 32,
   0, 32],
  [2, 164, 33, {"name":"CondExpr"}],
  [1, 9, 34],
  [1, 9, 35],
  [";", 36],
  [";", -1],
  [1, 9, 37],
  [1, 125, 38,
   0, 38],
  [1, 9, 39],
  [")", 40],
  [1, 9, 41],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 43],
  [2, 164, 44, {"name":"CondExpr"}],
  [1, 9, 45],
  [2, 11, 46, {"name":"Statement"}],
  [1, 9, 47],
  [3, "keyword", e[12], 48,
   0, -1],
  [1, 9, 49],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 51],
  [2, 164, 52, {"name":"CondExpr"}],
  [1, 9, 53],
  [2, 104, -1, {"name":"Block"}],
  [1, 9, 55],
  [";", -1],
  [1, 9, 57],
  [e[13], 58],
  [1, 9, 59],
  [";", -1],
  [1, 9, 61],
  [1, 125, 62,
   0, 62],
  [1, 9, 63],
  [";", -1],
  [1, 9, 65],
  [3, "def", e[13], 66,
   0, 66],
  [1, 9, 67],
  [2, 169, 68, {"name":"BlockOf"},
   0, 68],
  [1, 9, 69],
  [";", -1],
  [1, 9, 71],
  [1, 191, 72],
  [1, 9, 73],
  [2, 198, -1, {"name":"FunctionDef"},
   3, "operator", "=", 74,
   0, 75],
  [1, 9, 76],
  [1, 9, 77],
  [1, 125, 75],
  [",", 78,
   ";", -1],
  [1, 9, 79],
  [3, "def", e[13], 80],
  [1, 9, 81],
  [3, "operator", "=", 82,
   0, 83],
  [1, 9, 84],
  [1, 9, 77],
  [1, 125, 83],
  [1, 9, 87],
  [1, 9, 88],
  [":", 89],
  [1, 125, 85],
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
   2, 201, 99, {"name":"doccomment.braced"},
   0, 101],
  [e[29], 102],
  [2, 209, 101, {"name":"doccomment.tagGroup"},
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
   3, "keyword", e[14], 121,
   3, "type", [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 217]], 121],
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
  [1, 221, 119,
   0, -1],
  [0, 116,
   1, 9, 120,
   0, 115],
  [1, 9, 117],
  [3, "type", e[18], 115],
  [1, 9, 122],
  [1, 221, 123,
   0, -1],
  [1, 9, 122],
  [e[25], 124,
   /^\:(?!\:)/, -1],
  [3, "operator", e[19], 126,
   3, "keyword", e[20], 126,
   2, 226, 127, {"name":"ParenExpr"},
   3, "atom", e[21], 129,
   3, "number", e[22], 129,
   2, 94, 129, {"name":"string","token":"string"},
   2, 231, 129, {"name":"BlockOf"},
   2, 93, 129, {"name":"plainVariableName","token":"variable"}],
  [1, 9, 125],
  [1, 9, 128],
  [1, 125, 129,
   0, 129],
  [1, 9, 130],
  [2, 241, 131, {"name":"ArgList"},
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
  [2, 251, 131, {"name":"fieldName","token":"property"}],
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
  [3, "def", e[13], 157],
  [1, 9, 158],
  [3, "operator", "=", 159,
   0, 160],
  [1, 9, 161],
  [1, 9, 154],
  [1, 125, 160],
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
  [1, 252, 172,
   0, 189],
  [1, 9, 173],
  [2, 251, 174, {"name":"fieldName","token":"property"},
   0, 174],
  [1, 9, 175],
  [":", 176,
   0, 177],
  [1, 9, 178],
  [1, 9, 179],
  [3, "number", e[22], 177],
  [";", 180,
   0, 189],
  [1, 9, 181],
  [1, 252, 182],
  [1, 9, 183],
  [2, 251, 184, {"name":"fieldName","token":"property"},
   0, 184],
  [1, 9, 185],
  [":", 186,
   0, 187],
  [1, 9, 188],
  [1, 9, 179],
  [3, "number", e[22], 187],
  [1, 9, 190],
  ["}", -1],
  [0, 192,
   "(", 194],
  ["*", 193,
   3, "def", e[13], -1],
  [1, 9, 192],
  [1, 9, 195],
  [1, 191, 196],
  [1, 9, 197],
  [")", -1],
  [2, 262, 199, {"name":"ParamList"}],
  [1, 9, 200],
  [";", -1,
   2, 104, -1, {"name":"Block"}],
  ["{", 202],
  [3, "tag", e[26], 203,
   3, "tag", e[27], 204,
   2, 267, 208, {"name":"doccomment.type","token":"type"}],
  [e[25], 203,
   "{", 205,
   0, 204],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 204,
   0, 208],
  [2, 267, 206, {"name":"doccomment.type","token":"type"}],
  ["}", 207],
  [e[25], 207,
   3, "def", e[28], 204,
   0, 204],
  ["}", -1],
  [3, "tag", e[26], 210,
   3, "tag", e[27], 214],
  [e[25], 210,
   "{", 211,
   0, 214],
  [2, 267, 212, {"name":"doccomment.type","token":"type"}],
  ["}", 213],
  [e[25], 213,
   3, "def", e[28], 214,
   0, 214],
  [0, 215,
   2, 201, 214, {"name":"doccomment.braced"},
   0, -1],
  [e[29], 216],
  [0, 215,
   0, 214],
  [/^(?![a-zA-Z¡-￿_0-9])/, 218],
  [1, 9, 219],
  [1, 221, 219,
   1, 9, 220],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["[", 222,
   /^[\*\&]/, -1,
   3, "keyword", e[16], -1],
  [1, 9, 223],
  [3, "number", e[22], 224,
   0, 224],
  [1, 9, 225],
  ["]", -1],
  ["(", 227],
  [1, 9, 228],
  [1, 125, 229,
   0, 229],
  [1, 9, 230],
  [")", -1],
  ["{", 232],
  [1, 9, 233],
  [1, 125, 234,
   0, 239],
  [1, 9, 235],
  [",", 236,
   0, 239],
  [1, 9, 237],
  [1, 125, 238],
  [1, 9, 235],
  [1, 9, 240],
  ["}", -1],
  ["(", 242],
  [1, 9, 243],
  [1, 125, 244,
   0, 249],
  [1, 9, 245],
  [",", 246,
   0, 249],
  [1, 9, 247],
  [1, 125, 248],
  [1, 9, 245],
  [1, 9, 250],
  [")", -1],
  [3, "callee", e[30], -1,
   e[13], -1],
  [3, "keyword", e[15], 253,
   3, "keyword", e[16], 253,
   3, "keyword", e[9], 254,
   0, 254],
  [1, 9, 252],
  [1, 9, 255],
  [3, "keyword", e[14], 259,
   0, 256,
   3, "type", e[13], 259],
  [3, "type", e[17], 257],
  [0, 256,
   1, 9, 258,
   0, 259],
  [3, "type", e[18], 259],
  [1, 9, 260],
  [1, 221, 261,
   0, -1],
  [1, 9, 260],
  ["(", 263],
  [1, 9, 264],
  [1, 268, 265],
  [1, 9, 266],
  [")", -1],
  [1, 282, -1],
  [1, 252, 269,
   0, -1],
  [1, 9, 270],
  [1, 191, 271,
   0, 272],
  [1, 9, 273],
  [1, 9, 274],
  [2, 262, 272, {"name":"ParamList"},
   0, 272],
  [",", 275,
   0, -1],
  [1, 9, 276],
  [1, 252, 277],
  [1, 9, 278],
  [1, 191, 279,
   0, 280],
  [1, 9, 281],
  [1, 9, 274],
  [2, 262, 280, {"name":"ParamList"},
   0, 280],
  [/^(?!\}|\*\/)/, 283,
   0, -1],
  ["{", 284,
   /^[^]/, 282],
  [1, 282, 285],
  [/^\}?/, 282]
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
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" || cx.name == "EnumConstant")
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
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant") {
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
