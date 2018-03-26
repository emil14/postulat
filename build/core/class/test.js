"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// inheritance
const Human = index_1.Class({ hands: 2 });
const Animal = index_1.Class({ legs: 4 });
const Mutant = index_1.Class(Human, Animal, {
    head: 2,
});
const johnLogan = Mutant();
console.log({ johnLogan });
// context
const Self = index_1.Class(Mutant, {
    showContext: me => me,
});
const context = Self();
console.log({ context: context.showContext() });
