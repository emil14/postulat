from lexer import Lexer

lexer = Lexer()

with open('src.txt') as f:
    lines = f.read().splitlines()
    print([token for token in lexer.tokenize(lines)])
