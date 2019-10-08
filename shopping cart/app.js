import { renderTableRow } from './render-table-row';
import items, { cart } from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';

const tableElement = document.querySelector('tbody');

cart.forEach(itemOrder => {
    items.forEach(item => {
        let itemTotal;

        // if (item.id === itemOrder.id) {}...?
    });
    // store the order id in a readable variable
    const itemIdFromOrder = itemOrder.id;
    
    // loop thru the item array to find the item that matches the item of this order
    for (let i = 0; i < items.length; i++) {
        // if the id of the item matches the id of the order . . .
        if (items[i].id === itemIdFromOrder) {
            // go ahead and render the Table Row
            const row = renderTableRow(items[i], itemOrder);

            tableElement.appendChild(row);
        }
    }
 
});