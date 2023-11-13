/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */

import Knight from './knight.js';

class Board {
  constructor(size = 8) {
    this.size = size;
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

  // Calculate each possible coordinate with the delta array
  calculateDeltaMoves() {

    // Return new moves

  }

  // Get a list of all valid possible coordinates
  getPossibleMoves(node) {
    let possibleMoves = [];
    let validPossibleMoves = [];
    const { currentPosition, visitedNodesList } = node;
    const visitedCoords = node.getVisitedCoords(visitedNodesList);

    // Calculate all possible coordinates with delta array
    possibleMoves = this.calculateDeltaMoves(currentPosition);

    // Select coordinates that are on the board and not yet visited
    validPossibleMoves = possibleMoves.filter(
      (coord) => this.validateCoord(coord) && !visitedCoords.includes(coord),
    );

    return validPossibleMoves; // Valid coordinates
  }

  setEdgesList(node) {
    const currentNode = node;
    const possibleMoves = this.getPossibleMoves(currentNode);

    currentNode.edgesList = possibleMoves;
  }

  // Represent the position of the Knight piece as '1' on the board
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

  // Visit first node and add it to the visited nodes list
  knight.currentPosition = start;
  knight.addVisitedNode(knight);

  // Fill array with all valid possible coordinates
  board.setEdgesList(knight);

  // Set the position of the Knight in corresponding coordinates on the board array
  board.fillSquare(knight);

  console.log('Board representation: \n\n', board.board);

  // To do

  // Visit node
  // Add node to visited nodes list
  // calculate possible moves
  // Check if possible move is already visited
  // Store valid possible moves to a list
  // visit next moves
  // repeat these steps until end node is reached

  // use BFS to find shortest path

}
