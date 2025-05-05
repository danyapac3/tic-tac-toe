const createController = () => {
  const playTurn = (board, callback) => {
    const cells = board.getAvailableCells();
  
    const cellPos = cells.length 
      ? cells[Math.floor(Math.random() * cells.length)]
      : null
  
    setTimeout(() => callback(cellPos), 500);
  }

  return { playTurn };
}

export default createController;