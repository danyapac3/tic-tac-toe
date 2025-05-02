import createBoard from "./board.js";

const Gameboard = createBoard();

console.log(Gameboard.checkWinner({mark: 'o'}, {mark: 'x'}));
console.log(Gameboard.getAvailableCells());