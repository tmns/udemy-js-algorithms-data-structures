// given an array of strings, capitalize the first letter of each string in the array

function capitalizeFirst (arrStrings) {
    // perform base check
    if (arrStrings.length === 1) {
        return [arrStrings[0][0].toUpperCase() + arrStrings[0].slice(1)];
    }
    // initialize new array by performing recursion on the entire array minus the last element
    const newArr = capitalizeFirst(arrStrings.slice(0, -1));
    // manually construct the last element's uppercase form
    const lastEl = arrStrings.slice(arrStrings.length - 1)[0][0].toUpperCase() + arrStrings.slice(arrStrings.length - 1)[0].slice(1);
    // push it on to our newArr and return
    newArr.push(lastEl);
    return newArr;
}
