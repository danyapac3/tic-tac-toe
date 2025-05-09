import { createElementFromTemplate } from "../utils/dom.js";

const template = /*html*/`
<dialog class="pick-players-dialog">
  <div class="pick-player-block">
    
  </div>
  <div class="pick-players-dialog__text"></div>
  <button class="pick-players-dialog__ok-button">ok</button>
</dialog>
`.trim();

const renderModal = () => {
  const $modal = createElementFromTemplate(template);
  const $text = $modal.querySelector('.info-dialog__text');
  const $okButton = $modal.querySelector('.info-dialog__ok-button');

  $modal.showModalWithText = (text) => {
    $text.textContent = text;
    $modal.showModal();
  }

  $okButton.addEventListener('click', () => {
    $modal.close();
  });

  return $modal;
}

export default renderModal;