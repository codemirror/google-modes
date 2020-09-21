(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

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
      3, "keyword", /^as(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^capsule(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^class(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^const(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^def(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^default(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^enum(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^from(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^implements(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^import(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^interface(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^lambda(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^namespace(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^pass(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^property(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^return(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^staticmethods(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^type(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^use(?![a-zA-Z0-9_])/, -1,
      3, "keyword", /^with(?![a-zA-Z0-9_])/, -1,
      3, "atom", /^None(?![a-zA-Z0-9_])/, -1,
      3, "atom", /^(?:self|cls)(?![a-zA-Z0-9_])/, -1,
      3, "comment", /^\#.*/, -1,
      /^[^]/, -1
    ],
    "whitespace": [
      /^[ \t]/, "whitespace",
      3, "comment", /^\#.*/, "whitespace",
      [0, /^(?=\n)/, [7, "maySkipNewline"]], "whitespace$1",
      0, -1
    ],
    "whitespace$1": [
      "\n", "whitespace"
    ],
    "Statement": [
      [6, "_lookahead"], "Statement$1",
      1, "InterfaceStatement", -1,
      3, "keyword", /^def(?![a-zA-Z0-9_])/, "Statement$8",
      3, "keyword", /^class(?![a-zA-Z0-9_])/, "Statement$20",
      3, "keyword", /^enum(?![a-zA-Z0-9_])/, "Statement$28",
      1, "InterfaceStatement", -1,
      3, "keyword", /^staticmethods(?![a-zA-Z0-9_])/, "Statement$36",
      3, "keyword", /^namespace(?![a-zA-Z0-9_])/, "Statement$44",
      3, "keyword", /^capsule(?![a-zA-Z0-9_])/, "Statement$50",
      3, "keyword", /^implements(?![a-zA-Z0-9_])/, "Statement$51",
      [6, "_lookahead_1"], "Statement$52",
      [6, "_lookahead_2"], "Statement$53",
      3, "keyword", /^use(?![a-zA-Z0-9_])/, "Statement$54",
      3, "keyword", /^type(?![a-zA-Z0-9_])/, "Statement$55",
      3, "keyword", /^const(?![a-zA-Z0-9_])/, "Statement$56",
      [5, "_lookahead_3"], "Statement$57",
      2, "Decorator", "Statement$58", {"name":"Decorator","token":"meta"},
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$59",
      3, "keyword", /^pass(?![a-zA-Z0-9_])/, "Statement$58",
      2, "qstring", "Statement$60", {"name":"qstring","token":"string"},
      3, "keyword", /^return(?![a-zA-Z0-9_])/, "Statement$61",
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$62"
    ],
    "Statement$1": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "Statement$2"
    ],
    "Statement$2": [
      1, "whitespace", "Statement$3"
    ],
    "Statement$3": [
      2, "qstring", "Statement$4", {"name":"qstring","token":"string"}
    ],
    "Statement$4": [
      1, "whitespace", "Statement$5"
    ],
    "Statement$5": [
      ":", "Statement$6"
    ],
    "Statement$6": [
      1, "whitespace", "Statement$7"
    ],
    "Statement$7": [
      1, "indentedBody", -1
    ],
    "Statement$8": [
      1, "whitespace", "Statement$9"
    ],
    "Statement$9": [
      1, "cname", "Statement$10"
    ],
    "Statement$10": [
      1, "whitespace", "Statement$11"
    ],
    "Statement$11": [
      2, "Params", "Statement$12", {"name":"Params"}
    ],
    "Statement$12": [
      1, "whitespace", "Statement$13"
    ],
    "Statement$13": [
      "->", "Statement$14",
      0, -1
    ],
    "Statement$14": [
      1, "whitespace", "Statement$15"
    ],
    "Statement$15": [
      3, "atom", /^None(?![a-zA-Z0-9_])/, "Statement$16",
      1, "Type", "Statement$16",
      2, "Params", "Statement$16", {"name":"Params"}
    ],
    "Statement$16": [
      1, "whitespace", "Statement$17"
    ],
    "Statement$17": [
      ":", "Statement$18",
      0, -1
    ],
    "Statement$18": [
      1, "whitespace", "Statement$19"
    ],
    "Statement$19": [
      1, "indentedBody", -1
    ],
    "Statement$20": [
      1, "whitespace", "Statement$21"
    ],
    "Statement$21": [
      1, "cname", "Statement$22"
    ],
    "Statement$22": [
      1, "whitespace", "Statement$23"
    ],
    "Statement$23": [
      2, "Bases", "Statement$24", {"name":"Bases"},
      0, "Statement$24"
    ],
    "Statement$24": [
      1, "whitespace", "Statement$25"
    ],
    "Statement$25": [
      ":", "Statement$26"
    ],
    "Statement$26": [
      1, "whitespace", "Statement$27"
    ],
    "Statement$27": [
      1, "indentedBody", -1
    ],
    "Statement$28": [
      1, "whitespace", "Statement$29"
    ],
    "Statement$29": [
      1, "cname", "Statement$30"
    ],
    "Statement$30": [
      1, "whitespace", "Statement$31"
    ],
    "Statement$31": [
      3, "keyword", /^with(?![a-zA-Z0-9_])/, "Statement$32",
      0, -1
    ],
    "Statement$32": [
      1, "whitespace", "Statement$33"
    ],
    "Statement$33": [
      ":", "Statement$34"
    ],
    "Statement$34": [
      1, "whitespace", "Statement$35"
    ],
    "Statement$35": [
      1, "indentedBody", -1
    ],
    "Statement$36": [
      1, "whitespace", "Statement$37"
    ],
    "Statement$37": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "Statement$38"
    ],
    "Statement$38": [
      1, "whitespace", "Statement$39"
    ],
    "Statement$39": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$40"
    ],
    "Statement$40": [
      1, "whitespace", "Statement$41"
    ],
    "Statement$41": [
      ":", "Statement$42"
    ],
    "Statement$42": [
      1, "whitespace", "Statement$43"
    ],
    "Statement$43": [
      1, "indentedBody", -1
    ],
    "Statement$44": [
      1, "whitespace", "Statement$45"
    ],
    "Statement$45": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$46"
    ],
    "Statement$46": [
      1, "whitespace", "Statement$47"
    ],
    "Statement$47": [
      ":", "Statement$48"
    ],
    "Statement$48": [
      1, "whitespace", "Statement$49"
    ],
    "Statement$49": [
      1, "indentedBody", -1
    ],
    "Statement$50": [
      1, "whitespace", "Statement$63"
    ],
    "Statement$51": [
      1, "whitespace", "Statement$64"
    ],
    "Statement$52": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "Statement$65"
    ],
    "Statement$53": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "Statement$66"
    ],
    "Statement$54": [
      1, "whitespace", "Statement$67"
    ],
    "Statement$55": [
      1, "whitespace", "Statement$68"
    ],
    "Statement$56": [
      1, "whitespace", "Statement$69"
    ],
    "Statement$57": [
      1, "cname", "Statement$70"
    ],
    "Statement$58": [
      1, "whitespace", "Statement$71"
    ],
    "Statement$59": [
      1, "whitespace", "Statement$72"
    ],
    "Statement$60": [
      1, "whitespace", "Statement$73"
    ],
    "Statement$61": [
      1, "whitespace", "Statement$74"
    ],
    "Statement$62": [
      1, "whitespace", "Statement$75"
    ],
    "Statement$63": [
      1, "cname", "Statement$58"
    ],
    "Statement$64": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$76"
    ],
    "Statement$65": [
      1, "whitespace", "Statement$77"
    ],
    "Statement$66": [
      1, "whitespace", "Statement$78"
    ],
    "Statement$67": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$79"
    ],
    "Statement$68": [
      3, "def", /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$80"
    ],
    "Statement$69": [
      2, "d_1", "Statement$81", {"name":"d","token":"def"}
    ],
    "Statement$70": [
      1, "whitespace", "Statement$82"
    ],
    "Statement$71": [
      "\n", -1
    ],
    "Statement$72": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "Statement$83"
    ],
    "Statement$73": [
      [6, "_lookahead_4"], "Statement$58"
    ],
    "Statement$74": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$84"
    ],
    "Statement$75": [
      /^(?!\:)/, "Statement$58"
    ],
    "Statement$76": [
      1, "whitespace", "Statement$85"
    ],
    "Statement$77": [
      1, "DottedName", "Statement$86"
    ],
    "Statement$78": [
      2, "qstring", "Statement$87", {"name":"qstring","token":"string"}
    ],
    "Statement$79": [
      1, "whitespace", "Statement$88"
    ],
    "Statement$80": [
      1, "whitespace", "Statement$89"
    ],
    "Statement$81": [
      1, "whitespace", "Statement$90"
    ],
    "Statement$82": [
      ":", "Statement$91"
    ],
    "Statement$83": [
      1, "whitespace", "Statement$92"
    ],
    "Statement$84": [
      1, "whitespace", "Statement$93"
    ],
    "Statement$85": [
      "<", "Statement$94"
    ],
    "Statement$86": [
      1, "whitespace", "Statement$95"
    ],
    "Statement$87": [
      1, "whitespace", "Statement$96"
    ],
    "Statement$88": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "Statement$97"
    ],
    "Statement$89": [
      "=", "Statement$98"
    ],
    "Statement$90": [
      ":", "Statement$99"
    ],
    "Statement$91": [
      1, "whitespace", "Statement$100"
    ],
    "Statement$92": [
      1, "DottedName", "Statement$58"
    ],
    "Statement$93": [
      "(", "Statement$101"
    ],
    "Statement$94": [
      1, "whitespace", "Statement$102"
    ],
    "Statement$95": [
      3, "keyword", /^import(?![a-zA-Z0-9_])/, "Statement$103"
    ],
    "Statement$96": [
      3, "keyword", /^import(?![a-zA-Z0-9_])/, "Statement$104"
    ],
    "Statement$97": [
      1, "whitespace", "Statement$105"
    ],
    "Statement$98": [
      1, "whitespace", "Statement$106"
    ],
    "Statement$99": [
      1, "whitespace", "Statement$107"
    ],
    "Statement$100": [
      1, "Type", "Statement$108"
    ],
    "Statement$101": [
      1, "whitespace", "Statement$109"
    ],
    "Statement$102": [
      1, "CommaSep_3", "Statement$110"
    ],
    "Statement$103": [
      1, "whitespace", "Statement$111"
    ],
    "Statement$104": [
      1, "whitespace", "Statement$112"
    ],
    "Statement$105": [
      1, "DottedName", "Statement$58"
    ],
    "Statement$106": [
      1, "Type", "Statement$58"
    ],
    "Statement$107": [
      1, "Type", "Statement$58"
    ],
    "Statement$108": [
      1, "whitespace", "Statement$113"
    ],
    "Statement$109": [
      3, "operator", "...", "Statement$114"
    ],
    "Statement$110": [
      1, "whitespace", "Statement$115"
    ],
    "Statement$111": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$58"
    ],
    "Statement$112": [
      "*", "Statement$116"
    ],
    "Statement$113": [
      "=", "Statement$117",
      0, "Statement$58"
    ],
    "Statement$114": [
      1, "whitespace", "Statement$118"
    ],
    "Statement$115": [
      ">", "Statement$58"
    ],
    "Statement$116": [
      1, "whitespace", "Statement$119"
    ],
    "Statement$117": [
      1, "whitespace", "Statement$120"
    ],
    "Statement$118": [
      ")", "Statement$58"
    ],
    "Statement$119": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "Statement$121",
      0, "Statement$58"
    ],
    "Statement$120": [
      3, "keyword", /^property(?![a-zA-Z0-9_])/, "Statement$122"
    ],
    "Statement$121": [
      1, "whitespace", "Statement$123"
    ],
    "Statement$122": [
      1, "whitespace", "Statement$124"
    ],
    "Statement$123": [
      3, "def", /^[a-zA-Z_][a-zA-Z0-9_]*/, "Statement$58"
    ],
    "Statement$124": [
      "(", "Statement$125"
    ],
    "Statement$125": [
      1, "whitespace", "Statement$126"
    ],
    "Statement$126": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$127"
    ],
    "Statement$127": [
      1, "whitespace", "Statement$128"
    ],
    "Statement$128": [
      ",", "Statement$129",
      0, "Statement$130"
    ],
    "Statement$129": [
      1, "whitespace", "Statement$131"
    ],
    "Statement$130": [
      1, "whitespace", "Statement$132"
    ],
    "Statement$131": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Statement$130"
    ],
    "Statement$132": [
      ")", "Statement$58"
    ],
    "_lookahead": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "_lookahead$1"
    ],
    "_lookahead$1": [
      1, "whitespace", "_lookahead$2"
    ],
    "_lookahead$2": [
      1, "DottedName", -1,
      2, "qstring", "_lookahead$3", {"name":"qstring","token":"string"}
    ],
    "_lookahead$3": [
      1, "whitespace", "_lookahead$4"
    ],
    "_lookahead$4": [
      3, "keyword", /^import(?![a-zA-Z0-9_])/, -1
    ],
    "InterfaceStatement": [
      3, "keyword", /^interface(?![a-zA-Z0-9_])/, "InterfaceStatement$1"
    ],
    "InterfaceStatement$1": [
      1, "whitespace", "InterfaceStatement$2"
    ],
    "InterfaceStatement$2": [
      3, "def", /^[a-zA-Z_][a-zA-Z0-9_]*/, "InterfaceStatement$3"
    ],
    "InterfaceStatement$3": [
      1, "whitespace", "InterfaceStatement$4"
    ],
    "InterfaceStatement$4": [
      "<", "InterfaceStatement$5"
    ],
    "InterfaceStatement$5": [
      1, "whitespace", "InterfaceStatement$6"
    ],
    "InterfaceStatement$6": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "InterfaceStatement$7"
    ],
    "InterfaceStatement$7": [
      1, "whitespace", "InterfaceStatement$8"
    ],
    "InterfaceStatement$8": [
      ",", "InterfaceStatement$9",
      ">", "InterfaceStatement$12"
    ],
    "InterfaceStatement$9": [
      1, "whitespace", "InterfaceStatement$10"
    ],
    "InterfaceStatement$10": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "InterfaceStatement$11"
    ],
    "InterfaceStatement$11": [
      1, "whitespace", "InterfaceStatement$8"
    ],
    "InterfaceStatement$12": [
      1, "whitespace", "InterfaceStatement$13"
    ],
    "InterfaceStatement$13": [
      ":", "InterfaceStatement$14"
    ],
    "InterfaceStatement$14": [
      1, "whitespace", "InterfaceStatement$15"
    ],
    "InterfaceStatement$15": [
      1, "indentedBody", -1
    ],
    "_lookahead_1": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "_lookahead_1$1"
    ],
    "_lookahead_1$1": [
      1, "whitespace", "_lookahead_1$2"
    ],
    "_lookahead_1$2": [
      2, "qstring", -1, {"name":"qstring","token":"string"}
    ],
    "_lookahead_2": [
      3, "keyword", /^from(?![a-zA-Z0-9_])/, "_lookahead_2$1"
    ],
    "_lookahead_2$1": [
      1, "whitespace", "_lookahead_2$2"
    ],
    "_lookahead_2$2": [
      1, "DottedName", -1,
      2, "qstring", "_lookahead_2$3", {"name":"qstring","token":"string"}
    ],
    "_lookahead_2$3": [
      1, "whitespace", "_lookahead_2$4"
    ],
    "_lookahead_2$4": [
      ":", -1
    ],
    "_lookahead_3": [
      1, "cname", "_lookahead_3$1"
    ],
    "_lookahead_3$1": [
      1, "whitespace", "_lookahead_3$2"
    ],
    "_lookahead_3$2": [
      ":", -1
    ],
    "Decorator": [
      "@", "Decorator$1"
    ],
    "Decorator$1": [
      1, "whitespace", "Decorator$2"
    ],
    "Decorator$2": [
      1, "DottedName", -1
    ],
    "qstring": [
      "'''", "qstring$1",
      "\"\"\"", "qstring$3",
      "'", "qstring$5",
      "\"", "qstring$7"
    ],
    "qstring$1": [
      "\\", "qstring$2",
      [0, /^(?!\'\'\')/, /^[^]/], "qstring$1",
      "'''", -1
    ],
    "qstring$2": [
      /^[^]/, "qstring$1"
    ],
    "qstring$3": [
      "\\", "qstring$4",
      [0, /^(?!\"\"\")/, /^[^]/], "qstring$3",
      "\"\"\"", -1
    ],
    "qstring$4": [
      /^[^]/, "qstring$3"
    ],
    "qstring$5": [
      "\\", "qstring$6",
      /^(?!\')./, "qstring$5",
      "'", -1
    ],
    "qstring$6": [
      /^[^]/, "qstring$5"
    ],
    "qstring$7": [
      "\\", "qstring$8",
      /^(?!\")./, "qstring$7",
      "\"", -1
    ],
    "qstring$8": [
      /^[^]/, "qstring$7"
    ],
    "indentedBody": [
      "\n", "indentedBody$1"
    ],
    "indentedBody$1": [
      /^[ \t]/, "indentedBody$1",
      3, "comment", /^\#.*/, "indentedBody$1",
      "\n", "indentedBody$1",
      [7, "stillIndented"], "indentedBody$2"
    ],
    "indentedBody$2": [
      2, "Statement", "indentedBody$3", {"name":"Statement"}
    ],
    "indentedBody$3": [
      /^[ \t]/, "indentedBody$3",
      3, "comment", /^\#.*/, "indentedBody$3",
      "\n", "indentedBody$3",
      0, "indentedBody$4"
    ],
    "indentedBody$4": [
      0, "indentedBody$5",
      0, -1
    ],
    "indentedBody$5": [
      [7, "stillIndented"], "indentedBody$2"
    ],
    "cname": [
      3, "string", /^\`(?:(?!\`).)*\`/, "cname$1",
      0, "cname$3"
    ],
    "cname$1": [
      1, "whitespace", "cname$2"
    ],
    "cname$2": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "cname$3"
    ],
    "cname$3": [
      1, "whitespace", "cname$4"
    ],
    "cname$4": [
      3, "def", /^[a-zA-Z_][a-zA-Z0-9_]*/, -1
    ],
    "Params": [
      "(", "Params$1"
    ],
    "Params$1": [
      1, "whitespace", "Params$2"
    ],
    "Params$2": [
      1, "CommaSep", "Params$3"
    ],
    "Params$3": [
      1, "whitespace", "Params$4"
    ],
    "Params$4": [
      ")", -1
    ],
    "Type": [
      3, "string", /^\`(?:(?!\`).)*\`/, "Type$1",
      0, "Type$3"
    ],
    "Type$1": [
      1, "whitespace", "Type$2"
    ],
    "Type$2": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "Type$3"
    ],
    "Type$3": [
      1, "whitespace", "Type$4"
    ],
    "Type$4": [
      3, "keyword", /^lambda(?![a-zA-Z0-9_])/, "Type$5",
      0, "Type$5",
      1, "DottedName", "Type$6"
    ],
    "Type$5": [
      1, "whitespace", "Type$7"
    ],
    "Type$6": [
      1, "whitespace", "Type$8"
    ],
    "Type$7": [
      2, "Params", "Type$9", {"name":"Params"}
    ],
    "Type$8": [
      "<", "Type$10",
      0, -1
    ],
    "Type$9": [
      1, "whitespace", "Type$11"
    ],
    "Type$10": [
      1, "whitespace", "Type$12"
    ],
    "Type$11": [
      "->", "Type$13"
    ],
    "Type$12": [
      1, "CommaSep_1", "Type$14"
    ],
    "Type$13": [
      1, "whitespace", "Type$15"
    ],
    "Type$14": [
      1, "whitespace", "Type$16"
    ],
    "Type$15": [
      3, "atom", /^None(?![a-zA-Z0-9_])/, -1,
      1, "Type", -1,
      2, "Params", -1, {"name":"Params"}
    ],
    "Type$16": [
      ">", -1
    ],
    "Bases": [
      "(", "Bases$1"
    ],
    "Bases$1": [
      1, "whitespace", "Bases$2"
    ],
    "Bases$2": [
      1, "CommaSep_2", "Bases$3"
    ],
    "Bases$3": [
      1, "whitespace", "Bases$4"
    ],
    "Bases$4": [
      ")", -1
    ],
    "d_1": [
      1, "cname", -1
    ],
    "_lookahead_4": [
      ":", -1,
      3, "keyword", /^import(?![a-zA-Z0-9_])/, -1
    ],
    "DottedName": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "DottedName$1"
    ],
    "DottedName$1": [
      1, "whitespace", "DottedName$2"
    ],
    "DottedName$2": [
      ".", "DottedName$3",
      0, -1
    ],
    "DottedName$3": [
      1, "whitespace", "DottedName$4"
    ],
    "DottedName$4": [
      /^[a-zA-Z_][a-zA-Z0-9_]*/, "DottedName$5"
    ],
    "DottedName$5": [
      1, "whitespace", "DottedName$2"
    ],
    "CommaSep_3": [
      1, "DottedName", "CommaSep_3$1",
      0, -1
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
      1, "DottedName", "CommaSep_3$5",
      0, "CommaSep_3$5"
    ],
    "CommaSep_3$5": [
      1, "whitespace", "CommaSep_3$2"
    ],
    "CommaSep": [
      3, "atom", /^(?:self|cls)(?![a-zA-Z0-9_])/, "CommaSep$1",
      1, "ParamDef", "CommaSep$1",
      0, -1
    ],
    "CommaSep$1": [
      1, "whitespace", "CommaSep$2"
    ],
    "CommaSep$2": [
      ",", "CommaSep$3",
      0, -1
    ],
    "CommaSep$3": [
      1, "whitespace", "CommaSep$4"
    ],
    "CommaSep$4": [
      3, "atom", /^(?:self|cls)(?![a-zA-Z0-9_])/, "CommaSep$5",
      1, "ParamDef", "CommaSep$5",
      0, "CommaSep$5"
    ],
    "CommaSep$5": [
      1, "whitespace", "CommaSep$2"
    ],
    "CommaSep_1": [
      1, "Type", "CommaSep_1$1",
      0, -1
    ],
    "CommaSep_1$1": [
      1, "whitespace", "CommaSep_1$2"
    ],
    "CommaSep_1$2": [
      ",", "CommaSep_1$3",
      0, -1
    ],
    "CommaSep_1$3": [
      1, "whitespace", "CommaSep_1$4"
    ],
    "CommaSep_1$4": [
      1, "Type", "CommaSep_1$5",
      0, "CommaSep_1$5"
    ],
    "CommaSep_1$5": [
      1, "whitespace", "CommaSep_1$2"
    ],
    "CommaSep_2": [
      3, "string", /^\`(?:(?!\`).)*\`/, "CommaSep_2$1",
      0, "CommaSep_2$2",
      0, -1
    ],
    "CommaSep_2$1": [
      1, "whitespace", "CommaSep_2$3"
    ],
    "CommaSep_2$2": [
      1, "whitespace", "CommaSep_2$4"
    ],
    "CommaSep_2$3": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "CommaSep_2$2"
    ],
    "CommaSep_2$4": [
      1, "DottedName", "CommaSep_2$5"
    ],
    "CommaSep_2$5": [
      1, "whitespace", "CommaSep_2$6"
    ],
    "CommaSep_2$6": [
      ",", "CommaSep_2$7",
      0, -1
    ],
    "CommaSep_2$7": [
      1, "whitespace", "CommaSep_2$8"
    ],
    "CommaSep_2$8": [
      3, "string", /^\`(?:(?!\`).)*\`/, "CommaSep_2$9",
      0, "CommaSep_2$10",
      0, "CommaSep_2$11"
    ],
    "CommaSep_2$9": [
      1, "whitespace", "CommaSep_2$12"
    ],
    "CommaSep_2$10": [
      1, "whitespace", "CommaSep_2$13"
    ],
    "CommaSep_2$11": [
      1, "whitespace", "CommaSep_2$6"
    ],
    "CommaSep_2$12": [
      3, "keyword", /^as(?![a-zA-Z0-9_])/, "CommaSep_2$10"
    ],
    "CommaSep_2$13": [
      1, "DottedName", "CommaSep_2$11"
    ],
    "ParamDef": [
      3, "variable-2", /^[a-zA-Z_][a-zA-Z0-9_]*/, "ParamDef$1"
    ],
    "ParamDef$1": [
      1, "whitespace", "ParamDef$2"
    ],
    "ParamDef$2": [
      ":", "ParamDef$3",
      0, -1
    ],
    "ParamDef$3": [
      1, "whitespace", "ParamDef$4"
    ],
    "ParamDef$4": [
      1, "Type", "ParamDef$5"
    ],
    "ParamDef$5": [
      1, "whitespace", "ParamDef$6"
    ],
    "ParamDef$6": [
      "=", "ParamDef$7",
      0, -1
    ],
    "ParamDef$7": [
      1, "whitespace", "ParamDef$8"
    ],
    "ParamDef$8": [
      3, "keyword", /^default(?![a-zA-Z0-9_])/, -1
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

  var scopes = ["FuncDef", "ClassDef"];

  var allowNewline = ["Bases", "Params"];

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
      // TODO(slebedev): Not currently supported.
      return CodeMirror.Pass
    };

    return ClifMode;
  }(CodeMirror.GrammarMode));

  ClifMode.prototype.electricInput = /^\s*\(\)<>$/;
  ClifMode.prototype.closeBrackets = {triples: "'\"", pairs: "()<>''\"\"``",};
  ClifMode.prototype.lineComment = "#";

  CodeMirror.defineMode("google-clif", function (conf) { return new ClifMode(conf); });

})));
