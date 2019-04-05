// An exercise demonstrating the Multiple Pointers pattern
// Given an array of sorted integers and a target average, determine if 
// there is a pair of values in the array with a matching average

function averagePair(ints, average) {

    // check if ints is empty
    if (ints.length === 0) {
        return false;
    }

    // multiply avg by 2 for easier comparison
    const target = average * 2;

    // define our pointers
    let pointer1 = 0;
    let pointer2 = ints.length - 1;

    // loop through our array
    // we will start on each end, if the sum of our pair of numbers is larger
    // than our target, this means we must decrease pointer2 and try again
    // else we increase pointer1 and try again
    while (pointer1 < pointer2) {
        if (ints[pointer1] + ints[pointer2] === target) {
            return true;
        }
        if (ints[pointer1] + ints[pointer2] > target) {
            pointer2--;
        } else {
            pointer1++;
        }
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false