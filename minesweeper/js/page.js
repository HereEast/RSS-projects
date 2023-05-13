console.log("✅ Page");

function createPage() {
  const page = document.createElement("div");
  page.classList.add("page");

  const header = createHeader();

  const main = document.createElement("main");
  main.classList.add("game__board", "main");

  const title = `<h1>Minesweeper</h1>`;
  main.insertAdjacentHTML("afterbegin", title);

  page.insertAdjacentHTML("afterbegin", header);
  page.append(main);

  document.body.prepend(page);
}

function createHeader() {
  const header = `
    <header class="header">
      <div class="header__items">
        <div class="header__item">
          <span>Moves:</span><span class="moves">0</span>
        </div>
        <div class="header__item">
          <span>🚩Marked:</span><span class="moves">0</span>
        </div>
        <div class="header__item">
          <span>🚩Remained:</span><span class="seconds">0</span>
        </div>
        <div class="header__item">
          <span>Seconds:</span><span class="seconds">0</span>
        </div>
      </div>
      <div class="header__buttons">
        <button class="button__toggle-mode">Toggle Mode</button>
      </div>
    </header>`;

  return header;
}

export { createPage };
