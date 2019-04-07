// Merge Helpler Function for Merge Sort
// Given two sorted arrays, merge them into 1 sorted array

// my solution
function merge(array1, array2) {
  // create our empty array
  let merged = [];
  // create two pointers
  let pointer1 = 0;
	let pointer2 = 0;
  
	// while we haven't exhausted either array
  while (pointer1 < array1.length && pointer2 < array2.length) {
    // if array1 val smaller, push it to merge and move on to next val
		if (array1[pointer1] < array2[pointer2]) {
      merged.push(array1[pointer1]);
      pointer1++;
		// if array2 val smaller, push it to merge and move on to next val
    } else if (array2[pointer2] < array1[pointer1]) {
      merged.push(array2[pointer2]);
      pointer2++;
		// if equal, push both to merge and move on to next vals
    } else {
      merged.push(array1[pointer1], array2[pointer2]);
			pointer1++;
			pointer2++;
    }
  }
	// merge remaining vals from array we didnt exhaust
  if (pointer1 === array1.length) {
    merged = merged.concat(array2.slice(pointer2));
  } else {
    merged = merged.concat(array1.slice(pointer1));;
  }
  return merged;
}

console.log(merge([1,4,6,8], [2,3,4,7,10,20]));
// => [ 1, 2, 3, 4, 4, 6, 7, 8, 10, 20 ]
console.log(merge([], [1,3]));
// => [ 1, 3 ]
console.log(merge([1,4,20],[3,5,18]))
// => [ 1, 3, 4, 5, 18, 20 ]

// instructor's solution
function mergeInstructor(arr1, arr2) {
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

console.log(mergeInstructor([1,4,6,8], [2,3,4,7,10,20]));
// => [ 1, 2, 3, 4, 4, 6, 7, 8, 10, 20 ]
console.log(mergeInstructor([], [1,3]));
// => [ 1, 3 ]
