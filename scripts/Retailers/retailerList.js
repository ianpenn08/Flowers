import { Retailer } from "./retailer.js"
import { useRetailers } from "./retailerProvider.js"


const contentTarget = document.querySelector(".retailerContainer")


const render = (allRetailers) => {
    contentTarget.innerHTML = allRetailers.map(
        (retailerObject) => {
            
     
        
            return Retailer(retailerObject)

    }).join("")
}
export const RetailerList = () => {
    const allRetailers = useRetailers()
    render(allRetailers)
}