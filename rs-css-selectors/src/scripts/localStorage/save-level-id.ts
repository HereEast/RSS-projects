// Save to local storage
export function saveLevelID(id: string): void {
  window.localStorage.setItem("level", id);
}
