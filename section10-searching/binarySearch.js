// An exercise demonstrating Binary Search
// Given a sorted array of ints and a value, return the index
// at which the value exists. Else return -1.

function binarySearch(array, value) {
	// define a pointer at the start, middle, and  end of our array
	let start = 0;
	let end = array.length - 1;
	let middle = Math.floor((start + end) / 2);

	// continue to loop while our middle is not equal to our value
	// and start is not greater than end
	while (array[middle] !== value && start <= end) {
		// if less than, move our start up to middle + 1
		if (array[middle] < value) {
			start = middle + 1;
		}
		// else if it's greater, move our end down to the middle
		else {
	  	end = middle - 1;	
		}
		// recalculate middle
		middle = Math.floor((start + end) / 2);
	}
	// return our middle if found
	if (array[middle] === value) {
		return middle;
	}
	// not found
	return -1;
}

console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
console.log(binarySearch([4,5,10,29,54,59,90], 100)) // -1
