const createPlayer = (mark, name, controller) => {
  const playTurn = (board, onTurn) => {
    controller(board, onTurn);
  } 

  return {name, mark, playTurn};
}

export default createPlayer
export { createPlayer }