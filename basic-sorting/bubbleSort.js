// An exercise that demonstrates Bubble Sort
// Given an array, sort its items

function bubbleSort(array) {
	// define a bool to check if a swap was made, used to optimize
	// the sort to break out of the loop if the list has been sorted
	let swap;

	// loop through our array from end to beg
	// we do this because each time we bubble an item to the top,
	// we can consider that item sorted, and do not need to check 
	// this last element a second time.
	for (let i = array.length; i > 0; i--) {
		// a swap hasnt occurred yet
		swap = false;
		// create another loop inside for comparing
		for (let j = 0; j < i - 1; j++) {
		 // if our first number is larger...
			if (array[j] > array[j + 1]) {
				// ... swap!
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swap = true;
			}
		}
		// if no swap occurred, break out as this means our array is sorted!
		if (!swap) {
			break;
		}
	}
	return array;
}

console.log(bubbleSort([9,2,1,8,0,4,3,-10,11,23,-50, 20,30, 6])) 
// => [ -50, -10, 0, 1, 2, 3, 4, 6, 8, 9, 10, 20, 23, 30 ]

// Bubble Sort can be useful when dealing with nearly sorted arrays
// like the one below, given the optimization in the code with the swap bool.
console.log(bubbleSort([8,0,1,2,3,4,5,6]));
// => [ 0, 1, 2, 3, 4, 5, 6, 8 ] 
