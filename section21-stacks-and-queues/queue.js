var queue = {
  first: null,
  last: null,
  size: 0,

  enqueue(value) {
    var newNode = node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  },

  dequeue() {
    if (!this.first) {
      return null;
    }

    var oldFirst = this.first;

    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return oldFirst;
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

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(8);
queue.enqueue(1);

console.log(queue.getState());

queue.dequeue();
console.log(queue.getState());
