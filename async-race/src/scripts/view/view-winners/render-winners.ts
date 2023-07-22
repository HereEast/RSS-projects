import { cleanContent } from "../../utils/helpers";
import { saveCurrentView, getCurrentView } from "../../utils/save-view";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View } from "../../../types/types";

// Render
export function renderWinnersView(e?: Event): void {
  if (e && getCurrentView() === View.Winners) return;

  cleanContent();
  toggleUIElements(View.Winners);
  saveCurrentView("winners");

  console.log("🙂 Winner View");
}
