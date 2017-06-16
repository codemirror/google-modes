[keyword function*] [def repeat]([def n]) {
  [keyword for]([keyword var] [def i] [operator =] [number 0]; [variable-2 i] [operator <] [variable-2 n]; [operator ++][variable-2 i])
    [keyword yield] [variable-2 i];
}