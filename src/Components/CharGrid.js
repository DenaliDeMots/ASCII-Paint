import React from 'react';

import Character from './Character';

//This component represents a grid of character elements
//It is the drawing canvas

const CharGrid = ({grid, style, mouseMoveEvent}) => (
    <div style={style}>
        {renderGrid(grid)}
    </div>
)

//Convert the List of Lists of Character Maps to an array of <div>s of <Character>s
function renderGrid (gridList) {
    return gridList.map((rowList) => {
        return (
            <div>
                {rowList.map((character) => {
                    return (
                        <Character
                            key={character.get('key')}
                            style={character.get('style')} 
                            character={character.get('character')}
                            onMouseMove={mouseMoveEvent(character)}
                        />
                    )
                })}
            </div>
        )
    })
}

export default CharGrid