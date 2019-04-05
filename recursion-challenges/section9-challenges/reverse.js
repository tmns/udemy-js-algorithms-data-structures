// given a string, return a new string in reverse

function reverse(string){
    if (string.length === 1) {
        return string;
    }
    return string[string.length - 1] + reverse(string.substring(0, string.length - 1))
}

// instructors solution
function reverseRefactored(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


