[keyword template] <[keyword typename] [type&def T], [type size_t] [def inlined] [operator =] [variable kFixedArrayUseDefault]>
[keyword class] [def FixedArray] {
  [keyword static] [keyword constexpr] [type size_t] [def kInlineBytesDefault] [operator =] [number 256];

  [comment // std::iterator_traits isn't guaranteed to be SFINAE-friendly until C++17,]
  [comment // but this seems to be mostly pedantic.]
  [keyword template] <[keyword typename] [type&def Iter]>
  [keyword using] [variable EnableIfForwardIterator] = [keyword typename] [meta std::][type enable_if]<
      [meta std::][type is_convertible]<
          [keyword typename] [meta std::][type iterator_traits]<[local&type Iter]>::[type iterator_category],
          [meta std::][type forward_iterator_tag]>::[type value],
      [type int]>::[type type];
}

[keyword template] <[keyword typename] [def&type Alpha], [keyword typename] [def&type Beta],
          [keyword typename] [def&type Gamma]>
[type Fooooooooooooooooooo] [meta Bar::MyNiceClass]<[local&type Alpha], [local&type Beta],
                                      [local&type Gamma]>[meta ::][def&qualified Func]() [keyword const] {
  [comment // Any comment.]
  [type Foo] [def foo];
}
