import { toggleMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists, getTilePosition } from "./js/utils.js";
import { endGame, closePopup } from "./js/popup.js";

let size = 3;
let minesCount = 2;

let moves = 0;
let seconds = 0;
let flags = 0;
let remainedMines = minesCount;

let timerId;

let gameStarted = false;
let success;

//
createPage();
createBoard(size, minesCount);

let minePositions = [];

//
// 
const buttonPlay = document.querySelector(".button__play");
const buttonStop = document.querySelector(".button__stop");
const buttonMode = document.querySelector(".button__toggle-mode");
const tiles = Array.from(document.querySelectorAll(".button__tile"));

const buttonPopupClose = document.querySelector(".button__popup--close");

const secondsElement = document.querySelector(".seconds");
const movesElement = document.querySelector(".moves");
const flagsElement = document.querySelector(".flags--marked");
const remainedElement = document.querySelector(".mines--remained");

//
// EVENTS
buttonPlay.addEventListener("click", startGame);
buttonStop.addEventListener("click", stopGame);

buttonMode.addEventListener("click", toggleMode);
 
tiles.forEach((tile) => {
  tile.addEventListener("click", handleLeftClick);
  tile.addEventListener("contextmenu", handleRightClick);
});

buttonPopupClose.addEventListener("click", closePopup);

//
//

remainedElement.textContent = minesCount;

//
// LEFT CLICK
function handleLeftClick(e) {
  if (!gameStarted) return;

  const tile = e.target;
  const tileState = tile.dataset.state;

  if (tileState !== "hidden") return;

  openTile(tile);
  updateMovesCount();

  if (moves === 1 && !minePositions.length) {
    minePositions = getMinesPositions(size, minesCount);
    console.log("Mines: ", minePositions);
  } else return;
}

//
// RIGHT CLICK
function handleRightClick(e) {
  e.preventDefault();

  if(!gameStarted) return;

  const tile = e.target;
  const tileState = tile.dataset.state;

  if (tileState === "hidden") {
    handleMarkTile(tile);
  } else if (tileState === "marked") {
    handleUnmarkTile(tile);
  }

  if (moves === 1 && !minePositions.length) {
    minePositions = getMinesPositions(size, minesCount);
    console.log("Mines: ", minePositions);
  } else return;
}

//
// PLAY GAME
function startGame() { 
  if(!gameStarted) {
    gameStarted = true;

    startTimer();

    console.log(">> Game started!");
  } else return;
}

//
// STOP GAME
function stopGame() {
  if(gameStarted) {
    gameStarted = false;

    minePositions = [];

    tiles.forEach((tile) => {
      tile.dataset.state = "hidden";
      tile.textContent = "";
    });

    nullTimer();
    nullMoves();
    nullMines();

    console.log(">> Game stopped!");
  } else return;
}


//
// OPEN TILE
function openTile(tile) {
  const clickedTile = getTilePosition(tile);
  const isMine = positionExists(minePositions, clickedTile);

  if (isMine) {
    tile.dataset.state = "mine";

    success = false;

    endGame(success);
    pauseTimer();
  } 
  
  else {
    const nearMines = countNearMines(clickedTile);

    if (nearMines) {
      revealTile(tile, nearMines);
    } else {
      revealTile(tile);
    }

    if (isSuccess()) {
      success = true;

      endGame(success, moves, seconds);
      pauseTimer();
    }
  }
}

//
// REVEAL TILE
function revealTile(tile, count = "") {
  tile.textContent = count;
  tile.dataset.state = "number";
}

//
// CHECK WIN
function isSuccess() {
  const closedTiles = tiles.filter((tile) => {
    return tile.dataset.state === "hidden" || tile.dataset.state === "marked";
  });

  return closedTiles.length === minesCount;
}

//
// NEAR TILES
function countNearMines(tile) {
  const nearTiles = getNearTiles(tile);

  let nearMines = 0;

  nearTiles.forEach((nearTile) => {
    const isMine = positionExists(minePositions, nearTile);
    if (isMine) nearMines += 1;
  });

  return nearMines;
}

//
// NEAR TILES
function getNearTiles(tile) {
  let nearTiles = [];

  for (let stepX = -1; stepX <= 1; stepX++) {
    for (let stepY = -1; stepY <= 1; stepY++) {
      const nearTile = { x: tile.x + stepX, y: tile.y + stepY };

      if (!(tile.x === nearTile.x && tile.y === nearTile.y) && nearTile.x >= 0 && nearTile.y >= 0 && nearTile.x < size && nearTile.y < size) {
        nearTiles.push(nearTile);
      }
    }
  }

  return nearTiles;
}


//
// UPDATE MOVES
function updateMovesCount() {
  moves += 1;
  movesElement.textContent = moves;
}

//
// NULL MOVES
function nullMoves() {
  moves = 0;
  movesElement.textContent = moves;
}

//
// START TIMER
function startTimer() {
  increaseSeconds();

  timerId = setInterval(increaseSeconds, 1000);
}

//
// NULL TIMER
function nullTimer() {
  seconds = 0;
  secondsElement.textContent = seconds;
    
  clearInterval(timerId);
}

//
// NULL MARKED MINES
function nullMines() {
  flags = 0;
  remainedMines = minesCount;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
}

//
// PAUSE TIMER
function pauseTimer() {
  clearInterval(timerId);
}

//
// UPDATE SECONDS
function increaseSeconds() {
  seconds += 1;
  secondsElement.textContent = seconds;
}

//
// MARK TILE
function handleMarkTile(tile) {
  tile.dataset.state = "marked";

  flags += 1;
  remainedMines -= 1;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
}

//
// UNMARK TILE
function handleUnmarkTile(tile) {
  tile.dataset.state = "hidden";
  
  flags -= 1;
  remainedMines += 1;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
}