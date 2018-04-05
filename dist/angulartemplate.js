(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror$1) { 'use strict';

  var e = [[1, "\n", "\t", " "], /^[a-zA-Z\-\.0-9_]+/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/];
  var nodes = [
    [1, 3, 0,
     0, 1],
    [/^[^]/, 0],
    [/^[^]/, -1],
    ["{{", 4,
     2, 6, -1, {"name":"comment","token":"comment"},
     2, 8, -1, {"name":"doctype","token":"meta"},
     2, 10, -1, {"name":"tag"},
     3, "atom", /^\&(?:(?![\;\n\t ]).)*\;/, -1,
     [1, "\n", /^(?:(?!\&|\<|\{\{).)+/], -1],
    [1, 18, 5],
    ["}}", -1],
    ["<!--", 7],
    [[0, /^(?!\-\-\>)/, /^[^]/], 7,
     "-->", -1],
    [/^(?:\<\!doctype|\<\!DOCTYPE)(?![a-zA-Z\-\.0-9_])/, 9],
    [[0, /^(?!\>)/, /^[^]/], 9,
     ">", -1],
    [2, 31, 11, {"name":"openTag"}],
    [3, "tag", "/>", -1,
     [7, "selfClosing"], 12,
     3, "tag", ">", 13],
    [3, "tag", ">", -1],
    [1, 3, 13,
     /^(?=\<\/)/, 14],
    [[7, "matchingTag"], 15,
     0, -1],
    [3, "tag", "</", 16],
    [e[0], 16,
     3, "tag", e[1], 17],
    [3, "tag", ">", -1],
    [1, 46, 19],
    [e[0], 19,
     2, 54, 19, {"name":"jsComment","token":"comment"},
     0, 20],
    [3, "operator", /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>(?:\=|\>\>?)?|\<[\=\<]?|\=(?:\=\=?)?|\&\&?|\|\|?|\^|\!\=\=?)/, 21,
     3, "keyword", /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, 21,
     "(", 22,
     ".", 23,
     "[", 24,
     3, "operator", "?", 25,
     0, -1],
    [e[0], 21,
     2, 54, 21, {"name":"jsComment","token":"comment"},
     1, 18, 26],
    [e[0], 22,
     2, 54, 22, {"name":"jsComment","token":"comment"},
     1, 56, 27],
    [e[0], 23,
     2, 54, 23, {"name":"jsComment","token":"comment"},
     3, "property callee", e[2], 26,
     3, "property", e[3], 26],
    [e[0], 24,
     2, 54, 24, {"name":"jsComment","token":"comment"},
     1, 18, 28],
    [e[0], 25,
     2, 54, 25, {"name":"jsComment","token":"comment"},
     1, 18, 29],
    [e[0], 26,
     2, 54, 26, {"name":"jsComment","token":"comment"},
     0, 20],
    [e[0], 27,
     2, 54, 27, {"name":"jsComment","token":"comment"},
     ")", 26],
    [e[0], 28,
     2, 54, 28, {"name":"jsComment","token":"comment"},
     "]", 26],
    [e[0], 29,
     2, 54, 29, {"name":"jsComment","token":"comment"},
     3, "operator", ":", 30],
    [e[0], 30,
     2, 54, 30, {"name":"jsComment","token":"comment"},
     1, 18, 26],
    [3, "tag", [0, "<", [6, 61]], 32],
    [e[0], 32,
     3, "tag", e[1], 33],
    [e[0], 33,
     0, 34],
    [/^[\*\#]/, 35,
     /^[\[\(]+/, 36,
     3, "attribute", /^(?:bind|on)+\-[a-zA-Z\-\.0-9_]+/, 37,
     3, "attribute", e[1], 38,
     0, -1],
    [e[0], 35,
     3, "attribute", e[1], 37],
    [e[0], 36,
     3, "attribute", e[1], 39],
    [e[0], 37,
     "=", 40,
     0, 34],
    [e[0], 38,
     "=", 41,
     0, 42],
    [e[0], 39,
     /^[\]\)]+/, 37],
    [e[0], 40,
     3, "string", "\"", 43],
    [e[0], 41,
     2, 62, 42, {"name":"attributeValue","token":"string"}],
    [e[0], 42,
     0, 34],
    [1, 18, 44],
    [3, "string", "\"", 45],
    [e[0], 45,
     0, 34],
    [3, "atom", /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 47,
     3, "operator", /^[\!\-]/, 47,
     3, "variable callee", e[2], -1,
     3, "variable", e[3], -1,
     3, "number", e[4], -1,
     2, 65, -1, {"name":"string","token":"string"},
     3, "string-2", /^\/(?![\/\*])(?:\\.|.)+\//, -1,
     "[", 48,
     "{", 50,
     "(", 52],
    [e[0], 47,
     2, 54, 47, {"name":"jsComment","token":"comment"},
     1, 46, -1],
    [e[0], 48,
     2, 54, 48, {"name":"jsComment","token":"comment"},
     1, 56, 49],
    [e[0], 49,
     2, 54, 49, {"name":"jsComment","token":"comment"},
     "]", -1],
    [e[0], 50,
     2, 54, 50, {"name":"jsComment","token":"comment"},
     1, 68, 51],
    [e[0], 51,
     2, 54, 51, {"name":"jsComment","token":"comment"},
     "}", -1],
    [e[0], 52,
     2, 54, 52, {"name":"jsComment","token":"comment"},
     1, 18, 53],
    [e[0], 53,
     2, 54, 53, {"name":"jsComment","token":"comment"},
     ")", -1],
    ["/*", 55,
     /^\/\/.*/, -1],
    [[0, /^(?!\*\/)/, /^[^]/], 55,
     "*/", -1],
    [1, 18, 57,
     0, -1],
    [e[0], 57,
     2, 54, 57, {"name":"jsComment","token":"comment"},
     0, 58],
    [",", 59,
     0, -1],
    [e[0], 59,
     2, 54, 59, {"name":"jsComment","token":"comment"},
     1, 18, 60,
     0, 60],
    [e[0], 60,
     2, 54, 60, {"name":"jsComment","token":"comment"},
     0, 58],
    [e[0], 61,
     "/", -1],
    ["\"", 63,
     "'", 64,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 63,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 64,
     "'", -1],
    ["'", 66],
    ["\\", 67,
     /^(?!\')./, 66,
     "'", -1],
    [/^[^]/, 66],
    [1, 73, 69,
     0, -1],
    [e[0], 69,
     2, 54, 69, {"name":"jsComment","token":"comment"},
     0, 70],
    [",", 71,
     0, -1],
    [e[0], 71,
     2, 54, 71, {"name":"jsComment","token":"comment"},
     1, 73, 72,
     0, 72],
    [e[0], 72,
     2, 54, 72, {"name":"jsComment","token":"comment"},
     0, 70],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])/, 74,
     0, 75],
    [e[0], 74,
     2, 54, 74, {"name":"jsComment","token":"comment"},
     [6, 81], 75],
    [e[0], 75,
     2, 54, 75, {"name":"jsComment","token":"comment"},
     3, "property", e[3], 76,
     "[", 77,
     3, "number", e[4], 76,
     2, 65, 76, {"name":"string","token":"string"},
     3, "operator", "...", 78],
    [e[0], 76,
     2, 54, 76, {"name":"jsComment","token":"comment"},
     ":", 79,
     0, -1],
    [e[0], 77,
     2, 54, 77, {"name":"jsComment","token":"comment"},
     1, 18, 80],
    [e[0], 78,
     2, 54, 78, {"name":"jsComment","token":"comment"},
     1, 18, -1],
    [e[0], 79,
     2, 54, 79, {"name":"jsComment","token":"comment"},
     1, 18, -1],
    [e[0], 80,
     2, 54, 80, {"name":"jsComment","token":"comment"},
     "]", 76],
    [" ", 82,
     /^[\,\}\:\(]/, -1],
    [e[0], 82,
     2, 54, 82, {"name":"jsComment","token":"comment"},
     0, 81]
  ];
  var start = 0;
  var token = 2;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function tagName(str) {
    var m = /^\s*([\w_\.-]+)/.exec(str);
    return m ? m[1].toLowerCase() : "x"
  }

  function cxTagName(cx) {
    return tagName(cx.startLine.slice(cx.startPos + 1))
  }

  var selfClosers = "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ");

  function selfClosing(_string, _pos, cx) {
    return selfClosers.indexOf(cxTagName(cx)) > -1
  }

  function matchingTag(string, pos, cx) {
    return tagName(string.slice(pos + 2)) == cxTagName(cx)
  }

  var predicates = {selfClosing: selfClosing, matchingTag: matchingTag};

  function indent(state, textAfter, line, config) {
    var cx = state.contextAt(line, line.length - textAfter.length);
    var closing = /^\s*<\/\s*([\w_\.-]+)/.exec(textAfter);
    while (cx) {
      if (cx.name == "tag") {
        var base = CodeMirror.countColumn(cx.startLine, null, config.tabSize);
        if (closing && closing[1].toLowerCase() == cxTagName(cx)) { return base }
        else { return base + config.indentUnit }
      } else if (cx.name == "openTag") {
        return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + 2 * config.indentUnit
      }
      cx = cx.parent;
    }
    return 0
  }

  var AngularTemplateMode = (function (superclass) {
    function AngularTemplateMode(conf, modeConf) {
      superclass.call(this, grammar, {predicates: predicates});
      this.conf = conf;
    }

    if ( superclass ) AngularTemplateMode.__proto__ = superclass;
    AngularTemplateMode.prototype = Object.create( superclass && superclass.prototype );
    AngularTemplateMode.prototype.constructor = AngularTemplateMode;

    AngularTemplateMode.prototype.indent = function indent$1 (state, textAfter, line) {
      return indent(state, textAfter, line, this.conf)
    };

    return AngularTemplateMode;
  }(CodeMirror$1.GrammarMode));

  var proto = AngularTemplateMode.prototype;
  proto.electricInput = /^\s*<\/.*?>/;
  proto.blockCommentStart = "<!--";
  proto.blockCommentEnd = "-->";
  proto.fold = "xml";

  CodeMirror$1.defineMode("google-angular-template", function (conf, modeConf) { return new AngularTemplateMode(conf, modeConf); });

})));
