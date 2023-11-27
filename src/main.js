/* eslint-disable import/extensions */
import Board from './modules/board.js';
import AdjacencyList from './modules/graph.js';

const board = new Board();
const adjacencyList = new AdjacencyList();

// Create nodes with its coordinates as key and posibble moves as value
function populateSquares() {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      adjacencyList.graph.set([i, j], board.getValidMoves([i, j]));
    }
  }
}

// Set nodes/ create graph (adjadency list)
populateSquares();

function knightMoves(start, end) {

  // Validate coordinates
  if (!board.isValidCoord(start) || !board.isValidCoord(end)) return console.log('Invalid coordinates!');

  // Search shortes path with BFS

  return null; // temp
}

knightMoves([0, 1], [3, 3]);
