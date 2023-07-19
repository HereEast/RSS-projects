import { createElement } from "../../../scripts/_utils/create-element";
import { Selector } from "../../../types/enums";

export function createPagination(): HTMLElement {
  const container = createElement("div", [Selector.PagesContainer]);

  return container;
}