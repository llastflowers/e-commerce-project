const emptyCart = [{ id: 'pokeball', quantity: 1 }];
export const CART_KEY = 'cart';

export const getById = (id, items) => {
    let matchingItem;

    items.forEach(item => {
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

function renderItems(item) {
    const li = document.createElement('li');
    li.classname = item.category;
    li.title = item.description;

    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + item.image;
    img.alt = item.name + ' image';
    li.appendChild(img);

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
    
        let itemIncrease = getById(item.id, storedCart);
        itemIncrease && itemIncrease.quantity++;
    
        setCart(storedCart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderItems;