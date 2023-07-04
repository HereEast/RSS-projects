import { createElement } from "../../utils/create-element";

export function createWinPopupContent(): HTMLElement {
  const popupContent = createElement("div", ["popup__content"]);

  const image = `
    <div class="popup__image">
      <bear class="dance"></bear>
    </div>
  `;

  const text = `<p class="popup__text">Big congrats!!!<br>
    <span>You’ve got all 10 levels right.</span>
  </p>`;

  popupContent.insertAdjacentHTML("afterbegin", image);
  popupContent.insertAdjacentHTML("beforeend", text);

  return popupContent;
}
