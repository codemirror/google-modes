import 'codemirror-grammar-mode';

import * as CodeMirror from 'codemirror';

import * as grammar from './flatbuffers.mode';

class FlatBuffersMode extends CodeMirror.GrammarMode {
  constructor(conf, modeConf) {
    super(grammar);
    this.conf = conf;

    this.electricChars = '[{}]';
    this.blockCommentStart = '/*';
    this.blockCommentEnd = ' */';
    this.blockCommentLead = ' * ';
    this.lineComment = '//';
    this.fold = ['brace'];
  }

  /**
   * Simple indent function: Indent 1 level for each open context (i.e. open
   * curly or square bracket)
   *
   * @param state the state object at the current cursor position, as defined by
   *     grammar-mode.js
   * @param {string} textAfter the portion of the current line that is past the
   *     cursor position
   * @param {string} line the (complete) line the cursor is on
   */
  indent(state, textAfter, line) {
    var context = state.contextAt(line, line.length);

    var indentLevel = 0;
    while (context) {
      // Ignore brackets that were opened on this line
      if (context.startLine !== line && context.startLine !== '') {
        indentLevel = indentLevel + 1;
      }
      context = context.parent;
    }
    return indentLevel * this.conf.indentUnit;
  }
}

CodeMirror.defineMode(
    'flatbuffers', (conf, modeConf) => new FlatBuffersMode(conf, modeConf));
CodeMirror.defineMIME('text/x-fbs', {name: 'flatbuffers'});

let keywords = ["include", "namespace", "attribute", "table", "struct", "enum",
                "union", "root_type", "rpc_service", "file_extension",
                "file_identifier"];
let builtins = ["bool", "byte", "ubyte", "short", "ushort", "int", "uint",
                "float", "long", "ulong", "double", "int8", "uint8", "int16",
                "uint16", "int32", "uint32", "int64", "uint64", "float32",
                "float64", "string", "true", "false"];
CodeMirror.registerHelper('hintWords', 'flatbuffers',
                          keywords.concat(builtins));
