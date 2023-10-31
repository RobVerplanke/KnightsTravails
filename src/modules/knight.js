export default class Knight {
  constructor(start, end) {
    this.visitedSquares = [];
    this.possibleMoves = [];
    this.startingSquare = start;
    this.endSquare = end;
  }

  getPossibleMoves() {

    this.possibleMoves = [
      [[this.startingSquare[0] + 1], [this.startingSquare[1] + 2]],
      [[this.startingSquare[0] + 1], [this.startingSquare[1] - 2]],
      [[this.startingSquare[0] + 2], [this.startingSquare[1] + 1]],
      [[this.startingSquare[0] + 2], [this.startingSquare[1] - 1]],
      [[this.startingSquare[0] - 1], [this.startingSquare[1] + 2]],
      [[this.startingSquare[0] - 1], [this.startingSquare[1] - 2]],
      [[this.startingSquare[0] - 2], [this.startingSquare[1] + 1]],
      [[this.startingSquare[0] - 2], [this.startingSquare[1] - 1]],
    ];

  }

  // moveToSquare(square) {
  //   const selectedSquare = square;

  // }
}
