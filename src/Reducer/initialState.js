import {Map, List} from 'immutable';

export const characterStyle = {
    
}

export const initialCharacter = Map({
    character: '+',
    key: '',
    style: characterStyle
})

const debug2 = initialCharacter.toJS();

const gridHeight = 50;
const gridWidth = 50;
const gridTemplateColumns = 'repeat(' + String(gridWidth) + ', 1fr)';
const gridTemplateRows = 'repeat(' + String(gridHeight) + ', 1fr)';

const gridStyle = {
    display: 'grid',
    gridTemplateColumns,
    gridTemplateRows,
    justifyItems: 'stretch',
    gridAutoFlow: 'row'
}

export function makeGrid(width, height) {
    const grid = [];
    for (let i = 0; i < height; i++) {
        let row = makeRow(width);
        row = row.map((char) => {
            return char.set("key", char.get('key') + String(i) + 'Y');
        })
        grid.push(List(row));
    }
    return List(grid)
}

function makeRow (width) {
    let row = [];
    let character;
    for (let i = 0; i < width; i++) {
        character = initialCharacter.set('key', String(i) + 'X');
        row.push(character);
    }
    return row;
}

const initialPalletSettings = Map();

const INITIAL_STATE = Map({
    isDrawing: false,
    //mouseDirection: 0,
    mousePosition: Map({
        x: 0,
        y: 0
    }),
    //gridHeight,
    //gridWidth,
    characterGrid: makeGrid(gridWidth, gridHeight),
    gridStyle,
    palletSettings: initialPalletSettings 
})

const debug = INITIAL_STATE.toJS();

export default INITIAL_STATE;