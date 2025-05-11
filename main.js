import { createGame } from "./game.js";
import { createPlayer } from "./entities/player.js";
import { createBoard } from "./entities/board.js";
import { createDisplayController } from "./controllers/display.js";
import { createRandomPlayerController } from "./controllers/player/random.js";
import { createHumanPlayerController } from "./controllers/player/human.js";
import renderInfoModal from "./components/info-modal.js";
import renderSetPlayersModal from "./components/select-players-modal.js";

const p1 = createPlayer('x', 'Player1', createRandomPlayerController());
const p2 = createPlayer('o', 'Player2', createHumanPlayerController());
const gameBoard = createBoard();
const display = createDisplayController(gameBoard, p1, p2);
const game = createGame(p1, p2, gameBoard, display);

const $root = document.querySelector('.root');
const $infoModal = renderInfoModal();
const $setPlayersModal = renderSetPlayersModal();
const $playRoundButton = document.querySelector('.play-round-button');
const $resetGameButton = document.querySelector('.reset-game-button');

display.updateNames();

$root.appendChild($infoModal);
$root.appendChild($setPlayersModal);
$setPlayersModal.openModalWithPlayers(p1, p2);

$setPlayersModal.addEventListener('close', display.updateNames);
$playRoundButton.addEventListener('click', game.play);
$resetGameButton.addEventListener('click', game.reset);
game.setOnOver((winner) => { 
  $infoModal.showModalWithText(winner ? `${winner.name} won!!!` : 'Draw!!!');
});

