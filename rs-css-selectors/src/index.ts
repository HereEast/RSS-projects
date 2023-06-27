console.log("✅ CSS Playground");

import "./styles/index.css";
import { renderApp } from "./components/app";
import { initListeners } from "./scripts/listeners";
import { renderSelectedLevel } from "./scripts/levels/render-level";
import { levelsData } from "./data/levels-data";

console.clear();

const savedID = window.localStorage.getItem("level") || "1";
console.log(savedID);

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Rendered");

  renderSelectedLevel(savedID, levelsData);
  initListeners();
});
