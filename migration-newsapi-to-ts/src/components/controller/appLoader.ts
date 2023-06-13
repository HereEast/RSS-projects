import Loader from "./loader";
import { ILoader } from "../../types/interfaces";

class AppLoader extends Loader implements Partial<ILoader> {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "75c1cc08fa9141c3a35d0fc4d548f8d1",
    });
  }
}

export default AppLoader;

// https://nodenews.herokuapp.com/
// https://newsapi.org/v2/
