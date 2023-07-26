import { Selector, Winner, TableData } from "../../../types/types";
import { getCarAPI } from "../../api/get-cars";
import { createElement } from "../../utils/create-element";
import { getElement } from "../../utils/get-element";
import { cleanContent } from "../../utils/helpers";
import { createTableHeader } from "../../components/table/table-header";

// Create row
export function createRow(winner: TableData, idx: number): HTMLElement {
  const row = createElement("div", [Selector.TableRow]);
  row.id = `track--${winner.id}`;

  const num = createElement("span", [Selector.RowNumber], `${idx + 1}`);
  const colorContainer = createElement("div", [".color__container"]);
  const color = createElement("span", [Selector.RowColor]);
  colorContainer.append(color);

  const name = createElement("span", [Selector.RowCar], winner.name);
  const wins = createElement("span", [Selector.RowWins], String(winner.win));
  const time = createElement("span", [Selector.RowTime], String(winner.time));

  color.style.backgroundColor = winner.color;

  row.append(num, colorContainer, name, wins, time);

  return row;
}

// Rows
export async function createRows(winners: Winner[]): Promise<HTMLElement> {
  const rowsContainer = createElement("div", [Selector.RowsContainer]);

  winners.forEach(async (winner, idx) => {
    const car = await getCarAPI(String(winner.id));

    const props = {
      color: car.color,
      name: car.name,
      id: car.id,
      win: winner.win,
      time: Number((winner.time / 1000).toFixed(2)),
    };

    const row = createRow(props, idx);
    rowsContainer.append(row);

    console.log(car);
  });

  return rowsContainer;
}

// Render tracks
export async function appendWinners(winners: Winner[]): Promise<HTMLElement> {
  const viewBody = getElement(Selector.ViewBody);
  cleanContent(viewBody);

  const table = createElement("div", [Selector.Table]);
  const tableHeader = createTableHeader();
  const rows = await createRows(winners);

  table.append(tableHeader, rows);
  viewBody.append(table);

  return viewBody;
}
