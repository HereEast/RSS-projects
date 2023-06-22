// Task
import { createElement } from "../../utils/element";

// Task
export function createTaskBlock(): HTMLElement {
  const taskBlock = createElement("div", ["game__block", "block__task"]);
  const taskText = createElement("h2", ["task__text"], "Here goes the task...");
  const taskGraphics = createElement("div", ["task__graphics"]);
  const graphicsContainer = createElement("div", ["graphics__container"]);

  taskGraphics.append(graphicsContainer);
  taskBlock.append(taskText, taskGraphics);

  return taskBlock;
}
