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

export type Data = Array<Article>;

export interface IRenderNews {
  draw(data: Data): void;
}
