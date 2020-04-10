export const Retailer = (retailerObject, distributorObject, nurseryObject, somethingObject, flowerObject) => {
    return `
    <div class="retailer">
        <section class="retailer__name">
        <header>
            <h2> ${retailerObject.name}</h2>
        </header>
            <div>Address: ${retailerObject.address} </div>
            <div>City: ${retailerObject.city} </div>
            <div>State: ${retailerObject.state} </div>
        </section>
        <section class="nursery__name">
        <header>
            <h2>Nursery: ${nurseryObject.name}</h2>
        </section>
        <section class="nursery__name">
        <header>
            <h2>Nursery: ${somethingObject.name}</h2>
        </section>
        <section class="nursery__name">
        <header>
            <h2>Flowers: ${flowerObject.name}</h2>
        </section>
    </div>
    `
}
// {/* <section class="distributor__name">
// <header>
//     <h2>Distributor: ${distributorObject.name}</h2>
// </header>
//     <div>Address: ${distributorObject.address} </div>
//     <div>City: ${distributorObject.city} </div>
//     <div>State: ${distributorObject.state} </div>
// </section> */}