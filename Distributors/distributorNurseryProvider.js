let distributeNurseries = []

export const usedistributeNurseries = () => distributeNurseries.slice()

export const getdistributeNurseries = () => fetch("http://localhost:8088/distributeNurseries")
    .then(res => res.json())
    .then(data => distributeNurseries = data)