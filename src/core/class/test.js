import { Class } from './index';

// inheritance
const Human = Class({ hands: 2 });
const Animal = Class({ legs: 4 });
const Mutant = Class(Human, Animal, {
  head: 2,
});
const johnLogan = Mutant();
console.log({ johnLogan });

// context
const Self = Class(Mutant, {
  showContext: me => me,
});
const context = Self();
console.log({ context: context.showContext() });
