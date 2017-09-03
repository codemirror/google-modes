[keyword using] [variable Foo] = [meta ::][type Foo];

[keyword class] [def Foo];

[type void] [def foo]([type Bar]& [def x], [type Bar]& [def y]) [keyword noexcept];

[type void] [def Foo]([keyword const] [type unsigned] [type char]* [def in_bytes], [type char]* [def out]);

[meta foo::][qualified&callee&variable bar]();

[type void] [meta X::][qualified&def Y]() {
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

[keyword template] <[keyword typename] [type&def X]>
[keyword inline] [type void] [def Foo]([type X]* [def x]) {
  [keyword for] ([keyword typename] [meta X::][type iterator] [def it] [operator =] [variable-2 x]->[callee&property begin]();
    [variable-2 it] [operator !=] [variable-2 x]->[callee&property end](); [operator ++][variable-2 it])
    [variable&callee Bar]([operator &]([operator *][variable-2 it]));
}

[keyword template] <[keyword typename] [type&def T]>
[keyword inline] [keyword typename] [meta std::][type enable_if]<[meta std::][type is_same]<[type T], [type int]>::[type value], [type void]>::[type type]
[def Foo]() {
  [keyword return] [type Foo]{[number 0]} [operator ||] [meta std::][type Foo]{[number 1]};
}
}

[keyword namespace] [def ns] {
[type void] [meta A::][qualified&def B]() {}
[type void] [meta X::][qualified&def Y]() {
  [callee&variable B]();
}
}
