import updateCharacters from './updateCharacters'
import {Map, List} from 'immutable';

export function reducer (previousState, action) {
    switch (action.type) {
        case 'DRAW_MOVEMENT':
            return updateCharacters(previousState, action)
    }
}

const INITIAL_STATE = Map({
    mouseDirection: 0,
    mousePosition: Map({
        x: 0,
        y: 0
    })
})