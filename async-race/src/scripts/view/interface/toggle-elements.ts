import { getElement, getElementsArray } from "../../utils/get-element";
import { Button, Selector, View } from "../../../types/types";

// TOGGLE BUTTON
export function toggleViewButton(view: View): void {
  const bubble = getElement(Selector.Bubble);

  const buttons = getElementsArray(Selector.ViewButton);
  buttons.forEach((btn) => btn.classList.remove("active"));

  const button = buttons.find((btn) => btn.id === `button--${view}`);

  if (!button) {
    throw Error("Couldn't find a View Button.");
  }

  button.classList.add("active");

  if (button.textContent?.includes(Button.Garage)) {
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

// FORMS
export function toggleFormsDisplay(view: View): void {
  const headerForms = getElement(Selector.FormsContainer);

  if (view === View.Garage) {
    headerForms.classList.remove(Selector.FormsHidden.slice(1));
  } else {
    headerForms.classList.add(Selector.FormsHidden.slice(1));
  }
}

// PAGE TITLE
export function togglePageTittle(view: View, count: number = 0): void {
  // Title
  const title = getElement(Selector.Title);
  title.textContent = `${view[0].toUpperCase()}${view.slice(1)}`;

  // Count
  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = String(count);

  // Buttons
  const buttons = getElement(Selector.ViewButtons);

  if (view === "winners") {
    buttons.classList.add("hidden");
  } else {
    buttons.classList.remove("hidden");
  }
}

export function toggleUIElements(view: View): void {
  toggleViewButton(view);
  toggleFormsDisplay(view);
  togglePageTittle(view);
}
