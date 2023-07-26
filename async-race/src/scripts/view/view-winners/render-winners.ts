import { cleanContent, saveCurrentView, getCurrentView } from "../../utils/helpers";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View } from "../../../types/types";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { getWinnersAPI } from "../../api/winners";
import { appendWinners } from "./winners-table";
import { setTotalCount } from "../../utils/total-helpers";

//
export async function updateWinners(page: number): Promise<void> {
  const winners = await getWinnersAPI({ page });

  // await deleteWinnerAPI(178);

  await appendWinners(winners.cars);
  setTotalCount(View.Winners, winners.count);
}

//
// Render
//
export async function renderWinnersView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Winners) return;

  cleanContent();
  toggleUIElements(View.Winners);
  saveCurrentView("winners");

  const page = getCurrentPage(View.Winners);
  await updateWinners(page);

  console.log("🙂 Winner View");
}
