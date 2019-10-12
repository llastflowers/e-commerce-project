import itemInventory from '../api.js';
import renderItemElement from '../products/render-items.js';

const list = document.getElementById('items');

for (let i = 0; i < itemInventory.length; i++) {
    const item = itemInventory[i];
    
    const itemListElement = renderItemElement(item);
    
    list.appendChild(itemListElement); 

}