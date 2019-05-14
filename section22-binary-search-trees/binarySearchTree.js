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

binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.insert(44);
binarySearchTree.insert(33);
binarySearchTree.insert(1);

console.log(binarySearchTree);

console.log(binarySearchTree.find(44));
console.log(binarySearchTree.find(12));