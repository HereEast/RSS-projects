import { getElement, getElementsArray } from "../_utils/get-element";
import { ButtonName, Selector } from "../../types/enums";

// Active button
export function setActiveButton(button?: HTMLElement): void {
  const bubble = getElement(Selector.Bubble);

  const buttons = getElementsArray(Selector.ViewButton);
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (!button) {
    const activeButton = getElement(Selector.ButtonGarage);
    activeButton.classList.add("active");
    bubble.classList.remove("winners");
    return;
  }

  button?.classList.add("active");

  if (button?.textContent?.includes(ButtonName.Garage)) {
    bubble.classList.remove("winners");
  } else {
    bubble.classList.add("winners");
  }
}
