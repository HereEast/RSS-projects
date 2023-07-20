import { CarsData } from "../../types/enums";
import { GARAGE_URL, GARAGE_LIMIT } from "./constants";

async function getCars(page: number): Promise<CarsData> {
  const res = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${GARAGE_LIMIT}`);
  const data = await res.json();

  console.log(res.headers.get("X-Total-Count"));
  return data;
}
