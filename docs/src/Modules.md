# Modules

## Basic

Imagine we have the following file structure:

```
├── main.pt
└── api.pt
```

Every file is a module. We can call modules one from another with `@use`

```pt
# main.pt

@use {
  ./api # relative path
}
```

We can now use the `api` module in our code, but there are fiew rules:

1. Every module **should be** a function
2. Every function **could be** be a module
3. Module name is the last import path's element with an ppercase first letter

```
api() # this cause error
Api() # this not
```

## Class pattern

Since there is no classes builtin, we can still implement them by ourselves:

```
# api.pt

_privateVar = 42 # underscore is just a naming convention

{
  publikVar: _privateVar
}
```

Let's call it from main module

```
# main.pt

@use {
  ./api
}

Api()._privateVar # err
Api().publikVar # 42
```

As you can see, it code above we call `About` twicely witch is not good. Let's cache Api's instance in var

```
api = Api()
api.publikVar + api.publikVar # 84
```

It is a very common way to share functionality. When everything is a class, we work with immutable instances

## Use

Imagine we have the following file structure:

```
├── main.pt
├── utils/
│   ├── main.pt
│   ├── list.pt
│   ├── obj.pt
│   └── hash.pt
```

If we need the whole `utils` module in our code, we could do:

```
@use {
  ./utils
}
```

If we need only `hash` we can:

```
@use {
  ./utils/hash
}
```

But what if we need `obj` and `hash` but not `list`? Well, in case like this `use` allows as to do:

```
@use {
  ./utils: {
    obj
    hash
  }
}

Obj()
Hash()
```

Looks pretty much like an object, huh?

Note that `Obj` and `Hash` still starts from an uppercase letter.

## Packages

Sometimes programs packaged to be used as modules in another programs. Such programms called **package**

We can work with packages like with a normal modules, but paths must be absolure instead of relative

```
@use {
  io
}

io.out("I'm a printed string!")
```

Same rules apply

```
@use {
  io: {
    in
    out
  }
}

In()
Out()
```
