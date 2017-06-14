[type void] [def foo]([type void]* [def a], [type int] [def b]) {
  [type int] [def c] [operator =] [variable-2 b] [operator +]
      [number 1];
  [keyword return] [operator *][variable-2 a];

  [keyword if] ([number 1])
    [number 2];
  [keyword else]
    [number 3];
}
