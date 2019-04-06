// Exercise demonstrating Insertion Sort
// given an array, sort its values

function insertionSort(array) {
	// begin to loop through our array starting at the second element
	for (let i = 1; i < array.length; i++) {
		// set our current val
		let curr = array[i];
		// set our iterator for the left (sorted) side of the array
		let j = i -1;
		// begin to loop through the left side of the array.
		// as long as we havent seen every value (j >= 0) AND the element
		// were comparing (array[j]) is greater than our curr, we continue
		while (j >= 0 && array[j] > curr) {
			// move the larger value to the right / move
			// the smaller value to the left side of the array to
			// continue the comparisons
			array[j + 1] = array[j];
			j = j - 1;
		}
		// place the current value in its correct place
		array[j + 1] = curr;
	}
	return array;
}

console.log(insertionSort([3,8,-10,-30,2,1,4,100,6,90]));
// => [ -30, -10, 1, 2, 3, 4, 6, 8, 90, 100 ]
