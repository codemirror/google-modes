[keyword using] [variable Foo] = [meta ::][type Foo];

[keyword class] [def Foo];

[meta foo::][qualified&callee&variable bar]();

[type void] [meta X::][def Y]() {
  [variable x_]->[callee&property Y]([variable&callee A]([keyword this], [operator &][meta B::][qualified&variable C]<[type D], [number 2]>));
  [keyword delete] [[]] [variable baz];
}

[type void] [def foo]([meta ::][type y] [def data], [type void]* [def arg], [type void] (*[def r])([type void]*));

[keyword class] [def Z] {
  [keyword typedef] [type void] (*[def Bar])([meta x::][type Y] [def z], [type void]* [def arg]);
}
