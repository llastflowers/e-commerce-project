// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderItems from '../render-items.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
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
    const dom = renderItems(pokeball);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
