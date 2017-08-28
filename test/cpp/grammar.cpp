[keyword using] [variable Foo] = [meta ::][type Foo];

[keyword class] [def Foo];

[meta foo::][qualified&callee&variable bar]();

[type void] [meta X::][def Y]() {
  [variable x_]->[callee&property Y]([variable&callee A]([keyword this], [operator &][meta B::][qualified&variable C]<[type D]>));
  [keyword delete] [[]] [variable baz];
}

[keyword class] [def Z] {
}
