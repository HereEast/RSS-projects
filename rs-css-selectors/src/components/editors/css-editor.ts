import { Button } from "../../types/enums";
import { EditorParams } from "../../types/types";
import { createEditor } from "./editor-template";

// CSS
export function createCSSEditor(): HTMLElement {
  const inputContainer = `
    <div class="input__container">
      <input type="text"></input>
      <button class="button button--check">${Button.Enter}</button>
    </div>
  `;

  const params: EditorParams = {
    classNames: ["editor", "editor--css"],
    title: "CSS Editor",
    fileName: "style.css",
    editorContent: inputContainer,
  };

  const cssEditor = createEditor(params);
  return cssEditor;
}
