/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
class Board {
  constructor(nodes) {
    this.nodes = [...nodes];
  }
}

const board = new Board(getPossibleMoves([0, 3]));

// Checks if coordinate is not off the board
export default function isOnBoard(coord) {
  return coord >= 0 && coord < 8;
}

// Calculate all possible moves from starting position
function getPossibleMoves(startingSquare) {
  const possibleMoves = [];
  const deltas = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  for (const delta of deltas) {
    const x = startingSquare[0] + delta[0];
    const y = startingSquare[1] + delta[1];

    // Push all valid coordinates to array
    if (isOnBoard(x) && isOnBoard(y)) {
      possibleMoves.push([x, y]);
    }
  }

  return possibleMoves;
}

console.log(board.nodes);
