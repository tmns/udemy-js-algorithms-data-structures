// An exercise demonstrating the multiple pointers pattern
// Given a variable number of arguments, determine if there are any duplicates

function areThereDuplicates(...args) {
    // check if args is empty
    if (args.length === 0) {
        return null;
    }

    // sort args in order to compare arg with arg that comes exactly after
    args.sort((a, b) => a > b);

    // create our first pointer
    let pointer1 = 0;

    // begin to loop through args with pointer2
    for (let pointer2 = 1; pointer2 <= args.length; pointer2++) {
        if (args[pointer1] === args[pointer2]) {
            return true;
        }
        pointer1++;
    }

    return false;
}

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c','a')) // true


// solution provided by instructor, which is a one liner and O(nlog(n))
function areThereDuplicatesBetter() {
    // return a Set obj of the args, which removes all dups, and then compare
    // its size against the length of the args
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesBetter(1,2,3)) // false
console.log(areThereDuplicatesBetter(1,2,2)) // true
console.log(areThereDuplicatesBetter('a','b','c','a')) // true