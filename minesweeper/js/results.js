export { saveResult, renderResults, createResultsPopup };

//
// RENDER RESULTS
function renderResults() {
  // console.log("Render: ", localStorage.getItem("results"));

  const resultsContainer = document.querySelector(".results");
  const savedResults = localStorage.getItem("results");

  const placeholder = `
    <div class="results__placeholder">
      No results yet. <br>Go play the game, human!
    </div>
    `;

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
      const number = i < 9 ? `0${i + 1}` : 10;
      const name = result.name;
      const sec = result.seconds;
      const moves = result.moves;
      const success = result.success ? "Win" : "Lose";

      const item = createResultsItem(number, name, sec, moves, success);
      resultsContainer.insertAdjacentHTML("beforeend", item);
    });
  }
}

//
// SAVE RESULT
function saveResult(success, moves, seconds) {
  const currentResult = {
    name: "Godzilla🐊",
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

  // console.log("Saved: ", localStorage.getItem("results"));
}

//
// RESULTS POPUP
function createResultsPopup() {
  const popup = `
    <div class="popup popup__results">
      <div class="popup__container">
        <div class="results">
        </div>
        <button class="button button--light button__results--close">Close</button>
      </div>
      </div>
    </div>
  `;

  return popup;
}

//
// RESULTS ITEM
function createResultsItem(order, name, sec, moves, success) {
  const item = `
    <div class="results__item">
      <span class="results__span">${order}</span>
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
      <span class="results__span">Success</span>
    </div>
  `;

  return tableHeader;
}
