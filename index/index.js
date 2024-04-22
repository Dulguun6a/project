function showDetails(item) {
    const itemDetails = document.getElementById('item-details');
    let detailsHTML = '';

    switch (item) {

        case 'Latte':
            detailsHTML = '<h3>Latte</h3><p>Espresso with a generous amount of steamed milk and a touch of foam.</p><p>Price: $4.49</p>' ;
            break;
        case 'americano':
            detailsHTML = '<h3>Americano</h3><p>A diluted espresso with hot water, creating a bold and smooth coffee.</p><p>Price: $2.99</p>';
            break;
        case 'mocha':
            detailsHTML = '<h3>Mocha</h3><p>Espresso with steamed milk and chocolate, topped with whipped cream.</p><p>Price: $4.99</p>';
            break;
        case 'Frappuccino':
            detailsHTML = '<h3>Frappuccino</h3><p>An iced beverage that has been blended to produce a tasty, refreshing drink.</p><p>Price: $4.99</p>';
            break;
        case 'Bubble Tea':
            detailsHTML = '<h3>Bubble Tea</h3><p>A cold, frothy drink made with a tea base shaken with flavors, sweeteners and milk with tapioca pearls at the base of the drink.</p><p>Price: $5.99</p>';
            break;
        case 'Vanilla Milkshake':
            detailsHTML = '<h3>Vanilla Milkshake</h3><p>Blended cold dairy beverage with vanilla ice cream, milk, and vanilla extract.</p><p>Price: $5.49</p>';
            break;
        case 'Cheesecake':
            detailsHTML = '<h3>Cheesecake</h3><p>A dessert consisting of a thick, creamy filling of cheese, eggs, and sugar over a thinner crust and topped with strawberries.</p><p>Price: $6.49</p>';
            break;
        case 'Chocolate':
            detailsHTML = '<h3>Chocolate Chip Cookie</h3><p>A sweet baked treat that is recognized by its butter flavor and the inclusion of chocolate chips.</p><p>Price: $1.99</p>';
            break;
        case 'Tiramisu':
            detailsHTML = '<h3>Tiramisu</h3><p>An elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso, mascarpone cheese, and cocoa powder.</p><p>Price: $6.49</p>';
            break;
        // Add details for more menu items as needed
        default:
            detailsHTML = '<p>Details not available.</p>';
    }

    itemDetails.innerHTML = detailsHTML;
}
let niit = document.getElementById('niit');
let Price = ' '; 
function latte(){
    const latte = 4.49; 
    let niit = niit + latte;
}
function americano(){
    const americano = 2.99; 
    let niit = niit + americano;
}
function mocha(){
    const mocha = 4.99; 
    let niit = niit + mocha;
}