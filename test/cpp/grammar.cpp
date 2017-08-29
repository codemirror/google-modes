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

 [keyword public]:
  [type Z]& [keyword operator][operator =]([keyword const] [type Z]& [def x]);
  [type Z]& [keyword operator][operator =]([type Z]&& [def x]);
}

[keyword template] <[type size_t] [def max_size]>
[keyword struct] [def Foo] {
  [meta std::][type array]<[type char], [type max_size]> [def data];
  [type size_t] [def size];
};
