var stack = {
  first: null,
  last: null,
  size: 0,

  push(value) {
    var newNode = node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    return ++this.size;
  },

  pop() {
    if (!this.first) {
      return null;
    }

    var oldFirst = this.first;

    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return oldFirst.value;
  }
};

function node(value) {
  return {
    value,
    next: null
  };
}

myStack = Object.create(stack);

myStack.push(5);
myStack.push(2);
myStack.push(8);
myStack.push(11);

console.log(myStack);

myStack.pop();
console.log(myStack);
