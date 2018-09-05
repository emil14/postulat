# Object calculations

## Adding

Adding is merging

```postulat
objX = {
  x: 0
  y: 1
}
objY = {
  x: 1
  y: 2
  z: 3
}

ObjZ0 = objX + objY

ObjZ0 == {
  ...objX
  ...objY
} == {
  x: 1
  y: 2
  z: 3
}

ObjZ1 = objY + objX
ObjZ1 == {
  x: 0
  y: 1
  z: 3
}
```

## Subtraction

```postulat
objX = {
  x: 0
  y: 1
  z: 2
}
objY = {
  x: 1
  y: 2
}

objZ0 = objX - objY
objZ0 == { z: 2 }

objZ1 = objY - objX
objZ1 == objY
```

## Multiplication

???
