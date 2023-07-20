import { Selector } from "../../../types/types";
import { createElement } from "../../utils/create-element";

// Create input
export function createInputForm(buttonText: string, placeholder?: string): HTMLElement {
  const container = createElement("div", [Selector.InputContainer]);

  const textInput = createElement("input", [Selector.InputField]);

  if (textInput instanceof HTMLInputElement) {
    textInput.type = "text";
    textInput.placeholder = placeholder || "";
  }

  const colorInput = createElement("input", [Selector.InputColor]);

  if (colorInput instanceof HTMLInputElement) {
    colorInput.type = "color";
    colorInput.value = "#f6b73c";
  }

  const button = createElement("button", [Selector.ButtonCreate]);
  button.textContent = buttonText;

  container.append(textInput, colorInput, button);

  return container;
}
