import { FlowerList } from "./flowerList.js";
import { getFlowers } from "./flowerProvider.js";

getFlowers()
.then(FlowerList)