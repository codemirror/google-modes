// test: indent_only
if (foo) 
  return;

if (foo + 
    bar) 
  return;


if (foo) {
#if DIRECTIVES_IGNORED
  DropEverything();
}

if (a->ba(
        baz)) {}


LOG(FOO) << "foo" 
    << "bar";

while (foo + 
       bar) {
  
} // aligning to parens

namespace mynamespace {
}

const Foo& foo = 
    bar.baz().quux(X);

const Foo& foo =
    bar.baz().quux(
        X);

ReturnType
LongClassName::Meth(
    Type1 par1) {
  
}

ReturnType LongClassName::Meth(
    Type1 par1) {
  
}

method([&](int a, int b) {
  
});

O C::M(T a, 
       T b) {
  
}

O C::M(T a,
       T b) {
  
}

void foo(int my_arg) {
  int abc =
      MyFunction(
          my_arg);
}

class A 
    : 
    public B {
  
}

class A
    : public B {
  
}

class A
    : public B<
        X, Y> {
  
}

class Foo {
 public:
  
}

Type m{a, 
       b};

Type m(
    a, 
    b);

Type m = {
  
};

Type m = (
    );

Type m = 
    ();

MyClass::MyClass(
    int var) 
    : some_var_(var) {
  
}

MyClass::MyClass(
    int var) 
    : some_var_(var) {
  
}

MyClass::MyClass(
    int var)
    : some_var_(var), 
      some_other_var_(var + 1) {
  
}

auto something = MakeSomething(
    // Some comment comes here
    +[](Bar* bar) {
      // Another comment
      return bar->get(1);
    });
