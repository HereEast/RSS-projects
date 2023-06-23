import { Selector } from "../types/enums";
import { showPanel, hidePanel } from "./toggle-side-panel";

export function initListeners(): void {
  const showButton = document.querySelector(Selector.ShowLevelsBtn);
  const hideButton = document.querySelector(Selector.HideLevelsBtn);

  if (!showButton) throw Error(`${Selector.ShowLevelsBtn} is not found...`);
  if (!hideButton) throw Error(`${Selector.HideLevelsBtn} is not found...`);

  showButton.addEventListener("click", showPanel);
  hideButton.addEventListener("click", hidePanel);

  // window.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });
}
