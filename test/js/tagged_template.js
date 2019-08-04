[comment // normal template]
[string-2 `hello`];

[comment // inline html]
[variable html][string-2 `][tag <div>][string-2 `];

[comment // expression inside inline html]
[variable html][string-2 `][tag <div>][string-2 ${][number 10]
    [string-2 }][string-2 `];

[comment // normal template inside inline html]
[variable html][string-2 `][tag <div>][string-2 ${]
    [variable foo][string-2 `][string-2 <span>][string-2 `]
    [string-2 }][tag </div>][string-2 `];

[comment // inline html inside of inline html]
[variable html][string-2 `][tag <div>][string-2 ${]
    [variable html][string-2 `][tag <span>][string-2 `]
    [string-2 }][tag </div>][string-2 `];



[comment // tricky escape sequences]

[variable html][string-2 ``];
[variable html][string-2 `]\`;
    [string-2 `]; [comment // close the unclosed from prev line]
[variable html][string-2 `]\`[string-2 `];

[comment // escaped backticks are matched by inner language]
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\`"][tag >]
    [tag </div>][string-2 `];

[comment // any odd number of backslashes is fine]
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\\\`"][tag >]
    [tag </div>][string-2 `];
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\\\\\`"][tag >]
    [tag </div>][string-2 `];

[comment // an even number of backslashes do not escape, the template ends.]
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\\][string-2 `][string ">"];
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\\\\][string-2 `][string ">"];
[variable html][string-2 `]
    [tag <div] [attribute attr]=[string "\\\\\\][string-2 `][string ">"];
