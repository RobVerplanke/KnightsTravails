// Create board

export default function createBoard(boardSize) {
  const board = new Array(boardSize);

  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize);
  }

  return board;
}
