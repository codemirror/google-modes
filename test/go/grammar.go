[keyword package] [variable hello] [comment /**/]

[keyword import] [def m] [string "lib/math"]

[keyword func] [def generate]([def&local ch] [keyword chan][operator <-] [type int]) {
	[keyword for] [def&local i] [operator :=] [number 2]; ; [variable-2 i][operator ++] {
		[variable-2 ch] [operator <-] [variable-2 i]  [comment // Send 'i' to channel 'ch'.]
	}
}

[keyword const] (
	[def x], [def y] [type int]
	[def p] [[]][type Something]; [def u] [operator =] [string '\n']
)

[keyword type] [def j] [keyword struct] {
	[def&property x], [def&property y] [type int]
	[def&property u] [type float32]
	[def&property _] [type float32]  [comment // padding]
	[def&property A] *[[]][type int]
	[def&property F] [keyword func]()
}

[keyword if] [variable x] [operator +] [variable y] {
	[variable x][operator ++]
	[variable y] [operator -=] [variable x]; [variable&callee foo]([number 0xaffe])
} [keyword else] [keyword if] [atom true] {
	[keyword return] [string `plain]
[string stringthing`]
} [keyword else] {
	[keyword switch] [variable tag] {
	[keyword default]: [variable&callee s3]()
	[keyword case] [number 0], [number 1], [number 2], [number 3]: [variable&callee s1]()
	[keyword case] [number 4]: [keyword go] [variable&callee s2]()
	}
}

[def r], [def w] [operator :=] [variable os].[property&callee Pipe]([variable fd])
[def _], [def y], [def _] [operator :=] [type T]{[number 1], [number 3.44e+2]}

[keyword select] {
[keyword case] [variable i1] [operator =] [operator <-][variable c1]:
	[builtin print]([string "received "], [variable i1], [string " from c1\n"])
[keyword case] [variable c2] [operator <-] [variable i2]:
	[builtin print]([string "sent "], [variable i2], [string " to c2\n"])
[keyword case] [def&local i3], [def&local ok] [operator :=] ([operator <-][variable c3]):  [comment // same as: i3, ok := <-c3]
	[keyword if] [variable-2 ok] {
		[builtin print]([string "received "], [variable-2 i3], [string " from c3\n"])
	} [keyword else] {
		[builtin print]([string "c3 is closed\n"])
	}
[keyword case] [variable a][[[variable&callee f]()]] [operator =] [operator <-][variable c4]:
	[comment // same as:]
	[comment // case t := <-c4]
[keyword default]:
	[builtin print]([string "no communication\n"])
}

[comment /* this is a comment]
[comment   more comment]
[comment  */]

[def x] [operator :=] [type Foo]{
	[number 1], [variable&callee bar]([variable&callee foo]([variable a],
		[variable b])),
	[number 3], [number 4],
}

[keyword func] [def sieve]() {
	{
		[def&local m] [operator :=] [number 1];
	}
}

[keyword func] [def main]() {
	[keyword if] [def&local z] [operator :=] [number 1]; [variable-2 z] [operator %] [number 2] [operator ==] [number 1] {
		[def&local i] [operator :=] [number 2];
	} [keyword else] {
		[variable-2 z] [operator =] [number 2];
	}
	[variable fmt].[callee&property Println]([variable z])
}

[keyword func] ([def&local r] [type X]) [def y]() {
	[callee&variable bar]([variable-2 r], [builtin make]([type Bar]));
}

[keyword type] [def Message] [keyword struct] {
	[def&property Foo] [meta foo.][type string]
}

[keyword func] [def foo]() {
	[keyword var] [def&local wg] [meta sync.][type WaitGroup]
	[variable-2 wg].[property&callee Add]([number 1])
	[variable&callee f]([keyword func]() { [variable-2 wg].[property&callee Done]() })
	[variable-2 wg].[property&callee Wait]()
}

[keyword var] [def imported] [operator =] [keyword map][[ [type string] ]][type bool]{}

[keyword for] {
	[def&local x] [operator :=] [operator <-][variable ch]
}

[keyword type] [def A] [keyword interface] {
	[property Foo]([def&local f] [meta foo.][type Bar]) [keyword map][[ [type string] ]][type string]
	[property a]([def&local f] [meta foo.][type Bar])
	[type u]
}

[keyword type] [def Span] [keyword struct] {
	[type Range]
}

[callee&variable something]([keyword func]() { [keyword return] [number 22] })

[def abcd] [operator :=] [[]][meta bar.][type Baz]{
	{},
}
[keyword var] [def hashes] [operator =] [number 123]

[def abs] [operator :=] [[]][keyword struct] {
	[def&property a] [type string]
	[def&property b] [type int]
}{
	[number 22]
}
