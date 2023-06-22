import { createElement } from "../utils/element";
import { createHeader } from "./header";
import { createTaskBlock } from "./task-view";
import { createCodeBlock } from "./editors-view";

// Game section
export function createGameSection(): HTMLElement {
  const gameSection = createElement("section", ["main__section", "section__game"]);
  const header = createHeader();

  const game = createElement("div", ["game"]);
  const taskBlock = createTaskBlock();
  const codeBlock = createCodeBlock();

  game.append(taskBlock, codeBlock);
  gameSection.append(header, game);

  return gameSection;
}
