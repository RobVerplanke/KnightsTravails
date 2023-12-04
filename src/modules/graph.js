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

  // Calculate possible moves with delta array
  getPossibleEdges(node) {
    const x = node.value[0];
    const y = node.value[1];

    const validCoords = this.deltas
      .map((delta) => [x + delta[0], y + delta[1]])
      .filter((move) => this.isValidCoord(move));

    return validCoords;
  }
}
