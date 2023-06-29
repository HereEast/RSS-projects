// Delete saved results
export function cleanSavedResults(): void {
  window.localStorage.removeItem("results");
}
