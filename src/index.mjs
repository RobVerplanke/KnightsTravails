/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
// import Board from './modules/board.js';
// import Knight from './modules/knight.js';

// e.g. knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]
function knightMoves([startX, startY], [endX, endY]) {
  const startingSquare = [startX, startY];
  const endSquare = [endX, endY];

  const validStart = startingSquare.every(validateSquares);
  const validEnd = endSquare.every(validateSquares);

  // check if coordinates don't go off the board (8 x 8)
  function validateSquares(square) {
    return (square > -1 && square < 9);
  }

  if (validStart && validEnd) {
    console.log('valid');
    // const knight = new Knight(validStart, validEnd);
  } else {
    console.log('not valid');
  }
}

knightMoves([0, 0], [3, 3]);
