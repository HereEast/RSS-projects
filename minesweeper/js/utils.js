export { positionExists, getMinesPositions, getTilePosition };

//
// GET MINES
function getMinesPositions(size, minesCount) {
  const firstTile = document.querySelector("[data-state='number']");
  const positions = [];

  while (positions.length < minesCount) {
    const pos = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size)
    };

    const isFirstTile = pos.x === firstTile.x && pos.y === firstTile.y;

    if (!positionExists(positions, pos) && !isFirstTile) {
      positions.push(pos);
    }
  }

  return positions;
}

//
// GET TILE POS
function getTilePosition(tile) {
  const pos = {
    x: Number(tile.dataset.x),
    y: Number(tile.dataset.y)
  };

  return pos;
}

//
// POSITION EXISTS IN ARRAY
function positionExists(arr, el) {
  const posExists = arr.some((arrElement) => {
    return arrElement.x === el.x && arrElement.y === el.y;
  });

  return posExists;
}
