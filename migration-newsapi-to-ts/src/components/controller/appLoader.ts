import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://rss-news-api.onrender.com/", {
      apiKey: "75c1cc08fa9141c3a35d0fc4d548f8d1",
    });
  }
}

export default AppLoader;
