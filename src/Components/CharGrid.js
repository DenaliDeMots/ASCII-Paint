import React from 'react';

import Character from './CharacterContainer';

//This component represents a grid of character elements
//It is the drawing canvas

const CharGrid = ({width, height, style}) => (
    <div style={style}>
        {makeGrid(width, height)}
    </div>
)

export default CharGrid