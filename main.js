import { createGame } from "./game.js";
import { createPlayer } from "./entities/player.js";
import { createBoard } from "./entities/board.js";
import playerController from "./controllers/player/random.js"

const createDisplay = (board) => ({update() {
  let string = "";
  
  board.getBoard().forEach((row, i) => {
    row.forEach((mark, i) => {
      string += (i === 0 ? "" : " | ") + (mark ? mark : " ");
    })
    string += "\n";
    string += i !== 2 ? "---------\n" : "";
  });
}});

const p1 = createPlayer('x', 'Danya', playerController);
const p2 = createPlayer('o', 'Danya', playerController);
const gameBoard = createBoard();
const display = createDisplay(gameBoard);
const game = createGame(p1, p2, gameBoard, display);
game.play();