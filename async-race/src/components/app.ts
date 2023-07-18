import { createHeader } from "./header/header";
import { saveView } from "../scripts/_utils/save-view";
import { setActiveButton } from "../scripts/menu/set-active-button";
import { createFooter } from "./footer/footer";

export function renderApp(): void {
  const header = createHeader();
  const footer = createFooter();

  document.body.append(header, footer);

  setActiveButton();
  saveView("garage");
}
