(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
})(this, (function (CodeMirror$1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var CodeMirror__namespace = /*#__PURE__*/_interopNamespace(CodeMirror$1);

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
    [2, 14, 9, {"name":"openTag"}],
    [3, "tag", "/>", -1,
     [7, "selfClosing"], 10,
     3, "tag", ">", 11],
    [3, "tag", ">", -1],
    [1, 3, 11,
     /^(?=\<\/)/, 12],
    [[7, "matchingTag"], 13,
     0, -1],
    [2, 21, -1, {"name":"closeTag"}],
    [3, "tag", [0, "<", [6, 24]], 15],
    [e[0], 15,
     3, "tag", e[1], 16],
    [e[0], 16,
     0, 17],
    [3, "attribute", e[1], 18,
     0, -1],
    [e[0], 18,
     "=", 19,
     0, 20],
    [e[0], 19,
     2, 25, 20, {"name":"attributeValue","token":"string"}],
    [e[0], 20,
     0, 17],
    [3, "tag", "</", 22],
    [e[0], 22,
     3, "tag", e[1], 23],
    [3, "tag", ">", -1],
    [e[0], 24,
     "/", -1],
    ["\"", 26,
     "'", 27,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 26,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 27,
     "'", -1]
  ];
  var start = 0;
  var token = 2;

  var grammar = /*#__PURE__*/Object.freeze({
    __proto__: null,
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

  function contextInfo(proto) {
    proto.xmlCurrentTag = function (state) {
      var cx = state.context;
      if (!cx || (cx.name != "openTag" && cx.name != "closeTag")) { return null }
      var match = /^<\/?\s*([\w\-\.]+)/.exec(cx.startLine.slice(cx.startPos));
      return match ? {name: match[1], close: cx.name == "closeTag"} : null
    };
    proto.xmlCurrentContext = function (state) {
      var context = [];
      for (var cx = state.context; cx; cx = cx.parent) {
        if (cx.name == "tag") {
          var match = /^<\s*([\w\-\.]+)/.exec(cx.startLine.slice(cx.startPos));
          if (match) { context.push(match[1]); }
        }
      }
      return context.reverse()
    };
  }

  var HTMLMode = /*@__PURE__*/(function (superclass) {
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
  }(CodeMirror__namespace.GrammarMode));

  var proto = HTMLMode.prototype;
  proto.electricInput = /^\s*<\/.*?>/;
  proto.blockCommentStart = "<!--";
  proto.blockCommentEnd = "-->";
  proto.fold = "xml";
  contextInfo(proto);

  CodeMirror__namespace.defineMode("google-html", function (conf, modeConf) { return new HTMLMode(conf, modeConf); });

}));
