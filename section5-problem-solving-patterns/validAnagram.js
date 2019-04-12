// This is a simple exercise to practice the Frequency Counters Pattern
// given two strings, detrmine if they are anagrams of each other

// my initial solution
function validAnagram(a, b) {
    // check if strings same length
    if (a.length !== b.length) {
        return false;
    }

    // build two objects to contain freqs
    let aFreqs = {};
    let bFreqs = {};

    // loop over both strings to pull out vals & freqs and store in objs
    for (let char of a) {
        aFreqs[char] ? aFreqs[char] += 1 : aFreqs[char] = 1;
    }
    for (let char of b) {
        bFreqs[char] ? bFreqs[char] += 1 : bFreqs[char] = 1;
    }
    
    // check if vals / freqs in obj2 are equal to those in obj1
    for (let key in aFreqs) {
        // check if val is in both objs
        if (!(key in bFreqs)) {
            return false;
        }
        // check if val's freq equal in both objs
        if (aFreqs[key] !== bFreqs[key]) {
            return false;
        }
    }

    // return bool
    return true;
}

console.log(validAnagram('anagram', 'nagaram')); // should return true

// refactor using instructors method
function validAnagramRefactor(a, b) {
    // check if strings same length
    if (a.length !== b.length) {
        return false;
    }

    // define lookup object
    let lookup = {};

    // loop over a and place its vals and freqs in lookup obj
    for (let char of a) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    // loop over b and perform lookup check
    for (let char of b) {
        // if frequency of char in lookup obj doesnt exist or 0 will return false
        if (!lookup[char]) {
            return false;
        } else { // we decrease the freq, as it represents how many times weve seen this letter
            lookup[char] -= 1;
        }
    }

    return true;
}

console.log(validAnagramRefactor('anagram', 'nagaram')); // should return true

