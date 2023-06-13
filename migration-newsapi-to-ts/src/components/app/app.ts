import AppController from "../controller/controller";
import { Selector } from "../../types/enums";
import { AppView } from "../view/appView";
import { IApp } from "../../types/interfaces";
import { Data } from "../../types/types";

class App implements Readonly<IApp> {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector(Selector.SourcesContainer) as HTMLElement | null;
    if (!sources) throw Error(`Can't find DOM element ${Selector.SourcesContainer}`);

    const sourcesTabs = sources.children as HTMLCollection;
    if (!sourcesTabs) throw Error(`Can't find children of ${Selector.SourcesContainer}`);

    sources.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement | null;
      const targetContainer = target?.closest(Selector.SourceItem) as HTMLElement | null;

      if (!target) throw Error("Can't find e.target element.");
      if (!targetContainer) throw Error(`Can't find tDOM element ${Selector.SourceItem}.`);

      [...sourcesTabs].forEach((tab: Element) => tab.classList.remove("active"));
      targetContainer.classList.add("active");

      this.controller.getNews(e, (data: Data) => this.view.drawNews(data));
    });

    this.controller.getSources((data: Data) => this.view.drawSources(data));
  }
}

export default App;
