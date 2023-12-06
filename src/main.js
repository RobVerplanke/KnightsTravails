/* eslint-disable import/extensions */
import Graph from './modules/graph.js';

const graph = new Graph();

// Create nodes for each square on the board
graph.setNodes();

// Set edges list for each node
graph.setEdges();

// Search shortest path
function knightMoves(start, end) {
  graph.bfs(start, end);
}

knightMoves([0, 0], [7, 7]);

// Console log

// graph.nodes.forEach((node) => {
//   console.log(`Node Value: ${node.value}`);
//   console.log('Node Edges:', node.edgesList);

//   node.edgesList.forEach((edgeArray) => {
//     edgeArray.forEach((edge) => {
//       console.log(`  - Edge Value: ${edge.value}`);
//       console.log(`  - Edge EdgeList: ${edge.edgesList}`);
//     });
//   });

//   console.log('-----------------------------');
// });
