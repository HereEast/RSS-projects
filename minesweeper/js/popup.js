export { showPopup, closePopup };


//
// SHOW POPUP
function showPopup(success, moves, seconds) {
  const message = success ? 
    `Hooray🎉🎉🎉 <br>You found all mines in ${seconds} seconds and ${moves} moves!` :
    `Booooom💥💥💥 <br>Game over. Try again!`;

  const popup = document.querySelector(".popup");
  const popupMessage = document.querySelector(".popup__message");

  popupMessage.innerHTML = message;

  popup.style.display = "flex";
  popup.style.opacity = 1;

  document.body.style.overflow = "hidden";
}

//
// CLOSE POPUP
function closePopup() {
  const popup = document.querySelector(".popup");
  const popupMessage = document.querySelector(".popup__message");

  popupMessage.textContent = "";

  popup.style.display = "none";
  popup.style.opacity = 0;

  document.body.style.overflow = "";
}
