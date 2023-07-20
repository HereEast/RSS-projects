import { createElement } from "../../../utils/create-element";
import { Selector } from "../../../../types/types";

export function createPagination(): HTMLElement {
  const container = createElement("div", [Selector.PagesContainer]);

  return container;
}
