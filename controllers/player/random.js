const createController = () => {
  const aborted = false;
  let timeoutID;

  const playTurn = (board, onTurn) => {
    if (aborted) {
      aborted = false;
      return;
    }
    const cells = board.getAvailableCells();
  
    const cellPos = cells.length 
      ? cells[Math.floor(Math.random() * cells.length)]
      : null
  
    setTimeout(() => onTurn(cellPos), 500);
  }

  const abort = () => {
    clearTimeout(timeoutID)
    aborted = true
  }

  return { playTurn, abort };
}

export default createController;