[keyword class] [def BitcodeReaderValueList] {
  [meta std::][type vector]<[type WeakVH]> [def ValuePtrs];

  [keyword typedef] [meta std::][type vector]<[meta std::][type pair]<[type Constant]*, [type unsigned]> > [def ResolveConstantsTy];
  [type ResolveConstantsTy] [def ResolveConstants];
  [type LLVMContext] &[def Context];
 [keyword public]:
  [def BitcodeReaderValueList]([type LLVMContext] &[def C]) : [property Context]([variable-2 C]) {}
  [def ~BitcodeReaderValueList]() {
    [builtin assert]([variable ResolveConstants].[builtin empty]() [operator &&] [string "Constants not resolved?"]);
  }

  [comment // vector compatibility methods]
  [type unsigned] [def size]() [keyword const] { [keyword return] [variable ValuePtrs].[builtin size](); }
  [type void] [def resize]([type unsigned] [def N]) { [variable ValuePtrs].[builtin resize]([variable-2 N]); }
  [type void] [def push_back]([type Value] *[def V]) { [variable ValuePtrs].[builtin emplace_back]([variable-2 V]); }

  [type Foo] [keyword operator][operator +]([keyword const] [type Box]& [def b]) {}
}

[keyword template] <[keyword class] [def T], [keyword class] [def V]>
[keyword class] [def Class] : [keyword public] [type BaseClass] {
  [keyword const] [type MyType]<[type T], [type V]> [def member_];
}
