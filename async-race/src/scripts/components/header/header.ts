import { Selector } from "../../../types/enums";
import { createElement } from "../../utils/create-element";
import { createHeaderButtons } from "./header-buttons";
import { createHeaderForms } from "./header-form";

// Header
export function createHeader(): HTMLElement {
  const header = createElement("header", [Selector.Header]);
  const headerContainer = createElement("div", [Selector.HeaderContainer]);

  const headerButtons = createHeaderButtons();
  const headerForms = createHeaderForms();

  headerContainer.append(headerButtons, headerForms);
  header.append(headerContainer);

  return header;
}
