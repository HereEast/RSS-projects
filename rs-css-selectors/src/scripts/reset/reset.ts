import { saveLevelID } from "../localStorage/save-level-id";
import { cleanSavedResults } from "./clean-results";
import { renderSelectedLevel } from "../levels/render-level";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { levelsData } from "../../data/levels-data";
import { cleanInput } from "./clean-input";
import { cleanStatusIcons } from "./clean-icons";

// Reset
export function resetGame(): void {
  cleanSavedResults();
  saveLevelID("1");

  const id = getCurrentLevelID();

  renderSelectedLevel(id, levelsData);
  cleanInput();
  cleanStatusIcons();
}
