[keyword package] [variable hello]

[keyword import] [def m] [string "lib/math"]

[keyword func] [def generate]([def ch] [keyword chan][operator <-] [type int]) {
	[keyword for] [def i] [operator :=] [number 2]; ; [variable-2 i][operator ++] {
		[variable-2 ch] [operator <-] [variable-2 i]  [comment // Send 'i' to channel 'ch'.]
	}
}