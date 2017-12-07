import React from 'react';

import Character from './Character';

//This component represents a grid of character elements
//It is the drawing canvas

export class CharGrid extends React.Component {
    render() {
        return makeGrid(this.pros.numCharsWide, this.props.numCharsHeight, <Character/>);
    }
}

function makeGrid (numCharsWide, numCharsHeight, characterElement) {
    let newGrid = [];
    for (let i = 0; i < numCharsHeight; i++) {
        newGrid.push(charArray(numCharsWide, characterElement))
    }
}

function charArray (size, element) {
    let newArray = [];
    for (let i = 0; i < size; i++) {
        newArray.push(element)
    }
    return <div>{newArray}</div>;
}

