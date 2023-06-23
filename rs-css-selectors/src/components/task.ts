import { createElement } from "../utils/element";

// Task
export function createTaskBlock(): HTMLElement {
  const taskBlock = createElement("div", ["game__block", "block__task"]);

  const content = `
    <h2 class="task__text">Here goes the task...</h2>
    <div class="task__graphics">
      <div class="graphics__container"></div>
    </div>
  `;

  taskBlock.insertAdjacentHTML("afterbegin", content);

  return taskBlock;
}
