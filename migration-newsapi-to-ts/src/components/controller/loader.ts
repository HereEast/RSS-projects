import { ILoader } from "../../types/interfaces";
import { NewsData, SourcesData, Options, RespObject } from "../../types/types";

class Loader implements ILoader {
  baseLink: string;
  options: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: RespObject,
    callback = (): void => {
      console.error("No callback for GET response");
    }
  ): void {
    this.load("GET", endpoint, callback, options || {});
  }

  errorHandler<T extends Response>(res: T): T {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        const message = `Sorry, but there is ${res.status} error: ${res.statusText}`;
        console.log(message);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions: Options = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: string,
    endpoint: string,
    callback: (data: NewsData | SourcesData | null) => void,
    options: Options
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: NewsData | SourcesData | null) => callback(data))
      .catch((err: string | null) => console.error(err));
  }
}

export default Loader;
