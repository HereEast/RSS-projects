import { toggleMode } from "./js/mode.js";
import { createPage } from "./js/page.js";
import { createBoard } from "./js/board.js";

let size = 6;
let minesCount = 2;

//
createPage();
createBoard(size, minesCount);

// Elements
const modeButton = document.querySelector(".button__mode");


// Events
modeButton.addEventListener("click", toggleMode);

