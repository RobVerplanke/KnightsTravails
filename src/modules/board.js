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

  // Check if coordinate is on the board
  validateCoord(coord) {
    const x = coord[0];
    const y = coord[1];
    const n = this.size;

    return x >= 0 && x < n && y >= 0 && y < n;
  }

  // Calculate each possible coordinate with the delta array
  getValidMoves(key) {
    const currentCoord = key;
    const x = currentCoord[0];
    const y = currentCoord[1];

    return this.knightDeltas.map((delta) => [x + delta[0], y + delta[1]]);
  }
}
