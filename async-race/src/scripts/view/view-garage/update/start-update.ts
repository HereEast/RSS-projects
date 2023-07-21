import { getTargetID } from "../../../utils/helpers";
import { getCarAPI } from "../../../api/get-cars";
import { showUpdateForm } from "./show-update-form";

// Start update
export async function startUpdate(e: Event): Promise<void> {
  const id = getTargetID(e);
  const car = await getCarAPI(id);

  showUpdateForm(car);
  localStorage.setItem("editItem", JSON.stringify(car));
}
