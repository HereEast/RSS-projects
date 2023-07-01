import { createElement } from "../../utils/create-element";
import { Button } from "../../types/enums";

// Buttons
export function createHeaderButtons(): HTMLElement {
  const headerButtons = createElement("div", ["header__buttons"]);

  const buttonReset = createElement("button", ["button", "button--reset"], Button.Reset);
  const buttonHint = createElement("button", ["button", "button--hint"], Button.Hint);

  headerButtons.append(buttonHint, buttonReset);

  return headerButtons;
}
