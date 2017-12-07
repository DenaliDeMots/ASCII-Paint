import React from 'react'

//This component represents a single ASCII character
//It is effectively like a pixel on the canvas

export class Character extends React.Component {
    render(){
        return (
            <div>
                {this.props.char}
            </div>
        )
    }
}