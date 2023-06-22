import { createFooter } from "./ui/footer";
import { createMain } from "./ui/main";

const main = createMain();
const footer = createFooter();

export function renderApp(): void {
  document.body.append(main);
  document.body.append(footer);
}
