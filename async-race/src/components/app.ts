import { createHeader } from "./header/header";
import { saveView } from "../scripts/_utils/save-view";
import { toggleViewButton } from "../scripts/menu/toggle-active-button";
import { createFooter } from "./footer/footer";
import { View } from "../types/enums";

// Render App
export function renderApp(): void {
  const header = createHeader();
  const footer = createFooter();

  document.body.append(header, footer);

  toggleViewButton(View.Garage);
  saveView(View.Garage);
}
