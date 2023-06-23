import { createElement } from "../../utils/element";
import { createLevelsHeader } from "./levels-header";
import { createLevelsBody } from "./levels-body";

// Levels
export function createLevelsSection(): HTMLElement {
  const levelsPanel = createElement("section", ["section__levels"]);
  const header = createLevelsHeader();
  const body = createLevelsBody();

  levelsPanel.append(header, body);

  return levelsPanel;
}
