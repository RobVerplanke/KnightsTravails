/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */

import knightMoves from './modules/board.js';

const startingNode = [0, 0];
const endNode = [3, 3];

knightMoves(startingNode, endNode); // [[0,0],[2,1],[3,3]]
