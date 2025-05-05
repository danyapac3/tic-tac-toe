const $player1Name = document.querySelector(".player1-board .player-board__name");
const $player2Name = document.querySelector(".player2-board .player-board__name");
const $player1Score = document.querySelector(".player1-board .player-board__score");
const $player2Score = document.querySelector(".player2-board .player-board__score");
const $gameBoard = document.querySelector(".game-board");
const $cells = $gameBoard.querySelectorAll(".game-board__cell");

const createDisplayController = (board, player1, player2) => {
  const update = () => {
    board.getBoard().flat().forEach((cell, index) => {
        $cells[index].dataset.mark = cell;
    });
  }

  return { update }
};


export { createDisplayController };