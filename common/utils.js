export const makePrettyCurrency = (number) => 
    number
        .toLocaleString(
            'en-US', 
            {
                style: 'currency', 
                currency: 'JPY', 
            });

export const findById = (items, id) => {

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
};

export const calcLineTotal = (quantity, price) => {
    const amount = quantity * price;
    return (amount);
};

export const calcOrderTotal = (cart, items) => {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const item = findById(items, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, item.price);
        orderTotal += lineTotal;
    }

    return (orderTotal);
};