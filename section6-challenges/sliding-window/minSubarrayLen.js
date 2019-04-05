// Exercise demonstrating the Sliding Window pattern
// Given an array of postive ints and a positive int
// Return the min length of a contiguous subarray of which the sum is greater
// than or equal to the integer passed to the function. If none, return 0.

function minSubarrayLen(ints, target) {
    // set up our initial values
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    // loop through our ints
    while (start < ints.length) {
        // if current window doesn't add up to the target, move window right
        if (total < target && end < ints.length){
            total += ints[end];
            end++;
        }
        // if current window adds up to at least the target, shrink window
        else if (total >= target){
        minLen = Math.min(minLen, end - start);
            total -= ints[start];
            start++;
        } 
        // else current total less than target but we reach the end
        // if we dont check this we get an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
    

console.log(minSubarrayLen([2,3,1,2,4,3], 7)) // 2
console.log(minSubarrayLen([2,1,6,5,4], 9)) // 2
console.log(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubarrayLen([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0