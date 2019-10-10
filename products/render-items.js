const emptyCart = [];
export const CART_KEY = 'cart';

export const getById = (id, items) => {
    let matchingItem;
    items.forEach = (item => {
     
        if (item.id === id) {
            matchingItem = item;
        }
    });

    return matchingItem;

};

export const increaseCartItemsById = (id, cart) => {
    let foundAMatch = false;
    cart.forEach(order => {
        if (order.id === id) {
            order.quantity++;
            foundAMatch = true;  
        }
    });

    if (foundAMatch) {
        return;
    } else {
        const newItem = {
            id: id,
            quantity: 1,
        };
        cart.push(newItem);
    }
};

const startEmptyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);

    localStorage.setItem('cart', serializedCart);
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

const setCart = (storedCart) => {

    const serializedNewCart = JSON.stringify(storedCart);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

export default (item) => {
    
    const itemElement = document.createElement('li');
    itemElement.classname = `${item.category} item-box`;
    itemElement.title = item.description;

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    itemElement.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + item.image;
    img.alt = item.name + 'image';
    itemElement.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const jpy = '¥' + item.price.toFixed(0);
    p.textContent = jpy;

    const button = document.createElement('button');

    button.textContent = 'Buy';
    button.value = item.id;
    button.addEventListener('click', () => {
        let storedCart = getCart();
        if (!storedCart) {
            startEmptyCart();
            storedCart = getCart();
        }
        
        increaseCartItemsById(item.id, storedCart);
    
        setCart(storedCart);
    });

    p.appendChild(button);

    itemElement.appendChild(p);

    return itemElement;
};