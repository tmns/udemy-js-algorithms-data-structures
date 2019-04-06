// An exercise demonstrating Linear Search
// Given an array and a value, return the index at which the value
// exists in the array. Else return -1.

function linearSearch(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
}

console.log(linearSearch([10,15,20,25,30], 25)) // 3

