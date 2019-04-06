// An exercise demonstrating a Naive Search algorithm
// given two strings, determine if one exists in the other

function naiveSearch(longString, shortString) {
	// loop through both our long & short strings
	for (let i = 0; i < longString.length; i++) {
		for (let j = 0; j < shortString.length; j++) {
			// if short string char is not equal to long string char
			// break out of the loop, as we need to start examining
			// the next char in long string
			if (shortString[j] !== longString[i + j]) {
					break;
			}
			// if j has been incremented enough to equal the 
			// length of our entire short string, this means
			// weve found a match, so return true
			if (j === shortString.length - 1) {
				return true;
			}
		}
	}
	// not found
	return false;
}

console.log(naiveSearch("leaiojefiabiidsdafloljoasdifjie", "lol")); // true
console.log(naiveSearch("oiasjdfoihasgonasqw", "cyn")); // false 

