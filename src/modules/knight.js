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

  // Add a visited node to the visited nodes list
  addVisitedNode(node) {
    const newNode = {
      currentPosition: node.currentPosition.slice(),
      edgesList: [...node.edgesList],
      visitedNodesList: [...node.visitedNodesList],
      endPosition: [...node.endPosition],

    };

    this.visitedNodesList.push(newNode);
  }

  // Convert nodes to coordinates as string
  getVisitedCoords() {
    return this.visitedNodesList.map((node) => node.currentPosition.toString());
  }

}
