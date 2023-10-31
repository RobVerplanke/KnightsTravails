/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import Board from './modules/board.js';
// import Knight from './modules/knight.js';
// import Knight from './modules/knight.js';

const board = new Board();
// const knight = new Knight();

function knightMoves([startX, startY], [endX, endY]) {
  const startingSquare = [startX, startY];
  const endSquare = [endX, endY];

  const validStartSquare = startingSquare.every(validateSquares);
  const validEndSquare = endSquare.every(validateSquares);

  if (validStartSquare && validEndSquare) {
    console.log('valid');
    // const knight = new Knight(validStart, validEnd);
  } else {
    console.log('not valid');
  }
}

function validateSquares(square) {
  return (square > -1 && square < (board.size + 1));
}

knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]]
