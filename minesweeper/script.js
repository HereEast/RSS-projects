import { toggleMode, setMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists, getTilePosition, getNearTiles, countNearMines } from "./js/tiles.js";
import { showPopup, closePopup, showResultsPopup, showStartPopup } from "./js/popup.js";
import { disableSettings, enableSettings, revealTile, cleanTiles, setSizeButton, setInputValue } from "./js/utils.js";
import { highlightStart, updateButtonsStyle } from "./js/ui.js";
import { saveResult } from "./js/results.js";
import { setSound, toggleSound } from "./js/sound.js";

//
let buttonPlay;
let buttonStop;
let buttonMode;
let buttonSound;
let tiles;

let secondsElement;
let movesElement;
let flagsElement;
let remainedElement;

let buttonsSize;
let buttonOk;
let input;

let buttonPopupClose;
let buttonOpenResults;
let buttonCloseResults;
let buttonStartNew;
let buttonStartSaved;

//
let minMines = 1;
let maxMines = 99;
let size = localStorage.getItem("currentSize") || 4;
let minesCount = localStorage.getItem("minesCount") || minMines;

let moves = 0;
let seconds = 0;
let flags = 0;
let remainedMines = minesCount;

let timerId;

let gameStarted = false;
let success = false;
let inputFocused = false;

let minePositions = [];

// SOUNDS
const clickSound = new Audio("./assets/sounds/click-01.mp3");
const markSound = new Audio("./assets/sounds/click-05.mp3");
const endGameSound = new Audio("./assets/sounds/end-game-sound.mp3");

const sounds = [clickSound, markSound, endGameSound];
const clickSounds = [clickSound, markSound];
let soundPromise;

//
//
createPage();
createBoard(size);

initEvents();
setRemainedMinesValue();

setMode();
setSound(sounds);
setSizeButton(size);
setInputValue(minesCount);

//
// INIT
function initEvents() {
  buttonPlay = document.querySelector(".button__play");
  buttonStop = document.querySelector(".button__stop");
  buttonMode = document.querySelector(".button__toggle-mode");
  buttonSound = document.querySelector(".button__toggle-sound");
  tiles = Array.from(document.querySelectorAll(".button__tile"));

  buttonPopupClose = document.querySelector(".button__popup--close");
  buttonOpenResults = document.querySelector(".button__results--open");
  buttonCloseResults = document.querySelector(".button__results--close");
  buttonStartNew = document.querySelector(".button__start--new");
  buttonStartSaved = document.querySelector(".button__start--saved");

  secondsElement = document.querySelector(".seconds");
  movesElement = document.querySelector(".moves");
  flagsElement = document.querySelector(".flags--marked");
  remainedElement = document.querySelector(".mines--remained");

  buttonsSize = Array.from(document.querySelectorAll(".button__size"));
  buttonOk = document.querySelector(".button__ok");
  input = document.querySelector(".input");

  //
  // Events
  buttonPlay.addEventListener("click", startGame);
  buttonStop.addEventListener("click", stopGame);

  buttonMode.addEventListener("click", toggleMode);
  buttonSound.addEventListener("click", () => toggleSound(sounds));
  buttonOpenResults.addEventListener("click", showResultsPopup);
  buttonCloseResults.addEventListener("click", () => closePopup(".popup__results"));

  buttonStartNew.addEventListener("click", startNewGame);
  buttonStartSaved.addEventListener("click", startSavedGame);

  tiles.forEach((tile) => {
    tile.addEventListener("click", handleLeftClick);
    tile.addEventListener("contextmenu", handleRightClick);
  });

  buttonsSize.forEach((button) => {
    button.addEventListener("click", updateSize);
  });

  buttonOk.addEventListener("click", updateMinesCount);
  input.addEventListener("focus", () => (inputFocused = true));
  input.addEventListener("blur", updateMinesCount);

  buttonPopupClose.addEventListener("click", () => {
    closePopup(".popup__end");

    tiles.forEach((tile) => (tile.disabled = true));
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

  playClick(clickSound);

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
  }
}

//
// RIGHT CLICK
function handleRightClick(e) {
  e.preventDefault();

  if (!gameStarted) return;

  const tile = e.target;

  playClick(markSound);
  toggleMark(tile);
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
    playEnd(endGameSound);
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

  saveResult(success, moves, seconds);
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
      playEnd(endGameSound);
      showPopup(success, moves, seconds);
      saveResult(success, moves, seconds);
      deleteSavedGame();
    }
  }, 0);
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

  localStorage.setItem("currentSize", selectedSize);
}

//
// UPDATE MINES COUNT
function updateMinesCount() {
  if (gameStarted) return;
  if (!inputFocused) return;

  if (input.value < minMines) input.value = minMines;
  if (input.value > maxMines) input.value = maxMines;

  minesCount = input.value;
  localStorage.setItem("minesCount", minesCount);

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
// START GAME
function startGame() {
  const savedGame = JSON.parse(localStorage.getItem("game"));

  if (savedGame) {
    showStartPopup();
  } else {
    startNewGame();
  }
}

// localStorage.removeItem("game");

//
// START SAVED GAME
function startSavedGame() {
  closePopup(".popup__start");

  const boardContainer = document.querySelector(".board__container");
  const savedGame = JSON.parse(localStorage.getItem("game"));
  
  size = savedGame.size;
  minePositions = savedGame.minesPos;
  minesCount = savedGame.minesCount;
  input.value = minesCount;

  console.log(minePositions);

  setMoves(Number(savedGame.moves)); 
  setTimer(Number(savedGame.seconds));
  setMarkedMines(Number(savedGame.flags), Number(savedGame.remainedMines));

  [...boardContainer.children].forEach(child => child.remove());
  boardContainer.insertAdjacentHTML("afterbegin", savedGame.board);

  gameStarted = true;
  tiles.forEach((tile) => (tile.disabled = false));

  playClick(endGameSound);
  startTimer();
  disableSettings(buttonsSize, buttonOk, input);
  highlightStart();
  initEvents();

  console.log(savedGame);
  console.log("Started saved game...");
}

//
// START NEW GAME
function startNewGame() {
  closePopup(".popup__start");
  cleanGame();

  gameStarted = true;
  tiles.forEach((tile) => (tile.disabled = false));

  playClick(endGameSound);
  startTimer();
  disableSettings(buttonsSize, buttonOk, input);
  highlightStart();

  console.log("New game started...");
}

//
// STOP GAME
function stopGame() {
  if (gameStarted && moves >= 1) {
    saveGame();
  } else {
    deleteSavedGame();
  }

  cleanGame();
}

//
// CLEAN GAME
function cleanGame() {
  gameStarted = false;
  minePositions = [];

  cleanTiles(tiles);
  nullTimer();
  nullMoves();
  nullMines();

  enableSettings(buttonsSize, buttonOk, input);
}

//
// SAVE GAME
function saveGame() {
  const boardContainer = document.querySelector(".board__container");

  const game = {
    size: size,
    minesCount: minesCount,
    minesPos: minePositions,
    moves: moves,
    seconds: seconds,
    flags: flags,
    remainedMines: remainedMines,
    board: boardContainer.innerHTML
  };

  localStorage.setItem("game", JSON.stringify(game));
  console.log("⬇️ Saved: ", game);
}

//
// DELETE SAVED
function deleteSavedGame() {
  localStorage.removeItem("game");
}

// localStorage.removeItem("game")

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
// SET MOVES
function setMoves(count) {
  moves = count;
  movesElement.textContent = moves;
}

//
// SET MARKED MINES
function setMarkedMines(flagsCount, remainedCount) {
  flags = flagsCount;
  remainedMines = remainedCount;

  flagsElement.textContent = flags;
  remainedElement.textContent = remainedMines;
}

function setTimer(count) {
  seconds = count;
  secondsElement.textContent = seconds;
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
  seconds += 1;
  secondsElement.textContent = seconds;

  timerId = setInterval(() => {
    seconds += 1;
    secondsElement.textContent = seconds;
  }, 1000);
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
// PLAY CLICK
function playClick(sound) {
  sound.pause();
  sound.currentTime = 0;

  soundPromise = sound.play();
}

//
// PLAY END
function playEnd(sound) {
  soundPromise
    .then(() => sound.play())
    .then(() => clickSounds.forEach((s) => s.pause()))
    .catch((err) => console.error(err));
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
