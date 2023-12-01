export default class Graph {
  constructor() {
    this.graph = new Map();
  }

  bfs(start, end) {
    let currentNode = start;
    const endNode = end;
    console.log('currentNode: ', currentNode);
    console.log('end node: ', endNode);

    const visited = new Set();
    const queue = [];
    const result = [];

    // Push starting node to queue
    queue.push(currentNode);

    while (queue.length) {

      // If node is equal to the end node, return result
      if (JSON.stringify(currentNode) === JSON.stringify(endNode)) { return console.log('end node found! \nResult: ', visited); }

      // Get first item from te queue
      currentNode = queue.shift();

      // Push current node to the result list
      result.push(currentNode);
      visited.add(currentNode);

      // Push value of current node to te queue
      queue.push(...this.graph.get(JSON.stringify(currentNode)));

    }
  }
}
