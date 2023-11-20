/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import Knight from './knight.js';

export default class Board {
  constructor(size = 8) {
    this.size = size;
    this.board = this.createBoard();
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
  createBoard() {
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
    const currentNode = node;

    let possibleCoords = [];
    let validPossibleCoords = [];
    let validPossibleNodes = [];

    // Set current position as a visited coordinate, as string
    currentNode.visitedNodesList.push(currentNode.currentPosition.toString());

    // Calculate all possible coordinates with delta array
    possibleCoords = this.calculateDeltaMoves(currentNode.currentPosition);

    // Select coordinates that are on the board and not yet visited
    validPossibleCoords = possibleCoords.filter(
      (coord) => this.validateCoord(coord)
       && !currentNode.visitedNodesList.includes(coord.toString()),
    );

    // Convert each valid coord to a new node
    validPossibleNodes = validPossibleCoords.map(
      (coord) => new Knight(coord, currentNode.endPosition),
    );

    // Push coordinate of current node to visitedNodesList of each edge
    validPossibleNodes.forEach((validNode) => validNode.visitedNodesList.push(
      currentNode.currentPosition.toString(),
    ));

    currentNode.edgesList = validPossibleNodes;

    console.log(currentNode);

  }

  // Build the graph tree
  buildGraph(node) {

    // Set all edges of starting node
    this.getPossibleMoves(node);

  }

}
