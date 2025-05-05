export default function controller (board, callback) {
  const cells = board.getAvailableCells();

  const cellPos = cells.length 
    ? cells[Math.floor(Math.random() * cells.length)]
    : null

  setTimeout(() => callback(cellPos), 500);
}