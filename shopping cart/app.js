import renderTableRow from './render-table-row.js';
import items, { cart } from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';
           
const tableElement = document.querySelector('tbody');

let cartTotal = 0;
cart.forEach(itemOrder => {
    items.forEach(item => {
        let itemTotal;

        if (item.id === itemOrder.id) {
            const row = renderTableRow(item, itemOrder);

            tableElement.appendChild(row);

            itemTotal = item.price * itemOrder.quantity;

            cartTotal = cartTotal + itemTotal;
        }
    });
  
    const totalCell = document.getElementById('order-total-cell');

    totalCell.textContent = makePrettyCurrency(cartTotal);
 
});