var singlyLinkedList = {
  length: 0,
  head: null,
  tail: null,

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

    var newNode = node(value);
    var prevNode = this.get(index - 1);
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

    var prevNode = this.get(index - 1);
    var nodeRemoved = prevNode.next;
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
  }
};

function node(value) {
  return {
    value,
    next: null
  };
}

var list = Object.create(singlyLinkedList);

list.push(10);
list.push(5);
list.push(13);
list.push(900);
list.push(33);

console.log(list);

list.pop();
console.log(list);

console.log(list.shift());
console.log(list);

list.unshift(25);
console.log(list);

console.log(list.get(3));

list.set(0, 1);
console.log(list);

list.insert(1, 22);
console.log(list);

list.remove(1);
console.log(list);

list.reverse();
console.log(list);
