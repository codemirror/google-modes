// test: indent_only

class Foo {
  
}

class Foo {
  void bar(
      ) {
    
  }
}

Foo foo = 
    Foo.newBuilder()
    .setBar(Bar.newBuilder()).build();

Foo foo = Foo.newBuilder()
    .setBar(
        Bar
        .newBuilder()
        )
    .build()
    ;

Foo foo = a.
    bar();

Foo foo = a.
    bar(
        );

return (
    ) -> {
  
};

return (
    ) -> 
    1
    ;

MyLambda<String, Long, Object> lambda = 
    (label, value, obj) -> {obj};

MyLambda<String, Long, Object> lambda = (label, 
    value, obj) -> {obj};

MyLambda<String, Long, Object> lambda = (label, value, obj) -> {
  obj};

MyLambda<String, Long, Object> lambda =
    (label, 
        value, obj) -> {obj};

MyLambda<String, Long, Object> lambda =
    (label, value, obj) -> {
  obj};

new int[] {
  0, 1, 2, 3};

new int[] 
    {0, 1, 2, 3};

new int[] {
  0, 
  1, 2, 3};

new int[] {
  0, 1, 2, 3

};
switch (foo) {
  case 1: return b;}

switch (foo) {
  case 1: 
    return b;}

public class Foo {
  @Override
  public Bar bar()
      throws RpcException,
          FooException {
    
  }
}

public class Foo {
  @Override
  public Bar bar(
      )
      throws RpcException, 
          FooException {
    
  }
}

public class Foo {
  @Override
  public Bar bar(
      Baz baz) 
      throws RpcException, FooException {
    
  }
}

public class Foo {
  @Override
  public Bar bar(
      Baz baz)
      throws RpcException, 
          FooException {
    
  }
}

public class Foo {
  @Override
  public Bar bar() 
      throws RpcException, 
          FooException {
    
  }
}

class Foo {
  public void 
      method() {
    
  }
}

class Foo {
  public void
      method() {
    
  }
}

public class Foo 
    extends Bar {
  
}

public class Foo
    extends Bar<
        Baz, Quux> {
  
}

public class Foo
    extends Bar<
        Baz, 
        Quux> {
  
}

foo =
    new Foo() {
      public void bar() {
        
      }
    };

foo =
    new Foo() {
      
      public void bar() {
      }
      
    };

