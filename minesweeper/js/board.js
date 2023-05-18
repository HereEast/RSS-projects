console.log("✅ Board");

//
// BOARD
function createBoard(size) {
  const boardContainer = document.querySelector(".board__container");

  [...boardContainer.children].forEach((child) => child.remove());

  const board = document.createElement("div");
  board.classList.add("board");
  board.style.setProperty("--size", size);

  const grid = createGrid(size);

  grid.forEach((row) => {
    row.forEach((element) => {
      board.append(element.tile);
    });
  });

  boardContainer.append(board);
}

//
// GRID
function createGrid(size) {
  const grid = [];

  for (let x = 0; x < size; x++) {
    const row = [];

    for (let y = 0; y < size; y++) {
      const tile = document.createElement("button");
      tile.classList.add("button__tile");

      tile.dataset.state = "hidden";
      tile.dataset.x = y;
      tile.dataset.y = x;

      const tileData = {
        tile: tile,
        x: x,
        y: y,
      };

      row.push(tileData);
    }

    grid.push(row);
  }

  return grid;
}

export { createBoard };
