export const Retailer = (retailerObject, distributorObject) => {
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
        <section class="distributor__name">
        <header>
            <h2>Distributor: ${distributorObject.name}</h2>
        </header>
            <div>Address: ${distributorObject.address} </div>
            <div>City: ${distributorObject.city} </div>
            <div>State: ${distributorObject.state} </div>
        </section>
    </div>
    `
}