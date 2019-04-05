// given a string, returns true if it is the same string when reversed

function isPalindrome(string){
    // perform base checks
    if (string.length === 1) {
        return true;
    }
    if (string.length === 2) {
        return string[0] === string[1];
    }
    
    // perform recursion
    if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1));
}