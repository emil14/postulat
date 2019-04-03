from pathlib import Path
from lark import Lark

grammar_path = Path.cwd() / 'grammar.lark'
lark_parser = Lark(grammar_path.read_text())
