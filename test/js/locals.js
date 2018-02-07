[keyword function] [def foo]([def&local a], [def&local b]) {
  [keyword var] [def&local c] [operator =] [number 10]; [keyword return] [variable-2 a] [operator +] [variable-2 c] [operator +] [variable d];

  [keyword if] ([number 1] [operator !=] [number 2])
    [keyword return] [atom false];

  [variable-2 c][operator ++];
}
