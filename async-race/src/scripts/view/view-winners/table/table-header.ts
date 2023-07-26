import { createButton, createElement } from "../../../utils/create-element";
import { Button, Selector, SortOptions, View } from "../../../../types/types";
import { getSortOrder, saveSortOption } from "../helpers/get-sort-params";
import { getCurrentPage } from "../../../utils/pagination-helpers";
import { updateWinners } from "../render-winners";

// Sort winners
export async function sortWinners(sortOpt: SortOptions): Promise<void> {
  const { sort, order } = getSortOrder(sortOpt);

  const newOrder = order === "DESC" ? "ASC" : "DESC";
  const page = getCurrentPage(View.Winners);

  saveSortOption(sort, newOrder);
  await updateWinners({ page, sort, order: newOrder });
}

// Table header
export function createTableHeader(): HTMLElement {
  const header = createElement("div", [Selector.TableHeader]);

  const num = createElement("span", [Selector.RowNumber], "#");
  const color = createElement("span", [Selector.RowColor], "Color");

  const nameContainer = createElement("div", [Selector.RowCar]);
  const nameSpan = createElement("span", [], "Car");
  const buttonSortIds = createButton(Button.SortIds, [Selector.ButtonSortIds]);
  buttonSortIds.textContent = "";

  const winsContainer = createElement("div", [Selector.RowWins]);
  const winsSpan = createElement("span", [], "Wins");
  const buttonSortWins = createButton(Button.SortWin, [Selector.ButtonSortWins]);
  buttonSortWins.textContent = "";

  const timeContainer = createElement("div", [Selector.RowTime]);
  const timeSpan = createElement("span", [], "Time");
  const buttonSortTime = createButton(Button.SortTime, [Selector.ButtonSortTime]);
  buttonSortTime.textContent = "";

  buttonSortTime.addEventListener("click", () => sortWinners("time"));
  buttonSortWins.addEventListener("click", () => sortWinners("wins"));
  buttonSortIds.addEventListener("click", () => sortWinners("id"));

  nameContainer.append(nameSpan, buttonSortIds);
  winsContainer.append(winsSpan, buttonSortWins);
  timeContainer.append(timeSpan, buttonSortTime);

  header.append(num, color, nameContainer, winsContainer, timeContainer);

  return header;
}
