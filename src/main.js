/* eslint-disable import/extensions */
import Board from './modules/board.js';
import Graph from './modules/graph.js';
import Node from './modules/node.js';

const board = new Board();
const adjacencyList = new Graph();

// Create nodes with its coordinates as key and possible moves as value
function populateSquares() {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      const key = JSON.stringify([i, j]); // Convert array to string
      adjacencyList.graph.set(new Node(key, board.getValidMoves([i, j])));
    }
  }
}

// Fill graph with nodes
populateSquares();

const start = [0, 0];
const end = [3, 3];

console.log(adjacencyList.graph);

// adjacencyList.bfs(start, end);
