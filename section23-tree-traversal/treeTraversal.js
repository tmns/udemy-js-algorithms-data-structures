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
  },

  BFS() {
    var data = [],
        queue = [],
        currentNode = this.root;

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return data;
  },

  DFSPreOrder() {
    var data = [],
        currentNode = this.root;

    function traverse(node) {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      return data;
    }

    return traverse(currentNode);
  },

  DFSPostOrder() {
    var data = [],
        currentNode = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node);
      return data;
    }

    return traverse(currentNode);
  },

  DFSInOrder() {
    var data = [],
        currentNode = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
      return data;
    }

    return traverse(currentNode);
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
binarySearchTree.insert(11);
binarySearchTree.insert(6);
binarySearchTree.insert(9);
binarySearchTree.insert(1);
binarySearchTree.insert(3);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(92);
binarySearchTree.insert(15);
binarySearchTree.insert(103);
binarySearchTree.insert(0);
binarySearchTree.insert(7);

/**
 *              10
 *          6       11
 *      1      9        13
 *    0   3  7       12     92
 *                       15    103
 *
 */

console.log(binarySearchTree.root);

console.log(binarySearchTree.find(44)); // undefined
console.log(binarySearchTree.find(12)); // { value: 12, left: null, right: null }

console.log("---------BFS TEST-------------");
console.log(binarySearchTree.BFS());
console.log("-----------DFS-PreOrder-TEST-------------");
console.log(binarySearchTree.DFSPreOrder());
console.log("-----------DFS-PostOrder-TEST-------------");
console.log(binarySearchTree.DFSPostOrder());
console.log("-----------DFS-InOrder-TEST-------------");
console.log(binarySearchTree.DFSInOrder());
