import { createHeader } from "./header/header";
import { saveView } from "../scripts/_utils/save-view";
import { setActiveButton } from "../scripts/menu/set-active-button";

export function renderApp(): void {
  const header = createHeader();

  document.body.append(header);

  setActiveButton();
  saveView("garage");
}
