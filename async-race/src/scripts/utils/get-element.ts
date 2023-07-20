import { Selector } from "../../types/types";

// Target
export function getTarget(e: Event): HTMLElement {
  const target = e.target;

  if (!target) throw Error("Target element is not found...");
  if (!(target instanceof HTMLElement)) throw Error("Target is not an HTMLElement...");

  return target;
}

// Closest
export function getClosest(targetElement: HTMLElement, selector: Selector): HTMLElement {
  const element = targetElement.closest(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} element is not found...`);
  }

  return element;
}

// Element
export function getElement(selector: Selector | string): HTMLElement {
  const element = document.querySelector(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} is not found...`);
  }

  return element;
}

// Array
export function getElementsArray(selector: Selector): HTMLElement[] {
  const elements: HTMLElement[] = Array.from(document.querySelectorAll(selector));

  if (!elements) throw Error(`${selector} elements are not found...`);

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      throw Error("Elements are not an array of HTMLElement...");
    }
  });

  return elements;
}
