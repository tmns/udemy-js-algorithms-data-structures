var maxBinaryHeap = {
  values: [],

  insert(value) {
    this.values.push(value);

    var index = this.values.length - 1;
    var newNode = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentIndex];
      if (parentNode >= value) {
        break;
      }
      this.values[parentIndex] = newNode;
      this.values[index] = parentNode;
      index = parentIndex;
    }
    return this;
  },

  extractMax() {
    // pull out both the max and the last node
    var extractedMax = this.values[0];
    var lastNode = this.values.pop();

    // check if our heap is now empty
    if (this.values.length == 0) {
      return extractedMax;
    }

    // move the last node to the top
    this.values[0] = lastNode;

    // initialize index & begin bubble down loop
    let index = 0;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
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
          (swapIndex == null && rightChild > lastNode) ||
          (swapIndex != null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex == null) {
        break;
      }

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = lastNode;

      index = swapIndex;
    }

    return extractedMax;
  }
};

maxBinaryHeap.insert(19);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(20);
maxBinaryHeap.insert(16);
maxBinaryHeap.insert(44);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(102);

console.log(maxBinaryHeap.values);

maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values);
