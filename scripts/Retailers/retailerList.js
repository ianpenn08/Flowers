import { Retailer } from "./retailer.js"
import { useRetailers } from "./retailerProvider.js"
import { useDistributors } from "../../Distributors/distributorProvider.js"
import { usedistributeNurseries } from "../../Distributors/distributorNurseryProvider.js"
import { useNurseries } from "../Nurseries/nurseryProvider.js"
import { usenurseryFlowers } from "../Nurseries/nurseryFlowerProvider.js"
import { useFlower } from "../flowerProvider.js"



const contentTarget = document.querySelector(".retailerContainer")


const render = (allRetailers) => {
    const distributors = useDistributors()
    const distributeNurseries = usedistributeNurseries()
    const nurseries = useNurseries()
    const nurseryFlowers = usenurseryFlowers()
    const flowers = useFlower()

    contentTarget.innerHTML = allRetailers.map(
        (retailerObject) => {

            const foundDistributor = distributors.find(
                (distributor) => {
                    return distributor.id === retailerObject.distributorId
                }
            )
            const distributorNurseryRelationships = distributeNurseries.filter(
                (distributorNursery) => {
                    return foundDistributor.id === distributorNursery.distributorId
                }
            )
            const foundNurseries = distributorNurseryRelationships.map(
                distributeNurseries =>  nurseries.find(nursery => distributeNurseries.nursery.Id === nursery.Id))
                
           const foundFlowers = foundNurseries.map(foundNursery => {
            const nurseryFlowerRelationships = nurseryFlowers.filter(nurseryFlower => foundNursery.id === nurseryFlower.nurseryId)
            const flowersFromFoundNursery = nurseryFlowerRelationships.map(nurseryFlower => flowers.find(flower => nurseryFlower.flowerId = flower.id))
            return flowersFromFoundNursery
           })     
        return Retailer(retailerObject, foundDistributor, distributorNurseryRelationships, foundNurseries, foundFlowers)

    }).join("")
}
export const RetailerList = () => {
    const allRetailers = useRetailers()
    render(allRetailers)
}