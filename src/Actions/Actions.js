import {Map} from 'immutable';

//TODO deep freeze the actions object

export const DRAW_MOVEMENT = 'DRAW_MOVEMENT';
export const START_DRAWING = 'START_DRAWING';
export const STOP_DRAWING = 'STOP_DRAWING';


function drawMovement (position, character) {
    const newMousePosition = Map(position)
    return {
        type: DRAW_MOVEMENT,
        newMousePosition,
        character
    }
}

function startDrawing (position) {
    const mousePosition = Map(position)
    return {
        type: START_DRAWING,
        mousePosition
    }
}

const stopDrawing = {
    type: STOP_DRAWING
}

export const actions = {
    drawMovement,
    startDrawing,
    stopDrawing
}