[type foo] [def x];

[type int] [def foo] [operator =] [number 2], [def x], [def bar] [operator =] [string "hi"];

[type void] [def f]([type void]* [def a],
       [type int][[]] [keyword const] [def b]) [keyword noexcept] {
  [meta std::][type vector]<[type bool]> [def quux];
  [builtin something](
      [variable-2 a], [variable-2 quux],
      [meta ::something::][qualified&variable a]);
}
