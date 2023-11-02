/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */

import isOnBoard from './modules/board.js';

function knightMoves([startX, startY], [endX, endY]) {
  const startingSquare = [startX, startY];
  const endSquare = [endX, endY];

  // Validate coordinates
  if (isOnBoard(startingSquare[0]) && isOnBoard(startingSquare[1])) {
    console.log('valid startingpoint');
  } else {
    console.log('not a valid startingpoint');
  }

  if (isOnBoard(endSquare[0]) && isOnBoard(endSquare[1])) {
    console.log('valid endpoint');
  } else {
    console.log('not a valid endpoint');
  }

}

knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]]
