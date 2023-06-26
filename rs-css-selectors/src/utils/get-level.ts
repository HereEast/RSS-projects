export function getCurrentLevel(): number {
  return Number(window.localStorage.getItem("level")) | 1;
}
