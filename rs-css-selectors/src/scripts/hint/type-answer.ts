import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";

export function typeAnswer(text: string): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  let i = 0;
  let currentValue = "";

  const int = setInterval(() => {
    currentValue += text[i];
    input.value = currentValue;

    if (i >= text.length - 1) {
      clearInterval(int);
    }
    i++;
  }, 50);
}
