// Pivot Helper Function for Quick Sort

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

	// this console.log is just for testing
	console.log(array);

	// return the correct pivotIndex
	return pivotIndex;
} 

console.log(pivot([26,23,27,44,17,47,39,42,43,1]));
// => [ 1, 23, 17, 26, 27, 47, 39, 42, 43, 44 ]
// => 3
