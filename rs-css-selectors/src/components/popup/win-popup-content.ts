import { createElement } from "../../utils/create-element";
import { areHintsUsed } from "../../scripts/answer/check-hints";

export function createWinPopupContent(): HTMLElement {
  const popupContent = createElement("div", ["popup__content"]);

  const image = `
    <div class="popup__image">
      <bear class="dance"></bear>
    </div>
  `;

  const hintsLine = areHintsUsed() ? "with a little hint help" : "without using any hints";
  const text = `<p class="popup__text">Big congrats!!!<br>
    <span>You’ve got all levels right <br>${hintsLine}.</span>
  </p>`;

  popupContent.insertAdjacentHTML("afterbegin", image);
  popupContent.insertAdjacentHTML("beforeend", text);

  return popupContent;
}
