//import {is} from 'immutable';

function updateCharacters (state, newMousePosition, character) {
    //calculate the type of character to update based on the
    //direction of the mouse movement and the pallet properties
    const direction = getMouseDirection(state.mousePosition, newMousePosition);
    const asciiChar = getAsciiCharacter(direction);
    const updatedChar = character.set('character', asciiChar)
    //TODO update char based on current pallet settings
    const newGrid = findAndUpdateCharacter(character, updatedChar, state.get('characterGrid'));
    const newState = state.set('characterGrid', newGrid);

    return newState; //Stub value
}

function getMouseDirection (previousPosition, currentPosition) {
    //find the mouse movement direction
    const direction = undefined;
    return direction;
}

function getAsciiCharacter(direction) {
    //select the ascii characterbased on movement direction
    const asciiCharacter = undefined;
    return asciiCharacter;
}

function findAndUpdateCharacter (character, newChar, characterGrid) {
    return characterGrid.map((row) => {
        return row.map((char) => {
            if(char === character){
                return newChar;
            } else {
                return char
            }
        })
    })
}

export default updateCharacters;