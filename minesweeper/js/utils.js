export { disableSettings, enableSettings, revealTile, cleanTiles, setInputValue, setSizeButton };

// SET INPUT
function setInputValue(minesCount) {
  const input = document.querySelector(".input");
  input.value = minesCount;
}

// SET SIZE BUTTON
function setSizeButton(size) {
  const button = document.querySelector(`[data-size='${size}']`);
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
// GET BOARD SIZE
function getSize() {
  const tilesCount = Array.from(document.querySelectorAll(".button__tile")).length;
  return Math.sqrt(tilesCount);
}
