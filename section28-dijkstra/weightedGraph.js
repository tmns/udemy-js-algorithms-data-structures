// A demonstration of Dijkstra's algorithm, using a simplified weighted graph.

const PriorityQueue = require('../section24-binary-heaps/priorityQueue'); 

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
        this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }

    dijkstra(start, finish) {
        // set up our initial priority queue, helper objects that keep track
        // of distances and previous vertices visited, and the path to be returned
        const vertices = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];

        // build up initial state
        // all items aside from the first vertex will be set to Infinity
        // the previous value for all vertices will be set to null
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                vertices.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                vertices.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        let smallest;
        // as long as there is a vertex to visit in our priority queue
        while (vertices.values.length) {
            // extract vertex with smallest priority
            smallest = vertices.dequeue().value;
            if (smallest === finish) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // begin examing the neighboring vertex
                    const nextVertex = this.adjacencyList[smallest][neighbor];
                    // calculate the current distance to the neighboring vertex 
                    // to see if it can become the new shortest path
                    const candidate = distances[smallest] + nextVertex.weight;
                    // find the next neighbor
                    const nextNeighbor = nextVertex.vertex;
                    // if the current distance is shorter than the distance stored for the next neighbor...
                    if (candidate < distances[nextNeighbor]) {
                        // ...update its distance to the current, ie be the new shortest path
                        distances[nextNeighbor] = candidate;
                        // update the the previous, ie path, to the neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue to priority queue with new priority
                        vertices.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'F'));
