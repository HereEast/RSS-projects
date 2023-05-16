console.log("✅ Page");

function createPage() {
  const header = createHeader();
  const popup = createPopup();

  const page = `
    <div class="page">
      ${header}
      <main class="main">
        <h1>Minesweeper</h1>
        <div class="main__buttons">
          <button class="button button__play">Start Game</button>
          <button class="button button__stop">Stop</button>
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
        <button class="button button__popup--close">Close</button>
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
      <div class="header__items">
        <div class="header__item">
          <span>Moves:</span><span class="moves">0</span>
        </div>
        <div class="header__item">
          <span>Marked:</span><span class="flags--marked">0</span>
        </div>
        <div class="header__item">
          <span>Remained mines:</span><span class="mines--remained">0</span>
        </div>
        <div class="header__item">
          <span>Seconds:</span><span class="seconds">0</span>
        </div>
      </div>
      <div class="header__buttons">
        <button class="button button__toggle-mode">Toggle Mode</button>
        <button class="button button__settings">Settings</button>
      </div>
    </header>`;

  return header;
}

export { createPage };
