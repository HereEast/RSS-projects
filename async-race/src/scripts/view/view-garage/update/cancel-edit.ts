import { hideUpdateForm } from "./show-update-form";

// CANCEL EDIT
export function handleCancelEdit(e: Event): void {
  e.preventDefault();

  hideUpdateForm(e);
}
