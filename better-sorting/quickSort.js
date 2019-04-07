// Implementation of Quick Sort
// Given an unsorted array, sort the array

function quickSort(array, left = 0, right = array.length) {
	// perform our base check
	if (left < right) {
		// first call our pivot helper function to find our pivot
		const pivotIndex = pivot(array, left, right);

		// now perform recursion on left side
		quickSort(array, left, pivotIndex - 1);

		// and on right side
		quickSort(array, pivotIndex + 1, right);
	}

	return array;
}

function pivot(array, start = 0, end = array.length) {
  // assign our pivot
  const pivotVal = array[start];
  // assign our initial pivot index
  let pivotIndex = start;
  // loop through the array 
  for (let i = start + 1; i < end; i++) {
    // if pivot value greater than curr el, increment pivot index
    // and swap the curr el with the el at the pivot index
    if (pivotVal > array[i]) {
      pivotIndex++;
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
    }
  }
  // swap our pivotVal to the correct pivotIndex
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

	// return the correct pivotIndex
	return pivotIndex;
} 

console.log(quickSort([4,6,9,1,2,5,3,6,0]));
// => [ 0, 1, 2, 3, 4, 5, 6, 6, 9 ]
