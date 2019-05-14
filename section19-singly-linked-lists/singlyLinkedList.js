var singlyLinkedList = {
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
      this.tail = newNode;
    }

    this.length++;
    return this;
  },

  pop() {
    if (!this.head) {
      return undefined;
    }

    // create our current and previous nodes for traversing.
    // initially they are set to the same (head) node.
    var curr = this.head;
    var prev = curr;

    // while the next prop of our curr is not null, traverse our list
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    // perform the pop
    prev.next = null;
    this.tail = prev;

    // decrement length and check if head needs to be reset to null
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  },

  shift() {
    if (!this.head) {
      return undefined;
    }

    var headNode = this.head;
    this.head = headNode.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return headNode;
  },

  unshift(value) {
    var newNode = node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
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

    var counter = 0;
    var currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
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
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      return !!this.unshift(value); // double bang here simply coerces result to bool
    }

    if (index == this.length) {
      return !!this.push(value);
    }

    let newNode = node(value);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
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

    let prevNode = this.get(index - 1);
    let nodeRemoved = prevNode.next;
    prevNode.next = nodeRemoved.next;
    this.length--;
    return nodeRemoved.value;
  },

  reverse() {
    // swap head and tail
    var curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    var prev = null;
    var next;
    var i = 0;

    // loop through and perform the link swapping
    for (i; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
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
    next: null
  };
}

singlyLinkedList.push(10);
singlyLinkedList.push(5);
singlyLinkedList.push(13);
singlyLinkedList.push(900);
singlyLinkedList.push(33);

console.log(singlyLinkedList.getState());

singlyLinkedList.pop();
console.log(singlyLinkedList.getState());

console.log(singlyLinkedList.shift());
console.log(singlyLinkedList.getState());

singlyLinkedList.unshift(25);
console.log(singlyLinkedList.getState());

console.log(singlyLinkedList.get(3));

singlyLinkedList.set(0, 1);
console.log(singlyLinkedList.getState());

singlyLinkedList.insert(1, 22);
console.log(singlyLinkedList.getState());

singlyLinkedList.remove(1);
console.log(singlyLinkedList.getState());

singlyLinkedList.reverse();
console.log(singlyLinkedList.getState());
