import { createElement } from "../utils/element";

export function createFooter(): HTMLElement {
  const footer = createElement("footer", ["footer", "content-width"]);

  const linkRS = "https://rs.school/";
  const linkGH = "https://github.com/HereEast";

  const footerContent = `
    <div class="footer__container">
      <span>2023, <a href="${linkRS}" target="_blank">RS School</a> — RS CSS Selectors</span>
      <a href="${linkGH}" target="_blank">Here East</a>
    </div>
  `;

  footer.insertAdjacentHTML("afterbegin", footerContent);

  return footer;
}
