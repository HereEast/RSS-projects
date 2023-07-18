export function saveView(currentView = "garage"): void {
  document.body.dataset.view = currentView;
  window.localStorage.setItem("view", currentView);
}

export function getCurrentView(): string {
  return window.localStorage.getItem("view") ?? "";
}
