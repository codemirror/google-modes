[keyword function] [def F]([def&local target]) {
  [keyword if] ([variable-2 target] [operator &&] [keyword new].[keyword target].[property name]) {
    [keyword return] [keyword new]
        .[keyword target];
  }
}

[keyword const] [def foo] [operator =] [keyword new] [callee&variable Bar]()
                .[property&callee baz]()
                .[property&callee quux]();

[keyword const] [def foo] [operator =]
    [keyword new] [callee&variable Bar]()
        .[property&callee baz]()
        .[property&callee quux]();
