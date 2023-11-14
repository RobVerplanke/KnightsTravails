/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */

import Knight from './knight.js';

class Board {
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
    let possibleCoords = [];
    let validPossibleCoords = [];
    let validPossibleNodes = [];

    const { currentPosition } = node;

    // Convert visited nodes to visited coords
    const visitedCoords = node.getVisitedCoords();

    // Calculate all possible coordinates with delta array
    possibleCoords = this.calculateDeltaMoves(currentPosition);

    // Select coordinates that are on the board and not yet visited
    validPossibleCoords = possibleCoords.filter(
      (coord) => this.validateCoord(coord) && !visitedCoords.includes(coord),
    );

    // Convert each valid coord to a new node
    validPossibleNodes = validPossibleCoords.map((coord) => new Knight(coord, node.endPosition));

    return validPossibleNodes;
  }

  // Set edge nodes in edgesList
  setEdgesList(node) {
    const currentNode = node;

    // Get all possible nodes
    const possibleNodes = this.getPossibleMoves(currentNode);

    // Add all possible nodes to its edges list
    currentNode.edgesList = possibleNodes;
  }

  // Represent the position of the Knight piece as '1' on the board
  fillSquare(node) {
    const x = node.currentPosition[0];
    const y = node.currentPosition[1];

    this.board[x][y] = 1;
  }

  buildGraph(node) {
    const { edgesList } = node;

    for (const edge of edgesList) {

      // Set properties of each edge
      edge.endPosition = node.endPosition;
      edge.edgesList = this.getPossibleMoves(edge);
      edge.visitedNodesList.push(node);

      // Do the same for the edge node
    }
  }

}

export default function knightMoves(start, end) {

  // Create new board
  const board = new Board();

  // Create starting node
  const knight = new Knight(start, end);

  // Fill array with all valid possible coordinates
  board.setEdgesList(knight);

  // Set the position of the Knight in corresponding coordinates on the board array
  board.fillSquare(knight);

  // create edgelist for each node in edgelist until end node is reached
  board.buildGraph(knight);

  // Add starting node to its visited nodes list
  knight.addVisitedNode(knight);

  //
  //
  //
  //
  //
  // Console log

  // console.log('Board representation: \n\n', board.board);

  console.log('Knight:');
  console.log('Current Position:', knight.currentPosition);
  console.log('End Position:', knight.endPosition);

  if (knight.edgesList.length > 0) {
    console.log('Edges List: \n');
    knight.edgesList.forEach((edge) => {
      console.log('  Edge Node:');
      console.log('  Current Position:', edge.currentPosition);
      console.log('  End Position:', edge.endPosition);
      console.log('  Edges List:', edge.edgesList);
      console.log('  Visited Nodes List:', edge.visitedNodesList);
      console.log('  ----------------------------\n ');
    });
  }

  // use BFS to find shortest path

}
