import { toggleMode, setMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists, getTilePosition, getNearTiles, countNearMines } from "./js/tiles.js";
import { showPopup, closePopup } from "./js/popup.js";
import { disableSettings, enableSettings, revealTile, cleanTiles } from "./js/utils.js";
import { highlightStart, updateButtonsStyle } from "./js/ui.js";

//
let buttonPlay;
let buttonStop;
let buttonMode;
let tiles;

let secondsElement;
let movesElement;
let flagsElement;
let remainedElement;

let buttonsSize;
let buttonOk;
let input;
let buttonPopupClose;

//
let minMines = 10;
let maxMines = 99;
let size = localStorage.getItem("currentSize") || 10;
let minesCount = localStorage.getItem("mineCount") || minMines;

console.log(localStorage.getItem("mineCount"));

let moves = 0;
let seconds = 0;
let flags = 0;
let remainedMines = minesCount;

let timerId;

let gameStarted = false;
let success;
let inputFocused = false;

let minePositions = [];

//
//
createPage();
createBoard(size);

setMode();

initEvents();
setRemainedMinesValue();

//
// INIT EVENTS
function initEvents() {
  buttonPlay = document.querySelector(".button__play");
  buttonStop = document.querySelector(".button__stop");
  buttonMode = document.querySelector(".button__toggle-mode");
  tiles = Array.from(document.querySelectorAll(".button__tile"));

  buttonPopupClose = document.querySelector(".button__popup--close");

  secondsElement = document.querySelector(".seconds");
  movesElement = document.querySelector(".moves");
  flagsElement = document.querySelector(".flags--marked");
  remainedElement = document.querySelector(".mines--remained");

  buttonsSize = Array.from(document.querySelectorAll(".button__size"));
  buttonOk = document.querySelector(".button__ok");
  input = document.querySelector(".input");

  //
  // EVENTS
  buttonPlay.addEventListener("click", startGame);
  buttonStop.addEventListener("click", stopGame);

  buttonMode.addEventListener("click", toggleMode);

  tiles.forEach((tile) => {
    tile.addEventListener("click", handleLeftClick);
    tile.addEventListener("contextmenu", handleRightClick);
  });

  buttonsSize.forEach((button) => {
    button.addEventListener("click", updateSize);
  });

  buttonOk.addEventListener("click", updateMinesCount);
  input.addEventListener("focus", () => inputFocused = true);
  input.addEventListener("blur", updateMinesCount);

  buttonPopupClose.addEventListener("click", () => {
    closePopup();
    tiles.forEach((tile) => tile.disabled = true);
  });
}

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

  checkSuccess();

  if (moves === 1 && !minePositions.length) {
    minePositions = getMinesPositions(minesCount, size);

    const firstTile = document.querySelector("[data-state='number']");
    const count = countNearMines(firstTile, minePositions, size);

    if (count) {
      revealTile(tile, count);
    } else if (!count) {
      revealNearTiles(tile, count);
    }

    console.log("💣 Mines: ", minePositions);
  };
}

//
// RIGHT CLICK
function handleRightClick(e) {
  e.preventDefault();

  if (!gameStarted) return;

  const tile = e.target;
  toggleMark(tile);
}

//
// START GAME
function startGame() {
  stopGame();

  gameStarted = true;
  tiles.forEach((tile) => (tile.disabled = false));

  startTimer();
  disableSettings(buttonsSize, buttonOk, input);
  highlightStart();

  console.log("Game started...");
}

//
// STOP GAME
function stopGame() {
  gameStarted = false;

  minePositions = [];

  cleanTiles(tiles);
  nullTimer();
  nullMoves();
  nullMines();

  enableSettings(buttonsSize, buttonOk, input);

  console.log("Game stopped!");
}

//
// OPEN TILE
function openTile(tile) {
  const tilePos = getTilePosition(tile);
  const isMine = positionExists(minePositions, tilePos);

  // Mine
  if (isMine) {
    tile.dataset.state = "mine";

    success = false;
    gameStarted = false;

    pauseTimer();
    showPopup(success, moves, seconds);
  } 
  
  // Not mine
  if (!isMine) {
    const count = countNearMines(tile, minePositions, size);

    if (count) {
      revealTile(tile, count);
    } else {
      revealNearTiles(tile, count);
    }
  }
}


//
// REVEAL NEAR TILES
function revealNearTiles(tile, count) {
  revealTile(tile, count);

  if (moves < 1) return;

  const nearTiles = getNearTiles(tiles, tile, size);

  nearTiles.forEach((tile) => {
    const count = countNearMines(tile, minePositions, size);

    if (tile.dataset.state === "hidden" && !count) {
      revealNearTiles(tile, count);
    } else if (tile.dataset.state === "hidden" && count) {
      revealTile(tile, count);
    }
  });
}

//
// CHECK SUCCESS
async function checkSuccess() {
  setTimeout(() => {
    const closedTiles = tiles.filter((tile) => {
      return tile.dataset.state === "hidden" || tile.dataset.state === "marked";
    });

    const matchMines = closedTiles.every((tile) => {
      const tilePos = getTilePosition(tile);
      return positionExists(minePositions, tilePos);
    });

    if (matchMines && closedTiles.length === minesCount) {
      success = true;
      gameStarted = false;

      pauseTimer();
      showPopup(success, moves, seconds);
    }
  }, 0)
}

//
// SIZE
function updateSize(e) {
  const button = e.target;
  const selectedSize = e.target.dataset.size;

  if (gameStarted) return;
  if (button.classList.contains("button__size--selected")) return;

  size = selectedSize;

  createBoard(size, minesCount);
  initEvents();

  updateButtonsStyle(button, buttonsSize);
}

//
// UPDATE MINES COUNT
function updateMinesCount() {
  if (gameStarted) return;
  if (!inputFocused) return;

  if (input.value < minMines) input.value = minMines;
  if (input.value > maxMines) input.value = maxMines;

  minesCount = input.value;

  setRemainedMinesValue();

  input.blur();
  inputFocused = false;
}

//
// MARK TILE
function toggleMark(tile) {
  const tileState = tile.dataset.state;

  if (tileState === "hidden") {
    tile.dataset.state = "marked";
    countFlags(1);
  } else if (tileState === "marked") {
    tile.dataset.state = "hidden";
    countFlags(-1);
  } else return;
}

//
// SET REMAINED VALUE
function setRemainedMinesValue() {
  remainedMines = minesCount;
  remainedElement.textContent = remainedMines;
}

//
// FLAGS COUNT
function countFlags(step) {
  const flagsElement = document.querySelector(".flags--marked");
  const remainedElement = document.querySelector(".mines--remained");

  flags += step;
  remainedMines -= step;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
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
// NULL MARKED MINES
function nullMines() {
  flags = 0;
  remainedMines = minesCount;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
}

//
// TIMER
function startTimer() {
  timerId = setInterval(() => {
    seconds += 1;
    secondsElement.textContent = seconds;
  }, 1000);
}

function nullTimer() {
  seconds = 0;
  secondsElement.textContent = seconds;

  clearInterval(timerId);
}

function pauseTimer() {
  clearInterval(timerId);
}

