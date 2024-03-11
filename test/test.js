function showDetails(item) {
    const itemDetails = document.getElementById('item-details');
    let detailsHTML = '';

    switch (item) {
        case 'cappuccino':
            detailsHTML = '<h3>Cappuccino</h3><p>A classic espresso-based coffee with steamed milk foam.</p><p>Price: $3.99</p>';
            break;
        case 'BubbleTea':
            detailsHTML = '<h3>Bubble tea</h3><p>A flavored milk tea with tapioca pearls.</p><p>Price: $3.99</p>';
            break;
        case 'latte':
            detailsHTML = '<h3>Latte</h3><p>Espresso with a generous amount of steamed milk and a touch of foam.</p><p>Price: $4.49</p>';
            break;
        case 'americano':
            detailsHTML = '<h3>Americano</h3><p>A diluted espresso with hot water, creating a bold and smooth coffee.</p><p>Price: $2.99</p>';
            break;
        case 'mocha':
            detailsHTML = '<h3>Mocha</h3><p>Espresso with steamed milk and chocolate, topped with whipped cream.</p><p>Price: $4.99</p>';
            break;
        // Add details for more menu items as needed
        default:
            detailsHTML = '<p>Details not available.</p>';
    }

    itemDetails.innerHTML = detailsHTML;
}