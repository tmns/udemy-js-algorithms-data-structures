// Implementation of Radix Sort
// Given an array of numbers, sort the array.

function radixSort(nums) {
	// determine largest number of digits
	const maxDigits = mostDigits(nums);

	// loop from 0 to mostDigits
	for (let k = 0; k < maxDigits; k++) {
		// create our buckets, which is just an array with 10 sub arrays
		let buckets = Array.from({length: 10}, () => []);

		// loop through our nums array
		for (let i = 0; i < nums.length; i++) {
			// return digit at kth place
			const digit = getDigit(nums[i], k);

			// push it into the appropriate bucket
			buckets[digit].push(nums[i]);
		}
		// use the spread operator to flatten the internal buckets (arrays)
		// and then concat them into our new version of nums
		nums = [].concat(...buckets);
	}
	return nums;
}

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(radixSort([12,345,11,222,9082,4,5,5,392,0]));
// => [ 0, 4, 5, 5, 11, 12, 222, 345, 392, 9082 ]