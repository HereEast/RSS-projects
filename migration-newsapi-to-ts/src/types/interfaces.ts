import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";

import { NewsData, SourcesData } from "./types";

export interface IRenderData {
  draw(data: NewsData["articles"] | SourcesData["sources"]): void;
}

// Viewer
export interface IViewer {
  readonly news: News;
  readonly sources: Sources;
  drawNews(data: NewsData): void;
  drawSources(data: SourcesData): void;
}
