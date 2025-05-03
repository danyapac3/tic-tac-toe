import createBoard from "./entities/board.js";
import createPlayer from "./entities/player.js";
import playerController from "./controllers/player/random.js";

console.clear();

const createGame = (player1, player2, board) => {
  let currentPlayer = player1;

  const turnHandler = (pos) => {
    currentPlayer = currentPlayer === player1 ? player2 : player1; 
    if (pos) {
      board.setCell(currentPlayer.mark, pos);
    }
    
    console.log(board.getString());
    const isFull = !board.getAvailableCells().length;
    if (!isFull) {
      currentPlayer.playTurn(board, turnHandler);
    }

  }
  currentPlayer.playTurn(board, turnHandler);
}

const p1 = createPlayer('x', 'Danya', playerController);
const p2 = createPlayer('o', 'Danya', playerController);
const gameBoard = createBoard();
const game = createGame(p1, p2, gameBoard);
