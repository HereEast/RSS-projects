import { cleanContent, saveCurrentView, getCurrentView } from "../../utils/helpers";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View } from "../../../types/types";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { getWinnersAPI } from "../../api/get-winners";
import { appendWinners } from "./append-winners";
import { setTotalCount } from "../../utils/total-helpers";

//
export async function updateWinners(page: number): Promise<void> {
  const { cars: winners, count } = await getWinnersAPI({ page });

  console.log(winners);
  // await deleteWinnerAPI(178);

  await appendWinners(winners);
  setTotalCount(View.Winners, count);
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
