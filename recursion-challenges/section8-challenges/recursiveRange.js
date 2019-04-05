// given a number, add all the numbers from 0 to that number

function recursiveRange(num){
    if (num === 1) {
        return 1;
    }
    return num + recursiveRange(num - 1);
 }
 