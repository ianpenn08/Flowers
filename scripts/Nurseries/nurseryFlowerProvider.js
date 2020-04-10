let nurseryFlowers = []

export const usenurseryFlowers = () => nurseryFlowers.slice()

export const getnurseryFlowers = () => fetch("http://localhost:8088/nurseryFlowers")
    .then(res => res.json())
    .then(data => nurseryFlowers = data)