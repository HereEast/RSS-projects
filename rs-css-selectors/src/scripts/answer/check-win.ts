import { LevelStatus } from "../../types/enums";
import { Info } from "../../types/enums";

export function isWin(): boolean {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  const statuses = Object.values(results);
  const wins = statuses.filter((status) => status === LevelStatus.Done || status === LevelStatus.Hint);

  return wins.length === Info.TotalLevels;
}
