import { createElement } from "../../utils/create-element";
import { levelsData } from "../../data/levels-data";
import { getSavedStatus } from "../../scripts/localStorage/get-saved-status";

export function createLevelsBody(): HTMLElement {
  const levelsBody = createElement("div", ["levels__body"]);
  const levelsContainer = createLevelItems();

  levelsBody.append(levelsContainer);

  return levelsBody;
}

function createLevelItems(): HTMLElement {
  const levelsContainer = createElement("div", ["levels__container"]);

  levelsData.forEach((level) => {
    const status = getSavedStatus(level.id);
    const item = createElement("div", ["level__item", status]);

    item.innerHTML = `
      <span class="level__number">${level.id}</span>
      <span class="level__title">${level.title}</span>
      <span class="level__status"></span>
    `;

    item.dataset.id = level.id;

    levelsContainer.append(item);
  });

  return levelsContainer;
}
