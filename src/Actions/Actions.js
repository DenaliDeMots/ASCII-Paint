
//TODO deep freeze the actions object
export const actions = {
    drawMovement,
    startDrawing,
    stopDrawing
}

export const DRAW_MOVEMENT = 'DRAW_MOVEMENT';
export const START_DRAWING = 'START_DRAWING';
export const STOP_DRAWING = 'STOP_DRAWING';


function drawMovement (newMousePosition, character) {
    return {
        type: DRAW_MOVEMENT,
        newMousePosition,
        character
    }
}

function startDrawing (mousePosition) {
    return {
        type: START_DRAWING,
        mousePosition
    }
}

const stopDrawing = {
    type: STOP_DRAWING
}