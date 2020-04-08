export const Flower = (flowerObject) => {
    return `
    <section class="flower">
    <h2> ${flowerObject.commonName}</h2>
    <div> ${flowerObject.color}
    </section>
    `
}