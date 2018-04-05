(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror$1) { 'use strict';

  var e = [[1, "\n", "\t", " "], /^[a-zA-Z\-\.0-9_]+/];
  var nodes = [
    [1, 3, 0,
     0, 1],
    [/^[^]/, 0],
    [/^[^]/, -1],
    [2, 4, -1, {"name":"comment","token":"comment"},
     2, 6, -1, {"name":"doctype","token":"meta"},
     2, 8, -1, {"name":"tag"},
     3, "atom", /^\&(?:(?![\;\n\t ]).)*\;/, -1,
     [1, "\n", /^(?:(?![\&\<]).)+/], -1],
    ["<!--", 5],
    [[0, /^(?!\-\-\>)/, /^[^]/], 5,
     "-->", -1],
    [/^(?:\<\!doctype|\<\!DOCTYPE)(?![a-zA-Z\-\.0-9_])/, 7],
    [[0, /^(?!\>)/, /^[^]/], 7,
     ">", -1],
    [2, 16, 9, {"name":"openTag"}],
    [3, "tag", "/>", -1,
     [7, "selfClosing"], 10,
     3, "tag", ">", 11],
    [3, "tag", ">", -1],
    [1, 3, 11,
     /^(?=\<\/)/, 12],
    [[7, "matchingTag"], 13,
     0, -1],
    [3, "tag", "</", 14],
    [e[0], 14,
     3, "tag", e[1], 15],
    [3, "tag", ">", -1],
    [3, "tag", [0, "<", [6, 23]], 17],
    [e[0], 17,
     3, "tag", e[1], 18],
    [e[0], 18,
     0, 19],
    [3, "attribute", e[1], 20,
     0, -1],
    [e[0], 20,
     "=", 21,
     0, 22],
    [e[0], 21,
     2, 24, 22, {"name":"attributeValue","token":"string"}],
    [e[0], 22,
     0, 19],
    [e[0], 23,
     "/", -1],
    ["\"", 25,
     "'", 26,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 25,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 26,
     "'", -1]
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

  var HTMLMode = (function (superclass) {
    function HTMLMode(conf, modeConf) {
      superclass.call(this, grammar, {predicates: predicates});
      this.conf = conf;
    }

    if ( superclass ) HTMLMode.__proto__ = superclass;
    HTMLMode.prototype = Object.create( superclass && superclass.prototype );
    HTMLMode.prototype.constructor = HTMLMode;

    HTMLMode.prototype.indent = function indent$1 (state, textAfter, line) {
      return indent(state, textAfter, line, this.conf)
    };

    return HTMLMode;
  }(CodeMirror$1.GrammarMode));

  var proto = HTMLMode.prototype;
  proto.electricInput = /^\s*<\/.*?>/;
  proto.blockCommentStart = "<!--";
  proto.blockCommentEnd = "-->";
  proto.fold = "xml";

  CodeMirror$1.defineMode("google-html", function (conf, modeConf) { return new HTMLMode(conf, modeConf); });

})));
