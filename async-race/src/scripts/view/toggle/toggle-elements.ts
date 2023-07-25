import { getElement } from "../../utils/get-element";
import { Selector, View } from "../../../types/types";
import { toggleViewButton } from "./toggle-buttons";

// Hide forms
export function toggleFormsDisplay(view: View): void {
  const headerForms = getElement(Selector.FormsContainer);

  if (view === View.Garage) {
    headerForms.classList.remove(Selector.FormsHidden.slice(1));
  } else {
    headerForms.classList.add(Selector.FormsHidden.slice(1));
  }
}

// Page Header
export function togglePageTitle(view: View, count: number = 0): void {
  const title = getElement(Selector.Title);
  title.textContent = `${view[0].toUpperCase()}${view.slice(1)}`;

  const countElement = getElement(Selector.CurrentCount);
  countElement.textContent = String(count);

  const garageButtons = getElement(Selector.ViewButtons);

  if (view === "winners") {
    garageButtons.classList.add("hidden");
  } else {
    garageButtons.classList.remove("hidden");
  }
}

// All elements
export function toggleUIElements(view: View): void {
  toggleViewButton(view);
  toggleFormsDisplay(view);
  togglePageTitle(view);
}
