const $gameboard = document.querySelector(".game-board");
const $cells = document.querySelectorAll(".game-board__cell");


const createHumanPlayerController = () => {
  let isMyTurn = false;
  let thisTurn = null;

  $gameboard.addEventListener('click', ({target}) => {
    if (
      !target.classList.contains('game-board__cell')
      || !isMyTurn
      || !thisTurn
    ) {
      return;
    }

    const availableCells = thisTurn.board.getAvailableCells();
    const targetIndex = Array.from($cells).indexOf(target);
    const targetPos = {x: targetIndex % 3, y: Math.floor(targetIndex / 3)}; 
    
    if (!availableCells.some(e => {
      return JSON.stringify(e) === JSON.stringify(targetPos);
    })) {
      return
    }

    thisTurn.onTurn(targetPos);
    thisTurn = null;
    isMyTurn = false;
  });
  
  const playTurn = (board, onTurn) => {
    isMyTurn = true;
    thisTurn = { board, onTurn };
  }

  const abort = () => {
    isMyTurn = false;
    thisTurn = null;
  }

  return { playTurn, abort, name: "human" };
}

export default createHumanPlayerController;
export { createHumanPlayerController };