import { getElementsArray } from "../../../utils/get-element";
import { Selector, View } from "../../../../types/types";
import { isLastPage, getCurrentPage } from "../../../utils/pagination-helpers";

// Toggle page buttons
export function togglePageButtons(): void {
  const buttons = getElementsArray(Selector.ButtonPage);
  const [prevButton, nextButton] = buttons;

  const disabledClass = Selector.ButtonPageDisabled.slice(1);

  buttons.forEach((button) => button.classList.remove(disabledClass));

  if (getCurrentPage(View.Garage) === 1) {
    prevButton.classList.add(disabledClass);
  }

  if (isLastPage(View.Garage)) {
    nextButton.classList.add(disabledClass);
  }
}
