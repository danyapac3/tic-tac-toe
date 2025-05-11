const createComputerPlayerController = () => {
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

  return { playTurn, abort, name: "computer" };
}

export default createComputerPlayerController;
export { createComputerPlayerController };