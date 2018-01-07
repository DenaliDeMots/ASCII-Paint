//import {is} from 'immutable';

function updateCharacters (state, newMousePosition, character) {
    //calculate the type of character to update based on the
    //direction of the mouse movement and the pallet properties
    const direction = getMouseDirection(state.get('mousePosition'), newMousePosition);
    const asciiChar = getAsciiCharacter(direction);
    const updatedChar = character.withMutations(
        (char) => {
            const oldStyle = char.get('style')
            const newStyle = {...oldStyle, color: 'black'}
            char.set('character', asciiChar).set('style', newStyle)
        }
    )
    //TODO update char based on current pallet settings
    const newGrid = findAndUpdateCharacter(character, updatedChar, state.get('characterGrid'));
    const newState = state.withMutations((map) => {
        map.set('characterGrid', newGrid)
            .set('mousePosition', newMousePosition)
    })

    return newState; //Stub value
}

export function getMouseDirection (previousPosition, currentPosition) {
    //find the mouse movement direction
    const deltaX = currentPosition.get('x') - previousPosition.get('x');
    const deltaY = currentPosition.get('y') - previousPosition.get('y');
    //angle starting from the x axis going clockwise
    //i.e 45 degrees points to the lower right and 90 points straight down
    const direction = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return direction;
}

export function getAsciiCharacter(direction) {
    //select the ascii characterbased on movement direction

    if (isHorizontal(direction)){
        return '-'
    } else if (isVertical(direction)){
        return '|'
    } else if (isDiagonalLeft(direction)) {
        return '\\'
    } else if (isDiagonalRight(direction)){
        return '/'
    } else {
        return '0'
    }

    function isHorizontal (angle) {
        return (
          (angle < 22.5 || angle >= 337.5)
          ||
          (angle >= 157.5 && angle < 202.5 )
        )
      }
      
    function isVertical (angle) {
    return(
        (angle >= 67.5 && angle < 112.5)
        ||
        (angle >= 247.5 && angle < 292.5)
    )
    }
    
    function isDiagonalLeft (angle) {
    return (
        (angle >= 22.5 && angle < 67.5)
        ||
        (angle >= 202.5 && angle < 247.5)
    )
    }
    
    function isDiagonalRight (angle) {
    return (
        (angle >= 112.5 && angle < 157.5)
        ||
        (angle >= 292.5 && angle < 337.5)
    )
    }
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