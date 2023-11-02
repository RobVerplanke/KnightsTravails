/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */

import isOnBoard from './modules/board.js';

function knightMoves([startX, startY], [endX, endY]) {
  const startingSquare = [startX, startY];
  const endSquare = [endX, endY];

  const validStartSquare = startingSquare.every(isOnBoard());
  const validEndSquare = endSquare.every(isOnBoard());

  if (validStartSquare && validEndSquare) {
    console.log('valid');
    // const knight = new Knight(validStart, validEnd);
  } else {
    console.log('not valid');
  }
}

knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]]
