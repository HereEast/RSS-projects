// Get saved status
export function getSavedStatus(id: string): string {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  const status = results[id] ? `level--${results[id]}` : "level--unfinished";
  return status;
}
