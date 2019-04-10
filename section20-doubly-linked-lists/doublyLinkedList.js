class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

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
}

list = new DoublyLinkedList();

list.push(100);
list.push(82);
list.push(103);
list.push(5);
console.log(list)

list.pop();
console.log(list)

list.shift();
console.log(list);

list.unshift(2);
list.unshift(1);
console.log(list);

console.log(list.get(2))

list.set(0, 5000);
console.log(list);

list.insert(1, 300);
console.log(list);

list.remove(1);
console.log(list);