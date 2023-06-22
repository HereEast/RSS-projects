import { createElement } from "../utils/element";

export function createHeader(): HTMLElement {
  const header = createElement("header", ["header"]);
  const title = createTitle();
  const buttons = createHeaderButtons();

  console.log(header.outerHTML);

  header.append(title, buttons);

  return header;
}

// Title
function createTitle(): HTMLElement {
  const titleContainer = createElement("div", ["header__title"]);
  const title = createElement("h1", ["title__text"], "CSS Playground");
  const icon = createElement("div", ["title__icon"]);

  icon.innerHTML = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.05037 0L2.5332e-07 12H7.05037L14 11.8286L7.05037 0Z" fill="#6BCB5B"/>
      <circle cx="36.5" cy="6.5" r="6.5" fill="#FFE208"/>
      <rect x="16" width="12" height="12" fill="#725CFA"/>
    </svg>`;

  titleContainer.append(title, icon);

  return titleContainer;
}

// Buttons
function createHeaderButtons(): HTMLElement {
  const headerButtons = createElement("div", ["header__buttons"]);
  const buttonHint = createElement("button", ["header__button", "button--hint"], "Hint");
  const buttonReset = createElement("button", ["header__button", "button--reset"], "Reset");

  headerButtons.append(buttonHint, buttonReset);

  return headerButtons;
}
