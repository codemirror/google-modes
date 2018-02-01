[keyword class] [type&def BitcodeReaderValueList] {
  [meta std::][type vector]<[type WeakVH]> [def ValuePtrs];

  [keyword typedef] [meta std::][type vector]<[meta std::][type pair]<[type Constant]*, [type unsigned]> > [def ResolveConstantsTy];
  [type ResolveConstantsTy] [def ResolveConstants];
  [type LLVMContext] &[def Context];
 [keyword public]:
  [def BitcodeReaderValueList]([type LLVMContext] &[def C]) : [callee&property Context]([variable-2 C]) {}
  [def ~BitcodeReaderValueList]() {
    [variable&callee assert]([variable ResolveConstants].[property&callee empty]() [operator &&] [string "Constants not resolved?"]);
  }

  [comment // vector compatibility methods]
  [type unsigned] [def size]() [keyword const] { [keyword return] [variable ValuePtrs].[property&callee size](); }
  [type void] [def resize]([type unsigned] [def N]) { [variable ValuePtrs].[property&callee resize]([variable-2 N]); }
  [type void] [def push_back]([type Value] *[def V]) { [variable ValuePtrs].[property&callee emplace_back]([variable-2 V]); }

  [type Foo] [keyword operator][operator +]([keyword const] [type Box]& [def b]) {}
}

[type BitcodeReaderValueList] [def a]([variable cx]);

[keyword template] <[keyword class] [type&def T], [keyword class] [type&def V]>
[keyword class] [type&def Class] : [keyword public] [type BaseClass] {
  [keyword const] [type MyType]<[type&local T], [type&local V]> [def member_];
}
