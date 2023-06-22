import { createFooter } from "./footer";
import { createMain } from "./main";

const main = createMain();
const footer = createFooter();

export function renderApp(): void {
  document.body.append(main);
  document.body.append(footer);
}
