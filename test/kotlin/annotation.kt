[meta @file:foo]

[meta @dontIndent]([number 2])]
[keyword class] [def&type Foo]([meta @`anno`] [meta @anno] [keyword private] [keyword val] [def&property field]: [type Int]) {}

[keyword class] [def&type Foo] {
  [meta @][[ [meta ann] ]][meta @`anno`] [keyword var] [def&property field]: [type Int] [operator =] [number 10]
}

[keyword class] [def&type Foo]([meta @`anno`] [meta @][[ [meta ann] [meta anno] ]] [keyword protected] [keyword val] [def&property field]: [type Int]) {}

[keyword fun] [def case_1]([def&local x]: [type Int]?, [def&local y]: [type Int]) {
  [keyword if] ([meta @Anno] [operator !]([variable-2 x] [operator ==] [variable-2 y])) {
    [variable-2 x].[property&callee inv]()
  }
}

[keyword val] [def x] [operator =] [meta @Anno] [operator !][variable y]
