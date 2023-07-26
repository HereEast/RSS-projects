import { WINNERS_URL } from "./constants";
import { Winner } from "../../types/types";

// Save winner
export async function saveWinnerAPI(body: Winner): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const winner = await res.json();

  return winner;
}

// Update
export async function updateWinnerAPI(id: number | string, body: Partial<Winner>): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const car = await res.json();

  return car;
}

// Delete winner
export async function deleteWinnerAPI(id: string | number): Promise<void> {
  const res = await fetch(`${WINNERS_URL}/${id}`, {
    method: "DELETE",
  });

  const data = res.json();
  return data;
}
