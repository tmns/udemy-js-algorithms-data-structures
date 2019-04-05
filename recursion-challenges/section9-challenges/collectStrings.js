// given an object, return an array of all the values in the object that
// have a type of string

function collectStrings(obj) {
    let strings = [];
 
    // we will use a helper function here for the recursion
    // this could also be done via pure recursion,
    // as can be seen in the other exercises (eg with concat)
    function recurse(o) {
        for(const key in o) {
            if(typeof o[key] === 'string') {
                strings.push(o[key]);
            }
            else if(typeof o[key] === 'object'
                    && o[key] !== 'null'
                    && !Array.isArray(o[key])) 
            {
                return recurse(o[key]);
            }
        }
    }
 
    recurse(obj);
 
    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));