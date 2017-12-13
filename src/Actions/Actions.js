
//TODO deep freeze the actions object
const actions = {
    drawMovement
}

function drawMovement (newMousePosition, character) {
    return {
        type: 'DRAW_MOVEMENT',
        newMousePosition,
        character
    }
}

export default actions;