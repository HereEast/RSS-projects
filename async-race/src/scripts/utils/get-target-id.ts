import { getTarget, getClosest } from "./get-element";
import { Selector } from "../../types/types";

// Get target ID
export function getTargetID(e: Event): string {
  const target = getTarget(e);
  const track = getClosest(target, Selector.Track);
  const id = track.id.split("--").at(-1);

  if (!id) {
    throw Error("Couldn't get car's ID...");
  }

  return id;
}
