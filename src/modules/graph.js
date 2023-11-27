export default class Adjacencylist {
  constructor() {
    this.graph = new Map();
  }

  bfs(value) {
    return this.bfsTraversal(this.graph, value);
  }

  bfsTraversal(graph, value) {

    // — Begin at the source node and enqueue it.
    // — Dequeue a node, visit its neighbors, and enqueue them.
    // — Continue this process until all reachable nodes are visited.

  }
}
