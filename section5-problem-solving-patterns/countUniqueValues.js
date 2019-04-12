// An exercise demonstrating the Multiple Pointers pattern
// Implement a function called countUniqueValues that accepts a sorted array
// and counts / returns the amount of unique values in the array.
// Negative values may exist, but array will always be sorted.

// my solution
function countUniqueValues(values) {
    // declare our pointers
    let pointer1 = 0;
    let pointer2 = 1;

    // loop through array 
    while (pointer2 < values.length) {
        // if we find diff values, reconstruct our array
        // to contain them sequentially
        if (values[pointer1] !== values[pointer2]) {
            pointer1++;
            values[pointer1] = values[pointer2]
            pointer2++;
        // if we don't, simply move pointer2 ahead
        // to continue comparing
        } else {
            pointer2++;
        }
    }
    return values.slice(0, pointer1 + 1).length;
}

console.log(countUniqueValues([1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4

// refactored with instructors solution
function countUniqueValuesRefactored(values) {
    // check if values is empty
    if (values.length === 0) {
        return 0;
    }

    // declare first pointer
    let pointer1 = 0;

    // loop through our values with our second pointer
    for (let pointer2 = 0; pointer2 < values.length; pointer2++) {
        // if we find matching values, we reconstruct the array
        // while also advancing pointer1
        if (values[pointer1] !== values[pointer2]) {
            pointer1++;
            values[pointer1] = values[pointer2];
        }   
    }

    // return the length of our 'new' array
    return pointer1 + 1;
}

console.log(countUniqueValuesRefactored([1,1,1,1,2])); // 2
console.log(countUniqueValuesRefactored([1,2,3,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValuesRefactored([])); // 0
console.log(countUniqueValuesRefactored([-2,-1,-1,0,1])); // 4