import "./styles/index.css";
import { renderApp } from "./scripts/components/app";
// import { setView } from "./scripts/utils/set-view";
import { initListeners } from "./scripts/listeners";

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("✅ DOM Loaded");

  initListeners();
});
