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

  buildGraph(node) {

    console.log('node: ', node);

    for (const edge of node.edgesList) {

      const knight = createNewKnight(edge);
      knight.edgesList = getPossibleMoves(edge);
      knight.endNode = node.endNode;

      // Set coorinates of current node
      knight.currentNode = edge;

      // Set coordinates of parent node
      knight.parentNode = node.currentNode;

      console.log('knight: ', knight);
    }
    // keep count of amount of new knights that are created
    // set children(nodes) with its possibleMoves
    // repeat until destination node is reached
    // return the shortest path with getShortestPath method
  }

  getShortestPath() {

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
function getPossibleMoves(startingNode) {
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
    const x = startingNode[0] + delta[0];
    const y = startingNode[1] + delta[1];

    // Push all valid coordinates to array
    if (isOnBoard(x) && isOnBoard(y)) {
      possibleMoves.push([x, y]);
    }
  }

  return possibleMoves;
}

export default function knightMoves(start, end) {

  // Validate coordinates
  if (isOnBoard(start[0]) && isOnBoard(start[1])
     && isOnBoard(end[0]) && isOnBoard(end[1])) {

    // Create a knight piece
    const node = createNewKnight(getPossibleMoves(start));
    node.currentNode = start;
    node.endNode = end;

    // Create a board with the kniht piece "on" it
    const board = createNewBoard(node);

    // Build the graph
    board.buildGraph(node);
  } else {
    console.log('coords are not valid');
  }
}
