export default class Knight {
  constructor(startPosition, endPosition) {
    this.currentPosition = startPosition;
    this.edgesList = [];
    this.visitedNodesList = [];
    this.endPosition = endPosition;
  }

  // Set new position
  move(newPosition) {
    // check if new position is valid

    this.currentPosition = newPosition;
  }

  // Add possible move to edge list
  addEdge(edges) {
    this.edgesList.push(...edges);
  }

  // Add a visited node to the visited nodes list
  addVisitedNode(node) {
    const newNode = {
      currentPosition: node.currentPosition.slice(),
      edgesList: [...node.edgesList],
      visitedNodesList: [...node.visitedNodesList],
    };

    this.visitedNodesList.push(newNode);
  }

  getVisitedCoords() {
    let coordList = [];
    coordList = this.visitedNodesList.map((visitedNode) => visitedNode.currentPosition);
    return coordList;
  }

}
