import { getName } from "./utils.js";
export { saveResult, renderResults, cleanResults };

//
// RENDER RESULTS
function renderResults() {
  const resultsContainer = document.querySelector(".results");
  const savedResults = localStorage.getItem("results");
  const placeholder = createPlaceholder();

  [...resultsContainer.children].forEach((child) => child.remove());

  if (!savedResults) {
    resultsContainer.insertAdjacentHTML("afterbegin", placeholder);
    return;
  }

  if (savedResults) {
    const tableHeader = createTableHeader();
    resultsContainer.insertAdjacentHTML("afterbegin", tableHeader);

    const resultsArray = JSON.parse(savedResults);

    resultsArray.forEach((result, i) => {
      const item = createResultsItem(result, i);
      resultsContainer.insertAdjacentHTML("beforeend", item);
    });
  }
}

//
// SAVE RESULT
function saveResult(success, moves, seconds) {

  const currentResult = {
    name: getName(),
    seconds: seconds,
    moves: moves,
    success: success
  };

  let results = localStorage.getItem("results") || [];

  if (Array.isArray(results)) {
    results.push(currentResult);

    results = JSON.stringify(results);
    localStorage.setItem("results", results);
    return;
  }

  let resultsArray = JSON.parse(results);

  if (resultsArray.length >= 10) {
    resultsArray.shift();
  }

  resultsArray.push(currentResult);

  resultsArray = JSON.stringify(resultsArray);
  localStorage.setItem("results", resultsArray);
}

//
// CLEAN RESULTS
function cleanResults() {
  localStorage.setItem("results", "");

  const placeholder = createPlaceholder();
  const resultsContainer = document.querySelector(".results");

  [...resultsContainer.children].forEach((child) => child.remove());
  resultsContainer.insertAdjacentHTML("afterbegin", placeholder);

  const cleanButton = document.querySelector(".button__results--clean");
  cleanButton.remove();
}

//
// CREATE ITEM
function createResultsItem(result, num) {
  const number = num < 9 ? `0${num + 1}` : 10;
  const name = result.name;
  const sec = result.seconds;
  const moves = result.moves;
  const success = result.success ? "Win" : "Lose";

  const item = `
    <div class="results__item">
      <span class="results__span">${number}</span>
      <span class="results__span">${name}</span>
      <span class="results__span">${sec}</span>
      <span class="results__span">${moves}</span>
      <span class="results__span">${success}</span>
    </div>
  `;

  return item;
}

//
// RESULTS TABLE HEADER
function createTableHeader() {
  const tableHeader = `
    <div class="results__header">
      <span class="results__span">00</span>
      <span class="results__span">Name</span>
      <span class="results__span">Sec</span>
      <span class="results__span">Moves</span>
      <span class="results__span">Succ</span>
    </div>
  `;

  return tableHeader;
}

//
// PLACEHOLDER
function createPlaceholder() {
  const placeholder = `
    <div class="results__placeholder">
      No results yet. <br>Go play the game, human!
    </div>
    `;

  return placeholder;
}
