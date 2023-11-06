/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */

import createNewKnight from './knight.js';

// Ckeckerboard with all possible moves as its children
class Board {
  constructor(nodes) {
    this.nodes = [nodes];
  }

  addToBoard(node) {
    this.nodes.push(node);
  }

  buildGraph(startNode, endNode) {

    const currentNode = startNode;
    const end = endNode;
    const visitedNodes = [];
    const level = 0;

    return this._buildGraph(currentNode, end, level, visitedNodes);
  }

  _buildGraph(node, end, level, visitedNodes) {
    console.log('Startingnode:\n', node, '\n');
    visitedNodes.push(node.coord);

    // Itterate through each possible move
    for (const edgeCoord of node.edgesList) {

      // Base case

      // check if edgeCoord exist in vissitedNodes list

      // Create a new knight peace
      const knight = createNewKnight(edgeCoord);

      // Set current coorinate
      knight.coord = edgeCoord;

      // Store all possible moves in its edgesList array
      knight.edgesList = getPossibleMoves(edgeCoord);

      // Keep track of all visited node coordinates
      visitedNodes.push(edgeCoord);

      // Recursivly visit each possible move

      // Return shortest path

      console.log(knight, '\n');

    }
    console.log('\nVisited nodes: \n', visitedNodes);

  }

  getShortestPath() {
    console.log('test');
  }
}

// Create new board
function createNewBoard(nodes) {
  return new Board(nodes);
}

// Checks if coordinate is not off the board
function isOnBoard(coord) {
  return coord >= 0 && coord < 8;
}

// Calculate all possible moves from starting position
function getPossibleMoves(coord) {
  const possibleMoves = [];
  const deltas = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  for (const delta of deltas) {
    const x = coord[0] + delta[0];
    const y = coord[1] + delta[1];

    // Push all valid coordinates to array
    if (isOnBoard(x) && isOnBoard(y)) {
      possibleMoves.push([x, y]);
    }
  }

  return possibleMoves;
}

export default function knightMoves(startingCoord, endCoord) {

  // Validate coordinates
  if (isOnBoard(startingCoord[0]) && isOnBoard(startingCoord[1])
     && isOnBoard(endCoord[0]) && isOnBoard(endCoord[1])) {

    // Create a knight piece
    const node = createNewKnight(getPossibleMoves(startingCoord));
    node.coord = startingCoord;

    // Create a board with the kniht piece "on" it
    const board = createNewBoard(node);

    // Build a graph from the starting coordinate
    board.buildGraph(node, endCoord);

  } else {
    console.log('coords are not valid');
  }
}
