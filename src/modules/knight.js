export default class Knight {
  constructor(startPosition, endPosition) {
    this.currentPosition = startPosition;
    this.edgesList = [];
    this.visitedNodesList = [];
    this.endPosition = endPosition;
  }

  // Return currentPosition coordinates as string
  formatCoords() {
    return this.visitedNodesList.map((node) => node.currentPosition.toString());
  }

}
