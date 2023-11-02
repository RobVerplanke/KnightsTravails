/* eslint-disable no-restricted-syntax */

const possibleMoves = [];

// Checks if coordinate is not off the board
function isOnBoard(coord) {
  return coord >= 0 && coord < 8;
}

function getPossibleMoves(startingSquare) {
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

    if (isOnBoard(x) && isOnBoard(y)) {
      possibleMoves.push([x, y]);
    }
  }

  return possibleMoves;
}

console.log(getPossibleMoves([3, 3]));
