/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */

import createNewKnight from './knight.js';

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

// Ckeckerboard with all possible moves as its children
class Board {
  constructor(nodes) {
    this.nodes = [nodes];
  }

  buildGraph(startNode, end) {
    const currentNode = startNode;
    const endCoord = end;
    const level = 0;

    return this._buildGraph(currentNode, endCoord, level);
  }

  _buildGraph(node, end, level) {

    const paths = [];

    // Filter out duplicates from edgesList
    node.edgesList = node.edgesList.filter((coord) => node.visitedNodes.indexOf(coord) === -1);

    // Check if end node exists in edges list
    function checkEndCoord(coord) {
      return coord[0] === end[0] && coord[1] === end[1];
    }

    if (node.edgesList.some(checkEndCoord)) {
      paths.push([...node.visitedNodes, end]);
      console.log(`You made it in ${level + 1} moves! Here's your path:`);
      console.log('Paths: ', paths);
      return level + 1;
    }

    // Iterate through each possible move
    for (const edgeCoord of node.edgesList) {

      if (!node.visitedNodes.some((visitedCoord) => visitedCoord[0] === edgeCoord[0] && visitedCoord[1] === edgeCoord[1])) {

        // Create a new node/knight piece for each possible move
        const knight = createNewKnight(edgeCoord);

        // Set its coordinate
        knight.coord = edgeCoord;

        // Store all its possible moves in its visitedNodes list
        knight.edgesList = getPossibleMoves(edgeCoord);

        // Add current coordinate to the visitedNodes list
        knight.visitedNodes = [...node.visitedNodes, edgeCoord];

        // Recursion
        const result = this._buildGraph(knight, end, level + 1);

        if (result !== null) {
          return result; // Return the level if the goal is reached in this branch
        }
      }
    }

    return null; // Return null to indicate the goal was not reached in this branch
  }
}

// Create new board
function createNewBoard(nodes) {
  return new Board(nodes);
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
