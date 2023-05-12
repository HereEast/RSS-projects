console.log("✅ Board");

//
import { positionFree } from "./utils.js";
//

// Board
function createBoard(size, minesCount) {
  const boardContainer = document.querySelector(".game__board");

  const board = document.createElement("div");
  board.classList.add("board");
  board.style.setProperty("--size", size);

  const grid = createGrid(size, minesCount);

  grid.forEach((row) => {
    row.forEach((element) => {
      board.append(element.button);
    });
  });

  boardContainer.append(board);
}


// Grid
function createGrid(size, minesCount) {
  console.log("Size:", size, " Mines:", minesCount);

  const board = [];
  const minesCoords = getMinesPositions(size, minesCount);

  for (let x = 0; x < size; x++) {
    const row = [];

    for (let y = 0; y < size; y++) {
      const button = document.createElement("button");
      button.classList.add("button__tile");
      button.dataset.status = "hidden";

      const element = { button, x, y, mine: true };

      row.push(element);
    }

    board.push(row);
  }

  console.log(board);
  return board;
}

// Mines coordinates
function getMinesPositions(size, minesCount) {
  const positions = [];

  while (positions.length < minesCount) {
    const pos = {
      x: Math.floor(Math.random(size) * 10),
      y: Math.floor(Math.random(size) * 10)
    };

    if (positionFree(positions, pos)) {
      positions.push(pos);
    }
  }

  console.log("Mines: ", positions);
  return positions;
}

export { createBoard };
