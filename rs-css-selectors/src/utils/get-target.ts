export function getTarget(e: Event, element = HTMLElement): HTMLElement {
  const target = e.target;

  if (!target) throw Error("Target element is not found...");
  if (!(target instanceof element)) throw Error("Target element is not an HTMLElement...");

  return target;
}
