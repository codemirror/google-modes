# test: indent_only

quux(
    var_one, var_two, var_three, var_four)

quux(var_one, var_two, 
     var_three, var_four)

quux(var_one,
     var_two,
     )

quux(var_one,
     var_two
     )

meal = (
    spam, beans)

meal = (spam, 
        beans)

meal = [
    spam, beans]

meal = [spam, 
        beans]

meal = [
    spam,
    beans,
    ]

foo = {
    "x": x}

foo = {
    
    "x": x + 
        y}

foo = {
    "a": a, 
    "b": b,
}

var = (
    3) or (
        4)

return int(str(
    3))

class Foo(object):
  

def foo(
    a: int, 
    b: int) -> int:
  

def foo(a: int,
        b: int) -> int:
  

def foo(
    a: int, 
    b: int) -> int:
  

if (True):
  

return ("implicit line "
        "joining")

return ('fmt') % dict(
    a=b)

a = ('afmt'
     'bfmt') % dict(
        x=y)

