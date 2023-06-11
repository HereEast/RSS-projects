// NEWS
export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

// { status, totalResults, articles: [{...}, {...}]}
type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type NewsData = Pick<NewsResponse, "articles">;

//
// SOURCES
export type Source = {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  url: string;
};

// { status, sources: [{...}, {...}]}
type SourcesResponse = {
  status: string;
  sources: Source[];
};

export type SourcesData = Exclude<SourcesResponse, "status">;

export interface IRenderData {
  draw(data: NewsData["articles"] | SourcesData["sources"]): void;
}
