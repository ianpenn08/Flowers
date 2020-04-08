import { Flower } from "./flower.js";
import { useFlower } from "./flowerProvider.js";

const contentTarget = document.querySelector(".flowerContainer")

const allFlowers = useFlower()

const render = () => {
    contentTarget.innerHTML = allFlowers.map(currentFlowerObject)

        return Flower(currentFlowerObject)

    
}

export const FlowerList = () => {
    render()
}
export default FlowerList