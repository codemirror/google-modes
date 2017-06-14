[keyword switch] ([variable x]) {
  [keyword case] [number 10]: {
    [keyword return] [number 20];
  }
  [keyword default]: {
    [builtin printf]([string "foo %c"], [variable x]);
  }
}
