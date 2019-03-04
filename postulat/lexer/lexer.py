import re
from enum import Enum
from typing import List


class Opcode(Enum):
    NUMBER_LITERAL = 0
    IDENTIFIER = 1
    OPERATOR = 2
    UNKNOWN = -1


class Token():
    _operators = [
        '+', '-', '*', '/', '=', '!=', '>', '<', '>=', '<=', '->', '=>']

    def __init__(self, lexeme: str):
        self.value = lexeme
        if re.match(r'[0-9]', lexeme):
            self.type = Opcode.NUMBER_LITERAL
        elif re.match(r'[a-zA-Z]', lexeme):
            self.type = Opcode.IDENTIFIER
        elif lexeme in self._operators:
            self.type = Opcode.OPERATOR
        else:
            self.type = Opcode.UNKNOWN

    def __repr__(self):
        return f'({self.value}, {self.type})'


class Lexer():
    pos: int = 0

    def tokenize(self, lines: List[str]):
        tokens = []
        for line in lines:
            for lexeme in line.split():
                tokens.append(Token(lexeme))
        return tokens
