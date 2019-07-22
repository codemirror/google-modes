(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var nodes = {
    "_start": [
      3, "meta", /^\#\!.*/, "_start$2",
      0, "_start$2"
    ],
    "_start$1": [
      /^[^]/, "_start"
    ],
    "_start$2": [
      1, "l", "_start$3"
    ],
    "_start$3": [
      3, "keyword", /^package(?![a-zA-Z¡-￿_0-9])/, "_start$4",
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9])/, "_start$5",
      2, "Statement", "_start$6", {"name":"Statement"}
    ],
    "_start$4": [
      1, "l", "_start$7"
    ],
    "_start$5": [
      1, "l", "_start$8"
    ],
    "_start$6": [
      /^[ \t\r]+/, "_start$6",
      2, "comment", "_start$6", {"name":"comment","token":"comment"},
      "\n", "_start$6",
      0, "_start$9"
    ],
    "_start$7": [
      3, "variable package", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_start$10"
    ],
    "_start$8": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)(?= *\.)/, "_start$11",
      "*", "_start$12",
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_start$13"
    ],
    "_start$9": [
      0, "_start$3",
      0, "_start$1"
    ],
    "_start$10": [
      1, "s", "_start$14"
    ],
    "_start$11": [
      1, "s", "_start$15"
    ],
    "_start$12": [
      /^\;?/, "_start$6"
    ],
    "_start$13": [
      1, "s", "_start$16"
    ],
    "_start$14": [
      ".", "_start$17",
      /^\;?/, "_start$6"
    ],
    "_start$15": [
      ".", "_start$18"
    ],
    "_start$16": [
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9])/, "_start$19",
      0, "_start$12"
    ],
    "_start$17": [
      1, "l", "_start$20"
    ],
    "_start$18": [
      1, "l", "_start$8"
    ],
    "_start$19": [
      1, "l", "_start$21"
    ],
    "_start$20": [
      3, "variable package", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_start$22"
    ],
    "_start$21": [
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_start$23"
    ],
    "_start$22": [
      1, "s", "_start$14"
    ],
    "_start$23": [
      1, "s", "_start$12"
    ],
    "_token": [
      3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^interface(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^object(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^constructor(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^fun(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^typealias(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^init(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^companion(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^where(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^return(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^when(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^for(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^while(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^do(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^dynamic(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^(?:enum|sealed|annotation|data|inner|override|lateinit|public|private|internal|protected|tailred|operator|infix|inline|external|extend|const|abstract|final|open|vararg|noinline|crossinline|reified|expect|actual)(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^this(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^super(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^throw(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^try(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^catch(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^finally(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^package(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^import(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "keyword", /^(?:val|var)(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "atom", /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "number", /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[uU]?L?/, -1,
      1, "string", -1,
      3, "string-2", /^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
      3, "operator", /^(?:\.\.|\?\:|[\+\-\*\/\%\<\>]\=?|[\!\=]\=\=?|\=|\&\&|\|\|)/, -1,
      2, "comment", -1, {"name":"comment","token":"comment"},
      /^[^]/, -1
    ],
    "l": [
      /^[ \t\r]+/, "l",
      2, "comment", "l", {"name":"comment","token":"comment"},
      "\n", "l",
      0, -1
    ],
    "Statement": [
      3, "meta", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)\@/, -1,
      1, "Annotation", -1,
      1, "Declaration", -1,
      3, "keyword", /^for(?![a-zA-Z¡-￿_0-9])/, "Statement$1",
      3, "keyword", /^while(?![a-zA-Z¡-￿_0-9])/, "Statement$14",
      3, "keyword", /^do(?![a-zA-Z¡-￿_0-9])/, "Statement$18",
      1, "Expression", "Statement$24",
      ";", -1
    ],
    "Statement$1": [
      1, "l", "Statement$2"
    ],
    "Statement$2": [
      "(", "Statement$3"
    ],
    "Statement$3": [
      1, "l", "Statement$4"
    ],
    "Statement$4": [
      1, "Annotation", "Statement$5",
      1, "VariableDeclaration", "Statement$6"
    ],
    "Statement$5": [
      1, "l", "Statement$4"
    ],
    "Statement$6": [
      1, "l", "Statement$7"
    ],
    "Statement$7": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, "Statement$8"
    ],
    "Statement$8": [
      1, "l", "Statement$9"
    ],
    "Statement$9": [
      1, "Expression", "Statement$10"
    ],
    "Statement$10": [
      1, "l", "Statement$11"
    ],
    "Statement$11": [
      ")", "Statement$12"
    ],
    "Statement$12": [
      1, "l", "Statement$13"
    ],
    "Statement$13": [
      2, "Block", -1, {"name":"Block"},
      2, "Statement", -1, {"name":"Statement"}
    ],
    "Statement$14": [
      1, "l", "Statement$15"
    ],
    "Statement$15": [
      2, "ParenthesizedExpression", "Statement$16", {"name":"ParenthesizedExpression"}
    ],
    "Statement$16": [
      1, "l", "Statement$17"
    ],
    "Statement$17": [
      2, "Block", -1, {"name":"Block"},
      2, "Statement", -1, {"name":"Statement"},
      ";", -1
    ],
    "Statement$18": [
      1, "l", "Statement$19"
    ],
    "Statement$19": [
      2, "Block", "Statement$20", {"name":"Block"},
      2, "Statement", "Statement$20", {"name":"Statement"}
    ],
    "Statement$20": [
      1, "l", "Statement$21"
    ],
    "Statement$21": [
      3, "keyword", /^while(?![a-zA-Z¡-￿_0-9])/, "Statement$22"
    ],
    "Statement$22": [
      1, "l", "Statement$23"
    ],
    "Statement$23": [
      2, "ParenthesizedExpression", -1, {"name":"ParenthesizedExpression"}
    ],
    "Statement$24": [
      1, "s", "Statement$25"
    ],
    "Statement$25": [
      /^\;?/, -1
    ],
    "comment": [
      /^\/\*\*(?!\/)/, "comment$1",
      "/*", "comment$4",
      /^\/\/.*/, -1
    ],
    "comment$1": [
      [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], "comment$2",
      0, "comment$3"
    ],
    "comment$2": [
      0, "comment$1",
      0, "comment$1"
    ],
    "comment$3": [
      2, "doccomment.tagGroup", "comment$3", {"name":"doccomment.tagGroup"},
      "*/", -1
    ],
    "comment$4": [
      [0, /^(?!\*\/)/, /^[^]/], "comment$4",
      "*/", -1
    ],
    "s": [
      /^[ \t\r]+/, "s",
      2, "comment", "s", {"name":"comment","token":"comment"},
      0, -1
    ],
    "string": [
      3, "string", "\"\"\"", "string$1",
      3, "string", "\"", "string$6"
    ],
    "string$1": [
      2, "str_1", "string$1", {"name":"str","token":"string"},
      3, "string", "${", "string$2",
      2, "str_4", "string$1", {"name":"str","token":"string"},
      3, "string", "\"\"\"", -1
    ],
    "string$2": [
      1, "l", "string$3"
    ],
    "string$3": [
      1, "Expression", "string$4"
    ],
    "string$4": [
      1, "l", "string$5"
    ],
    "string$5": [
      3, "string", "}", "string$1"
    ],
    "string$6": [
      2, "str_1", "string$6", {"name":"str","token":"string"},
      3, "string", "${", "string$7",
      3, "string", /^(?:(?!\"|\$\{|\\).)+/, "string$6",
      3, "string", "\"", -1
    ],
    "string$7": [
      1, "l", "string$8"
    ],
    "string$8": [
      1, "Expression", "string$9"
    ],
    "string$9": [
      1, "l", "string$10"
    ],
    "string$10": [
      3, "string", "}", "string$6"
    ],
    "Annotation": [
      2, "AnnotationHead", "Annotation$1", {"name":"AnnotationHead","token":"meta"}
    ],
    "Annotation$1": [
      1, "l", "Annotation$2"
    ],
    "Annotation$2": [
      1, "UnescapedAnnotation", -1,
      "[", "Annotation$3"
    ],
    "Annotation$3": [
      1, "l", "Annotation$4"
    ],
    "Annotation$4": [
      1, "UnescapedAnnotation", "Annotation$5"
    ],
    "Annotation$5": [
      1, "l", "Annotation$6"
    ],
    "Annotation$6": [
      0, "Annotation$4",
      "]", -1
    ],
    "Declaration": [
      1, "Modifier", "Declaration$1",
      3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, "Declaration$2",
      3, "keyword", /^interface(?![a-zA-Z¡-￿_0-9])/, "Declaration$2",
      3, "keyword", /^object(?![a-zA-Z¡-￿_0-9])/, "Declaration$3",
      3, "keyword", /^fun(?![a-zA-Z¡-￿_0-9])/, "Declaration$4",
      3, "keyword", /^(?:val|var)(?![a-zA-Z¡-￿_0-9])/, "Declaration$5",
      3, "keyword", /^typealias(?![a-zA-Z¡-￿_0-9])/, "Declaration$6"
    ],
    "Declaration$1": [
      1, "l", "Declaration"
    ],
    "Declaration$2": [
      1, "l", "Declaration$7"
    ],
    "Declaration$3": [
      1, "l", "Declaration$8"
    ],
    "Declaration$4": [
      1, "l", "Declaration$9"
    ],
    "Declaration$5": [
      1, "l", "Declaration$10"
    ],
    "Declaration$6": [
      1, "l", "Declaration$11"
    ],
    "Declaration$7": [
      3, "type def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Declaration$12"
    ],
    "Declaration$8": [
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Declaration$13"
    ],
    "Declaration$9": [
      2, "TypeParams", "Declaration$14", {"name":"TypeParams"},
      0, "Declaration$14"
    ],
    "Declaration$10": [
      2, "TypeParams", "Declaration$15", {"name":"TypeParams"},
      0, "Declaration$15"
    ],
    "Declaration$11": [
      3, "type def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Declaration$16"
    ],
    "Declaration$12": [
      1, "l", "Declaration$17"
    ],
    "Declaration$13": [
      1, "l", "Declaration$18"
    ],
    "Declaration$14": [
      1, "l", "Declaration$19"
    ],
    "Declaration$15": [
      1, "l", "Declaration$20"
    ],
    "Declaration$16": [
      1, "l", "Declaration$21"
    ],
    "Declaration$17": [
      2, "TypeParams", "Declaration$22", {"name":"TypeParams"},
      0, "Declaration$22"
    ],
    "Declaration$18": [
      ":", "Declaration$23",
      0, "Declaration$24"
    ],
    "Declaration$19": [
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Declaration$25"
    ],
    "Declaration$20": [
      1, "VariableDeclaration", "Declaration$26"
    ],
    "Declaration$21": [
      2, "TypeParams", "Declaration$27", {"name":"TypeParams"},
      0, "Declaration$27"
    ],
    "Declaration$22": [
      1, "l", "Declaration$28"
    ],
    "Declaration$23": [
      1, "l", "Declaration$29"
    ],
    "Declaration$24": [
      1, "l", "Declaration$30"
    ],
    "Declaration$25": [
      1, "l", "Declaration$31"
    ],
    "Declaration$26": [
      1, "l", "Declaration$32"
    ],
    "Declaration$27": [
      1, "l", "Declaration$33"
    ],
    "Declaration$28": [
      2, "Constructor", "Declaration$34", {"name":"Constructor"},
      0, "Declaration$34"
    ],
    "Declaration$29": [
      1, "commaSep1_4", "Declaration$24"
    ],
    "Declaration$30": [
      2, "ClassBody", -1, {"name":"ClassBody"},
      0, -1
    ],
    "Declaration$31": [
      2, "FunctionSpec", -1, {"name":"FunctionSpec"}
    ],
    "Declaration$32": [
      3, "keyword", /^where(?![a-zA-Z¡-￿_0-9])/, "Declaration$35",
      0, "Declaration$36"
    ],
    "Declaration$33": [
      3, "operator", "=", "Declaration$37"
    ],
    "Declaration$34": [
      1, "l", "Declaration$38"
    ],
    "Declaration$35": [
      1, "l", "Declaration$39"
    ],
    "Declaration$36": [
      1, "l", "Declaration$40"
    ],
    "Declaration$37": [
      1, "l", "Declaration$41"
    ],
    "Declaration$38": [
      ":", "Declaration$42",
      0, "Declaration$43"
    ],
    "Declaration$39": [
      1, "commaSep1_6", "Declaration$36"
    ],
    "Declaration$40": [
      3, "operator", "=", "Declaration$44",
      3, "keyword", /^by(?![a-zA-Z¡-￿_0-9])/, "Declaration$45",
      0, "Declaration$46"
    ],
    "Declaration$41": [
      1, "Type", "Declaration$47"
    ],
    "Declaration$42": [
      1, "l", "Declaration$48"
    ],
    "Declaration$43": [
      1, "l", "Declaration$49"
    ],
    "Declaration$44": [
      1, "l", "Declaration$50"
    ],
    "Declaration$45": [
      1, "l", "Declaration$51"
    ],
    "Declaration$46": [
      1, "l", "Declaration$52"
    ],
    "Declaration$47": [
      1, "l", "Declaration$53"
    ],
    "Declaration$48": [
      1, "commaSep1_4", "Declaration$43"
    ],
    "Declaration$49": [
      3, "keyword", /^where(?![a-zA-Z¡-￿_0-9])/, "Declaration$54",
      0, "Declaration$55"
    ],
    "Declaration$50": [
      1, "Expression", "Declaration$46"
    ],
    "Declaration$51": [
      1, "Expression", "Declaration$46"
    ],
    "Declaration$52": [
      /^\;?/, "Declaration$56"
    ],
    "Declaration$53": [
      /^\;?/, -1
    ],
    "Declaration$54": [
      1, "l", "Declaration$57"
    ],
    "Declaration$55": [
      1, "l", "Declaration$58"
    ],
    "Declaration$56": [
      1, "l", "Declaration$59"
    ],
    "Declaration$57": [
      1, "commaSep1_6", "Declaration$55"
    ],
    "Declaration$58": [
      2, "ClassBody", -1, {"name":"ClassBody"},
      0, -1
    ],
    "Declaration$59": [
      1, "Getter", "Declaration$60",
      1, "Setter", "Declaration$61",
      0, -1
    ],
    "Declaration$60": [
      1, "l", "Declaration$62"
    ],
    "Declaration$61": [
      1, "l", "Declaration$63"
    ],
    "Declaration$62": [
      ";", "Declaration$64",
      0, -1
    ],
    "Declaration$63": [
      ";", "Declaration$65"
    ],
    "Declaration$64": [
      1, "l", "Declaration$66"
    ],
    "Declaration$65": [
      1, "l", "Declaration$67"
    ],
    "Declaration$66": [
      1, "Setter", -1
    ],
    "Declaration$67": [
      1, "Getter", -1,
      0, -1
    ],
    "Expression": [
      3, "operator", /^(?:\+\+|\-\-|\+|\-|\!)/, "Expression$1",
      3, "meta", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)\@/, "Expression$1",
      1, "Annotation", "Expression$1",
      1, "ExpressionInner", "Expression$2"
    ],
    "Expression$1": [
      1, "l", "Expression"
    ],
    "Expression$2": [
      1, "s", "Expression$3"
    ],
    "Expression$3": [
      3, "operator", /^(?:\+\+|\-\-|\!\!)/, "Expression$4",
      [5, "_lookahead_13"], "Expression$5",
      3, "operator", /^(?:\.\.|\?\:|[\+\-\*\/\%\<\>]\=?|[\!\=]\=\=?|\=|\&\&|\|\|)/, "Expression$6",
      "!", "Expression$7",
      0, "Expression$8",
      3, "keyword", /^as(?![a-zA-Z¡-￿_0-9])/, "Expression$9",
      2, "ArgList", "Expression$4", {"name":"ArgList"},
      /^(?:\?\.|\.|\:\:)/, "Expression$10",
      "[", "Expression$11",
      3, "variable callee", [0, [6, "_lookahead_14"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "Expression$12",
      0, -1
    ],
    "Expression$4": [
      1, "s", "Expression$3"
    ],
    "Expression$5": [
      2, "TypeArgs", "Expression$4", {"name":"TypeArgs"}
    ],
    "Expression$6": [
      1, "l", "Expression$13"
    ],
    "Expression$7": [
      1, "s", "Expression$8"
    ],
    "Expression$8": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, "Expression$6",
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, "Expression$6"
    ],
    "Expression$9": [
      1, "s", "Expression$14"
    ],
    "Expression$10": [
      1, "l", "Expression$15"
    ],
    "Expression$11": [
      1, "l", "Expression$16"
    ],
    "Expression$12": [
      1, "l", "Expression$17"
    ],
    "Expression$13": [
      1, "ExpressionInner", "Expression$4"
    ],
    "Expression$14": [
      "?", "Expression$18",
      0, "Expression$6"
    ],
    "Expression$15": [
      3, "keyword", /^class(?![a-zA-Z¡-￿_0-9])/, "Expression$4",
      3, "property callee", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)(?= *\()/, "Expression$4",
      3, "property", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Expression$4",
      2, "ParenthesizedExpression", "Expression$4", {"name":"ParenthesizedExpression"}
    ],
    "Expression$16": [
      1, "commaSep1_10", "Expression$19"
    ],
    "Expression$17": [
      1, "ExpressionInner", "Expression$4"
    ],
    "Expression$18": [
      1, "s", "Expression$6"
    ],
    "Expression$19": [
      1, "l", "Expression$20"
    ],
    "Expression$20": [
      "]", "Expression$4"
    ],
    "VariableDeclaration": [
      "(", "VariableDeclaration$1",
      0, "VariableDeclaration$5"
    ],
    "VariableDeclaration$1": [
      1, "l", "VariableDeclaration$2"
    ],
    "VariableDeclaration$2": [
      1, "commaSep1_3", "VariableDeclaration$3"
    ],
    "VariableDeclaration$3": [
      1, "l", "VariableDeclaration$4"
    ],
    "VariableDeclaration$4": [
      ")", -1
    ],
    "VariableDeclaration$5": [
      1, "Annotation", "VariableDeclaration$6",
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "VariableDeclaration$7"
    ],
    "VariableDeclaration$6": [
      1, "l", "VariableDeclaration$5"
    ],
    "VariableDeclaration$7": [
      1, "l", "VariableDeclaration$8"
    ],
    "VariableDeclaration$8": [
      ":", "VariableDeclaration$9",
      0, -1
    ],
    "VariableDeclaration$9": [
      1, "l", "VariableDeclaration$10"
    ],
    "VariableDeclaration$10": [
      1, "Type", -1
    ],
    "Block": [
      "{", "Block$1"
    ],
    "Block$1": [
      1, "l", "Block$2"
    ],
    "Block$2": [
      2, "Statement", "Block$3", {"name":"Statement"},
      "}", -1
    ],
    "Block$3": [
      1, "l", "Block$2"
    ],
    "ParenthesizedExpression": [
      "(", "ParenthesizedExpression$1"
    ],
    "ParenthesizedExpression$1": [
      1, "l", "ParenthesizedExpression$2"
    ],
    "ParenthesizedExpression$2": [
      1, "Expression", "ParenthesizedExpression$3"
    ],
    "ParenthesizedExpression$3": [
      1, "l", "ParenthesizedExpression$4"
    ],
    "ParenthesizedExpression$4": [
      ")", -1
    ],
    "doccomment.tagGroup": [
      3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, "doccomment.tagGroup$1",
      3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, "doccomment.tagGroup$2",
      3, "tag", /^\@[a-zA-Z0-9¡-￿_]+/, "doccomment.tagGroup$9",
      "{", "doccomment.tagGroup$3"
    ],
    "doccomment.tagGroup$1": [
      [1, "\n", "\t", " "], "doccomment.tagGroup$1",
      3, "def", /^[a-zA-Z0-9¡-￿_\.]+/, "doccomment.tagGroup$9",
      "<", "doccomment.tagGroup$4",
      0, "doccomment.tagGroup$9"
    ],
    "doccomment.tagGroup$2": [
      [1, "\n", "\t", " "], "doccomment.tagGroup$2",
      3, "type", /^[a-zA-Z0-9¡-￿_\.]+/, "doccomment.tagGroup$9",
      0, "doccomment.tagGroup$9"
    ],
    "doccomment.tagGroup$3": [
      3, "tag", /^\@[a-zA-Z0-9¡-￿_]+/, "doccomment.tagGroup$5"
    ],
    "doccomment.tagGroup$4": [
      3, "type def", /^[a-zA-Z0-9¡-￿_]+/, "doccomment.tagGroup$6"
    ],
    "doccomment.tagGroup$5": [
      /^[\t ]*/, "doccomment.tagGroup$7"
    ],
    "doccomment.tagGroup$6": [
      ">", "doccomment.tagGroup$9"
    ],
    "doccomment.tagGroup$7": [
      1, "doccomment.tagContent", "doccomment.tagGroup$8"
    ],
    "doccomment.tagGroup$8": [
      "}", "doccomment.tagGroup$9"
    ],
    "doccomment.tagGroup$9": [
      [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], "doccomment.tagGroup$10",
      0, -1
    ],
    "doccomment.tagGroup$10": [
      0, "doccomment.tagGroup$9",
      0, "doccomment.tagGroup$9"
    ],
    "str_1": [
      "\\", "str_1$1"
    ],
    "str_1$1": [
      /^[^]/, -1
    ],
    "str_4": [
      [0, /^(?!\"\"\"|\$\{|\\)/, /^[^]/], "str_4$1"
    ],
    "str_4$1": [
      0, "str_4",
      0, -1
    ],
    "AnnotationHead": [
      "@", "AnnotationHead$1"
    ],
    "AnnotationHead$1": [
      1, "s", "AnnotationHead$2"
    ],
    "AnnotationHead$2": [
      [0, [5, "_lookahead"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "AnnotationHead$3",
      0, -1
    ],
    "AnnotationHead$3": [
      1, "s", "AnnotationHead$4"
    ],
    "AnnotationHead$4": [
      ":", -1
    ],
    "UnescapedAnnotation": [
      3, "meta", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "UnescapedAnnotation$1"
    ],
    "UnescapedAnnotation$1": [
      1, "l", "UnescapedAnnotation$2"
    ],
    "UnescapedAnnotation$2": [
      2, "TypeParams", "UnescapedAnnotation$3", {"name":"TypeParams"},
      0, "UnescapedAnnotation$3"
    ],
    "UnescapedAnnotation$3": [
      1, "l", "UnescapedAnnotation$4"
    ],
    "UnescapedAnnotation$4": [
      ".", "UnescapedAnnotation$5",
      2, "ArgList", -1, {"name":"ArgList"},
      0, -1
    ],
    "UnescapedAnnotation$5": [
      1, "l", "UnescapedAnnotation$6"
    ],
    "UnescapedAnnotation$6": [
      3, "meta", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "UnescapedAnnotation$7"
    ],
    "UnescapedAnnotation$7": [
      1, "l", "UnescapedAnnotation$8"
    ],
    "UnescapedAnnotation$8": [
      2, "TypeParams", "UnescapedAnnotation$9", {"name":"TypeParams"},
      0, "UnescapedAnnotation$9"
    ],
    "UnescapedAnnotation$9": [
      1, "l", "UnescapedAnnotation$4"
    ],
    "Modifier": [
      3, "keyword", /^(?:enum|sealed|annotation|data|inner|override|lateinit|public|private|internal|protected|tailred|operator|infix|inline|external|extend|const|abstract|final|open|vararg|noinline|crossinline|reified|expect|actual)(?![a-zA-Z¡-￿_0-9])/, -1,
      1, "Annotation", -1
    ],
    "TypeParams": [
      "<", "TypeParams$1"
    ],
    "TypeParams$1": [
      1, "l", "TypeParams$2"
    ],
    "TypeParams$2": [
      1, "commaSep1", "TypeParams$3"
    ],
    "TypeParams$3": [
      1, "l", "TypeParams$4"
    ],
    "TypeParams$4": [
      ">", -1
    ],
    "Constructor": [
      1, "Modifier", "Constructor$1",
      3, "keyword", /^constructor(?![a-zA-Z¡-￿_0-9])/, "Constructor$2",
      0, "Constructor$2"
    ],
    "Constructor$1": [
      1, "l", "Constructor"
    ],
    "Constructor$2": [
      1, "l", "Constructor$3"
    ],
    "Constructor$3": [
      2, "ParamList", -1, {"name":"ParamList"}
    ],
    "commaSep1_4": [
      1, "Modifier", "commaSep1_4$1",
      1, "Type", "commaSep1_4$2"
    ],
    "commaSep1_4$1": [
      1, "l", "commaSep1_4"
    ],
    "commaSep1_4$2": [
      1, "l", "commaSep1_4$3"
    ],
    "commaSep1_4$3": [
      3, "keyword", /^by(?![a-zA-Z¡-￿_0-9])/, "commaSep1_4$4",
      2, "ArgList", "commaSep1_4$6", {"name":"ArgList"},
      0, "commaSep1_4$6"
    ],
    "commaSep1_4$4": [
      1, "l", "commaSep1_4$5"
    ],
    "commaSep1_4$5": [
      1, "Expression", "commaSep1_4$6"
    ],
    "commaSep1_4$6": [
      1, "s", "commaSep1_4$7"
    ],
    "commaSep1_4$7": [
      ",", "commaSep1_4$8",
      0, -1
    ],
    "commaSep1_4$8": [
      1, "l", "commaSep1_4$9"
    ],
    "commaSep1_4$9": [
      1, "Modifier", "commaSep1_4$10",
      1, "Type", "commaSep1_4$11",
      0, "commaSep1_4$7"
    ],
    "commaSep1_4$10": [
      1, "l", "commaSep1_4$9"
    ],
    "commaSep1_4$11": [
      1, "l", "commaSep1_4$12"
    ],
    "commaSep1_4$12": [
      3, "keyword", /^by(?![a-zA-Z¡-￿_0-9])/, "commaSep1_4$13",
      2, "ArgList", "commaSep1_4$14", {"name":"ArgList"},
      0, "commaSep1_4$14"
    ],
    "commaSep1_4$13": [
      1, "l", "commaSep1_4$15"
    ],
    "commaSep1_4$14": [
      1, "s", "commaSep1_4$7"
    ],
    "commaSep1_4$15": [
      1, "Expression", "commaSep1_4$14"
    ],
    "ClassBody": [
      "{", "ClassBody$1"
    ],
    "ClassBody$1": [
      1, "l", "ClassBody$2"
    ],
    "ClassBody$2": [
      1, "Annotation", "ClassBody$3",
      1, "Declaration", "ClassBody$3",
      3, "keyword", /^companion(?![a-zA-Z¡-￿_0-9])/, "ClassBody$4",
      3, "keyword", /^init(?![a-zA-Z¡-￿_0-9])/, "ClassBody$5",
      3, "keyword", /^constructor(?![a-zA-Z¡-￿_0-9])/, "ClassBody$6",
      1, "commaSep1_7", "ClassBody$7",
      "}", -1
    ],
    "ClassBody$3": [
      1, "l", "ClassBody$2"
    ],
    "ClassBody$4": [
      1, "l", "ClassBody$8"
    ],
    "ClassBody$5": [
      1, "l", "ClassBody$9"
    ],
    "ClassBody$6": [
      1, "l", "ClassBody$10"
    ],
    "ClassBody$7": [
      1, "l", "ClassBody$11"
    ],
    "ClassBody$8": [
      3, "keyword", /^object(?![a-zA-Z¡-￿_0-9])/, "ClassBody$12"
    ],
    "ClassBody$9": [
      2, "Block", "ClassBody$3", {"name":"Block"}
    ],
    "ClassBody$10": [
      2, "ParamList", "ClassBody$13", {"name":"ParamList"}
    ],
    "ClassBody$11": [
      ";", "ClassBody$3"
    ],
    "ClassBody$12": [
      1, "l", "ClassBody$14"
    ],
    "ClassBody$13": [
      1, "l", "ClassBody$15"
    ],
    "ClassBody$14": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)?/, "ClassBody$16"
    ],
    "ClassBody$15": [
      ":", "ClassBody$17",
      0, "ClassBody$18"
    ],
    "ClassBody$16": [
      1, "l", "ClassBody$19"
    ],
    "ClassBody$17": [
      1, "l", "ClassBody$20"
    ],
    "ClassBody$18": [
      1, "l", "ClassBody$21"
    ],
    "ClassBody$19": [
      ":", "ClassBody$22",
      0, "ClassBody$23"
    ],
    "ClassBody$20": [
      3, "keyword", /^this(?![a-zA-Z¡-￿_0-9])/, "ClassBody$24",
      3, "keyword", /^super(?![a-zA-Z¡-￿_0-9])/, "ClassBody$24"
    ],
    "ClassBody$21": [
      2, "Block", "ClassBody$3", {"name":"Block"},
      0, "ClassBody$3"
    ],
    "ClassBody$22": [
      1, "l", "ClassBody$25"
    ],
    "ClassBody$23": [
      1, "l", "ClassBody$26"
    ],
    "ClassBody$24": [
      1, "l", "ClassBody$27"
    ],
    "ClassBody$25": [
      1, "commaSep1_4", "ClassBody$23"
    ],
    "ClassBody$26": [
      2, "ClassBody", "ClassBody$3", {"name":"ClassBody"},
      0, "ClassBody$3"
    ],
    "ClassBody$27": [
      2, "ArgList", "ClassBody$18", {"name":"ArgList"}
    ],
    "FunctionSpec": [
      2, "ParamList", "FunctionSpec$1", {"name":"ParamList"}
    ],
    "FunctionSpec$1": [
      1, "l", "FunctionSpec$2"
    ],
    "FunctionSpec$2": [
      ":", "FunctionSpec$3",
      0, "FunctionSpec$5"
    ],
    "FunctionSpec$3": [
      1, "l", "FunctionSpec$4"
    ],
    "FunctionSpec$4": [
      1, "Type", "FunctionSpec$5"
    ],
    "FunctionSpec$5": [
      1, "l", "FunctionSpec$6"
    ],
    "FunctionSpec$6": [
      3, "keyword", /^where(?![a-zA-Z¡-￿_0-9])/, "FunctionSpec$7",
      0, "FunctionSpec$9"
    ],
    "FunctionSpec$7": [
      1, "l", "FunctionSpec$8"
    ],
    "FunctionSpec$8": [
      1, "commaSep1_6", "FunctionSpec$9"
    ],
    "FunctionSpec$9": [
      1, "l", "FunctionSpec$10"
    ],
    "FunctionSpec$10": [
      2, "Block", -1, {"name":"Block"},
      3, "operator", "=", "FunctionSpec$11"
    ],
    "FunctionSpec$11": [
      1, "l", "FunctionSpec$12"
    ],
    "FunctionSpec$12": [
      1, "Expression", -1
    ],
    "commaSep1_6": [
      1, "Annotation", "commaSep1_6$1",
      3, "variable", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_6$2"
    ],
    "commaSep1_6$1": [
      1, "l", "commaSep1_6"
    ],
    "commaSep1_6$2": [
      1, "l", "commaSep1_6$3"
    ],
    "commaSep1_6$3": [
      ":", "commaSep1_6$4"
    ],
    "commaSep1_6$4": [
      1, "l", "commaSep1_6$5"
    ],
    "commaSep1_6$5": [
      1, "Type", "commaSep1_6$6"
    ],
    "commaSep1_6$6": [
      1, "s", "commaSep1_6$7"
    ],
    "commaSep1_6$7": [
      ",", "commaSep1_6$8",
      0, -1
    ],
    "commaSep1_6$8": [
      1, "l", "commaSep1_6$9"
    ],
    "commaSep1_6$9": [
      1, "Annotation", "commaSep1_6$10",
      3, "variable", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_6$11",
      0, "commaSep1_6$7"
    ],
    "commaSep1_6$10": [
      1, "l", "commaSep1_6$9"
    ],
    "commaSep1_6$11": [
      1, "l", "commaSep1_6$12"
    ],
    "commaSep1_6$12": [
      ":", "commaSep1_6$13"
    ],
    "commaSep1_6$13": [
      1, "l", "commaSep1_6$14"
    ],
    "commaSep1_6$14": [
      1, "Type", "commaSep1_6$15"
    ],
    "commaSep1_6$15": [
      1, "s", "commaSep1_6$7"
    ],
    "Type": [
      1, "Annotation", "Type$1",
      3, "keyword", /^suspend(?![a-zA-Z¡-￿_0-9])/, "Type$1",
      3, "keyword", /^dynamic(?![a-zA-Z¡-￿_0-9])/, "Type$16",
      3, "type", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Type$2",
      [5, "_lookahead_1"], "Type$3",
      "(", "Type$4"
    ],
    "Type$1": [
      1, "l", "Type"
    ],
    "Type$2": [
      1, "s", "Type$5"
    ],
    "Type$3": [
      2, "ParamTypeList", "Type$6", {"name":"ParamTypeList"}
    ],
    "Type$4": [
      1, "l", "Type$7"
    ],
    "Type$5": [
      ".", "Type$8",
      0, "Type$16"
    ],
    "Type$6": [
      1, "l", "Type$9"
    ],
    "Type$7": [
      1, "Type", "Type$10"
    ],
    "Type$8": [
      1, "l", "Type$11"
    ],
    "Type$9": [
      3, "operator", "->", "Type$12"
    ],
    "Type$10": [
      1, "l", "Type$13"
    ],
    "Type$11": [
      3, "type", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "Type$14"
    ],
    "Type$12": [
      1, "l", "Type$15"
    ],
    "Type$13": [
      ")", "Type$16"
    ],
    "Type$14": [
      1, "s", "Type$5"
    ],
    "Type$15": [
      1, "Type", "Type$16"
    ],
    "Type$16": [
      1, "s", "Type$17"
    ],
    "Type$17": [
      "?", "Type$18",
      0, -1
    ],
    "Type$18": [
      1, "s", "Type$17"
    ],
    "Getter": [
      1, "Modifier", "Getter$1",
      3, "keyword", /^get(?![a-zA-Z¡-￿_0-9])/, "Getter$2"
    ],
    "Getter$1": [
      1, "l", "Getter"
    ],
    "Getter$2": [
      1, "l", "Getter$3"
    ],
    "Getter$3": [
      "(", "Getter$4",
      0, "Getter$6"
    ],
    "Getter$4": [
      1, "l", "Getter$5"
    ],
    "Getter$5": [
      ")", "Getter$6"
    ],
    "Getter$6": [
      1, "l", "Getter$7"
    ],
    "Getter$7": [
      ":", "Getter$8",
      0, "Getter$10"
    ],
    "Getter$8": [
      1, "l", "Getter$9"
    ],
    "Getter$9": [
      1, "Type", "Getter$10"
    ],
    "Getter$10": [
      1, "l", "Getter$11"
    ],
    "Getter$11": [
      2, "Block", -1, {"name":"Block"},
      3, "operator", "=", "Getter$12"
    ],
    "Getter$12": [
      1, "l", "Getter$13"
    ],
    "Getter$13": [
      1, "Expression", -1
    ],
    "Setter": [
      1, "Modifier", "Setter$1",
      3, "keyword", /^set(?![a-zA-Z¡-￿_0-9])/, "Setter$2"
    ],
    "Setter$1": [
      1, "l", "Setter"
    ],
    "Setter$2": [
      1, "l", "Setter$3"
    ],
    "Setter$3": [
      2, "ParamList", "Setter$4", {"name":"ParamList"},
      0, "Setter$4"
    ],
    "Setter$4": [
      1, "l", "Setter$5"
    ],
    "Setter$5": [
      ":", "Setter$6",
      0, "Setter$8"
    ],
    "Setter$6": [
      1, "l", "Setter$7"
    ],
    "Setter$7": [
      1, "Type", "Setter$8"
    ],
    "Setter$8": [
      1, "l", "Setter$9"
    ],
    "Setter$9": [
      2, "Block", -1, {"name":"Block"},
      3, "operator", "=", "Setter$10"
    ],
    "Setter$10": [
      1, "l", "Setter$11"
    ],
    "Setter$11": [
      1, "Expression", -1
    ],
    "ExpressionInner": [
      2, "ParenthesizedExpression", -1, {"name":"ParenthesizedExpression"},
      3, "atom", /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, -1,
      3, "number", /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[uU]?L?/, -1,
      1, "string", -1,
      3, "string-2", /^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
      2, "Lambda", -1, {"name":"Lambda"},
      3, "keyword", /^object(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$1",
      3, "keyword", /^fun(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$7",
      3, "keyword", /^this(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$9",
      3, "keyword", /^super(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$13",
      3, "keyword", /^if(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$23",
      3, "keyword", /^when(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$28",
      3, "keyword", /^try(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$43",
      3, "keyword", /^throw(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$46",
      3, "keyword", /^return(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$48",
      3, "keyword", /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$54",
      2, "calleeClassName", -1, {"name":"calleeClassName","token":"callee"},
      3, "type", /^[A-Z][a-zA-Z¡-￿_0-9]*/, -1,
      3, "variable callee", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)(?= *\()/, -1,
      3, "variable", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, -1
    ],
    "ExpressionInner$1": [
      1, "l", "ExpressionInner$2"
    ],
    "ExpressionInner$2": [
      ":", "ExpressionInner$3",
      0, "ExpressionInner$4"
    ],
    "ExpressionInner$3": [
      1, "l", "ExpressionInner$5"
    ],
    "ExpressionInner$4": [
      2, "ClassBody", -1, {"name":"ClassBody"}
    ],
    "ExpressionInner$5": [
      1, "commaSep1_4", "ExpressionInner$6"
    ],
    "ExpressionInner$6": [
      1, "l", "ExpressionInner$4"
    ],
    "ExpressionInner$7": [
      1, "l", "ExpressionInner$8"
    ],
    "ExpressionInner$8": [
      2, "FunctionSpec", -1, {"name":"FunctionSpec"}
    ],
    "ExpressionInner$9": [
      1, "s", "ExpressionInner$10"
    ],
    "ExpressionInner$10": [
      "@", "ExpressionInner$11",
      0, -1
    ],
    "ExpressionInner$11": [
      1, "s", "ExpressionInner$12"
    ],
    "ExpressionInner$12": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, -1
    ],
    "ExpressionInner$13": [
      1, "s", "ExpressionInner$14"
    ],
    "ExpressionInner$14": [
      "<", "ExpressionInner$15",
      0, "ExpressionInner$16"
    ],
    "ExpressionInner$15": [
      1, "l", "ExpressionInner$17"
    ],
    "ExpressionInner$16": [
      "@", "ExpressionInner$18",
      0, -1
    ],
    "ExpressionInner$17": [
      1, "Type", "ExpressionInner$19"
    ],
    "ExpressionInner$18": [
      1, "s", "ExpressionInner$20"
    ],
    "ExpressionInner$19": [
      1, "l", "ExpressionInner$21"
    ],
    "ExpressionInner$20": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, -1
    ],
    "ExpressionInner$21": [
      ">", "ExpressionInner$22"
    ],
    "ExpressionInner$22": [
      1, "s", "ExpressionInner$16"
    ],
    "ExpressionInner$23": [
      1, "l", "ExpressionInner$24"
    ],
    "ExpressionInner$24": [
      2, "ParenthesizedExpression", "ExpressionInner$25", {"name":"ParenthesizedExpression"}
    ],
    "ExpressionInner$25": [
      1, "l", "ExpressionInner$26"
    ],
    "ExpressionInner$26": [
      2, "Block", "ExpressionInner$27", {"name":"Block"},
      2, "Statement", "ExpressionInner$27", {"name":"Statement"},
      ";", "ExpressionInner$27"
    ],
    "ExpressionInner$27": [
      2, "Alternative", -1, {"name":"Alternative"}
    ],
    "ExpressionInner$28": [
      1, "l", "ExpressionInner$29"
    ],
    "ExpressionInner$29": [
      "(", "ExpressionInner$30"
    ],
    "ExpressionInner$30": [
      1, "l", "ExpressionInner$31"
    ],
    "ExpressionInner$31": [
      1, "Annotation", "ExpressionInner$32",
      3, "keyword", /^val(?![a-zA-Z¡-￿_0-9])/, "ExpressionInner$33",
      0, "ExpressionInner$34"
    ],
    "ExpressionInner$32": [
      1, "l", "ExpressionInner$31"
    ],
    "ExpressionInner$33": [
      1, "l", "ExpressionInner$35"
    ],
    "ExpressionInner$34": [
      1, "l", "ExpressionInner$36"
    ],
    "ExpressionInner$35": [
      1, "VariableDeclaration", "ExpressionInner$37"
    ],
    "ExpressionInner$36": [
      1, "Expression", "ExpressionInner$38"
    ],
    "ExpressionInner$37": [
      1, "l", "ExpressionInner$39"
    ],
    "ExpressionInner$38": [
      1, "l", "ExpressionInner$40"
    ],
    "ExpressionInner$39": [
      3, "operator", "=", "ExpressionInner$34"
    ],
    "ExpressionInner$40": [
      ")", "ExpressionInner$41"
    ],
    "ExpressionInner$41": [
      1, "l", "ExpressionInner$42"
    ],
    "ExpressionInner$42": [
      2, "WhenBody", -1, {"name":"WhenBody"}
    ],
    "ExpressionInner$43": [
      1, "l", "ExpressionInner$44"
    ],
    "ExpressionInner$44": [
      2, "Block", "ExpressionInner$45", {"name":"Block"}
    ],
    "ExpressionInner$45": [
      2, "CatchFinally", -1, {"name":"CatchFinally"}
    ],
    "ExpressionInner$46": [
      1, "s", "ExpressionInner$47"
    ],
    "ExpressionInner$47": [
      1, "Expression", -1
    ],
    "ExpressionInner$48": [
      1, "s", "ExpressionInner$49"
    ],
    "ExpressionInner$49": [
      "@", "ExpressionInner$50",
      0, "ExpressionInner$51"
    ],
    "ExpressionInner$50": [
      1, "s", "ExpressionInner$52"
    ],
    "ExpressionInner$51": [
      1, "Expression", -1,
      0, -1
    ],
    "ExpressionInner$52": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "ExpressionInner$53"
    ],
    "ExpressionInner$53": [
      1, "s", "ExpressionInner$51"
    ],
    "ExpressionInner$54": [
      1, "s", "ExpressionInner$55"
    ],
    "ExpressionInner$55": [
      "@", "ExpressionInner$56",
      0, -1
    ],
    "ExpressionInner$56": [
      1, "s", "ExpressionInner$57"
    ],
    "ExpressionInner$57": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, -1
    ],
    "_lookahead_13": [
      2, "TypeArgs", -1, {"name":"TypeArgs"}
    ],
    "ArgList": [
      "(", "ArgList$1"
    ],
    "ArgList$1": [
      1, "l", "ArgList$2"
    ],
    "ArgList$2": [
      1, "commaSep1_2", "ArgList$3",
      0, "ArgList$3"
    ],
    "ArgList$3": [
      1, "l", "ArgList$4"
    ],
    "ArgList$4": [
      ")", -1
    ],
    "_lookahead_14": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "TypeArgs": [
      "<", "TypeArgs$1"
    ],
    "TypeArgs$1": [
      1, "l", "TypeArgs$2"
    ],
    "TypeArgs$2": [
      1, "commaSep1_9", "TypeArgs$3"
    ],
    "TypeArgs$3": [
      1, "l", "TypeArgs$4"
    ],
    "TypeArgs$4": [
      ">", -1
    ],
    "commaSep1_10": [
      1, "Expression", "commaSep1_10$1"
    ],
    "commaSep1_10$1": [
      1, "s", "commaSep1_10$2"
    ],
    "commaSep1_10$2": [
      ",", "commaSep1_10$3",
      0, -1
    ],
    "commaSep1_10$3": [
      1, "l", "commaSep1_10$4"
    ],
    "commaSep1_10$4": [
      1, "Expression", "commaSep1_10$5",
      0, "commaSep1_10$2"
    ],
    "commaSep1_10$5": [
      1, "s", "commaSep1_10$2"
    ],
    "commaSep1_3": [
      1, "VariableDeclaration", "commaSep1_3$1"
    ],
    "commaSep1_3$1": [
      1, "s", "commaSep1_3$2"
    ],
    "commaSep1_3$2": [
      ",", "commaSep1_3$3",
      0, -1
    ],
    "commaSep1_3$3": [
      1, "l", "commaSep1_3$4"
    ],
    "commaSep1_3$4": [
      1, "VariableDeclaration", "commaSep1_3$5",
      0, "commaSep1_3$2"
    ],
    "commaSep1_3$5": [
      1, "s", "commaSep1_3$2"
    ],
    "doccomment.tagContent": [
      3, "attribute", "{", "doccomment.tagContent$1",
      3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, "doccomment.tagContent",
      "\n", "doccomment.tagContent$2",
      0, -1
    ],
    "doccomment.tagContent$1": [
      1, "doccomment.tagContent", "doccomment.tagContent$3"
    ],
    "doccomment.tagContent$2": [
      /^[\t ]*(?:\*(?!\/)[\t ]*)?/, "doccomment.tagContent"
    ],
    "doccomment.tagContent$3": [
      /^(?=\*\/)/, "doccomment.tagContent",
      3, "attribute", "}", "doccomment.tagContent"
    ],
    "_lookahead": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead$1"
    ],
    "_lookahead$1": [
      1, "s", "_lookahead$2"
    ],
    "_lookahead$2": [
      ":", -1
    ],
    "commaSep1": [
      1, "Modifier", "commaSep1$1",
      3, "type", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1$2"
    ],
    "commaSep1$1": [
      1, "l", "commaSep1"
    ],
    "commaSep1$2": [
      1, "l", "commaSep1$3"
    ],
    "commaSep1$3": [
      ":", "commaSep1$4",
      0, "commaSep1$6"
    ],
    "commaSep1$4": [
      1, "l", "commaSep1$5"
    ],
    "commaSep1$5": [
      1, "Type", "commaSep1$6"
    ],
    "commaSep1$6": [
      1, "s", "commaSep1$7"
    ],
    "commaSep1$7": [
      ",", "commaSep1$8",
      0, -1
    ],
    "commaSep1$8": [
      1, "l", "commaSep1$9"
    ],
    "commaSep1$9": [
      1, "Modifier", "commaSep1$10",
      3, "type", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1$11",
      0, "commaSep1$7"
    ],
    "commaSep1$10": [
      1, "l", "commaSep1$9"
    ],
    "commaSep1$11": [
      1, "l", "commaSep1$12"
    ],
    "commaSep1$12": [
      ":", "commaSep1$13",
      0, "commaSep1$14"
    ],
    "commaSep1$13": [
      1, "l", "commaSep1$15"
    ],
    "commaSep1$14": [
      1, "s", "commaSep1$7"
    ],
    "commaSep1$15": [
      1, "Type", "commaSep1$14"
    ],
    "ParamList": [
      "(", "ParamList$1"
    ],
    "ParamList$1": [
      1, "l", "ParamList$2"
    ],
    "ParamList$2": [
      1, "commaSep1_5", "ParamList$3",
      0, "ParamList$3"
    ],
    "ParamList$3": [
      1, "l", "ParamList$4"
    ],
    "ParamList$4": [
      ")", -1
    ],
    "commaSep1_7": [
      1, "Modifier", "commaSep1_7$1",
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_7$2"
    ],
    "commaSep1_7$1": [
      1, "l", "commaSep1_7"
    ],
    "commaSep1_7$2": [
      1, "l", "commaSep1_7$3"
    ],
    "commaSep1_7$3": [
      2, "ArgList", "commaSep1_7$4", {"name":"ArgList"},
      0, "commaSep1_7$4"
    ],
    "commaSep1_7$4": [
      1, "l", "commaSep1_7$5"
    ],
    "commaSep1_7$5": [
      2, "ClassBody", "commaSep1_7$6", {"name":"ClassBody"},
      0, "commaSep1_7$6"
    ],
    "commaSep1_7$6": [
      1, "s", "commaSep1_7$7"
    ],
    "commaSep1_7$7": [
      ",", "commaSep1_7$8",
      0, -1
    ],
    "commaSep1_7$8": [
      1, "l", "commaSep1_7$9"
    ],
    "commaSep1_7$9": [
      1, "Modifier", "commaSep1_7$10",
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_7$11",
      0, "commaSep1_7$7"
    ],
    "commaSep1_7$10": [
      1, "l", "commaSep1_7$9"
    ],
    "commaSep1_7$11": [
      1, "l", "commaSep1_7$12"
    ],
    "commaSep1_7$12": [
      2, "ArgList", "commaSep1_7$13", {"name":"ArgList"},
      0, "commaSep1_7$13"
    ],
    "commaSep1_7$13": [
      1, "l", "commaSep1_7$14"
    ],
    "commaSep1_7$14": [
      2, "ClassBody", "commaSep1_7$15", {"name":"ClassBody"},
      0, "commaSep1_7$15"
    ],
    "commaSep1_7$15": [
      1, "s", "commaSep1_7$7"
    ],
    "_lookahead_1": [
      "(", "_lookahead_1$1"
    ],
    "_lookahead_1$1": [
      1, "l", "_lookahead_1$2"
    ],
    "_lookahead_1$2": [
      2, "AnnotationHead", -1, {"name":"AnnotationHead","token":"meta"},
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead_1$3"
    ],
    "_lookahead_1$3": [
      1, "l", "_lookahead_1$4"
    ],
    "_lookahead_1$4": [
      ")", "_lookahead_1$5",
      ":", -1
    ],
    "_lookahead_1$5": [
      1, "l", "_lookahead_1$6"
    ],
    "_lookahead_1$6": [
      "->", -1
    ],
    "ParamTypeList": [
      "(", "ParamTypeList$1"
    ],
    "ParamTypeList$1": [
      1, "l", "ParamTypeList$2"
    ],
    "ParamTypeList$2": [
      1, "commaSep1_1", "ParamTypeList$3",
      0, "ParamTypeList$3"
    ],
    "ParamTypeList$3": [
      1, "l", "ParamTypeList$4"
    ],
    "ParamTypeList$4": [
      ")", -1
    ],
    "Lambda": [
      "{", "Lambda$1"
    ],
    "Lambda$1": [
      1, "l", "Lambda$2"
    ],
    "Lambda$2": [
      [5, "_lookahead_5"], "Lambda$3",
      0, "Lambda$6"
    ],
    "Lambda$3": [
      1, "VariableDeclaration", "Lambda$4"
    ],
    "Lambda$4": [
      1, "l", "Lambda$5"
    ],
    "Lambda$5": [
      3, "operator", "->", "Lambda$6"
    ],
    "Lambda$6": [
      1, "l", "Lambda$7"
    ],
    "Lambda$7": [
      2, "Statement", "Lambda$8", {"name":"Statement"},
      "}", -1
    ],
    "Lambda$8": [
      1, "l", "Lambda$7"
    ],
    "calleeClassName": [
      3, "type", /^[A-Z][a-zA-Z¡-￿_0-9]*/, -1
    ],
    "Alternative": [
      [5, "_lookahead_6"], "Alternative$1",
      0, -1
    ],
    "Alternative$1": [
      1, "l", "Alternative$2"
    ],
    "Alternative$2": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9])/, "Alternative$3"
    ],
    "Alternative$3": [
      1, "l", "Alternative$4"
    ],
    "Alternative$4": [
      2, "Block", -1, {"name":"Block"},
      2, "Statement", -1, {"name":"Statement"},
      ";", -1
    ],
    "WhenBody": [
      "{", "WhenBody$1"
    ],
    "WhenBody$1": [
      1, "l", "WhenBody$2"
    ],
    "WhenBody$2": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9])/, "WhenBody$3",
      1, "commaSep1_8", "WhenBody$3"
    ],
    "WhenBody$3": [
      1, "l", "WhenBody$4"
    ],
    "WhenBody$4": [
      3, "operator", "->", "WhenBody$5"
    ],
    "WhenBody$5": [
      1, "l", "WhenBody$6"
    ],
    "WhenBody$6": [
      2, "Block", "WhenBody$7", {"name":"Block"},
      2, "Statement", "WhenBody$7", {"name":"Statement"},
      ";", "WhenBody$7"
    ],
    "WhenBody$7": [
      1, "l", "WhenBody$8"
    ],
    "WhenBody$8": [
      "}", -1
    ],
    "CatchFinally": [
      [5, "_lookahead_11"], "CatchFinally$1",
      [5, "_lookahead_12"], "CatchFinally$16",
      0, -1
    ],
    "CatchFinally$1": [
      1, "l", "CatchFinally$2"
    ],
    "CatchFinally$2": [
      3, "keyword", /^catch(?![a-zA-Z¡-￿_0-9])/, "CatchFinally$3"
    ],
    "CatchFinally$3": [
      1, "l", "CatchFinally$4"
    ],
    "CatchFinally$4": [
      "(", "CatchFinally$5"
    ],
    "CatchFinally$5": [
      1, "l", "CatchFinally$6"
    ],
    "CatchFinally$6": [
      1, "Annotation", "CatchFinally$7",
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "CatchFinally$8"
    ],
    "CatchFinally$7": [
      1, "l", "CatchFinally$6"
    ],
    "CatchFinally$8": [
      1, "l", "CatchFinally$9"
    ],
    "CatchFinally$9": [
      ":", "CatchFinally$10"
    ],
    "CatchFinally$10": [
      1, "l", "CatchFinally$11"
    ],
    "CatchFinally$11": [
      1, "Type", "CatchFinally$12"
    ],
    "CatchFinally$12": [
      1, "l", "CatchFinally$13"
    ],
    "CatchFinally$13": [
      ")", "CatchFinally$14"
    ],
    "CatchFinally$14": [
      1, "l", "CatchFinally$15"
    ],
    "CatchFinally$15": [
      2, "Block", "CatchFinally", {"name":"Block"}
    ],
    "CatchFinally$16": [
      1, "l", "CatchFinally$17"
    ],
    "CatchFinally$17": [
      3, "keyword", /^finally(?![a-zA-Z¡-￿_0-9])/, "CatchFinally$18"
    ],
    "CatchFinally$18": [
      1, "l", "CatchFinally$19"
    ],
    "CatchFinally$19": [
      2, "Block", -1, {"name":"Block"}
    ],
    "commaSep1_2": [
      1, "Annotation", "commaSep1_2$1",
      [0, [5, "_lookahead_4"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "commaSep1_2$2",
      0, "commaSep1_2$3"
    ],
    "commaSep1_2$1": [
      1, "l", "commaSep1_2"
    ],
    "commaSep1_2$2": [
      1, "l", "commaSep1_2$4"
    ],
    "commaSep1_2$3": [
      1, "l", "commaSep1_2$5"
    ],
    "commaSep1_2$4": [
      3, "operator", "=", "commaSep1_2$3"
    ],
    "commaSep1_2$5": [
      /^\*?/, "commaSep1_2$6"
    ],
    "commaSep1_2$6": [
      1, "l", "commaSep1_2$7"
    ],
    "commaSep1_2$7": [
      1, "Expression", "commaSep1_2$8"
    ],
    "commaSep1_2$8": [
      1, "s", "commaSep1_2$9"
    ],
    "commaSep1_2$9": [
      ",", "commaSep1_2$10",
      0, -1
    ],
    "commaSep1_2$10": [
      1, "l", "commaSep1_2$11"
    ],
    "commaSep1_2$11": [
      1, "Annotation", "commaSep1_2$12",
      [0, [5, "_lookahead_15"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "commaSep1_2$13",
      0, "commaSep1_2$14",
      0, "commaSep1_2$9"
    ],
    "commaSep1_2$12": [
      1, "l", "commaSep1_2$11"
    ],
    "commaSep1_2$13": [
      1, "l", "commaSep1_2$15"
    ],
    "commaSep1_2$14": [
      1, "l", "commaSep1_2$16"
    ],
    "commaSep1_2$15": [
      3, "operator", "=", "commaSep1_2$14"
    ],
    "commaSep1_2$16": [
      /^\*?/, "commaSep1_2$17"
    ],
    "commaSep1_2$17": [
      1, "l", "commaSep1_2$18"
    ],
    "commaSep1_2$18": [
      1, "Expression", "commaSep1_2$19"
    ],
    "commaSep1_2$19": [
      1, "s", "commaSep1_2$9"
    ],
    "commaSep1_9": [
      "*", "commaSep1_9$3",
      0, "commaSep1_9$1"
    ],
    "commaSep1_9$1": [
      1, "Annotation", "commaSep1_9$2",
      3, "keyword", /^(?:in|out)(?![a-zA-Z¡-￿_0-9])/, "commaSep1_9$2",
      1, "Type", "commaSep1_9$3"
    ],
    "commaSep1_9$2": [
      1, "l", "commaSep1_9$1"
    ],
    "commaSep1_9$3": [
      1, "s", "commaSep1_9$4"
    ],
    "commaSep1_9$4": [
      ",", "commaSep1_9$5",
      0, -1
    ],
    "commaSep1_9$5": [
      1, "l", "commaSep1_9$6"
    ],
    "commaSep1_9$6": [
      "*", "commaSep1_9$7",
      0, "commaSep1_9$8",
      0, "commaSep1_9$4"
    ],
    "commaSep1_9$7": [
      1, "s", "commaSep1_9$4"
    ],
    "commaSep1_9$8": [
      1, "Annotation", "commaSep1_9$9",
      3, "keyword", /^(?:in|out)(?![a-zA-Z¡-￿_0-9])/, "commaSep1_9$9",
      1, "Type", "commaSep1_9$7"
    ],
    "commaSep1_9$9": [
      1, "l", "commaSep1_9$8"
    ],
    "commaSep1_5": [
      1, "Modifier", "commaSep1_5$1",
      3, "keyword", /^(?:val|var)(?![a-zA-Z¡-￿_0-9])/, "commaSep1_5$2",
      0, "commaSep1_5$2"
    ],
    "commaSep1_5$1": [
      1, "l", "commaSep1_5"
    ],
    "commaSep1_5$2": [
      1, "l", "commaSep1_5$3"
    ],
    "commaSep1_5$3": [
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_5$4"
    ],
    "commaSep1_5$4": [
      1, "l", "commaSep1_5$5"
    ],
    "commaSep1_5$5": [
      ":", "commaSep1_5$6",
      0, "commaSep1_5$7"
    ],
    "commaSep1_5$6": [
      1, "l", "commaSep1_5$8"
    ],
    "commaSep1_5$7": [
      1, "l", "commaSep1_5$9"
    ],
    "commaSep1_5$8": [
      1, "Type", "commaSep1_5$7"
    ],
    "commaSep1_5$9": [
      3, "operator", "=", "commaSep1_5$10",
      0, "commaSep1_5$12"
    ],
    "commaSep1_5$10": [
      1, "l", "commaSep1_5$11"
    ],
    "commaSep1_5$11": [
      1, "Expression", "commaSep1_5$12"
    ],
    "commaSep1_5$12": [
      1, "s", "commaSep1_5$13"
    ],
    "commaSep1_5$13": [
      ",", "commaSep1_5$14",
      0, -1
    ],
    "commaSep1_5$14": [
      1, "l", "commaSep1_5$15"
    ],
    "commaSep1_5$15": [
      1, "Modifier", "commaSep1_5$16",
      3, "keyword", /^(?:val|var)(?![a-zA-Z¡-￿_0-9])/, "commaSep1_5$17",
      0, "commaSep1_5$17",
      0, "commaSep1_5$13"
    ],
    "commaSep1_5$16": [
      1, "l", "commaSep1_5$15"
    ],
    "commaSep1_5$17": [
      1, "l", "commaSep1_5$18"
    ],
    "commaSep1_5$18": [
      3, "def", /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "commaSep1_5$19"
    ],
    "commaSep1_5$19": [
      1, "l", "commaSep1_5$20"
    ],
    "commaSep1_5$20": [
      ":", "commaSep1_5$21",
      0, "commaSep1_5$22"
    ],
    "commaSep1_5$21": [
      1, "l", "commaSep1_5$23"
    ],
    "commaSep1_5$22": [
      1, "l", "commaSep1_5$24"
    ],
    "commaSep1_5$23": [
      1, "Type", "commaSep1_5$22"
    ],
    "commaSep1_5$24": [
      3, "operator", "=", "commaSep1_5$25",
      0, "commaSep1_5$26"
    ],
    "commaSep1_5$25": [
      1, "l", "commaSep1_5$27"
    ],
    "commaSep1_5$26": [
      1, "s", "commaSep1_5$13"
    ],
    "commaSep1_5$27": [
      1, "Expression", "commaSep1_5$26"
    ],
    "commaSep1_1": [
      [0, [5, "_lookahead_2"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "commaSep1_1$1",
      0, "commaSep1_1$2"
    ],
    "commaSep1_1$1": [
      1, "l", "commaSep1_1$3"
    ],
    "commaSep1_1$2": [
      1, "l", "commaSep1_1$4"
    ],
    "commaSep1_1$3": [
      ":", "commaSep1_1$2"
    ],
    "commaSep1_1$4": [
      1, "Type", "commaSep1_1$5"
    ],
    "commaSep1_1$5": [
      1, "s", "commaSep1_1$6"
    ],
    "commaSep1_1$6": [
      ",", "commaSep1_1$7",
      0, -1
    ],
    "commaSep1_1$7": [
      1, "l", "commaSep1_1$8"
    ],
    "commaSep1_1$8": [
      [0, [5, "_lookahead_3"], /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/], "commaSep1_1$9",
      0, "commaSep1_1$10",
      0, "commaSep1_1$6"
    ],
    "commaSep1_1$9": [
      1, "l", "commaSep1_1$11"
    ],
    "commaSep1_1$10": [
      1, "l", "commaSep1_1$12"
    ],
    "commaSep1_1$11": [
      ":", "commaSep1_1$10"
    ],
    "commaSep1_1$12": [
      1, "Type", "commaSep1_1$13"
    ],
    "commaSep1_1$13": [
      1, "s", "commaSep1_1$6"
    ],
    "_lookahead_5": [
      1, "VariableDeclaration", "_lookahead_5$1"
    ],
    "_lookahead_5$1": [
      1, "l", "_lookahead_5$2"
    ],
    "_lookahead_5$2": [
      "->", -1
    ],
    "_lookahead_6": [
      1, "l", "_lookahead_6$1"
    ],
    "_lookahead_6$1": [
      3, "keyword", /^else(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "commaSep1_8": [
      [5, "_lookahead_7"], "commaSep1_8$1",
      [5, "_lookahead_8"], "commaSep1_8$2",
      1, "Expression", "commaSep1_8$11"
    ],
    "commaSep1_8$1": [
      3, "operator", "!", "commaSep1_8$3",
      0, "commaSep1_8$3"
    ],
    "commaSep1_8$2": [
      3, "operator", "!", "commaSep1_8$4",
      0, "commaSep1_8$4"
    ],
    "commaSep1_8$3": [
      1, "l", "commaSep1_8$5"
    ],
    "commaSep1_8$4": [
      1, "l", "commaSep1_8$6"
    ],
    "commaSep1_8$5": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, "commaSep1_8$7"
    ],
    "commaSep1_8$6": [
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, "commaSep1_8$8"
    ],
    "commaSep1_8$7": [
      1, "l", "commaSep1_8$9"
    ],
    "commaSep1_8$8": [
      1, "l", "commaSep1_8$10"
    ],
    "commaSep1_8$9": [
      1, "Expression", "commaSep1_8$11"
    ],
    "commaSep1_8$10": [
      1, "Type", "commaSep1_8$11"
    ],
    "commaSep1_8$11": [
      1, "s", "commaSep1_8$12"
    ],
    "commaSep1_8$12": [
      ",", "commaSep1_8$13",
      0, -1
    ],
    "commaSep1_8$13": [
      1, "l", "commaSep1_8$14"
    ],
    "commaSep1_8$14": [
      [5, "_lookahead_9"], "commaSep1_8$15",
      [5, "_lookahead_10"], "commaSep1_8$16",
      1, "Expression", "commaSep1_8$17",
      0, "commaSep1_8$12"
    ],
    "commaSep1_8$15": [
      3, "operator", "!", "commaSep1_8$18",
      0, "commaSep1_8$18"
    ],
    "commaSep1_8$16": [
      3, "operator", "!", "commaSep1_8$19",
      0, "commaSep1_8$19"
    ],
    "commaSep1_8$17": [
      1, "s", "commaSep1_8$12"
    ],
    "commaSep1_8$18": [
      1, "l", "commaSep1_8$20"
    ],
    "commaSep1_8$19": [
      1, "l", "commaSep1_8$21"
    ],
    "commaSep1_8$20": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, "commaSep1_8$22"
    ],
    "commaSep1_8$21": [
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, "commaSep1_8$23"
    ],
    "commaSep1_8$22": [
      1, "l", "commaSep1_8$24"
    ],
    "commaSep1_8$23": [
      1, "l", "commaSep1_8$25"
    ],
    "commaSep1_8$24": [
      1, "Expression", "commaSep1_8$17"
    ],
    "commaSep1_8$25": [
      1, "Type", "commaSep1_8$17"
    ],
    "_lookahead_11": [
      1, "l", "_lookahead_11$1"
    ],
    "_lookahead_11$1": [
      3, "keyword", /^catch(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "_lookahead_12": [
      1, "l", "_lookahead_12$1"
    ],
    "_lookahead_12$1": [
      3, "keyword", /^finally(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "_lookahead_4": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead_4$1"
    ],
    "_lookahead_4$1": [
      1, "l", "_lookahead_4$2"
    ],
    "_lookahead_4$2": [
      "=", -1
    ],
    "_lookahead_15": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead_15$1"
    ],
    "_lookahead_15$1": [
      1, "l", "_lookahead_15$2"
    ],
    "_lookahead_15$2": [
      "=", -1
    ],
    "_lookahead_2": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead_2$1"
    ],
    "_lookahead_2$1": [
      1, "l", "_lookahead_2$2"
    ],
    "_lookahead_2$2": [
      ":", -1
    ],
    "_lookahead_3": [
      /^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*|\`(?:(?!\`).)+\`)/, "_lookahead_3$1"
    ],
    "_lookahead_3$1": [
      1, "l", "_lookahead_3$2"
    ],
    "_lookahead_3$2": [
      ":", -1
    ],
    "_lookahead_7": [
      /^\!?/, "_lookahead_7$1"
    ],
    "_lookahead_7$1": [
      1, "l", "_lookahead_7$2"
    ],
    "_lookahead_7$2": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "_lookahead_8": [
      /^\!?/, "_lookahead_8$1"
    ],
    "_lookahead_8$1": [
      1, "l", "_lookahead_8$2"
    ],
    "_lookahead_8$2": [
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "_lookahead_9": [
      /^\!?/, "_lookahead_9$1"
    ],
    "_lookahead_9$1": [
      1, "l", "_lookahead_9$2"
    ],
    "_lookahead_9$2": [
      3, "keyword", /^in(?![a-zA-Z¡-￿_0-9])/, -1
    ],
    "_lookahead_10": [
      /^\!?/, "_lookahead_10$1"
    ],
    "_lookahead_10$1": [
      1, "l", "_lookahead_10$2"
    ],
    "_lookahead_10$2": [
      3, "keyword", /^is(?![a-zA-Z¡-￿_0-9])/, -1
    ]
  };
  var start = "_start";
  var token = "_token";

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

  function hasSubStatement(context) {
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}",
    ObjectPattern: "}", EnumBody: "}", Lambda: "}", WhenBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    ParenthesizedExpression: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^((else|catch|finally)\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template" || top == "str")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  var scopes = ["Block", "FunctionSpec", "Lambda", "Constructor", "ForStatement", "CatchFinally"];

  var KotlinMode = (function (superclass) {
    function KotlinMode(conf, modeConf) {
      superclass.call(this, grammar);
      this.conf = conf;
    }

    if ( superclass ) KotlinMode.__proto__ = superclass;
    KotlinMode.prototype = Object.create( superclass && superclass.prototype );
    KotlinMode.prototype.constructor = KotlinMode;

    KotlinMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    KotlinMode.prototype.indent = function indent$1 (state, textAfter, line) {
      return indent(state, textAfter, line, this.conf)
    };

    return KotlinMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*[{}]$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { KotlinMode.prototype[prop] = meta[prop]; }

  CodeMirror.defineMode("google-kotlin", function (conf, modeConf) { return new KotlinMode(conf, modeConf); });

})));
