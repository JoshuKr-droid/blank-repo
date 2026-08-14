import { capitaliseString, truncate, camelCase, reverseString, isPalindrome } from './string-toolbox.mjs';

console.log(capitaliseString('hello world'));
console.log(truncate('This is a long string that needs to be truncated.', 20));
console.log(camelCase('this is a test string'));
console.log(reverseString('this is a test string'));
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true