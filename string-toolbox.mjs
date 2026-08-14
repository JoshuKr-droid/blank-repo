export function capitaliseString(string) {
    return string
        .split(' ') // split on white space, so you have an array of words
        .map(word => word[0].toUpperCase() + word.slice(1)) // map each word, capitalizing the first letter
        .join(' '); // join it all back together with a space
}

console.log(capitaliseString('this is a test string'));

export function truncate(string, length) {
    if (string.length <= length) {
        return string;
    }
    return string.slice(0, length) + '...';
}

console.log(truncate('This is a long string that needs to be truncated.', 20));

export function camelCase(string) {
    const words = string.split(' ');
    return words[0].toLowerCase() + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(camelCase('this is a test string'));

export function reverseString(string) {
    return string.split('').reverse().join('');
}

console.log(reverseString('this is a test string'));

export function isPalindrome(string) {
    const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('raceca')); // false