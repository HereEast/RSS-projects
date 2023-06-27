// Save to local storage
export function saveLevel(id: string): void {
  window.localStorage.setItem("level", id);
}
