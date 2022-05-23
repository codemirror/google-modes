(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
})(this, (function (CodeMirror) { 'use strict';

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

  var CodeMirror__namespace = /*#__PURE__*/_interopNamespace(CodeMirror);

  var nodes = {
    "_start": [
      1, "whitespace", "_start$2"
    ],
    "_start$1": [
      /^[^]/, "_start"
    ],
    "_start$2": [
      1, "whitespace", "_start$3"
    ],
    "_start$3": [
      "\n", "_start$4",
      2, "Statement", "_start$4", {"name":"Statement"},
      0, "_start$1"
    ],
    "_start$4": [
      1, "whitespace", "_start$3"
    ],
    "_token": [
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^for(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^async(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^def(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^except(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^class(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^with(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^lambda(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^del(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^yield(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^raise(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^from(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "atom", /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "atom", /^self(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "builtin", /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "builtin", /^print(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "operator", /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, -1,
      3, "operator", /^[\*\+\-\~]/, -1,
      3, "number", /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, -1,
      2, "string", -1, {"name":"string","token":"string"},
      1, "fstring", -1,
      3, "variable", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, -1,
      3, "comment", /^\#.*/, -1,
      /^[^]/, -1
    ],
    "whitespace": [
      /^[ \t]/, "whitespace",
      3, "comment", /^\#.*/, "whitespace",
      "\\", "whitespace$1",
      [0, /^(?=\n)/, [7, "maySkipNewline"]], "whitespace$2",
      0, -1
    ],
    "whitespace$1": [
      "\n", "whitespace"
    ],
    "whitespace$2": [
      "\n", "whitespace"
    ],
    "Statement": [
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, "Statement$1",
      3, "keyword", /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, "Statement$1",
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9_])/, "Statement$7",
      3, "keyword", /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, "Statement$7",
      3, "keyword", /^for(?![a-zA-Z¡-￿_0-9_])/, "Statement$11",
      3, "keyword", /^except(?![a-zA-Z¡-￿_0-9_])/, "Statement$21",
      3, "keyword", /^async(?![a-zA-Z¡-￿_0-9_])/, "Statement$31",
      1, "AsyncStatement", -1,
      2, "Annotation", "Statement$33", {"name":"Annotation","token":"meta"},
      3, "builtin", /^print(?![a-zA-Z¡-￿_0-9_])/, "Statement$37",
      1, "SmallStatement", "Statement$39"
    ],
    "Statement$1": [
      1, "whitespace", "Statement$2"
    ],
    "Statement$2": [
      1, "Expr", "Statement$3"
    ],
    "Statement$3": [
      1, "whitespace", "Statement$4"
    ],
    "Statement$4": [
      ":", "Statement$5"
    ],
    "Statement$5": [
      1, "whitespace", "Statement$6"
    ],
    "Statement$6": [
      1, "Body", -1
    ],
    "Statement$7": [
      1, "whitespace", "Statement$8"
    ],
    "Statement$8": [
      ":", "Statement$9"
    ],
    "Statement$9": [
      1, "whitespace", "Statement$10"
    ],
    "Statement$10": [
      1, "Body", -1
    ],
    "Statement$11": [
      1, "whitespace", "Statement$12"
    ],
    "Statement$12": [
      1, "CommaSep_9", "Statement$13"
    ],
    "Statement$13": [
      1, "whitespace", "Statement$14"
    ],
    "Statement$14": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, "Statement$15"
    ],
    "Statement$15": [
      1, "whitespace", "Statement$16"
    ],
    "Statement$16": [
      1, "Expr", "Statement$17"
    ],
    "Statement$17": [
      1, "whitespace", "Statement$18"
    ],
    "Statement$18": [
      ":", "Statement$19"
    ],
    "Statement$19": [
      1, "whitespace", "Statement$20"
    ],
    "Statement$20": [
      1, "Body", -1
    ],
    "Statement$21": [
      1, "whitespace", "Statement$22"
    ],
    "Statement$22": [
      1, "Expr", "Statement$23",
      0, "Statement$24"
    ],
    "Statement$23": [
      1, "whitespace", "Statement$25"
    ],
    "Statement$24": [
      1, "whitespace", "Statement$26"
    ],
    "Statement$25": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "Statement$27",
      0, "Statement$24"
    ],
    "Statement$26": [
      ":", "Statement$28"
    ],
    "Statement$27": [
      1, "whitespace", "Statement$29"
    ],
    "Statement$28": [
      1, "whitespace", "Statement$30"
    ],
    "Statement$29": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "Statement$24"
    ],
    "Statement$30": [
      1, "Body", -1
    ],
    "Statement$31": [
      1, "whitespace", "Statement$32"
    ],
    "Statement$32": [
      1, "AsyncStatement", -1
    ],
    "Statement$33": [
      1, "whitespace", "Statement$34"
    ],
    "Statement$34": [
      2, "ArgList", "Statement$35", {"name":"ArgList"},
      0, "Statement$35"
    ],
    "Statement$35": [
      1, "whitespace", "Statement$36"
    ],
    "Statement$36": [
      "\n", -1
    ],
    "Statement$37": [
      1, "whitespace", "Statement$38"
    ],
    "Statement$38": [
      2, "ArgList", -1, {"name":"ArgList"},
      1, "Expr", -1
    ],
    "Statement$39": [
      1, "whitespace", "Statement$40"
    ],
    "Statement$40": [
      ";", "Statement$41",
      "\n", -1
    ],
    "Statement$41": [
      1, "whitespace", "Statement$42"
    ],
    "Statement$42": [
      1, "SmallStatement", "Statement$43",
      0, "Statement$43"
    ],
    "Statement$43": [
      1, "whitespace", "Statement$40"
    ],
    "string": [
      /^[uUrRbB]+(?=[\'\"])/, "string$1",
      1, "stringQuoted", -1
    ],
    "string$1": [
      1, "stringQuoted", -1
    ],
    "fstring": [
      3, "string", /^[uUrR]*[fF][uUrR]*(?=[\'\"])/, "fstring$1"
    ],
    "fstring$1": [
      3, "string", "'''", "fstring$2",
      3, "string", "\"\"\"", "fstring$3",
      3, "string", "'", "fstring$4",
      3, "string", "\"", "fstring$5"
    ],
    "fstring$2": [
      /^(?!\'\'\')/, "fstring$6",
      3, "string", "{{", "fstring$2",
      3, "string", "}}", "fstring$2",
      1, "replacementField", "fstring$2",
      3, "string", "'''", -1
    ],
    "fstring$3": [
      /^(?!\"\"\")/, "fstring$7",
      3, "string", "{{", "fstring$3",
      3, "string", "}}", "fstring$3",
      1, "replacementField", "fstring$3",
      3, "string", "\"\"\"", -1
    ],
    "fstring$4": [
      3, "string", "\\", "fstring$8",
      /^(?!\')/, "fstring$9",
      3, "string", "{{", "fstring$4",
      3, "string", "}}", "fstring$4",
      1, "replacementField", "fstring$4",
      3, "string", "'", -1
    ],
    "fstring$5": [
      3, "string", "\\", "fstring$10",
      /^(?!\")/, "fstring$11",
      3, "string", "{{", "fstring$5",
      3, "string", "}}", "fstring$5",
      1, "replacementField", "fstring$5",
      3, "string", "\"", -1
    ],
    "fstring$6": [
      3, "string", [0, /^(?![\{\}])/, /^[^]/], "fstring$2"
    ],
    "fstring$7": [
      3, "string", [0, /^(?![\{\}])/, /^[^]/], "fstring$3"
    ],
    "fstring$8": [
      3, "string", [0, /^(?![\{\}])/, /^[^]/], "fstring$4"
    ],
    "fstring$9": [
      3, "string", /^(?![\{\}])./, "fstring$4"
    ],
    "fstring$10": [
      3, "string", [0, /^(?![\{\}])/, /^[^]/], "fstring$5"
    ],
    "fstring$11": [
      3, "string", /^(?![\{\}])./, "fstring$5"
    ],
    "AsyncStatement": [
      3, "keyword", /^with(?![a-zA-Z¡-￿_0-9_])/, "AsyncStatement$1",
      3, "keyword", /^def(?![a-zA-Z¡-￿_0-9_])/, "AsyncStatement$7",
      3, "keyword", /^class(?![a-zA-Z¡-￿_0-9_])/, "AsyncStatement$11"
    ],
    "AsyncStatement$1": [
      1, "whitespace", "AsyncStatement$2"
    ],
    "AsyncStatement$2": [
      1, "CommaSep_10", "AsyncStatement$3"
    ],
    "AsyncStatement$3": [
      1, "whitespace", "AsyncStatement$4"
    ],
    "AsyncStatement$4": [
      ":", "AsyncStatement$5"
    ],
    "AsyncStatement$5": [
      1, "whitespace", "AsyncStatement$6"
    ],
    "AsyncStatement$6": [
      1, "Body", -1
    ],
    "AsyncStatement$7": [
      1, "whitespace", "AsyncStatement$8"
    ],
    "AsyncStatement$8": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "AsyncStatement$9"
    ],
    "AsyncStatement$9": [
      1, "whitespace", "AsyncStatement$10"
    ],
    "AsyncStatement$10": [
      2, "FuncDef", -1, {"name":"FuncDef"}
    ],
    "AsyncStatement$11": [
      1, "whitespace", "AsyncStatement$12"
    ],
    "AsyncStatement$12": [
      2, "ClassDef", -1, {"name":"ClassDef"}
    ],
    "Annotation": [
      "@", "Annotation$1"
    ],
    "Annotation$1": [
      1, "whitespace", "Annotation$2"
    ],
    "Annotation$2": [
      /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "Annotation$3"
    ],
    "Annotation$3": [
      1, "whitespace", "Annotation$4"
    ],
    "Annotation$4": [
      ".", "Annotation$5",
      0, -1
    ],
    "Annotation$5": [
      1, "whitespace", "Annotation$6"
    ],
    "Annotation$6": [
      /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "Annotation$7"
    ],
    "Annotation$7": [
      1, "whitespace", "Annotation$4"
    ],
    "SmallStatement": [
      3, "keyword", /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^del(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$1",
      3, "keyword", /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$3",
      3, "keyword", /^raise(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$5",
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$11",
      3, "keyword", /^from(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$13",
      3, "keyword", /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$21",
      [5, "_lookahead_4"], "SmallStatement$23",
      1, "Expr", -1
    ],
    "SmallStatement$1": [
      1, "whitespace", "SmallStatement$2"
    ],
    "SmallStatement$2": [
      1, "Expr", -1
    ],
    "SmallStatement$3": [
      1, "whitespace", "SmallStatement$4"
    ],
    "SmallStatement$4": [
      1, "Expr", -1,
      0, -1
    ],
    "SmallStatement$5": [
      1, "whitespace", "SmallStatement$6"
    ],
    "SmallStatement$6": [
      1, "Expr", "SmallStatement$7",
      0, "SmallStatement$7"
    ],
    "SmallStatement$7": [
      1, "whitespace", "SmallStatement$8"
    ],
    "SmallStatement$8": [
      3, "keyword", /^from(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$9",
      0, -1
    ],
    "SmallStatement$9": [
      1, "whitespace", "SmallStatement$10"
    ],
    "SmallStatement$10": [
      1, "Expr", -1
    ],
    "SmallStatement$11": [
      1, "whitespace", "SmallStatement$12"
    ],
    "SmallStatement$12": [
      1, "CommaSep_6", -1
    ],
    "SmallStatement$13": [
      1, "whitespace", "SmallStatement$14"
    ],
    "SmallStatement$14": [
      ".", "SmallStatement$15",
      [6, "_lookahead_3"], "SmallStatement$16",
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$17"
    ],
    "SmallStatement$15": [
      1, "whitespace", "SmallStatement$14"
    ],
    "SmallStatement$16": [
      1, "Expr", "SmallStatement$18"
    ],
    "SmallStatement$17": [
      1, "whitespace", "SmallStatement$19"
    ],
    "SmallStatement$18": [
      1, "whitespace", "SmallStatement$20"
    ],
    "SmallStatement$19": [
      "*", -1,
      2, "FromImportList", -1, {"name":"FromImportList"},
      1, "CommaSep_7", -1
    ],
    "SmallStatement$20": [
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9_])/, "SmallStatement$17"
    ],
    "SmallStatement$21": [
      1, "whitespace", "SmallStatement$22"
    ],
    "SmallStatement$22": [
      1, "CommaSep_8", -1
    ],
    "SmallStatement$23": [
      1, "Pattern", "SmallStatement$24"
    ],
    "SmallStatement$24": [
      1, "whitespace", "SmallStatement$25"
    ],
    "SmallStatement$25": [
      ":", "SmallStatement$26",
      0, "SmallStatement$27"
    ],
    "SmallStatement$26": [
      1, "whitespace", "SmallStatement$28"
    ],
    "SmallStatement$27": [
      1, "whitespace", "SmallStatement$29"
    ],
    "SmallStatement$28": [
      1, "Expr", "SmallStatement$27"
    ],
    "SmallStatement$29": [
      3, "operator", "=", "SmallStatement$30",
      0, -1
    ],
    "SmallStatement$30": [
      1, "whitespace", "SmallStatement$31"
    ],
    "SmallStatement$31": [
      1, "Expr", -1
    ],
    "Expr": [
      3, "operator", /^[\*\+\-\~]/, "Expr$1",
      3, "keyword", /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, "Expr$1",
      1, "BaseExpr", "Expr$2"
    ],
    "Expr$1": [
      1, "whitespace", "Expr"
    ],
    "Expr$2": [
      1, "whitespace", "Expr$3"
    ],
    "Expr$3": [
      1, "ExprSuffix_2", "Expr$4",
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, "Expr$5",
      ",", "Expr$5",
      0, -1
    ],
    "Expr$4": [
      1, "whitespace", "Expr$3"
    ],
    "Expr$5": [
      1, "whitespace", "Expr$6"
    ],
    "Expr$6": [
      1, "ExprNoComma", "Expr$4"
    ],
    "Body": [
      1, "SmallStatement", "Body$1",
      2, "indentedBody", -1, {"name":"indentedBody"}
    ],
    "Body$1": [
      1, "whitespace", "Body$2"
    ],
    "Body$2": [
      ";", "Body$3",
      "\n", -1
    ],
    "Body$3": [
      1, "whitespace", "Body$4"
    ],
    "Body$4": [
      1, "SmallStatement", "Body$5",
      0, "Body$5"
    ],
    "Body$5": [
      1, "whitespace", "Body$2"
    ],
    "CommaSep_9": [
      [5, "_lookahead_6"], "CommaSep_9$1",
      1, "ExprNoIn", "CommaSep_9$2"
    ],
    "CommaSep_9$1": [
      1, "Pattern", "CommaSep_9$2"
    ],
    "CommaSep_9$2": [
      1, "whitespace", "CommaSep_9$3"
    ],
    "CommaSep_9$3": [
      ",", "CommaSep_9$4",
      0, -1
    ],
    "CommaSep_9$4": [
      1, "whitespace", "CommaSep_9$5"
    ],
    "CommaSep_9$5": [
      [5, "_lookahead_6"], "CommaSep_9$6",
      1, "ExprNoIn", "CommaSep_9$7",
      0, "CommaSep_9$7"
    ],
    "CommaSep_9$6": [
      1, "Pattern", "CommaSep_9$7"
    ],
    "CommaSep_9$7": [
      1, "whitespace", "CommaSep_9$3"
    ],
    "ArgList": [
      "(", "ArgList$1"
    ],
    "ArgList$1": [
      1, "whitespace", "ArgList$2"
    ],
    "ArgList$2": [
      1, "MaybeComp_1", "ArgList$3",
      0, "ArgList$3"
    ],
    "ArgList$3": [
      1, "whitespace", "ArgList$4"
    ],
    "ArgList$4": [
      ")", -1
    ],
    "stringQuoted": [
      "'''", "stringQuoted$1",
      "\"\"\"", "stringQuoted$3",
      "'", "stringQuoted$5",
      "\"", "stringQuoted$7"
    ],
    "stringQuoted$1": [
      "\\", "stringQuoted$2",
      [0, /^(?!\'\'\')/, /^[^]/], "stringQuoted$1",
      "'''", -1
    ],
    "stringQuoted$2": [
      /^[^]/, "stringQuoted$1"
    ],
    "stringQuoted$3": [
      "\\", "stringQuoted$4",
      [0, /^(?!\"\"\")/, /^[^]/], "stringQuoted$3",
      "\"\"\"", -1
    ],
    "stringQuoted$4": [
      /^[^]/, "stringQuoted$3"
    ],
    "stringQuoted$5": [
      "\\", "stringQuoted$6",
      /^(?!\')./, "stringQuoted$5",
      "'", -1
    ],
    "stringQuoted$6": [
      /^[^]/, "stringQuoted$5"
    ],
    "stringQuoted$7": [
      "\\", "stringQuoted$8",
      /^(?!\")./, "stringQuoted$7",
      "\"", -1
    ],
    "stringQuoted$8": [
      /^[^]/, "stringQuoted$7"
    ],
    "replacementField": [
      3, "operator", "{", "replacementField$1"
    ],
    "replacementField$1": [
      1, "Expr", "replacementField$2",
      0, "replacementField$2"
    ],
    "replacementField$2": [
      3, "operator", "=", "replacementField$3",
      0, "replacementField$3"
    ],
    "replacementField$3": [
      3, "operator", "!", "replacementField$4",
      0, "replacementField$5"
    ],
    "replacementField$4": [
      3, "keyword", /^(?:(?![\:\} \t]).)*/, "replacementField$5"
    ],
    "replacementField$5": [
      3, "operator", ":", "replacementField$6",
      0, "replacementField$7"
    ],
    "replacementField$6": [
      3, "string", /^(?![\{\}])./, "replacementField$6",
      1, "replacementField", "replacementField$6",
      0, "replacementField$7"
    ],
    "replacementField$7": [
      3, "operator", "}", -1
    ],
    "CommaSep_10": [
      1, "ExprNoComma", "CommaSep_10$1"
    ],
    "CommaSep_10$1": [
      1, "whitespace", "CommaSep_10$2"
    ],
    "CommaSep_10$2": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_10$3",
      0, "CommaSep_10$5"
    ],
    "CommaSep_10$3": [
      1, "whitespace", "CommaSep_10$4"
    ],
    "CommaSep_10$4": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_10$5",
      2, "ParenPattern", "CommaSep_10$5", {"name":"ParenPattern"},
      2, "BracketPattern", "CommaSep_10$5", {"name":"BracketPattern"}
    ],
    "CommaSep_10$5": [
      1, "whitespace", "CommaSep_10$6"
    ],
    "CommaSep_10$6": [
      ",", "CommaSep_10$7",
      0, -1
    ],
    "CommaSep_10$7": [
      1, "whitespace", "CommaSep_10$8"
    ],
    "CommaSep_10$8": [
      1, "ExprNoComma", "CommaSep_10$9",
      0, "CommaSep_10$10"
    ],
    "CommaSep_10$9": [
      1, "whitespace", "CommaSep_10$11"
    ],
    "CommaSep_10$10": [
      1, "whitespace", "CommaSep_10$6"
    ],
    "CommaSep_10$11": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_10$12",
      0, "CommaSep_10$10"
    ],
    "CommaSep_10$12": [
      1, "whitespace", "CommaSep_10$13"
    ],
    "CommaSep_10$13": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_10$10",
      2, "ParenPattern", "CommaSep_10$10", {"name":"ParenPattern"},
      2, "BracketPattern", "CommaSep_10$10", {"name":"BracketPattern"}
    ],
    "FuncDef": [
      2, "ParamList", "FuncDef$1", {"name":"ParamList"}
    ],
    "FuncDef$1": [
      1, "whitespace", "FuncDef$2"
    ],
    "FuncDef$2": [
      "->", "FuncDef$3",
      0, "FuncDef$5"
    ],
    "FuncDef$3": [
      1, "whitespace", "FuncDef$4"
    ],
    "FuncDef$4": [
      1, "Expr", "FuncDef$5"
    ],
    "FuncDef$5": [
      1, "whitespace", "FuncDef$6"
    ],
    "FuncDef$6": [
      ":", "FuncDef$7"
    ],
    "FuncDef$7": [
      1, "whitespace", "FuncDef$8"
    ],
    "FuncDef$8": [
      1, "Body", -1
    ],
    "ClassDef": [
      3, "type def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "ClassDef$1"
    ],
    "ClassDef$1": [
      1, "whitespace", "ClassDef$2"
    ],
    "ClassDef$2": [
      2, "ArgList", "ClassDef$3", {"name":"ArgList"},
      0, "ClassDef$3"
    ],
    "ClassDef$3": [
      1, "whitespace", "ClassDef$4"
    ],
    "ClassDef$4": [
      ":", "ClassDef$5"
    ],
    "ClassDef$5": [
      1, "whitespace", "ClassDef$6"
    ],
    "ClassDef$6": [
      1, "Body", -1
    ],
    "_lookahead_4": [
      1, "Pattern", "_lookahead_4$1"
    ],
    "_lookahead_4$1": [
      1, "whitespace", "_lookahead_4$2"
    ],
    "_lookahead_4$2": [
      /^[\=\:]/, -1
    ],
    "CommaSep_6": [
      1, "ExprNoComma", "CommaSep_6$1"
    ],
    "CommaSep_6$1": [
      1, "whitespace", "CommaSep_6$2"
    ],
    "CommaSep_6$2": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_6$3",
      0, "CommaSep_6$5"
    ],
    "CommaSep_6$3": [
      1, "whitespace", "CommaSep_6$4"
    ],
    "CommaSep_6$4": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_6$5"
    ],
    "CommaSep_6$5": [
      1, "whitespace", "CommaSep_6$6"
    ],
    "CommaSep_6$6": [
      ",", "CommaSep_6$7",
      0, -1
    ],
    "CommaSep_6$7": [
      1, "whitespace", "CommaSep_6$8"
    ],
    "CommaSep_6$8": [
      1, "ExprNoComma", "CommaSep_6$9",
      0, "CommaSep_6$10"
    ],
    "CommaSep_6$9": [
      1, "whitespace", "CommaSep_6$11"
    ],
    "CommaSep_6$10": [
      1, "whitespace", "CommaSep_6$6"
    ],
    "CommaSep_6$11": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_6$12",
      0, "CommaSep_6$10"
    ],
    "CommaSep_6$12": [
      1, "whitespace", "CommaSep_6$13"
    ],
    "CommaSep_6$13": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_6$10"
    ],
    "_lookahead_3": [
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9_])/, -1
    ],
    "FromImportList": [
      "(", "FromImportList$1"
    ],
    "FromImportList$1": [
      1, "whitespace", "FromImportList$2"
    ],
    "FromImportList$2": [
      1, "CommaSep_7", "FromImportList$3",
      0, "FromImportList$3"
    ],
    "FromImportList$3": [
      1, "whitespace", "FromImportList$4"
    ],
    "FromImportList$4": [
      /^\,?/, "FromImportList$5"
    ],
    "FromImportList$5": [
      1, "whitespace", "FromImportList$6"
    ],
    "FromImportList$6": [
      ")", -1
    ],
    "CommaSep_7": [
      /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_7$1"
    ],
    "CommaSep_7$1": [
      1, "whitespace", "CommaSep_7$2"
    ],
    "CommaSep_7$2": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_7$3",
      0, "CommaSep_7$5"
    ],
    "CommaSep_7$3": [
      1, "whitespace", "CommaSep_7$4"
    ],
    "CommaSep_7$4": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_7$5"
    ],
    "CommaSep_7$5": [
      1, "whitespace", "CommaSep_7$6"
    ],
    "CommaSep_7$6": [
      ",", "CommaSep_7$7",
      0, -1
    ],
    "CommaSep_7$7": [
      1, "whitespace", "CommaSep_7$8"
    ],
    "CommaSep_7$8": [
      /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_7$9",
      0, "CommaSep_7$10"
    ],
    "CommaSep_7$9": [
      1, "whitespace", "CommaSep_7$11"
    ],
    "CommaSep_7$10": [
      1, "whitespace", "CommaSep_7$6"
    ],
    "CommaSep_7$11": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_7$12",
      0, "CommaSep_7$10"
    ],
    "CommaSep_7$12": [
      1, "whitespace", "CommaSep_7$13"
    ],
    "CommaSep_7$13": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_7$10"
    ],
    "CommaSep_8": [
      3, "variable", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_8$1"
    ],
    "CommaSep_8$1": [
      1, "whitespace", "CommaSep_8$2"
    ],
    "CommaSep_8$2": [
      ",", "CommaSep_8$3",
      0, -1
    ],
    "CommaSep_8$3": [
      1, "whitespace", "CommaSep_8$4"
    ],
    "CommaSep_8$4": [
      3, "variable", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_8$5",
      0, "CommaSep_8$5"
    ],
    "CommaSep_8$5": [
      1, "whitespace", "CommaSep_8$2"
    ],
    "Pattern": [
      1, "CommaSep_1", -1
    ],
    "BaseExpr": [
      2, "ParenExpr", -1, {"name":"ParenExpr"},
      2, "ArrayLiteral", -1, {"name":"ArrayLiteral"},
      2, "ObjectLiteral", -1, {"name":"ObjectLiteral"},
      3, "number", /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, -1,
      0, "BaseExpr$1",
      3, "operator", "...", -1,
      3, "atom", /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "atom", /^self(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "keyword", /^yield(?![a-zA-Z¡-￿_0-9_])/, "BaseExpr$4",
      3, "keyword", /^lambda(?![a-zA-Z¡-￿_0-9_])/, "BaseExpr$8",
      3, "builtin", /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, -1,
      3, "variable callee", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, -1,
      3, "variable", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, -1
    ],
    "BaseExpr$1": [
      2, "string", "BaseExpr$2", {"name":"string","token":"string"},
      1, "fstring", "BaseExpr$2"
    ],
    "BaseExpr$2": [
      1, "whitespace", "BaseExpr$3"
    ],
    "BaseExpr$3": [
      0, "BaseExpr$1",
      0, -1
    ],
    "BaseExpr$4": [
      1, "whitespace", "BaseExpr$5"
    ],
    "BaseExpr$5": [
      3, "keyword", /^from(?![a-zA-Z¡-￿_0-9_])/, "BaseExpr$6",
      1, "Expr", -1,
      0, -1
    ],
    "BaseExpr$6": [
      1, "whitespace", "BaseExpr$7"
    ],
    "BaseExpr$7": [
      1, "Expr", -1
    ],
    "BaseExpr$8": [
      1, "whitespace", "BaseExpr$9"
    ],
    "BaseExpr$9": [
      2, "LambdaDef", -1, {"name":"LambdaDef"}
    ],
    "ExprSuffix_2": [
      /^(?!\=[\!\:\}])/, "ExprSuffix_2$1",
      2, "ArgList", -1, {"name":"ArgList"},
      2, "Subscript", -1, {"name":"Subscript"},
      ".", "ExprSuffix_2$4",
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_2$6"
    ],
    "ExprSuffix_2$1": [
      3, "operator", /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, "ExprSuffix_2$2",
      3, "keyword", /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_2$2"
    ],
    "ExprSuffix_2$2": [
      1, "whitespace", "ExprSuffix_2$3"
    ],
    "ExprSuffix_2$3": [
      1, "Expr", -1
    ],
    "ExprSuffix_2$4": [
      1, "whitespace", "ExprSuffix_2$5"
    ],
    "ExprSuffix_2$5": [
      3, "property callee", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, -1,
      3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, -1
    ],
    "ExprSuffix_2$6": [
      1, "whitespace", "ExprSuffix_2$7"
    ],
    "ExprSuffix_2$7": [
      1, "Expr", "ExprSuffix_2$8"
    ],
    "ExprSuffix_2$8": [
      1, "whitespace", "ExprSuffix_2$9"
    ],
    "ExprSuffix_2$9": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_2$10",
      0, -1
    ],
    "ExprSuffix_2$10": [
      1, "whitespace", "ExprSuffix_2$11"
    ],
    "ExprSuffix_2$11": [
      1, "Expr", -1
    ],
    "ExprNoComma": [
      3, "operator", /^[\*\+\-\~]/, "ExprNoComma$1",
      3, "keyword", /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, "ExprNoComma$1",
      1, "BaseExpr", "ExprNoComma$2"
    ],
    "ExprNoComma$1": [
      1, "whitespace", "ExprNoComma"
    ],
    "ExprNoComma$2": [
      1, "whitespace", "ExprNoComma$3"
    ],
    "ExprNoComma$3": [
      1, "ExprSuffix", "ExprNoComma$4",
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, "ExprNoComma$5",
      0, -1
    ],
    "ExprNoComma$4": [
      1, "whitespace", "ExprNoComma$3"
    ],
    "ExprNoComma$5": [
      1, "whitespace", "ExprNoComma$6"
    ],
    "ExprNoComma$6": [
      1, "Expr", "ExprNoComma$4"
    ],
    "indentedBody": [
      "\n", "indentedBody$1"
    ],
    "indentedBody$1": [
      /^[ \t]/, "indentedBody$1",
      3, "comment", /^\#.*/, "indentedBody$1",
      "\n", "indentedBody$1",
      0, "indentedBody$2"
    ],
    "indentedBody$2": [
      [0, [7, "stillIndented"], [6, "_lookahead_5"]], "indentedBody$3",
      [0, [7, "stillIndented"], /^(?=return|pass)/], "indentedBody$5",
      0, -1
    ],
    "indentedBody$3": [
      2, "Statement", "indentedBody$4", {"name":"Statement"}
    ],
    "indentedBody$4": [
      /^[ \t]/, "indentedBody$4",
      3, "comment", /^\#.*/, "indentedBody$4",
      "\n", "indentedBody$4",
      0, "indentedBody$2"
    ],
    "indentedBody$5": [
      2, "Statement", -1, {"name":"Statement"}
    ],
    "_lookahead_6": [
      1, "Pattern", "_lookahead_6$1"
    ],
    "_lookahead_6$1": [
      1, "whitespace", "_lookahead_6$2"
    ],
    "_lookahead_6$2": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, -1
    ],
    "ExprNoIn": [
      3, "operator", /^[\*\+\-\~]/, "ExprNoIn$1",
      3, "keyword", /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, "ExprNoIn$1",
      1, "BaseExpr", "ExprNoIn$2"
    ],
    "ExprNoIn$1": [
      1, "whitespace", "ExprNoIn"
    ],
    "ExprNoIn$2": [
      1, "whitespace", "ExprNoIn$3"
    ],
    "ExprNoIn$3": [
      1, "ExprSuffix_1", "ExprNoIn$4",
      0, -1
    ],
    "ExprNoIn$4": [
      1, "whitespace", "ExprNoIn$3"
    ],
    "MaybeComp_1": [
      3, "variable-2", [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], "MaybeComp_1$1",
      3, "operator", "**", "MaybeComp_1$2",
      3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=(?!\=))/, "MaybeComp_1$3",
      0, "MaybeComp_1$2"
    ],
    "MaybeComp_1$1": [
      1, "whitespace", "MaybeComp_1$4"
    ],
    "MaybeComp_1$2": [
      1, "whitespace", "MaybeComp_1$5"
    ],
    "MaybeComp_1$3": [
      1, "whitespace", "MaybeComp_1$6"
    ],
    "MaybeComp_1$4": [
      1, "ExprSuffix", "MaybeComp_1$7",
      0, "MaybeComp_1$8"
    ],
    "MaybeComp_1$5": [
      1, "ExprNoComma", "MaybeComp_1$8"
    ],
    "MaybeComp_1$6": [
      "=", "MaybeComp_1$2"
    ],
    "MaybeComp_1$7": [
      1, "whitespace", "MaybeComp_1$4"
    ],
    "MaybeComp_1$8": [
      1, "whitespace", "MaybeComp_1$9"
    ],
    "MaybeComp_1$9": [
      ",", "MaybeComp_1$10",
      1, "CompFor", -1,
      0, -1
    ],
    "MaybeComp_1$10": [
      1, "whitespace", "MaybeComp_1$11"
    ],
    "MaybeComp_1$11": [
      1, "CommaSep", -1,
      0, -1
    ],
    "ParenPattern": [
      "(", "ParenPattern$1"
    ],
    "ParenPattern$1": [
      1, "whitespace", "ParenPattern$2"
    ],
    "ParenPattern$2": [
      1, "Pattern", "ParenPattern$3"
    ],
    "ParenPattern$3": [
      1, "whitespace", "ParenPattern$4"
    ],
    "ParenPattern$4": [
      ")", -1
    ],
    "BracketPattern": [
      "[", "BracketPattern$1"
    ],
    "BracketPattern$1": [
      1, "whitespace", "BracketPattern$2"
    ],
    "BracketPattern$2": [
      1, "Pattern", "BracketPattern$3"
    ],
    "BracketPattern$3": [
      1, "whitespace", "BracketPattern$4"
    ],
    "BracketPattern$4": [
      "]", -1
    ],
    "ParamList": [
      "(", "ParamList$1"
    ],
    "ParamList$1": [
      1, "whitespace", "ParamList$2"
    ],
    "ParamList$2": [
      1, "CommaSep_11", "ParamList$3",
      0, "ParamList$3"
    ],
    "ParamList$3": [
      1, "whitespace", "ParamList$4"
    ],
    "ParamList$4": [
      ")", -1
    ],
    "CommaSep_1": [
      [6, "_lookahead_1"], "CommaSep_1$1",
      2, "ParenPattern", "CommaSep_1$2", {"name":"ParenPattern"},
      2, "BracketPattern", "CommaSep_1$2", {"name":"BracketPattern"}
    ],
    "CommaSep_1$1": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_1$2"
    ],
    "CommaSep_1$2": [
      1, "whitespace", "CommaSep_1$3"
    ],
    "CommaSep_1$3": [
      ",", "CommaSep_1$4",
      0, -1
    ],
    "CommaSep_1$4": [
      1, "whitespace", "CommaSep_1$5"
    ],
    "CommaSep_1$5": [
      [6, "_lookahead_1"], "CommaSep_1$6",
      2, "ParenPattern", "CommaSep_1$7", {"name":"ParenPattern"},
      2, "BracketPattern", "CommaSep_1$7", {"name":"BracketPattern"},
      0, "CommaSep_1$7"
    ],
    "CommaSep_1$6": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_1$7"
    ],
    "CommaSep_1$7": [
      1, "whitespace", "CommaSep_1$3"
    ],
    "ParenExpr": [
      "(", "ParenExpr$1"
    ],
    "ParenExpr$1": [
      1, "whitespace", "ParenExpr$2"
    ],
    "ParenExpr$2": [
      1, "MaybeComp", "ParenExpr$3",
      0, "ParenExpr$3"
    ],
    "ParenExpr$3": [
      1, "whitespace", "ParenExpr$4"
    ],
    "ParenExpr$4": [
      ")", -1
    ],
    "ArrayLiteral": [
      "[", "ArrayLiteral$1"
    ],
    "ArrayLiteral$1": [
      1, "whitespace", "ArrayLiteral$2"
    ],
    "ArrayLiteral$2": [
      1, "MaybeComp", "ArrayLiteral$3",
      0, "ArrayLiteral$3"
    ],
    "ArrayLiteral$3": [
      1, "whitespace", "ArrayLiteral$4"
    ],
    "ArrayLiteral$4": [
      "]", -1
    ],
    "ObjectLiteral": [
      "{", "ObjectLiteral$1"
    ],
    "ObjectLiteral$1": [
      1, "whitespace", "ObjectLiteral$2"
    ],
    "ObjectLiteral$2": [
      1, "CommaSep_4", "ObjectLiteral$3",
      0, "ObjectLiteral$5"
    ],
    "ObjectLiteral$3": [
      1, "whitespace", "ObjectLiteral$4"
    ],
    "ObjectLiteral$4": [
      1, "CompFor", "ObjectLiteral$5",
      0, "ObjectLiteral$5"
    ],
    "ObjectLiteral$5": [
      1, "whitespace", "ObjectLiteral$6"
    ],
    "ObjectLiteral$6": [
      "}", -1
    ],
    "LambdaDef": [
      1, "CommaSep_5", "LambdaDef$1",
      0, "LambdaDef$1"
    ],
    "LambdaDef$1": [
      1, "whitespace", "LambdaDef$2"
    ],
    "LambdaDef$2": [
      ":", "LambdaDef$3"
    ],
    "LambdaDef$3": [
      1, "whitespace", "LambdaDef$4"
    ],
    "LambdaDef$4": [
      1, "ExprNoComma", -1
    ],
    "Subscript": [
      "[", "Subscript$1"
    ],
    "Subscript$1": [
      1, "whitespace", "Subscript$2"
    ],
    "Subscript$2": [
      1, "CommaSep_2", "Subscript$3"
    ],
    "Subscript$3": [
      1, "whitespace", "Subscript$4"
    ],
    "Subscript$4": [
      "]", -1
    ],
    "ExprSuffix": [
      /^(?!\=[\!\:\}])/, "ExprSuffix$1",
      2, "ArgList", -1, {"name":"ArgList"},
      2, "Subscript", -1, {"name":"Subscript"},
      ".", "ExprSuffix$4",
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix$6"
    ],
    "ExprSuffix$1": [
      3, "operator", /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, "ExprSuffix$2",
      3, "keyword", /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix$2"
    ],
    "ExprSuffix$2": [
      1, "whitespace", "ExprSuffix$3"
    ],
    "ExprSuffix$3": [
      1, "ExprNoComma", -1
    ],
    "ExprSuffix$4": [
      1, "whitespace", "ExprSuffix$5"
    ],
    "ExprSuffix$5": [
      3, "property callee", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, -1,
      3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, -1
    ],
    "ExprSuffix$6": [
      1, "whitespace", "ExprSuffix$7"
    ],
    "ExprSuffix$7": [
      1, "ExprNoComma", "ExprSuffix$8"
    ],
    "ExprSuffix$8": [
      1, "whitespace", "ExprSuffix$9"
    ],
    "ExprSuffix$9": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix$10",
      0, -1
    ],
    "ExprSuffix$10": [
      1, "whitespace", "ExprSuffix$11"
    ],
    "ExprSuffix$11": [
      1, "ExprNoComma", -1
    ],
    "_lookahead_5": [
      3, "keyword", /^(?:return|pass)(?![a-zA-Z¡-￿_0-9_])/, -1
    ],
    "ExprSuffix_1": [
      /^(?!\=[\!\:\}])/, "ExprSuffix_1$1",
      2, "ArgList", -1, {"name":"ArgList"},
      2, "Subscript", -1, {"name":"Subscript"},
      ".", "ExprSuffix_1$4",
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_1$6"
    ],
    "ExprSuffix_1$1": [
      3, "operator", /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, "ExprSuffix_1$2",
      3, "keyword", /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_1$2"
    ],
    "ExprSuffix_1$2": [
      1, "whitespace", "ExprSuffix_1$3"
    ],
    "ExprSuffix_1$3": [
      1, "ExprNoIn", -1
    ],
    "ExprSuffix_1$4": [
      1, "whitespace", "ExprSuffix_1$5"
    ],
    "ExprSuffix_1$5": [
      3, "property callee", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, -1,
      3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, -1
    ],
    "ExprSuffix_1$6": [
      1, "whitespace", "ExprSuffix_1$7"
    ],
    "ExprSuffix_1$7": [
      1, "ExprNoIn", "ExprSuffix_1$8"
    ],
    "ExprSuffix_1$8": [
      1, "whitespace", "ExprSuffix_1$9"
    ],
    "ExprSuffix_1$9": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9_])/, "ExprSuffix_1$10",
      0, -1
    ],
    "ExprSuffix_1$10": [
      1, "whitespace", "ExprSuffix_1$11"
    ],
    "ExprSuffix_1$11": [
      1, "ExprNoIn", -1
    ],
    "CompFor": [
      3, "keyword", /^async(?![a-zA-Z¡-￿_0-9_])/, "CompFor$1",
      0, "CompFor$1"
    ],
    "CompFor$1": [
      1, "whitespace", "CompFor$2"
    ],
    "CompFor$2": [
      3, "keyword", /^for(?![a-zA-Z¡-￿_0-9_])/, "CompFor$3"
    ],
    "CompFor$3": [
      1, "whitespace", "CompFor$4"
    ],
    "CompFor$4": [
      [5, "_lookahead_2"], "CompFor$5",
      1, "ExprNoIn", "CompFor$6"
    ],
    "CompFor$5": [
      1, "Pattern", "CompFor$6"
    ],
    "CompFor$6": [
      1, "whitespace", "CompFor$7"
    ],
    "CompFor$7": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, "CompFor$8"
    ],
    "CompFor$8": [
      1, "whitespace", "CompFor$9"
    ],
    "CompFor$9": [
      1, "Expr", "CompFor$10"
    ],
    "CompFor$10": [
      1, "whitespace", "CompFor$11"
    ],
    "CompFor$11": [
      1, "CompFor", -1,
      1, "CompIf", -1,
      0, -1
    ],
    "CommaSep": [
      3, "operator", "**", "CommaSep$1",
      3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=(?!\=))/, "CommaSep$2",
      0, "CommaSep$1"
    ],
    "CommaSep$1": [
      1, "whitespace", "CommaSep$3"
    ],
    "CommaSep$2": [
      1, "whitespace", "CommaSep$4"
    ],
    "CommaSep$3": [
      1, "ExprNoComma", "CommaSep$5"
    ],
    "CommaSep$4": [
      "=", "CommaSep$1"
    ],
    "CommaSep$5": [
      1, "whitespace", "CommaSep$6"
    ],
    "CommaSep$6": [
      ",", "CommaSep$7",
      0, -1
    ],
    "CommaSep$7": [
      1, "whitespace", "CommaSep$8"
    ],
    "CommaSep$8": [
      3, "operator", "**", "CommaSep$9",
      3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=(?!\=))/, "CommaSep$10",
      0, "CommaSep$9",
      0, "CommaSep$11"
    ],
    "CommaSep$9": [
      1, "whitespace", "CommaSep$12"
    ],
    "CommaSep$10": [
      1, "whitespace", "CommaSep$13"
    ],
    "CommaSep$11": [
      1, "whitespace", "CommaSep$6"
    ],
    "CommaSep$12": [
      1, "ExprNoComma", "CommaSep$11"
    ],
    "CommaSep$13": [
      "=", "CommaSep$9"
    ],
    "CommaSep_11": [
      2, "op_10", "CommaSep_11$1", {"name":"op","token":"operator"},
      0, "CommaSep_11$1"
    ],
    "CommaSep_11$1": [
      1, "whitespace", "CommaSep_11$2"
    ],
    "CommaSep_11$2": [
      3, "atom", /^self(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_11$3",
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_11$3"
    ],
    "CommaSep_11$3": [
      1, "whitespace", "CommaSep_11$4"
    ],
    "CommaSep_11$4": [
      ":", "CommaSep_11$5",
      0, "CommaSep_11$6"
    ],
    "CommaSep_11$5": [
      1, "whitespace", "CommaSep_11$7"
    ],
    "CommaSep_11$6": [
      1, "whitespace", "CommaSep_11$8"
    ],
    "CommaSep_11$7": [
      1, "ExprNoComma", "CommaSep_11$6"
    ],
    "CommaSep_11$8": [
      3, "operator", "=", "CommaSep_11$9",
      0, "CommaSep_11$11"
    ],
    "CommaSep_11$9": [
      1, "whitespace", "CommaSep_11$10"
    ],
    "CommaSep_11$10": [
      1, "ExprNoComma", "CommaSep_11$11"
    ],
    "CommaSep_11$11": [
      1, "whitespace", "CommaSep_11$12"
    ],
    "CommaSep_11$12": [
      ",", "CommaSep_11$13",
      0, -1
    ],
    "CommaSep_11$13": [
      1, "whitespace", "CommaSep_11$14"
    ],
    "CommaSep_11$14": [
      2, "op_10", "CommaSep_11$15", {"name":"op","token":"operator"},
      0, "CommaSep_11$15",
      0, "CommaSep_11$16"
    ],
    "CommaSep_11$15": [
      1, "whitespace", "CommaSep_11$17"
    ],
    "CommaSep_11$16": [
      1, "whitespace", "CommaSep_11$12"
    ],
    "CommaSep_11$17": [
      3, "atom", /^self(?![a-zA-Z¡-￿_0-9_])/, "CommaSep_11$18",
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_11$18"
    ],
    "CommaSep_11$18": [
      1, "whitespace", "CommaSep_11$19"
    ],
    "CommaSep_11$19": [
      ":", "CommaSep_11$20",
      0, "CommaSep_11$21"
    ],
    "CommaSep_11$20": [
      1, "whitespace", "CommaSep_11$22"
    ],
    "CommaSep_11$21": [
      1, "whitespace", "CommaSep_11$23"
    ],
    "CommaSep_11$22": [
      1, "ExprNoComma", "CommaSep_11$21"
    ],
    "CommaSep_11$23": [
      3, "operator", "=", "CommaSep_11$24",
      0, "CommaSep_11$16"
    ],
    "CommaSep_11$24": [
      1, "whitespace", "CommaSep_11$25"
    ],
    "CommaSep_11$25": [
      1, "ExprNoComma", "CommaSep_11$16"
    ],
    "_lookahead_1": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, -1
    ],
    "MaybeComp": [
      3, "variable-2", [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], "MaybeComp$1",
      1, "ExprNoComma", "MaybeComp$4"
    ],
    "MaybeComp$1": [
      1, "whitespace", "MaybeComp$2"
    ],
    "MaybeComp$2": [
      1, "ExprSuffix", "MaybeComp$3",
      0, "MaybeComp$4"
    ],
    "MaybeComp$3": [
      1, "whitespace", "MaybeComp$2"
    ],
    "MaybeComp$4": [
      1, "whitespace", "MaybeComp$5"
    ],
    "MaybeComp$5": [
      ",", "MaybeComp$6",
      1, "CompFor", -1,
      0, -1
    ],
    "MaybeComp$6": [
      1, "whitespace", "MaybeComp$7"
    ],
    "MaybeComp$7": [
      1, "CommaSep_3", -1,
      0, -1
    ],
    "CommaSep_4": [
      2, "DictProp", "CommaSep_4$1", {"name":"DictProp"}
    ],
    "CommaSep_4$1": [
      1, "whitespace", "CommaSep_4$2"
    ],
    "CommaSep_4$2": [
      ",", "CommaSep_4$3",
      0, -1
    ],
    "CommaSep_4$3": [
      1, "whitespace", "CommaSep_4$4"
    ],
    "CommaSep_4$4": [
      2, "DictProp", "CommaSep_4$5", {"name":"DictProp"},
      0, "CommaSep_4$5"
    ],
    "CommaSep_4$5": [
      1, "whitespace", "CommaSep_4$2"
    ],
    "CommaSep_5": [
      3, "operator", /^(?:\*|\*\*)/, "CommaSep_5$1",
      0, "CommaSep_5$1"
    ],
    "CommaSep_5$1": [
      1, "whitespace", "CommaSep_5$2"
    ],
    "CommaSep_5$2": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_5$3"
    ],
    "CommaSep_5$3": [
      1, "whitespace", "CommaSep_5$4"
    ],
    "CommaSep_5$4": [
      3, "operator", "=", "CommaSep_5$5",
      0, "CommaSep_5$7"
    ],
    "CommaSep_5$5": [
      1, "whitespace", "CommaSep_5$6"
    ],
    "CommaSep_5$6": [
      1, "ExprNoComma", "CommaSep_5$7"
    ],
    "CommaSep_5$7": [
      1, "whitespace", "CommaSep_5$8"
    ],
    "CommaSep_5$8": [
      ",", "CommaSep_5$9",
      0, -1
    ],
    "CommaSep_5$9": [
      1, "whitespace", "CommaSep_5$10"
    ],
    "CommaSep_5$10": [
      3, "operator", /^(?:\*|\*\*)/, "CommaSep_5$11",
      0, "CommaSep_5$11",
      0, "CommaSep_5$12"
    ],
    "CommaSep_5$11": [
      1, "whitespace", "CommaSep_5$13"
    ],
    "CommaSep_5$12": [
      1, "whitespace", "CommaSep_5$8"
    ],
    "CommaSep_5$13": [
      3, "def", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, "CommaSep_5$14"
    ],
    "CommaSep_5$14": [
      1, "whitespace", "CommaSep_5$15"
    ],
    "CommaSep_5$15": [
      3, "operator", "=", "CommaSep_5$16",
      0, "CommaSep_5$12"
    ],
    "CommaSep_5$16": [
      1, "whitespace", "CommaSep_5$17"
    ],
    "CommaSep_5$17": [
      1, "ExprNoComma", "CommaSep_5$12"
    ],
    "CommaSep_2": [
      1, "ExprNoComma", "CommaSep_2$1",
      ":", "CommaSep_2$2"
    ],
    "CommaSep_2$1": [
      1, "whitespace", "CommaSep_2$3"
    ],
    "CommaSep_2$2": [
      1, "whitespace", "CommaSep_2$4"
    ],
    "CommaSep_2$3": [
      ":", "CommaSep_2$5",
      0, "CommaSep_2$15"
    ],
    "CommaSep_2$4": [
      1, "ExprNoComma", "CommaSep_2$6",
      0, "CommaSep_2$6"
    ],
    "CommaSep_2$5": [
      1, "whitespace", "CommaSep_2$7"
    ],
    "CommaSep_2$6": [
      1, "whitespace", "CommaSep_2$8"
    ],
    "CommaSep_2$7": [
      1, "ExprNoComma", "CommaSep_2$9",
      0, "CommaSep_2$9"
    ],
    "CommaSep_2$8": [
      ":", "CommaSep_2$10",
      0, "CommaSep_2$15"
    ],
    "CommaSep_2$9": [
      1, "whitespace", "CommaSep_2$11"
    ],
    "CommaSep_2$10": [
      1, "whitespace", "CommaSep_2$12"
    ],
    "CommaSep_2$11": [
      ":", "CommaSep_2$13",
      0, "CommaSep_2$15"
    ],
    "CommaSep_2$12": [
      1, "ExprNoComma", "CommaSep_2$15",
      0, "CommaSep_2$15"
    ],
    "CommaSep_2$13": [
      1, "whitespace", "CommaSep_2$14"
    ],
    "CommaSep_2$14": [
      1, "ExprNoComma", "CommaSep_2$15",
      0, "CommaSep_2$15"
    ],
    "CommaSep_2$15": [
      1, "whitespace", "CommaSep_2$16"
    ],
    "CommaSep_2$16": [
      ",", "CommaSep_2$17",
      0, -1
    ],
    "CommaSep_2$17": [
      1, "whitespace", "CommaSep_2$18"
    ],
    "CommaSep_2$18": [
      1, "ExprNoComma", "CommaSep_2$19",
      ":", "CommaSep_2$20",
      0, "CommaSep_2$21"
    ],
    "CommaSep_2$19": [
      1, "whitespace", "CommaSep_2$22"
    ],
    "CommaSep_2$20": [
      1, "whitespace", "CommaSep_2$23"
    ],
    "CommaSep_2$21": [
      1, "whitespace", "CommaSep_2$16"
    ],
    "CommaSep_2$22": [
      ":", "CommaSep_2$24",
      0, "CommaSep_2$21"
    ],
    "CommaSep_2$23": [
      1, "ExprNoComma", "CommaSep_2$25",
      0, "CommaSep_2$25"
    ],
    "CommaSep_2$24": [
      1, "whitespace", "CommaSep_2$26"
    ],
    "CommaSep_2$25": [
      1, "whitespace", "CommaSep_2$27"
    ],
    "CommaSep_2$26": [
      1, "ExprNoComma", "CommaSep_2$28",
      0, "CommaSep_2$28"
    ],
    "CommaSep_2$27": [
      ":", "CommaSep_2$29",
      0, "CommaSep_2$21"
    ],
    "CommaSep_2$28": [
      1, "whitespace", "CommaSep_2$30"
    ],
    "CommaSep_2$29": [
      1, "whitespace", "CommaSep_2$31"
    ],
    "CommaSep_2$30": [
      ":", "CommaSep_2$32",
      0, "CommaSep_2$21"
    ],
    "CommaSep_2$31": [
      1, "ExprNoComma", "CommaSep_2$21",
      0, "CommaSep_2$21"
    ],
    "CommaSep_2$32": [
      1, "whitespace", "CommaSep_2$33"
    ],
    "CommaSep_2$33": [
      1, "ExprNoComma", "CommaSep_2$21",
      0, "CommaSep_2$21"
    ],
    "_lookahead_2": [
      1, "Pattern", "_lookahead_2$1"
    ],
    "_lookahead_2$1": [
      1, "whitespace", "_lookahead_2$2"
    ],
    "_lookahead_2$2": [
      "\n", "_lookahead_2$3",
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_])/, -1
    ],
    "_lookahead_2$3": [
      1, "whitespace", "_lookahead_2$2"
    ],
    "CompIf": [
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9_])/, "CompIf$1"
    ],
    "CompIf$1": [
      1, "whitespace", "CompIf$2"
    ],
    "CompIf$2": [
      1, "Expr", "CompIf$3"
    ],
    "CompIf$3": [
      1, "whitespace", "CompIf$4"
    ],
    "CompIf$4": [
      1, "CompFor", -1,
      1, "CompIf", -1,
      0, -1
    ],
    "op_10": [
      "*", "op_10$1"
    ],
    "op_10$1": [
      1, "whitespace", "op_10$2"
    ],
    "op_10$2": [
      /^\*?/, -1
    ],
    "CommaSep_3": [
      1, "ExprNoComma", "CommaSep_3$1"
    ],
    "CommaSep_3$1": [
      1, "whitespace", "CommaSep_3$2"
    ],
    "CommaSep_3$2": [
      ",", "CommaSep_3$3",
      0, -1
    ],
    "CommaSep_3$3": [
      1, "whitespace", "CommaSep_3$4"
    ],
    "CommaSep_3$4": [
      1, "ExprNoComma", "CommaSep_3$5",
      0, "CommaSep_3$5"
    ],
    "CommaSep_3$5": [
      1, "whitespace", "CommaSep_3$2"
    ],
    "DictProp": [
      3, "operator", "**", "DictProp$1",
      1, "ExprNoComma", "DictProp$3"
    ],
    "DictProp$1": [
      1, "whitespace", "DictProp$2"
    ],
    "DictProp$2": [
      1, "ExprNoComma", -1
    ],
    "DictProp$3": [
      1, "whitespace", "DictProp$4"
    ],
    "DictProp$4": [
      ":", "DictProp$5",
      0, -1
    ],
    "DictProp$5": [
      1, "whitespace", "DictProp$6"
    ],
    "DictProp$6": [
      1, "ExprNoComma", -1
    ]
  };
  var start = "_start";
  var token = "_token";

  var grammar = /*#__PURE__*/Object.freeze({
    __proto__: null,
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

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "FromImportList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "Subscript", "DictProp", "ParenPattern", "BracketPattern"];

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

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s+for\s+(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]", BracketPattern: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")", ParenPattern: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror__namespace.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack != ")" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror__namespace.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function pythonMarkLocals(token, stream, state) {
    var marked = markLocals(token, scopes, stream, state);
    if (token == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
      else if (marked == "def local") { marked = "variable-2"; }
    }
    return marked
  }

  var PythonMode = /*@__PURE__*/(function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror__namespace.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  // ` also gets autoclosed since it's often used in comments/docstrings.
  PythonMode.prototype.closeBrackets = {triples: "'\"", pairs: "()[]{}''\"\"``",};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror__namespace.defineMode("google-python", function (conf) { return new PythonMode(conf); });

}));
