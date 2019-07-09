from pathlib import Path
from lark import Lark

cwd = Path.cwd()

grammar_txt = (cwd / 'grammar.lark').read_text()
syntax_test_txt = (cwd / 'syntax-test.txt').read_text()

lark_parser = Lark(grammar_txt, propagate_positions=True)
tree = lark_parser.parse(syntax_test_txt)

print(tree)
