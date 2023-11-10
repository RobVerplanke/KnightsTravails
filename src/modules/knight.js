export default class Knight {
  constructor(startPosition) {
    this.startPosition = startPosition;
    this.visitedNodesList = [];
  }

  move(newPosition) {
    // check if new position is valid

    this.startPosition = newPosition;
  }
}
