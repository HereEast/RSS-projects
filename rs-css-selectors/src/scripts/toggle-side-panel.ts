import { Selector } from "../types/enums";

// Show
export function showPanel(e: Event): void {
  if (window.innerWidth > 980) return;
  const target = e.target;

  console.log(target);

  if (!target || !(target instanceof HTMLButtonElement)) return;
  if (!target.closest(Selector.ShowLevelsBtn)) return;

  const levelsPanel = getLevelsPanel();

  levelsPanel?.classList.add("panel--visible");
}

// Hide
export function hidePanel(e: Event): void {
  if (window.innerWidth > 980) return;
  const target = e.target;

  if (!target || !(target instanceof HTMLElement)) return;
  if (!target.closest(Selector.HideLevelsBtn)) return;

  const levelsPanel = getLevelsPanel();

  levelsPanel?.classList.remove("panel--visible");
}

// Get panel
function getLevelsPanel(): HTMLElement {
  const levelsPanel = document.querySelector(Selector.LevelsPanel);

  if (!levelsPanel || !(levelsPanel instanceof HTMLElement)) {
    throw Error(`${Selector.LevelsPanel} is not found...`);
  }

  return levelsPanel;
}
