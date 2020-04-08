import { Flower } from "./flower.js";
import { useFlower } from "./flowerProvider.js";

const contentTarget = document.querySelector(".flowerContainer")


const render = (allFlowers) => {
    contentTarget.innerHTML = allFlowers.map(
        (flowerObject) => {
            
     
        
            return Flower(flowerObject)

    }).join("")
}
export const FlowerList = () => {
    const allFlowers = useFlower()
    render(allFlowers)
}