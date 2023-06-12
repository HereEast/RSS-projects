import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import { IApp } from "../../types/interfaces";
import { NewsData, SourcesData } from "../../types/types";

class App implements IApp {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector(".sources") as HTMLElement;

    sources.addEventListener("click", (e: Event) => {
      this.controller.getNews(e, (data: NewsData) => this.view.drawNews(data));
    });

    this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
  }
}

export default App;
