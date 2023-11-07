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

  buildGraph(startNode, end) {

    const currentNode = startNode;
    const endCoord = end;
    const level = 0;

    // Add current coordinate to visitedNodes list
    currentNode.visitedNodes.push(currentNode.coord);

    return this._buildGraph(currentNode, endCoord, level);
  }

  _buildGraph(node, end, level) {

    console.log('Startingnode:\n', node, '\n');

    // Check if end node excists in edges list
    if (node.edgesList.some(checkCoord)) {
      console.log(`You made it in ${level + 1} moves! Here's your path:`);
      console.log(node.visitedNodes, end);
      return null;
    }

    function checkCoord(coord) {
      return coord[0] === end[0] && coord[1] === end[1];
    }

    // Itterate through each possible move
    for (const edgeCoord of node.edgesList) {

      // Create a new node/knight peace for each possible move
      const knight = createNewKnight(edgeCoord);

      // Set its coorinate
      knight.coord = edgeCoord;

      // Store all its possible moves in its visitedNodes list
      knight.edgesList = getPossibleMoves(edgeCoord);

      // Add current coordinate to the visitedNodes list
      knight.visitedNodes.push(edgeCoord, ...node.visitedNodes);

      console.log(knight, '\n');

      // Recursion
      this._buildGraph(knight, end, level + 1);
    }

    return level;

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
