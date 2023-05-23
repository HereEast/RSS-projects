import { toggleMode, setMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";
import { getMinesPositions, positionExists, getTilePosition, getNearTiles, countNearMines } from "./js/tiles.js";
import { showSuccessPopup, closePopup, showResultsPopup, showStartPopup } from "./js/popup.js";
import { disableSettings, enableSettings, revealTile, cleanTiles, setSizeButton, setInputValue, deleteSavedGame } from "./js/utils.js";
import { highlightStart, updateButtonsStyle } from "./js/ui.js";
import { saveResult } from "./js/results.js";
import { setSound, toggleSound, clickSound, markSound, endGameSound, sounds, clickSounds, openPopupSound } from "./js/sound.js";
import { showHint } from "./js/hints.js";

//
let buttonPlay;
let buttonStop;
let buttonMode;
let buttonSound;

let secondsElement;
let movesElement;
let flagsElement;
let remainedElement;

let tiles;
let buttonsSize;
let buttonOk;
let input;

let buttonPopupClose;
let buttonOpenResults;
let buttonCloseResults;
let buttonStartNew;
let buttonStartSaved;

// localStorage.clear()

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
let soundPromise;

let gameStarted = false;
let success = false;
let inputFocused = false;

let minePositions = [];

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

  buttonMode.addEventListener("click", () => {
    playSound(clickSound);
    toggleMode();
  });

  buttonSound.addEventListener("click", () => {
    playSound(clickSound);
    toggleSound(sounds);
  });

  buttonOpenResults.addEventListener("click", () => {
    playSound(openPopupSound);
    showResultsPopup();
  });

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
    closePopup(".popup__success");

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

  playSound(clickSound);
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
    // console.log("💣 Mines: ", minePositions);
  }
}

//
// RIGHT CLICK
function handleRightClick(e) {
  e.preventDefault();

  if (!gameStarted) return;

  const tile = e.target;

  playSound(markSound);
  toggleMark(tile);
  //
  checkSuccess();

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
    showSuccessPopup(success, moves, seconds);
    saveResult(success, moves, seconds);
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
// async function checkSuccess() {
//   setTimeout(() => {
//     const closedTiles = tiles.filter((tile) => {
//       return tile.dataset.state === "hidden" || tile.dataset.state === "marked";
//     });

//     const matchMines = closedTiles.every((tile) => {
//       const tilePos = getTilePosition(tile);
//       return positionExists(minePositions, tilePos);
//     });

//     if (matchMines && closedTiles.length === minesCount) {
//       success = true;
//       gameStarted = false;

//       pauseTimer();
//       playEnd(endGameSound);
//       showSuccessPopup(success, moves, seconds);
//       saveResult(success, moves, seconds);
//       deleteSavedGame();
//     }
//   }, 0);
// }

async function checkSuccess() {
  setTimeout(() => {
    const markedTiles = tiles.filter((tile) => {
      return tile.dataset.state === "marked";
    });

    const openedTiles = tiles.filter((tile) => {
      return tile.dataset.state === "number";
    });

    const allOpened = openedTiles.length === (size * size) - minesCount;

    const matchMines = markedTiles.every((tile) => {
      const tilePos = getTilePosition(tile);
      return positionExists(minePositions, tilePos);
    });

    if (matchMines && markedTiles.length === minesCount && allOpened) {
      success = true;
      gameStarted = false;

      pauseTimer();
      playEnd(endGameSound);
      showSuccessPopup(success, moves, seconds);
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
// START GAME
function startGame() {
  const savedGame = JSON.parse(localStorage.getItem("game"));

  if (savedGame) {
    playSound(openPopupSound);
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

  setMoves(Number(savedGame.moves)); 
  setTimer(Number(savedGame.seconds));
  setMarkedMines(Number(savedGame.flags), Number(savedGame.remainedMines));
  setSizeButton(size);

  [...boardContainer.children].forEach(child => child.remove());
  boardContainer.insertAdjacentHTML("afterbegin", savedGame.board);

  initEvents();
  initGame();

  console.log(savedGame);
  console.log("Started saved game...");
}

//
// START NEW GAME
function startNewGame() {
  closePopup(".popup__start");
  cleanGame();
  initGame();

  console.log("New game started...");
}

//
// INIT GAME
function initGame() {
  gameStarted = true;
  tiles.forEach((tile) => (tile.disabled = false));

  playSound(endGameSound);
  startTimer();
  disableSettings(buttonsSize, buttonOk, input);
  highlightStart();
}

//
// STOP GAME
function stopGame() {
  if (gameStarted && moves >= 1) {
    saveGame();
  } else {
    deleteSavedGame();
  }

  playSound(clickSound);
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

  showHint("Game state was saved 👾");
  console.log("⬇️ Saved: ", game);
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
function playSound(sound) {
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
