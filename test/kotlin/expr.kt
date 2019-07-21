[keyword val] [def bar]: ([type Any]) [operator ->] ([type Any]) [operator ->] [type Unit] [operator =]
    [keyword fun] ([def&local a]) [operator =] [keyword fun] ([meta @Anno] [def&local b]) [operator =] [atom null]

[keyword val] [def bar]: ([type Any]) [operator ->] [type Unit] [operator =] [keyword fun] ([keyword vararg] [def&local a]) {}

[keyword if] ([atom true]) {
  [variable&callee call]([number 1] [variable&callee xor] [number 0xff_ffff])
} [keyword else] [keyword if] ([atom false]) {
  [keyword return] [number 55_000.32e-3]
} [keyword else] {
  [keyword continue]
}

[keyword if] ([variable x] [operator <] [number 10]) [atom null] [keyword else] [string "foo"]

[keyword if] ([variable y]) {
  [number 1]
}

[keyword if] ([number 2]) [number 3]

[keyword if] ([variable x] [operator !==] [number 0b1010])
  [keyword break] @foo
[keyword else]
  [variable abc]

[keyword var] [def file] [operator =] [string """hello${][number 80] [operator %] [number 2][string }more]
[string text"""]

[keyword try] {
  [variable&callee print]([string "hello world"]); [keyword throw] [type&callee Error]()
} [keyword catch] ([def&local e]: [type Error]) {
  [keyword return]
}

[variable a].[property b]?.
    [property c]::[property&callee d](foo [operator =] [number 1], bar [operator =] [number 2])
