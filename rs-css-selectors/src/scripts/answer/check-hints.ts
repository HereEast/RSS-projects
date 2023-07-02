import { LevelStatus } from "../../types/enums";

export function areHintsUsed(): boolean {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  const statuses = Object.values(results);
  const hints = statuses.filter((status) => status === LevelStatus.Hint);

  return hints.length > 0;
}
