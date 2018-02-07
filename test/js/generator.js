[keyword function*] [def repeat]([def&local n]) {
  [keyword for]([keyword var] [def&local i] [operator =] [number 0]; [variable-2 i] [operator <] [variable-2 n]; [operator ++][variable-2 i])
    [keyword yield] [variable-2 i];
}
