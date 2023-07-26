import { createElement } from "../../../utils/create-element";
import { Selector, TableData } from "../../../../types/types";

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

// Table header
export function createTableHeader(): HTMLElement {
  const header = createElement("div", [Selector.TableHeader]);

  const num = createElement("span", [Selector.RowNumber], "#");
  const color = createElement("span", [Selector.RowColor], "Color");
  const name = createElement("span", [Selector.RowCar], "Car");
  const wins = createElement("span", [Selector.RowWins], "Wins");
  const time = createElement("span", [Selector.RowTime], "Time, s");

  header.append(num, color, name, wins, time);

  return header;
}
