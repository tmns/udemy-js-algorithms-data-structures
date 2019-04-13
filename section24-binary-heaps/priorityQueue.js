class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

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
        // pull out both the min priority and the last node
        const minPriority = this.values[0];
        const lastNode = this.values.pop();
        
        // check if our heap is now empty
        if (this.values.length === 0) {
            return minPriority;
        }

        // move the last node to the top
        this.values[0] = lastNode;

        // initialize index & begin bubble down loop
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
                if ((swapIndex === null && rightChild.priority < lastNode.priority) 
                 || (swapIndex !== null && rightChild.priority < leftChild.priority)) {
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
}

ER = new PriorityQueue();

ER.enqueue('high fever', 5);
console.log(ER);
ER.enqueue('gunshot wound', 2);
console.log(ER);
ER.enqueue('stubbed toe', 10);
console.log(ER);
ER.enqueue('severed head', 1);
console.log(ER);

ER.dequeue();
ER.dequeue();
console.log(ER);
// =>
// PriorityQueue {
//     values:
//      [ Node { value: 'high fever', priority: 5 },
//        Node { value: 'stubbed toe', priority: 10 } ] }