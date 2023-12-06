/* eslint-disable import/extensions */
import Node from './node.js';

export default class Graph {
  constructor() {
    this.size = 8;
    this.nodes = [];
    this.deltas = [
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1],
    ];
  }

  // Create nodes for each square on the board
  setNodes() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const newNode = new Node([i, j]);
        this.addNode(newNode);
      }
    }
  }

  // Add new node to graph
  addNode(node) {
    this.nodes.push(node);
  }

  // Check if coordinate is on the board
  isValidCoord(coord) {
    const x = coord[0];
    const y = coord[1];
    const n = this.size;

    return x >= 0 && x < n && y >= 0 && y < n;
  }

  // Calculate possible moves (coordinates) with delta array
  getPossibleCoords(node) {
    const x = node.value[0];
    const y = node.value[1];

    const validCoords = this.deltas
      .map((delta) => [x + delta[0], y + delta[1]])
      .filter((move) => this.isValidCoord(move));

    return validCoords;
  }

  // Get corresponding node
  getNodeByCoordinates(coord) {
    return this.nodes.find((node) => node.value[0] === coord[0] && node.value[1] === coord[1]);
  }

  // Set edges list for each node
  setEdges() {
    // Get possible moves
    this.nodes.forEach((node) => {
      const possibleCoords = this.getPossibleCoords(node);

      // Add corresponding nodes in the edgesList
      const edgeNodes = possibleCoords.map((coord) => this.getNodeByCoordinates(coord));
      node.edgesList.push(edgeNodes);
    });
  }

  bfs(startCoord, endCoord) {
    const queue = [];

    // Validate coordinates
    if (!this.isValidCoord(startCoord) || !this.isValidCoord(endCoord)) return console.log('Coordinate(s) not valid!');

    // Get corresponding startnode
    const startNode = this.getNodeByCoordinates(startCoord);

    // Push startnode to queue
    queue.push(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      console.log('currentNode: ', currentNode);
      console.log('currentNode value: ', currentNode.value);
      console.log('currentNode edgesList: ', currentNode.edgesList);

      if (JSON.stringify(currentNode.value) === JSON.stringify(endCoord)) return console.log('endnode found!');

      // Mark node as visited
      currentNode.visited = true;

      // Add all unvisited edge nodes to the queue
      currentNode.edgesList[0].forEach((edge) => { if (!edge.visited) queue.push(edge); });

    }
  }
}
