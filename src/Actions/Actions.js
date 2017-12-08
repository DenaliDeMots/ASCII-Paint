
//TODO deep freeze the actions object
export const actions = {
    drawMovement
}

const function drawMovement (newMousePosition) {
    return {
        type: 'DRAW_MOVEMENT',
        newMousePosition
    }
}