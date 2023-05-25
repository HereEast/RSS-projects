export { setSound, toggleSound, clickSound, markSound, endGameSound, sounds, openPopupSound };

const clickSound = new Audio("./assets/sounds/click-01.mp3");
const markSound = new Audio("./assets/sounds/click-05.mp3");
const endGameSound = new Audio("./assets/sounds/end-game-sound.mp3");
const openPopupSound = new Audio("./assets/sounds/whoosh.mov");

const sounds = [clickSound, markSound, endGameSound, openPopupSound];

//
// TOGGLE
function toggleSound(sounds) {
  const buttonSound = document.querySelector(".button__toggle-sound");
  const volumeOn = Number(localStorage.getItem("volume"));
  const volume = Number(!volumeOn);

  sounds.forEach((sound) => (sound.volume = volume));
  buttonSound.innerHTML = volume ? "⦿" : "◎";

  localStorage.setItem("volume", volume);
}

//
// SET
function setSound(sounds) {
  const soundButton = document.querySelector(".button__toggle-sound");
  const volume = localStorage.getItem("volume") || "1";

  sounds.forEach((sound) => (sound.volume = Number(volume)));
  soundButton.innerHTML = Number(volume) ? "⦿" : "◎";

  localStorage.setItem("volume", volume);

  console.log("✅ Volume: ", Boolean(Number(volume)));
}
