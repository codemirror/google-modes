[meta #!/usr/bin/env node]

[keyword package] [variable&package foo].[variable&package bar]

[keyword import] [variable&package Kotlin].*;

[comment // An enum]
[meta @foo]([number 3])
[keyword enum] [keyword class] [type&def Color]([keyword val] [def&property rgb]: [type Int]) {
  [def&property RED]([number 0xFF0000]),
  [def&property GREEN]([number 0x00FF00]),
  [def&property BLUE]([number 0x0000FF]);

  [keyword fun] [def&property containsRed]() [operator =]
      ([keyword this].[property rgb] [variable&callee and] [number 0xFF0000] [operator !=] [number 0])
}

[comment /* block comment]
[comment  */]

[keyword fun] [def main]() {
  [keyword val] [def&local red] [operator =] [type Color].[property RED]
  [variable&callee println]([variable-2 red])
}

[keyword class] [type&def Abc]([keyword var] [def&property x]: [type A], [def&local b]: [type X]?) {
  [keyword private] [keyword var] [def&property c]: [type Q] [operator =] [variable-2 b] [operator -] [number 1]
}

[keyword typealias] [type&def Array]<[type&def V]> [operator =] [type Something]<[type&local V]>;

[keyword fun]<[type&def X]> [def id]([def&local x]: [type&local X]) {
  [keyword return] [variable-2 x]
}

[keyword class] [def&type C]<[def&type T]> {
  [keyword val] [def&property t]: [type&local T] [operator =] [atom null]
}

[keyword fun] [def f](
  [def&local a]: [type Int],
  [def&local b]: [type Int]
) {
  [keyword return] [variable-2 a]
}

[keyword class] [def&type ParamList](
  [def&local a]: [type Int],
  [keyword var] [def&property b]: [type Bool]
) {}
