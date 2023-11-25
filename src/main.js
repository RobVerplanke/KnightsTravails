/* eslint-disable import/extensions */
import Board from './modules/board.js';

const board = new Board();
const graph = new Map();

// Create nodes with its coordinates as key and posibble moves as value
function populateSquares() {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      graph.set([i, j], board.getValidMoves([i, j]));
    }
  }
}

// Set nodes
populateSquares();

console.log(graph);
