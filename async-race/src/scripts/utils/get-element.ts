import { Selector, FormInputs } from "../../types/types";

// TARGET
export function getTarget(e: Event): HTMLElement {
  const target = e.target;

  if (!target) throw Error("Target element is not found...");

  if (!(target instanceof HTMLElement)) {
    throw Error("Target is not an HTMLElement...");
  }

  return target;
}

// CLOSEST
export function getClosest(targetElement: HTMLElement, selector: Selector | string): HTMLElement {
  const element = targetElement.closest(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} element is not found...`);
  }

  return element;
}

// HTML
export function getElement(selector: Selector | string): HTMLElement {
  const element = document.querySelector(selector);

  if (!element || !(element instanceof HTMLElement)) {
    throw Error(`${selector} is not found...`);
  }

  return element;
}

// export function getElement<T extends Element>(selector: Selector | string): T {
//   const element = document.querySelector(selector);

//   if (!element) {
//     throw Error(`Element ${selector} is not found...`);
//   }

//   return element as T;
// }

// ARRAY
export function getElementsArray(selector: Selector | string): HTMLElement[] {
  const elements: HTMLElement[] = Array.from(document.querySelectorAll(selector));

  if (!elements) throw Error(`${selector} elements are not found...`);

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      throw Error("Elements are not an array of HTMLElement...");
    }
  });

  return elements;
}

// GET FORM INPUTS
export function getFormInputs(form: Selector | string): FormInputs {
  const inputText = getElement(`${form} .input-text`);
  const inputColor = getElement(`${form} .input-color`);

  if (!(inputText instanceof HTMLInputElement)) {
    throw Error("Text input isn't found.");
  }

  if (!(inputColor instanceof HTMLInputElement)) {
    throw Error("Color input isn't found.");
  }

  return {
    inputText,
    inputColor,
  };
}
