import { ButtonName, PopupButtons } from "../../types/enums";
import { createElement } from "../../utils/create-element";
import { createPopupButtons } from "./popup-buttons";
import { createWinPopupContent } from "./win-popup-content";

export function createWinPopup(): HTMLElement {
  const popupContainer = createElement("div", ["popup__container", "overlay"]);
  const popup = createElement("div", ["popup"]);

  const buttons: PopupButtons = [
    {
      classNames: ["button", "button--close-popup"],
      name: ButtonName.Close,
    },
    {
      classNames: ["button", "button--play"],
      name: ButtonName.Play,
    },
  ];

  const popupButtons = createPopupButtons(buttons);
  const popupContent = createWinPopupContent();

  popup.append(popupContent, popupButtons);
  popupContainer.append(popup);

  return popupContainer;
}