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

    const node = startNode;
    const end = endNode;
    const visitedNodes = [];
    const level = 0;

    return this._buildTree(node, level, visitedNodes, end);
  }

  _buildTree(node, level, visitedNodes, end) {
    console.log('node: ', node);
    console.log('visited nodes: ', visitedNodes);
    console.log('end node: ', end);

    // For each possible move, create a new knight peace
    for (const edge of node.edgesList) {
      const knight = createNewKnight(edge);

      // Store all its possible moves in its edgesList array
      knight.edgesList = getPossibleMoves(edge);

      console.log('knight: ', knight);
    }
  }

  // keep count of amount of new knights that are created
  // set children(nodes) with its possibleMoves
  // repeat until destination node is reached
  // return the shortest path with getShortestPath method

  // buildTree(node);

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

    // Create a board with the kniht piece "on" it
    const board = createNewBoard(node);

    // Build a graph from the starting coordinate
    board.buildGraph(node, endCoord);

  } else {
    console.log('coords are not valid');
  }
}
