// Get current Level ID
export function getCurrentLevelID(): string {
  const currentID = window.localStorage.getItem("level") || "1";
  return currentID;
}
