import renderTableRow from './render-table-row.js';
import items from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';
import { CART_KEY } from '../products/render-items.js';
           
const tableElement = document.querySelector('tbody');
// const orderTotalCell = document.getElementById('order-total-cell');
// const buyButton = document.getElementById('buy-button');

export const getById = (id, items) => {
    let matchingItem;

    items.forEach(item => {
        if (item.id === id) {
            matchingItem = item;
        }
    });

    return matchingItem;   
};

const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (cart, items) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderItem = getById(order.id, items);
        const lineTotal = getLineTotal(order, orderItem);

        cartTotal = cartTotal + lineTotal;
    });

    return cartTotal;

};

const addRow = (itemOrder, items) => {
    const orderItem = getById(itemOrder.id, items);
    const row = renderTableRow(orderItem, itemOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, items) => {
    cart.forEach(itemOrder => {
        addRow(itemOrder, items);
    });
};

const buildTotalCost = (cart, items) => {
    const totalCost = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, items);
    
    totalCost.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, items) => {
    buildTotalCost(cart, items);
    addRows(cart, items);
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));

buildTable(javascriptReadableCart, items);

for (let i = 0; i < items.lgenth; i++) {
    if (items[i].id === itemOrder.id) {
        const row = renderTableRow(items[i, itemOrder);
        
        tableElement.appendChild(row);
    }
}

// const totalCost = calcTotalCost(cart, items);
// orderTotalCell.textContent = toJPY(totalCost);

// if (cart.length === 0) {
//     buyButton.disabled = true;
// }
// else {
//     buyButton.addEventListener('click', () => {
//         localStorage.removeItem('CART_KEY');
//         alert('Purchase complete' + JSON.stringyify(cart, true, 2));
//         window.location = 'index.html';
//     });
// }