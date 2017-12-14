import React from 'react';

import Character from './Character';

//This component represents a grid of character elements
//It is the drawing canvas

const CharGrid = ({grid, style, mouseMoveEvent}) => (
    <div style={style} onMouseEnter={mouseEnterEvent} onMouseExit={mouseExitEvent}>
        {renderGrid(grid)}
    </div>
)

//Convert the List of Lists of Character Maps to a flattened array of <Character>s
//this will fill the grid cells with gridAutoFlow CSS property
function renderGrid (gridList) {
    return gridList.flatMap((rowList) => {
        return rowList.map((character) => {
            return (
                <Character
                    key={character.get('key')}
                    style={character.get('style')} 
                    character={character.get('character')}
                    onMouseMove={mouseMoveEvent(character)}
                />
            )
        })
    })
}

export default CharGrid