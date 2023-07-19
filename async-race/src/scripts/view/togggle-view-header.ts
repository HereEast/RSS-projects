import { Selector, View } from "../../types/enums";
import { getElement } from "../_utils/get-element";

// Toggle header
export function toggleViewHeader(view: View): void {
  // Title
  const title = getElement(Selector.Title);
  title.textContent = `${view[0].toUpperCase()}${view.slice(1)}`;

  // Buttons
  const buttons = getElement(Selector.ViewButtons);

  if (view === "winners") {
    buttons.classList.add("hidden");
  } else {
    buttons.classList.remove("hidden");
  }

  // Count
}
