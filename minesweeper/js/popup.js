import { renderResults, cleanResults } from "./results.js";
export { showPopup, closePopup, showResultsPopup, showStartPopup };

//
// SHOW RESULTS POPUP
function showResultsPopup() {
  const popup = document.querySelector(".popup__results");
  const resultsContainer = document.querySelector(".results");
  const popupButtons = popup.querySelector(".popup__buttons");

  popup.style.display = "flex";
  popup.style.opacity = 1;

  document.body.style.overflow = "hidden";

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

  popup.style.display = "flex";
  popup.style.opacity = 1;

  document.body.style.overflow = "hidden";

  console.log("Start popup...");
}

//
// SHOW POPUP
function showPopup(success, moves, seconds) {
  const message = success ? 
    `Hooray🎉🎉🎉 <br>You found all mines in ${seconds} seconds and ${moves} moves!` :
    `Booooom💥💥💥 <br>Game over. Try again!`;

  const popup = document.querySelector(".popup__end");
  const popupMessage = document.querySelector(".popup__message");

  popupMessage.innerHTML = message;

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
