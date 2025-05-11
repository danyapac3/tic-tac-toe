import { createElementFromTemplate } from "../utils/dom.js";
import createRandomPlayerController from "../controllers/player/random.js";
import createHumanPlayerController from "../controllers/player/human.js";

const template = /*html*/`
<dialog class="set-players-modal">
  <div class="set-players-modal__player-form player-form">
    <div class="player-name-group">
      <div class="player-name-group__label">Name:</div>
      <input class="player-name-group__input" type="text" placeholder="Danya">
    </div>

    <div class="player-type-group radio-group">
      <input type="radio" name="player-1-type" value="human">
      <input type="radio" name="player-1-type" value="random" checked>
      <input type="radio" name="player-1-type" value="computer">
    </div>

    <div class="player-mark-group radio-group">
      <input type="radio" name="player-1-mark" value="x" checked>
      <input type="radio" name="player-1-mark" value="o">
    </div>
  </div>

  <div class="set-players-modal__player-form player-form">
    <div class="player-name-group">
      <div class="player-name-group__label">Name:</div>
      <input class="player-name-group__input" type="text" placeholder="Danya">
    </div>

    <div class="player-type-group radio-group">
      <input type="radio" name="player-2-type" value="human">
      <input type="radio" name="player-2-type" value="random" checked>
      <input type="radio" name="player-2-type" value="computer">
    </div>

    <div class="player-mark-group radio-group">
      <input type="radio" name="player-2-mark" value="x">
      <input type="radio" name="player-2-mark" value="o" checked>
    </div>
  </div>

  <button class="set-players-button">select</button>
</dialog>
`.trim();

const renderModal = () => {
  let player1, player2 = null;

  const $modal = createElementFromTemplate(template);
  const $setPlayersButton = $modal.querySelector(".set-players-button");
  const $markGroups = Array.from($modal.querySelectorAll('.player-mark-group'));
  const $playerForms = Array.from($modal.querySelectorAll('.player-form'));
  const [ $markGroup1, $markGroup2 ] = $markGroups;
  const [$playerForm1, $playerForm2] = $playerForms;

  const toggleMarkGroup = ($markGroup) => {
    const $unchecked = Array.from($markGroup.querySelectorAll('input[type="radio"]'))
      .filter($elem => !$elem.checked)[0];
    $unchecked.checked = true;
  };

  const setPlayerWithForm = ($playerForm, player) => {
    const getChecked = (arr) => Array.from(arr).filter(elem => elem.checked)[0] || null;

    const $nameInput = $playerForm.querySelector('.player-name-group__input');
    const $checkedTypeRadio = getChecked($playerForm.querySelectorAll('.player-type-group input[type="radio"]'));
    const $checkedMarkRadio = getChecked($playerForm.querySelectorAll('.player-mark-group input[type="radio"]'));

    const controllerFactories = {
      "human": createHumanPlayerController,
      "random": createRandomPlayerController,
      "computer": null,
    };

    player.name = $nameInput.value;
    player.mark = $checkedMarkRadio.value;
    player.controller = controllerFactories[$checkedTypeRadio.value]();
  }

  $setPlayersButton.addEventListener('click', (e) => {
    setPlayerWithForm($playerForm1, player1);
    setPlayerWithForm($playerForm2, player2);
    $modal.close();
  });

  Array.from($markGroup1.children).forEach($radio => $radio.addEventListener('change', () => {
    toggleMarkGroup($markGroup2);
  }));

  Array.from($markGroup2.children).forEach($radio => $radio.addEventListener('change', () => {
    toggleMarkGroup($markGroup1);
  }));

  $modal.openModalWithPlayers = (p1, p2) => {
    player1 = p1;
    player2 = p2;
    $modal.showModal();
  };

  return $modal;
}

export default renderModal;