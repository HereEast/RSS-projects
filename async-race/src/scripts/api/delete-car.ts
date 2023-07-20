import { GARAGE_URL } from "./constants";

// Get cars
export async function deleteCarAPI(id: string): Promise<void> {
  await fetch(`${GARAGE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
