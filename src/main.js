/* eslint-disable import/extensions */

import bfs from './bfs.js';

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

// Create a 2D array, for each square set the coordinate (string) as key and the neighbours as value
function setAdjadencies() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const neighbors = getValidNeighbours([i, j]);
      adjList.set(JSON.stringify([i, j]), neighbors);
    }
  }
}

// Get shortest path from starting vertex to end vertex
function knightMoves(start, end) {
  let currentVertex = JSON.stringify(end);
  const bfsInfo = bfs(adjList, start);
  const path = [];
  let moves = 0;

  // Add end vertex to path
  path.push(currentVertex);

  // As long as there is a predecessor, add its predecessor to the path list
  while (bfsInfo[currentVertex].predecessor !== null) {
    path.unshift(bfsInfo[currentVertex].predecessor);
    currentVertex = bfsInfo[currentVertex].predecessor;
    moves += 1;
  }

  console.log(`You made it in ${moves} moves! Here's your path: \n`, path);
}

setAdjadencies();

knightMoves([3, 3], [4, 3]);
