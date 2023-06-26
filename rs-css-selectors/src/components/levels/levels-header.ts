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
      <div class="header__data"">
        <h3>Level</h3>
        <span class="header__data--level">1/10</span>
      </div>
      <div class="header__buttons">
        ${buttonPrev}
        ${buttonNext}
      </div>
    </div>
  `;

  const buttonHide = `
    <div class="button__container">
      <button class="button button--hide">Hide</button>
    </div>
  `;

  header.insertAdjacentHTML("afterbegin", headerContent);
  header.insertAdjacentHTML("afterbegin", buttonHide);

  return header;
}
