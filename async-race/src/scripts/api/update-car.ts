import { Car, NewCar } from "../../types/types";
import { GARAGE_URL } from "./constants";

// Get cars
export async function updateCarAPI(id: number, body: NewCar): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}
