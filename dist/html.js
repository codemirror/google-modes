(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

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
  [3, "tag", [0, "<", [6, 21]], 9],
  [e[0], 9,
   3, "tag", e[1], 10],
  [e[0], 10,
   0, 11],
  [3, "attribute", e[1], 12,
   3, "tag", "/>", -1,
   [7, "selfClosing"], 15,
   3, "tag", ">", 16],
  [e[0], 12,
   "=", 13,
   0, 14],
  [e[0], 13,
   2, 22, 14, {"name":"attributeValue","token":"string"}],
  [e[0], 14,
   0, 11],
  [3, "tag", ">", -1],
  [1, 3, 16,
   /^(?=\<\/)/, 17],
  [[7, "matchingTag"], 18,
   0, -1],
  [3, "tag", "</", 19],
  [e[0], 19,
   3, "tag", e[1], 20],
  [3, "tag", ">", -1],
  [e[0], 21,
   "/", -1],
  ["\"", 23,
   "'", 24,
   /^(?:(?![\n\t \>]).)*/, -1],
  [[0, /^(?!\")/, /^[^]/], 23,
   "\"", -1],
  [[0, /^(?!\')/, /^[^]/], 24,
   "'", -1]
];
var start = 0;
var token = 2;


var grammar = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function tagName(str) {
  var m = /\s*([\w_\.-]+)/.exec(str);
  return m ? m[1].toLowerCase() : "x"
}

function cxTagName(cx) {
  return tagName(cx.startLine.slice(cx.startPos + 1))
}

var selfClosers = "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ");

function selfClosing(_string, _pos, cx) {
  return selfClosers.indexOf(tagName(cx)) > -1
}

function matchingTag(string, pos, cx) {
  return tagName(string.slice(pos + 2)) == cxTagName(cx)
}

var HTMLMode = (function (superclass) {
  function HTMLMode(conf, modeConf) {
    superclass.call(this, grammar, {predicates: {selfClosing: selfClosing, matchingTag: matchingTag}});
    this.conf = conf;
  }

  if ( superclass ) HTMLMode.__proto__ = superclass;
  HTMLMode.prototype = Object.create( superclass && superclass.prototype );
  HTMLMode.prototype.constructor = HTMLMode;

  HTMLMode.prototype.indent = function indent (state, textAfter, line) {
    return 0 // FIXME
  };

  return HTMLMode;
}(CodeMirror.GrammarMode));

var proto = HTMLMode.prototype;
proto.electricInput = /^\s*<\//,
proto.blockCommentStart = "<!--",
proto.blockCommentEnd = "-->",
proto.fold = "xml";

CodeMirror.defineMode("google-html", function (conf, modeConf) { return new HTMLMode(conf, modeConf); });

})));
