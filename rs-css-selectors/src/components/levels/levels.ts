import { createElement } from "../../utils/element";
import { createLevelsHeader } from "./levels-header";
import { levelsData } from "../../data/levels-data";

// Levels
export function createLevelsSection(): HTMLElement {
  const levelsPanel = createElement("section", ["section__levels"]);
  const header = createLevelsHeader();
  const levels = createLevelsBody();

  levelsPanel.append(header, levels);

  return levelsPanel;
}

// Levels
function createLevelsBody(): HTMLElement {
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
