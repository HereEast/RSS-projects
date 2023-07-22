import { createElement } from "../../utils/create-element";
import { Selector } from "../../../types/types";
import { createPageHeader } from "./page-header/page-header";

// Main
export function createMain(): HTMLElement {
  const main = createElement("main", [Selector.Main]);
  const mainContainer = createElement("div", [Selector.MainContainer]);

  const viewHeader = createPageHeader();
  const viewBody = createElement("div", [Selector.ViewBody]);

  mainContainer.append(viewHeader, viewBody);
  main.append(mainContainer);

  return main;
}
