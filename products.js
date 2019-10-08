import items from './items.js';
import renderItems from './render-items.js';

const list = document.getElementById('items');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const dom = renderItems(item);
    list.appendChild(dom);
}