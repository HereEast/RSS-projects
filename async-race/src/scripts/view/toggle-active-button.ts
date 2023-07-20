import { getElement, getElementsArray } from "../utils/get-element";
import { ButtonName, Selector, View } from "../../types/enums";

// Toggle view button
export function toggleViewButton(view: View): void {
  const bubble = getElement(Selector.Bubble);

  const buttons = getElementsArray(Selector.ViewButton);
  buttons.forEach((btn) => btn.classList.remove("active"));

  const button = buttons.find((btn) => btn.id === `button--${view}`);

  if (!button) {
    throw Error("Couldn't find a View Button.");
  }

  button.classList.add("active");

  if (button.textContent?.includes(ButtonName.Garage)) {
    bubble.classList.remove("winners");
  } else {
    bubble.classList.add("winners");
  }

  // if (!button) {
  //   const activeButton = getElement(Selector.ButtonGarage);
  //   activeButton.classList.add("active");
  //   bubble.classList.remove("winners");
  //   return;
  // }

  // button?.classList.add("active");

  // if (button?.textContent?.includes(ButtonName.Garage)) {
  //   bubble.classList.remove("winners");
  // } else {
  //   bubble.classList.add("winners");
  // }
}
