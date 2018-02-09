[keyword using] [variable Foo] [operator =] ::[qualified&type Foo];

[[[[ [meta foo]::[meta target](gpu, [[cpu]]) ]]]]
[keyword class] [type&def Foo];

[type void] [def foo]([type Bar]& [def&local x], [type Bar]& [def&local y]) [keyword noexcept];

[type void] [def Foo]([keyword const] [type unsigned] [type char]* [def&local in_bytes], [type char]* [def&local out]);

[variable&qualifier foo]::[qualified&callee&variable bar]();

[type void] [def&qualifier X]::[qualified&def Y]() {
  [variable x_]->[callee&property Y]([variable&callee A]([keyword this], [operator &][variable&qualifier B]::[qualified&variable C]<[type D], [number 2]>));
  [keyword delete] [[]] [variable baz];
}

[type void] [def foo](::[qualified&type y] [def&local data], [type void]* [def&local arg], [type void] (*[def&local r])([type void]*));

[keyword class] [type&def Z] {
  [keyword typedef] [type void] (*[def&property Bar])([type&qualifier x]::[qualified&type Y] [def&local z], [type void]* [def&local arg]);

 [keyword public]:
  [type Z]& [keyword operator][operator =]([keyword const] [type Z]& [def&local x]);
  [type Z]& [keyword operator][operator =]([type Z]&& [def&local x]);

  [type int] [def&property num_to_block_] [meta GUARDED_BY]([variable lock_]);

  [keyword static_assert]([variable compliant] [operator ||] [operator !][variable&qualifier std]::[qualifier&variable is_trivially_destructible]<[type T]>::[qualified&variable value],
                [string "Not compliant with std::is_trivially_destructible; "]
                [string "Standard: true, Implementation: false"]);
}

[keyword template] <[type size_t] [def max_size]>
[keyword struct] [type&def Foo] {
  [type&qualifier std]::[type&qualified array]<[type char], [type max_size]> [def&property data];
  [type size_t] [def&property size];
  [type bool] [keyword operator]()([keyword const] [type&qualifier std]::[type&qualified pair]<[type int32], [type double]> & [def&local a]) [keyword override];
  [type void] [def&property foo]() [operator =] [keyword delete];
};

[keyword class] [def&type Foo] : [keyword public] [type Bar] {
  [meta SOME_MACRO]([variable SomethingCapitalized], [variable SomethingCapitalized1]);
  [meta SOME_MACRO]([variable SomethingCapitalized], [variable SomethingCapitalized1]);
  [keyword class] [def&type Baz] {
   [keyword public]:
    [type void] [def&property abc]();
  }
};
[meta SOME_OTHER_MACRO]([variable SomethingThatLooksLikeAType]);

[keyword template] <[keyword typename] [type&def X]>
[keyword inline] [type void] [def Foo]([type&local X]* [def&local x]) {
  [keyword for] ([keyword typename] [type&qualifier X]::[type&qualified iterator] [def&local it] [operator =] [variable-2 x]->[callee&property begin]();
    [variable-2 it] [operator !=] [variable-2 x]->[callee&property end](); [operator ++][variable-2 it])
    [variable&callee Bar]([operator &]([operator *][variable-2 it]));
}

[keyword template] <[keyword typename] [type&def T]>
[keyword inline] [keyword typename] [type&qualifier std]::[type&qualifier enable_if]<[type&qualifier std]::[type&qualifier is_same]<[type&local T], [type int]>::[type&qualified value], [type void]>::[type&qualified type]
[def Foo]() {
  [keyword return] [type Foo]{[number 0]} [operator ||] [variable&qualifier std]::[type&qualified Foo]{[number 1]};
}
}

[keyword namespace] [def ns] {
[type int] [def x];
[type int] [def y] [operator =] [variable x];
[type void] [def&qualifier A]::[qualified&def B]() {
  [keyword return] [string R"(foo " ) bar)"] [string "ok"];
}
[type void] [def&qualifier X]::[qualified&def Y]() {
  [callee&variable B]();
}
}

[keyword if] ([variable foo]) [keyword return] [variable bar];

[keyword const] [type char]* [def s1][[]] [operator =] [string R"foo(]
[string Hello can have "quotes"]
[string World]
[string )foo"];

[keyword using] [variable FooOrder] [operator =] [type&qualifier std]::[type&qualified function]<[type bool]([keyword const] [type Foo]&, [keyword const] [type Foo]&)>;

[variable&qualifier std]::[qualified&variable xyz]<[keyword class] [type foo]>;

[type string] [def xyzzy]([type Bar] [def&local s]) {
  [keyword switch] ([variable-2 s]) {
    [keyword case] [variable&qualifier Bar]::[qualified&variable OK]:
      [keyword return] [string "OK"];
    [keyword case] [variable&qualifier Bar]::[qualified&variable NotOK]:
      [keyword return] [string "NOT OK"];
  }
  [keyword if] ([variable foo] [operator &&]
      [variable foo]) {
    [number 2];
  }
  
}

[[[[ [meta noreturn] ]]]]
[type int] [def sizeofint]() {
  ([variable u])[[ [number 1] ]];
  [keyword return] [keyword sizeof]([type int]);
}
