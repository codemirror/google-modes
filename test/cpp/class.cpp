[keyword class] [type&def BitcodeReaderValueList] {
  [type&qualifier std]::[type&qualified vector]<[type WeakVH]> [def&property ValuePtrs];

  [keyword typedef] [type&qualifier std]::[type&qualified vector]<[type&qualifier std]::[type&qualified pair]<[type Constant]*, [type unsigned]> > [def&property ResolveConstantsTy];
  [type ResolveConstantsTy] [def&property ResolveConstants];
  [type LLVMContext] &[def&property Context];
 [keyword public]:
  [def BitcodeReaderValueList]([type LLVMContext] &[def&local C]) : [callee&property Context]([variable-2 C]) {}
  [def ~BitcodeReaderValueList]() {
    [variable&callee assert]([variable ResolveConstants].[property&callee empty]() [operator &&] [string "Constants not resolved?"]);
  }

  [comment // vector compatibility methods]
  [type unsigned] [def&property size]() [keyword const] { [keyword return] [variable ValuePtrs].[property&callee size](); }
  [type void] [def&property resize]([type unsigned] [def&local N]) { [variable ValuePtrs].[property&callee resize]([variable-2 N]); }
  [type void] [def&property push_back]([type Value] *[def&local V]) { [variable ValuePtrs].[property&callee emplace_back]([variable-2 V]); }

  [type Foo] [keyword operator][operator +]([keyword const] [type Box]& [def&local b]) {}
}

[type BitcodeReaderValueList] [def a]([variable cx]);

[keyword template] <[keyword class] [type&def T], [keyword class] [type&def V]>
[keyword class] [type&def Class] : [keyword public] [type BaseClass] {
  [keyword const] [type MyType]<[type&local T], [type&local V]> [def&property member_];
}
