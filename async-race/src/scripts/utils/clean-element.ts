import { Selector } from "../../types/types";
import { getElement } from "./get-element";

// Clean element
export function cleanElement(parentElement: HTMLElement): void {
  while (parentElement.firstChild) {
    parentElement.firstChild.remove();
  }
}

// Clean view
export function cleanView(): void {
  const viewBody = getElement(Selector.ViewBody);

  while (viewBody.firstChild) {
    viewBody.firstChild.remove();
  }
}
