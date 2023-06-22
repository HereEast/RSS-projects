import { createElement } from "../utils/element";
import { createGameSection } from "./game-view";
import { createLevelsSection } from "./levels-view";

// Main
export function createMain(): HTMLElement {
  const main = createElement("main", ["main", "content-width"]);
  const gameSection = createGameSection();
  const levelsSection = createLevelsSection();

  main.append(gameSection, levelsSection);

  return main;
}
