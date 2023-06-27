import { createElement } from "../utils/create-element";

export function createHeader(): HTMLElement {
  const header = createElement("header", ["header"]);
  const title = createTitle();
  const buttons = createHeaderButtons();

  header.insertAdjacentHTML("afterbegin", title);
  header.insertAdjacentHTML("beforeend", buttons);

  return header;
}

// Title
function createTitle(): string {
  const SVGIcon = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.05037 0L2.5332e-07 12H7.05037L14 11.8286L7.05037 0Z" fill="#6BCB5B"/>
      <circle cx="36.5" cy="6.5" r="6.5" fill="#FFE208"/>
      <rect x="16" width="12" height="12" fill="#725CFA"/>
    </svg>
  `;

  const headerTitle = `
    <div class="header__title">
      <h1 class='title__text'>CSS Playground</h1>
      <div class="title__icon">
        ${SVGIcon}
      </div>
    </div>  
  `;

  return headerTitle;
}

// Buttons
function createHeaderButtons(): string {
  const buttonHint = "<button class='button button--hint'>Hint</button>";
  const buttonReset = "<button class='button button--reset'>Reset</button>";
  const buttonLevels = "<button class='button button--levels'>=</button>";

  const levelInfo = `
    <div class="header__levels">
      <span class="level__status level--unfinished"></span>
      <span class="header__data--level">1/10</span>
      ${buttonLevels}
    </div>
  `;

  const headerButtons = `
    <div class="header__buttons">
      ${levelInfo}
      ${buttonHint}
      ${buttonReset}
    </div>
  `;

  return headerButtons;
}
