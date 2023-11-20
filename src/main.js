/* eslint-disable import/extensions */
import Board from './modules/board.js';
import Knight from './modules/knight.js';

// Create new board
const board = new Board();

function knightMoves(start, end) {

  // First validate the coords
  board.validateCoord(start);
  board.validateCoord(end);

  // Create starting node
  const knight = new Knight(start, end);

  // Build tree
  board.buildGraph(knight);

  // Search for shortest path with BFS

}

knightMoves([0, 0], [1, 2]);
