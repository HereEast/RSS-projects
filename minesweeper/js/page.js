console.log("✅ Page");

export { createPage };

//
// CREATE PAGE
function createPage() {
  const header = createHeader();
  const popupEnd = createPopup();
  const popupResults = createResultsPopup();
  const popupStart = createStartPopup();

  const page = `
    <div class="page">
      ${header}
      <main class="main">
        <div class="main__info">
          <div class="info__item">
            <span>Moves:</span>
            <span class="item__count moves">0</span>
          </div>
          <div class="info__item">
            <span>Marked:</span>
            <span class="item__count flags--marked">0</span>
          </div>
          <div class="info__item">
            <span>Mines:</span>
            <span class="item__count mines--remained">0</span>
          </div>
          <div class="info__item">
            <span>Time:</span>
            <span class="item__count seconds">0</span>
          </div>
        </div>
        <div class="main__buttons">
          <button class="button main__button button__play">Start Game</button>
          <button class="button main__button button--light button__stop">Stop</button>
        </div>
        <div class="board__container">
        </div>
      </main>
    </div>
    ${popupEnd}
    ${popupResults}
    ${popupStart}
  `;

  document.body.insertAdjacentHTML("afterbegin", page);

  // const pageElement = document.querySelector(".page");
  // pageElement.insertAdjacentHTML("afterend", popup);

  // const endPopup = document.querySelector(".popup__end");
  // endPopup.insertAdjacentHTML("afterend", resultsPopup);
}

//
// POPUP
function createPopup() {
  const popup = `
    <div class="popup popup__end">
      <div class="popup__container">
        <span class="popup__message"></span>
        <div class="popup__buttons">
          <button class="button button--light button__popup--close">Close</button>
        </div>
      </div>
    </div>
  `;

  return popup;
}

//
// START POPUP
function createStartPopup() {
  const startPopup = `
    <div class="popup popup__start">
      <div class="popup__container">
        <div class="popup__buttons">
          <button class="button button--light button__start--new">New Game</button>
          <button class="button button--light button__start--saved">Continue</button>
        </div>
      </div>
      </div>
    </div>
  `;

  return startPopup;
}

//
// RESULTS POPUP
function createResultsPopup() {
  const popup = `
    <div class="popup popup__results">
      <div class="popup__container">
        <div class="results">
        </div>
        <div class="popup__buttons">
          <button class="button button--light button__results--close">Close</button>
        </div>
      </div>
      </div>
    </div>
  `;

  return popup;
}

//
// HEADER
function createHeader() {
  const header = `
    <header class="header">
      <div class="header__item header__title">
        <h1>Minesweeper</h1>
        <h2>MS</h2>
      </div>
      <div class="header__item header__settings">
        <div class="settings__item">
          <span>Board:</span>
          <div class="settings__buttons">
            <button class="button button__size button--dark" data-size="10">S</button>
            <button class="button button__size button--dark" data-size="15">M</button>
            <button class="button button__size button--dark" data-size="25">L</button>
          </div>
        </div>
        <div class="settings__item">
          <span>Mines:</span>
          <div class="settings__input">
            <input class="input" "type="number" min="10" max="99" value="10"></input>
            <button class="button button--dark button__ok">OK</button>
          </div>
        </div>
      </div>
      <div class="header__item header__buttons">
        <button class="button button--light button__results--open">=</button>
        <button class="button button--light button__toggle-sound"></button>
        <button class="button button--light button__toggle-mode">☀︎</button>
      </div>
    </header>`;

  return header;
}

