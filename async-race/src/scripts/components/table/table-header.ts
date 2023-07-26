import { createElement } from "../../utils/create-element";
import { Selector } from "../../../types/types";

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
