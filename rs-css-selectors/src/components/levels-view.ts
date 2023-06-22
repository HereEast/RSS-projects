import { createElement } from "../utils/element";

// Levels
export function createLevelsSection(): HTMLElement {
  const levelsPanel = createElement("section", ["main__section", "section__levels"]);

  return levelsPanel;
}
