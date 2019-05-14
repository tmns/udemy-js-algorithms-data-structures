var doublyLinkedList = {
  head: null,
  tail: null,
  length: 0,

  push(value) {
    var newNode = node(value);

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
  },

  pop() {
    if (!this.head) {
      return null;
    }

    var oldTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  },

  shift() {
    if (!this.head) {
      return null;
    }

    var oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  },

  unshift(value) {
    var newNode = node(value);

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
  },

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var foundNode;
    let middle = Math.floor(this.length / 2);

    if (index <= middle) {
      foundNode = this.head;
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next;
      }
    } else {
      foundNode = this.tail;
      for (let i = this.doublyLinkedList.length - 1; i > index; i--) {
        foundNode = foundNode.prev;
      }
    }
    return foundNode;
  },

  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  },

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index == 0) {
      return this.unshift(value);
    }
    if (index == this.length - 1) {
      return this.push(value);
    }

    let newNode = node(value);
    let prevNode = this.get(index - 1);

    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;

    this.length++;
    return true;
  },

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  },

  getState() {
    return {
      head: this.head,
      tail: this.tail,
      length: this.length
    };
  }
};

function node(value) {
  return {
    value,
    next: null,
    prev: null
  };
}

doublyLinkedList.push(100);
doublyLinkedList.push(82);
doublyLinkedList.push(103);
doublyLinkedList.push(5);
console.log(doublyLinkedList.getState());

doublyLinkedList.pop();
console.log(doublyLinkedList.getState());

doublyLinkedList.shift();
console.log(doublyLinkedList.getState());

doublyLinkedList.unshift(2);
doublyLinkedList.unshift(1);
console.log(doublyLinkedList.getState());

console.log(doublyLinkedList.get(2));

doublyLinkedList.set(0, 5000);
console.log(doublyLinkedList.getState());

doublyLinkedList.insert(1, 300);
console.log(doublyLinkedList.getState());

doublyLinkedList.remove(1);
console.log(doublyLinkedList.getState());
