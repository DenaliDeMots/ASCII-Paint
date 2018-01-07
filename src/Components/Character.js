import React from 'react'

//This component represents a single ASCII character
//It is effectively like a pixel on the canvas

const Character = ({character, style, onMouseMove}) => (
    <div style={style} onMouseMove={onMouseMove}>
        {character}
    </div>
)

export default Character;