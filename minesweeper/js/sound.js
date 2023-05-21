export { setSound, toggleSound };

// TOGGLE
function toggleSound(sounds) {
  const soundButton = document.querySelector(".button__toggle-sound");
  const volumeOn = Number(localStorage.getItem("volume"));
  const volume = Number(!volumeOn);

  sounds.forEach((sound) => (sound.volume = volume));
  soundButton.innerHTML = volume ? "⦿" : "◎";

  localStorage.setItem("volume", volume);
}

// SET
function setSound(sounds) {
  const soundButton = document.querySelector(".button__toggle-sound");
  const volume = localStorage.getItem("volume") || "1";

  sounds.forEach((sound) => (sound.volume = Number(volume)));
  soundButton.innerHTML = Number(volume) ? "⦿" : "◎";

  localStorage.setItem("volume", volume);

  console.log("✅ Volume: ", Boolean(Number(volume)));
}
