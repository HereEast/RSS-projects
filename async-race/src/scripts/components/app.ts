import { createHeader } from "./header/header";
import { createFooter } from "./footer/footer";
import { createMain } from "./main/main";
import { renderGarageView } from "../view/view-garage/render-garage";

// Render App
export function renderApp(): void {
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  document.body.append(header, main, footer);

  renderGarageView();
}
