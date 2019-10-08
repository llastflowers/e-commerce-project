// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderItems from '../products/render-items.js';
import renderTableRow from '../shopping cart/render-table-row.js';

const test = QUnit.test;

test('renders items', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pokeball = {
        id: 'pokeball',
        name: 'PokéBall',
        image: '../assets/pokeball.png',
        description: 'A ball used to catch Pokémon.',
        category: 'ball',
        price: 200
    };

    const expected = '<li title="A ball used to catch Pokémon."><h3>PokéBall</h3><img src="../assets/../assets/pokeball.png" alt="PokéBall image"><p class="price">¥200<button value="undefined">Buy</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const itemElementLi = renderItems(pokeball);
    const htmlLi = itemElementLi.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(htmlLi, expected);
});

test('renders a table row', function(assert) {
    //Arrange
    const pokeball = {
        id: 'pokeball',
        name: 'PokéBall',
        image: '../assets/pokeball.png',
        description: 'A ball used to catch Pokémon.',
        category: 'ball',
        price: 200
    };
    
    const pokeballOrder = {
        id: 'pokeball',
        quantity: 4,
    };

    const expected = '<tr><td>PokéBall</td><td>4</td><td>¥200</td><td>¥800</td></tr>';
    //Act 
    const itemElementTr = renderTableRow(pokeball, pokeballOrder);
    const htmlTr = itemElementTr.outerHTML;
    // Call the function you're testing and set the result to a const
     //Assert
    // Make assertions about what is expected valid result
    assert.equal(htmlTr, expected);
});
