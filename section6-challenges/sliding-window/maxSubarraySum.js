// Exercise demonstrating the Sliding Window pattern
// Given an array of integers and a number, return the maximum sum of
// a subarray with the length of the number given

function maxSubarraySum(ints, num) {
    // check if number bigger than array length
    if (num > ints.length) {
        return null;
    }

    // define our initial and temp max 
    let max = 0;
    let tempMax = 0;

    // loop through initial num items to calc initial max
    for (let i = 0; i < num; i++) {
        max += ints[i];
    }

    // set tempMax to max
    tempMax = max;

    // loop through our ints & look at num items each time
    // subtracting the last element & adding the nth element
    for (let i = num; i < ints.length; i++) {
        tempMax = tempMax - ints[i - num] + ints[i];
        max = Math.max(tempMax, max);
    }

    return max;
}


console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null 