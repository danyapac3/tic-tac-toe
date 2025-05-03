export default function controller (board, callback) {
  const cells = board.getAvailableCells();

  if (cells.length === 0)
    throw new Error('There is cells available');

  const cellPos = cells[Math.floor(Math.random() * cells.length)];

  callback(cellPos);
}