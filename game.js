const createGame = (player1, player2, board, display = null, onOver = () => {}) => {
  let currentPlayer = player1;

  const turnHandler = (pos) => {
    currentPlayer = currentPlayer === player1 ? player2 : player1; 
    if (pos) {
      board.setCell(currentPlayer.mark, pos);
    }

    if (display !== null) {
      display.update(board);
    }

    const isFull = !board.getAvailableCells().length;
    const winner = board.getWinner(player1, player2);
    if (!isFull && !winner) {
      currentPlayer.playTurn(board, turnHandler);
    } else {
      onOver(winner);
    }
  }

  const play = () => {
    currentPlayer = player1;
    board.resetBoard();
    display.update();

    currentPlayer.playTurn(board, turnHandler);
  }

  return { play };
}

export { createGame };
export default createGame ;
