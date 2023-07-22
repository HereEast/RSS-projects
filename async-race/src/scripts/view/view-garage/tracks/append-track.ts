import { getElement } from "../../../utils/get-element";
import { createTrack } from "./create-track";
import { Selector, Car } from "../../../../types/types";

// Append track
export function appendTrack(car: Car): void {
  const viewBody = getElement(Selector.ViewBody);
  const newTrack = createTrack(car);

  viewBody.append(newTrack);
}
