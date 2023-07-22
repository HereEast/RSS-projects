import { getElement } from "./get-element";
import { Selector } from "../../types/types";

// Clean content
export function cleanContent(element?: HTMLElement): void {
  const parentElement = element || getElement(Selector.ViewBody);

  [...parentElement.children].forEach((child) => {
    child.remove();
  });
}
