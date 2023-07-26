import { Car, NewCar } from "../../types/types";
import { GARAGE_URL } from "./constants";

// Create
export async function createCarAPI(body: NewCar): Promise<Car> {
  const res = await fetch(`${GARAGE_URL}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}

// Update
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

// Get cars
export async function deleteCarAPI(id: string): Promise<void> {
  const res = await fetch(`${GARAGE_URL}/${id}`, {
    method: "DELETE",
  });

  const data = res.json();
  return data;
}
