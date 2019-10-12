import renderTableRow from './render-table-row.js';
import itemInventory from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';
import { getCart } from '../products/render-items.js';
           
const tableElement = document.querySelector('tbody');
const cartOrders = getCart();
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

const localStorageCart = localStorage.getItem('cart');
const parsedCartActualData = JSON.parse(localStorageCart);

buildTable(parsedCartActualData, itemInventory);

for (let i = 0; i < cartOrders.length; i++) {
    if (cartOrders[i].id === itemInventory.id) {
        const row = renderTableRow(itemInventory, cartOrders[i]);
        
        tableElement.appendChild(row);
    }
}

const buyButton = document.getElementById('buy-button');

if (cartOrders.length === 0) {
    buyButton.disabled = true;
}
else {
    buyButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        alert('Thanks for your purchase!' + JSON.stringify(cartOrders, true, 2));
        alert('Leaving Poké Mart...');
        window.location = '../';
    });
}