export default class Knight {
  constructor(startPosition, endPosition) {
    this.currentPosition = startPosition;
    this.edgesList = [];
    this.visitedNodesList = [];
    this.endPosition = endPosition;
  }
}
