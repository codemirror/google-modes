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

  var e = [[1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^[a-zA-Z\-\.0-9_]+/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/];
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
    [1, 16, 5],
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
    [2, 48, -1, {"name":"closeTag"}],
    [1, 51, 17],
    [e[0], 17,
     2, 60, 17, {"name":"jsComment","token":"comment"},
     0, 18],
    [3, "operator", /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>(?:\=|\>\>?)?|\<[\=\<]?|\=(?:\=\=?)?|\&\&?|\|\|?|\^|\!\=\=?)/, 19,
     3, "keyword", /^(?:in|instanceof|of|as|else)(?![a-zA-Z¡-￿_0-9_\$])/, 19,
     "(", 20,
     /^(?:\?\.|\.)/, 21,
     "[", 22,
     3, "operator", "?", 23,
     ";", 24,
     0, -1],
    [e[0], 19,
     2, 60, 19, {"name":"jsComment","token":"comment"},
     1, 16, 25],
    [e[0], 20,
     2, 60, 20, {"name":"jsComment","token":"comment"},
     1, 62, 26],
    [e[0], 21,
     2, 60, 21, {"name":"jsComment","token":"comment"},
     3, "property callee", e[3], 25,
     3, "property", e[1], 25],
    [e[0], 22,
     2, 60, 22, {"name":"jsComment","token":"comment"},
     1, 16, 27],
    [e[0], 23,
     2, 60, 23, {"name":"jsComment","token":"comment"},
     1, 16, 28],
    [e[0], 24,
     2, 60, 24, {"name":"jsComment","token":"comment"},
     3, "keyword", /^(?:else|then)(?![a-zA-Z¡-￿_0-9_\$])/, 29,
     3, "property", e[1], 30,
     0, 25],
    [e[0], 25,
     2, 60, 25, {"name":"jsComment","token":"comment"},
     0, 18],
    [e[0], 26,
     2, 60, 26, {"name":"jsComment","token":"comment"},
     ")", 25],
    [e[0], 27,
     2, 60, 27, {"name":"jsComment","token":"comment"},
     "]", 25],
    [e[0], 28,
     2, 60, 28, {"name":"jsComment","token":"comment"},
     3, "operator", ":", 31],
    [e[0], 29,
     2, 60, 29, {"name":"jsComment","token":"comment"},
     1, 16, 25,
     0, 25],
    [e[0], 30,
     2, 60, 30, {"name":"jsComment","token":"comment"},
     3, "keyword", /^\:(?![a-zA-Z¡-￿_0-9_\$])/, 32],
    [e[0], 31,
     2, 60, 31, {"name":"jsComment","token":"comment"},
     1, 16, 25],
    [e[0], 32,
     2, 60, 32, {"name":"jsComment","token":"comment"},
     1, 16, 25],
    [3, "tag", [0, "<", [6, 67]], 34],
    [e[0], 34,
     3, "tag", e[2], 35],
    [e[0], 35,
     0, 36],
    [/^[\*\#]/, 37,
     /^[\[\(]+/, 38,
     3, "attribute", /^(?:bind|on)+\-[a-zA-Z\-\.0-9_]+/, 39,
     3, "attribute", e[2], 40,
     0, -1],
    [e[0], 37,
     3, "attribute", e[2], 39],
    [e[0], 38,
     3, "attribute", e[2], 41],
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
     2, 68, 44, {"name":"attributeValue","token":"string"}],
    [e[0], 44,
     0, 36],
    [1, 16, 46],
    [3, "string", "\"", 47],
    [e[0], 47,
     0, 36],
    [3, "tag", "</", 49],
    [e[0], 49,
     3, "tag", e[2], 50],
    [3, "tag", ">", -1],
    [3, "atom", /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^(?:let|const|var)(?![a-zA-Z¡-￿_0-9_\$])/, 52,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 53,
     3, "operator", /^[\!\-]/, 53,
     3, "variable callee", e[3], -1,
     3, "variable", e[1], -1,
     3, "number", e[4], -1,
     2, 71, -1, {"name":"string","token":"string"},
     3, "string-2", /^\/(?![\/\*])(?:\\.|.)+\//, -1,
     "[", 54,
     "{", 56,
     "(", 58],
    [e[0], 52,
     2, 60, 52, {"name":"jsComment","token":"comment"},
     1, 51, -1],
    [e[0], 53,
     2, 60, 53, {"name":"jsComment","token":"comment"},
     1, 51, -1],
    [e[0], 54,
     2, 60, 54, {"name":"jsComment","token":"comment"},
     1, 62, 55],
    [e[0], 55,
     2, 60, 55, {"name":"jsComment","token":"comment"},
     "]", -1],
    [e[0], 56,
     2, 60, 56, {"name":"jsComment","token":"comment"},
     1, 74, 57],
    [e[0], 57,
     2, 60, 57, {"name":"jsComment","token":"comment"},
     "}", -1],
    [e[0], 58,
     2, 60, 58, {"name":"jsComment","token":"comment"},
     1, 16, 59],
    [e[0], 59,
     2, 60, 59, {"name":"jsComment","token":"comment"},
     ")", -1],
    ["/*", 61,
     /^\/\/.*/, -1],
    [[0, /^(?!\*\/)/, /^[^]/], 61,
     "*/", -1],
    [1, 16, 63,
     0, -1],
    [e[0], 63,
     2, 60, 63, {"name":"jsComment","token":"comment"},
     0, 64],
    [",", 65,
     0, -1],
    [e[0], 65,
     2, 60, 65, {"name":"jsComment","token":"comment"},
     1, 16, 66,
     0, 66],
    [e[0], 66,
     2, 60, 66, {"name":"jsComment","token":"comment"},
     0, 64],
    [e[0], 67,
     "/", -1],
    ["\"", 69,
     "'", 70,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 69,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 70,
     "'", -1],
    ["'", 72],
    ["\\", 73,
     /^(?!\')./, 72,
     "'", -1],
    [/^[^]/, 72],
    [1, 79, 75,
     0, -1],
    [e[0], 75,
     2, 60, 75, {"name":"jsComment","token":"comment"},
     0, 76],
    [",", 77,
     0, -1],
    [e[0], 77,
     2, 60, 77, {"name":"jsComment","token":"comment"},
     1, 79, 78,
     0, 78],
    [e[0], 78,
     2, 60, 78, {"name":"jsComment","token":"comment"},
     0, 76],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])/, 80,
     0, 81],
    [e[0], 80,
     2, 60, 80, {"name":"jsComment","token":"comment"},
     [6, 87], 81],
    [e[0], 81,
     2, 60, 81, {"name":"jsComment","token":"comment"},
     3, "property", e[1], 82,
     "[", 83,
     3, "number", e[4], 82,
     2, 71, 82, {"name":"string","token":"string"},
     3, "operator", "...", 84],
    [e[0], 82,
     2, 60, 82, {"name":"jsComment","token":"comment"},
     ":", 85,
     0, -1],
    [e[0], 83,
     2, 60, 83, {"name":"jsComment","token":"comment"},
     1, 16, 86],
    [e[0], 84,
     2, 60, 84, {"name":"jsComment","token":"comment"},
     1, 16, -1],
    [e[0], 85,
     2, 60, 85, {"name":"jsComment","token":"comment"},
     1, 16, -1],
    [e[0], 86,
     2, 60, 86, {"name":"jsComment","token":"comment"},
     "]", 82],
    [" ", 88,
     /^[\,\}\:\(]/, -1],
    [e[0], 88,
     2, 60, 88, {"name":"jsComment","token":"comment"},
     0, 87]
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

  var AngularTemplateMode = /*@__PURE__*/(function (superclass) {
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
  }(CodeMirror__namespace.GrammarMode));

  var proto = AngularTemplateMode.prototype;
  proto.electricInput = /^\s*<\/.*?>/;
  proto.blockCommentStart = "<!--";
  proto.blockCommentEnd = "-->";
  proto.fold = "xml";
  contextInfo(proto);

  CodeMirror__namespace.defineMode("google-angular-template", function (conf, modeConf) { return new AngularTemplateMode(conf, modeConf); });

}));
