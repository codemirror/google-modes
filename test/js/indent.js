// test: indent_only

const 
    foo 
    = 
    1 
    + 
    2
    ;


const foo = 
    [1, 2];

const foo = [
  1, 2];

const foo = 
    {a, b};

const foo = {
  a, b};

someMethod(foo, [
  0, 1, 2,], bar);

someMethod(
    foo, 
    [0, 1, 2,], 
    bar);

someMethod(foo, [
  0, 1, 
  2,
], bar);

someMethod(
    foo,
    [
      1, 2],);

someMethod(
    foo,
    [1, 2],
    );

someMethod(foo, {
  a: 1, b: 2,}, bar);

someMethod(
    foo, 
    {a: 1, b: 2,}, 
    bar);

someMethod(foo, {
  a: 1, b: 2

}, bar);

someMethod(
    foo,
    {
      a: 1, b: 2},);

someMethod(
    foo,
    {a: 1, b: 2},
    );

someMethod(a => 
  a*2
    );

someMethod(a => {
  a*2}
    );

foo()
    .bar(a => a*2);

foo().bar(a => 
  a*2);

foo = 
    function() {
  
};

foo =
    function() {
  
};

switch (foo) {
  case 1: return b;}

switch (foo) {
  case 1: 
    return b;}

class Foo {
  
}

class Foo {
  bar(
      ) {}
}

class Foo {
  bar() {
    
  }
}

if (x) {
  statement;
  
  more;
}
