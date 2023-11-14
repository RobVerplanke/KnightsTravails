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
  calculateDeltaMoves(coord) {
    let possibleCoords = [];
    const x = coord[0];
    const y = coord[1];

    possibleCoords = this.knightDeltas.map((delta) => [x + delta[0], y + delta[1]]);

    return possibleCoords;
  }

  // Get a list of all valid possible coordinates
  getPossibleMoves(node) {
    let possibleCoords = [];
    let validPossibleCoords = [];
    let validPossibleNodes = [];

    const { currentPosition, visitedNodesList } = node;

    // Convert visited nodes to visited coords
    const visitedCoords = node.getVisitedCoords(visitedNodesList);

    // Calculate all possible coordinates with delta array
    possibleCoords = this.calculateDeltaMoves(currentPosition);

    // Select coordinates that are on the board and not yet visited
    validPossibleCoords = possibleCoords.filter(
      (coord) => this.validateCoord(coord) && !visitedCoords.includes(coord),
    );

    // Convert each valid coord to a new node
    validPossibleNodes = validPossibleCoords.map((coord) => new Knight(coord));

    return validPossibleNodes;
  }

  setEdgesList(node) {
    const currentNode = node;
    const possibleNodes = this.getPossibleMoves(currentNode);

    // store nodes, not coords

    currentNode.edgesList = possibleNodes;
  }

  // Represent the position of the Knight piece as '1' on the board
  fillSquare(node) {
    const x = node.currentPosition[0];
    const y = node.currentPosition[1];

    this.board[x][y] = 1;
  }

  buildGraph(node) {

  }
}

const board = new Board();
const knight = new Knight();

export default function knightMoves(start, end) {

  // Visit first node and add it to the visited nodes list
  knight.currentPosition = start;
  knight.endPosition = end;
  knight.addVisitedNode(knight);

  // Fill array with all valid possible coordinates
  board.setEdgesList(knight);

  // Set the position of the Knight in corresponding coordinates on the board array
  board.fillSquare(knight);

  // create edgelist for eacht node in edgelist until end node is reached
  // board.buildGraph(knight);

  // Console log

  console.log('Board representation: \n\n', board.board);

  console.log('Knight:');
  console.log('Current Position:', knight.currentPosition);

  if (knight.edgesList.length > 0) {
    console.log('Edges List:');
    knight.edgesList.forEach((edge) => {
      console.log('  Current Position:', edge.currentPosition);
      console.log('  Edges List:', edge.edgesList);
      console.log('  Visited Nodes List:', edge.visitedNodesList);
      console.log('  ----------------------------');
    });
  }

  console.log('Visited Nodes List:', knight.visitedNodesList);

  // use BFS to find shortest path

}
