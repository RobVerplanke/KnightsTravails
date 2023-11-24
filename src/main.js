/* eslint-disable import/extensions */
import Board from './modules/board.js';

const board = new Board();
const graph = new Map();

// Create nodes with its coordinates as key value
function populateSquares() {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      graph.set([i, j], null);
    }
  }
}

// Set valid posibble moves for each node
function setEdges() {
  graph.forEach((value, key) => graph.set(key, board.getValidMoves(key)));
}

// Set nodes
populateSquares();

// Connect nodes
setEdges();

console.log(graph);
