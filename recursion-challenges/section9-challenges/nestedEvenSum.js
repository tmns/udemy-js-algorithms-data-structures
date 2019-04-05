// given an object, return the sum of all even numbers in the object

function nestedEvenSum (obj, count = 0) {
    // pull out the values from our object obj
    const values = Object.values(obj);
    
    // loop over values
    // if we see a number and its divisible by two, we increase count
    // else, if we see an object we perform our recursion
    for (const value of values) {
        if (typeof value === 'number' && value % 2 === 0) {
            count++;
        }
        else if (typeof value === 'object' && value !== null) {
            count += nestedEvenSum(value, count);
        }
    }
    return count;
}
  
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10