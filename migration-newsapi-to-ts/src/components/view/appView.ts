import News from "./news/news";
import Sources from "./sources/sources";
import { NewsData, SourcesData } from "../../types";

interface IRenderNews {
  drawNews(data: NewsData): void;
  drawSources(data: SourcesData): void;
}

// Viewer
interface IViewer extends IRenderNews {
  readonly news: News;
  readonly sources: Sources;
}

// Class
export class AppView implements IViewer {
  readonly news: News;
  readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: NewsData): void {
    const values: NewsData["articles"] = data?.articles ? data.articles : [];
    this.news.draw(values);
  }

  drawSources(data: SourcesData): void {
    const values: SourcesData["sources"] = data?.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
