import { createElement } from "../utils/create-element";
import { createHeader } from "./header";
import { createTaskBlock } from "./task";
import { createEditorsBlock } from "./editors/editors";

//
export function createGameSection(): HTMLElement {
  const gameSection = createElement("section", ["section__game"]);
  const header = createHeader();

  const game = createElement("section", ["game"]);
  const taskBlock = createTaskBlock();
  const editorsBlock = createEditorsBlock();

  game.append(taskBlock, editorsBlock);
  gameSection.append(header, game);

  return gameSection;
}
