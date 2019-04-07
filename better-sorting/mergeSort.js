// Implementation of Merge Sort
// Given an array, sort it

function mergeSort(array) {
	// perform base check
	if (array.length <= 1) {
		return array;
	}

	// define midpoint of array and perform recursion to
	// split array into a left & right side
	const mid = Math.floor(array.length / 2);
	const left = mergeSort(array.slice(0, mid));
	const right = mergeSort(array.slice(mid));

	// call our merge function to return our left and right arrays merged
	return merge(left, right);
}

function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

console.log(mergeSort([9,1,5,3,0,10,100,84,93,72,6,6,10]));
// => [ 0, 1, 3, 5, 6, 6, 9, 10, 10, 72, 84, 93, 100 ]
