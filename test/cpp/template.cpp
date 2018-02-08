[keyword template] <[keyword typename] [type&def T], [type size_t] [def inlined] [operator =] [variable kFixedArrayUseDefault]>
[keyword class] [type&def FixedArray] {
  [keyword static] [keyword constexpr] [type size_t] [def&property kInlineBytesDefault] [operator =] [number 256];

  [comment // std::iterator_traits isn't guaranteed to be SFINAE-friendly until C++17,]
  [comment // but this seems to be mostly pedantic.]
  [keyword template] <[keyword typename] [type&def Iter]>
  [keyword using] [variable EnableIfForwardIterator] [operator =] [keyword typename] [type&qualifier std]::[type&qualified enable_if]<
      [type&qualifier std]::[type&qualifier is_convertible]<
          [keyword typename] [type&qualifier std]::[type&qualifier iterator_traits]<[local&type Iter]>::[type&qualified iterator_category],
          [type&qualifier std]::[type&qualified forward_iterator_tag]>::[type&qualified value],
      [type int]>::[type&qualified type];
}

[keyword template] <[keyword typename] [def&type Alpha], [keyword typename] [def&type Beta],
          [keyword typename] [def&type Gamma]>
[type Fooooooooooooooooooo] [def&qualifier Bar]::[def&qualifier MyNiceClass]<[local&type Alpha], [local&type Beta],
                                      [local&type Gamma]>::[def&qualified Func]() [keyword const] {
  [comment // Any comment.]
  [type Foo] [def&local foo];
}
