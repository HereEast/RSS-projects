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
export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type NewsData = Pick<NewsResponse, "articles">;
export type NewsArray = NewsData["articles"];

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
export type SourcesResponse = {
  status: string;
  sources: Source[];
};

export type SourcesData = Exclude<SourcesResponse, "status">;
export type SourcesArray = SourcesData["sources"];

// HTTP
export type Options = {
  [key: string]: string;
};

export type RespObject = {
  endpoint: string;
  options?: Options;
};
