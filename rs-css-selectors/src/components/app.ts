import { createFooter } from "./footer";
import { createMain } from "./main";

export function renderApp(): void {
  const main = createMain();
  const footer = createFooter();

  document.body.append(main);
  document.body.append(footer);
}
