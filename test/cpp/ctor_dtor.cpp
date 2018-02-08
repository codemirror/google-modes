[def&qualifier Foo]::[qualified&def Foo]([type int] [def&local y])
    : [callee&property x]([variable-2 y]), [callee&property Foo]() {
}
[def&qualifier Foo]::[qualified&def ~Foo]() {}

[keyword template] <[keyword class] [type&def A1]>
[keyword class] [type&def Foo] {
 [keyword public]:
  [keyword virtual] [def ~Foo]() { }
 [keyword protected]:
  [def Foo]()
      : [callee&property t_](::[variable&qualifier bar]::[variable&qualifier Baz]::[qualified&variable VALUE]) { }
  [keyword explicit] [def Foo](::[type&qualifier bar]::[type&qualifier Baz]::[qualified&type Type] [def&local t])
      : [callee&property t_]([variable-2 t]) { }
  ::[type&qualifier bar]::[type&qualified Baz] [def&property t_];
};
