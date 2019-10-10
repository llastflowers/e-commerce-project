import items from '..api.js';
import renderItems from './render-items.js';

const list = document.getElementById('items');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemElement = renderItems(item);
    list.appendChild(itemElement);
}