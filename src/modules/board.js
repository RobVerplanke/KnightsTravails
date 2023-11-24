export default class Board {
  constructor(size = 8) {
    this.size = size;
    this.knightDeltas = [
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

  // Calculate possible moves with delta array
  getPossibleNodes(node) {
    const x = node[0];
    const y = node[1];
    return this.knightDeltas.map((delta) => [x + delta[0], y + delta[1]]);
  }

  // Check if coordinate is on the board
  validateCoord(edge) {
    const x = edge[0];
    const y = edge[1];
    const n = this.size;

    return x >= 0 && x < n && y >= 0 && y < n;
  }

  // Calculate each possible coordinate with the delta array
  getValidMoves(key) {
    const node = key;
    const validMoves = [];
    let possibleNodes = [];

    // Get possible edge nodes
    possibleNodes = this.getPossibleNodes(node);

    // Store all nodes with validated coordinates
    possibleNodes.forEach((move) => {
      if (this.validateCoord(move) === true) validMoves.push(move);
    });

    return validMoves;
  }
}
