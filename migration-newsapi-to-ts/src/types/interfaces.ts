import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";

import { Data, Options, RespObject, NewsArray, SourcesArray } from "./types";

// RENDER DATA
export interface IDrawData {
  draw(data: NewsArray | SourcesArray): void;
}

// APP VIEWER
export interface IAppView {
  readonly news: News;
  readonly sources: Sources;

  drawNews(data: Data): void;
  drawSources(data: Data): void;
}

// LOADER
export interface ILoader {
  baseLink: string;
  options: Options;

  getResp({ endpoint, options }: RespObject, callback: (data: Data) => void): void;
  errorHandler<T extends Response>(res: T): T;
  makeUrl(options: Options, endpoint: string): string;
  load(method: string, endpoint: string, callback: (data: Data) => void, options: Options): void;
}

// CONTROLLER
export interface IController extends ILoader {
  getSources(callback: (data: Data) => void): void;
  getNews(e: Event, callback: (data: Data) => void): void;
}

// APP
export interface IApp {
  start: () => void;
}
