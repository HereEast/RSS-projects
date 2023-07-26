import { WINNERS_URL, WINNERS_LIMIT } from "./constants";
import { WinnersParam, WinnersData, Winner } from "../../types/types";

// Winners
export async function getWinnersAPI({ page }: WinnersParam): Promise<WinnersData> {
  const res = await fetch(`${WINNERS_URL}?_page=${page}&_limit=${WINNERS_LIMIT}`);
  const data: Winner[] = await res.json();

  const totalCount = res.headers.get("X-Total-Count");

  if (!totalCount) {
    throw Error("Couldn't get total winners.");
  }

  const winners = {
    cars: data,
    count: totalCount,
  };

  return winners;
}

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

// Delete winner
export async function deleteWinnerAPI(id: string): Promise<void> {
  await fetch(`${WINNERS_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
