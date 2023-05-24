export { disableSettings, enableSettings, revealTile, cleanTiles, setInputValue, setSizeButton, getName, deleteSavedGame };

//
// DELETE SAVED
function deleteSavedGame() {
  localStorage.removeItem("game");
}

// SET INPUT
function setInputValue(minesCount) {
  const input = document.querySelector(".input");
  input.value = minesCount;
}

// SET SIZE BUTTON
function setSizeButton(size) {
  const buttonsSize = document.querySelectorAll(".button__size");
  const button = document.querySelector(`[data-size='${size}']`);

  buttonsSize.forEach((button) => button.classList.remove("button__size--selected"));
  button.classList.add("button__size--selected");
}

//
// REVEAL TILE
function revealTile(tile, count) {  
  if (!count) count = "";

  tile.textContent = count;
  tile.dataset.state = "number";

  if (count === 1) {
    tile.classList.add("color--blue");
  } else if (count === 2) {
    tile.classList.add("color--green");
  } else if (count === 3) {
    tile.classList.add("color--yellow");
  } else if (count > 3) {
    tile.classList.add("color--red");
  } else return;
}

//
// CLEAN TILES
function cleanTiles(tiles) {
  tiles.forEach((tile) => {
    tile.dataset.state = "hidden";
    tile.textContent = "";
  });
}

//
// DISABLE SETTINGS
function disableSettings(buttonsSize, buttonOk, input) {
  buttonsSize.forEach((button) => {
    button.disabled = true;
  });

  buttonOk.disabled = true;
  input.disabled = true;
}

//
// ENABLE SETTINGS
function enableSettings(buttonsSize, buttonOk, input) {
  buttonsSize.forEach((button) => {
    button.disabled = false;
  });

  buttonOk.disabled = false;
  input.disabled = false;
}

//
// GET NAME
function getName() {
  const names = ["Godzilla", "Edward Cullin", "Cinderella", "Peter Parker", "Harry Potter", "Jack Sparrow", "Gandalf", "Ellen Ripley", "Vito Corleone", "Katniss Everdeen"];

  const idx = Math.floor(Math.random() * 9);

  return names[idx];
}
