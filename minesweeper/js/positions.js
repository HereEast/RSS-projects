export { positionExists, getMinesPositions, getTilePosition, getNearTiles, countNearMines };

//
// COUNT NEAR MINES
function countNearMines(tile, size, minePositions) {
  const nearTiles = getNearTiles(tile, size);

  let nearMines = 0;

  nearTiles.forEach((nearTile) => {
    const isMine = positionExists(minePositions, nearTile);
    if (isMine) nearMines += 1;
  });

  return nearMines;
}


//
// NEAR TILES
function getNearTiles(tile, size) {
  let nearTiles = [];

  for (let stepX = -1; stepX <= 1; stepX++) {
    for (let stepY = -1; stepY <= 1; stepY++) {
      const nearTile = { x: tile.x + stepX, y: tile.y + stepY };

      if (!(tile.x === nearTile.x && tile.y === nearTile.y) && 
        nearTile.x >= 0 && nearTile.y >= 0 && nearTile.x < size && nearTile.y < size) {
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
// POSITION EXISTS IN ARRAY
function positionExists(arr, el) {
  const posExists = arr.some((arrElement) => {
    return arrElement.x === el.x && arrElement.y === el.y;
  });

  return posExists;
}
