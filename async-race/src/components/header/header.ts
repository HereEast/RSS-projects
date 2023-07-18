import { Selector } from "../../_types/enums";
import { createElement } from "../../scripts/_utils/create-element";
import { createHeaderButtons } from "./header-buttons";

// Header
export function createHeader(): HTMLElement {
  const header = createElement("header", [Selector.Header]);
  const headerContainer = createElement("div", [Selector.HeaderContainer]);

  const headerButtons = createHeaderButtons();

  headerContainer.append(headerButtons);
  header.append(headerContainer);

  return header;
}
