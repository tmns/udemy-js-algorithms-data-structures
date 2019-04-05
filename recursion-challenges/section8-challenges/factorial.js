// given a number, return the factorial of that number

function factorial(num){
    if (num === 0) {
        return 1;
    }
    return num * factorial(num -1);
 }