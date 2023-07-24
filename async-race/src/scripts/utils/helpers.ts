import { getElement } from "./get-element";
import { Selector } from "../../types/types";

// Clean content
export function cleanContent(element?: HTMLElement): void {
  const parentElement = element || getElement(Selector.ViewBody);

  [...parentElement.children].forEach((child) => {
    child.remove();
  });
}

// Random index
export function getRandomIndex<T>(array: Array<T>): number {
  const index = Math.floor(Math.random() * array.length);
  return index;
}

// Disable button
export function toggleDisable(button: HTMLElement | HTMLButtonElement): void {
  const buttonElement = button;

  if (buttonElement instanceof HTMLButtonElement) {
    buttonElement.disabled = !buttonElement.disabled;
  }
}
