import { saveView, getCurrentView, cleanContent } from "../../utils/helpers";
import { toggleUIElements } from "../UI/toggle-elements";
import { View } from "../../../types/types";

// Render
export function renderWinnersView(e?: Event): void {
  if (e && getCurrentView() === View.Winners) return;

  // const button = e ? getTarget(e) : getElement(Selector.ButtonWinners);

  cleanContent();
  toggleUIElements(View.Winners);
  saveView("winners");

  console.log("🙂 Winner View");
}
