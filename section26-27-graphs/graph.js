// Exercise in implementing an undirected Graph via an Adjacency List

var graph = {
  adjacencyList: [],

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  },

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  },

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  },

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  },

  DFSRecursive(vertex) {
    var resultList = [],
        visitedVertices = {};

    const traverse = vertex => {
      if (!vertex) {
        return null;
      }

      visitedVertices[vertex] = true;
      resultList.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (
          !visitedVertices.hasOwnProperty(neighbor) ||
          visitedVertices[neighbor] == false
        ) {
          return traverse(neighbor);
        }
      });
    };

    traverse(vertex);
    return resultList;
  },

  DFSIterative(vertex) {
    var vertexStack = [],
        resultList = [],
        visitedVertices = {};

    vertexStack.push(vertex);
    visitedVertices[vertex] = true;

    let nextVertex;
    while (vertexStack.length) {
      nextVertex = vertexStack.pop();
      resultList.push(nextVertex);

      this.adjacencyList[nextVertex].forEach(neighbor => {
        if (
          !visitedVertices.hasOwnProperty(neighbor) ||
          visitedVertices[neighbor] == false
        ) {
          visitedVertices[neighbor] = true;
          vertexStack.push(neighbor);
        }
      });
    }

    return resultList;
  },

  BFS(vertex) {
    var vertexQueue = [],
        resultList = [],
        visitedVertices = {};

    vertexQueue.unshift(vertex);
    visitedVertices[vertex] = true;

    let nextVertex;
    while (vertexQueue.length) {
      nextVertex = vertexQueue.shift();
      resultList.push(nextVertex);

      this.adjacencyList[nextVertex].forEach(neighbor => {
        if (
          !visitedVertices.hasOwnProperty(neighbor) ||
          visitedVertices[neighbor] == false
        ) {
          visitedVertices[neighbor] = true;
          vertexQueue.push(neighbor);
        }
      });
    }

    return resultList;
  },

  getState() {
    return {
      adjacencyList: this.adjacencyList
    };
  }
};

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

console.log(graph.getState());

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.getState());

//          A
//       /     \
//       B     C
//       |     |
//       D --- E
//       \     /
//          F

// graph.removeEdge('A', 'C');

// console.log(graph);

// graph.removeVertex('D');

// console.log(graph);

console.log(graph.DFSRecursive("A"));
console.log(graph.DFSIterative("A"));
console.log(graph.BFS("A"));
