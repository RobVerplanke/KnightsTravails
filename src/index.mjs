/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
// import Board from './modules/board.js';
// import Knight from './modules/knight.js';

function knightMoves([startX, startY], [endX, endY]) { // e.g. knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]
  const startingSquare = [startX, startY];
  const endSquare = [endX, endY];

  const validStart = startingSquare.every(checkSquares);
  const validEnd = endSquare.every(checkSquares);

  // check if coordinates don't go off the board (8 x 8)
  function checkSquares(square) {
    return (square > -1 && square < 9);
  }

  if (validStart && validEnd) {
    console.log('valid');
  } else {
    console.log('not valid');
  }
}

knightMoves([1, 1], [1, 2]);

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }
