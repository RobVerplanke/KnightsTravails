/* eslint-disable import/extensions */
import Graph from './modules/graph.js';
import Node from './modules/node.js';

const graph = new Graph();

for (let i = 0; i < graph.size; i++) {
  for (let j = 0; j < graph.size; j++) {
    const newNode = new Node([i, j]);
    newNode.edgesList = graph.getEdges(newNode);
    graph.addNode(newNode);
  }
}

console.log(graph.nodes);
