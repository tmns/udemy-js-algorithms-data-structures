class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

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

    extractMax() {
        // pull out both the max and the last node
        const extractedMax = this.values[0];
        const lastNode = this.values.pop();
        
        // check if our heap is now empty
        if (this.values.length === 0) {
            return extractedMax;
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
                if (leftChild > lastNode) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];
                if ((swapIndex === null && rightChild > lastNode) || (swapIndex !== null && rightChild > leftChild)) {
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
}

heap = new MaxBinaryHeap();

heap.insert(19);
heap.insert(33);
heap.insert(12);
heap.insert(2);
heap.insert(20);
heap.insert(16);
heap.insert(44);
heap.insert(27);
heap.insert(102);

console.log(heap);

heap.extractMax();
heap.extractMax();
console.log(heap);