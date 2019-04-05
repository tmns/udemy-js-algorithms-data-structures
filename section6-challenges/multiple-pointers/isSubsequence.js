// Exercise demonstrating the Multiple Pointers pattern
// Given two strings, determine if chars of first string form a subsequence
// of chars in the second, without their order changing.

function isSubsequence(a, b) {
    // check if either string empty
    if (a.length === 0 || b.length === 0) {
        return false;
    }

    // setup our pointers
    let pointer1 = 0;
    let pointer2 = 0;

    // loop through second string, checking for occurance of chars from 1st
    // if we see a match, we increase our pointer1, then we check if pointer1
    // is equal to the length of our first string, returning true if they are,
    // as this means weve matched on every char in the string.
    for (pointer2; pointer2 < b.length; pointer2++) {
        if (a[pointer1] === b[pointer2]) {
            pointer1++;
        }
        if (pointer1 === a.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hello, world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false

// recursive solution provided by instructor
function isSubsequenceRecursive(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequenceRecursive('hello', 'hello, world')); // true
console.log(isSubsequenceRecursive('sing', 'sting')); // true
console.log(isSubsequenceRecursive('abc', 'abracadabra')); // true
console.log(isSubsequenceRecursive('abc', 'acb')); // false
