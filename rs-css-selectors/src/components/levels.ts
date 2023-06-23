import { createElement } from "../utils/element";

// Levels
export function createLevelsSection(): HTMLElement {
  const levelsPanel = createElement("section", ["section__levels"]);
  const header = createLevelsHeader();

  levelsPanel.append(header);

  return levelsPanel;
}

// Header
function createLevelsHeader(): HTMLElement {
  const header = createElement("div", ["levels__header"]);

  const buttonPrev = `
    <button class='button levels__button button--prev'>
      <span>&lt;</span>
    </button>
    `;
  const buttonNext = `
    <button class='button levels__button button--next'>
      <span>&gt;</span>
    </button>
    `;

  const headerContent = `
    <div class="levels__header-container">
      <div class="levels__header-title"">
        <h3>Level</h3>
        <span>1/10</span>
      </div>
      <div class="levels__buttons">
        ${buttonPrev}
        ${buttonNext}
      </div>
    </div>
  `;

  header.insertAdjacentHTML("afterbegin", headerContent);

  return header;
}
