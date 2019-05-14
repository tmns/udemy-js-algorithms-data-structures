var priorityQueue = {
  values: [],

  enqueue(value, priority) {
    var newNode = node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentNode = this.values[parentIndex];
      if (parentNode.priority <= newNode.priority) {
        break;
      }
      this.values[parentIndex] = newNode;
      this.values[index] = parentNode;
      index = parentIndex;
    }
    return this;
  },

  dequeue() {
    // pull out both the min priority and the last node
    var minPriority = this.values[0];
    var lastNode = this.values.pop();

    // check if our heap is now empty
    if (this.values.length == 0) {
      return minPriority;
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
        if (leftChild.priority < lastNode.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex == null && rightChild.priority < lastNode.priority) ||
          (swapIndex != null && rightChild.priority < leftChild.priority)
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

    return minPriority;
  },

  getState() {
    return {
      values: this.values
    };
  }
};

function node(value, priority) {
  return {
    value,
    priority
  };
}

// priorityQueue.enqueue('high fever', 5);
// console.log(priorityQueue.getState());
// priorityQueue.enqueue('gunshot wound', 2);
// console.log(priorityQueue.getState());
// priorityQueue.enqueue('stubbed toe', 10);
// console.log(priorityQueue.getState());
// priorityQueue.enqueue('severed head', 1);
// console.log(priorityQueue.getState());

// priorityQueue.dequeue();
// priorityQueue.dequeue();
// console.log(priorityQueue.getState());
// =>
// PriorityQueue {
//     values:
//      [ Node { value: 'high fever', priority: 5 },
//        Node { value: 'stubbed toe', priority: 10 } ] }

module.exports = priorityQueue;
