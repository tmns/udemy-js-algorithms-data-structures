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

        while(queue.length) {
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

var bst = Object.create(binarySearchTree);

bst.insert(10);
bst.insert(11);
bst.insert(6);
bst.insert(9);
bst.insert(1);
bst.insert(3);
bst.insert(13);
bst.insert(12);
bst.insert(92);
bst.insert(15);
bst.insert(103);
bst.insert(0);
bst.insert(7);

/**
 *              10
 *          6       11
 *      1      9        13
 *    0   3  7       12     92
 *                       15    103
 *                               
 */         

console.log (bst);

console.log(bst.find(44)); // undefined
console.log(bst.find(12)); // { value: 12, left: null, right: null }

console.log('---------BFS TEST-------------')
console.log(bst.BFS());
console.log('-----------DFS-PreOrder-TEST-------------')
console.log(bst.DFSPreOrder());
console.log('-----------DFS-PostOrder-TEST-------------')
console.log(bst.DFSPostOrder());
console.log('-----------DFS-InOrder-TEST-------------')
console.log(bst.DFSInOrder());