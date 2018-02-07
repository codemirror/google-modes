[type void] [def foo]([type void]* [def&local a], [type int] [def&local b]) {
  [type int] [def&local c] [operator =] [variable-2 b] [operator +]
      [number 1];
  [keyword return] [operator *][variable-2 a];

  [keyword if] ([number 1])
    [number 2];
  [keyword else]
    [number 3];
}
