const adjList = new Map();
const boardSize = 8;
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

// Check if possible neighbour is on the board
function isValidCoord(coord) {
  const x = coord[0];
  const y = coord[1];
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

// Calculate possible neighbours with delta array
function getValidNeighbours(coord) {
  const x = coord[0];
  const y = coord[1];

  const validCoords = deltas
    .map((delta) => [x + delta[0], y + delta[1]])
    .filter((move) => isValidCoord(move));

  return validCoords;
}

function setAdjadencies() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      adjList.set([i, j], getValidNeighbours([i, j]));
    }
  }
}

setAdjadencies();

console.log(adjList);
