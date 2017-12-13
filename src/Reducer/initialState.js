import {Map, List} from 'immutable';

export let initialState;

const INITIAL_STATE = Map({
    mouseDirection: 0,
    mousePosition: Map({
        x: 0,
        y: 0
    }),
    //gridHeight,
    //gridWidth,
    characterGrid: makeGrid(gridWidth, gridHeight),
    palletSettings: initialPalletSettings; 
})

initialCharacter = Map({
    character: '+',
    key: '',
    style: Map()
})

const gridHeight = 250;
const gridWidth = 250;

function makeGrid(width, height) {
    const grid = [];
    for (let i = 0; i < height; i++) {
        let row = makeRow(width);
        row = row.map((char) => {
            return char.set("key", char.get('key') + toString(i) + 'Y');
        })
        grid.push(List(row));
    }
    return List(grid)
}

function makeRow (width) {
    let row = [];
    let character;
    for (let i = 0; i < width; i++) {
        character = initialCharacter.set('key', toString(i) + 'X');
        row.push(character);
    }
    return row;
}

initialPalletSettings = Map();

export default INITIAL_STATE;