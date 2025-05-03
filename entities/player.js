const createPlayer = (mark, name, controller) => {
  const playTurn = (board, onTurn) => {
    controller(board, onTurn);
  } 

  return {name, mark, playTurn};
}