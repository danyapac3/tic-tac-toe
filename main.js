console.clear();

const Gameboard = (() => {
  const width = 3;
  const height = 3;
  let board = null;

  const getBoard = () => board;

  const resetBoard = () => {
    board = [["", "", ""],["", "", ""],["", "", ""]];
    // board = Array(height).fill(Array(width).fill(''));
  };

  const isPosCorrect = ({x, y}) => x >= width || x < 0 || y >= height || y < 0;

  const setCell = (mark, pos) => {
    if (isPosCorrect(pos)) throw new Error('pos is out of bounds');

    board[pos.y][pos.x] = mark;
  }

  const getCell = (pos) => {
    if (isPosCorrect(pos)) throw new Error('pos is out of bounds');

    return board[pos.y][pos.x];
  };

  resetBoard();

  return { getBoard, resetBoard, setCell, getCell, size: {width, height} };
})();

console.log(Gameboard);