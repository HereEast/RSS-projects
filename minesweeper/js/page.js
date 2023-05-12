console.log("✅ Page");

function createPage() {
  const page = document.createElement("div");
  page.classList.add("page");

  const game = document.createElement("div");
  game.classList.add("game");

  const header = document.createElement("div");
  header.classList.add("game__header");

  const title = document.createElement("h1");
  title.textContent = "Minesweeper";

  const board = document.createElement("div");
  board.classList.add("game__board");

  const modeButton = document.createElement("button");
  modeButton.classList.add("button__mode");
  modeButton.textContent = "Toggle Mode";

  header.append(title, modeButton);
  game.append(header, board);
  page.append(game);

  document.body.prepend(page);
}

export { createPage };
