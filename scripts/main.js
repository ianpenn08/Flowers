import { FlowerList } from "./flowerList.js";
import { getFlowers } from "./flowerProvider.js";
import { getRetailers } from "./Retailers/retailerProvider.js";
import { RetailerList } from "./Retailers/retailerList.js";
import { getDistributors } from "../Distributors/distributorProvider.js";


getFlowers()
.then(FlowerList)

getRetailers()
.then(getDistributors)
.then(RetailerList)