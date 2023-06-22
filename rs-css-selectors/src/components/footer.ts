import { createElement } from "../utils/element";

export function createFooter(): HTMLElement {
  const footer = createElement("footer", ["footer", "content-width"]);
  const footerContainer = createElement("div", ["footer__container"]);

  const linkRS = "https://rs.school/";
  const linkGH = "https://github.com/HereEast";

  const copyright = `<span>2023, <a href="${linkRS}" target="_blank">RS School</a> — RS CSS Selectors</span>`;
  const github = `<a href="${linkGH}" target="_blank">Here East</a>`;

  footerContainer.insertAdjacentHTML("afterbegin", github);
  footerContainer.insertAdjacentHTML("afterbegin", copyright);

  footer.append(footerContainer);

  return footer;
}
