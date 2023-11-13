export default class Knight {
  constructor(startPosition) {
    this.currentPosition = startPosition;
    this.edgesList = [];
    this.visitedNodesList = [];
  }

  // Set new position
  move(newPosition) {
    // check if new position is valid

    this.currentPosition = newPosition;
  }

  // Add possible move to edge list
  addEdge(edge) {
    this.edgesList.push(edge);
  }

  // Add a visited node to the visited nodes list
  addVisitedNode(node) {
    this.visitedNodesList.push(node);
  }
}
