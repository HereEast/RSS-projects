import { toggleMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists } from "./js/utils.js";

let size = 8;
let minesCount = 4;
let moves = 0;

//
createPage();
createBoard(size, minesCount);

const minePositions = getMinesPositions(size, minesCount);
console.log("Mines: ", minePositions);

//
// ELEMENTS
const board = document.querySelector(".board");
const buttonMode = document.querySelector(".button__toggle-mode");
const buttons = Array.from(document.querySelectorAll(".button__tile"));
const movesElement = document.querySelector(".moves");

//
// EVENTS
buttonMode.addEventListener("click", toggleMode);

buttons.forEach((button) => {
  button.addEventListener("click", handleLeftClick);
  button.addEventListener("contextmenu", handleRightClick);
});

//
//

//
// LEFT CLICK
function handleLeftClick(e) {
  const tile = e.target;
  const tileState = tile.dataset.state;

  if (tileState !== "hidden") return;

  openTile(tile);
  updateMovesCount();
}

//
// RIGHT CLICK
function handleRightClick(e) {
  e.preventDefault();

  const tile = e.target;

  markTile(tile);
  updateMovesCount();
}

//
// NEAR TILES
function getNearTiles(tile) {
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
// OPEN TILE
function openTile(tile) {

  const clickedTile = {
    x: Number(tile.dataset.x),
    y: Number(tile.dataset.y)
  };

  const isMine = positionExists(minePositions, clickedTile);
  console.log("Is mine: ", isMine);

  const nearTiles = getNearTiles(clickedTile);

  if(isMine) {
    tile.dataset.state = "mine";
  } else {
    let minesCount = 0;

    nearTiles.forEach((nearTile) => {
      const isMine = positionExists(minePositions, nearTile);
      if(isMine) minesCount += 1;
    })

    if (minesCount) {
      tile.textContent = minesCount;
      tile.dataset.state = "number";
    } else {
      tile.dataset.state = "number";
    }
  }
}


//
// MARK TILES
function markTile(tile) {
  const tileState = tile.dataset.state;

  if (tileState === "marked") tile.dataset.state = "hidden";
  else if (tileState === "hidden") tile.dataset.state = "marked";
  else return;
}

//
// UPDATE MOVES
function updateMovesCount() {
  moves += 1;
  movesElement.textContent = moves;
}
