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
    [2, 33, 11, {"name":"openTag"}],
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
    [1, 48, 19],
    [e[0], 19,
     2, 57, 19, {"name":"jsComment","token":"comment"},
     0, 20],
    [3, "operator", /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>(?:\=|\>\>?)?|\<[\=\<]?|\=(?:\=\=?)?|\&\&?|\|\|?|\^|\!\=\=?)/, 21,
     3, "keyword", /^(?:in|instanceof|of|as|else)(?![a-zA-Z¡-￿_0-9_\$])/, 21,
     "(", 22,
     /^(?:\?\.|\.)/, 23,
     "[", 24,
     3, "operator", "?", 25,
     ";", 26,
     0, -1],
    [e[0], 21,
     2, 57, 21, {"name":"jsComment","token":"comment"},
     1, 18, 27],
    [e[0], 22,
     2, 57, 22, {"name":"jsComment","token":"comment"},
     1, 59, 28],
    [e[0], 23,
     2, 57, 23, {"name":"jsComment","token":"comment"},
     3, "property callee", e[2], 27,
     3, "property", e[3], 27],
    [e[0], 24,
     2, 57, 24, {"name":"jsComment","token":"comment"},
     1, 18, 29],
    [e[0], 25,
     2, 57, 25, {"name":"jsComment","token":"comment"},
     1, 18, 30],
    [e[0], 26,
     2, 57, 26, {"name":"jsComment","token":"comment"},
     3, "keyword", /^(?:else|then)(?![a-zA-Z¡-￿_0-9_\$])/, 31,
     0, 31],
    [e[0], 27,
     2, 57, 27, {"name":"jsComment","token":"comment"},
     0, 20],
    [e[0], 28,
     2, 57, 28, {"name":"jsComment","token":"comment"},
     ")", 27],
    [e[0], 29,
     2, 57, 29, {"name":"jsComment","token":"comment"},
     "]", 27],
    [e[0], 30,
     2, 57, 30, {"name":"jsComment","token":"comment"},
     3, "operator", ":", 32],
    [e[0], 31,
     2, 57, 31, {"name":"jsComment","token":"comment"},
     1, 18, 27,
     0, 27],
    [e[0], 32,
     2, 57, 32, {"name":"jsComment","token":"comment"},
     1, 18, 27],
    [3, "tag", [0, "<", [6, 64]], 34],
    [e[0], 34,
     3, "tag", e[1], 35],
    [e[0], 35,
     0, 36],
    [/^[\*\#]/, 37,
     /^[\[\(]+/, 38,
     3, "attribute", /^(?:bind|on)+\-[a-zA-Z\-\.0-9_]+/, 39,
     3, "attribute", e[1], 40,
     0, -1],
    [e[0], 37,
     3, "attribute", e[1], 39],
    [e[0], 38,
     3, "attribute", e[1], 41],
    [e[0], 39,
     "=", 42,
     0, 36],
    [e[0], 40,
     "=", 43,
     0, 44],
    [e[0], 41,
     /^[\]\)]+/, 39],
    [e[0], 42,
     3, "string", "\"", 45],
    [e[0], 43,
     2, 65, 44, {"name":"attributeValue","token":"string"}],
    [e[0], 44,
     0, 36],
    [1, 18, 46],
    [3, "string", "\"", 47],
    [e[0], 47,
     0, 36],
    [3, "atom", /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^(?:let|const|var)(?![a-zA-Z¡-￿_0-9_\$])/, 49,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 50,
     3, "operator", /^[\!\-]/, 50,
     3, "variable callee", e[2], -1,
     3, "variable", e[3], -1,
     3, "number", e[4], -1,
     2, 68, -1, {"name":"string","token":"string"},
     3, "string-2", /^\/(?![\/\*])(?:\\.|.)+\//, -1,
     "[", 51,
     "{", 53,
     "(", 55],
    [e[0], 49,
     2, 57, 49, {"name":"jsComment","token":"comment"},
     1, 48, -1],
    [e[0], 50,
     2, 57, 50, {"name":"jsComment","token":"comment"},
     1, 48, -1],
    [e[0], 51,
     2, 57, 51, {"name":"jsComment","token":"comment"},
     1, 59, 52],
    [e[0], 52,
     2, 57, 52, {"name":"jsComment","token":"comment"},
     "]", -1],
    [e[0], 53,
     2, 57, 53, {"name":"jsComment","token":"comment"},
     1, 71, 54],
    [e[0], 54,
     2, 57, 54, {"name":"jsComment","token":"comment"},
     "}", -1],
    [e[0], 55,
     2, 57, 55, {"name":"jsComment","token":"comment"},
     1, 18, 56],
    [e[0], 56,
     2, 57, 56, {"name":"jsComment","token":"comment"},
     ")", -1],
    ["/*", 58,
     /^\/\/.*/, -1],
    [[0, /^(?!\*\/)/, /^[^]/], 58,
     "*/", -1],
    [1, 18, 60,
     0, -1],
    [e[0], 60,
     2, 57, 60, {"name":"jsComment","token":"comment"},
     0, 61],
    [",", 62,
     0, -1],
    [e[0], 62,
     2, 57, 62, {"name":"jsComment","token":"comment"},
     1, 18, 63,
     0, 63],
    [e[0], 63,
     2, 57, 63, {"name":"jsComment","token":"comment"},
     0, 61],
    [e[0], 64,
     "/", -1],
    ["\"", 66,
     "'", 67,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 66,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 67,
     "'", -1],
    ["'", 69],
    ["\\", 70,
     /^(?!\')./, 69,
     "'", -1],
    [/^[^]/, 69],
    [1, 76, 72,
     0, -1],
    [e[0], 72,
     2, 57, 72, {"name":"jsComment","token":"comment"},
     0, 73],
    [",", 74,
     0, -1],
    [e[0], 74,
     2, 57, 74, {"name":"jsComment","token":"comment"},
     1, 76, 75,
     0, 75],
    [e[0], 75,
     2, 57, 75, {"name":"jsComment","token":"comment"},
     0, 73],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])/, 77,
     0, 78],
    [e[0], 77,
     2, 57, 77, {"name":"jsComment","token":"comment"},
     [6, 84], 78],
    [e[0], 78,
     2, 57, 78, {"name":"jsComment","token":"comment"},
     3, "property", e[3], 79,
     "[", 80,
     3, "number", e[4], 79,
     2, 68, 79, {"name":"string","token":"string"},
     3, "operator", "...", 81],
    [e[0], 79,
     2, 57, 79, {"name":"jsComment","token":"comment"},
     ":", 82,
     0, -1],
    [e[0], 80,
     2, 57, 80, {"name":"jsComment","token":"comment"},
     1, 18, 83],
    [e[0], 81,
     2, 57, 81, {"name":"jsComment","token":"comment"},
     1, 18, -1],
    [e[0], 82,
     2, 57, 82, {"name":"jsComment","token":"comment"},
     1, 18, -1],
    [e[0], 83,
     2, 57, 83, {"name":"jsComment","token":"comment"},
     "]", 79],
    [" ", 85,
     /^[\,\}\:\(]/, -1],
    [e[0], 85,
     2, 57, 85, {"name":"jsComment","token":"comment"},
     0, 84]
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
