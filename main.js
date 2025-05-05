import { createGame } from "./game.js";
import { createPlayer } from "./entities/player.js";
import { createBoard } from "./entities/board.js";
import { createDisplayController } from "./controllers/display.js"
import createPlayerController from "./controllers/player/random.js"

const $playRoundButton = document.querySelector('.play-round-button');
const $resetGameButton = document.querySelector('.reset-game-button');

const p1 = createPlayer('x', 'Danya', createPlayerController());
const p2 = createPlayer('o', 'Danya', createPlayerController());
const gameBoard = createBoard();
const display = createDisplayController(gameBoard, p1, p2);
const game = createGame(p1, p2, gameBoard, display);


game.setOnOver((winner) => {
  $playRoundButton.classList.toggle('inactive', false)
});

$playRoundButton.addEventListener('click', () => {
  $playRoundButton.classList.toggle('inactive', true)
  game.play();
});
