import { createElement } from "../utils/element";
import { createGameSection } from "./game";
import { createLevelsSection } from "./levels/levels";

// Main
export function createMain(): HTMLElement {
  const main = createElement("main", ["main", "content-width"]);
  const gameSection = createGameSection();
  const levelsSection = createLevelsSection();

  main.append(gameSection, levelsSection);

  return main;
}
