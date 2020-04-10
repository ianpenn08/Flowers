import { Retailer } from "./retailer.js"
import { useRetailers } from "./retailerProvider.js"
import { useDistributors } from "../../Distributors/distributorProvider.js"



const contentTarget = document.querySelector(".retailerContainer")


const render = (allRetailers) => {
    const distributors = useDistributors()

    contentTarget.innerHTML = allRetailers.map(
        (retailerObject) => {

            const foundDistributor = distributors.find(
                (distributor) => {
                    return distributor.id === retailerObject.distributorId
                }
            )
        return Retailer(retailerObject, foundDistributor)

    }).join("")
}
export const RetailerList = () => {
    const allRetailers = useRetailers()
    render(allRetailers)
}