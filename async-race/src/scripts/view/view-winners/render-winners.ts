import { saveCurrentView, getCurrentView } from "../../utils/helpers";
import { toggleUIElements } from "../toggle/toggle-elements";
import { View, WinnersParam } from "../../../types/types";
import { getCurrentPage } from "../../utils/pagination-helpers";
import { getWinnersAPI } from "../../api/get-winners";
import { renderWinnersTable } from "./render-table";
import { setTotalCount } from "../../utils/total-helpers";
// import { initPagination } from "../../listeners";
// import { initSortButtons } from "./init-sort";
import { getSortOrder } from "./helpers/get-sort-params";

//
// Update winners
//
export async function updateWinners(sortParams: WinnersParam): Promise<void> {
  const { cars: winners, count } = await getWinnersAPI(sortParams);

  await renderWinnersTable(winners);

  setTotalCount(View.Winners, count);
  // initPagination(View.Winners);
}

//
// Render
//
export async function renderWinnersView(e?: Event): Promise<void> {
  if (e && getCurrentView() === View.Winners) return;

  saveCurrentView(View.Winners);
  toggleUIElements(View.Winners);

  const page = getCurrentPage(View.Winners);
  const { sort, order } = getSortOrder("id");

  await updateWinners({ page, sort, order });

  console.log("🙂 Winner View");
}
