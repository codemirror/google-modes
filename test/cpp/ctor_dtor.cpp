[meta Foo::][def Foo]([type int] [def y])
    : [property x]([variable-2 y]), [property Foo]() {
}
[meta Foo::][def ~Foo]() {}

[keyword template] <[keyword class] [def A1]>
[keyword class] [def Foo] {
 [keyword public]:
  [keyword virtual] [def ~Foo]() { }
 [keyword protected]:
  [def Foo]()
      : [property t_]([meta ::bar::Baz::][qualified&variable VALUE]) { }
  [keyword explicit] [def Foo]([meta ::bar::Baz::][type Type] [def t])
      : [property t_]([variable-2 t]) { }
  [meta ::bar::][type Baz] [def t_];
};
