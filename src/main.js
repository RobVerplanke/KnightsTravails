/* eslint-disable import/extensions */
import Graph from './modules/graph.js';
import Node from './modules/node.js';

const graph = new Graph();

for (let i = 0; i < graph.size; i++) {
  for (let j = 0; j < graph.size; j++) {
    const newNode = new Node([i, j]);
    newNode.edgesList = graph.getPossibleEdges(newNode);
    graph.addNode(newNode);
  }
}

graph.nodes.forEach((node) => {
  console.log('node value: ', node.value, '\nnode edgesList: ', node.edgesList);
});
