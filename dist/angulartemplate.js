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
    [1, 16, 5],
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
    [2, 46, -1, {"name":"closeTag"}],
    [1, 49, 17],
    [e[0], 17,
     2, 58, 17, {"name":"jsComment","token":"comment"},
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
     2, 58, 19, {"name":"jsComment","token":"comment"},
     1, 16, 25],
    [e[0], 20,
     2, 58, 20, {"name":"jsComment","token":"comment"},
     1, 60, 26],
    [e[0], 21,
     2, 58, 21, {"name":"jsComment","token":"comment"},
     3, "property callee", e[2], 25,
     3, "property", e[3], 25],
    [e[0], 22,
     2, 58, 22, {"name":"jsComment","token":"comment"},
     1, 16, 27],
    [e[0], 23,
     2, 58, 23, {"name":"jsComment","token":"comment"},
     1, 16, 28],
    [e[0], 24,
     2, 58, 24, {"name":"jsComment","token":"comment"},
     3, "keyword", /^(?:else|then)(?![a-zA-Z¡-￿_0-9_\$])/, 29,
     0, 29],
    [e[0], 25,
     2, 58, 25, {"name":"jsComment","token":"comment"},
     0, 18],
    [e[0], 26,
     2, 58, 26, {"name":"jsComment","token":"comment"},
     ")", 25],
    [e[0], 27,
     2, 58, 27, {"name":"jsComment","token":"comment"},
     "]", 25],
    [e[0], 28,
     2, 58, 28, {"name":"jsComment","token":"comment"},
     3, "operator", ":", 30],
    [e[0], 29,
     2, 58, 29, {"name":"jsComment","token":"comment"},
     1, 16, 25,
     0, 25],
    [e[0], 30,
     2, 58, 30, {"name":"jsComment","token":"comment"},
     1, 16, 25],
    [3, "tag", [0, "<", [6, 65]], 32],
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
     2, 66, 42, {"name":"attributeValue","token":"string"}],
    [e[0], 42,
     0, 34],
    [1, 16, 44],
    [3, "string", "\"", 45],
    [e[0], 45,
     0, 34],
    [3, "tag", "</", 47],
    [e[0], 47,
     3, "tag", e[1], 48],
    [3, "tag", ">", -1],
    [3, "atom", /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", /^(?:let|const|var)(?![a-zA-Z¡-￿_0-9_\$])/, 50,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 51,
     3, "operator", /^[\!\-]/, 51,
     3, "variable callee", e[2], -1,
     3, "variable", e[3], -1,
     3, "number", e[4], -1,
     2, 69, -1, {"name":"string","token":"string"},
     3, "string-2", /^\/(?![\/\*])(?:\\.|.)+\//, -1,
     "[", 52,
     "{", 54,
     "(", 56],
    [e[0], 50,
     2, 58, 50, {"name":"jsComment","token":"comment"},
     1, 49, -1],
    [e[0], 51,
     2, 58, 51, {"name":"jsComment","token":"comment"},
     1, 49, -1],
    [e[0], 52,
     2, 58, 52, {"name":"jsComment","token":"comment"},
     1, 60, 53],
    [e[0], 53,
     2, 58, 53, {"name":"jsComment","token":"comment"},
     "]", -1],
    [e[0], 54,
     2, 58, 54, {"name":"jsComment","token":"comment"},
     1, 72, 55],
    [e[0], 55,
     2, 58, 55, {"name":"jsComment","token":"comment"},
     "}", -1],
    [e[0], 56,
     2, 58, 56, {"name":"jsComment","token":"comment"},
     1, 16, 57],
    [e[0], 57,
     2, 58, 57, {"name":"jsComment","token":"comment"},
     ")", -1],
    ["/*", 59,
     /^\/\/.*/, -1],
    [[0, /^(?!\*\/)/, /^[^]/], 59,
     "*/", -1],
    [1, 16, 61,
     0, -1],
    [e[0], 61,
     2, 58, 61, {"name":"jsComment","token":"comment"},
     0, 62],
    [",", 63,
     0, -1],
    [e[0], 63,
     2, 58, 63, {"name":"jsComment","token":"comment"},
     1, 16, 64,
     0, 64],
    [e[0], 64,
     2, 58, 64, {"name":"jsComment","token":"comment"},
     0, 62],
    [e[0], 65,
     "/", -1],
    ["\"", 67,
     "'", 68,
     /^(?:(?![\n\t \>]).)*/, -1],
    [[0, /^(?!\")/, /^[^]/], 67,
     "\"", -1],
    [[0, /^(?!\')/, /^[^]/], 68,
     "'", -1],
    ["'", 70],
    ["\\", 71,
     /^(?!\')./, 70,
     "'", -1],
    [/^[^]/, 70],
    [1, 77, 73,
     0, -1],
    [e[0], 73,
     2, 58, 73, {"name":"jsComment","token":"comment"},
     0, 74],
    [",", 75,
     0, -1],
    [e[0], 75,
     2, 58, 75, {"name":"jsComment","token":"comment"},
     1, 77, 76,
     0, 76],
    [e[0], 76,
     2, 58, 76, {"name":"jsComment","token":"comment"},
     0, 74],
    [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])/, 78,
     0, 79],
    [e[0], 78,
     2, 58, 78, {"name":"jsComment","token":"comment"},
     [6, 85], 79],
    [e[0], 79,
     2, 58, 79, {"name":"jsComment","token":"comment"},
     3, "property", e[3], 80,
     "[", 81,
     3, "number", e[4], 80,
     2, 69, 80, {"name":"string","token":"string"},
     3, "operator", "...", 82],
    [e[0], 80,
     2, 58, 80, {"name":"jsComment","token":"comment"},
     ":", 83,
     0, -1],
    [e[0], 81,
     2, 58, 81, {"name":"jsComment","token":"comment"},
     1, 16, 84],
    [e[0], 82,
     2, 58, 82, {"name":"jsComment","token":"comment"},
     1, 16, -1],
    [e[0], 83,
     2, 58, 83, {"name":"jsComment","token":"comment"},
     1, 16, -1],
    [e[0], 84,
     2, 58, 84, {"name":"jsComment","token":"comment"},
     "]", 80],
    [" ", 86,
     /^[\,\}\:\(]/, -1],
    [e[0], 86,
     2, 58, 86, {"name":"jsComment","token":"comment"},
     0, 85]
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
  contextInfo(proto);

  CodeMirror$1.defineMode("google-angular-template", function (conf, modeConf) { return new AngularTemplateMode(conf, modeConf); });

})));
