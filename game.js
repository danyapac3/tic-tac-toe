const createGame = (player1, player2, board, display = null) => {
  let onOver = () => {};
  let currentPlayer = player1;
  let isOver = true;
  let firstTurnPlayer = player1;

  const toggledPlayer = (player) => {
    return player === player1 ? player2 : player1
  }  

  const turnHandler = (pos) => {
    isOver = false;
    if (pos) {
      board.setCell(currentPlayer.mark, pos);
    }

    const isFull = !board.getAvailableCells().length;
    const winner = board.getWinner(player1, player2);
    if (!isFull && !winner) {
      currentPlayer.controller.playTurn(board, turnHandler);
    } else {
      winner?.increaseScore();
      isOver = true;
      onOver(winner);
    }

    currentPlayer = toggledPlayer(currentPlayer);
    display.update(board);
  }

  const play = () => {
    if (!isOver) {
      return;
    }
    currentPlayer = firstTurnPlayer;
    firstTurnPlayer = toggledPlayer(firstTurnPlayer);
    board.resetBoard();
    display.update();

    currentPlayer.controller.playTurn(board, turnHandler);
  }

  const reset = () => {
    player1.controller.abort();
    player2.controller.abort();
    player1.resetScore();
    player2.resetScore();

    firstTurnPlayer = player1;
    currentPlayer = player1;
    isOver = true;

    board.resetBoard();
    display.update();
    // onOver();
  }

  const setOnOver = (fn) => {
    if (!(fn instanceof Function)) {
      throw new Error("On over must be a function");
    }

    onOver = fn;
  }

  return { play, reset, setOnOver };
}

export { createGame };
export default createGame ;
