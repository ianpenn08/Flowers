export const Retailer = (retailerObject) => {
    return `
    <section class="retailer">
    <h2> ${retailerObject.name}</h2>
    <div>Address: ${retailerObject.address} </div>
    <div>City: ${retailerObject.city} </div>
    <div>State: ${retailerObject.state} </div>
    </section>
    `
}