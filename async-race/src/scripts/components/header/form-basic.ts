import { Selector, Action } from "../../../types/types";
import { createElement, createInput } from "../../utils/create-element";

const PLACEHOLDER = "Car name...";
const COLOR = "#f6b73c";

// Basic form
export function createBasicForm(action: Action): HTMLElement {
  const formContainer = createElement("div", [Selector.FormContainer]);

  const textInput = createInput("text", action);
  textInput.placeholder = PLACEHOLDER;

  const colorInput = createInput("color", action);
  colorInput.value = COLOR;

  const buttonID = `button__${action}`;
  const button = createElement("button", [`.${buttonID}`]);
  button.textContent = action;
  button.id = buttonID;

  formContainer.append(textInput, colorInput, button);

  return formContainer;
}
