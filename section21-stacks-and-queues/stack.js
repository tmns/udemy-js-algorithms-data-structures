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
  },

  getState() {
    return {
      first: this.first,
      last: this.last,
      size: this.size
    }
  }
};

function node(value) {
  return {
    value,
    next: null
  };
}

stack.push(5);
stack.push(2);
stack.push(8);
stack.push(11);

console.log(stack.getState());

stack.pop();
console.log(stack.getState());
