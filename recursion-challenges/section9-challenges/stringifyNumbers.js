// given an object, find all values which are numbers and conver them to strings

function stringifyNumbers(obj) {
    // set up our initial new object newObj
    let newObj = {};
    // pull the keys out of obj
    const keys = Object.keys(obj);
    
    // loop through the keys,
    // if we find a number, convert to string & add to newObj
    // else, if we find an object, perform recursion
    // else simply add the item to our newObj
    for (const key of keys) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        }
        else if (typeof obj[key] === 'object' 
                && obj[key] !== null
                && !Array.isArray(obj[key])) 
        {
            newObj[key] = stringifyNumbers(obj[key]);
        } 
        else {
            newObj[key] = obj[key];    
        } 
    }
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));