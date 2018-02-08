::[variable&qualifier x]::[qualified&variable bar];
[type foo] [def x];

[type unsigned] [type int] [def foo] [operator =] [number 2], [def x], [def bar] [operator =] [string "hi"];

[type void] [def f]([type void]* [def&local a],
       [type int][[]] [keyword const] [def&local b]) [keyword noexcept] {
  [type&qualifier std]::[type&qualified vector]<[type bool]> [def&local quux];
  [variable&callee something](
      [variable-2 a], [variable-2 quux],
      ::[variable&qualifier something]::[qualified&variable a]);
}
