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
  }
};

function node(value) {
  return {
    value,
    next: null
  };
}

var myQueue = Object.create(queue);

myQueue.enqueue(5);
myQueue.enqueue(2);
myQueue.enqueue(8);
myQueue.enqueue(1);

console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
