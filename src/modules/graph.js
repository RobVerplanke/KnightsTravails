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
  getPossibleCoords(node) {
    const x = node.value[0];
    const y = node.value[1];

    const validCoords = this.deltas
      .map((delta) => [x + delta[0], y + delta[1]])
      .filter((move) => this.isValidCoord(move));

    return validCoords;
  }

  // Convert valid possible coordinates to nodes
  getEdges(node) {
    const possibleCoords = this.getPossibleCoords(node);

    const edgeNodes = possibleCoords
      .map((coord) => this.getNodeByCoordinates(coord));

    return edgeNodes;
  }

  getNodeByCoordinates(coord) {
    return this.nodes.find((node) => node.value[0] === coord[0] && node.value[1] === coord[1]);
  }

  setEdges() {
    this.nodes.forEach((node) => node.edgesList.push(this.getEdges(node)));
  }
}
