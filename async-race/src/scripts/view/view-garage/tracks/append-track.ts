import { getElement } from "../../../utils/get-element";
import { createTrack } from "./create-track";
import { Selector, Car } from "../../../../types/types";

// Append track
export function appendTrack(car: Car): void {
  const viewBody = getElement(Selector.ViewBody);
  const newTrack = createTrack(car);

  viewBody.append(newTrack);
}

//
// export async function appendNextCar(): Promise<void> {
//   const nextPage = 2;
//   const cars = await getCarsAPI(nextPage);

//   if (cars.items[0]) {
//     console.log(cars.items[0]);
//   }
// }
