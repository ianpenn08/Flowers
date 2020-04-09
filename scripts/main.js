import { FlowerList } from "./flowerList.js";
import { getFlowers } from "./flowerProvider.js";
import { getRetailers } from "./Retailers/retailerProvider.js";
import { RetailerList } from "./Retailers/retailerList.js";


getFlowers()
.then(FlowerList)

getRetailers()
.then(RetailerList)