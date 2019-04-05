// An exercise demonstrating the frequency counters pattern
// Given two positive integers, find out if the two numbers have the same
// frequency of digits

function sameFrequency(a, b) {

    // convert our nums into strings
    const aString = a.toString();
    const bString = b.toString();

    // check if strings are of equal length
    if (aString.length !== bString.length) {
        return false;
    }

    // create object to hold values and their freqs
    let lookup = {};

    // loop through first string and store value / freqs in obj
    for (let char of aString) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    // loop through second string and check against freqs in our lookup obj
    for (let char of bString) {
        // check if char exists in lookup  & has same freqs
        if (lookup[char]) {
            lookup[char] -= 1;
        } else {
            return false;
        }
    }

    // passed all checks, return true
    return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

