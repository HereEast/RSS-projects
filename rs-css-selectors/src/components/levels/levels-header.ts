import { createElement } from "../../utils/element";

export function createLevelsHeader(): HTMLElement {
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
    <div class="header__container">
      <div class="header__title"">
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
