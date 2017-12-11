import updateCharacters from './updateCharacters'
import {Map, List} from 'immutable';

export default function reducer (previousState = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DRAW_MOVEMENT':
            return updateCharacters(previousState, action);
        
        default:
            return previousState;
    }
}

const INITIAL_STATE = Map({
    mouseDirection: 0,
    mousePosition: Map({
        x: 0,
        y: 0
    })
})