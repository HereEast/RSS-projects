import { createElement } from "./create-element";
import { SVGElement } from "../../types/enums";

// SVG
export function createSVGElement({ divClass, ns, width, height, color = "whitesmoke" }: SVGElement): HTMLElement {
  const div = createElement("div", [divClass]);

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  if (color && svg instanceof SVGElement) {
    svg.style.backgroundColor = color;
  }

  div.append(svg);

  return div;
}
