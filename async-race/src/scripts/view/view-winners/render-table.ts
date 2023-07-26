import { Selector, Winner } from "../../../types/types";
import { getCarAPI } from "../../api/get-cars";
import { createElement } from "../../utils/create-element";
import { getElement } from "../../utils/get-element";
import { cleanContent } from "../../utils/helpers";
import { createTableHeader } from "./table/table-header";
import { createRow } from "./table/table-row";

// Rows
export async function appendRows(winners: Winner[]): Promise<HTMLElement> {
  const rowsContainer = createElement("div", [Selector.RowsContainer]);

  winners.forEach(async (winner, idx) => {
    const car = await getCarAPI(String(winner.id));

    if (!car.id) return;

    const props = {
      color: car.color,
      name: car.name,
      id: car.id,
      win: winner.win,
      time: Number((winner.time / 1000).toFixed(2)),
    };

    const row = createRow(props, idx);
    rowsContainer.append(row);
  });

  return rowsContainer;
}

// Render tracks
export async function renderWinnersTable(winners: Winner[]): Promise<HTMLElement> {
  const viewBody = getElement(Selector.ViewBody);
  cleanContent(viewBody);

  const table = createElement("div", [Selector.Table]);
  const tableHeader = createTableHeader();
  const rows = await appendRows(winners);

  table.append(tableHeader, rows);
  viewBody.append(table);

  return viewBody;
}
