export default class Adjacencylist {
  constructor() {
    this.graph = new Map();
  }

  // bfs(value) {
  //   return this.bfsTraversal(this.graph, value);
  // }

  bfsTraversal(start, end) {

    console.log('start: ', start);
    console.log('end: ', end);

    if (start.join(',') === end.join(',')) return console.log('Found!');

    const queue = [];

    // Push startintpoint in queue as string
    queue.push(start.join(','));

    // while (queue) {
    console.log('queue', (queue));

    // Push values of node to queue list as strings
    queue.push(...this.graph.get(queue[0]).map((coord) => coord.join(',')));

    // Remove first queue item
    queue.shift();

    console.log('queue', queue);

    // }
    // — Begin at the source node and enqueue it.
    // — Dequeue a node, visit its neighbors, and enqueue them.
    // — Continue this process until all reachable nodes are visited.

  }
}
