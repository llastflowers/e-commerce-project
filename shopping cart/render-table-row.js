import { makePrettyCurrency } from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (item, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * item.price;
    const prettyPrice = makePrettyCurrency(item.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(item.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};