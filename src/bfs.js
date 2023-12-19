// Create a queue array with function constructor and add basic methods
const Queue = function Queue() {
  this.items = [];
};

Queue.prototype.enqueue = function enqueue(vertex) {
  this.items.push(vertex);
};

Queue.prototype.dequeue = function dequeue() {
  return this.items.shift();
};

Queue.prototype.isEmpty = function isEmpty() {
  return this.items.length === 0;
};

// BFS
export default function bfs(graph, source) {
  const stringifiedSource = JSON.stringify(source);
  const bfsInfo = [];

  // Fill bfsInfo array with objects for each vertex in the graph,
  // containing its distance to the source and its predecessor (null by default)
  for (let i = 0; i < Math.sqrt(graph.size); i++) {
    for (let j = 0; j < Math.sqrt(graph.size); j++) {
      const key = JSON.stringify([i, j]);

      bfsInfo[key] = {
        distance: null,
        predecessor: null,
      };
    }
  }

  // Set starting vertex' distance
  bfsInfo[stringifiedSource].distance = 0;

  // Create a queue and add starting vertex
  const queue = new Queue();
  queue.enqueue(stringifiedSource);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    //  For each neighbor that has not been visited
    for (let i = 0; i < graph.get(currentVertex).length; i++) {
      const neigbourVertex = JSON.stringify(graph.get(currentVertex)[i]);

      // Set predecessors and distance from source vertex, then add to queue
      if (bfsInfo[neigbourVertex].distance === null) {
        bfsInfo[neigbourVertex].distance = bfsInfo[currentVertex].distance + 1;
        bfsInfo[neigbourVertex].predecessor = currentVertex;
        queue.enqueue(neigbourVertex);
      }
    }
  }
  return bfsInfo;
}
