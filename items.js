const pokeball = {
    id: 'pokeball',
    name: 'PokéBall',
    image: 'http://placekitten.com/200/200',
    description: 'A ball used to catch Pokémon.',
    category: 'ball',
    price: 200,
    cost: 200
};

const potion = {
    id: 'potion',
    name: 'Potion',
    image: 'http://placekitten.com/200/200',
    description: 'Restores 20 HP.',
    category: 'medicine',
    price: 300,
    cost: 300
};

const escaperope = {
    id: 'escaperope',
    name: 'Escape Rope',
    image: 'http://placekitten.com/200/200',
    description: 'Teleports the player out of a cave or dungeon if the player cannot find the way out.',
    category: 'tool',
    price: 550,
    cost: 550
};

const antidote = {
    id: 'antidote',
    name: 'Antidote',
    image: 'http://placekitten.com/200/200',
    description: 'Heals the poisoning of a Pokémon.',
    category: 'medicine',
    price: 100,
    cost: 100
};

const burnheal = {
    id: 'burnheal',
    name: 'Burn Heal',
    image: './assets/burnheal.png',
    description: 'Heals a burn.',
    category: 'medicine',
    price: 250,
    cost: 250
};

const awakening = {
    id: 'awakening',
    name: 'Awakening',
    image: 'http://placekitten.com/200/200',
    description: 'Awakens a Pokémon from sleep.',
    category: 'medicine',
    price: 200,
    cost: 200
};

const parlyzheal = {
    id: 'parlyzheal',
    name: 'Parlyz Heal',
    image: 'http://placekitten.com/200/200',
    description: 'Heals paralysis.',
    category: 'medicine',
    price: 200,
    cost: 200
};

const items = [
    pokeball,
    potion,
    escaperope,
    antidote,
    burnheal,
    awakening,
    parlyzheal
];

export default items;