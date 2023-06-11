import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";
import AppController from "../components/controller/controller";
import AppView from "../components/view/appView";

import { NewsData, SourcesData, Options, RespObject } from "./types";

// RENDER DATA
export interface IRenderData {
  draw(data: NewsData["articles"] | SourcesData["sources"]): void;
}

// APP VIEWER
export interface IAppView {
  readonly news: News;
  readonly sources: Sources;
  drawNews(data: NewsData): void;
  drawSources(data: SourcesData): void;
}

// LOADER
export interface ILoader {
  baseLink: string;
  options: Options;

  getResp({ endpoint, options }: RespObject, callback: () => void): void;
  errorHandler<T extends Response>(res: T): T;
  makeUrl(options: Options, endpoint: string): string;
  load(
    method: string,
    endpoint: string,
    callback: (data: NewsData | SourcesData | null) => void,
    options: Options
  ): void;
}

// CONTROLLER
export interface IController {
  getSources(callback: () => void): void;
  getNews(e: Event, callback: () => void): void;
}

// APP
export interface IApp {
  controller: AppController;
  view: AppView;
  start: () => void;
}
