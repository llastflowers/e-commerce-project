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

    const jpy = '¥' + item.price.toFixed(2);
    p.textContent = jpy;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = item.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderItems;