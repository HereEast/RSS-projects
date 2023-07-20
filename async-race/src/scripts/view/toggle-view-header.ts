import { Selector, View } from "../../types/enums";
import { getElement } from "../utils/get-element";

// Toggle header
export function toggleViewHeader(view: View, count: number = 119): void {
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
