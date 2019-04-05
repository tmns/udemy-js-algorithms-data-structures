// given an array and a callback, return true if a single value in the array
// returns true when passed to the callback

function someRecursive(array, cb){
    // perform base checks
    if (array.length === 0) {
        return false;
    }
    if (cb(array[0])) {
        return true;
    }
    // perform recursion
    return someRecursive(array.slice(1), cb)
}