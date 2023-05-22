import { renderResults, cleanResults } from "./results.js";
export { showSuccessPopup, closePopup, showResultsPopup, showStartPopup };

//
// SHOW RESULTS POPUP
function showResultsPopup() {
  const popup = document.querySelector(".popup__results");
  const resultsContainer = document.querySelector(".results");
  const popupButtons = popup.querySelector(".popup__buttons");

  revealPopup(popup);
  renderResults();

  const placeholderExists = [...resultsContainer.children].some((child) => child.classList.contains("results__placeholder"));

  if (!placeholderExists) {
    const cleanButtonElement = `
      <button class="button button--light button__results--clean">Clean Results</button>
      `;

    popupButtons.insertAdjacentHTML("beforeend", cleanButtonElement);

    const cleanButton = document.querySelector(".button__results--clean");
    cleanButton.addEventListener("click", cleanResults);
  }
}

//
// START POPUP
function showStartPopup() {
  const popup = document.querySelector(".popup__start");

  revealPopup(popup);
}

//
// SHOW POPUP
function showSuccessPopup(success, moves, seconds) {
  const message = 
    success ? 
    `Hooray🎉🎉🎉 <br>You found all mines in ${seconds} seconds and ${moves} moves!` : 
    `Booooom💥💥💥 <br>Game over. Try again!`;

  const popup = document.querySelector(".popup__success");
  const popupMessage = document.querySelector(".popup__message");

  popupMessage.innerHTML = message;

  revealPopup(popup);
}

//
// REVEAL POPUP
function revealPopup(popup) {
  popup.style.display = "flex";
  popup.style.opacity = 1;

  document.body.style.overflow = "hidden";
}

//
// CLOSE POPUP
function closePopup(selector) {
  const popup = document.querySelector(selector);

  popup.style.display = "none";
  popup.style.opacity = 0;

  document.body.style.overflow = "";
}
