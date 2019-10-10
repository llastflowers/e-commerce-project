import items from '../api.js';
import renderItemElement from '../products/render-items.js';

const list = document.getElementById('items');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    const itemListElement = renderItemElement(item);
    
    list.appendChild(itemListElement);

}