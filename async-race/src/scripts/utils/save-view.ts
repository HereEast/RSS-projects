// Save
export function saveCurrentView(currentView = "garage"): void {
  document.body.className = "";
  document.body.classList.add(currentView);

  localStorage.setItem("view", currentView);
}

// Get
export function getCurrentView(): string {
  return window.localStorage.getItem("view") ?? "";
}
