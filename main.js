import createBoard from "./board";

const Gameboard = createBoard();

console.log(Gameboard.checkWinner({mark: 'o'}, {mark: 'x'}));