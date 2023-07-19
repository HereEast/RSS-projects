import { Selector } from "../../types/enums";
import { createElement } from "../../scripts/_utils/create-element";
import { createInputForm } from "./form-input";

//
const BUTTON_UPDATE = "Update";
const BUTTON_CANCEL = "Cancel";
const BUTTON_CREATE = "Create";
const BUTTON_GENERATE = "Generate Cars";

// Create forms
export function createHeaderForms(): HTMLElement {
  const container = createElement("div", [Selector.FormsContainer]);

  // Create car
  const formCreate = createElement("form", [Selector.FormCreate]);
  const inputCreate = createInputForm(BUTTON_CREATE, "Car name...");
  const generateButton = createElement("button", [Selector.ButtonGenerate], BUTTON_GENERATE);

  const divider = createElement("span", []);

  // Update car
  const formUpdate = createElement("form", [Selector.FormUpdate]);
  const inputUpdate = createInputForm(BUTTON_UPDATE, "Car name...");
  const cancelButton = createElement("button", [Selector.ButtonCancel], BUTTON_CANCEL);
  const title = createElement("h2", [], "Edit car ⚙️");

  inputUpdate.append(cancelButton);
  formCreate.append(inputCreate, divider, generateButton);
  formUpdate.append(title, inputUpdate);
  container.append(formCreate, formUpdate);

  return container;
}
