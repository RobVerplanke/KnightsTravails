/* eslint-disable import/extensions */
import Graph from './modules/graph.js';

const graph = new Graph();

// Create nodes for each square on the board
graph.setNodes();

// Set edges list for each node
graph.setEdges();

// Search shortest path
// function knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]

// Console log
graph.nodes.forEach((node) => {
  console.log(`Node Value: ${node.value}`);
  console.log('Node Edges:', node.edgesList);

  node.edgesList.forEach((edgeArray) => {
    edgeArray.forEach((edge) => {
      console.log(`  - Edge Value: ${edge.value}`);
      console.log(`  - Edge EdgeList: ${edge.edgesList}`);
    });
  });

  console.log('-----------------------------');
});
