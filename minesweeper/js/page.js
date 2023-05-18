console.log("✅ Page");

export { createPage };

//
// CREATE PAGE
function createPage() {
  const header = createHeader();
  const popup = createPopup();

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
    </main>
  `;

  document.body.insertAdjacentHTML("afterbegin", page);
  document.body.insertAdjacentHTML("beforeend", popup);
}

//
// POPUP
function createPopup() {
  const popup = `
    <div class="popup">
      <div class="popup__container">
        <span class="popup__message">Hello</span>
        <div class="popup__buttons">
        <button class="button button--light button__popup--close">Close</button>
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
            <button class="button button__size button--dark button__size--selected" data-size="10">S</button>
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
        <button class="button button--light button__stats">=</button>
        <button class="button button--light button__toggle-mode">☀︎</button>
      </div>
    </header>`;

  return header;
}

