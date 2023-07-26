import { WINNERS_URL, WINNERS_LIMIT } from "./constants";
import { WinnersParam, WinnersData, Winner } from "../../types/types";

// Winners
export async function getWinnersAPI({ page, sort = "id", order = "DESC" }: WinnersParam): Promise<WinnersData> {
  const url = `${WINNERS_URL}?_page=${page}&_limit=${WINNERS_LIMIT}&_sort=${sort}&_order=${order}`;

  const res = await fetch(url);
  const winners: Winner[] = await res.json();

  const totalCount = res.headers.get("X-Total-Count");

  if (!totalCount) {
    throw Error("Couldn't get total winners.");
  }

  const winnersData = {
    cars: winners,
    count: totalCount,
  };

  return winnersData;
}

// Get winner
export async function getWinnerAPI(id: string | number): Promise<Winner> {
  const res = await fetch(`${WINNERS_URL}/${id}`);
  const winner: Winner = await res.json();

  return winner;
}
