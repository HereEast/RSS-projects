import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { areHintsUsed } from "../answer/check-hints";

export function showPopup(): void {
  const popupContainer = getElement(Selector.PopupContainer);
  const popupMessage = getElement(Selector.PopupText);

  const hintsLine = areHintsUsed() ? "with a little hint help" : "without using any hints";
  const message = `Big congrats!!!<br>
    <span>You’ve got all levels right <br>${hintsLine}.</span>
    `;

  popupMessage.innerHTML = message;

  popupContainer.classList.add("show-popup");
  document.body.style.overflow = "hidden";
}
