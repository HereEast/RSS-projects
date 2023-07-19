import { createHeader } from "./header/header";
import { saveView } from "../scripts/_utils/save-view";
import { toggleViewButton } from "../scripts/menu/toggle-active-button";
import { createFooter } from "./footer/footer";
import { View } from "../types/enums";
import { createMain } from "./main/main";

// Render App
export function renderApp(): void {
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  document.body.append(header, main, footer);

  toggleViewButton(View.Garage);
  saveView(View.Garage);
}
