// given an array of arrays, return an array with all values flattened

function flatten(array){
    // initialize the final array we will return
    let finalArr = [];
    
    // loop through items in given array and perform recursion
    // on the items if they are themselves also type array
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            finalArr = finalArr.concat(flatten(array[i]));
        } else {
            finalArr.push(array[i]);
        }
    }
    return finalArr;
}
