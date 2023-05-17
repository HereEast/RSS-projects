export { disableSettings, enableSettings, revealTile, cleanTiles };

//
// REVEAL TILE
function revealTile(tile, count = "") {
  console.log(tile);
  
  tile.textContent = count;
  tile.dataset.state = "number";

  if (count === 1) {
    tile.classList.add("color--blue");
  }

  if (count === 2) {
    tile.classList.add("color--green");
  }

  if (count === 3) {
    tile.classList.add("color--yellow");
  }

  if (count > 3) {
    tile.classList.add("color--red");
  }
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
