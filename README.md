## Work from Udemy course "JavaScript Algorithms and Data Structures Masterclass"

#### This repository hosts all my work from the various coding challenges and projects completed while taking this udemy course: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/. 

#### This Course covers:

* Big O Notation
* Analysis of Performance of Arrays and Objects
* Problem Solving Approach and Patterns
* Recursion
* Searching Algorithms
* Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Radix
* Singly Linked and Doubly Linked Lists
* Stacks and Queues
* Binary Search Trees
* Tree Traversal
* Binary Heaps
* Hash Tables
* Graphs
* Graph Traversal
* Djikstra's Algorithm
* Dynamic Programming
* The Implementation of 10+ Data Structures From Scratch

#### It's a great course and I highly recommend it!

#### What follows are the notes I kept throughout taking the course. 

##### Keep in mind they were only meant to be personal notes and as such are NOT proofread, double-checked, etc. So, expect mistakes. 

##### If you're looking for something more refined, much more well put together, organized, and thorough resources are out there, such as this repo https://github.com/LeftHandRobotics/javascript-algorithms (in fact, the charts in Section 2 are taken from that page). 

##### Having said that, if you'd like to make a correction, make a PR or contact me.

As these are course notes, the sections are more-or-less organized according to the course lectures. You'll note that there are code snippets throughout, as examples of the relevant material. Keep in mind that as the course went on, I began to remove white space and comments from these snippets in a futile attempt at brevity; so, if you're looking for something more comprehensive / readable, it's suggested you refer to the actual code in the relevant section folder. 

### TOC

- [Section 2: Big O](#section-2--big-o)
  - [General](#general)
  - [Data Structure Operations Complexity](#data-structure-operations-complexity)
  - [Array Sorting Algorithms Complexity](#array-sorting-algorithms-complexity)
  - [Shorthands for Big O Analysis](#shorthands-for-big-o-analysis)
  - [Space Complexity](#space-complexity)
  - [Logarithms](#logarithms)
- [Section 3: Analyzing Perf of Arrs & Obs](#section-3--analyzing-perf-of-arrs---obs)
  - [Objects](#objects)
  - [Arrays](#arrays)
- [Section 4: Problem Solving Approach](#section-4--problem-solving-approach)
  - [1) Understand the Problem](#1--understand-the-problem)
  - [2) Explore Concrete Examples](#2--explore-concrete-examples)
  - [3) Break It Down](#3--break-it-down)
  - [4) Solve / Simplify](#4--solve---simplify)
  - [5) Look Back and Refactor](#5--look-back-and-refactor)
- [Section 5: Problem Solving Problems](#section-5--problem-solving-problems)
  - [Frequency Counters](#frequency-counters)
  - [Multiple Pointers](#multiple-pointers)
  - [Sliding Window](#sliding-window)
  - [Divide and Conquer](#divide-and-conquer)
- [Searching Algorithms](#searching-algorithms)
  - [Linear Search](#linear-search)
  - [Binary Search](#binary-search)
- [Basic Sorting Algorithms](#basic-sorting-algorithms)
  - [Bubble Sort](#bubble-sort)
  - [Selection Sort](#selection-sort)
  - [Insertion Sort](#insertion-sort)
- [Intermediate Searching Algorithms](#intermediate-searching-algorithms)
  - [Merge Sort](#merge-sort)
  - [Quick Sort](#quick-sort)
  - [Radix Sort](#radix-sort)
- [Data Structures](#data-structures)
  - [Singly Linked List](#singly-linked-list)
  - [Doubly Linked List](#doubly-linked-list)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Tree (General)](#tree--general-)
  - [Binary (Search) Tree](#binary--search--tree)
  - [Tree Traversal](#tree-traversal)
    - [Breadth-First Search (BFS)](#breadth-first-search--bfs-)
    - [Depth-First Search (DFS)](#depth-first-search--dfs-)
  - [Binary Heap](#binary-heap)
  - [Priority Queue](#priority-queue)
  - [Hash Table](#hash-table)
  - [Graph](#graph)
    - [Graph Traversal](#graph-traversal)
- [Dijkstra's Algorithm](#dijkstra-s-algorithm)
- [Dynamic Programming](#dynamic-programming)

### Section 2: Big O

#### General

- *Big O notation* is used to classify algorithms according to **how their running time or space requirements grow as the input size grows.**

- Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

  | Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements |
  | -------------- | ---------------------------- | ----------------------------- | ------------------------------ |
  | **O(1)**       | 1                            | 1                             | 1                              |
  | **O(log N)**   | 3                            | 6                             | 9                              |
  | **O(N)**       | 10                           | 100                           | 1000                           |
  | **O(N log N)** | 30                           | 600                           | 9000                           |
  | **O(N^2)**     | 100                          | 10000                         | 1000000                        |
  | **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                      |
  | **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                     |

  #### Data Structure Operations Complexity

  | Data Structure         | Access | Search | Insertion | Deletion | Comments                                             |
  | ---------------------- | :----: | :----: | :-------: | :------: | :--------------------------------------------------- |
  | **Array**              |   1    |   n    |     n     |    n     |                                                      |
  | **Stack**              |   n    |   n    |     1     |    1     |                                                      |
  | **Queue**              |   n    |   n    |     1     |    1     |                                                      |
  | **Linked List**        |   n    |   n    |     1     |    1     |                                                      |
  | **Hash Table**         |   -    |   n    |     n     |    n     | In case of perfect hash function costs would be O(1) |
  | **Binary Search Tree** |   n    |   n    |     n     |    n     | In case of balanced tree costs would be O(log(n))    |
  | **B-Tree**             | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
  | **Red-Black Tree**     | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
  | **AVL Tree**           | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
  | **Bloom Filter**       |   -    |   1    |     1     |    -     | False positives are possible while searching         |

  #### Array Sorting Algorithms Complexity

  | Name               |     Best      |         Average         |            Worst            | Memory | Stable | Comments                                                     |
  | ------------------ | :-----------: | :---------------------: | :-------------------------: | :----: | :----: | :----------------------------------------------------------- |
  | **Bubble sort**    |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                                                              |
  | **Insertion sort** |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                                                              |
  | **Selection sort** | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |   No   |                                                              |
  | **Heap sort**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1    |   No   |                                                              |
  | **Merge sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n    |  Yes   |                                                              |
  | **Quick sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |
  | **Shell sort**     | n&nbsp;log(n) | depends on gap sequence | n&nbsp;(log(n))<sup>2</sup> |   1    |   No   |                                                              |
  | **Counting sort**  |     n + r     |          n + r          |            n + r            | n + r  |  Yes   | r - biggest number in array                                  |
  | **Radix sort**     |     n * k     |          n * k          |            n * k            | n + k  |  Yes   | k - length of longest key                                    |



#### Shorthands for Big O Analysis

- Arithmetic ops are constant
- Var assignment is constant
- Accessing elements in an array / obj is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop (eg nested for loop ~ n^2)

#### Space Complexity

- We can also use Big O notation to analyze space complexity: **how much additional memory do we need to allocate in order to run the algorithm.**
- Some rules of thumb:
  - Most primitives (bools, nums, undefined, nulll) are constant space
  - Strings require O(n) space where n is the string length
  - Reference types are generally O(n) where n is the length (for arrays) or the num of keys (for objs)

#### Logarithms

- What is a log? => Just like multiplication & devision are pairs, **logarithm and exponentiation are pairs:**

  - log2 (8) = 3     -- log2 (value) = exponent
  - 2^3 = 8             -- 2^(exponent) = value
  - for our sake in the course, log === log2
  - then, in our case, we can say the **log of a number roughly measures the num of times you can divide that num by 2 before you get a value thats less than or equal to 1.**

  

### Section 3: Analyzing Perf of Arrs & Obs

#### Objects

- Excellent choice when you don't need any ordering!
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(n)
  - Access - O(1)
  - Exs:
    - Object.keys - O(n)
    - Object.value - O(n)
    - Object.entries O(n)
    - hasOwnProperty - O(1)

#### Arrays

- Typically use **when you need order** (though not always).
  - Insertion
    - At the end ~ O(1)
    - Anywhere else ~ O(n)
  - Removal
    - At the end ~ O(1)
    - Anywhere else ~ O(n)
  - So, push & pop is always faster than shift & unshift!
  - Searching - O(n)
  - Access - O(1)
  - Exs:
    - Push, pop ~ O(1)
    - shift, unshift, concat, slice, splice ~ O(n)
    - sort ~ O(nlogn)
    - forEach / map / filter / reduce / etc ~ O(n)

### Section 4: Problem Solving Approach

#### 1) Understand the Problem

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? δλδ do I have enough information to solve the problem? (you may not be able to answer this q until you start solving the problem, though it's still worth considering the question at this early stage).
- How should I label the important pieces of data that are a part of the problem?

#### 2) Explore Concrete Examples

- Coming up with examples can help you understand the problem better.
- Examples also provide sanity checks that your eventual solution works how it should
- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

#### 3) Break It Down

- Explicitly write out the basic steps you need to take
- This forces you to think about the code you'll write before you write it and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (eg language syntax) as well.

#### 4) Solve / Simplify

- Find the core difficulty in what youre trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

#### 5) Look Back and Refactor

- Can you check the results?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

### Section 5: Problem Solving Problems

#### Frequency Counters

- This pattern uses **objects or sets to collect values & their frequencies**
- This can often avoid the need for nested loops or O(n^2) operations with arrays / strings, turning the solution into **O(n)**

```javascript
// given two strings, determine if they are anagrams of eachother
function validAnagram(a, b) {
    // check if strings same length
    if (a.length !== b.length) {
        return false;
    }

    // define lookup object
    let lookup = {};

    // loop over a and place its vals and freqs in lookup obj
    for (let char of a) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    // loop over b and perform lookup check
    for (let char of b) {
        // if frequency of char doesnt exist or 0 will return false
        if (!lookup[char]) {
            return false;
        // we decrease the freq, 
        // as it represents how many times weve seen this letter
        } else { 
            lookup[char] -= 1;
        }
    }
    return true;
}

// should return true
console.log(validAnagramRefactor('anagram', 'nagaram')); 
```



#### Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well

```javascript
// given an array of sorted values, return the count of unique values
function countUniqueValues(values) {
    // check if values is empty
    if (values.length === 0) {
        return 0;
    }

    // declare first pointer
    let pointer1 = 0;

    // loop through our values with our second pointer
    for (let pointer2 = 0; pointer2 < values.length; pointer2++) {
        // if we find matching values, we reconstruct the array
        // while also advancing pointer1
        if (values[pointer1] !== values[pointer2]) {
            pointer1++;
            values[pointer1] = values[pointer2];
        }   
    }

    // return the length of our 'new' array
    return pointer1 + 1;
}

console.log(countUniqueValues([1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
```



#### Sliding Window

- This pattern involves **creating a window which can either be an array or number from one position to another**
- Depending on a certain condition, **the window either increases or closes** (and a new window is created)
- Very **useful for keeping track of a subset of data** in an array / string / etc.

```javascript
// Given an array and a number n, find the max sum of n consecutive
// elements in the array

function maxSubarraySum(arr, num) {
  // check if arr length is less than num
  if (arr.length < num) return null;
  
  // define our max and temp sum counters
  let maxSum = 0;
  let tempSum = 0;
  
  // loop through the first num items and calculate initial max sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  
  // set initial tempSum to maxSum
  tempSum = maxSum
  
  // create the sliding window
  // ie, begin looping through entire array,
  // subtracting the beg value and adding the end value each time
  // [1, 5, 1, 3, 8]  => [1, 5, 1, 5, 8]
 	//	-        -    	       -        -
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  } 
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3) // 19
```



#### Divide and Conquer

- This pattern **involves dividing a data set into smaller chunks and then repeating a process with a subset of data**
- This pattern can tremendously decrease time complexity!
- Used in many searching and sorting algorithms.
- **O(log(n))** - since we **split search area by two** for every next iteration.

```javascript
// given a sorted array of integers and a value, return the index
// where the value passed is located in the array.

function search(array, val) {
	// define our initial min and max to be the min and max array indices
  let min = 0;
  let max = array.length -1;
  
  // loop through our array
  while (min <= max) {
    // define our middle index
    const middle = Math.floor((min + max) / 2)
    
    // perform the divide..
    if (array[middle] < val) {
      min = middle + 1;
    } 
    else if (array[middle] > val) {
      max = middle - 1;
    }
    // ..and potentially conquer
    else {
      return middle
    }
  }
  return -1;
}

console.log(search[1,2,3,4,5,6], 4)) // 3
```



### Searching Algorithms

#### Linear Search

- The best way we can search an **unordered** list.
  - `indexOf`, `includes`, `find`, `findIndex`
- Worst case: O(n), Best case: O(1)

#### Binary Search

- Binary search is much faster, as it uses the **Divide and Conquer pattern**
- Rather than eliminating one element at a time, you can e**liminate half of the elements at a time**
- However, only works with **sorted** arrays!
- Worst case: O(log(n)), Best case: 0(1)
  - Eg if an array is 16 elements long, the maximum steps taken will be 4. log(16) = 4 (or) 2 ^ 4 = 16.

### Basic Sorting Algorithms

- Sorting is the process of rearranging the items in a collection (eg an array) so that the items are in some kind of order
- There are many different ways to sort, and the different ways (ie algorithms) have their own advantages / disadvantages.
- Basic sorting algorithms include `bubble`, `selection`, and `insertion`
  - not commonly used as they're not the most efficient; however, in some cases they are still useful.
- The built in JS `Array.prototype.sort()` can return surprising results, as it by default actually **sorts according to string Unicode code points.** Thus:
  - `[4,6,8,10,15].sort() === [10,15,4,6,8]`
- So, in order to use the builtin sort, we must tell JS how to sort, by **passing to the method a comparator function.**
- This function looks at pairs of elements (a and b), and **determines their sort order based on the return value:**
  - If it returns a **negative** number, **a** should come **before b**
  - If **positive, a after b**
  - If zero, a and b are the same as far as the sort is concerned.

```javascript
// sort a list of strings by length
function comapreByLen(str1, str2) {
  return str1.length - str2.length;
}

["These", "Are", "Some", "Example", "Strings!"].sort(compareByLen);
// => ["Are", "Some", "These", "Example", "Strings!"]
```



#### Bubble Sort

- A sorting algorithm where the **largest values bubble to the top**
- Compare two values every time, and **swap the largest value** towards 'the top'
- Many sorting algorithms involve some type of swapping. How do we swap in JS?

```javascript
// ES5
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// ES2015
const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
```

- Due to nested arrays, typically **O(n^2)**; however with a nearly sorted array, can be O(n). As such, Bubble Sort tends to only be useful when dealing with arrays that are very nearly sorted.

```javascript
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
```



#### Selection Sort

- Similar to Bubble Sort, but instead of first placing large values into sorted position, it **places small values into sorted position**
- Time complexity is **O(n^2)** with a best case of O(n) (like Bubble Sort)
- The only situation where Selection Sort may be considered more useful than Bubble, is if for some reason we want to minimize the amount of swaps me make.

```javascript
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
			// swap!
			[array[min], array[i]] = [array[i], array[min]];
		}
	}
	return array;
}

console.log(selectionSort([5,2,6,100,88,-10,3]));
// => [ -10, 2, 3, 5, 6, 88, 100 ]
```



#### Insertion Sort

- Builds up the sort by **gradually creating a larger left half which is always sorted.**
  - Start by picking the second element in the array
  - Compare the second element with the one before and swap if necessary
  - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie the left side) to place the element in the correct place.
  - Time complexity **O(n^2)**.
  - One thing Insertion Sort is good at is sorting data continuously as it comes in (eg streaming), as it's considered an **Online Algorithm.**

```javascript
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
```



### Intermediate Searching Algorithms

- Can improve time complexity from O(n^2) to **O(nlogn)**
- However, there's a tradeoff between efficiency and simplicity

#### Merge Sort

- A combination of **splitting, sorting, and merging.**
- Complexity is O(nlogn) because we perform O(logn) splits, and O(n) comparisons to merge the split elements
- Exploits the fact that arrays of 0 or 1 elements are always sorted.
- Basic idea is to continue to **split** the array until you have single elements, then begin to compare and **merge** them back piece by piece into one **sorted** array.
- **But how do we merge?**
  - It's useful to first implement a function responsible for merging two sorted arrays
  - ie, given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays.
  - This function should run in **O(n + m) time and O(n + m) space** and should not modify the parameters passed to it

```javascript
// Merge Helper Function
// Create an empty array, take a look at the smallest values
// in each input array.
// While there are still values we haven't looked at ...
// a) If the value in the 1st array is smaller than that of the 2nd,
// push the value in the 1st array into our results and move on to
// the next value in the 1st array.
// b) If the value in the 1st array is larger, push the value in the
// 2nd array into our results and move on to the next 2nd array value
// c) Once we exhaust the array, push in all remaining values from the
// other array.

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
		// if array2 val smaller or equal, 
    // push it to merge and move on to next val
    } else {
      merged.push(array2[pointer2]);
      pointer2++;
    }
  }
	// merge remaining vals from array we didnt exhaust
  while (pointer1 < array1.length) {
    merged.push(array1[pointer1]);
    pointer1++;
  }
  while (pointer2 < array2.length) {
    merged.push(array2[pointer2]);
    pointer2++;
  }
  return merged;
}
```

- Now that we have our Merge helper function, we can write the entire Merge Sort algorithm. It should go something like this:
  - Break up the array into halves until you have arrays that are empty or have one element
  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
  - Then return the merged and sorted array.

```javascript
// Merge Sort

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
```



#### Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
- Works by **selecting one element (the "pivot")** and **finding the index where the pivot should end up in the sorted array**.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
- To assist us, it's useful to **first create** a **Pivot helper function**, responsible for arranging elements in an array on either side.
  - Give an array, this helper function should designate the an element as the pivot.
  - Then it should rearrange elements in the array so that **all values less than the pivot** are **moved to the left** of the pivot, and **all values greater than the pivot** are **moved to the right** of the pivot.
  - The order of the elements on either side of the pivot doesn't matter
  - The helper should do this in place, ie not create a new array
  - When complete, the **helper should return the index of the pivot**
- The runtime of Quick Sort actually depends on in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity here, we'll always choose the first element, which has some Big O consequences if the list happens to be sorted.
  - Generally though, if you choose an element and it ends up being the minimum or maximum, this will result in O(n^2), as it will require O(n) splits, and O(n) comparisons. Otherwise, time complexity is, for the same reasons as merge sort, O(nlogn)
  - Thus, if you know you may receive a sorted list, it is better to pick a value in the middle. Typically choosing a random value or the median is the best strategy (when your inputs may be both unsorted or sorted).

```javascript
// Pivot Ηelper
// Accepts three arguments, an array, start index, end index
// start index defaults to 0, end index defaults to array.length
// 1) Grab the pivot from the start of the array
// 2) Store the current pivot index in a variable 
// (this will keep track of where the pivot should end up)
// 3) Loop through the array from the start until the end
// ... 3a) If the pivot is greater than the current element,
// ... increment the pivot index variable and
// ... swap the current element with the element at the pivot index
// 4) Swap the starting element (i.e. the pivot) with the pivot index
// 5) Return the pivot index

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
```

- Now that we have our Pivot Helper function, we can move on to implementing  the entire Quick Sort algorithm. It should go something like this:
  - Call the pivot helper on the array
  - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
  - Your base case occurs when you consider a subarray with less than 2 elements.

```javascript
// Quick Sort

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
```



#### Radix Sort

- With sorting algorithms that involve comparisons, O(nlogn) is the best we can achieve.

- However, there are sorting algorithms that do not involve comparisons, as they assume inherent properties about the data they sort.

- Radix is a special sorting algorithm that **works on lists of numbers.**

- Never makes comparisons!

- It's **time complexity is O(nk)**, where **n is the length of our array**, and k **is the number of digits (average)**

  - It should be noted however, that if all n keys are distinct, then k has to be at least logn for a a random-access machine to be able to store them in memory, which results in O(nlogn), ie the time complexity of Merge and Quick Sort. -- See Wikipedia for more on this.

- Exploits the fact that **information about the size of a number is encoded in the number of digits.**

- **More digits means a bigger number.**

- Eg, if we are dealing with base 10 numbers, we create 10 buckets (0 - 9) and repeatedly (the number of times is equal to the max number of digits in our list of numbers) sort the numbers into the different buckets based on the numbers' individual digits.

- In order to implement Radix Sort, **it's helpful to first build three helper functions**

  - `getDigit(num, place)` - returns the digit in `num` at the given `place` value. Remember this refers to mathematics place value (eg 10s, 100s, etc)
    - `gitDigit(18391, 1) === 9`

  ```javascript
  // Helper Function for finding digit of a given place in a number
  // Works only with base 10 values
  function getDigit(num, i) {
  	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  ```

  - `digitCount(num)` - returns the number of digits in `num`

  ```javascript
  // Helper Function for finding number of digits in num
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  ```

  - `mostDigits(nums)` - given an array of numbers, returns the number of digits in the largest number(s) of the list (using `digitcount`)

  ```javascript
  // Helper Function for finding the number of digits 
  // in the largest number(s) in the list
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  ```

- Now that we have our helper functions, we can implement the entire Radix Sort algorithm. It should go something like:

  - Given a list of numbers,
  - Figure out how many digits the largest number has
  - Loop from k = 0 up to the largest number of digits
  - For each iteration of the loop:
    - Create buckets (ie arrays) for each digit (0 - 9)
    - Place each number in the corresponding bucket based on its kth digit
  - Replace our existing array with values in our buckets starting with 0 and going up to 9
  - Return list at the end!

```javascript
// Radix Sort

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
```



### Data Structures

- Collections of **values,** the **relationships** among them, and the **functions or operations** that can be applied to the data.

- Different data structures excel at different things. Some are highly specialized while others are more generalized.

  

#### Singly Linked List

- A data structure that contains a **head, tail, and a length property**

- Consists of nodes, and **each node** has a **value** and a **pointer** to the **next node or null**

- As such, can not be quickly accessed at a specific index.

- But, it is **an excellent alternative to arrays when insertion and deletion at the beginning are frequently required**

- **Insertion** is **O(1)**

- **Removal** depends, Can be **O(1)** if removing from **beginning**, or **O(n)** if removing from **end**

- **Searching** is **O(n)**

- **Access** is **O(n)**

- **PUSH** goes like this:

  - Create a new node using the pushed value
  - If there is no head on the list (eg list is empty), set the head and tail to the newly created node
  - Else, set the next property of the tail to point to the new node and then update the tail to be the new node
  - Increment the list's length by 1
  - Return the list

  

- **POP** goes like this:

  - If there are no nodes in the list return undefined
  - Loop through the list until you reach the tail
  - Set th next property of the 2nd to last node to null
  - Set the tail to be the 2nd to last node
  - Decrement the length of the list by 1
  - Return the list

  ```javascript
       push(val) {
          const newNode = new Node(val);
          if (!this.head) {
              this.head = newNode;
              this.tail = this.head;
          } else {
              this.tail.next = newNode;
              this.tail = newNode;
          }
          this.length++;
          return this;
      }
      pop() {
          if (!this.head) {
              return undefined;
          }
          let curr = this.head;
          let prev = curr;
          while(curr.next) {
              prev = curr;
              curr = curr.next;
          }
          prev.next = null;
          this.tail = prev;  
          this.length--;
          if (this.length === 0) {
              this.head = null;
              this.tail = null;
          }
          return this;
      }
  ```

- **SHIFT** goes like this:

  - If there are no nodes in the list return undefined

  - Store the current head property in a variable

  - Set the head property to be the current head's next property

  - Decrement the length by 1

  - Return the value of the removed node

    

- **UNSHIFT** goes like this:

  - Create a new node using the value passed to the func
  - If there is no head property, set the head and tail to be the newly created node
  - Else, set the newly created node's next property to be the current head property on the list
  - Set the head property on the list to be the newly created node
  - Increment the length by 1
  - Return the list

  ```javascript
   		shift() {
          if (!this.head) {
              return undefined;
          }
          const headNode = this.head;
          this.head = headNode.next;
          this.length--;
          if (this.length === 0) {
              this.tail = null;
          }
          return headNode;
      }
      unshift(val) {
          const newNode = new Node(val);
          if (!this.head) {
              this.head = newNode;
              this.tail = this.head;
          } else {
              newNode.next = this.head;
              this.head = newNode;
          }
          this.length++;
          return this;
      }
  ```

- **GET** goes like this:

  - If the index passed to the func is less than zero or greater than the length, return null

  - Loop through the list until you reach the index and return the node at the specific index

    

- **SET** goes like this:

  - Use the get method to find the node
  - If found, update the value and return true
  - Else, return false

  ```javascript
      get(index) {
          if (index < 0 || index >= this.length) {
              return null;
          }
          let counter = 0;
          let currentNode = this.head;
          while (counter !== index) {
              currentNode = currentNode.next;
              counter++;
          }
          return currentNode;
      }
      set(index, value) {
          let foundNode = this.get(index);
          if (foundNode) {
              foundNode.value = value;
              return true;
          }
          return false;
      }
  ```

- **INSERT** goes like this:

  - If the index is less than zero, or greater than the length, return false
  - If the index is the same as the length, push a new node to the end of the list
  - If the index is 0, unshift a new node to the start of the list
  - Else, access the node at index - 1 with the get method
  - Set the next property on that node to be the new node
  - Set the next property of the new node to the old next
  - Increment the length
  - Return true

- **REMOVE** goes like this:

  - If the index is less than zero or greater than or equal to the length, return undefined
  - if the index is the same as the length - 1, pop
  - If the index is 0, shift
  - Else, access the node at index - 1 with the get method
  - Set the next property on that node to be the next of the next node
  - Decrement the length
  - Return the value of the node

  ```javascript
  		insert(index, value) {
          if (index < 0 || index > this.length) {
              return false;
          }
          if (index === 0) {
              return !!this.unshift(value);
          }        
          if (index === this.length) {
              return !!this.push(value);
          }
          const newNode = new Node(value);
          const prevNode = this.get(index - 1);
          newNode.next = prevNode.next;
          prevNode.next = newNode;
          this.length++;
          return true;
      }
      remove(index) {
          if (index < 0 || index >= this.length) {
              return undefined;
          }
          if (index === 0) {
              return this.shift();
          }
          if (index === this.length - 1) {
              return this.pop();
          }
          const prevNode = this.get(index - 1);
          const nodeRemoved = prevNode.next;
          prevNode.next = nodeRemoved.next;
          this.length--;
          return nodeRemoved.value;
      }
  ```

- **REVERSE** goes like this:

  - Swap the head and tail
  - Loop through the list
  - Set next to be the next property on the current node
  - Set the next property on the current node to prev
  - Set the prev node to the current node
  - Set the current node to the next node
  - Return the list once loop is done

  ```javascript
  		reverse() {
          let curr = this.head;
          this.head = this.tail;
          this.tail = curr;
          let prev = null;
          let next;
          for (let i = 0; i < this.length; i++) {
              next = curr.next;
              curr.next = prev;
              prev = curr;
              curr = next;
          }
          return this;
      }
  ```

  

#### Doubly Linked List

- Almost identical to Singly Linked List, except **every node has** **another** **pointer** that points **to the previous item**!

- This means it can perform certain operations more efficiently, however requires more memory due to the second pointer.

- Insertion - O(1)

- Removal - O(1) (Better than Singly Linked List which is O(n))

- Searching - O(n) .. technically O(n/2) but factors to O(n)

- Access - O(n)

- **PUSH** goes like this:

  - Create a new node with the value passed
  - If the head property is null, set the head and tail to be the newly created node
  - Else, set the next property on the tail to be that node
  - Set the previous property on the newly created nod to be the tail
  - Set the tail to be the newly created node
  - Increment th length, Return list

- **POP** goes like this:

  - If there is no head, return undefined
  - Store the current tail in a variable to return later
  - If length is 1, set both head & tail to null
  - Update the tail to be the prev node
  - Set the old tail prev to null
  - Set the prev node next to null
  - Decrement length & Return value removed

  ```javascript
      push(value) {
          const newNode = new Node(value);
          if (!this.head) {
              this.head = newNode;
              this.tail = this.head;
          } else {
              this.tail.next = newNode;
              newNode.prev = this.tail;
              this.tail = newNode;
          }
          this.length++;
          return this;
      }
      pop() {
          if (!this.head) {
              return null;
          }
          const oldTail = this.tail;
          if (this.lenght === 1) {
              this.head = null;
              this.tail = null;
          } else {
              this.tail = oldTail.prev;
              this.tail.next = null;
              oldTail.prev = null;
          }
          this.length--;
          return oldTail;
      }
  ```

- **SHIFT** goes like this:

  - If length is 0, returned undefined
  - Store current head in a variable
  - If length is 1, set head & tail to null
  - Update head to be the next of the old head
  - Set heads prev to null
  - set old heads next to null
  - Decrement and return old head

- **UNSHIFT** goes like this:

  - Create a new node with value passed
  - If list empty, set head & tail to new node
  - Else, set prev on head to be new node
  - Set next on new node to be head
  - Update head to be new node
  - Increment & Return list

  ```javascript
      shift() {
          if (!this.head) {
              return null;
          }
          const oldHead = this.head;
          if (this.length === 1) {
              this.head = null;
              this.tail = null;
          } else {
              this.head = oldHead.next;
              this.head.prev = null;
              oldHead.next = null;
          }
          this.length--;
          return oldHead;
      }
      unshift(value) {
          const newNode = new Node(value);
          if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
          } else {
              this.head.prev = newNode;
              newNode.next = this.head;
              this.head = newNode;
          }
          this.length++;
          return this;
      }
  ```

- **GET** goes like this:

  - If index is < 0 || >= list.length, return null
  - If index is <= list.length / 2
    - loop through the list starting form head toward middle
    - return the node once found
  - Start from the tail if index is >=

- **SET** goes like this:

  - Create a variable which is the result of the get method with the value passed
  - If get returns valid node, set the value of that node & Return true
  - Else, false

  ```javascript
      get(index) {
          if (index < 0 || index >= this.length) {
              return null;
          }
          let foundNode;
          const middle = Math.floor(this.length / 2);
          if (index <= middle) {
              foundNode = this.head;
              for(let i = 0; i < index; i++) {
                  foundNode = foundNode.next;
              }
          } else {
              foundNode = this.tail;
              for (let i = this.list.length - 1; i > index; i--) {
                  foundNode = foundNode.prev;
              }
          }
          return foundNode;
      }
      set(index, value) {
          const foundNode = this.get(index);
          if (foundNode) {
              foundNode.value = value;
              return true;
          }
          return false;
      }
  ```

- **INSERT** goes like this:

  - if index < -=0 || >= length return false
  - If index === 0, unshift
  - If index === list.length, push
  - Use get method to access index - 1
  - Set next and prev on correct nodes to link everything together
  - Increment length & Return true

- **REMOVE** goes like this:

  - If index < 0 || >= to length return undefined
  - if index === 0, shift
  - If index === length - 1, pop
  - Use the get method to retrieve item to be removed
  - Update next and prev appropriately (including on node to removed)
  - Decrement length & return node

  ```javascript
      insert(index, value) {
          if (index < 0 || index >= this.length) {
              return false;
          }
          if (index === 0) {
              return this.unshift(value);
          }
          if (index === this.length - 1) {
              return this.push(value);
          }
          const newNode = new Node(value);
          const prevNode = this.get(index - 1);
          newNode.prev = prevNode;
          newNode.next = prevNode.next;
          prevNode.next.prev = newNode;
          prevNode.next = newNode;
          this.length++;
          return true;
      }
      remove(index) {
          if (index < 0 || index >= this.length) {
              return undefined;
          }
          if (index === 0) {
              return this.shift();
          }
          if (index === this.length - 1) {
              return this.pop();
          }
          const removedNode = this.get(index);
          removedNode.prev.next = removedNode.next;
          removedNode.next.prev = removedNode.prev;
          removedNode.prev = null;
          removedNode.next = null;
          this.length--;
          return removedNode;
      }
  ```



#### Stack

- A **Last In First Out (LIFO)** data structure

- Last element added is the first element removed

- Used in managing function invocations (eg call stack), Undo / Redo, Routing (the history object in React), and elsewhere

- **Insertion & Removal: O(1)**

- Searching & Access: O(n)

- **PUSH** goes like this:

  - Create a new node with value passed
  - If the stack is empty, set the first and last property to the new node
  - If there is at least one node, create a variable that stores the current first property on the stack
  - Reset the first property to be the new node
  - Set the next property on the node to be the prev variable
  - Increment by 1 and Return size

- **POP** goes like this:

  - If stack empty, return null
  - Create a temporary variable to store the first property on the stack
  - If only 1 node, set first and last property to null
  - Else, set first property to be the next property on the current first
  - Decrement by 1, Return value of node removed

  ```javascript
      push(value) {
          const newNode = new Node(value);
          if (!this.first) {
              this.first = newNode;
              this.last = newNode;
          } else {
              const oldFirst = this.first;
              this.first = newNode;
              this.first.next = oldFirst;
          }
          return ++this.size;
      }
      pop() {
          if (!this.first) {
              return null;
          }
          const oldFirst = this.first;
          if (this.first === this.last) {
              this.last = null;
          }
          this.first = this.first.next;
          this.size--;
          return oldFirst.value;
      }
  ```



#### Queue

- A First In First Out (FIFO) data structure

- Used in background tasks, uploading resources, printing / task processing, and elsewhere

- **Insertion and Removal: O(1)**

- Searching and Access: O(n)

- **ENQUEUE** goes like this

  - Create a new node with value passed
  - If queue empty, set this node to be first and last property of queue
  - Else, set next on the current last to be the new node, then set last of queue to be new node
  - Increment size & Return size

- **DEQUEUE** goes like this

  - If queue empty, return null
  - Store first property in a variable
  - If only 1 node, set first and last to null
  - Else, set first property to be the next property of first
  - Decrement size by 1 and Return value of node dequeued

  ```javascript
      enqueue(value) {
          const newNode = new Node(value);
          if (!this.first) {
              this.first = newNode;
              this.last = this.first;
          } else {
              this.last.next = newNode;
              this.last = newNode;
          }
          return ++this.size;
      }
      dequeue() {
          if (!this.first) {
              return null;
          }
          const oldFirst = this.first;
          if (this.first === this.last) {
              this.last = null;
          }
          this.first = this.first.next;
          this.size--;
          return oldFirst;
      }
  ```



#### Tree (General)

- A data structure that consists of **nodes in a parent / child relationship**
- Every node must move away from on a single root node
- **Root** - the top node of a tree
- **Child** - a node directly connected to another node when moving away from the root
- **Parent** - the converse notion of a child
- **Siblings** - a group of nodes with the same parent
- **Leaf** - a node with no children
- Real world use cases?
  - Document Object Model (DOM)
  - JSON
  - Network Routing
  - Abstract Syntax Trees
  - AI
  - Computer File Systems

#### Binary (Search) Tree

- A Binary Tree is a tree in which **each parent** node can have **at most 2 children**

- Binary Search Tree (BST) is a Binary Tree with an extra, special property that makes it efficient at searching:

  - Given any node on the tree, every child node with a value less than the parent node is located to the left, while every child node with a value greater than the parent node is located to the right

- **Insertion & Search: O(logn)**

  - However, this is not guaranteed, as we could have a very one sided BST (basically a Linked List), which would result in O(n)

- **INSERT** goes like this (note: can be done iteratively or recursively)

  - Create new node
  - Starting at the root:
    - Check if tree is empty, if not - root is new node
    - Else, check if value of new node is greater or less than value of root
    - If greater, check to see if there is a node to the right
      - If there is, move to that node and repeat
      - If not, add the node as the right prop
    - less,  do the same for the node to the left
  - Return tree

- **FIND** goes like this (note: can be done iteratively or recursively)

  - If tree empty, return false
  - Else, check if value of current node is value passed
  - If found, we're done! Return the node.
  - Else, check if greater or less than current node value
  - If greater, check to see if there is a node to the right
    - If there is, move to that node and repeat
    - Else, not in tree, return false
  - If less, do the same for the left side

  ```javascript
      insert(value) {
          const newNode = new Node(value);
          if (!this.root) {
              this.root = newNode;
          } else {
              let currentNode = this.root;
              while (true) {
                  if (value === currentNode.value) {
                      return undefined;
                  }
                  if (value < currentNode.value) {
                      if (!currentNode.left) {
                          currentNode.left = newNode;
                          break;
                      }
                      currentNode = currentNode.left;
                  }
                  if (value > currentNode.value) {
                      if (!currentNode.right) {
                          currentNode.right = newNode;
                          break;
                      }
                      currentNode = currentNode.right;
                  }
              }
          }
          return this;
      }
      find(value) {
          if (!this.root) {
              return undefined;
          }
          let currentNode = this.root;
          while (true) {
              if (value === currentNode.value) {
                  return currentNode;
              }
              if (value < currentNode.value) {
                  if (!currentNode.left) {
                      return undefined;
                  }
                  currentNode = currentNode.left;
              }
              if (value > currentNode.value) {
                  if (!currentNode.right) {
                      return undefined;
                  }
                  currentNode = currentNode.right;
              }
          }
      }
  ```

  

#### Tree Traversal

- How do we efficiently traverse a tree?
- Two main approaches:
  - **Breadth-First Search (BFS) --> horizontal**
  - **Depth-First Search (DFS)  --> vertical**

##### Breadth-First Search (BFS)

- Visits nodes 'going across' or horizontally.

- Typically implemented with the help of a Queue:

  - Create a variable to store the values of nodes visited
  - Place the root node in the queue
  - Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - Do the same for the right prop
  - Return the variable with the stored values

  ```javascript
      BFS() {
          let data = [];
          let queue = [];
          let currentNode = this.root;
          queue.push(currentNode);
          while(queue.length) {
              currentNode = queue.shift();
              data.push(currentNode);
              if (currentNode.left) {
                  queue.push(currentNode.left);
              }
              if (currentNode.right) {
                  queue.push(currentNode.right);
              }
          }
          return data;
      }
  ```



##### Depth-First Search (DFS)

- Works vertically down the nodes.

- Useful space complexity wise when dealing with trees that are much wider than they are deep, ie each parent tends to have both children.

- **PreOrder** involves visiting the root node first, then looking at the left and right. It goes like:

  - Create a variable to store values of nodes visited
  - Store root of BST in a current var
  - Write a helper function that accepts a node, then..
    - Push value of node to the var that stores the values
    - If the node has a left prop, call the helper func with the left prop
    - Do the same for the right
  - Invoke the helper func with the current var
  - Return the array of values

- **PostOrder** involves visiting both the left and right children first, and then the root node last. The algorithm is similar, except the helper function changes slightly in its sequence of steps:

  - If node has left prop, call the helper on the left prop
  - Do the same for the right
  - Push the value of the node to the variable that stores the values 

- **InOrder** involves visiting the entire left side of each root node, then visiting the root node, and then visiting the entire right side. Again, the algorithm is similar, aside from a change in sequence of steps in the helper:

  - If the node has a left prop, call the helper on the left
  - Push the value of the node to the variable that stores the values
  - If the node has a right prop, call the helper on it

  ```javascript
      DFSPreOrder() {
          let data = [];
          let currentNode = this.root;
          function traverse(node) {
              data.push(node);
              if (node.left) {
                  traverse(node.left);
              }
              if (node.right) {
                  traverse(node.right);
              }
              return data;           
          }   
          return traverse(currentNode);
      }
      DFSPostOrder() {
          let data = [];
          let currentNode = this.root;
          function traverse(node) {
              if (node.left) {
                  traverse(node.left);
              }
              if (node.right) {
                  traverse(node.right);
              }
              data.push(node);
              return data;
          }
          return traverse(currentNode);
      }
      DFSInOrder() {
          let data = [];
          let currentNode = this.root;
          function traverse(node) {
              if (node.left) {
                  traverse(node.left);
              }
              data.push(node);
              if (node.right) {
                  traverse(node.right);
              }
              return data;
          }
          return traverse(currentNode);
      }
  ```



#### Binary Heap

- A special kind of Tree, similar to a BST but with some different rules

- **Max Binary Heap**

  - **Parent nodes always larger than children**
  - **No guarantees / implied ordering between sibling nodes** however
  - As compact as possible. All the children of each node are as full as can be and **left children filled out first**

- **Min Binary Heap** - the same but parent nodes are always smaller than children

- Used to implement Priority Queues and with graph traversal algorithms

- **Insertion and Removal - O(logn)**

- Search - O(n)

- An **easy way to represent a binary heap** is simply using a **List / Array.**

  - For any parent node at index n, its left child is at 2n + 1, and its right child at 2n + 2
  - For any child node at index n, its parent is at Math.floor((n - 1) / 2)

- **Insertion** is performed by adding the new item to the end of the array and then allowing it to *bubble up* if necessary, ie compare it with its parent nodes and swap them if it is larger (for MaxBinaryHeap).

  ```javascript
      insert(value) {
          this.values.push(value);
          let index = this.values.length - 1;
          const newNode = this.values[index];
          while (index > 0) {
              const parentIndex = Math.floor((index - 1) / 2);
              const parentNode = this.values[parentIndex];
              if (parentNode >= value) {
                  break;
              }
              this.values[parentIndex] = newNode;
              this.values[index] = parentNode;
              index = parentIndex;
          }
          return this;
      }
  ```

  

- **Removal** / **Extraction** is performed by removing the first element / root, placing the last element in its place, and then *bubbling down* / adjusting / sinking the element down to its correct place. 

  ```javascript
      extractMax() {
          const extractedMax = this.values[0];
          const lastNode = this.values.pop();
          if (this.values.length === 0) {
              return extractedMax;
          }
          this.values[0] = lastNode;
          let index = 0;
          while(true) {
              const leftChildIndex = 2 * index + 1;
              const rightChildIndex = 2 * index + 2;
              let leftChild, rightChild;
              let swapIndex = null;
              if (leftChildIndex < this.values.length) {
                  leftChild = this.values[leftChildIndex];
                  if (leftChild > lastNode) {
                      swapIndex = leftChildIndex;
                  }
              }
              if (rightChildIndex < this.values.length) {
                  rightChild = this.values[rightChildIndex];
                  if (
                      (swapIndex === null && rightChild > lastNode) 
                   || (swapIndex !== null && rightChild > leftChild)
                   ) {
                      swapIndex = rightChildIndex;
                  }
              }   
              if (swapIndex === null) {
                  break;
              }
              this.values[index] = this.values[swapIndex];
              this.values[swapIndex] = lastNode;
              index = swapIndex;
          }
          return extractedMax;
      }
  ```



#### Priority Queue

- A data structure where each element has a priority

- Elements with higher priorities are served before elements with lower priorities

- Can be implemented efficiently via a Binary Heap

- An example Priority Queue could thus look like:

  - Build a Min Binary Heap, ie lower numbers have higher priorities
  - Each node has a val and a property. Use the property to build the heap
  - Enqueue method: given a value and priority, make a new node & sort it based off its priority
  - Dequeue method: remove root element, rearrange heap using priority, return removed root element.

  ```javascript
      enqueue(value, priority) {
          const newNode = new Node(value, priority);
          this.values.push(newNode);
          let index = this.values.length - 1;
          while (index > 0) {
              const parentIndex = Math.floor((index - 1) / 2);
              const parentNode = this.values[parentIndex];
              if (parentNode.priority <= newNode.priority) {
                  break;
              }
              this.values[parentIndex] = newNode;
              this.values[index] = parentNode;
              index = parentIndex;
          }
          return this;
      }
      dequeue() {
          const minPriority = this.values[0];
          const lastNode = this.values.pop();
          if (this.values.length === 0) {
              return minPriority;
          }
          this.values[0] = lastNode;
          let index = 0;
          while(true) {
              const leftChildIndex = 2 * index + 1;
              const rightChildIndex = 2 * index + 2;
              let leftChild, rightChild;
              let swapIndex = null;
              if (leftChildIndex < this.values.length) {
                  leftChild = this.values[leftChildIndex];
                  if (leftChild.priority < lastNode.priority) {
                      swapIndex = leftChildIndex;
                  }
              }
              if (rightChildIndex < this.values.length) {
                  rightChild = this.values[rightChildIndex];
                  if ((swapIndex === null 
                       && rightChild.priority < lastNode.priority) 
                   || (swapIndex !== null 
                       && rightChild.priority < leftChild.priority)) {
                      swapIndex = rightChildIndex;
                  }
              }   
              if (swapIndex === null) {
                  break;
              }
              this.values[index] = this.values[swapIndex];
              this.values[swapIndex] = lastNode;
  
              index = swapIndex;
          }
          return minPriority;
      }
  ```



#### Hash Table

- Used to store **key-value pairs**
- Keys are **not ordered**
- Hash tables are typically fast at finding, adding, and removing!
- To implement a hash table, we'll use an array.
- However, using an array means we also **need a way to convert keys into valid array indices** (in order to look up values by their key)
- A function that performs this task is **called  a hash function**
- What makes a **good hash function** (note this doesn't mean a cryptographically secure one!):
  - It needs to be **fast** (ie constant time)
  - Doesn't cluster outputs as specific indices, but **distributes uniformly**
  - **Deterministic** (same input always yields same output)
- **Prime numbers** are helpful in **spreading** out the **keys more uniformly**
- It's also helpful if the array that you're putting values into has a prime length
- Even with a large array and great hash function, **collisions are inevitable.** 
- So how do we deal with them effectively?
  - **Separate Chaining** - we choose to store multiple key-value pairs at the same index, by using a more sophisticated data structure, eg an array of arrays).	
  - **Linear Probing** - when we encounter a collision, we search through the array to find the next empty slot, thus allowing us to store a single key-value at each index.
- Average case Big O is:
  - **Insertion: O(1)**
  - **Deletion: O(1)**
  - **Access: O(1)**
  - However, this depends significantly on your hash function and the way you handle collisions.
- Typically it's best to use a language's built in hash table! (Though a very crude implementation can be found in the corresponding section folder).

#### Graph

- A **collection of nodes and connections** between those nodes.
- Many, many applications, eg social networks, location / mapping, routing, visual hierarchy, file system optimizations, recommendation engines, etc
- **Vertex - a node**
- **Edge - connection between two nodes**
- **Undirected** graph - each edge is **bidirectional** / can traverse both ways (think FB friends - the relationship goes both ways)
- **Directed** graph - edges can be in **one or both directions**, typically indicated with arrows (think a twitter user following a user that doesn't follow them back).
- **Unweighted** graph - edges aren't assigned any value / information.
- **Weighted** graph - edges also contain values / information / weight
- How do we **store a Graph?** Two standard approaches: 
  - **Adjacency Matrix** - a table that stores Values / Booleans indicating whether an edge exists between two vertices
    - Typically takes up more space when dealing with sparse graphs (ie graphs whose vertices tend to not have many edges)
    - Slower to iterate over all  edges
    - Faster to lookup specific edge
  - **Adjacency List** - either a hash table or an array of arrays that maps each vertex to its edges.
    - Can take up less space in sparse graphs
    - Faster to iterate over all edges
    - Can be slower to lookup specific edge
- Most data in the real world tends to lend itself to sparser and / or larger graphs. See the corresponding section folder for a basic implementation of an undirected graph via an adjacency list.

##### Graph Traversal

- **Visiting, updating, and checking** each **vertex** in a graph.

- A **very common** problem! Used in peer to peer networks, web crawlers, recommendation engines, shortest path problems eg gps navigation, solving mazes, AI (shortest path to winning a game), etc.

- Similar to Trees, we have **both BFS & DFS traversal**

  - **DFS** - explore **as far as possible down one branch** before *backtracking*. In other words, explore the neighbors of each node as far down as possible before going back up
    - A **recursive** solution could begin with a function accepting a vertex, then
      - if vertex is empty, return (this is the base case)
      - Else, add vertex to results list
      - Mark vertex as visited (eg by using an object)
      - Loop through each neighbor in vertex's neighbors and
      - If neighbor is not visited, recursively call function on neighbor
    - An **iterative** solution could begin with a function accepting a vertex, then
      - Create a **stack** to help keep track of vertices (eg an array)
      - Create a list to store the end result
      - Create an object to store visited vertices
      - While the stack is not empty...
      - Pop the next vertex from the stack
      - If that vertex hasn't been visited yet, mark as visited and add to result list
      - Else, push all of its neighbors to the stack

  ```javascript
      DFSRecursive(vertex) {
          let resultList = [];
          const visitedVertices = {};
          const traverse = vertex => {
              if (!vertex) {
                  return null;
              }
              visitedVertices[vertex] = true;
              resultList.push(vertex);
  
              this.adjacencyList[vertex].forEach(neighbor => {
                  if (!visitedVertices.hasOwnProperty(neighbor) ||
                      visitedVertices[neighbor] === false) {
                      return traverse(neighbor);
                  } 
              });
          };
          traverse(vertex);
          return resultList;
      }
      DFSIterative(vertex) {
          let vertexStack = [];
          let resultList = [];
          const visitedVertices = {};
          vertexStack.push(vertex);
          visitedVertices[vertex] = true;
          let nextVertex;
          while (vertexStack.length) {
              nextVertex = vertexStack.pop();
              resultList.push(nextVertex);
              this.adjacencyList[nextVertex].forEach(neighbor => {
                  if (!visitedVertices.hasOwnProperty(neighbor) || 
                      visitedVertices[neighbor] === false) {
                      visitedVertices[neighbor] = true; 
                      vertexStack.push(neighbor);
                  }
              });
          }
          return resultList;
      }
  ```

  - **BFS** - visit neighbors and then backtrack. It's helpful to utilize a **queue** type data structure.
    - Accepting a starting vertex...
    - Create a queue (eg an array) & add starting vertex
    - Create result list 
    - Create an object to store visited vertices
    - Mark starting vertex as visited
    - Loop as long as queue is not empty and...
    - Remove the first vertex from the queue 
    - Push it into the result array
    - Loop over each neighbor in the adjacency list for the vertex your visiting
    - If not visited, mark it as visited and enqueue it
    - Once done looping, return result array

  ```javascript
      BFS(vertex) {
          const vertexQueue = [];
          const resultList = [];
          const visitedVertices = {};
          vertexQueue.unshift(vertex);
          visitedVertices[vertex] = true;
          let nextVertex;
          while(vertexQueue.length) {
              nextVertex = vertexQueue.shift();
              resultList.push(nextVertex);
              this.adjacencyList[nextVertex].forEach(neighbor => {
                  if (!visitedVertices.hasOwnProperty(neighbor) ||
                      visitedVertices[neighbor] === false) {
                      visitedVertices[neighbor] = true;
                      vertexQueue.push(neighbor);
                  }
              })
          }
          return resultList;
      }
  ```



### Dijkstra's Algorithm

- Finds the **shortest path between two vertices** on a path
- Many, many applications, eg gps, network routing, biology, airline tickets, etc.
- Time Complexity (with binary heap): O( (|Edges| + |Vertices|) * log(|Vertices|))
- Space Complexity: O(|Vertices|)
- The approach can be summarized as follows
  - Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
  - Once we've moved to the node we're going to visit, we look at each of its neighbors
  - For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking *from the starting node*
  - If the new total distance to a node is less than the previous total, we store the new shorter distance for that node
  - Can be helpful to use a Priority Queue / Binary Heap!

```javascript
		dijkstra(start, finish) {
        const vertices = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                vertices.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                vertices.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        let smallest;
        while (vertices.values.length) {
            smallest = vertices.dequeue().value;
            if (smallest === finish) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    const nextVertex = 
                          this.adjacencyList[smallest][neighbor];
                    const candidate = 
                          distances[smallest] + nextVertex.weight;
                    const nextNeighbor = nextVertex.vertex;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        vertices.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
```



### Dynamic Programming

- A method for solving a small subset of problems, that includes **breaking the problem down into** smaller pieces (**subproblems**), solving each of them, and then **storing their solutions** to avoid recalculations.
- When can we use it? When our problem contains both:
  - **Optimal Substructure** - A problem has optimal substructure when an **overall** **optimal solution can be constructed from optimal solutions of its subproblems**
  - Eg. The Shortest Path Problem. Each shortest path to an end node, also must be the shortest path to the preceding node on the the path
  - **Overlapping Subproblems** - A problem has overlapping subproblems when it can be broken down into subproblems **which are reused several times**
  - Eg. The Fibonacci Sequence Problem - we must repeat calculations (overlapping subproblems) to find a certain value in the sequence
- But how do we store the solutions to our subproblems?
  - **Memoization** - **storing the result of expensive function calls** and **returning the cached result** when the **same inputs occur** again.
- Another way of storing our solutions is working from the bottom-up instead of top-down.
  - **Tabulation** - **storing the result of a previous result in a table** (usually an array)
  - Usually done using iteration
  - Better space complexity can be achieved

```javascript
// A function that calculates Fibonacci value using dynamic programming memoization (recursive)
function fibMemo(n, memo = [0, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// A function that calculates Fibonacci value using dynamic programming taabulation (iterative)
function fibTab(n) {
  const tab = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
  	  tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[n]
}

// Note that the Space Complexity of the above solution can be reduced by simply using two variables for the tabulation.
function fibTabBetter(n) {
  let tabA = 1;
  let tabB = 1;
  for (let i = 3; i <= n; i++) {
    const newResult = tabA + tabB;
    tabA = tabB;
    tabB = newResult;
  }
  return tabB;
}
```

