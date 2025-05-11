const createRandomPlayerController = () => {
  let timeoutID;

  const playTurn = (board, onTurn) => {
    const cells = board.getAvailableCells();
  
    const cellPos = cells.length 
      ? cells[Math.floor(Math.random() * cells.length)]
      : null;
  
    timeoutID = setTimeout(() => onTurn(cellPos), 200);
  }

  const abort = () => {
    clearTimeout(timeoutID);
  }

  return { playTurn, abort, name: "random" };
}

export default createRandomPlayerController;
export { createRandomPlayerController };