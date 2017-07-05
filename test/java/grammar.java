[keyword package] foo.bar.baz;

[keyword import] java.something.*;
[keyword import] java.blah.[def imported];

[comment /** multi]
[comment  * line]
[comment  * comment ][comment&tag @tag][comment */]

[meta @Foo](x = [string "something"])
[meta @Bar]
[meta @baz.argh]([variable Something].[property OK])
[keyword public] [keyword class] [def FontChoice] [keyword extends] [type Choice]<[type Param][[]]> {
  [comment // line comment]
  [keyword private] [keyword final] [keyword volatile] [type Font] [def fonts][[]];

  [keyword public] [def FontChoice]([type String] [def in], [type Globals] [def g]) {
    [keyword super]([variable-2 g]);

    [variable totalwidth] [operator =] [number 30];
    [type int] [def i], [def last] [operator =] [number 0b0_1], [def j] [operator =] [number 0.33e+3f];

    [keyword for] ([variable-2 i] [operator =] [number 0]; [variable-2 i] [operator <] [variable-2 in].[builtin length](); [variable-2 i][operator ++])
      [keyword if] ([variable-2 in].[builtin charAt]([variable-2 i]) [operator ==] [string ' '])
        [variable numofstyles][operator ++];
      [keyword else]
        [keyword throw] [keyword new]<[type Ugh]> [type Error]([string "double \" quoted"]);
    [keyword if] ([variable numofstyles] [operator ==] [variable foo][[ [number 0] ]])
      [keyword return];

    [variable names] [operator =] [keyword new] [type String][[ [variable numofstyles] ]];
  }

  [keyword protected] [type void] [def setX]([type int] [def x]) {
    [variable g] [operator ||] [variable-2 x];
    [keyword super].[builtin setX]([variable-2 x]);
    [type FontMetrics]<[type Param]> [def fm] [operator =] [variable parent].[builtin getFontMetrics]([variable fonts][[ [variable i] ]]);

    label: [keyword try] {
      [keyword continue] label;
    } [keyword catch] ([type RuntimeException] [def e]) {
      [variable system].[builtin println]([variable-2 e].[property message]);
    } [keyword finally] {
      [keyword return] [number 00l];
    }

    [variable foo].[builtin addListeners](
        ([def x], [def y]) [operator ->] [atom true],
        [def z] [operator ->] [atom false] [operator ?] [variable-2 z] [operator :] [atom null]
        );
  }

  [keyword enum] [def TrafficLight] {
    [def RED]([number 30]), [def AMBER]([number 10]);

    [keyword private] [keyword final] [type int] [def seconds];

    [def TrafficLight]([type int] [def seconds]) {
      [keyword this].[property seconds] [operator =] [variable-2 seconds];
    }

    [type int] [def getSeconds]() {
      [keyword return] [variable seconds];
    }
  }
}
