from lark import lark

with open('grammar.lark') as f:
    print(f.readlines())

l = lark(grammar)
