export { positionExists, getMinesPositions, getTilePosition, getNearTiles, getNearTilesPos, countNearMines };

//
// NEAR TILES
function getNearTiles(tiles, tile, size) {
  const tilePos = getTilePosition(tile);

  let nearTiles = [];

  for (let stepX = -1; stepX <= 1; stepX++) {
    for (let stepY = -1; stepY <= 1; stepY++) {
      const x = tilePos.x + stepX;
      const y = tilePos.y + stepY;

      const nearPos = { x: x, y: y };

      if (tileExists(tilePos, nearPos, size)) {
        const nearTile = tiles.find((tile) => {
          return Number(tile.dataset.x) === nearPos.x && Number(tile.dataset.y) === nearPos.y;
        });

        nearTiles.push(nearTile);
      }
    }
  }

  return nearTiles;
}

//
// COUNT NEAR MINES
function countNearMines(tile, minePositions, size) {
  const tilePos = getTilePosition(tile);
  const nearTilesPos = getNearTilesPos(tilePos, size);

  let nearMines = 0;

  nearTilesPos.forEach((tilePos) => {
    const isMine = positionExists(minePositions, tilePos);
    if (isMine) nearMines += 1;
  });

  return nearMines;
}


//
// NEAR POS
function getNearTilesPos(tilePos, size) {
  let nearPositions = [];

  for (let stepX = -1; stepX <= 1; stepX++) {
    for (let stepY = -1; stepY <= 1; stepY++) {
      const x = tilePos.x + stepX;
      const y = tilePos.y + stepY;

      const nearPos = { x: x, y: y };

      if (tileExists(tilePos, nearPos, size)) {
        nearPositions.push(nearPos);
      }
    }
  }

  return nearPositions;
}

//
// TILE EXISTS
function tileExists(tilePos, nearPos, size) {
  const clickedTile = tilePos.x === nearPos.x && tilePos.y === nearPos.y;
  const withinBoard = nearPos.x >= 0 && nearPos.y >= 0 && nearPos.x < size && nearPos.y < size;

  return !clickedTile && withinBoard;
}

//
// GET MINES
function getMinesPositions(minesCount, size) {
  const firstTile = document.querySelector("[data-state='number']");
  const firstTilePos = getTilePosition(firstTile);

  const mines = [];

  while (mines.length < minesCount) {

    const minePos = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size)
    };

    const isFirstTile = minePos.x === firstTilePos.x && minePos.y === firstTilePos.y;

    if (!positionExists(mines, minePos) && !isFirstTile) {
      mines.push(minePos);
    }
  }

  return mines;
}

//
// GET TILE POS
function getTilePosition(tile) {

  const tilePos = {
    x: Number(tile.dataset.x),
    y: Number(tile.dataset.y)
  };

  return tilePos;
}

//
// POSITION EXISTS
function positionExists(positions, tilePos) {  
  const posExists = positions.some((pos) => {
    return pos.x === tilePos.x && pos.y === tilePos.y;
  });

  return posExists;
}
