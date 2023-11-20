/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import Knight from './knight.js';

function convertCoordsToNodes(coords, node) {
  return coords.map((coord) => new Knight(coord, node.endPosition));
}

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

  ConvertValidCoordsToNodes(coords, currentNode) {
    const validPossibleCoords = coords.filter((coord) => this.validateCoord(coord)
       && !currentNode.visitedNodesList.includes(coord.toString()));

    // Return list of nodes
    return convertCoordsToNodes(validPossibleCoords, currentNode);
  }

  // Get a list of all valid possible nodes
  getPossibleMoves(node) {
    const currentNode = node;

    let possibleCoords = [];
    let validPossibleNodes = [];

    // Push current position to visited coordinates list, as a string
    currentNode.visitedNodesList.push(currentNode.currentPosition.toString());

    // Calculate all possible coordinates with delta array
    possibleCoords = this.calculateDeltaMoves(currentNode.currentPosition); // Array items

    // Select valid coordinates and convert them to nodes
    validPossibleNodes = this.ConvertValidCoordsToNodes(possibleCoords, currentNode);

    // Add visited nodes from current node to the visited nodes list of each edge
    validPossibleNodes.forEach(
      (validNode) => validNode.visitedNodesList.push(...currentNode.visitedNodesList),
    );
    currentNode.edgesList = validPossibleNodes;

    // Check if end position is reached
    if (possibleCoords.toString().includes(node.endPosition.toString())) {
      console.log('edge gevonden! \n');
      console.log(node);

      return node;
    }
    // Recursive call
    this.getPossibleMoves(...currentNode.edgesList);
    //
    //
    // log

    // console.log('current node: \n \n', currentNode, '\n \n');
    // console.log('edges: \n \n');

    // currentNode.edgesList.forEach((edge) => console.log('edge: ', edge, '\n'));
    return node;

  }

  // Build the graph tree
  buildGraph(node) {

    // Set all edges of starting node
    this.getPossibleMoves(node);

  }

}
