import { Levels } from "../../types/types";
import { highlightLevel } from "./highlight-item";
import { updateLevelCount } from "./update-count";
import { updateTaskName } from "./level-task";
import { updateHTMLEditor } from "./level-html-content";
import { updateGraphics } from "./graphics";
import { setHeaderStatusIcon } from "../answer/set-status-icon";
import { cleanInput } from "../reset/clean-input";

// Render selected level
export function renderSelectedLevel(id: string, data: Levels): void {
  document.body.className = `level--${id}`;

  highlightLevel(id);

  updateLevelCount(id);
  updateTaskName(id, data);
  updateHTMLEditor(id, data);
  updateGraphics(id, data);
  setHeaderStatusIcon(id);
  cleanInput();
}
