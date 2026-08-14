import {
  sum,
  average,
  unique,
  chunk,
  intersection
} from "./array-toolbox.mjs";

console.log(sum([1, 2, 3, 4]));
console.log(average([1, 2, 3, 4]));
console.log(unique([1, 2, 2, 3, 3]));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(intersection([1, 2, 3], [2, 3, 4]));

import { capitaliseString, truncate, camelCase, reverseString, isPalindrome } from './string-toolbox.mjs';

console.log(capitaliseString('hello world'));
console.log(truncate('This is a long string that needs to be truncated.', 20));
console.log(camelCase('this is a test string'));
console.log(reverseString('this is a test string'));
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
