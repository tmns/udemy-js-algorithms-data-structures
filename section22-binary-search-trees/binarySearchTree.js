var binarySearchTree = {
  root: null,

  insert(value) {
    var newNode = node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value == currentNode.value) {
          return undefined;
        }
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        }
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  },

  find(value) {
    if (!this.root) {
      return undefined;
    }

    var currentNode = this.root;
    while (true) {
      if (value == currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          return undefined;
        }
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        if (!currentNode.right) {
          return undefined;
        }
        currentNode = currentNode.right;
      }
    }
  }
};

function node(value) {
  return {
    value,
    left: null,
    right: null
  };
}

var bst = Object.create(binarySearchTree);

bst.insert(10);
bst.insert(1);
bst.insert(44);
bst.insert(33);
bst.insert(1);

console.log(bst);

console.log(bst.find(44));
console.log(bst.find(12));