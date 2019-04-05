// given an array of words, return a new array with each word capitalized

function capitalizeWords (words) {
    // perform base check
    if (words.length === 1) {
        return words[0].toUpperCase();
    }

    // initialize our new array by performing recursion on passed in
    // array minus the last element
    let newArr = capitalizeWords(words.slice(0, -1));
    
    // push the last element
    const lastWord = words.slice(-1)[0].toUpperCase();
    newArr.push(lastWord);
    
    // return our new array
    return newArr;
}