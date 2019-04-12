class Node {
    constructur(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

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
}