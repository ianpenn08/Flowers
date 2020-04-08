let flowers = []

export const useFlower = () => flowers.slice()

export const getFlowers = () => fetch("http://localhost:8088/flowers")
    .then(res => res.json())
    .then(res => flowers = res)