import buildBoard from './modules/board';
import Knight from './modules/knight';

// Create board (2D array)
const board = buildBoard();

// Create knight piece (class)
const KnightPiece = new Knight();

// Move knight from starting point to destination
function knightMoves(start, end) {

  // input format: [3,3],[0,0]
  const startingPoint = start;
  const endPoint = end;
  const result = [];

  // multiple solutions possible
  // return solutions(s) format: [[3,3],[2,1],[0,0]]
  return result;
}

// Usage: knightMoves([0,0],[1,2]) == [[0,0],[1,2]];
