import { Selector } from "../../../../types/types";
import { deleteCarAPI } from "../../../api/delete-car";
import { getClosest, getTarget } from "../../../utils/get-element";
import { updateUIOnDelete } from "../../UI/ui-on-delete";
// import { getCarsAPI } from "../../../api/get-cars";

// Delete
export async function handleDelete(e: Event): Promise<void> {
  const target = getTarget(e);
  const track = getClosest(target, Selector.Track);
  const id = track.id.split("--").at(-1);

  if (!id) {
    throw Error("Couldn't get car's ID...");
  }

  await deleteCarAPI(id);
  updateUIOnDelete(track);

  const event = new Event("delete", { bubbles: true });
  target.dispatchEvent(event);
}
