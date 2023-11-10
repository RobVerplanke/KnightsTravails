/* eslint-disable max-len */
/* eslint-disable indent */

class Board {
  constructor(size = 8) {
    this.size = size;
  }

  // create a 2D array
  newBoard() {
    const newBoard = [];

    for (let i = 0; i <= this.size; i++) {
      newBoard[i] = [i];
      for (let j = 0; j <= this.size; j++) {
        newBoard[i][j] = [j];
      }
    }

    return newBoard;
    }

}

const Board1 = new Board();

console.log(Board1.newBoard());

export default function knightMoves(start, end) {
  console.log('start function knightMoves');

  // check if coords are valid before using them:
    // check if each number is between -1 and 9 (0-8 is valid),
    // or check if coords exists in a size/dimensions property of the board object/class

  // Visit node
  // calculate and store all possible moves of the node to a property (node or board?) or a list possibleMoves
  // visit possible next move
  // add (the first and) visited node to a property (node or board?) or a list visititedNodes
  // repeat these steps until end node is reached

  // use BFS to find shortest path

}
