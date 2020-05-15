[comment # no replacements]
[string f'foo bar']
[string f"foo bar"]
[string f'''foo bar''']
[string f"""foo bar"""]
[comment # TODO(slebedev): Multi-line strings don't work.]

[comment # f- with other prefixes]
[string fr'foo bar']
[string rfu'foo bar']

[comment # escaped replacement]
[string f'foo {{ bar {{}} boo }}']

[comment # replacement]
[string f'foo ][operator {][variable bar][operator }][string ']

[comment # replacement with a conversion]
[string f'foo ][operator {][variable bar][operator !][keyword s][operator }][string ']

[comment # replacement with an invalid conversion]
[string f'foo ][operator {][variable bar][operator !][keyword boo][operator }][string ']
[string f'foo ][operator {][variable bar][operator !][operator }][string ']

[comment # replacement with a format spec]
[string f'foo ][operator {][variable bar][operator :][string 42d][operator }][string ']

[comment # replacement with a nested format spec]
[string f'foo ][operator {][variable bar][operator :][operator {][variable boo][operator }][string d][operator }][string ']

[comment # replacement with both a conversion and a format spec]
[string f'foo ][operator {][variable bar][operator !][keyword s][operator :][string 42d][operator }][string ']

[comment # replacement with a misplaced format spec]
[string f'foo ][operator {][variable bar][operator :][string 42d!s][operator }][string ']

[comment # replacement with a walrus operator]
[string f'foo ][operator {][variable bar][operator :=][number 42][operator :][string 42d][operator }][string ']
