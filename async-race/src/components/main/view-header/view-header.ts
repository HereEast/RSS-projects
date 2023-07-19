import { createElement } from "../../../scripts/_utils/create-element";
import { Selector } from "../../../types/enums";
import { createCountElement } from "./view-count";
import { createGarageHeaderButtons } from "./view-buttons";

// View header
export function createViewHeader(): HTMLElement {
  const header = createElement("div", [Selector.ViewHeader]);

  const title = createElement("div", [Selector.TitleContainer]);
  const titleText = createElement("h2", [], "Garage");
  const countElement = createCountElement();

  const buttons = createGarageHeaderButtons();

  title.append(titleText, countElement);
  header.append(title, buttons);

  return header;
}
