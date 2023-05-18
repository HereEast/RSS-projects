export { positionExists, getMinesPositions, getTilePosition, getNearTilesPos, countNearMines };

//
// COUNT NEAR MINES
function countNearMines(tilePos, size, minePositions) {
  const nearTiles = getNearTilesPos(tilePos, size);

  let nearMines = 0;

  nearTiles.forEach((nearTile) => {
    const isMine = positionExists(minePositions, nearTile);
    if (isMine) nearMines += 1;
  });

  return nearMines;
}


//
// NEAR POS
function getNearTilesPos(tilePos, size) {
  let nearTiles = [];

  for (let stepX = -1; stepX <= 1; stepX++) {
    for (let stepY = -1; stepY <= 1; stepY++) {
      const nearTile = { x: tilePos.x + stepX, y: tilePos.y + stepY };

      if (!(tilePos.x === nearTile.x && tilePos.y === nearTile.y) && nearTile.x >= 0 && nearTile.y >= 0 && nearTile.x < size && nearTile.y < size) {
        nearTiles.push(nearTile);
      }
    }
  }

  return nearTiles;
}

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
// GET TILE
// function getTile(tilePos) {

//   const pos = {
//     x: Number(tile.dataset.x),
//     y: Number(tile.dataset.y)
//   };

//   return pos;
// }

//
// POSITION EXISTS IN ARRAY
function positionExists(arr, el) {
  const posExists = arr.some((arrElement) => {
    return arrElement.x === el.x && arrElement.y === el.y;
  });

  return posExists;
}
