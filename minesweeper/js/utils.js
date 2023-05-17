export { isSuccess, disableSettings, enableSettings };

//
// CHECK SUCCESS
function isSuccess(tiles, minesCount) {
  const closedTiles = tiles.filter((tile) => {
    return tile.dataset.state === "hidden" || tile.dataset.state === "marked";
  });

  return closedTiles.length === minesCount;
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