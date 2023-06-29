import { getElement } from "../../utils/get-element";
import { Selector, Animation } from "../../types/enums";

export function removeAnimation(): void {
  const playground = getElement(Selector.Playground);
  const elements = [...playground.children];

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) throw Error("Element is not an HTMLElement...");
    element.classList.remove(Animation.Hide);
  });
}
