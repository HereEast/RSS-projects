console.log("✅ CSS Playground");

import "./styles/index.css";
import { renderApp } from "./components/app";
import { initListeners } from "./scripts/listeners";
import { getCurrentLevel } from "./utils/get-level";

console.clear();

const currentLevel = getCurrentLevel();
console.log(currentLevel);

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Rendered");

  initListeners();
});
