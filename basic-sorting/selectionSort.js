// Exercise demonstrating Selection Sort
// given an array, sort the values

function selectionSort(array) {
	// loop through our array
	for (let i = 0; i < array.length; i++) {
		// set our initial min to the first index
		let min = i;
		// begin our comparison loop starting from i + 1
		for (let j = i + 1; j < array.length; j++) {
			// if weve found a new min, update the min index
			if (array[j] < array[min]) {
				min = j;
			}
		}
		// check if min is a new index, ie if a swap needs to be made
		if (min !== i) {
			// swap the min element to the beginning
			[array[min], array[i]] = [array[i], array[min]];
		}
	}
	return array;
}

console.log(selectionSort([5,2,6,100,88,-10,3]));
// => [ -10, 2, 3, 5, 6, 88, 100 ]
