import "./styles/index.css";
import { renderApp } from "./scripts/components/app";
import { initListeners } from "./scripts/listeners";
import { renderGarageView } from "./scripts/view/view-garage/render-garage";
// import { renderWinnersView } from "./scripts/view/view-winners/render-winners";

renderApp();
renderGarageView();
// renderWinnersView();

window.addEventListener("DOMContentLoaded", (): void => {
  initListeners();
});
