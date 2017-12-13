//import {Map, List} from 'immutable';

import INITIAL_STATE from './initialState';
import updateCharacters from './updateCharacters';

export default function reducer (previousState = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DRAW_MOVEMENT':
            return updateCharacters(previousState, action.newMousePosition, action.character);
        
        default:
            return previousState;
    }
}