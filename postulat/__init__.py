from pathlib import Path
from lark import Lark

cwd = Path.cwd()
grammar_path = cwd / 'grammar.lark'
syntax_test_path = cwd / 'syntax-test.txt'

lark_parser = Lark(grammar_path.read_text())

# print(lark_parser.parse(syntax_test_path.read_text()))
