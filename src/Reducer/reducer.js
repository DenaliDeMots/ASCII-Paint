//import {Map, List} from 'immutable';

import INITIAL_STATE from './initialState';
import updateCharacters from './updateCharacters';
import {
    DRAW_MOVEMENT,
    START_DRAWING,
    STOP_DRAWING
} from '../Actions/actions';


export default function reducer (previousState = INITIAL_STATE, action) {
    switch (action.type) {
        case DRAW_MOVEMENT:
            return updateCharacters(previousState, action.newMousePosition, action.character);
        
        case START_DRAWING:
            return previousState.withMutations(map => {
                map.set('isDrawing', true).set('mousePosition', action.mousePosition)
            });
        
        case STOP_DRAWING:
            return previousState.set('isDrawing', false);

        default:
            return previousState;
    }
}