console.log("✅ Board");

//
// BOARD
function createBoard(size, minesCount) {
  const boardContainer = document.querySelector(".board__container");

  [...boardContainer.children].forEach((child) => child.remove());

  const board = document.createElement("div");
  board.classList.add("board");
  board.style.setProperty("--size", size);

  const grid = createGrid(size, minesCount);

  grid.forEach((row) => {
    row.forEach((element) => {
      board.append(element.tile);
    });
  });

  boardContainer.append(board);
}

//
// GRID
function createGrid(size, minesCount) {
  const board = [];
  // const minePositions = getMinesPositions(size, minesCount);

  for (let x = 0; x < size; x++) {
    const row = [];

    for (let y = 0; y < size; y++) {
      const tile = document.createElement("button");
      tile.classList.add("button__tile");

      tile.dataset.state = "hidden";
      tile.dataset.x = y;
      tile.dataset.y = x;

      // const tilePos = { x, y };
      // const isMine = positionExists(minePositions, tilePos);

      const tileData = {
        tile: tile,
        x: x,
        y: y,
        // mine: isMine
      };

      row.push(tileData);
    }

    board.push(row);
  }
  
  // console.log("💣 Mines: ", minePositions);
  // console.log("1️⃣ Board: ", board);

  return board;
}

export { createBoard };
