import React from 'react'

//This component represents a single ASCII character
//It is effectively like a pixel on the canvas

export default const Character = ({character, key, style, onMouseMove}) => (
    <div key={key} style={style} onMouseMove={onMouseMove}>
        {this.props.character}
    </div>
)