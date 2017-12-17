import {List, Map} from 'immutable';

import {makeGrid, initialCharacter, characterStyle} from './initialState';

test("the character key is generated correctly", () => {
    const firstUpdate  = initialCharacter.set('key', String(0) + 'X');
    expect(firstUpdate).toEqual(Map({
        character: '+',
        key: '0X',
        style: characterStyle
    }));

    const secondUpdate = firstUpdate.set('key', firstUpdate.get('key') + String(0) + 'Y');
    expect(secondUpdate).toEqual(Map({
        character: '+',
        key: '0X0Y',
        style: characterStyle
    }))
})

test("make grid builds a grid of character data", () => {
    const char1 = Map({
        character: '+',
        key: '0X0Y',
        style: characterStyle
    });
    const char2 = Map({
        character: '+',
        key: '1X0Y',
        style: characterStyle
    });
    const char3 = Map({
        character: '+',
        key: '0X1Y',
        style: characterStyle
    });
    const char4 = Map({
        character: '+',
        key: '1X1Y',
        style: characterStyle
    });
    const row1 = List([char1, char2]);
    const row2 = List([char3, char4]);

    const expectedGrid = List([row1, row2]);

    const result = expect(makeGrid(2, 2)).toEqual(expectedGrid)
})