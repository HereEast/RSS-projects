import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function showPopup(): void {
  const popup = getElement(Selector.Popup);

  popup.classList.add("show-popup");
  document.body.style.overflow = "hidden";
}
