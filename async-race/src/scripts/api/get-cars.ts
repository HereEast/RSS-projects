import { CarsData, Car } from "../../types/enums";
import { GARAGE_URL, GARAGE_LIMIT } from "./constants";

// Get cars
export async function getCars(page: number = 1): Promise<CarsData> {
  const res = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${GARAGE_LIMIT}`);
  const data: Car[] = await res.json();

  const totalCount = res.headers.get("X-Total-Count");

  if (!totalCount) {
    throw Error("Couldn't get data from X-Total-Count header.");
  }

  const cars = {
    items: data,
    count: totalCount,
  };

  console.log(res.headers.get("X-Total-Count"));

  return cars;
}
