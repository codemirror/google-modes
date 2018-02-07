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
[keyword public] [keyword class] [type&def FontChoice] [keyword extends] [type Choice]<[type Param][[]]> {
  [comment // line comment]
  [keyword private] [keyword final] [keyword volatile] [meta java.blah.][qualified&type Font] [def&property fonts][[]];
  [keyword public] [def&property FontChoice]([type String] [def&local in], [type Globals] [def&local g]) {
    [keyword super]([variable-2 g]);

    [variable totalwidth] [operator =] [number 30];
    [type int] [def&local i], [def&local last] [operator =] [number 0b0_1], [def&local j] [operator =] [number 0.33e+3f];

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

  [keyword protected] [type void] [def&property setX]([type int] [def&local x]) {
    [variable g] [operator ||] [variable-2 x];
    [keyword super].[property&callee setX]([variable-2 x]);
    [type FontMetrics]<[type Param]> [def&local fm] [operator =] [variable parent].[property&callee getFontMetrics]([variable fonts][[ [variable i] ]]);

    label: [keyword try] {
      [keyword continue] label;
    } [keyword catch] ([type RuntimeException] [def&local e]) {
      [variable system].[property&callee println]([variable-2 e].[property message]);
    } [keyword catch] ([keyword final] [type Exception] | [type InterruptedException] [def&local e]) {
    } [keyword finally] {
      [keyword return] [number 00l];
    }

    [variable foo].[property&callee addListeners](
        ([def&local x], [def&local y]) [operator ->] [atom true],
        [def&local z] [operator ->] [atom false] [operator ?] [variable-2 z] [operator :] [atom null]
        );
  }

  [def&property join]([type Bar]... [def&local bars]) {
  }

  [keyword enum] [type&def TrafficLight] {
    [def&property RED]([number 30]), [def&property AMBER]([number 10]),;

    [keyword private] [keyword final] [type int] [def&property seconds];

    [def&property TrafficLight]([type int] [def&local seconds]) {
      [keyword this].[property seconds] [operator =] [variable-2 seconds];
    }

    [type int] [def&property getSeconds]() {
      [keyword return] [variable seconds];
    }
  }
}

[keyword class] [type&def Foo] {
  <[type&def X]> [type void] [def&property foo]([type&local X] [def&local x], [type Y] [def&local y]) {
  }
}

[meta @BindingAnnotation]
[keyword @interface] [def SomeInterface] { }
[keyword public] [type void] [def run]() {
  [keyword return] [variable Foo].[keyword class];
}
