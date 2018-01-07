import {Map, List} from 'immutable';
import calcGridSize from '../Initialization/calcGridSize';

export const fontSize = 18

export const characterStyle = {
    fontFamily: 'Courier New',
    fontSize: fontSize + 'px',
    lineHeight: '100%',
    color: 'LightGrey'
}

const {gridHeight, gridWidth, charWidth} = calcGridSize()

export const initialCharacter = Map({
    character: '.',
    key: '',
    style: characterStyle,
})

console.log('gridHeight: ' + gridHeight + ' gridWidth: ' + gridWidth)
const gridTemplateColumns = 'repeat(' + String(gridWidth) + ', 1fr)';
const gridTemplateRows = 'repeat(' + String(gridHeight) + ', 1fr)';

const gridStyle = {
    display: 'grid',
    gridTemplateColumns,
    gridTemplateRows,
    justifyItems: 'stretch',
    gridAutoFlow: 'row',
    border: '3px solid red',
    backgroundColor: 'white'
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

//const debug = INITIAL_STATE.toJS();

export default INITIAL_STATE;