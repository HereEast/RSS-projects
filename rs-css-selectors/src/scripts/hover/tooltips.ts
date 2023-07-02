import { getTarget } from "../../utils/get-target";
import { getElement } from "../../utils/get-element";
import { Selector } from "../../types/enums";
import { createTooltip } from "./create-tooltip";

// Tooltip on hover
export function handleTooltips(e: MouseEvent): void {
  const target = getTarget(e);

  if (target.classList.contains("playground")) return;

  const playground = getElement(Selector.Playground);
  const tooltip = createTooltip(target);

  playground.append(tooltip);

  target.addEventListener("mouseout", () => {
    tooltip.remove();
  });
}
