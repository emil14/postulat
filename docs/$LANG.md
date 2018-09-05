# PostUlaT
Safe, strong-typed high-level programming language.

# Philosophy
## Principles
1. Minimal language abstraction
2. Single best solution
3. Expressiveness-driven
4. Minimal boilerplate

## Immutable data
In $LANG you can't do this:
```
x = 0
x = 1
```
That's why we don't have loops (we have something better).

## Clear functions
1. Can't touch the upper scope
2. Must return a value
3. Must *Always* return the same value with the same arguments
4. Can't procude side-effects

# Data Types
## Primitive
* int: 0, 1, -1, 42
* float: 3.14, 4.20
* char: 'i', 'j'
* str: '', "My name is $userName"
* bool: true, false
## Non-primitive
* Object
* List
* Tuple

# Syntax
## Variables
In $LANG we have:

## Constances
```
PI = 3.14
MY_NAME = 'Joe'
```
and...

## Variables
```
foo = bar => bar * 2
someVar = foo(2) ^ 2
```

In fact, it's just a naming convention. Use *constances* to keep a primitive values and variables for any runtime expressions.

### Variables naming convenction
...

## Functions
Thus there is no reserved words in $LANG you should defined function as a regular variable
```
double = a => a * 2
```

In $LANG high-order functions are allowed, which means you can do:
```
doMath = cb => cb(3.14)
doMath(double)

createWrap = cb => () => cb
createWrap(doMath)(double)
```

Functions are not always one-liners, you can (if you really need to) give them a body:
```
doMath = a b c => {
  soStuff = x => x + 1
  PI = 3.14

  <= doStuff(PI)
}
```

If you want to return an object you can do this small trick:
```
doS = () <= { foo: 'bar' }
```

## Object and Classes
While CLear is more functional that obect-oriented language, we're still have objects so we can use some sort of classes with constructor-functions:

Here is an example in JavaScript:
```JavaScript
class Human {
  constructor(sex) {
    this.sex = sex;
  }
}

class Woman extends Human {
  constructor(favoriteFood) {
    super('woman');
    this.favoriteFood = favoriteFood;
  }

  cook() {
    return this.favoriteFood;
  }
}

const Sarah = new Woman('humans blood');
Sarah.cook() // humans blood
```

And here is an equilent in CLear
```
Human = () <= {}
```

## Type system
You're now know a lot. Let's talk about types! CLear is
```
doStuff = (x y z) => z
```



