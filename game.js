const createGame = (player1, player2, board, display = null) => {
  let onOver = () => {};
  let currentPlayer = player1;
  let isOver = true;

  const turnHandler = (pos) => {
    isOver = false;
    currentPlayer = currentPlayer === player1 ? player2 : player1; 
    if (pos) {
      board.setCell(currentPlayer.mark, pos);
    }

    const isFull = !board.getAvailableCells().length;
    const winner = board.getWinner(player1, player2);
    if (!isFull && !winner) {
      currentPlayer.controller.playTurn(board, turnHandler);
    } else {
      winner.increaseScore();
      console.log(winner.getScore());
      isOver = true;
      onOver(winner);
    }

    display.update(board);
  }

  const play = () => {
    if (!isOver) {
      return;
    }
    currentPlayer = player1;
    board.resetBoard();
    display.update();

    currentPlayer.controller.playTurn(board, turnHandler);
  }

  const setOnOver = (fn) => {
    if (!(fn instanceof Function)) {
      throw new Error("On over must be a function");
    }

    onOver = fn;
  }

  return { play, setOnOver };
}

export { createGame };
export default createGame ;
