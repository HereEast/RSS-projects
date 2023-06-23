console.log("✅ CSS Playground");

import "./styles/index.css";
import { renderApp } from "./components/app";
import { initListeners } from "./scripts/listeners";

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Rendered");

  initListeners();
});
