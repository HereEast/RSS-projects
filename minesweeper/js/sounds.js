export { playClick };

// PLAY CLICK
function playClick(sound) {
  sound.pause();
  sound.currentTime = 0;

  sound.play();
}
