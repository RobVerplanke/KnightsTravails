/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */

import Knight from './knight.js';

class Board {
  constructor() {
    this.size = 8;
    this.board = this.newBoard();
    this.knightDeltas = [
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1],
    ];
  }

  // create a 2D array
  newBoard() {
    const newBoard = [];

    for (let i = 0; i < this.size; i++) {
      newBoard[i] = [];
      for (let j = 0; j < this.size; j++) {
        newBoard[i][j] = 0;
      }
    }

    return newBoard;
  }

  // Check if coordinate is on the board
  validateCoord(coord) {
    const x = coord[0];
    const y = coord[1];
    const n = this.size;

    return x >= 0 && x < n && y >= 0 && y < n;
  }

  getPossibleMoves(node) {
    const possibleMoves = [];
    const { visitedNodesList, edgesList } = node;

    for (const edge of edgesList) {
      if (this.validateCoord(edge) && !visitedNodesList.contains(edge)) {
        possibleMoves.push(edge);
      }
    }

    return possibleMoves;
  }

  fillSquare(node) {
    const x = node.currentPosition[0];
    const y = node.currentPosition[1];

    this.board[x][y] = 1;
  }
}

const board = new Board();
const knight = new Knight();

export default function knightMoves(start, end) {
  console.log('start function knightMoves \n');

  console.log('Startposition is on the board: ', board.validateCoord(start));
  console.log('Endposition is on the board: ', board.validateCoord(end), '\n');
  console.log('Moving Knight to start position \n');

  // Set starting coordinate as current coordinate and add it to visited nodes list
  knight.currentPosition = start;
  knight.addVisitedNode(knight.currentPosition);

  // Represent the position of the Knight as '1' in the board array
  board.fillSquare(knight);

  console.log('Board representation: \n\n', board.board);

  // check if coords exists in a size/dimensions property of the board object/class

  // Visit node
  // Add node to visited nodes list
  // calculate possible moves
  // Check if possible move is already visited
  // Store valid possible moves to a list
  // visit next moves
  // repeat these steps until end node is reached

  // use BFS to find shortest path

}
