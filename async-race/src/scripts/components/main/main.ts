import { createElement } from "../../utils/create-element";
import { Selector } from "../../../types/enums";
import { createViewHeader } from "./view-header/view-header";

// Main
export function createMain(): HTMLElement {
  const main = createElement("main", [Selector.Main]);
  const mainContainer = createElement("div", [Selector.MainContainer]);

  const viewHeader = createViewHeader();
  const viewBody = createElement("div", [Selector.ViewBody]);

  mainContainer.append(viewHeader, viewBody);
  main.append(mainContainer);

  return main;
}
