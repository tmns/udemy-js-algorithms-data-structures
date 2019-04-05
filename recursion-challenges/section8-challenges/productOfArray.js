// given an array of numbers, return the product of them all

function productOfArray(arrayNums) {
    if (arrayNums.length === 1) {
        return arrayNums[0];
    } 
    
    return arrayNums[0] * productOfArray(arrayNums.slice(1));
}