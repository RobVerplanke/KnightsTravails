/* eslint-disable import/extensions */
import Board from './modules/board.js';
import Knight from './modules/knight.js';

// Create new board
const board = new Board();

function knightMoves(start, end) {

  // Validate the coords
  if (!board.validateCoord(start) || !board.validateCoord(end)) {
    console.log('Invalid coordinate!');
    return;
  }

  // Create starting node
  const knight = new Knight(start, end);

  // Build tree
  board.buildGraph(knight);

  // Search for shortest path with BFS

}

knightMoves([0, 0], [5, 7]);
