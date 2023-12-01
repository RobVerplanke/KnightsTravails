export default class Graph {
  constructor() {
    this.graph = new Map();
  }

  bfs(start) {
    let currentNode = start;
    console.log('currentNode: ', currentNode);

    // const visited = new Set();
    const queue = [];
    const result = [];

    // Push starting node to queue
    queue.push(currentNode);
    console.log('queue: ', queue);

    // while (queue.length) {

    // Get first item from te queue
    currentNode = queue.shift();
    console.log('new currentNode: ', currentNode);

    // Push current node to the result list
    result.push(currentNode);
    console.log('result: ', result);

    // Push value of current node to te queue
    queue.push(this.graph.get(JSON.stringify(currentNode)));
    console.log('new queue: ', queue);

    // }
  }

}
