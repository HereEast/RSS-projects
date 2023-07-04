import { createElement } from "../utils/create-element";

export function createFooter(): HTMLElement {
  const footer = createElement("footer", ["footer", "content-width"]);

  const linkRS = "https://rs.school/";
  const linkGH = "https://github.com/HereEast";

  const footerContainer = `
    <div class="footer__container">
      <div class="footer__copy">
        <span>2023, 
          <a class="footer__link" href="${linkRS}" target="_blank">RS School</a> — 
        </span> 
        <span>RS CSS Selectors</span>
      </div>
      <a class="footer__link" href="${linkGH}" target="_blank">Here East</a>
    </div>
  `;

  footer.insertAdjacentHTML("afterbegin", footerContainer);

  return footer;
}
