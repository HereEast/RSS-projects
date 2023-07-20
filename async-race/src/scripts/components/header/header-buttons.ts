import { ButtonName, Selector } from "../../../types/enums";
import { createElement } from "../../utils/create-element";

// Header buttons
export function createHeaderButtons(): HTMLElement {
  const container = createElement("div", [Selector.HeaderButtons]);
  const bubbleElement = createElement("span", [Selector.Bubble]);

  const garageButton = createElement("button", [Selector.ViewButton], ButtonName.Garage);
  const winnersButton = createElement("button", [Selector.ViewButton], ButtonName.Winners);

  garageButton.id = Selector.ButtonGarage.slice(1);
  winnersButton.id = Selector.ButtonWinners.slice(1);

  container.append(bubbleElement, garageButton, winnersButton);

  return container;
}
