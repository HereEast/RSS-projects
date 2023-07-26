import { createElement } from "../../../utils/create-element";
import { Selector, TableData } from "../../../../types/types";
import { getNum } from "./order-numbers";

// Create row
export function createRow(winner: TableData, idx: number): HTMLElement {
  const row = createElement("div", [Selector.Row]);
  row.id = `row--${winner.id}`;

  const n = getNum(idx);

  const num = createElement("span", [Selector.RowNumber], `${n}`);
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
