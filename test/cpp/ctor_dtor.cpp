[meta Foo::][qualified&def Foo]([type int] [def y])
    : [callee&property x]([variable-2 y]), [callee&property Foo]() {
}
[meta Foo::][qualified&def ~Foo]() {}

[keyword template] <[keyword class] [type&def A1]>
[keyword class] [type&def Foo] {
 [keyword public]:
  [keyword virtual] [def ~Foo]() { }
 [keyword protected]:
  [def Foo]()
      : [callee&property t_]([meta ::bar::Baz::][qualified&variable VALUE]) { }
  [keyword explicit] [def Foo]([meta ::bar::Baz::][type Type] [def t])
      : [callee&property t_]([variable-2 t]) { }
  [meta ::bar::][type Baz] [def t_];
};
