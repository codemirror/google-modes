[keyword package] foo.bar.baz;

[keyword import] java.something.*;
[keyword import] java.blah.imported;

[comment /** multi]
[comment  @<i>N</i>]
[comment  * line]
[comment  * comment ][comment&tag @tag][comment */]

[meta @Foo](x = [string "something"])
[meta @Bar]
[meta @baz.argh]([variable Something].[property OK])
[keyword public] [keyword class] [def FontChoice] [keyword extends] [type Choice]<[type Param][[]]> {
  [comment // line comment]
  [keyword private] [keyword final] [keyword volatile] [meta java.blah.][qualified&type Font] [def fonts][[]];

  [keyword public] [def FontChoice]([type String] [def in], [type Globals] [def g]) {
    [keyword super]([variable-2 g]);

    [variable totalwidth] [operator =] [number 30];
    [type int] [def i], [def last] [operator =] [number 0b0_1], [def j] [operator =] [number 0.33e+3f];

    [keyword for] ([variable-2 i] [operator =] [number 0]; [variable-2 i] [operator <] [variable-2 in].[property&callee length](); [variable-2 i][operator ++])
      [keyword if] ([variable-2 in].[property&callee charAt]([variable-2 i]) [operator ==] [string ' '])
        [variable numofstyles][operator ++];
      [keyword else]
        [keyword throw] [keyword new]<[type Ugh], ?> [type Error]([string "double \" quoted"]);
    [keyword if] ([variable numofstyles] [operator ==] [variable foo][[ [number 0] ]])
      [keyword return];

    [variable names] [operator =] [keyword new] [type String][[ [variable numofstyles] ]];
    [keyword return] ([type Bar]<[type K], [type V]>) [variable&callee baz]();
  }

  [keyword protected] [type void] [def setX]([type int] [def x]) {
    [variable g] [operator ||] [variable-2 x];
    [keyword super].[property&callee setX]([variable-2 x]);
    [type FontMetrics]<[type Param]> [def fm] [operator =] [variable parent].[property&callee getFontMetrics]([variable fonts][[ [variable i] ]]);

    label: [keyword try] {
      [keyword continue] label;
    } [keyword catch] ([type RuntimeException] [def e]) {
      [variable system].[property&callee println]([variable-2 e].[property message]);
    } [keyword catch] ([keyword final] [type Exception] | [type InterruptedException] [def e]) {
    } [keyword finally] {
      [keyword return] [number 00l];
    }

    [variable foo].[property&callee addListeners](
        ([def x], [def y]) [operator ->] [atom true],
        [def z] [operator ->] [atom false] [operator ?] [variable-2 z] [operator :] [atom null]
        );
  }

  [def join]([type Bar]... [def bars]) {
  }

  [keyword enum] [def TrafficLight] {
    [def RED]([number 30]), [def AMBER]([number 10]),;

    [keyword private] [keyword final] [type int] [def seconds];

    [def TrafficLight]([type int] [def seconds]) {
      [keyword this].[property seconds] [operator =] [variable-2 seconds];
    }

    [type int] [def getSeconds]() {
      [keyword return] [variable seconds];
    }
  }
}

[keyword class] [def Foo] {
  <[type&def X]> [type void] [def foo]([type&local X] [def x], [type Y] [def y]) {
  }
}

[meta @BindingAnnotation]
[keyword @interface] [def SomeInterface] { }
[keyword public] [type void] [def run]() {
  [keyword return] [variable Foo].[keyword class];
}
