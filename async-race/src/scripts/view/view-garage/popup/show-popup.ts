import { getElement } from "../../../utils/get-element";
import { Selector, DriveResult } from "../../../../types/types";

// Hide popup
export function hidePopup(popup?: HTMLElement): void {
  const openedPopup = popup || getElement(Selector.Popup);
  openedPopup.classList.remove(Selector.PopupOpen.slice(1));
}

// Show popup
export function showPopup(winner: DriveResult): void {
  const popup = getElement(Selector.Popup);

  const winnerElement = getElement(Selector.PopupWinner);
  const timeElement = getElement(Selector.PopupTime);

  const name = getElement(`#car__name--${winner.id}`).textContent;
  const time = Number(winner.time / 1000).toFixed(3);

  winnerElement.textContent = name;
  timeElement.textContent = `${time} sec`;

  popup.classList.add(Selector.PopupOpen.slice(1));

  // setTimeout(() => {
  //   hidePopup(popup);
  // }, 3000);
}
