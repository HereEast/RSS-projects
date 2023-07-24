import "./styles/index.css";
import { renderApp } from "./scripts/components/app";
import { initListeners } from "./scripts/listeners";
import { renderGarageView } from "./scripts/view/view-garage/render-garage";

renderApp();
renderGarageView();

alert(`Привет!
Если есть возможность, дай мне, пожалуйста, еще полтора дня, чтобы закончить задание. До вечера среды.
Буду очень благодарна!
(=^･ω･^=)`);

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Loaded");

  initListeners();
});
