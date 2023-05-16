import { toggleMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists, getTilePosition } from "./js/utils.js";
import { endGame, closePopup } from "./js/popup.js";

let size = 3;
let minesCount = 2;
let moves = 0;
let seconds = 0;
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
const secondsElement = document.querySelector(".seconds");
const buttons = Array.from(document.querySelectorAll(".button__tile"));
const movesElement = document.querySelector(".moves");
const buttonPopupClose = document.querySelector(".button__popup--close");

//
// EVENTS
buttonPlay.addEventListener("click", startGame);
buttonStop.addEventListener("click", stopGame);

buttonMode.addEventListener("click", toggleMode);
 
buttons.forEach((button) => {
  button.addEventListener("click", handleLeftClick);
  button.addEventListener("contextmenu", handleRightClick);
});

buttonPopupClose.addEventListener("click", closePopup);

//
//

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

  markTile(tile);

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

    buttons.forEach((button) => {
      button.dataset.state = "hidden";
      button.textContent = "";
    });

    nullTimer();
    nullMoves();

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
  const closedTiles = buttons.filter((button) => {
    return button.dataset.state === "hidden" || button.dataset.state === "marked";
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