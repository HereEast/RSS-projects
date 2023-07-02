import { Selector } from "../../types/enums";
import { getElement } from "../../utils/get-element";
import { getCurrentLevelID } from "../localStorage/get-current-id";
import { levelsData } from "../../data/levels-data";
import { typeAnswer } from "./type-answer";

export function handleHint(): void {
  const input = getElement(Selector.Input);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Target is not an HTMLInputElement...");
  }

  const currentID = getCurrentLevelID();
  const levelData = levelsData.find((data) => data.id === currentID);
  const answer = levelData ? levelData.answer : "";

  if (answer) typeAnswer(answer);
  else throw Error("Failed to find this level answer...");

  input.dataset.hint = "hint";
}
