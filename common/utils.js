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