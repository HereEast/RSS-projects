import { createElement } from "../../../utils/create-element";
import { Selector } from "../../../../types/types";

const BUTTON_RACE = "Race";
const BUTTON_RESET = "Reset";

export function createGarageHeaderButtons(): HTMLElement {
  const container = createElement("div", [Selector.ViewButtons]);

  const buttonRace = createElement("button", [Selector.ButtonRace], BUTTON_RACE);
  const buttonReset = createElement("button", [Selector.ButtonReset], BUTTON_RESET);

  container.append(buttonRace, buttonReset);

  return container;
}
