[meta #define FOO 3]
[type int] [def foo];
[meta #define BAR\]
[meta 4]
[type unsigned] [type int] [def bar] [operator =] [number 8];
[meta #include <baz> ][comment&meta // comment]

[meta #define FOO(][comment&meta /* some comment */][meta ...) \]
[comment&meta /* another comment */][meta \]
[meta MyMacroIsGreat(__VA_ARGS__);]

[meta MY_MACRO]([variable foo] [operator +] [variable&callee bar]([number 10]));
