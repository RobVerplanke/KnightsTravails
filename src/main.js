/* eslint-disable import/extensions */
import Graph from './modules/graph.js';
import Node from './modules/node.js';

const graph = new Graph();

// Create nodes for each square on the board
for (let i = 0; i < graph.size; i++) {
  for (let j = 0; j < graph.size; j++) {
    const newNode = new Node([i, j]);
    graph.addNode(newNode);
  }
}

// Set edges list for each node
graph.setEdges();

// graph.nodes.forEach((node) => {
//   console.log(`Node Value: ${node.value}`);
//   console.log('Node Edges:');
//   node.edgesList.forEach((edge) => {
//     console.log(`  - Edge Value: ${edge.value}`);
//   });
//   console.log('-----------------------------');
// });

graph.nodes.forEach((node) => console.log('node edgesList: ', node.edgesList));

// console.log(graph.nodes);
