const $player1Name = document.querySelector(".player1-board .player-board__name");
const $player2Name = document.querySelector(".player2-board .player-board__name");
const $player1Score = document.querySelector(".player1-board .player-board__score");
const $player2Score = document.querySelector(".player2-board .player-board__score");
const $gameBoard = document.querySelector(".game-board");
const $cells = $gameBoard.querySelectorAll(".game-board__cell");

const createDisplayController = (board, player1, player2) => {
  const reset = () => {
    Array.from($cells).forEach($cell => {
      $cell.dataset.mark = "";
    });
  }

  const displayNames = () => {
    $player1Name.textContent = player1.name;
    $player2Name.textContent = player2.name;
  }

  const displayScore = () => {
    $player1Score.textContent = player1.getScore();
    $player2Score.textContent = player2.getScore();
  }

  const update = () => {
    displayScore()
    board.getBoard().flat().forEach((cell, index) => {
        $cells[index].dataset.mark = cell;
    });
  }
  
  return { update, reset }
};


export { createDisplayController };