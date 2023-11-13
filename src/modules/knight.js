export default class Knight {
  constructor(startPosition) {
    this.startPosition = startPosition;
    this.edgesList = [];
    this.visitedNodesList = [];
  }

  move(newPosition) {
    // check if new position is valid

    this.startPosition = newPosition;
  }

  addEdge(edge) {
    this.edgesList.push(edge);
  }

  addVisitedNode(node) {
    this.visitedNodesList.push(node);
  }
}
