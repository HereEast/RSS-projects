console.log("✅ CSS Playground");

import "./styles/index.css";
import { renderApp } from "./components/app";
import { initListeners } from "./scripts/listeners";
import { renderSelectedLevel } from "./scripts/levels/render-level";
import { levelsData } from "./data/levels-data";

alert(`Привет! 
Хочу попросить 1 день поправить ошибки,
которые выскочили при деплое. Подожди, пожалуйста, с проверкой до среды:)
Спасибо!`);

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Rendered");

  const savedID = window.localStorage.getItem("level") || "1";
  renderSelectedLevel(savedID, levelsData);

  initListeners();
});
