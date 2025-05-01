import { createArray } from './utils/array.js';

console.clear();

const Gameboard = (() => {
  const columns = 3;
  const rows = 3;
  let board = null;

  const getBoard = () => board;

  const resetBoard = () => {
    board = createArray(rows).map(() => createArray(columns, ''));
  };

  const isPosCorrect = ({x, y}) => x >= columns || x < 0 || y >= rows || y < 0;

  const setCell = (mark, pos) => {
    if (isPosCorrect(pos)) throw new Error('pos is out of bounds');

    board[pos.y][pos.x] = mark;
  }

  const getCell = (pos) => {
    if (isPosCorrect(pos)) throw new Error('pos is out of bounds');

    return board[pos.y][pos.x];
  };

  const checkWinner = (player1, player2) => {
    const players = [player1, player2];
    const patterns = [
      // row patterns
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
      [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}],
      // column patterns
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
      [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
      [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],
      // diagonal patterns
      [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
      [{x: 2, y: 2}, {x: 1, y: 1}, {x: 0, y: 0}],
    ];

    for (let player of players) {
      const isWinner = patterns.some(pattern => {
        return pattern.every((pos) => {
          return getCell(pos) === player.mark;
        });
      });

      if (isWinner)
        return player;
    }

    return null;
  }

  resetBoard();

  return { getBoard, resetBoard, checkWinner, setCell, getCell, size: {width: columns, height: rows} };
})();

Gameboard.checkWinner()