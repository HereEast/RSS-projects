import { SVGElement } from "../../types/types";

// HTML
export function createElement(tag: string, classes?: string[], text?: string): HTMLElement {
  const element = document.createElement(tag);

  if (classes?.length) {
    const classList = classes.map((el) => el.slice(1));
    element.classList.add(...classList);
  }

  if (text) element.textContent = text;

  return element;
}

// LINK
export function createLink(text: string, url: string, classes?: string[]): HTMLAnchorElement {
  const link = createElement("a", classes, text);

  if (!(link instanceof HTMLAnchorElement)) {
    throw Error("Failed to create a <a> element...");
  }

  link.href = url;
  return link;
}

// SVG
export function createSVG(params: SVGElement): HTMLElement {
  const div = createElement("div", [params.divClass]);

  const svg = document.createElementNS(params.ns, "svg");
  svg.setAttribute("width", params.width);
  svg.setAttribute("height", params.height);

  if (params.color && svg instanceof SVGElement) {
    svg.style.backgroundColor = params.color;
  }

  div.append(svg);

  return div;
}
