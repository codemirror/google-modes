(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^interface(?![a-zA-Z0-9_])/, /^def(?![a-zA-Z0-9_])/, /^class(?![a-zA-Z0-9_])/, /^enum(?![a-zA-Z0-9_])/, /^staticmethods(?![a-zA-Z0-9_])/, /^namespace(?![a-zA-Z0-9_])/, /^capsule(?![a-zA-Z0-9_])/, /^implements(?![a-zA-Z0-9_])/, /^use(?![a-zA-Z0-9_])/, /^type(?![a-zA-Z0-9_])/, /^const(?![a-zA-Z0-9_])/, /^pass(?![a-zA-Z0-9_])/, /^return(?![a-zA-Z0-9_])/, /^from(?![a-zA-Z0-9_])/, /^[a-zA-Z_][a-zA-Z0-9_]*/, /^None(?![a-zA-Z0-9_])/, /^with(?![a-zA-Z0-9_])/, /^\`(?:(?!\`).)*\`/, /^as(?![a-zA-Z0-9_])/, /^import(?![a-zA-Z0-9_])/, /^property(?![a-zA-Z0-9_])/, [7, "stillIndented"], /^lambda(?![a-zA-Z0-9_])/, /^(?:self|cls)(?![a-zA-Z0-9_])/, /^default(?![a-zA-Z0-9_])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 8, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[18], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[16], -1,
     3, "atom", e[15], -1,
     3, "atom", e[23], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 7,
     0, -1],
    ["\n", 6],
    [[6, 153], 9,
     3, "keyword", e[0], 16,
     3, "keyword", e[1], 24,
     3, "keyword", e[2], 36,
     3, "keyword", e[3], 44,
     3, "keyword", e[0], 52,
     3, "keyword", e[4], 60,
     3, "keyword", e[5], 68,
     3, "keyword", e[6], 74,
     3, "keyword", e[7], 75,
     [6, 158], 76,
     [6, 161], 77,
     3, "keyword", e[8], 78,
     3, "keyword", e[9], 79,
     3, "keyword", e[10], 80,
     [5, 166], 81,
     2, 169, 82, {"name":"Decorator","token":"meta"},
     3, "string", e[17], 83,
     3, "keyword", e[11], 82,
     2, 172, 84, {"name":"qstring","token":"string"},
     3, "keyword", e[12], 85,
     e[14], 86],
    [3, "keyword", e[13], 10],
    [1, 6, 11],
    [2, 172, 12, {"name":"qstring","token":"string"}],
    [1, 6, 13],
    [":", 14],
    [1, 6, 15],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 17],
    [3, "def", e[14], 18],
    [1, 6, 19],
    [2, 187, 20, {"name":"TypeParams"}],
    [1, 6, 21],
    [":", 22],
    [1, 6, 23],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 25],
    [1, 192, 26],
    [1, 6, 27],
    [2, 197, 28, {"name":"Params"}],
    [1, 6, 29],
    ["->", 30,
     0, -1],
    [1, 6, 31],
    [3, "atom", e[15], 32,
     1, 202, 32,
     2, 197, 32, {"name":"Params"}],
    [1, 6, 33],
    [":", 34,
     0, -1],
    [1, 6, 35],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 37],
    [1, 192, 38],
    [1, 6, 39],
    [2, 216, 40, {"name":"Bases"},
     0, 40],
    [1, 6, 41],
    [":", 42],
    [1, 6, 43],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 45],
    [1, 192, 46],
    [1, 6, 47],
    [3, "keyword", e[16], 48,
     0, -1],
    [1, 6, 49],
    [":", 50],
    [1, 6, 51],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 53],
    [3, "def", e[14], 54],
    [1, 6, 55],
    [2, 187, 56, {"name":"TypeParams"}],
    [1, 6, 57],
    [":", 58],
    [1, 6, 59],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 61],
    [3, "keyword", e[13], 62],
    [1, 6, 63],
    [3, "string", e[17], 64],
    [1, 6, 65],
    [":", 66],
    [1, 6, 67],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 69],
    [3, "string", e[17], 70],
    [1, 6, 71],
    [":", 72],
    [1, 6, 73],
    [2, 181, -1, {"name":"indentedBody"}],
    [1, 6, 87],
    [1, 6, 88],
    [3, "keyword", e[13], 89],
    [3, "keyword", e[13], 90],
    [1, 6, 91],
    [1, 6, 92],
    [1, 6, 93],
    [1, 192, 94],
    [1, 6, 95],
    [1, 6, 96],
    [1, 6, 97],
    [1, 6, 98],
    [1, 6, 99],
    [1, 192, 82],
    [e[14], 100],
    [1, 6, 101],
    [1, 6, 102],
    [3, "string", e[17], 103],
    [3, "def", e[14], 104],
    [2, 221, 105, {"name":"d","token":"def"}],
    [1, 6, 106],
    ["\n", -1],
    [3, "keyword", e[18], 107],
    [[6, 222], 82],
    [e[14], 108],
    [/^(?!\:)/, 82],
    [1, 6, 109],
    [1, 223, 110],
    [2, 172, 111, {"name":"qstring","token":"string"}],
    [1, 6, 112],
    [1, 6, 113],
    [1, 6, 114],
    [":", 115],
    [1, 6, 116],
    [1, 6, 117],
    [2, 229, 82, {"name":"QualifiedTypes"}],
    [1, 6, 118],
    [1, 6, 119],
    [3, "keyword", e[18], 120],
    ["=", 121],
    [":", 122],
    [1, 6, 123],
    [1, 223, 82],
    ["(", 124],
    [3, "keyword", e[19], 125],
    [3, "keyword", e[19], 126],
    [1, 6, 127],
    [1, 6, 128],
    [1, 6, 129],
    [1, 202, 130],
    [1, 6, 131],
    [1, 6, 132],
    [1, 6, 133],
    [1, 223, 82],
    [1, 202, 82],
    [1, 202, 82],
    [1, 6, 134],
    [3, "operator", "...", 135],
    [e[14], 82],
    ["*", 136],
    ["=", 137,
     0, 82],
    [1, 6, 138],
    [1, 6, 139],
    [1, 6, 140],
    [")", 82],
    [3, "keyword", e[18], 141,
     0, 82],
    [3, "keyword", e[20], 142],
    [1, 6, 143],
    [1, 6, 144],
    [3, "def", e[14], 82],
    ["(", 145],
    [1, 6, 146],
    [3, "string", e[17], 147],
    [1, 6, 148],
    [",", 149,
     0, 150],
    [1, 6, 151],
    [1, 6, 152],
    [3, "string", e[17], 150],
    [")", 82],
    [3, "keyword", e[13], 154],
    [1, 6, 155],
    [1, 223, -1,
     2, 172, 156, {"name":"qstring","token":"string"}],
    [1, 6, 157],
    [3, "keyword", e[19], -1],
    [3, "keyword", e[13], 159],
    [1, 6, 160],
    [2, 172, -1, {"name":"qstring","token":"string"}],
    [3, "keyword", e[13], 162],
    [1, 6, 163],
    [1, 223, -1,
     2, 172, 164, {"name":"qstring","token":"string"}],
    [1, 6, 165],
    [":", -1],
    [1, 192, 167],
    [1, 6, 168],
    [":", -1],
    ["@", 170],
    [1, 6, 171],
    [1, 223, -1],
    ["'''", 173,
     "\"\"\"", 175,
     "'", 177,
     "\"", 179],
    ["\\", 174,
     [0, /^(?!\'\'\')/, /^[^]/], 173,
     "'''", -1],
    [/^[^]/, 173],
    ["\\", 176,
     [0, /^(?!\"\"\")/, /^[^]/], 175,
     "\"\"\"", -1],
    [/^[^]/, 175],
    ["\\", 178,
     /^(?!\')./, 177,
     "'", -1],
    [/^[^]/, 177],
    ["\\", 180,
     /^(?!\")./, 179,
     "\"", -1],
    [/^[^]/, 179],
    ["\n", 182],
    [/^[ \t]/, 182,
     3, "comment", /^\#.*/, 182,
     "\n", 182,
     e[21], 183],
    [2, 8, 184, {"name":"Statement"}],
    [/^[ \t]/, 184,
     3, "comment", /^\#.*/, 184,
     "\n", 184,
     0, 185],
    [0, 186,
     0, -1],
    [e[21], 183],
    ["<", 188],
    [1, 6, 189],
    [1, 234, 190],
    [1, 6, 191],
    [">", -1],
    [3, "string", e[17], 193,
     0, 195],
    [1, 6, 194],
    [3, "keyword", e[18], 195],
    [1, 6, 196],
    [3, "def", e[14], -1],
    ["(", 198],
    [1, 6, 199],
    [1, 240, 200],
    [1, 6, 201],
    [")", -1],
    [3, "string", e[17], 203,
     0, 205],
    [1, 6, 204],
    [3, "keyword", e[18], 205],
    [1, 6, 206],
    [[6, 246], 207,
     3, "keyword", e[22], 208,
     0, 208],
    [1, 223, 209],
    [1, 6, 210],
    [1, 6, 211],
    [2, 197, 212, {"name":"Params"}],
    [2, 247, -1, {"name":"Types"},
     0, -1],
    [1, 6, 213],
    ["->", 214],
    [1, 6, 215],
    [3, "atom", e[15], -1,
     1, 202, -1,
     2, 197, -1, {"name":"Params"}],
    ["(", 217],
    [1, 6, 218],
    [1, 252, 219],
    [1, 6, 220],
    [")", -1],
    [1, 192, -1],
    [":", -1,
     3, "keyword", e[19], -1],
    [e[14], 224],
    [1, 6, 225],
    [".", 226,
     0, -1],
    [1, 6, 227],
    [e[14], 228],
    [1, 6, 225],
    ["<", 230],
    [1, 6, 231],
    [1, 266, 232],
    [1, 6, 233],
    [">", -1],
    [e[14], 235,
     0, -1],
    [1, 6, 236],
    [",", 237,
     /^\,?/, -1],
    [1, 6, 238],
    [/^(?:[a-zA-Z_][a-zA-Z0-9_]*)?/, 239],
    [1, 6, 236],
    [3, "atom", e[23], 241,
     1, 272, 241,
     0, -1],
    [1, 6, 242],
    [",", 243,
     /^\,?/, -1],
    [1, 6, 244],
    [3, "atom", e[23], 245,
     1, 272, 245,
     0, 245],
    [1, 6, 242],
    [3, "keyword", e[22], -1,
     "(", -1],
    ["<", 248],
    [1, 6, 249],
    [1, 281, 250],
    [1, 6, 251],
    [">", -1],
    [3, "string", e[17], 253,
     0, 254,
     0, -1],
    [1, 6, 255],
    [1, 6, 256],
    [3, "keyword", e[18], 254],
    [1, 223, 257],
    [1, 6, 258],
    [",", 259,
     /^\,?/, -1],
    [1, 6, 260],
    [3, "string", e[17], 261,
     0, 262,
     0, 263],
    [1, 6, 264],
    [1, 6, 265],
    [1, 6, 258],
    [3, "keyword", e[18], 262],
    [1, 223, 263],
    [1, 223, 267,
     0, -1],
    [1, 6, 268],
    [",", 269,
     /^\,?/, -1],
    [1, 6, 270],
    [1, 223, 271,
     0, 271],
    [1, 6, 268],
    [3, "variable-2", e[14], 273],
    [1, 6, 274],
    [":", 275,
     0, -1],
    [1, 6, 276],
    [1, 202, 277],
    [1, 6, 278],
    ["=", 279,
     0, -1],
    [1, 6, 280],
    [3, "keyword", e[24], -1],
    [1, 202, 282,
     0, -1],
    [1, 6, 283],
    [",", 284,
     /^\,?/, -1],
    [1, 6, 285],
    [1, 202, 286,
     0, 286],
    [1, 6, 283]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
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

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["FuncDef", "ClassDef"];

  var allowNewline = [
      "Bases", "Params", "Types", "QualifiedTypes", "TypeParams" ];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Bases: ")", Params: ")",
    Types: ">", QualifiedTypes: ">", TypeParams: ">",
  };


  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx)) {
        return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1
      }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        (cx.name == "Statement" && curLine != cx.startLine ? 2 * config.indentUnit : 0)
    }
  }


  var ClifMode = /*@__PURE__*/(function (superclass) {
    function ClifMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented},
      });
      this.conf = conf;
    }

    if ( superclass ) ClifMode.__proto__ = superclass;
    ClifMode.prototype = Object.create( superclass && superclass.prototype );
    ClifMode.prototype.constructor = ClifMode;

    ClifMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    ClifMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return ClifMode;
  }(CodeMirror.GrammarMode));

  ClifMode.prototype.electricInput = /^\s*\(\)<>$/;
  ClifMode.prototype.closeBrackets = {triples: "'\"", pairs: "()<>''\"\"``",};
  ClifMode.prototype.lineComment = "#";
  ClifMode.prototype.fold = "indent";

  CodeMirror.defineMode("google-clif", function (conf) { return new ClifMode(conf); });
  CodeMirror.defineMIME("text/x-clif", {name: "google-clif"});

})));
