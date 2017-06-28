[keyword package] [variable hello]

[keyword import] [def m] [string "lib/math"]

[keyword func] [def generate]([def ch] [keyword chan][operator <-] [type int]) {
	[keyword for] [def i] [operator :=] [number 2]; ; [variable-2 i][operator ++] {
		[variable-2 ch] [operator <-] [variable-2 i]  [comment // Send 'i' to channel 'ch'.]
	}
}

[keyword const] (
	[def x], [def y] [type int]
	[def p] [[]][type Something]; [def u] [operator =] [string '\n']
)

[keyword type] [def j] [keyword struct] {
	[property x], [property y] [type int]
	[property u] [type float32]
	[property _] [type float32]  [comment // padding]
	[property A] *[[]][type int]
	[property F] [keyword func]()
}

[keyword if] [variable x] [operator +] [variable y] {
	[variable x][operator ++]
	[variable y] [operator -=] [variable x]; [builtin foo]([number 0xaffe])
} [keyword else] [keyword if] [atom true] {
	[keyword return] [string `plain]
[string stringthing`]
} [keyword else] {
	[keyword switch] [variable tag] {
	[keyword default]: [builtin s3]()
	[keyword case] [number 0], [number 1], [number 2], [number 3]: [builtin s1]()
	[keyword case] [number 4]: [keyword go] [builtin s2]()
	}
}

[def r], [def w] [operator :=] [variable os].[builtin Pipe]([variable fd])
[def _], [def y], [def _] [operator :=] [type T]{[number 1], [number 3.44e+2]}

[keyword select] {
[keyword case] [variable i1] [operator =] [operator <-][variable c1]:
	[builtin print]([string "received "], [variable i1], [string " from c1\n"])
[keyword case] [variable c2] [operator <-] [variable i2]:
	[builtin print]([string "sent "], [variable i2], [string " to c2\n"])
[keyword case] [def i3], [def ok] [operator :=] ([operator <-][variable c3]):  [comment // same as: i3, ok := <-c3]
	[keyword if] [variable-2 ok] {
		[builtin print]([string "received "], [variable-2 i3], [string " from c3\n"])
	} [keyword else] {
		[builtin print]([string "c3 is closed\n"])
	}
[keyword case] [variable a][[[builtin f]()]] [operator =] [operator <-][variable c4]:
	[comment // same as:]
	[comment // case t := <-c4]
[keyword default]:
	[builtin print]([string "no communication\n"])
}

[comment /* this is a comment]
[comment   more comment]
[comment  */]

[def x] [operator :=] [type Foo]{
	[number 1], [builtin bar]([builtin foo]([variable a],
		[variable b])),
	[number 3], [number 4],
}