import Loader from "./loader";
import { ILoader } from "../../types/interfaces";

class AppLoader extends Loader implements Partial<ILoader> {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "8eb6726de49848bc9113f5d132c3d548",
    });
  }
}

export default AppLoader;
