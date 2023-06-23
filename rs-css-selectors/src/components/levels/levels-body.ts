import { createElement } from "../../utils/element";
import { levelsData } from "../../data/levels-data";

export function createLevelsBody(): HTMLElement {
  const levelsBody = createElement("div", ["levels__body"]);
  const levelsContainer = createLevelItems();

  levelsBody.append(levelsContainer);

  return levelsBody;
}

function createLevelItems(): HTMLElement {
  const levelsContainer = createElement("div", ["levels__container"]);

  levelsData.forEach((level) => {
    const item = createElement("div", ["level__item"]);

    item.innerHTML = `
      <span class="level__number">${level.id}</span>
      <span class="level__title">${level.title}</span>
      <span class="level__status level--unfinished"></span>
    `;

    levelsContainer.append(item);
  });

  return levelsContainer;
}
