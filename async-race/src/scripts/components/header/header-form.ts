import { Selector } from "../../../types/types";
import { createElement } from "../../utils/create-element";
import { createInputForm } from "./form-input";

//
const BUTTON_UPDATE = "Update";
const BUTTON_CANCEL = "Cancel";
const BUTTON_CREATE = "Create";
const BUTTON_GENERATE = "Generate Cars";
const EDIT_TITLE = "Edit car ⚙️";
const PLACEHOLDER = "Car name...";

// Create forms
export function createHeaderForms(): HTMLElement {
  const container = createElement("div", [Selector.FormsContainer]);

  // Create car
  const formCreate = createElement("form", [Selector.FormCreate]);
  const inputCreate = createInputForm(BUTTON_CREATE, PLACEHOLDER);

  const generateButton = createElement("button", [Selector.ButtonGenerate], BUTTON_GENERATE);

  const divider = createElement("span", []);

  // Update car
  const formUpdate = createElement("form", [Selector.FormUpdate]);
  const inputUpdate = createInputForm(BUTTON_UPDATE, PLACEHOLDER);
  const cancelButton = createElement("button", [Selector.ButtonCancel], BUTTON_CANCEL);
  const title = createElement("h2", [], EDIT_TITLE);

  inputUpdate.append(cancelButton);
  formCreate.append(inputCreate, divider, generateButton);
  formUpdate.append(title, inputUpdate);
  container.append(formCreate, formUpdate);

  return container;
}
