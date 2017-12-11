
//TODO deep freeze the actions object
export default const actions = {
    drawMovement
}

const function drawMovement (newMousePosition) {
    return {
        type: 'DRAW_MOVEMENT',
        newMousePosition
    }
}