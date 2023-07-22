import { Selector } from "../../../types/types";
import { createElement } from "../../utils/create-element";
import { createBasicForm } from "./form-basic";

//
const CREATE = "create";
const UPDATE = "update";
const BUTTON_CANCEL = "Cancel";
const BUTTON_GENERATE = "Generate Cars";
const EDIT_TITLE = "Edit car ⚙️";

// CREATE
export function createCreateForm(): HTMLElement {
  const formCreate = createElement("form", [Selector.FormCreate]);
  const formElements = createBasicForm(CREATE);

  const generateButton = createElement("button", [Selector.ButtonGenerate], BUTTON_GENERATE);
  const dots = createElement("span", []);

  formCreate.append(formElements, dots, generateButton);

  return formCreate;
}

// UPDATE
export function createUpdateForm(): HTMLElement {
  const formUpdate = createElement("form", [Selector.FormUpdate]);
  const formElements = createBasicForm(UPDATE);

  const cancelButton = createElement("button", [Selector.ButtonCancel], BUTTON_CANCEL);
  const title = createElement("h2", [], EDIT_TITLE);

  formElements.append(cancelButton);
  formUpdate.append(title, formElements);

  return formUpdate;
}

// FORMS
export function createHeaderForms(): HTMLElement {
  const container = createElement("div", [Selector.FormsContainer]);

  const formCreate = createCreateForm();
  const formUpdate = createUpdateForm();

  container.append(formCreate, formUpdate);

  return container;
}
