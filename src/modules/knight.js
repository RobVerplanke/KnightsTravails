export default class Knight {
  constructor(start, end) {
    this.visitedSquares = [];
    this.startingSquare = start;
    this.endSquare = end;
  }

  // getPossibleMoves() {

  // calculate possible moves
  // const possibleMoves = [
  //   [[this.startingSquare[0] + 1], [this.startingSquare[1] + 2]],
  //   [[this.startingSquare[0] + 1], [this.startingSquare[1] - 2]],
  //   [[this.startingSquare[0] + 2], [this.startingSquare[1] + 1]],
  //   [[this.startingSquare[0] + 2], [this.startingSquare[1] - 1]],
  //   [[this.startingSquare[0] - 1], [this.startingSquare[1] + 2]],
  //   [[this.startingSquare[0] - 1], [this.startingSquare[1] - 2]],
  //   [[this.startingSquare[0] - 2], [this.startingSquare[1] + 1]],
  //   [[this.startingSquare[0] - 2], [this.startingSquare[1] - 1]],
  // ];

  // check if coordinates are not off board

}

// moveToSquare(square) {
//   const selectedSquare = square;

// }
// }
