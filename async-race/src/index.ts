import "./styles/index.css";
import { renderApp } from "./components/app";

renderApp();

window.addEventListener("DOMContentLoaded", (): void => {
  console.log("DOM Loaded");
});
