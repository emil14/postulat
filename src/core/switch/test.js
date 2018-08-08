import { Switch } from './index';

const PI = 3.14;
const result = Switch(PI, [
  [3.14, '1'],
  [4.20, '2'],
], 'defaultValue');
console.log(result);
