import { Selector } from "../../../../types/types";
// import { getCars } from "../../../api/get-cars";
import { deleteCarAPI } from "../../../api/delete-car";
import { getClosest, getTarget } from "../../../utils/get-element";
import { updateTotalCount } from "../../../utils/helpers";

// Delete
export function handleDelete(e: Event): void {
  const target = getTarget(e);
  const track = getClosest(target, Selector.Track);
  const id = track.id.split("--").at(-1);

  if (!id) {
    throw Error("Couldn't get car's ID.");
  }

  console.log(track);

  deleteCarAPI(id)
    .then(() => {
      track.remove();
      updateTotalCount(-1);
    })
    // .then(() => getCars(1))
    .then((cars) => console.log(cars));

  console.log(id);
}
