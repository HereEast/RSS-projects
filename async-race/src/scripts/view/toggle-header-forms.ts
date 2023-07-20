import { Selector, View } from "../../types/enums";
import { getElement } from "../utils/get-element";

export function toggleFormsDisplay(string: View): void {
  const headerForms = getElement(Selector.FormsContainer);

  if (string === View.Garage) {
    headerForms.classList.remove(Selector.FormsHidden.slice(1));
  } else {
    headerForms.classList.add(Selector.FormsHidden.slice(1));
  }
}
