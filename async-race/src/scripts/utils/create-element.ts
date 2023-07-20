export function createElement(tag: string, classes?: string[], text?: string): HTMLElement {
  const element = document.createElement(tag);

  if (classes?.length) {
    const classList = classes.map((el) => el.slice(1));
    element.classList.add(...classList);
  }

  if (text) element.textContent = text;

  return element;
}
