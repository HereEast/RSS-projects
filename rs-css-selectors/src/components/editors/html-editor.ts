import { EditorParams } from "../../types/types";
import { createEditor } from "./editor-template";

// HTML
export function createHTMLEditor(): HTMLElement {
  const content = "<div class='content__container'></div>";

  const params: EditorParams = {
    classNames: ["editor", "editor--html"],
    title: "HTML View",
    fileName: "playground.html",
    editorContent: content,
  };

  const htmlEditor = createEditor(params);
  return htmlEditor;
}
